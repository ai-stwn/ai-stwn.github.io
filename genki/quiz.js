// Genki Quiz Generator Logic

class GenkiQuiz {
    constructor() {
        this.selectedChapters = new Set();
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.answered = false;
        this.missedQuestions = [];
        
        this.init();
    }
    
    init() {
        this.renderChapterGrid();
        this.bindEvents();
    }
    
    renderChapterGrid() {
        const grid = document.getElementById('chapter-grid');
        grid.innerHTML = '';
        
        GENKI_DATA.chapters.forEach(chapter => {
            const btn = document.createElement('button');
            btn.className = 'chapter-btn';
            btn.dataset.id = chapter.id;
            btn.innerHTML = `Ch. ${chapter.id}`;
            btn.title = chapter.title;
            grid.appendChild(btn);
        });
        
        // Add "Select All" button
        const selectAllBtn = document.createElement('button');
        selectAllBtn.className = 'chapter-btn';
        selectAllBtn.id = 'select-all-btn';
        selectAllBtn.innerHTML = 'All';
        selectAllBtn.title = 'Select All Chapters';
        grid.appendChild(selectAllBtn);
    }
    
    bindEvents() {
        // Chapter selection
        document.getElementById('chapter-grid').addEventListener('click', (e) => {
            if (e.target.classList.contains('chapter-btn')) {
                if (e.target.id === 'select-all-btn') {
                    this.toggleSelectAll();
                } else {
                    this.toggleChapter(e.target);
                }
            }
        });
        
        // Start quiz
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
        
        // Next question
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        
        // Results buttons
        document.getElementById('retry-btn').addEventListener('click', () => this.retryQuiz());
        document.getElementById('new-quiz-btn').addEventListener('click', () => this.newQuiz());
        
        // Enter key for typing answers
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const submitBtn = document.getElementById('submit-answer-btn');
                if (submitBtn && !this.answered) {
                    this.checkTypedAnswer();
                } else if (this.answered) {
                    this.nextQuestion();
                }
            }
        });
    }
    
    toggleSelectAll() {
        const allBtns = document.querySelectorAll('.chapter-btn:not(#select-all-btn)');
        const selectAllBtn = document.getElementById('select-all-btn');
        
        if (this.selectedChapters.size === GENKI_DATA.chapters.length) {
            // Deselect all
            this.selectedChapters.clear();
            allBtns.forEach(btn => btn.classList.remove('selected'));
            selectAllBtn.classList.remove('selected');
        } else {
            // Select all
            GENKI_DATA.chapters.forEach(ch => this.selectedChapters.add(ch.id));
            allBtns.forEach(btn => btn.classList.add('selected'));
            selectAllBtn.classList.add('selected');
        }
        
        this.updateStartButton();
    }
    
    toggleChapter(btn) {
        const id = parseInt(btn.dataset.id);
        
        if (this.selectedChapters.has(id)) {
            this.selectedChapters.delete(id);
            btn.classList.remove('selected');
        } else {
            this.selectedChapters.add(id);
            btn.classList.add('selected');
        }
        
        // Update select all button
        const selectAllBtn = document.getElementById('select-all-btn');
        if (this.selectedChapters.size === GENKI_DATA.chapters.length) {
            selectAllBtn.classList.add('selected');
        } else {
            selectAllBtn.classList.remove('selected');
        }
        
        this.updateStartButton();
    }
    
    updateStartButton() {
        const btn = document.getElementById('start-btn');
        btn.disabled = this.selectedChapters.size === 0;
    }
    
    generateQuestions() {
        const quizType = document.getElementById('quiz-type').value;
        const questionCount = parseInt(document.getElementById('question-count').value);
        
        let pool = [];
        
        // Gather vocabulary and grammar from selected chapters
        this.selectedChapters.forEach(chapterId => {
            const chapter = GENKI_DATA.chapters.find(c => c.id === chapterId);
            if (!chapter) return;
            
            // Add vocabulary questions
            if (quizType === 'vocab-en' || quizType === 'vocab-jp' || quizType === 'vocab-reading' || quizType === 'mixed') {
                chapter.vocabulary.forEach(vocab => {
                    if (quizType === 'vocab-en' || quizType === 'mixed') {
                        pool.push({
                            type: 'vocab-en',
                            question: vocab.japanese,
                            questionReading: vocab.reading,
                            answer: vocab.english,
                            chapter: chapterId
                        });
                    }
                    if (quizType === 'vocab-jp' || quizType === 'mixed') {
                        pool.push({
                            type: 'vocab-jp',
                            question: vocab.english,
                            answer: vocab.japanese,
                            answerReading: vocab.reading,
                            chapter: chapterId
                        });
                    }
                    if ((quizType === 'vocab-reading' || quizType === 'mixed') && vocab.japanese !== vocab.reading) {
                        pool.push({
                            type: 'vocab-reading',
                            question: vocab.japanese,
                            answer: vocab.reading,
                            answerEnglish: vocab.english,
                            chapter: chapterId
                        });
                    }
                });
            }
            
            // Add grammar questions
            if (quizType === 'grammar' || quizType === 'mixed') {
                chapter.grammar.forEach(gram => {
                    pool.push({
                        type: 'grammar',
                        question: gram.example,
                        questionReading: gram.exampleReading,
                        answer: gram.exampleEnglish,
                        pattern: gram.pattern,
                        explanation: gram.explanation,
                        chapter: chapterId
                    });
                });
            }
        });
        
        // Shuffle and limit
        pool = this.shuffle(pool);
        this.questions = pool.slice(0, Math.min(questionCount, pool.length));
        
        // Generate wrong answers for multiple choice
        const answerType = document.getElementById('answer-type').value;
        if (answerType === 'multiple') {
            this.questions.forEach(q => {
                q.options = this.generateOptions(q, pool);
            });
        }
    }
    
    generateOptions(question, pool) {
        const options = [question.answer];
        const sameTypePool = pool.filter(p => p.type === question.type && p.answer !== question.answer);
        
        // Get 3 wrong answers
        const shuffled = this.shuffle([...sameTypePool]);
        for (let i = 0; i < Math.min(3, shuffled.length); i++) {
            if (!options.includes(shuffled[i].answer)) {
                options.push(shuffled[i].answer);
            }
        }
        
        // Fill with random if needed
        while (options.length < 4) {
            options.push('—');
        }
        
        return this.shuffle(options);
    }
    
    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    
    startQuiz() {
        this.generateQuestions();
        
        if (this.questions.length === 0) {
            alert('No questions available for selected options.');
            return;
        }
        
        this.currentQuestion = 0;
        this.score = 0;
        this.missedQuestions = [];
        
        document.getElementById('setup-area').style.display = 'none';
        document.getElementById('quiz-area').style.display = 'block';
        document.getElementById('results-area').style.display = 'none';
        
        this.showQuestion();
    }
    
    showQuestion() {
        const q = this.questions[this.currentQuestion];
        this.answered = false;
        
        // Update progress
        const progress = ((this.currentQuestion) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('question-counter').textContent = 
            `Question ${this.currentQuestion + 1} of ${this.questions.length}`;
        
        // Show question
        const questionText = document.getElementById('question-text');
        questionText.textContent = q.question;
        questionText.className = 'question-text' + (this.isJapanese(q.question) ? ' japanese' : '');
        
        // Show hint
        const hint = document.getElementById('question-hint');
        if (q.type === 'vocab-en' && q.questionReading && q.question !== q.questionReading) {
            hint.textContent = `(${q.questionReading})`;
        } else if (q.type === 'grammar') {
            hint.textContent = `Pattern: ${q.pattern}`;
        } else if (q.type === 'vocab-reading') {
            hint.textContent = `(${q.answerEnglish})`;
        } else {
            hint.textContent = '';
        }
        
        // Show answers
        const container = document.getElementById('answers-container');
        const answerType = document.getElementById('answer-type').value;
        
        if (answerType === 'multiple') {
            container.innerHTML = '<div class="answers" id="answers"></div>';
            const answersDiv = document.getElementById('answers');
            q.options.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.className = 'answer-btn';
                btn.textContent = opt;
                btn.addEventListener('click', () => this.checkAnswer(btn, opt));
                answersDiv.appendChild(btn);
            });
        } else {
            container.innerHTML = `
                <input type="text" class="input-answer" id="typed-answer" 
                       placeholder="Type your answer..." autocomplete="off">
                <button class="btn btn-primary" id="submit-answer-btn" style="width:100%;">Check Answer</button>
            `;
            document.getElementById('typed-answer').focus();
            document.getElementById('submit-answer-btn').addEventListener('click', () => this.checkTypedAnswer());
        }
        
        // Hide feedback and next button
        document.getElementById('feedback').className = 'feedback';
        document.getElementById('next-btn').style.display = 'none';
    }
    
    isJapanese(text) {
        return /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text);
    }
    
    checkAnswer(btn, selected) {
        if (this.answered) return;
        this.answered = true;
        
        const q = this.questions[this.currentQuestion];
        const correct = selected === q.answer;
        
        // Mark buttons
        document.querySelectorAll('.answer-btn').forEach(b => {
            b.classList.add('disabled');
            if (b.textContent === q.answer) {
                b.classList.add('correct');
            } else if (b === btn && !correct) {
                b.classList.add('incorrect');
            }
        });
        
        this.showFeedback(correct, q);
    }
    
    checkTypedAnswer() {
        if (this.answered) return;
        this.answered = true;
        
        const q = this.questions[this.currentQuestion];
        const input = document.getElementById('typed-answer');
        const typed = input.value.trim().toLowerCase();
        const answer = q.answer.toLowerCase();
        
        // For Japanese answers, also check reading
        let correct = typed === answer;
        if (!correct && q.answerReading) {
            correct = typed === q.answerReading.toLowerCase();
        }
        // Also accept without particles for some flexibility
        if (!correct) {
            const simplified = answer.replace(/[;,].*/g, '').trim();
            correct = typed === simplified;
        }
        
        input.classList.add(correct ? 'correct' : 'incorrect');
        input.disabled = true;
        document.getElementById('submit-answer-btn').disabled = true;
        
        this.showFeedback(correct, q);
    }
    
    showFeedback(correct, q) {
        if (correct) {
            this.score++;
        } else {
            this.missedQuestions.push(q);
        }
        
        const feedback = document.getElementById('feedback');
        feedback.className = 'feedback show ' + (correct ? 'correct' : 'incorrect');
        
        if (correct) {
            feedback.innerHTML = '✓ Correct!';
        } else {
            let correctAnswer = q.answer;
            if (q.answerReading && q.answer !== q.answerReading) {
                correctAnswer += ` (${q.answerReading})`;
            }
            feedback.innerHTML = `✗ The answer was: <strong>${correctAnswer}</strong>`;
        }
        
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('next-btn').focus();
    }
    
    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
        } else {
            this.showQuestion();
        }
    }
    
    showResults() {
        document.getElementById('quiz-area').style.display = 'none';
        document.getElementById('results-area').style.display = 'block';
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        
        // Score circle
        const circle = document.getElementById('score-circle');
        circle.className = 'score-circle';
        if (percentage < 60) circle.classList.add('low');
        else if (percentage < 80) circle.classList.add('medium');
        
        document.getElementById('score-number').textContent = `${this.score}/${this.questions.length}`;
        
        // Message
        let message;
        if (percentage === 100) message = '完璧！ Perfect score! 🎉';
        else if (percentage >= 90) message = 'すごい！ Excellent work! 🌟';
        else if (percentage >= 80) message = 'よくできました！ Great job! 👏';
        else if (percentage >= 70) message = 'いいですね！ Good effort! 💪';
        else if (percentage >= 60) message = 'まあまあ Keep practicing! 📚';
        else message = 'がんばって！ Don\'t give up! 💪';
        
        document.getElementById('results-message').textContent = message;
        
        // Breakdown
        const breakdown = document.getElementById('results-breakdown');
        if (this.missedQuestions.length > 0) {
            breakdown.innerHTML = '<h3>📝 Review these:</h3>';
            this.missedQuestions.forEach(q => {
                const div = document.createElement('div');
                div.className = 'missed-item';
                let content = `<span class="jp">${q.question}</span>`;
                if (q.questionReading && q.question !== q.questionReading) {
                    content += ` (${q.questionReading})`;
                }
                content += ` → <strong>${q.answer}</strong>`;
                if (q.answerReading && q.answer !== q.answerReading) {
                    content += ` (${q.answerReading})`;
                }
                div.innerHTML = content;
                breakdown.appendChild(div);
            });
        } else {
            breakdown.innerHTML = '';
        }
    }
    
    retryQuiz() {
        // Restart with same settings
        this.startQuiz();
    }
    
    newQuiz() {
        // Go back to setup
        document.getElementById('results-area').style.display = 'none';
        document.getElementById('setup-area').style.display = 'block';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new GenkiQuiz();
});
