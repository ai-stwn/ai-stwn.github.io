// Genki I Vocabulary and Grammar Data
// Chapters 1-12

const GENKI_DATA = {
    chapters: [
        {
            id: 1,
            title: "Chapter 1: New Friends",
            vocabulary: [
                { japanese: "大学", reading: "だいがく", english: "university" },
                { japanese: "高校", reading: "こうこう", english: "high school" },
                { japanese: "学生", reading: "がくせい", english: "student" },
                { japanese: "大学生", reading: "だいがくせい", english: "college student" },
                { japanese: "留学生", reading: "りゅうがくせい", english: "international student" },
                { japanese: "先生", reading: "せんせい", english: "teacher; professor" },
                { japanese: "一年生", reading: "いちねんせい", english: "first-year student" },
                { japanese: "専門", reading: "せんもん", english: "major" },
                { japanese: "友達", reading: "ともだち", english: "friend" },
                { japanese: "日本語", reading: "にほんご", english: "Japanese language" },
                { japanese: "英語", reading: "えいご", english: "English language" },
                { japanese: "何", reading: "なに/なん", english: "what" },
                { japanese: "今", reading: "いま", english: "now" },
                { japanese: "午前", reading: "ごぜん", english: "A.M." },
                { japanese: "午後", reading: "ごご", english: "P.M." },
                { japanese: "時", reading: "じ", english: "o'clock" },
                { japanese: "半", reading: "はん", english: "half" },
                { japanese: "日本", reading: "にほん", english: "Japan" },
                { japanese: "アメリカ", reading: "アメリカ", english: "America" },
                { japanese: "電話", reading: "でんわ", english: "telephone" }
            ],
            grammar: [
                {
                    pattern: "X は Y です",
                    explanation: "X is Y (polite copula)",
                    example: "私は学生です。",
                    exampleReading: "わたしはがくせいです。",
                    exampleEnglish: "I am a student."
                },
                {
                    pattern: "X は Y じゃないです",
                    explanation: "X is not Y (polite negative)",
                    example: "私は先生じゃないです。",
                    exampleReading: "わたしはせんせいじゃないです。",
                    exampleEnglish: "I am not a teacher."
                },
                {
                    pattern: "Question か",
                    explanation: "Question marker particle",
                    example: "学生ですか。",
                    exampleReading: "がくせいですか。",
                    exampleEnglish: "Are you a student?"
                }
            ]
        },
        {
            id: 2,
            title: "Chapter 2: Shopping",
            vocabulary: [
                { japanese: "これ", reading: "これ", english: "this one" },
                { japanese: "それ", reading: "それ", english: "that one" },
                { japanese: "あれ", reading: "あれ", english: "that one (over there)" },
                { japanese: "どれ", reading: "どれ", english: "which one" },
                { japanese: "この", reading: "この", english: "this..." },
                { japanese: "その", reading: "その", english: "that..." },
                { japanese: "あの", reading: "あの", english: "that... (over there)" },
                { japanese: "どの", reading: "どの", english: "which..." },
                { japanese: "本", reading: "ほん", english: "book" },
                { japanese: "辞書", reading: "じしょ", english: "dictionary" },
                { japanese: "雑誌", reading: "ざっし", english: "magazine" },
                { japanese: "新聞", reading: "しんぶん", english: "newspaper" },
                { japanese: "鉛筆", reading: "えんぴつ", english: "pencil" },
                { japanese: "ペン", reading: "ペン", english: "pen" },
                { japanese: "ノート", reading: "ノート", english: "notebook" },
                { japanese: "財布", reading: "さいふ", english: "wallet" },
                { japanese: "傘", reading: "かさ", english: "umbrella" },
                { japanese: "鍵", reading: "かぎ", english: "key" },
                { japanese: "時計", reading: "とけい", english: "watch; clock" },
                { japanese: "かばん", reading: "かばん", english: "bag" },
                { japanese: "いくら", reading: "いくら", english: "how much" },
                { japanese: "円", reading: "えん", english: "yen" },
                { japanese: "高い", reading: "たかい", english: "expensive" },
                { japanese: "安い", reading: "やすい", english: "cheap; inexpensive" }
            ],
            grammar: [
                {
                    pattern: "これ/それ/あれ",
                    explanation: "Demonstrative pronouns (this/that/that over there)",
                    example: "これは本です。",
                    exampleReading: "これはほんです。",
                    exampleEnglish: "This is a book."
                },
                {
                    pattern: "この/その/あの + Noun",
                    explanation: "Demonstrative adjectives",
                    example: "この本は高いです。",
                    exampleReading: "このほんはたかいです。",
                    exampleEnglish: "This book is expensive."
                },
                {
                    pattern: "Noun も",
                    explanation: "also; too",
                    example: "これも本です。",
                    exampleReading: "これもほんです。",
                    exampleEnglish: "This is also a book."
                }
            ]
        },
        {
            id: 3,
            title: "Chapter 3: Making a Date",
            vocabulary: [
                { japanese: "映画", reading: "えいが", english: "movie" },
                { japanese: "音楽", reading: "おんがく", english: "music" },
                { japanese: "食べ物", reading: "たべもの", english: "food" },
                { japanese: "飲み物", reading: "のみもの", english: "drink" },
                { japanese: "スポーツ", reading: "スポーツ", english: "sports" },
                { japanese: "デート", reading: "デート", english: "date" },
                { japanese: "テニス", reading: "テニス", english: "tennis" },
                { japanese: "テレビ", reading: "テレビ", english: "TV" },
                { japanese: "アイスクリーム", reading: "アイスクリーム", english: "ice cream" },
                { japanese: "ハンバーガー", reading: "ハンバーガー", english: "hamburger" },
                { japanese: "お酒", reading: "おさけ", english: "sake; alcohol" },
                { japanese: "お茶", reading: "おちゃ", english: "green tea" },
                { japanese: "コーヒー", reading: "コーヒー", english: "coffee" },
                { japanese: "水", reading: "みず", english: "water" },
                { japanese: "朝ご飯", reading: "あさごはん", english: "breakfast" },
                { japanese: "昼ご飯", reading: "ひるごはん", english: "lunch" },
                { japanese: "晩ご飯", reading: "ばんごはん", english: "dinner" },
                { japanese: "家", reading: "いえ/うち", english: "home; house" },
                { japanese: "学校", reading: "がっこう", english: "school" },
                { japanese: "明日", reading: "あした", english: "tomorrow" },
                { japanese: "今日", reading: "きょう", english: "today" },
                { japanese: "朝", reading: "あさ", english: "morning" },
                { japanese: "夜", reading: "よる", english: "night" },
                { japanese: "毎日", reading: "まいにち", english: "every day" },
                { japanese: "毎晩", reading: "まいばん", english: "every night" }
            ],
            grammar: [
                {
                    pattern: "Verb stems",
                    explanation: "Introduction to verb conjugation",
                    example: "食べます",
                    exampleReading: "たべます",
                    exampleEnglish: "(I) eat"
                },
                {
                    pattern: "Place に/へ 行きます",
                    explanation: "Go to (place)",
                    example: "学校に行きます。",
                    exampleReading: "がっこうにいきます。",
                    exampleEnglish: "I go to school."
                },
                {
                    pattern: "Time に Verb",
                    explanation: "Do something at (time)",
                    example: "十一時に寝ます。",
                    exampleReading: "じゅういちじにねます。",
                    exampleEnglish: "I go to bed at eleven."
                }
            ]
        },
        {
            id: 4,
            title: "Chapter 4: The First Date",
            vocabulary: [
                { japanese: "会う", reading: "あう", english: "to meet" },
                { japanese: "ある", reading: "ある", english: "to exist (inanimate)" },
                { japanese: "買う", reading: "かう", english: "to buy" },
                { japanese: "書く", reading: "かく", english: "to write" },
                { japanese: "撮る", reading: "とる", english: "to take (photos)" },
                { japanese: "待つ", reading: "まつ", english: "to wait" },
                { japanese: "分かる", reading: "わかる", english: "to understand" },
                { japanese: "いる", reading: "いる", english: "to exist (animate)" },
                { japanese: "右", reading: "みぎ", english: "right" },
                { japanese: "左", reading: "ひだり", english: "left" },
                { japanese: "前", reading: "まえ", english: "front" },
                { japanese: "後ろ", reading: "うしろ", english: "back; behind" },
                { japanese: "中", reading: "なか", english: "inside" },
                { japanese: "上", reading: "うえ", english: "above; on" },
                { japanese: "下", reading: "した", english: "below; under" },
                { japanese: "近く", reading: "ちかく", english: "near" },
                { japanese: "隣", reading: "となり", english: "next to" },
                { japanese: "間", reading: "あいだ", english: "between" },
                { japanese: "銀行", reading: "ぎんこう", english: "bank" },
                { japanese: "郵便局", reading: "ゆうびんきょく", english: "post office" },
                { japanese: "図書館", reading: "としょかん", english: "library" },
                { japanese: "公園", reading: "こうえん", english: "park" }
            ],
            grammar: [
                {
                    pattern: "X が あります/います",
                    explanation: "There is X (existence)",
                    example: "猫がいます。",
                    exampleReading: "ねこがいます。",
                    exampleEnglish: "There is a cat."
                },
                {
                    pattern: "Location に X が あります",
                    explanation: "X is at (location)",
                    example: "机の上に本があります。",
                    exampleReading: "つくえのうえにほんがあります。",
                    exampleEnglish: "There is a book on the desk."
                },
                {
                    pattern: "Noun₁ の Noun₂",
                    explanation: "Noun₂ of Noun₁",
                    example: "私の本",
                    exampleReading: "わたしのほん",
                    exampleEnglish: "my book"
                }
            ]
        },
        {
            id: 5,
            title: "Chapter 5: A Trip to Okinawa",
            vocabulary: [
                { japanese: "海", reading: "うみ", english: "sea" },
                { japanese: "切手", reading: "きって", english: "stamp" },
                { japanese: "切符", reading: "きっぷ", english: "ticket" },
                { japanese: "サーフィン", reading: "サーフィン", english: "surfing" },
                { japanese: "宿題", reading: "しゅくだい", english: "homework" },
                { japanese: "旅行", reading: "りょこう", english: "travel" },
                { japanese: "泳ぐ", reading: "およぐ", english: "to swim" },
                { japanese: "聞く", reading: "きく", english: "to listen; to ask" },
                { japanese: "乗る", reading: "のる", english: "to ride" },
                { japanese: "やる", reading: "やる", english: "to do" },
                { japanese: "新しい", reading: "あたらしい", english: "new" },
                { japanese: "古い", reading: "ふるい", english: "old (things)" },
                { japanese: "暑い", reading: "あつい", english: "hot (weather)" },
                { japanese: "寒い", reading: "さむい", english: "cold (weather)" },
                { japanese: "楽しい", reading: "たのしい", english: "fun" },
                { japanese: "大きい", reading: "おおきい", english: "big" },
                { japanese: "小さい", reading: "ちいさい", english: "small" },
                { japanese: "いい", reading: "いい", english: "good" },
                { japanese: "長い", reading: "ながい", english: "long" },
                { japanese: "短い", reading: "みじかい", english: "short" }
            ],
            grammar: [
                {
                    pattern: "い-adjective (present)",
                    explanation: "Describing with い-adjectives",
                    example: "この本は面白いです。",
                    exampleReading: "このほんはおもしろいです。",
                    exampleEnglish: "This book is interesting."
                },
                {
                    pattern: "い-adjective (negative)",
                    explanation: "い → くない",
                    example: "高くないです。",
                    exampleReading: "たかくないです。",
                    exampleEnglish: "It is not expensive."
                },
                {
                    pattern: "い-adjective (past)",
                    explanation: "い → かった",
                    example: "楽しかったです。",
                    exampleReading: "たのしかったです。",
                    exampleEnglish: "It was fun."
                }
            ]
        },
        {
            id: 6,
            title: "Chapter 6: A Day in Robert's Life",
            vocabulary: [
                { japanese: "起きる", reading: "おきる", english: "to wake up" },
                { japanese: "寝る", reading: "ねる", english: "to sleep; to go to bed" },
                { japanese: "食べる", reading: "たべる", english: "to eat" },
                { japanese: "見る", reading: "みる", english: "to see; to watch" },
                { japanese: "出る", reading: "でる", english: "to exit" },
                { japanese: "着る", reading: "きる", english: "to wear" },
                { japanese: "いる", reading: "いる", english: "to be; to exist" },
                { japanese: "する", reading: "する", english: "to do" },
                { japanese: "来る", reading: "くる", english: "to come" },
                { japanese: "帰る", reading: "かえる", english: "to return" },
                { japanese: "話す", reading: "はなす", english: "to speak" },
                { japanese: "読む", reading: "よむ", english: "to read" },
                { japanese: "遊ぶ", reading: "あそぶ", english: "to play" },
                { japanese: "飲む", reading: "のむ", english: "to drink" },
                { japanese: "シャワー", reading: "シャワー", english: "shower" },
                { japanese: "会社", reading: "かいしゃ", english: "company" },
                { japanese: "仕事", reading: "しごと", english: "work; job" },
                { japanese: "授業", reading: "じゅぎょう", english: "class" },
                { japanese: "お風呂", reading: "おふろ", english: "bath" },
                { japanese: "電車", reading: "でんしゃ", english: "train" }
            ],
            grammar: [
                {
                    pattern: "Te-form",
                    explanation: "Verb て-form for connecting actions",
                    example: "朝ご飯を食べて、学校に行きます。",
                    exampleReading: "あさごはんをたべて、がっこうにいきます。",
                    exampleEnglish: "I eat breakfast and go to school."
                },
                {
                    pattern: "〜ている",
                    explanation: "Progressive/resultant state",
                    example: "本を読んでいます。",
                    exampleReading: "ほんをよんでいます。",
                    exampleEnglish: "I am reading a book."
                },
                {
                    pattern: "〜てください",
                    explanation: "Please do...",
                    example: "ここに名前を書いてください。",
                    exampleReading: "ここになまえをかいてください。",
                    exampleEnglish: "Please write your name here."
                }
            ]
        },
        {
            id: 7,
            title: "Chapter 7: Family Picture",
            vocabulary: [
                { japanese: "家族", reading: "かぞく", english: "family" },
                { japanese: "父", reading: "ちち", english: "father (own)" },
                { japanese: "母", reading: "はは", english: "mother (own)" },
                { japanese: "兄", reading: "あに", english: "older brother (own)" },
                { japanese: "姉", reading: "あね", english: "older sister (own)" },
                { japanese: "弟", reading: "おとうと", english: "younger brother" },
                { japanese: "妹", reading: "いもうと", english: "younger sister" },
                { japanese: "お父さん", reading: "おとうさん", english: "father (someone's)" },
                { japanese: "お母さん", reading: "おかあさん", english: "mother (someone's)" },
                { japanese: "お兄さん", reading: "おにいさん", english: "older brother (someone's)" },
                { japanese: "お姉さん", reading: "おねえさん", english: "older sister (someone's)" },
                { japanese: "男の人", reading: "おとこのひと", english: "man" },
                { japanese: "女の人", reading: "おんなのひと", english: "woman" },
                { japanese: "髪", reading: "かみ", english: "hair" },
                { japanese: "目", reading: "め", english: "eye" },
                { japanese: "口", reading: "くち", english: "mouth" },
                { japanese: "頭", reading: "あたま", english: "head" },
                { japanese: "顔", reading: "かお", english: "face" },
                { japanese: "背", reading: "せ", english: "height; stature" },
                { japanese: "太る", reading: "ふとる", english: "to gain weight" },
                { japanese: "痩せる", reading: "やせる", english: "to lose weight" }
            ],
            grammar: [
                {
                    pattern: "〜ている (description)",
                    explanation: "Describing appearance/state",
                    example: "メアリーさんは眼鏡をかけています。",
                    exampleReading: "メアリーさんはめがねをかけています。",
                    exampleEnglish: "Mary wears glasses."
                },
                {
                    pattern: "Adjective + Noun",
                    explanation: "Modifying nouns with adjectives",
                    example: "背が高い人",
                    exampleReading: "せがたかいひと",
                    exampleEnglish: "a tall person"
                },
                {
                    pattern: "〜て、〜て (description chain)",
                    explanation: "Chaining descriptive elements",
                    example: "髪が長くて、目が大きいです。",
                    exampleReading: "かみがながくて、めがおおきいです。",
                    exampleEnglish: "She has long hair and big eyes."
                }
            ]
        },
        {
            id: 8,
            title: "Chapter 8: Barbecue",
            vocabulary: [
                { japanese: "天気", reading: "てんき", english: "weather" },
                { japanese: "雨", reading: "あめ", english: "rain" },
                { japanese: "雲", reading: "くも", english: "cloud" },
                { japanese: "雪", reading: "ゆき", english: "snow" },
                { japanese: "風", reading: "かぜ", english: "wind" },
                { japanese: "空", reading: "そら", english: "sky" },
                { japanese: "降る", reading: "ふる", english: "to fall (rain/snow)" },
                { japanese: "曇る", reading: "くもる", english: "to become cloudy" },
                { japanese: "晴れる", reading: "はれる", english: "to clear up" },
                { japanese: "吹く", reading: "ふく", english: "to blow" },
                { japanese: "暖かい", reading: "あたたかい", english: "warm" },
                { japanese: "涼しい", reading: "すずしい", english: "cool" },
                { japanese: "蒸し暑い", reading: "むしあつい", english: "humid" },
                { japanese: "料理", reading: "りょうり", english: "cooking; cuisine" },
                { japanese: "作る", reading: "つくる", english: "to make" },
                { japanese: "持って来る", reading: "もってくる", english: "to bring" },
                { japanese: "持って行く", reading: "もっていく", english: "to take" },
                { japanese: "野菜", reading: "やさい", english: "vegetable" },
                { japanese: "肉", reading: "にく", english: "meat" },
                { japanese: "魚", reading: "さかな", english: "fish" }
            ],
            grammar: [
                {
                    pattern: "Short forms",
                    explanation: "Casual/dictionary forms of verbs",
                    example: "食べる、飲む、行く",
                    exampleReading: "たべる、のむ、いく",
                    exampleEnglish: "eat, drink, go"
                },
                {
                    pattern: "〜と思う",
                    explanation: "I think that...",
                    example: "明日は雨が降ると思います。",
                    exampleReading: "あしたはあめがふるとおもいます。",
                    exampleEnglish: "I think it will rain tomorrow."
                },
                {
                    pattern: "〜と言う",
                    explanation: "To say that...",
                    example: "友達は来ないと言いました。",
                    exampleReading: "ともだちはこないといいました。",
                    exampleEnglish: "My friend said they won't come."
                }
            ]
        },
        {
            id: 9,
            title: "Chapter 9: Kabuki",
            vocabulary: [
                { japanese: "歌舞伎", reading: "かぶき", english: "kabuki" },
                { japanese: "着物", reading: "きもの", english: "kimono" },
                { japanese: "習う", reading: "ならう", english: "to learn" },
                { japanese: "教える", reading: "おしえる", english: "to teach; to tell" },
                { japanese: "歌う", reading: "うたう", english: "to sing" },
                { japanese: "踊る", reading: "おどる", english: "to dance" },
                { japanese: "弾く", reading: "ひく", english: "to play (instrument)" },
                { japanese: "吹く", reading: "ふく", english: "to play (wind instrument)" },
                { japanese: "集める", reading: "あつめる", english: "to collect" },
                { japanese: "運動する", reading: "うんどうする", english: "to exercise" },
                { japanese: "散歩する", reading: "さんぽする", english: "to take a walk" },
                { japanese: "練習する", reading: "れんしゅうする", english: "to practice" },
                { japanese: "上手", reading: "じょうず", english: "good at" },
                { japanese: "下手", reading: "へた", english: "bad at" },
                { japanese: "有名", reading: "ゆうめい", english: "famous" },
                { japanese: "好き", reading: "すき", english: "to like" },
                { japanese: "嫌い", reading: "きらい", english: "to dislike" },
                { japanese: "ピアノ", reading: "ピアノ", english: "piano" },
                { japanese: "ギター", reading: "ギター", english: "guitar" },
                { japanese: "歌", reading: "うた", english: "song" }
            ],
            grammar: [
                {
                    pattern: "〜のが好き/嫌い",
                    explanation: "Like/dislike doing...",
                    example: "音楽を聞くのが好きです。",
                    exampleReading: "おんがくをきくのがすきです。",
                    exampleEnglish: "I like listening to music."
                },
                {
                    pattern: "〜のが上手/下手",
                    explanation: "Good/bad at doing...",
                    example: "料理を作るのが上手です。",
                    exampleReading: "りょうりをつくるのがじょうずです。",
                    exampleEnglish: "She is good at cooking."
                },
                {
                    pattern: "まだ〜ていません",
                    explanation: "Haven't done yet",
                    example: "まだ宿題をしていません。",
                    exampleReading: "まだしゅくだいをしていません。",
                    exampleEnglish: "I haven't done my homework yet."
                }
            ]
        },
        {
            id: 10,
            title: "Chapter 10: Winter Vacation Plans",
            vocabulary: [
                { japanese: "季節", reading: "きせつ", english: "season" },
                { japanese: "春", reading: "はる", english: "spring" },
                { japanese: "夏", reading: "なつ", english: "summer" },
                { japanese: "秋", reading: "あき", english: "autumn" },
                { japanese: "冬", reading: "ふゆ", english: "winter" },
                { japanese: "休み", reading: "やすみ", english: "vacation; day off" },
                { japanese: "予定", reading: "よてい", english: "plan; schedule" },
                { japanese: "駅", reading: "えき", english: "station" },
                { japanese: "空港", reading: "くうこう", english: "airport" },
                { japanese: "飛行機", reading: "ひこうき", english: "airplane" },
                { japanese: "船", reading: "ふね", english: "ship; boat" },
                { japanese: "予約", reading: "よやく", english: "reservation" },
                { japanese: "お土産", reading: "おみやげ", english: "souvenir" },
                { japanese: "写真", reading: "しゃしん", english: "photograph" },
                { japanese: "欲しい", reading: "ほしい", english: "to want (thing)" },
                { japanese: "〜たい", reading: "〜たい", english: "want to do" },
                { japanese: "つもり", reading: "つもり", english: "intention; plan" },
                { japanese: "送る", reading: "おくる", english: "to send" },
                { japanese: "届く", reading: "とどく", english: "to arrive; to reach" },
                { japanese: "決める", reading: "きめる", english: "to decide" }
            ],
            grammar: [
                {
                    pattern: "〜たい",
                    explanation: "Want to do...",
                    example: "日本に行きたいです。",
                    exampleReading: "にほんにいきたいです。",
                    exampleEnglish: "I want to go to Japan."
                },
                {
                    pattern: "〜たり〜たりする",
                    explanation: "Do things like... and...",
                    example: "映画を見たり、買い物をしたりします。",
                    exampleReading: "えいがをみたり、かいものをしたりします。",
                    exampleEnglish: "I do things like watch movies and go shopping."
                },
                {
                    pattern: "〜つもり",
                    explanation: "Intend to...",
                    example: "来年日本に行くつもりです。",
                    exampleReading: "らいねんにほんにいくつもりです。",
                    exampleEnglish: "I intend to go to Japan next year."
                }
            ]
        },
        {
            id: 11,
            title: "Chapter 11: After the Vacation",
            vocabulary: [
                { japanese: "お正月", reading: "おしょうがつ", english: "New Year" },
                { japanese: "誕生日", reading: "たんじょうび", english: "birthday" },
                { japanese: "両親", reading: "りょうしん", english: "parents" },
                { japanese: "親戚", reading: "しんせき", english: "relatives" },
                { japanese: "彼", reading: "かれ", english: "he; boyfriend" },
                { japanese: "彼女", reading: "かのじょ", english: "she; girlfriend" },
                { japanese: "お年玉", reading: "おとしだま", english: "New Year's money gift" },
                { japanese: "お祝い", reading: "おいわい", english: "celebration" },
                { japanese: "プレゼント", reading: "プレゼント", english: "present" },
                { japanese: "病気", reading: "びょうき", english: "illness" },
                { japanese: "風邪", reading: "かぜ", english: "cold (illness)" },
                { japanese: "熱", reading: "ねつ", english: "fever" },
                { japanese: "薬", reading: "くすり", english: "medicine" },
                { japanese: "医者", reading: "いしゃ", english: "doctor" },
                { japanese: "病院", reading: "びょういん", english: "hospital" },
                { japanese: "痛い", reading: "いたい", english: "painful" },
                { japanese: "心配する", reading: "しんぱいする", english: "to worry" },
                { japanese: "疲れる", reading: "つかれる", english: "to get tired" },
                { japanese: "治る", reading: "なおる", english: "to get well; to heal" },
                { japanese: "もらう", reading: "もらう", english: "to receive" }
            ],
            grammar: [
                {
                    pattern: "〜てあげる",
                    explanation: "Do something for someone",
                    example: "友達に本を貸してあげました。",
                    exampleReading: "ともだちにほんをかしてあげました。",
                    exampleEnglish: "I lent a book to my friend."
                },
                {
                    pattern: "〜てもらう",
                    explanation: "Have someone do something",
                    example: "友達に宿題を手伝ってもらいました。",
                    exampleReading: "ともだちにしゅくだいをてつだってもらいました。",
                    exampleEnglish: "I had my friend help me with homework."
                },
                {
                    pattern: "〜てくれる",
                    explanation: "Someone does something for me",
                    example: "母が料理を作ってくれました。",
                    exampleReading: "ははがりょうりをつくってくれました。",
                    exampleEnglish: "My mother made food for me."
                }
            ]
        },
        {
            id: 12,
            title: "Chapter 12: Feelingستی",
            vocabulary: [
                { japanese: "嬉しい", reading: "うれしい", english: "happy; glad" },
                { japanese: "悲しい", reading: "かなしい", english: "sad" },
                { japanese: "寂しい", reading: "さびしい", english: "lonely" },
                { japanese: "恥ずかしい", reading: "はずかしい", english: "embarrassing" },
                { japanese: "怖い", reading: "こわい", english: "scary" },
                { japanese: "怒る", reading: "おこる", english: "to get angry" },
                { japanese: "笑う", reading: "わらう", english: "to laugh; to smile" },
                { japanese: "泣く", reading: "なく", english: "to cry" },
                { japanese: "困る", reading: "こまる", english: "to be troubled" },
                { japanese: "びっくりする", reading: "びっくりする", english: "to be surprised" },
                { japanese: "緊張する", reading: "きんちょうする", english: "to be nervous" },
                { japanese: "安心する", reading: "あんしんする", english: "to be relieved" },
                { japanese: "がっかりする", reading: "がっかりする", english: "to be disappointed" },
                { japanese: "夢", reading: "ゆめ", english: "dream" },
                { japanese: "希望", reading: "きぼう", english: "hope" },
                { japanese: "将来", reading: "しょうらい", english: "future" },
                { japanese: "原因", reading: "げんいん", english: "cause; reason" },
                { japanese: "理由", reading: "りゆう", english: "reason" },
                { japanese: "意味", reading: "いみ", english: "meaning" },
                { japanese: "関係", reading: "かんけい", english: "relationship" }
            ],
            grammar: [
                {
                    pattern: "〜そう (appearance)",
                    explanation: "Looks like...",
                    example: "おいしそうですね。",
                    exampleReading: "おいしそうですね。",
                    exampleEnglish: "It looks delicious."
                },
                {
                    pattern: "〜すぎる",
                    explanation: "Too much...",
                    example: "食べすぎました。",
                    exampleReading: "たべすぎました。",
                    exampleEnglish: "I ate too much."
                },
                {
                    pattern: "〜ので",
                    explanation: "Because...",
                    example: "疲れたので、早く寝ました。",
                    exampleReading: "つかれたので、はやくねました。",
                    exampleEnglish: "Because I was tired, I went to bed early."
                }
            ]
        }
    ]
};
