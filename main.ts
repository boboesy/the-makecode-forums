namespace SpriteKind {
    export const IconProfile = SpriteKind.create()
    export const Hitbox = SpriteKind.create()
    export const Popup = SpriteKind.create()
    export const X = SpriteKind.create()
    export const ArcadeLink = SpriteKind.create()
    export const bottom = SpriteKind.create()
    export const repButton = SpriteKind.create()
    export const post = SpriteKind.create()
    export const openHomePage = SpriteKind.create()
    export const MAINpost = SpriteKind.create()
    export const repimg = SpriteKind.create()
    export const Background = SpriteKind.create()
    export const imstuckLink = SpriteKind.create()
    export const fonctionLink = SpriteKind.create()
}
function continueDialogue2 () {
    timer.after(randint(2000, 5000), function () {
        createPost(" ArcherBright123", "Aaand... he's gone.", img`
            c c c c c d b b c c 1 1 1 1 
            c c c 4 d d d d d c 1 d c 1 
            c c e e 4 d d d d c d c c d 
            c c c e 4 4 d d d 1 c c c d 
            c c c e e d b d 4 8 c 6 6 c 
            e c c e b d d b b 6 6 c c f 
            c 6 6 6 b d d b b f c c c 6 
            b 6 6 6 f b d d b c c c 6 6 
            6 6 6 f f c e 1 c c b c c 6 
            6 6 6 f f b b c e e d c 6 6 
            6 6 e c f f d f d c d d b 1 
            6 b c e c b d c e f 4 d d 1 
            d e f e b c b c e f e d c d 
            b e c c f f e f c f e d e d 
            d c c f f e e f c f e e c b 
            `, "abc", false)
        timer.after(randint(2000, 5000), function () {
            createPost("Sonicblaston", "Before I lose my mind, can someone answer my question?", img`
                a a a a a a a a a a a a a a 
                a a a a 9 9 9 9 9 9 9 9 a a 
                a a a 9 1 1 9 9 9 9 9 9 9 a 
                a a 9 1 9 9 f 9 9 9 9 9 a a 
                a a 9 9 9 9 9 9 9 f 9 9 8 a 
                a a 9 9 9 9 9 9 9 9 9 8 8 a 
                a a 9 9 9 9 9 9 f 9 9 8 a a 
                a a 9 9 9 9 f f 9 9 9 8 a a 
                a a a 9 9 9 9 9 9 9 8 a a a 
                a a a 9 9 9 9 9 9 8 a a a a 
                a a a b d 9 b 9 8 8 a a a a 
                a a b f d 9 1 b 8 a a a a a 
                a a f f f b f f a a a a a a 
                a b f f f f f f a a a a a a 
                a f f f f f f f b a a a a a 
                `, "abc", false)
            timer.after(randint(2000, 5000), function () {
                createPost("KIKIvsIT", "@Sonicblaston you should use the sprite follow other sprite block.", img`
                    f f c c f f b c c c f f f f 
                    f f c e d d c f f f f f f f 
                    f f c b d d b d f f f c f f 
                    c c f d f d c f e f f f f c 
                    c f c b d d d d b f c f f f 
                    c c f e d d d d c f c f f c 
                    c c c c e b e b c c c f c c 
                    c c c f e d d e d c c c f c 
                    c c f f f c c d b c f f c c 
                    c f c f f c d d c c b c f c 
                    c c c b b b d c c b c c d d 
                    c c b d b d c c e c c d d d 
                    c f d b d d c f c c d d d d 
                    c c d d c c c d c c b d d d 
                    c f f c c c d d c c c b d d 
                    `, "abc", false)
                timer.after(randint(2000, 5000), function () {
                    createPost("TheConeGuy", "Woah. I just decided to pop onto the forum, and I see THIS.", img`
                        8 a a a a a a 8 6 8 6 8 6 8 
                        6 8 a a a a a 8 8 8 8 8 8 8 
                        8 b a a a a a f 8 8 6 8 a 8 
                        d 8 a a a 9 a a 8 f 4 8 a a 
                        8 b a a f f f f b 5 b b a a 
                        b f f f f f f f f f b b a a 
                        8 f f f f b e b b f f b 9 a 
                        6 8 6 b b b b e b e 6 8 a 8 
                        8 8 8 b b b 1 d b f f 9 a a 
                        8 8 8 4 b 4 b b b a a a a a 
                        8 8 a 8 e 4 4 f a a 9 a a a 
                        6 8 a a a a a a a a a a c a 
                        8 8 a 8 a 8 9 9 a a 9 a a a 
                        8 6 8 6 8 a a a 9 a a a a 9 
                        8 8 6 8 8 a a a a a a a a a 
                        `, "abc", false)
                    timer.after(randint(2000, 5000), function () {
                        createPost("TheConeGuy", "This is just chaos...", img`
                            8 a a a a a a 8 6 8 6 8 6 8 
                            6 8 a a a a a 8 8 8 8 8 8 8 
                            8 b a a a a a f 8 8 6 8 a 8 
                            d 8 a a a 9 a a 8 f 4 8 a a 
                            8 b a a f f f f b 5 b b a a 
                            b f f f f f f f f f b b a a 
                            8 f f f f b e b b f f b 9 a 
                            6 8 6 b b b b e b e 6 8 a 8 
                            8 8 8 b b b 1 d b f f 9 a a 
                            8 8 8 4 b 4 b b b a a a a a 
                            8 8 a 8 e 4 4 f a a 9 a a a 
                            6 8 a a a a a a a a a a c a 
                            8 8 a 8 a 8 9 9 a a 9 a a a 
                            8 6 8 6 8 a a a 9 a a a a 9 
                            8 8 6 8 8 a a a a a a a a a 
                            `, "abc", false)
                        timer.after(randint(2000, 5000), function () {
                            blockSettings.writeString("part2complete", "done!")
                            createPost("chaosbot", "Chaos command: DELETE POST", img`
                                1 d d 1 1 1 1 1 1 1 d d 1 1 
                                1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                1 4 4 4 4 4 4 4 4 4 4 4 1 1 
                                1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                1 4 2 4 4 4 4 4 4 4 2 4 1 1 
                                1 2 4 4 4 4 4 4 4 2 4 4 1 1 
                                b 4 4 8 8 4 4 4 8 8 4 4 b 1 
                                2 4 4 8 8 4 4 4 8 8 4 4 2 1 
                                2 4 4 4 4 4 4 4 4 4 4 4 2 1 
                                1 2 4 4 4 4 2 4 4 4 4 4 1 1 
                                1 4 e e e e e e e e e 2 1 1 
                                1 2 4 4 4 4 4 4 4 4 4 2 1 1 
                                1 1 4 2 2 2 2 2 2 2 4 1 1 1 
                                1 1 4 4 4 4 4 4 4 4 4 1 1 1 
                                `, "abc", true)
                            timer.after(2000, function () {
                                createPost("TheConeGuy", "WAIT NO!", img`
                                    8 a a a a a a 8 6 8 6 8 6 8 
                                    6 8 a a a a a 8 8 8 8 8 8 8 
                                    8 b a a a a a f 8 8 6 8 a 8 
                                    d 8 a a a 9 a a 8 f 4 8 a a 
                                    8 b a a f f f f b 5 b b a a 
                                    b f f f f f f f f f b b a a 
                                    8 f f f f b e b b f f b 9 a 
                                    6 8 6 b b b b e b e 6 8 a 8 
                                    8 8 8 b b b 1 d b f f 9 a a 
                                    8 8 8 4 b 4 b b b a a a a a 
                                    8 8 a 8 e 4 4 f a a 9 a a a 
                                    6 8 a a a a a a a a a a c a 
                                    8 8 a 8 a 8 9 9 a a 9 a a a 
                                    8 6 8 6 8 a a a 9 a a a a 9 
                                    8 8 6 8 8 a a a a a a a a a 
                                    `, "abc", false)
                                timer.after(500, function () {
                                    blockSettings.writeNumber("bad", blockSettings.readNumber("bad") + bad)
                                    blockSettings.writeNumber("good", blockSettings.readNumber("good") + good)
                                    blockSettings.writeNumber("perfect", blockSettings.readNumber("perfect") + perfect)
                                    game.reset()
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.fonctionLink, function (sprite, otherSprite) {
    if (canPress) {
        if (blockSettings.exists("part2complete")) {
            sprites.destroy(NewGameLink)
            sprites.destroy(NewGameLink2)
            Bg = img`
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfbffffbbbbfffcfccbfff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbfffffffffffcc6c7fff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfbffffffffffffcbfcfff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffbbbbfffffcfffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `
            replyBtnImg = img`
                .999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                888888888888888888888888888888888888888.
                `
            images.print(replyBtnImg, "Reply", 6, 3, 15)
            replyBtn = sprites.create(replyBtnImg, SpriteKind.repButton)
            replyBtn.z = 2
            replyBtn.setPosition(45, 110)
            sprites.destroy(NewGameLink3)
            canPress = false
            canReply = false
            createPost("Futureknight12", "What does the return block in a function do?", img`
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 f 6 6 6 6 6 6 f c 6 6 6 
                f f f f f f f f f f 1 f f f 
                f b 7 f f f f f f f 1 b f f 
                f d b f f f f f f f 1 b f f 
                f c d f c 1 1 1 1 d 1 f f f 
                f f 1 1 1 1 1 1 b 1 1 f f f 
                f f f d d d d d 1 d f f f f 
                f f f 1 d d d d d d f f f f 
                f f f d 7 7 d d 7 7 f f f f 
                f f f f 7 7 d d 7 e f f f f 
                f f f f d d d d d f f f f f 
                f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f 
                `, "abc", false)
            timer.after(randint(2000, 5000), function () {
                createPost("CyberPulse", "The whole forum... it's just destroyed.", img`
                    e e e e e e 3 e e e e e e e 
                    e c c c c f f f f f f f e e 
                    e f f f f f f f f f f f c e 
                    e f f c c c f f c c f f c e 
                    e f f d 1 1 f f 1 1 c f c e 
                    e f f f f f f f f f f f c e 
                    e f f f f f f f f f f f c e 
                    e f f f f f f f f f f f c e 
                    e f f d 1 1 1 1 1 1 c f c e 
                    e f f d 1 1 1 1 1 1 c f c e 
                    e f f b d d d d d d c f c e 
                    e f f f f f f f f f f f c e 
                    e f f f f f f f f f f f e e 
                    e e e e e e e e e e e e e e 
                    e e e e e e e e e e e e e e 
                    `, "abc", false)
                timer.after(randint(2000, 5000), function () {
                    createPost("personalnote", "I can't even post topics...", img`
                        f f f f f f f f 1 1 1 1 1 1 
                        f f f e c c c f c 1 1 1 1 1 
                        4 f d c 4 c e f 1 1 1 1 1 1 
                        b f d d b d d d 1 1 1 1 1 1 
                        1 b d d d d d 1 1 1 1 1 1 1 
                        b b b d d b b d b 1 1 1 1 1 
                        b c 4 b b d d e b c c 1 1 1 
                        b c d c b c c d e c c c b 1 
                        c b c c c c c b c c c c c 1 
                        c c c c c c c c c c c c c c 
                        c c c c c c c c c c c c c c 
                        c c c c c c b c c c c c c c 
                        c c c c c c c c c c c c c c 
                        c c c c c c c c c c c c c c 
                        c c c c c d c c c c b c c c 
                        `, "abc", false)
                    timer.after(randint(2000, 5000), function () {
                        createPost("BrainstormStudiosLTD", "You can't post topics anymore?!", img`
                            9 9 9 9 9 9 9 9 9 1 1 9 9 9 
                            9 1 1 1 1 1 1 1 1 1 1 1 9 9 
                            1 1 1 1 1 d f f 1 1 1 1 9 9 
                            1 1 1 b 3 3 e 5 5 d c 1 1 1 
                            1 c b b 5 c 5 5 1 1 3 b 1 9 
                            1 b b 5 3 5 5 3 3 3 3 3 1 9 
                            f b 3 3 4 5 5 5 5 3 3 3 f 1 
                            f b 3 3 3 3 c 5 e 3 3 3 b 1 
                            1 b b b b 3 5 5 3 b f f d 9 
                            1 1 c 5 3 5 5 3 d d b f 1 9 
                            9 1 1 c b e f b b b c 1 1 9 
                            9 9 1 1 f 1 c b b d 1 1 1 9 
                            9 9 1 1 1 1 1 f c b 1 1 1 1 
                            9 9 1 1 9 9 1 1 1 1 1 1 9 9 
                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                            `, "abc", false)
                        timer.after(randint(2000, 5000), function () {
                            createPost("BrainstormStudiosLTD", "What about Hoplings...", img`
                                9 9 9 9 9 9 9 9 9 1 1 9 9 9 
                                9 1 1 1 1 1 1 1 1 1 1 1 9 9 
                                1 1 1 1 1 d f f 1 1 1 1 9 9 
                                1 1 1 b 3 3 e 5 5 d c 1 1 1 
                                1 c b b 5 c 5 5 1 1 3 b 1 9 
                                1 b b 5 3 5 5 3 3 3 3 3 1 9 
                                f b 3 3 4 5 5 5 5 3 3 3 f 1 
                                f b 3 3 3 3 c 5 e 3 3 3 b 1 
                                1 b b b b 3 5 5 3 b f f d 9 
                                1 1 c 5 3 5 5 3 d d b f 1 9 
                                9 1 1 c b e f b b b c 1 1 9 
                                9 9 1 1 f 1 c b b d 1 1 1 9 
                                9 9 1 1 1 1 1 f c b 1 1 1 1 
                                9 9 1 1 9 9 1 1 1 1 1 1 9 9 
                                9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                `, "abc", false)
                            timer.after(randint(2000, 5000), function () {
                                createPost("Unique", "Guys, calm down. Things should be back to normal soon.", img`
                                    9 9 9 9 9 9 9 9 9 9 1 1 1 1 
                                    9 9 9 9 9 9 1 9 9 9 9 9 1 1 
                                    1 9 9 9 1 9 d b 9 1 1 1 1 1 
                                    1 1 9 9 c f f c d d 1 1 1 1 
                                    9 9 9 c c d d d e d f 1 9 9 
                                    9 9 b d d d c f d 1 1 d 9 9 
                                    9 9 f c c d c c f b c d 9 9 
                                    1 1 1 1 1 d 1 1 b d f f 9 9 
                                    1 1 1 1 f d d d d d d 1 1 9 
                                    9 9 9 d d d d 1 d c c d 1 9 
                                    9 9 9 9 9 9 1 f f f f f f f 
                                    9 9 9 9 9 f f f f f f f f f 
                                    9 1 9 f f f f f f d f f d 9 
                                    1 d f f f d f f c 1 f f f 9 
                                    b 1 f f 1 9 b f f f f f f c 
                                    `, "abc", false)
                                timer.after(randint(2000, 5000), function () {
                                    createPost("BlastBoxGames", "I guess. But it's still a bit... daunting.", img`
                                        1 9 9 9 9 9 f f f f c f 9 9 
                                        9 9 9 9 f d d d d b 1 1 f 9 
                                        9 9 6 c d d d d f 1 1 1 1 f 
                                        9 6 b d d d d c 1 1 1 1 1 f 
                                        6 b d d d d c 1 1 1 1 1 1 1 
                                        b d d d b f b 1 1 1 1 b f 1 
                                        c b b d d d f 1 1 f 1 1 1 1 
                                        d d d d d d c 1 1 1 1 1 1 1 
                                        d d d d d d d b 1 b 1 1 f 1 
                                        b d d d d d d c 1 f f f 1 f 
                                        b b d d d d d d c 1 1 1 f 9 
                                        6 6 b d d d d d b b 1 c 6 9 
                                        9 6 b c c c c c c f f 9 9 9 
                                        6 6 6 6 9 9 9 9 9 9 9 9 9 9 
                                        6 6 9 9 9 9 9 9 9 9 9 9 9 9 
                                        `, "abc", false)
                                    timer.after(randint(2000, 5000), function () {
                                        createPost("TeddyB", "I think @Unique is right. The MakeCode team are professionals!", img`
                                            f f f f f f f f f f f f f f 
                                            f f f f f f f f f f f f f f 
                                            f f f f f f f f f f f f f f 
                                            f f f f f f f f f f f f f f 
                                            f f f f d d d d d f f f f f 
                                            f f c b d d d d d b f f f f 
                                            f c b c b b b b b b e f f f 
                                            f c c b b c b b c c b f f f 
                                            f f f c b d 3 d 1 c f f f f 
                                            f f f f c f c b c f f f f f 
                                            f f f f f b c c f f f f f f 
                                            f f f f f f b f f f f f f f 
                                            f f f f f f f f f f f f f f 
                                            f f f f f f f f f f f f f f 
                                            f f f f f f f f f f f f f f 
                                            `, "abc", false)
                                        timer.after(randint(2000, 5000), function () {
                                            createPost("Futureknight12", "Cool, but, um, what does the return block do again?", img`
                                                6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                                                6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                                                6 6 f 6 6 6 6 6 6 f c 6 6 6 
                                                f f f f f f f f f f 1 f f f 
                                                f b 7 f f f f f f f 1 b f f 
                                                f d b f f f f f f f 1 b f f 
                                                f c d f c 1 1 1 1 d 1 f f f 
                                                f f 1 1 1 1 1 1 b 1 1 f f f 
                                                f f f d d d d d 1 d f f f f 
                                                f f f 1 d d d d d d f f f f 
                                                f f f d 7 7 d d 7 7 f f f f 
                                                f f f f 7 7 d d 7 e f f f f 
                                                f f f f d d d d d f f f f f 
                                                f f f f f f f f f f f f f f 
                                                f f f f f f f f f f f f f f 
                                                `, "abc", false)
                                            timer.after(randint(2000, 5000), function () {
                                                scene.cameraShake(2, 500)
                                                glitchEffect(500, 0)
                                                createPost("scamma", "Hello.", img`
                                                    c c c c c c c c c c c c c c 
                                                    f f f f c c c c c c c c f f 
                                                    5 4 3 f c c c c c c f f f 5 
                                                    4 3 3 f f f c c f f f 3 4 4 
                                                    f 3 3 e e f f f f e e 3 3 4 
                                                    f 3 e e 2 e f f e 2 e e f f 
                                                    f f e e e e f f e e e f f f 
                                                    f f f f f f f f f f f f f f 
                                                    f f f f f f f f f f f f f f 
                                                    f f f f f f f f f f f f f f 
                                                    f f f f f f f f f f f f f f 
                                                    f f f f f f f f f f f e f f 
                                                    f f f f f f f e e e e e f f 
                                                    f f f f f f f f f f f f f f 
                                                    f f f f f f f f f f f f f f 
                                                    `, "abc", false)
                                                timer.after(randint(2000, 5000), function () {
                                                    createPost("BrainstormStudiosLTD", "My computer just lagged hard", img`
                                                        9 9 9 9 9 9 9 9 9 1 1 9 9 9 
                                                        9 1 1 1 1 1 1 1 1 1 1 1 9 9 
                                                        1 1 1 1 1 d f f 1 1 1 1 9 9 
                                                        1 1 1 b 3 3 e 5 5 d c 1 1 1 
                                                        1 c b b 5 c 5 5 1 1 3 b 1 9 
                                                        1 b b 5 3 5 5 3 3 3 3 3 1 9 
                                                        f b 3 3 4 5 5 5 5 3 3 3 f 1 
                                                        f b 3 3 3 3 c 5 e 3 3 3 b 1 
                                                        1 b b b b 3 5 5 3 b f f d 9 
                                                        1 1 c 5 3 5 5 3 d d b f 1 9 
                                                        9 1 1 c b e f b b b c 1 1 9 
                                                        9 9 1 1 f 1 c b b d 1 1 1 9 
                                                        9 9 1 1 1 1 1 f c b 1 1 1 1 
                                                        9 9 1 1 9 9 1 1 1 1 1 1 9 9 
                                                        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                        `, "abc", false)
                                                    timer.after(500, function () {
                                                        waitForReply(false, "It's the end of the road @scamma!", "What did you do to @discobot?", "Please leave the forums alone!")
                                                        if (blockMenu.selectedMenuIndex() == 0) {
                                                            timer.after(randint(2000, 5000), function () {
                                                                createPost("DangerNoodle", "Yeah! Were you trying to escape @KIKIvsIT?", img`
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 c f c b b 4 4 4 4 4 4 
                                                                    4 e c c e c d d 4 4 4 4 4 4 
                                                                    4 c e e b e d e d 4 4 4 4 4 
                                                                    4 4 f f f f e e d 4 4 4 4 4 
                                                                    4 4 4 4 4 f f f d b 4 4 4 4 
                                                                    4 4 4 4 c b d b c c b 4 4 4 
                                                                    4 4 4 f c e c 4 e f c c 4 4 
                                                                    4 4 4 f c e c c f c f c c 4 
                                                                    4 4 4 f c e c c c b c c f 4 
                                                                    4 4 4 f c e c f c b f c 4 4 
                                                                    4 4 4 f c e f c c c c c 4 4 
                                                                    `, "abc", false)
                                                                bad = 1
                                                                continueDialogue3()
                                                            })
                                                        } else if (blockMenu.selectedMenuIndex() == 1) {
                                                            timer.after(randint(2000, 5000), function () {
                                                                scene.cameraShake(2, 500)
                                                                glitchEffect(500, 0)
                                                                glitchEffect(500, 500)
                                                                createPost("scamma", "Oh, I just gave him some different commands. He was so boring before...", img`
                                                                    c c c c c c c c c c c c c c 
                                                                    f f f f c c c c c c c c f f 
                                                                    5 4 3 f c c c c c c f f f 5 
                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                    f f e e e e f f e e e f f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    f f f f f f f f f f f e f f 
                                                                    f f f f f f f e e e e e f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    `, "abc", false)
                                                                timer.after(randint(2000, 5000), function () {
                                                                    createPost("AbstractDesigner", "So @discobot was your distraction so you could escape?", img`
                                                                        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                        9 9 c c c c f f f f 9 9 9 9 
                                                                        9 9 c 7 e b c f 6 f 9 9 9 9 
                                                                        9 9 c d 7 7 c 6 6 f 9 9 9 9 
                                                                        9 9 c c 7 d 4 c f f 9 9 9 9 
                                                                        9 9 9 c d d 4 4 f 9 9 9 9 9 
                                                                        9 9 c c d d 4 4 f f 9 9 9 9 
                                                                        9 9 c d d d 4 d 4 f 9 9 9 9 
                                                                        9 9 c d d c d f d f 9 9 9 9 
                                                                        9 9 c d 5 d 4 4 d f 9 9 9 9 
                                                                        9 9 c c d d d d f f 9 9 9 9 
                                                                        9 9 9 c c c f f f 9 9 9 9 9 
                                                                        9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                                                        9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                                                        `, "abc", false)
                                                                    good = 1
                                                                    continueDialogue3()
                                                                })
                                                            })
                                                        } else if (blockMenu.selectedMenuIndex() == 2) {
                                                            timer.after(randint(2000, 5000), function () {
                                                                createPost("randomuser", "None of us have done anything wrong!", img`
                                                                    1 1 1 1 1 1 1 1 1 f 1 d 1 1 
                                                                    1 1 1 1 f 1 1 1 1 b b 1 1 1 
                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                    1 1 1 1 1 1 1 1 1 1 1 f f c 
                                                                    1 1 1 1 1 b 1 1 1 1 f 1 b 1 
                                                                    1 1 1 1 1 1 1 1 1 1 1 c 1 1 
                                                                    1 1 d 1 1 1 1 1 1 1 1 1 1 1 
                                                                    1 1 1 1 c 1 f 1 1 1 1 1 1 1 
                                                                    1 1 1 1 1 1 1 1 1 1 f 1 1 1 
                                                                    1 1 1 1 1 1 1 1 1 b b 1 1 1 
                                                                    1 1 1 1 1 f 1 1 1 1 f f 1 1 
                                                                    1 1 1 c 1 1 1 1 f f 1 c 1 f 
                                                                    1 1 1 1 1 1 1 1 d f 1 1 1 1 
                                                                    1 1 1 1 1 d 1 1 1 1 1 1 1 1 
                                                                    1 1 1 1 f c 1 1 1 1 1 1 1 1 
                                                                    `, "abc", false)
                                                                timer.after(randint(2000, 5000), function () {
                                                                    createPost("scamma", "...tch. Whatever.", img`
                                                                        c c c c c c c c c c c c c c 
                                                                        f f f f c c c c c c c c f f 
                                                                        5 4 3 f c c c c c c f f f 5 
                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                        f f e e e e f f e e e f f f 
                                                                        f f f f f f f f f f f f f f 
                                                                        f f f f f f f f f f f f f f 
                                                                        f f f f f f f f f f f f f f 
                                                                        f f f f f f f f f f f f f f 
                                                                        f f f f f f f f f f f e f f 
                                                                        f f f f f f f e e e e e f f 
                                                                        f f f f f f f f f f f f f f 
                                                                        f f f f f f f f f f f f f f 
                                                                        `, "abc", false)
                                                                    timer.after(randint(2000, 5000), function () {
                                                                        createPost("AbstractDesigner", "Also, what about @discobot? ", img`
                                                                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                            9 9 c c c c f f f f 9 9 9 9 
                                                                            9 9 c 7 e b c f 6 f 9 9 9 9 
                                                                            9 9 c d 7 7 c 6 6 f 9 9 9 9 
                                                                            9 9 c c 7 d 4 c f f 9 9 9 9 
                                                                            9 9 9 c d d 4 4 f 9 9 9 9 9 
                                                                            9 9 c c d d 4 4 f f 9 9 9 9 
                                                                            9 9 c d d d 4 d 4 f 9 9 9 9 
                                                                            9 9 c d d c d f d f 9 9 9 9 
                                                                            9 9 c d 5 d 4 4 d f 9 9 9 9 
                                                                            9 9 c c d d d d f f 9 9 9 9 
                                                                            9 9 9 c c c f f f 9 9 9 9 9 
                                                                            9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                                                            9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                                                            `, "abc", false)
                                                                        timer.after(randint(2000, 5000), function () {
                                                                            scene.cameraShake(2, 500)
                                                                            glitchEffect(500, 0)
                                                                            glitchEffect(500, 500)
                                                                            createPost("scamma", "Oh, I just gave him some different commands. He was so boring before...", img`
                                                                                c c c c c c c c c c c c c c 
                                                                                f f f f c c c c c c c c f f 
                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                f f e e e e f f e e e f f f 
                                                                                f f f f f f f f f f f f f f 
                                                                                f f f f f f f f f f f f f f 
                                                                                f f f f f f f f f f f f f f 
                                                                                f f f f f f f f f f f f f f 
                                                                                f f f f f f f f f f f e f f 
                                                                                f f f f f f f e e e e e f f 
                                                                                f f f f f f f f f f f f f f 
                                                                                f f f f f f f f f f f f f f 
                                                                                `, "abc", false)
                                                                            timer.after(randint(2000, 5000), function () {
                                                                                createPost("AbstractDesigner", "So @discobot was your distraction so you could escape?", img`
                                                                                    9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                                    9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                                    9 9 c c c c f f f f 9 9 9 9 
                                                                                    9 9 c 7 e b c f 6 f 9 9 9 9 
                                                                                    9 9 c d 7 7 c 6 6 f 9 9 9 9 
                                                                                    9 9 c c 7 d 4 c f f 9 9 9 9 
                                                                                    9 9 9 c d d 4 4 f 9 9 9 9 9 
                                                                                    9 9 c c d d 4 4 f f 9 9 9 9 
                                                                                    9 9 c d d d 4 d 4 f 9 9 9 9 
                                                                                    9 9 c d d c d f d f 9 9 9 9 
                                                                                    9 9 c d 5 d 4 4 d f 9 9 9 9 
                                                                                    9 9 c c d d d d f f 9 9 9 9 
                                                                                    9 9 9 c c c f f f 9 9 9 9 9 
                                                                                    9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                                                                    9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                                                                    `, "abc", false)
                                                                                perfect = 1
                                                                                continueDialogue3()
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        }
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        } else {
            scene.cameraShake(3, 500)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    canPress = true
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    canPress = false
})
function playAsChimbroDaPro () {
    ProfileButton = sprites.create(img`
        6 c c c c f 
        f f f c c 7 
        f c 6 6 f c 
        f e c c f 7 
        f f b f f d 
        c c f c f f 
        f f f c c f 
        `, SpriteKind.IconProfile)
    Mouse = sprites.create(img`
        . 7 7 7 . . . . . . 
        6 7 f 7 7 . . . . . 
        6 7 f f 7 7 . . . . 
        6 7 f f f 7 7 . . . 
        6 7 f f f f 7 7 . . 
        6 7 f f f f f 7 7 . 
        6 7 f f f f f f 7 7 
        6 7 f f f f f f f 7 
        6 7 f f f f 7 7 7 7 
        6 7 f f f f 7 7 6 . 
        6 7 f 7 7 f f 7 . . 
        6 7 7 7 6 7 f 7 . . 
        6 6 6 . 6 7 f 7 . . 
        . . . . 6 7 7 7 . . 
        . . . . 6 6 6 . . . 
        `, SpriteKind.Player)
    profileName = "ChimbroDaPro"
    replyImg = img`
        f f 7 c c c f c c c c c 7 f 
        f 6 c c c c c c c c c 7 c f 
        f 7 f c f f f f 7 c c 7 7 f 
        f 7 f c f f c f f c c f 9 e 
        c 7 c f c c 6 c 6 f f c 7 7 
        c f f 6 c 6 6 c f 6 c f 7 7 
        7 f f f d c c b d 6 f f 7 e 
        d f f f 6 c c c b f f f 7 e 
        e f f f b b b b b c f f d d 
        d c f f f b b b f f f f c c 
        f f c c c f f c f f f f f c 
        f f f f f f e f f f c f f d 
        f f f c f f f f f c f f c c 
        f f f f f f 6 f f c f f f f 
        f f c b f f 7 f f 6 6 f f f 
        `
    Chimbro = true
}
function showReplyOptions (reply1: string, reply2: string, reply3: string) {
    blockMenu.showMenu([
    reply1,
    reply2,
    reply3
    ], MenuStyle.List, MenuLocation.BottomHalf)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.ask("Reset progress?")) {
        if (game.ask("You sure?")) {
            blockSettings.clear()
            game.reset()
        }
    }
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.IconProfile, function (sprite, otherSprite) {
    if (canPress) {
        spriteutils.moveTo(No_Notifs, spriteutils.pos(175, 75), 100)
        closePopUp.x = 165
        canPress = false
    }
})
function glitchEffect (lengthOfGlitch: number, intervalBetweenGlitches: number) {
    timer.after(intervalBetweenGlitches, function () {
        for (let index = 0; index <= 14; index++) {
            color.setColor(15 - index, color.rgb(Math.constrain(index / 6 * 255, 0, 255), index / 20 * 255, index / 20 * 255))
        }
        timer.after(lengthOfGlitch, function () {
            color.setPalette(
            color.originalPalette
            )
        })
    })
}
sprites.onCreated(SpriteKind.MAINpost, function (sprite) {
    numOfPosts += 1
    BottomPartImg = img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        ffffbdfdfdfdfdccdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        ffffddfdfcddfbdfdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `
    BottomPart = sprites.create(BottomPartImg, SpriteKind.bottom)
    BottomPart.y = 125
    images.print(BottomPartImg, "" + numOfPosts + " / " + numOfPosts, 157, 5, 15)
    images.print(BottomPartImg, "You are tracking this topic.", 6, 40, 4)
    images.print(BottomPartImg, "Tracking", 10, 27, 9)
    for (let value of sprites.allOfKind(SpriteKind.MAINpost)) {
        value.y += -51
    }
    for (let value of sprites.allOfKind(SpriteKind.post)) {
        value.y += -51
    }
})
function createPost (writerOfPost: string, postInput: string, postIcon: Image, text: string, animate: boolean) {
    postBgImg = img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `
    images.print(postBgImg, writerOfPost, 23, 4, 5)
    bgOfPost = sprites.create(postBgImg, SpriteKind.MAINpost)
    bgOfPost.y = 52
    likeBtn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.post)
    posterIcon = sprites.create(postIcon, SpriteKind.post)
    posterIcon.setPosition(10, 37)
    myTextSprite2 = fancyText.create(postInput, 190, 1)
    myTextSprite2.setPosition(100, 59)
    myTextSprite2.setKind(SpriteKind.post)
    if (animate) {
        fancyText.animateAtSpeed(myTextSprite2, fancyText.TextSpeed.Normal, fancyText.AnimationPlayMode.UntilDone)
    }
    for (let value of sprites.allOfKind(SpriteKind.post)) {
        value.setFlag(SpriteFlag.AutoDestroy, true)
        value.z = -4
    }
    for (let value of sprites.allOfKind(SpriteKind.MAINpost)) {
        value.setFlag(SpriteFlag.AutoDestroy, true)
        value.z = -5
    }
}
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.X, function (sprite, otherSprite) {
    if (canPress) {
        spriteutils.moveTo(No_Notifs, spriteutils.pos(225, 75), 100)
        closePopUp.x = 225
        canPress = false
    }
})
function playAsSarge () {
    ProfileButton = sprites.create(img`
        9 9 9 9 9 9 
        9 c c c 9 9 
        9 f 6 7 9 9 
        9 f c c 9 9 
        c f c f c 9 
        f f f f f f 
        f f f f f f 
        `, SpriteKind.IconProfile)
    Mouse = sprites.create(img`
        . a a a . . . . . . 
        9 a f a a . . . . . 
        9 a f f a a . . . . 
        9 a f f f a a . . . 
        9 a f f f f a a . . 
        9 a f f f f f a a . 
        9 a f f f f f f a a 
        9 a f f f f f f f a 
        9 a f f f f a a a a 
        9 a f f f f a a 9 . 
        9 a f a a f f a . . 
        9 a a a 9 a f a . . 
        9 9 9 . 9 a f a . . 
        . . . . 9 a a a . . 
        . . . . 9 9 9 . . . 
        `, SpriteKind.Player)
    profileName = "Sarge"
    replyImg = img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f f f f 9 9 9 9 
        9 9 9 c f f 7 7 7 c 6 9 9 9 
        9 9 9 f f f 7 7 6 c 9 9 9 9 
        9 9 9 c f f c 7 c c 6 9 9 9 
        9 9 9 c f c c c c c 9 9 9 9 
        9 c f c f c c c c c f 9 9 9 
        9 f f f c c c c c f c 9 9 9 
        9 f f f f f c c c f f c 9 9 
        f f f f f f f f f f f f 6 9 
        f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f 
        `
    Sarge = true
}
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.ArcadeLink, function (sprite, otherSprite) {
    if (canPress) {
        if (!(blockSettings.exists("part1complete"))) {
            sprites.destroy(NewGameLink)
            Bg = img`
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfbffffbbbbfffcfccbfff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbfffffffffffcc6c7fff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfbffffffffffffcbfcfff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffbbbbfffffcfffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `
            replyBtnImg = img`
                .999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                888888888888888888888888888888888888888.
                `
            images.print(replyBtnImg, "Reply", 6, 3, 15)
            replyBtn = sprites.create(replyBtnImg, SpriteKind.repButton)
            replyBtn.z = 2
            replyBtn.setPosition(45, 110)
            sprites.destroy(NewGameLink2)
            canPress = false
            canReply = false
            createPost("randomuser", "Check out my game! https://makecode.com/_36chFUaaYgrY", img`
                1 1 1 1 1 1 1 1 1 f 1 d 1 1 
                1 1 1 1 f 1 1 1 1 b b 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 f f c 
                1 1 1 1 1 b 1 1 1 1 f 1 b 1 
                1 1 1 1 1 1 1 1 1 1 1 c 1 1 
                1 1 d 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 c 1 f 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 f 1 1 1 
                1 1 1 1 1 1 1 1 1 b b 1 1 1 
                1 1 1 1 1 f 1 1 1 1 f f 1 1 
                1 1 1 c 1 1 1 1 f f 1 c 1 f 
                1 1 1 1 1 1 1 1 d f 1 1 1 1 
                1 1 1 1 1 d 1 1 1 1 1 1 1 1 
                1 1 1 1 f c 1 1 1 1 1 1 1 1 
                `, "abc", false)
            timer.after(randint(2000, 5000), function () {
                createPost("scamma", "This game is so bad XD", img`
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    `, "abc", false)
                timer.after(randint(2000, 5000), function () {
                    createPost("randomuser", "Hey, I worked hard on that!", img`
                        1 1 1 1 1 1 1 1 1 f 1 d 1 1 
                        1 1 1 1 f 1 1 1 1 b b 1 1 1 
                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                        1 1 1 1 1 1 1 1 1 1 1 f f c 
                        1 1 1 1 1 b 1 1 1 1 f 1 b 1 
                        1 1 1 1 1 1 1 1 1 1 1 c 1 1 
                        1 1 d 1 1 1 1 1 1 1 1 1 1 1 
                        1 1 1 1 c 1 f 1 1 1 1 1 1 1 
                        1 1 1 1 1 1 1 1 1 1 f 1 1 1 
                        1 1 1 1 1 1 1 1 1 b b 1 1 1 
                        1 1 1 1 1 f 1 1 1 1 f f 1 1 
                        1 1 1 c 1 1 1 1 f f 1 c 1 f 
                        1 1 1 1 1 1 1 1 d f 1 1 1 1 
                        1 1 1 1 1 d 1 1 1 1 1 1 1 1 
                        1 1 1 1 f c 1 1 1 1 1 1 1 1 
                        `, "abc", false)
                    timer.after(randint(2000, 5000), function () {
                        createPost("goldtopaz", "How did this even get approved?", img`
                            d b d c b e e e b d d d d d 
                            d 5 1 c b f 1 1 c d d d d d 
                            d 5 c f b b f b c b d d d d 
                            f c c 1 1 f b d b f d d d d 
                            f b d b b b b c d f d d d d 
                            c b e c d 1 c d b f d d d d 
                            d e c c f f c b c d d d d d 
                            d d d 4 f b c e 4 d f b c d 
                            d d c b b c b 5 c b d f c d 
                            d c c c e c f e b b c c f d 
                            d d d b d d 1 c c b 4 c 5 d 
                            d f 1 c c f f c c b 1 f c d 
                            f f c d f 5 4 f c b c c d d 
                            d d d d d d e b f f d b d d 
                            d d d d d d d d d d d d d d 
                            `, "abc", false)
                        waitForReply(true, "abc", "abc", "abc")
                        timer.after(2500, function () {
                            createPost("scamma", "Uh... @" + profileName + "... why are YOU here?", img`
                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                `, "abc", false)
                            timer.after(randint(2000, 5000), function () {
                                createPost("scamma", "MakeCode is down, I can finally take over the forums, and you show up?", img`
                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                    `, "abc", false)
                                timer.after(randint(2000, 5000), function () {
                                    createPost("DangerNoodle", "MakeCode... is down?", img`
                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                        4 4 4 c f c b b 4 4 4 4 4 4 
                                        4 e c c e c d d 4 4 4 4 4 4 
                                        4 c e e b e d e d 4 4 4 4 4 
                                        4 4 f f f f e e d 4 4 4 4 4 
                                        4 4 4 4 4 f f f d b 4 4 4 4 
                                        4 4 4 4 c b d b c c b 4 4 4 
                                        4 4 4 f c e c 4 e f c c 4 4 
                                        4 4 4 f c e c c f c f c c 4 
                                        4 4 4 f c e c c c b c c f 4 
                                        4 4 4 f c e c f c b f c 4 4 
                                        4 4 4 f c e f c c c c c 4 4 
                                        `, "abc", false)
                                    timer.after(randint(2000, 5000), function () {
                                        createPost("InvalidProject99", "@scamma, I don't buy it. ", img`
                                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                            9 9 9 9 9 9 9 9 1 9 9 9 9 9 
                                            9 9 9 9 9 9 b d c 9 9 9 9 9 
                                            9 9 9 9 d d b f f 1 9 9 9 9 
                                            9 9 9 1 f c f f d c 9 9 9 9 
                                            9 9 9 d f c f b f d b 9 9 9 
                                            9 9 9 d d f f f d 1 9 9 9 9 
                                            9 9 9 1 f d d d 9 9 9 9 9 9 
                                            9 9 9 9 d 9 9 9 9 9 9 9 9 9 
                                            9 9 9 9 1 d 9 9 9 9 9 9 9 9 
                                            9 9 9 9 9 d f 9 9 9 9 9 9 9 
                                            e e b 9 d f 1 9 9 9 9 9 7 9 
                                            e b e e 9 f f 9 9 9 5 7 5 7 
                                            e 4 e e c f f 9 9 5 5 5 5 5 
                                            `, "abc", false)
                                        timer.after(randint(2000, 5000), function () {
                                            createPost("scamma", "Good. You don't need to. You have no control over whats going to happen.", img`
                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                `, "abc", false)
                                            timer.after(randint(2000, 5000), function () {
                                                createPost("scamma", "You guys don't understand how much trouble you're in. You need... a hero.", img`
                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                    `, "abc", false)
                                                timer.after(2500, function () {
                                                    waitForReply(false, "Ok, then. What's gonna happen?", "We have plenty of control, thank you very much.", "@scamma Why are you doing this?")
                                                    timer.after(2500, function () {
                                                        if (blockMenu.selectedMenuIndex() == 0) {
                                                            good = 1
                                                            timer.after(randint(2000, 5000), function () {
                                                                createPost("scamma", "Ha! Fine I'll tell you.", img`
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    `, "abc", false)
                                                                timer.after(randint(2000, 5000), function () {
                                                                    createPost("scamma", "This entire forum... it will be destroyed.", img`
                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                        `, "abc", false)
                                                                    timer.after(randint(2000, 5000), function () {
                                                                        createPost("scamma", "And there will be NOTHING you can do about it.", img`
                                                                            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                            `, "abc", false)
                                                                        continueDialogue1()
                                                                    })
                                                                })
                                                            })
                                                        } else if (blockMenu.selectedMenuIndex() == 1) {
                                                            bad = 1
                                                            timer.after(randint(2000, 5000), function () {
                                                                createPost("scamma", "Really, @" + profileName + "? Think again.", img`
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    `, "abc", false)
                                                                timer.after(randint(2000, 5000), function () {
                                                                    createPost("scamma", "I already have malware across the entire site. It's hopeless.", img`
                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                        `, "abc", false)
                                                                    timer.after(randint(2000, 5000), function () {
                                                                        createPost("scamma", "You can't even like or flag posts!", img`
                                                                            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                            `, "abc", false)
                                                                        continueDialogue1()
                                                                    })
                                                                })
                                                            })
                                                        } else if (blockMenu.selectedMenuIndex() == 2) {
                                                            perfect = 1
                                                            timer.after(randint(2000, 5000), function () {
                                                                createPost("scamma", "Looks like someone's finally asking the right questions.", img`
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    `, "abc", false)
                                                                timer.after(randint(2000, 5000), function () {
                                                                    createPost("scamma", "I used MakeCode once... back when I was a kid.", img`
                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                        `, "abc", false)
                                                                    timer.after(randint(2000, 5000), function () {
                                                                        createPost("scamma", "Like the usual, I got stuck on a problem.", img`
                                                                            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                            4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                            4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                            `, "abc", false)
                                                                        timer.after(randint(2000, 5000), function () {
                                                                            createPost("scamma", "I went onto the forum, playful and oblivious.", img`
                                                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                `, "abc", false)
                                                                            timer.after(randint(2000, 5000), function () {
                                                                                createPost("scamma", "I typed my question, waiting for an answer, and guess what...", img`
                                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                    `, "abc", false)
                                                                                timer.after(randint(2000, 5000), function () {
                                                                                    createPost("scamma", "I GOT NO REPLY.", img`
                                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                        `, "abc", false)
                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                        createPost("AbstractDesigner", "...seriously? -_-", img`
                                                                                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                                            9 9 c c c c f f f f 9 9 9 9 
                                                                                            9 9 c 7 e b c f 6 f 9 9 9 9 
                                                                                            9 9 c d 7 7 c 6 6 f 9 9 9 9 
                                                                                            9 9 c c 7 d 4 c f f 9 9 9 9 
                                                                                            9 9 9 c d d 4 4 f 9 9 9 9 9 
                                                                                            9 9 c c d d 4 4 f f 9 9 9 9 
                                                                                            9 9 c d d d 4 d 4 f 9 9 9 9 
                                                                                            9 9 c d d c d f d f 9 9 9 9 
                                                                                            9 9 c d 5 d 4 4 d f 9 9 9 9 
                                                                                            9 9 c c d d d d f f 9 9 9 9 
                                                                                            9 9 9 c c c f f f 9 9 9 9 9 
                                                                                            9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                                                                            9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                                                                            `, "abc", false)
                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                            createPost("scamma", "After that day, I swore I'd get my revenge...", img`
                                                                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                                `, "abc", false)
                                                                                            continueDialogue1()
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        }
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        } else {
            scene.cameraShake(3, 500)
        }
    }
})
function waitForReply (replyTyped: boolean, one: string, two: string, three: string) {
    replied = false
    replyToBeTyped = replyTyped
    reply = ""
    canReply = true
    if (!(replyToBeTyped)) {
        showReplyOptions(one, two, three)
        waitToSelectOption = true
        canReply = false
    }
    pauseUntil(() => replied)
    if (replied) {
        createPost(profileName, reply, replyImg, "abc", false)
    }
}
function openTheHomePage () {
    if (blockSettings.exists("part1complete")) {
        glitching = true
    }
    Bg = img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfbffffbbbbfffcfccbfff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbfffffffffffcc6c7fff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfbffffffffffffcbfcfff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffbbbbfffffcfffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccff
        fffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccff
        ffffdffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccddccccccff
        fffdfffddfccfcfffcbffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcbcbcbcccccccccff
        fffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccff
        fffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccff
        fbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccfffff
        f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33ffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33ffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffff
        f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffffff
        fbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffff
        fbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `
    navbar = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffff11111111ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1ffffffff11111111ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1ffffffff11111111ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffff11111111ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffff11111111ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffff11111111ffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Player)
    navbar.y = 3
    navbar.z = -1
    myTextSprite3 = fancyText.create("Microsoft MakeCode", 0, 5)
    myTextSprite3.setPosition(65, 8)
    myTextSprite3.setKind(SpriteKind.Player)
    images.print(Bg, "Arcade", 5, 26, 2)
    images.print(Bg, "New game!", 5, 36, 1)
    NewGameLink = sprites.create(img`
        f2f4f2ff2f2fffffffff22ff2f332fff22fffffff22fffff2ff
        2fff2ffeeff2efffff53fffffffffe22fff25fffffffffffff3
        f5fffffff23fff2efe5ffff33fffffffffffffffff3f3f3ffff
        ffffff2ff22f2ffff3f2ffffffffffff2fffffff3ffff5fff5f
        fffffff2ffff22ffff2ffffffff2ff3ffffffff33ff2fffffff
        fffffffffff2efffffffeff22fff5ffffffff233ff5ffffffff
        fffff55ffffffff3ffffffffffffeff22f32f2fff5ff3fffff2
        ff3f33f3ffffffff522ff55ff2fff323f333ffff22f2fffff2f
        `, SpriteKind.ArcadeLink)
    NewGameLink.setPosition(31, 40)
    NewGameLink2 = sprites.create(img`
        f2f4f2ff2f2fffffffff22ff2f332fff22fffffff22fffff2ff
        2fff2ffeeff2efffff53fffffffffe22fff25fffffffffffff3
        f5fffffff23fff2efe5ffff33fffffffffffffffff3f3f3ffff
        ffffff2ff22f2ffff3f2ffffffffffff2fffffff3ffff5fff5f
        fffffff2ffff22ffff2ffffffff2ff3ffffffff33ff2fffffff
        fffffffffff2efffffffeff22fff5ffffffff233ff5ffffffff
        fffff55ffffffff3ffffffffffffeff22f32f2fff5ff3fffff2
        ff3f33f3ffffffff522ff55ff2fff323f333ffff22f2fffff2f
        `, SpriteKind.imstuckLink)
    NewGameLink2.setPosition(31, 100)
    NewGameLink3 = sprites.create(img`
        f2f4f2ff2f2fffffffff22ff2f332fff22fffffff22fffff2fffffffffffffffffffffffffffffffffffffffffffffffffff
        2fff2ffeeff2efffff53fffffffffe22fff25fffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffff
        f5fffffff23fff2efe5ffff33fffffffffffffffff3f3f3fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff2ff22f2ffff3f2ffffffffffff2fffffff3ffff5fff5ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff2ffff22ffff2ffffffff2ff3ffffffff33ff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff2efffffffeff22fff5ffffffff233ff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff55ffffffff3ffffffffffffeff22f32f2fff5ff3fffff2fffffffffffffffffffffffffffffffffffffffffffffffff
        ff3f33f3ffffffff522ff55ff2fff323f333ffff22f2fffff2ffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.fonctionLink)
    NewGameLink3.setPosition(50, 110)
    NewGameLink3.setFlag(SpriteFlag.Invisible, true)
    if (!(blockSettings.exists("part1complete"))) {
        NewGameLink.setFlag(SpriteFlag.Invisible, true)
    }
    if (!(blockSettings.exists("part2complete"))) {
        NewGameLink2.setFlag(SpriteFlag.Invisible, true)
    }
    images.print(Bg, "Zombies of God!", 5, 46, 12)
    images.print(Bg, "Coder King 3: legends", 5, 56, 12)
    images.print(Bg, "Hyper the Dragon (BETA)", 5, 66, 12)
    images.print(Bg, "Help", 5, 85, 7)
    images.print(Bg, "I'm stuck", 5, 95, 1)
    images.print(Bg, "Foncton problem", 5, 105, 1)
    images.print(Bg, "A game idea", 5, 115, 12)
    images.print(Bg, "Forum Feedback", 5, 135, 11)
    images.print(Bg, "Username change requests", 5, 145, 12)
    ProfileButton.setPosition(193, 9)
    Mouse.setStayInScreen(true)
    Mouse.z = 99
    MouseHitbox = sprites.create(img`
        2 2 2 2 2 
        2 2 2 2 2 
        2 2 2 2 2 
        2 2 2 2 2 
        2 2 2 2 2 
        `, SpriteKind.Hitbox)
    No_Notifs = sprites.create(img`
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cffff1ff1fffffffffffffffffffffffffffffffffffffffff
        cffff11f1f111fffffffffffffffffffffffffffffffffffff
        cffff1f11f1f1fffffffffffffffffffffffffffffffffffff
        cffff1ff1f111fffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cffffffffffffffff1f11f1ffffffffffff1ffffffffffffff
        cffff1ff1fffff1ffff1ffffffffffff1fffffffffffffffff
        cffff11f1f111f11f1f11f1f11f111ff11f1f111f111ff11ff
        cffff1f11f1f1f1ff1f1ff1f1ff1f1ff1ff1f1f1f1f1f1ffff
        cffff1ff1f111f11f1f1ff1f11f1111f11f1f111f1f1ff1fff
        cffffffffffffffffff1fffffffffffffffffffffffffff1ff
        cffffffffffffffffffffffffffffffffffffffffffff11fff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        cfffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Popup)
    closePopUp = sprites.create(img`
        . 2 . . . . . . . . . . . . . . 2 
        3 2 2 . . . . . . . . . . . . 2 2 
        3 3 2 2 . . . . . . . . . . 2 2 . 
        . 3 3 2 2 . . . . . . . . 2 2 . . 
        . . 3 3 2 2 . . . . . . 2 2 . . . 
        . . . 3 3 2 2 . . . . 2 2 . . . . 
        . . . . 3 3 2 2 . . 2 2 . . . . . 
        . . . . . 3 3 2 2 2 2 . . . . . . 
        . . . . . . 3 2 2 2 2 . . . . . . 
        . . . . . . 2 2 . 3 2 2 . . . . . 
        . . . . . 2 2 . . 3 3 2 2 . . . . 
        . . . . 2 2 . . . . 3 3 2 2 . . . 
        . . . 2 2 . . . . . . 3 3 2 2 . . 
        . . 2 2 . . . . . . . . 3 3 2 2 . 
        . 2 2 . . . . . . . . . . 3 3 2 2 
        3 2 . . . . . . . . . . . . 3 3 2 
        3 . . . . . . . . . . . . . . 3 . 
        `, SpriteKind.X)
    No_Notifs.z = 1
    closePopUp.z = 1
    No_Notifs.x = 225
    closePopUp.x = 225
    closePopUp.y = 15
    MouseHitbox.setFlag(SpriteFlag.Invisible, true)
    controller.moveSprite(Mouse, 80, 80)
    gameSetUp = true
}
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.imstuckLink, function (sprite, otherSprite) {
    if (canPress) {
        if (!(blockSettings.exists("part2complete")) && blockSettings.exists("part1complete")) {
            sprites.destroy(NewGameLink)
            Bg = img`
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfbffffbbbbfffcfccbfff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbfffffffffffcc6c7fff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfbffffffffffffcbfcfff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffbbbbfffffcfffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `
            replyBtnImg = img`
                .999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                8999999999999999999999999999999999999999
                888888888888888888888888888888888888888.
                `
            images.print(replyBtnImg, "Reply", 6, 3, 15)
            replyBtn = sprites.create(replyBtnImg, SpriteKind.repButton)
            replyBtn.z = 2
            replyBtn.setPosition(45, 110)
            sprites.destroy(NewGameLink2)
            canPress = false
            canReply = false
            createPost("Sonicblaston", "How do you make a sprite follow another sprite?", img`
                a a a a a a a a a a a a a a 
                a a a a 9 9 9 9 9 9 9 9 a a 
                a a a 9 1 1 9 9 9 9 9 9 9 a 
                a a 9 1 9 9 f 9 9 9 9 9 a a 
                a a 9 9 9 9 9 9 9 f 9 9 8 a 
                a a 9 9 9 9 9 9 9 9 9 8 8 a 
                a a 9 9 9 9 9 9 f 9 9 8 a a 
                a a 9 9 9 9 f f 9 9 9 8 a a 
                a a a 9 9 9 9 9 9 9 8 a a a 
                a a a 9 9 9 9 9 9 8 a a a a 
                a a a b d 9 b 9 8 8 a a a a 
                a a b f d 9 1 b 8 a a a a a 
                a a f f f b f f a a a a a a 
                a b f f f f f f a a a a a a 
                a f f f f f f f b a a a a a 
                `, "abc", false)
            timer.after(randint(2000, 5000), function () {
                createPost("Taser", "Yikes, the forums are in BAD shape. What happened?", img`
                    d d d d d b b f f f d d b d 
                    d d d c c c f f f b d d d d 
                    d d d d d f f f f b b d d d 
                    d d d d d 5 5 5 5 f f d d d 
                    d b d d d 5 e 5 5 d d d b d 
                    d d d d d 5 5 5 e d d d d d 
                    d d d b d d f f f f b d d d 
                    d d d f f e e e f f f f d d 
                    d d f f f f f e f c d f f d 
                    d f f c b f e 5 f f b f f c 
                    d f c f f f e 5 f f f d f f 
                    f d f f f f 8 f f f f d b f 
                    5 d b b f 8 8 8 8 f f f d 5 
                    d d d b 8 8 d b d f 8 d d 5 
                    d d d d 8 d d d d d 8 d d d 
                    `, "abc", false)
                timer.after(randint(2000, 5000), function () {
                    createPost("InvalidProject99", "I... I don't even know...", img`
                        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                        9 9 9 9 9 9 9 9 1 9 9 9 9 9 
                        9 9 9 9 9 9 b d c 9 9 9 9 9 
                        9 9 9 9 d d b f f 1 9 9 9 9 
                        9 9 9 1 f c f f d c 9 9 9 9 
                        9 9 9 d f c f b f d b 9 9 9 
                        9 9 9 d d f f f d 1 9 9 9 9 
                        9 9 9 1 f d d d 9 9 9 9 9 9 
                        9 9 9 9 d 9 9 9 9 9 9 9 9 9 
                        9 9 9 9 1 d 9 9 9 9 9 9 9 9 
                        9 9 9 9 9 d f 9 9 9 9 9 9 9 
                        e e b 9 d f 1 9 9 9 9 9 7 9 
                        e b e e 9 f f 9 9 9 5 7 5 7 
                        e 4 e e c f f 9 9 5 5 5 5 5 
                        `, "abc", false)
                    timer.after(1000, function () {
                        waitForReply(false, "Is @richard ok?", "What's happening to the forums?", "Is that other post destroyed?")
                        timer.after(randint(2000, 5000), function () {
                            createPost("InvalidProject99", "I'm not sure. This is bad...", img`
                                9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                9 9 9 9 9 9 9 9 1 9 9 9 9 9 
                                9 9 9 9 9 9 b d c 9 9 9 9 9 
                                9 9 9 9 d d b f f 1 9 9 9 9 
                                9 9 9 1 f c f f d c 9 9 9 9 
                                9 9 9 d f c f b f d b 9 9 9 
                                9 9 9 d d f f f d 1 9 9 9 9 
                                9 9 9 1 f d d d 9 9 9 9 9 9 
                                9 9 9 9 d 9 9 9 9 9 9 9 9 9 
                                9 9 9 9 1 d 9 9 9 9 9 9 9 9 
                                9 9 9 9 9 d f 9 9 9 9 9 9 9 
                                e e b 9 d f 1 9 9 9 9 9 7 9 
                                e b e e 9 f f 9 9 9 5 7 5 7 
                                e 4 e e c f f 9 9 5 5 5 5 5 
                                `, "abc", false)
                            timer.after(randint(2000, 5000), function () {
                                createPost("Opisticks", "I keep trying to enter the post, but it's not working!", img`
                                    b b b b b b b b 4 4 b b b b 
                                    b b b b b 4 5 5 5 b b b b b 
                                    b b 7 5 b 5 5 5 5 5 5 b 7 b 
                                    b b b b 7 7 7 7 5 5 4 b 4 b 
                                    b b b 7 7 7 7 7 7 4 b b 5 b 
                                    b b b 7 7 7 7 7 7 7 b b b b 
                                    b b b 7 7 7 7 7 7 7 b b b b 
                                    b b 7 b 7 7 7 7 7 7 b b b b 
                                    b b 7 b b 7 7 7 7 b b b b b 
                                    b b 7 7 7 7 7 7 b b b b b b 
                                    b b 7 b 7 7 b 7 7 b b b b b 
                                    b 7 7 b 7 b b b b b b b b b 
                                    b 7 b 7 7 b b b b b b b b b 
                                    b b 7 7 b b b b b b b b b b 
                                    b 7 7 b b b b b b b b b b b 
                                    `, "abc", false)
                                timer.after(randint(2000, 5000), function () {
                                    createPost("Sonicblaston", "Um, sorry to barge, but can someone answer my question?", img`
                                        a a a a a a a a a a a a a a 
                                        a a a a 9 9 9 9 9 9 9 9 a a 
                                        a a a 9 1 1 9 9 9 9 9 9 9 a 
                                        a a 9 1 9 9 f 9 9 9 9 9 a a 
                                        a a 9 9 9 9 9 9 9 f 9 9 8 a 
                                        a a 9 9 9 9 9 9 9 9 9 8 8 a 
                                        a a 9 9 9 9 9 9 f 9 9 8 a a 
                                        a a 9 9 9 9 f f 9 9 9 8 a a 
                                        a a a 9 9 9 9 9 9 9 8 a a a 
                                        a a a 9 9 9 9 9 9 8 a a a a 
                                        a a a b d 9 b 9 8 8 a a a a 
                                        a a b f d 9 1 b 8 a a a a a 
                                        a a f f f b f f a a a a a a 
                                        a b f f f f f f a a a a a a 
                                        a f f f f f f f b a a a a a 
                                        `, "abc", false)
                                    timer.after(randint(2000, 5000), function () {
                                        createPost("goldtopaz", "There has to be a way in...", img`
                                            d b d c b e e e b d d d d d 
                                            d 5 1 c b f 1 1 c d d d d d 
                                            d 5 c f b b f b c b d d d d 
                                            f c c 1 1 f b d b f d d d d 
                                            f b d b b b b c d f d d d d 
                                            c b e c d 1 c d b f d d d d 
                                            d e c c f f c b c d d d d d 
                                            d d d 4 f b c e 4 d f b c d 
                                            d d c b b c b 5 c b d f c d 
                                            d c c c e c f e b b c c f d 
                                            d d d b d d 1 c c b 4 c 5 d 
                                            d f 1 c c f f c c b 1 f c d 
                                            f f c d f 5 4 f c b c c d d 
                                            d d d d d d e b f f d b d d 
                                            d d d d d d d d d d d d d d 
                                            `, "abc", false)
                                        timer.after(randint(2000, 5000), function () {
                                            createPost("Sonicblaston", "-_- Will anyone ever answer my question? @discobot fortune", img`
                                                a a a a a a a a a a a a a a 
                                                a a a a 9 9 9 9 9 9 9 9 a a 
                                                a a a 9 1 1 9 9 9 9 9 9 9 a 
                                                a a 9 1 9 9 f 9 9 9 9 9 a a 
                                                a a 9 9 9 9 9 9 9 f 9 9 8 a 
                                                a a 9 9 9 9 9 9 9 9 9 8 8 a 
                                                a a 9 9 9 9 9 9 f 9 9 8 a a 
                                                a a 9 9 9 9 f f 9 9 9 8 a a 
                                                a a a 9 9 9 9 9 9 9 8 a a a 
                                                a a a 9 9 9 9 9 9 8 a a a a 
                                                a a a b d 9 b 9 8 8 a a a a 
                                                a a b f d 9 1 b 8 a a a a a 
                                                a a f f f b f f a a a a a a 
                                                a b f f f f f f a a a a a a 
                                                a f f f f f f f b a a a a a 
                                                `, "abc", false)
                                            timer.after(randint(2000, 5000), function () {
                                                createPost("discobot", "Outlook not so good", img`
                                                    1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                    1 a a a a a a a a a a a 1 1 
                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                    1 a 9 a a a a a a a 9 a 1 1 
                                                    1 9 a a a a a a a 9 a a 1 1 
                                                    b a a 5 5 a a a 5 5 a a b 1 
                                                    9 a a 5 5 a a a 5 5 a a 9 1 
                                                    9 a a a a a a a a a a a 9 1 
                                                    1 9 a a a a 9 a a a a a 1 1 
                                                    1 a d d d d d d d d d 9 1 1 
                                                    1 9 a a a a a a a a a 9 1 1 
                                                    1 1 a 9 9 9 9 9 9 9 a 1 1 1 
                                                    1 1 a a a a a a a a a 1 1 1 
                                                    `, "abc", false)
                                                timer.after(randint(2000, 5000), function () {
                                                    createPost("Sonicblaston", "This is such a joke...", img`
                                                        a a a a a a a a a a a a a a 
                                                        a a a a 9 9 9 9 9 9 9 9 a a 
                                                        a a a 9 1 1 9 9 9 9 9 9 9 a 
                                                        a a 9 1 9 9 f 9 9 9 9 9 a a 
                                                        a a 9 9 9 9 9 9 9 f 9 9 8 a 
                                                        a a 9 9 9 9 9 9 9 9 9 8 8 a 
                                                        a a 9 9 9 9 9 9 f 9 9 8 a a 
                                                        a a 9 9 9 9 f f 9 9 9 8 a a 
                                                        a a a 9 9 9 9 9 9 9 8 a a a 
                                                        a a a 9 9 9 9 9 9 8 a a a a 
                                                        a a a b d 9 b 9 8 8 a a a a 
                                                        a a b f d 9 1 b 8 a a a a a 
                                                        a a f f f b f f a a a a a a 
                                                        a b f f f f f f a a a a a a 
                                                        a f f f f f f f b a a a a a 
                                                        `, "abc", false)
                                                    timer.after(randint(2000, 5000), function () {
                                                        createPost("KIKIvsIT", "Hello everyone!", img`
                                                            f f c c f f b c c c f f f f 
                                                            f f c e d d c f f f f f f f 
                                                            f f c b d d b d f f f c f f 
                                                            c c f d f d c f e f f f f c 
                                                            c f c b d d d d b f c f f f 
                                                            c c f e d d d d c f c f f c 
                                                            c c c c e b e b c c c f c c 
                                                            c c c f e d d e d c c c f c 
                                                            c c f f f c c d b c f f c c 
                                                            c f c f f c d d c c b c f c 
                                                            c c c b b b d c c b c c d d 
                                                            c c b d b d c c e c c d d d 
                                                            c f d b d d c f c c d d d d 
                                                            c c d d c c c d c c b d d d 
                                                            c f f c c c d d c c c b d d 
                                                            `, "abc", false)
                                                        timer.after(4000, function () {
                                                            createPost("Luke", "Yo KIKI's here too!", img`
                                                                9 9 9 9 6 9 6 6 9 9 9 9 9 9 
                                                                9 9 9 6 7 7 7 7 6 6 c 9 9 9 
                                                                9 9 d 6 6 6 6 7 6 6 7 f 9 9 
                                                                9 6 7 7 7 7 6 6 7 6 7 f c 9 
                                                                6 7 6 7 6 6 7 6 6 7 7 c 7 9 
                                                                6 7 7 6 6 6 6 6 6 6 6 6 7 9 
                                                                6 6 6 6 7 6 6 6 6 7 7 6 6 9 
                                                                b 6 c c 7 6 6 6 6 7 6 6 6 9 
                                                                6 6 6 6 f f f f d f 7 f 9 9 
                                                                6 6 f b f 7 7 7 f f 6 6 9 9 
                                                                9 9 6 6 7 7 7 7 7 c c c 9 9 
                                                                9 9 1 7 f f 7 f f 7 9 9 9 9 
                                                                9 9 9 7 7 7 b 7 7 7 9 9 9 9 
                                                                9 9 9 7 7 7 e 7 7 7 9 9 9 9 
                                                                9 9 9 9 9 f 7 f 9 9 9 9 9 9 
                                                                `, "abc", false)
                                                            timer.after(500, function () {
                                                                createPost("Brohann", "Is @jwunderl gonna come?", img`
                                                                    c c c c 7 e e e 7 e 7 7 7 7 
                                                                    7 e 7 e 7 e e e e 7 7 7 7 7 
                                                                    7 7 7 7 7 5 e e f 7 7 7 7 7 
                                                                    7 7 e 7 5 e 7 e f c 7 7 e 7 
                                                                    7 7 7 7 7 5 e f f c 7 7 7 7 
                                                                    7 7 7 7 7 7 7 f f c 7 7 7 7 
                                                                    7 7 7 7 5 f f f f f f c 7 e 
                                                                    7 7 7 7 e f f f f f f c c c 
                                                                    7 7 7 7 e f c f c f f c 7 7 
                                                                    7 7 5 e f 7 5 e f f e 7 7 e 
                                                                    5 7 5 f f 5 5 e e e 7 7 f e 
                                                                    5 5 7 e 5 5 5 e e 7 e f 7 7 
                                                                    5 7 f 5 5 5 e f 7 7 f c f f 
                                                                    5 e f 7 5 5 f f c 7 f 7 e 7 
                                                                    5 5 7 7 5 5 f f c f f c f 7 
                                                                    `, "abc", false)
                                                                timer.after(200, function () {
                                                                    createPost("Taser", "Pls tell us what's going on!", img`
                                                                        d d d d d b b f f f d d b d 
                                                                        d d d c c c f f f b d d d d 
                                                                        d d d d d f f f f b b d d d 
                                                                        d d d d d 5 5 5 5 f f d d d 
                                                                        d b d d d 5 e 5 5 d d d b d 
                                                                        d d d d d 5 5 5 e d d d d d 
                                                                        d d d b d d f f f f b d d d 
                                                                        d d d f f e e e f f f f d d 
                                                                        d d f f f f f e f c d f f d 
                                                                        d f f c b f e 5 f f b f f c 
                                                                        d f c f f f e 5 f f f d f f 
                                                                        f d f f f f 8 f f f f d b f 
                                                                        5 d b b f 8 8 8 8 f f f d 5 
                                                                        d d d b 8 8 d b d f 8 d d 5 
                                                                        d d d d 8 d d d d d 8 d d d 
                                                                        `, "abc", false)
                                                                    timer.after(300, function () {
                                                                        createPost("Sonicblaston", "Is it this @scamma guy?", img`
                                                                            a a a a a a a a a a a a a a 
                                                                            a a a a 9 9 9 9 9 9 9 9 a a 
                                                                            a a a 9 1 1 9 9 9 9 9 9 9 a 
                                                                            a a 9 1 9 9 f 9 9 9 9 9 a a 
                                                                            a a 9 9 9 9 9 9 9 f 9 9 8 a 
                                                                            a a 9 9 9 9 9 9 9 9 9 8 8 a 
                                                                            a a 9 9 9 9 9 9 f 9 9 8 a a 
                                                                            a a 9 9 9 9 f f 9 9 9 8 a a 
                                                                            a a a 9 9 9 9 9 9 9 8 a a a 
                                                                            a a a 9 9 9 9 9 9 8 a a a a 
                                                                            a a a b d 9 b 9 8 8 a a a a 
                                                                            a a b f d 9 1 b 8 a a a a a 
                                                                            a a f f f b f f a a a a a a 
                                                                            a b f f f f f f a a a a a a 
                                                                            a f f f f f f f b a a a a a 
                                                                            `, "abc", false)
                                                                        timer.after(200, function () {
                                                                            createPost("KIKIvsIT", "Everyone just calm down please!", img`
                                                                                f f c c f f b c c c f f f f 
                                                                                f f c e d d c f f f f f f f 
                                                                                f f c b d d b d f f f c f f 
                                                                                c c f d f d c f e f f f f c 
                                                                                c f c b d d d d b f c f f f 
                                                                                c c f e d d d d c f c f f c 
                                                                                c c c c e b e b c c c f c c 
                                                                                c c c f e d d e d c c c f c 
                                                                                c c f f f c c d b c f f c c 
                                                                                c f c f f c d d c c b c f c 
                                                                                c c c b b b d c c b c c d d 
                                                                                c c b d b d c c e c c d d d 
                                                                                c f d b d d c f c c d d d d 
                                                                                c c d d c c c d c c b d d d 
                                                                                c f f c c c d d c c c b d d 
                                                                                `, "abc", false)
                                                                            timer.after(8000, function () {
                                                                                createPost("KIKIvsIT", "Thank you.", img`
                                                                                    f f c c f f b c c c f f f f 
                                                                                    f f c e d d c f f f f f f f 
                                                                                    f f c b d d b d f f f c f f 
                                                                                    c c f d f d c f e f f f f c 
                                                                                    c f c b d d d d b f c f f f 
                                                                                    c c f e d d d d c f c f f c 
                                                                                    c c c c e b e b c c c f c c 
                                                                                    c c c f e d d e d c c c f c 
                                                                                    c c f f f c c d b c f f c c 
                                                                                    c f c f f c d d c c b c f c 
                                                                                    c c c b b b d c c b c c d d 
                                                                                    c c b d b d c c e c c d d d 
                                                                                    c f d b d d c f c c d d d d 
                                                                                    c c d d c c c d c c b d d d 
                                                                                    c f f c c c d d c c c b d d 
                                                                                    `, "abc", false)
                                                                                timer.after(1000, function () {
                                                                                    createPost("KIKIvsIT", "Now, we are in a grave situation. scamma is taking over our servers.", img`
                                                                                        f f c c f f b c c c f f f f 
                                                                                        f f c e d d c f f f f f f f 
                                                                                        f f c b d d b d f f f c f f 
                                                                                        c c f d f d c f e f f f f c 
                                                                                        c f c b d d d d b f c f f f 
                                                                                        c c f e d d d d c f c f f c 
                                                                                        c c c c e b e b c c c f c c 
                                                                                        c c c f e d d e d c c c f c 
                                                                                        c c f f f c c d b c f f c c 
                                                                                        c f c f f c d d c c b c f c 
                                                                                        c c c b b b d c c b c c d d 
                                                                                        c c b d b d c c e c c d d d 
                                                                                        c f d b d d c f c c d d d d 
                                                                                        c c d d c c c d c c b d d d 
                                                                                        c f f c c c d d c c c b d d 
                                                                                        `, "abc", false)
                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                        createPost("KIKIvsIT", "He's completely removed our access, and our ability to watch over the site.", img`
                                                                                            f f c c f f b c c c f f f f 
                                                                                            f f c e d d c f f f f f f f 
                                                                                            f f c b d d b d f f f c f f 
                                                                                            c c f d f d c f e f f f f c 
                                                                                            c f c b d d d d b f c f f f 
                                                                                            c c f e d d d d c f c f f c 
                                                                                            c c c c e b e b c c c f c c 
                                                                                            c c c f e d d e d c c c f c 
                                                                                            c c f f f c c d b c f f c c 
                                                                                            c f c f f c d d c c b c f c 
                                                                                            c c c b b b d c c b c c d d 
                                                                                            c c b d b d c c e c c d d d 
                                                                                            c f d b d d c f c c d d d d 
                                                                                            c c d d c c c d c c b d d d 
                                                                                            c f f c c c d d c c c b d d 
                                                                                            `, "abc", false)
                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                            createPost("KIKIvsIT", "Somehow, @richard managed to hack back into the system to warn you.", img`
                                                                                                f f c c f f b c c c f f f f 
                                                                                                f f c e d d c f f f f f f f 
                                                                                                f f c b d d b d f f f c f f 
                                                                                                c c f d f d c f e f f f f c 
                                                                                                c f c b d d d d b f c f f f 
                                                                                                c c f e d d d d c f c f f c 
                                                                                                c c c c e b e b c c c f c c 
                                                                                                c c c f e d d e d c c c f c 
                                                                                                c c f f f c c d b c f f c c 
                                                                                                c f c f f c d d c c b c f c 
                                                                                                c c c b b b d c c b c c d d 
                                                                                                c c b d b d c c e c c d d d 
                                                                                                c f d b d d c f c c d d d d 
                                                                                                c c d d c c c d c c b d d d 
                                                                                                c f f c c c d d c c c b d d 
                                                                                                `, "abc", false)
                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                createPost("KIKIvsIT", "Oh wait!", img`
                                                                                                    f f c c f f b c c c f f f f 
                                                                                                    f f c e d d c f f f f f f f 
                                                                                                    f f c b d d b d f f f c f f 
                                                                                                    c c f d f d c f e f f f f c 
                                                                                                    c f c b d d d d b f c f f f 
                                                                                                    c c f e d d d d c f c f f c 
                                                                                                    c c c c e b e b c c c f c c 
                                                                                                    c c c f e d d e d c c c f c 
                                                                                                    c c f f f c c d b c f f c c 
                                                                                                    c f c f f c d d c c b c f c 
                                                                                                    c c c b b b d c c b c c d d 
                                                                                                    c c b d b d c c e c c d d d 
                                                                                                    c f d b d d c f c c d d d d 
                                                                                                    c c d d c c c d c c b d d d 
                                                                                                    c f f c c c d d c c c b d d 
                                                                                                    `, "abc", false)
                                                                                                timer.after(1000, function () {
                                                                                                    createPost("KIKIvsIT", "Before I continue, NO ONE PING SCAMMA. NEVER.", img`
                                                                                                        f f c c f f b c c c f f f f 
                                                                                                        f f c e d d c f f f f f f f 
                                                                                                        f f c b d d b d f f f c f f 
                                                                                                        c c f d f d c f e f f f f c 
                                                                                                        c f c b d d d d b f c f f f 
                                                                                                        c c f e d d d d c f c f f c 
                                                                                                        c c c c e b e b c c c f c c 
                                                                                                        c c c f e d d e d c c c f c 
                                                                                                        c c f f f c c d b c f f c c 
                                                                                                        c f c f f c d d c c b c f c 
                                                                                                        c c c b b b d c c b c c d d 
                                                                                                        c c b d b d c c e c c d d d 
                                                                                                        c f d b d d c f c c d d d d 
                                                                                                        c c d d c c c d c c b d d d 
                                                                                                        c f f c c c d d c c c b d d 
                                                                                                        `, "abc", false)
                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                        createPost("Sonicblaston", "Oh no... I may have pinged him like 8 posts ago...", img`
                                                                                                            a a a a a a a a a a a a a a 
                                                                                                            a a a a 9 9 9 9 9 9 9 9 a a 
                                                                                                            a a a 9 1 1 9 9 9 9 9 9 9 a 
                                                                                                            a a 9 1 9 9 f 9 9 9 9 9 a a 
                                                                                                            a a 9 9 9 9 9 9 9 f 9 9 8 a 
                                                                                                            a a 9 9 9 9 9 9 9 9 9 8 8 a 
                                                                                                            a a 9 9 9 9 9 9 f 9 9 8 a a 
                                                                                                            a a 9 9 9 9 f f 9 9 9 8 a a 
                                                                                                            a a a 9 9 9 9 9 9 9 8 a a a 
                                                                                                            a a a 9 9 9 9 9 9 8 a a a a 
                                                                                                            a a a b d 9 b 9 8 8 a a a a 
                                                                                                            a a b f d 9 1 b 8 a a a a a 
                                                                                                            a a f f f b f f a a a a a a 
                                                                                                            a b f f f f f f a a a a a a 
                                                                                                            a f f f f f f f b a a a a a 
                                                                                                            `, "abc", false)
                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                            createPost("KIKIvsIT", "...oh no.", img`
                                                                                                                f f c c f f b c c c f f f f 
                                                                                                                f f c e d d c f f f f f f f 
                                                                                                                f f c b d d b d f f f c f f 
                                                                                                                c c f d f d c f e f f f f c 
                                                                                                                c f c b d d d d b f c f f f 
                                                                                                                c c f e d d d d c f c f f c 
                                                                                                                c c c c e b e b c c c f c c 
                                                                                                                c c c f e d d e d c c c f c 
                                                                                                                c c f f f c c d b c f f c c 
                                                                                                                c f c f f c d d c c b c f c 
                                                                                                                c c c b b b d c c b c c d d 
                                                                                                                c c b d b d c c e c c d d d 
                                                                                                                c f d b d d c f c c d d d d 
                                                                                                                c c d d c c c d c c b d d d 
                                                                                                                c f f c c c d d c c c b d d 
                                                                                                                `, "abc", false)
                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                createPost("scamma", "Oh yes.", img`
                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                    `, "abc", false)
                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                    createPost("scamma", "Whaddaya think of my new pfp?", img`
                                                                                                                        c c c c c c c c c c c c c c 
                                                                                                                        f f f f c c c c c c c c f f 
                                                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                                                        f f e e e e f f e e e f f f 
                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                        f f f f f f f f f f f e f f 
                                                                                                                        f f f f f f f e e e e e f f 
                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                        `, "abc", false)
                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                        createPost("AbstractDesigner", "Just get lost scamma!", img`
                                                                                                                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                                                                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                                                                            9 9 c c c c f f f f 9 9 9 9 
                                                                                                                            9 9 c 7 e b c f 6 f 9 9 9 9 
                                                                                                                            9 9 c d 7 7 c 6 6 f 9 9 9 9 
                                                                                                                            9 9 c c 7 d 4 c f f 9 9 9 9 
                                                                                                                            9 9 9 c d d 4 4 f 9 9 9 9 9 
                                                                                                                            9 9 c c d d 4 4 f f 9 9 9 9 
                                                                                                                            9 9 c d d d 4 d 4 f 9 9 9 9 
                                                                                                                            9 9 c d d c d f d f 9 9 9 9 
                                                                                                                            9 9 c d 5 d 4 4 d f 9 9 9 9 
                                                                                                                            9 9 c c d d d d f f 9 9 9 9 
                                                                                                                            9 9 9 c c c f f f 9 9 9 9 9 
                                                                                                                            9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                                                                                                            9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                                                                                                            `, "abc", false)
                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                            glitchEffect(3000, 0)
                                                                                                                            scene.cameraShake(4, 3000)
                                                                                                                            createPost("scamma", "@AbstractDesigner I'm not in a very good mood...", img`
                                                                                                                                c c c c c c c c c c c c c c 
                                                                                                                                f f f f c c c c c c c c f f 
                                                                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                f f e e e e f f e e e f f f 
                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                f f f f f f f f f f f e f f 
                                                                                                                                f f f f f f f e e e e e f f 
                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                `, "abc", false)
                                                                                                                            timer.after(3000, function () {
                                                                                                                                createPost("Sonicblaston", "Is this guy gonna delete us? @discobot fortune", img`
                                                                                                                                    a a a a a a a a a a a a a a 
                                                                                                                                    a a a a 9 9 9 9 9 9 9 9 a a 
                                                                                                                                    a a a 9 1 1 9 9 9 9 9 9 9 a 
                                                                                                                                    a a 9 1 9 9 f 9 9 9 9 9 a a 
                                                                                                                                    a a 9 9 9 9 9 9 9 f 9 9 8 a 
                                                                                                                                    a a 9 9 9 9 9 9 9 9 9 8 8 a 
                                                                                                                                    a a 9 9 9 9 9 9 f 9 9 8 a a 
                                                                                                                                    a a 9 9 9 9 f f 9 9 9 8 a a 
                                                                                                                                    a a a 9 9 9 9 9 9 9 8 a a a 
                                                                                                                                    a a a 9 9 9 9 9 9 8 a a a a 
                                                                                                                                    a a a b d 9 b 9 8 8 a a a a 
                                                                                                                                    a a b f d 9 1 b 8 a a a a a 
                                                                                                                                    a a f f f b f f a a a a a a 
                                                                                                                                    a b f f f f f f a a a a a a 
                                                                                                                                    a f f f f f f f b a a a a a 
                                                                                                                                    `, "abc", false)
                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                    createPost("discobot", "Ask again later", img`
                                                                                                                                        1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                                                                        1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                        1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                        1 a a a a a a a a a a a 1 1 
                                                                                                                                        1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                        1 a 9 a a a a a a a 9 a 1 1 
                                                                                                                                        1 9 a a a a a a a 9 a a 1 1 
                                                                                                                                        b a a 5 5 a a a 5 5 a a b 1 
                                                                                                                                        9 a a 5 5 a a a 5 5 a a 9 1 
                                                                                                                                        9 a a a a a a a a a a a 9 1 
                                                                                                                                        1 9 a a a a 9 a a a a a 1 1 
                                                                                                                                        1 a d d d d d d d d d 9 1 1 
                                                                                                                                        1 9 a a a a a a a a a 9 1 1 
                                                                                                                                        1 1 a 9 9 9 9 9 9 9 a 1 1 1 
                                                                                                                                        1 1 a a a a a a a a a 1 1 1 
                                                                                                                                        `, "abc", false)
                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                        createPost("scamma", "Interesting. You have a bot on this site. If I just...", img`
                                                                                                                                            c c c c c c c c c c c c c c 
                                                                                                                                            f f f f c c c c c c c c f f 
                                                                                                                                            5 4 3 f c c c c c c f f f 5 
                                                                                                                                            4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                            f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                            f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                            f f e e e e f f e e e f f f 
                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                            f f f f f f f f f f f e f f 
                                                                                                                                            f f f f f f f e e e e e f f 
                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                            `, "abc", false)
                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                            createPost("scamma", "echo:%20%20%20%%nobreak%20%3E%3E%20nul%0Aset%20l=0%0Acls%0Agoto%20matrix", img`
                                                                                                                                                c c c c c c c c c c c c c c 
                                                                                                                                                f f f f c c c c c c c c f f 
                                                                                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                f f e e e e f f e e e f f f 
                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                f f f f f f f f f f f e f f 
                                                                                                                                                f f f f f f f e e e e e f f 
                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                `, "abc", true)
                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                createPost("discobot", "EXTERNAL DOWNLOAD INITIATED", img`
                                                                                                                                                    1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                                                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                    1 a a a a a a a a a a a 1 1 
                                                                                                                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                    1 a 9 a a a a a a a 9 a 1 1 
                                                                                                                                                    1 9 a a a a a a a 9 a a 1 1 
                                                                                                                                                    b a a 5 5 a a a 5 5 a a b 1 
                                                                                                                                                    9 a a 5 5 a a a 5 5 a a 9 1 
                                                                                                                                                    9 a a a a a a a a a a a 9 1 
                                                                                                                                                    1 9 a a a a 9 a a a a a 1 1 
                                                                                                                                                    1 a d d d d d d d d d 9 1 1 
                                                                                                                                                    1 9 a a a a a a a a a 9 1 1 
                                                                                                                                                    1 1 a 9 9 9 9 9 9 9 a 1 1 1 
                                                                                                                                                    1 1 a a a a a a a a a 1 1 1 
                                                                                                                                                    `, "abc", false)
                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                    createPost("KIKIvsIT", "@scamma stop what you're doing immediately!", img`
                                                                                                                                                        f f c c f f b c c c f f f f 
                                                                                                                                                        f f c e d d c f f f f f f f 
                                                                                                                                                        f f c b d d b d f f f c f f 
                                                                                                                                                        c c f d f d c f e f f f f c 
                                                                                                                                                        c f c b d d d d b f c f f f 
                                                                                                                                                        c c f e d d d d c f c f f c 
                                                                                                                                                        c c c c e b e b c c c f c c 
                                                                                                                                                        c c c f e d d e d c c c f c 
                                                                                                                                                        c c f f f c c d b c f f c c 
                                                                                                                                                        c f c f f c d d c c b c f c 
                                                                                                                                                        c c c b b b d c c b c c d d 
                                                                                                                                                        c c b d b d c c e c c d d d 
                                                                                                                                                        c f d b d d c f c c d d d d 
                                                                                                                                                        c c d d c c c d c c b d d d 
                                                                                                                                                        c f f c c c d d c c c b d d 
                                                                                                                                                        `, "abc", false)
                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                        createPost("discobot", "DOWNLOAD COMPLETE. PREPARING INSTALLATION...", img`
                                                                                                                                                            1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                                                                                            1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                            1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                            1 a a a a a a a a a a a 1 1 
                                                                                                                                                            1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                            1 a 9 a a a a a a a 9 a 1 1 
                                                                                                                                                            1 9 a a a a a a a 9 a a 1 1 
                                                                                                                                                            b a a 5 5 a a a 5 5 a a b 1 
                                                                                                                                                            9 a a 5 5 a a a 5 5 a a 9 1 
                                                                                                                                                            9 a a a a a a a a a a a 9 1 
                                                                                                                                                            1 9 a a a a 9 a a a a a 1 1 
                                                                                                                                                            1 a d d d d d d d d d 9 1 1 
                                                                                                                                                            1 9 a a a a a a a a a 9 1 1 
                                                                                                                                                            1 1 a 9 9 9 9 9 9 9 a 1 1 1 
                                                                                                                                                            1 1 a a a a a a a a a 1 1 1 
                                                                                                                                                            `, "abc", true)
                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                            createPost("scamma", "Why should I? @KIKIvsIT like there's anything here anyway.", img`
                                                                                                                                                                c c c c c c c c c c c c c c 
                                                                                                                                                                f f f f c c c c c c c c f f 
                                                                                                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                f f e e e e f f e e e f f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                f f f f f f f f f f f e f f 
                                                                                                                                                                f f f f f f f e e e e e f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                `, "abc", false)
                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                createPost("KIKIvsIT", "@scamma There is MUCH more behind this site than you realise!", img`
                                                                                                                                                                    f f c c f f b c c c f f f f 
                                                                                                                                                                    f f c e d d c f f f f f f f 
                                                                                                                                                                    f f c b d d b d f f f c f f 
                                                                                                                                                                    c c f d f d c f e f f f f c 
                                                                                                                                                                    c f c b d d d d b f c f f f 
                                                                                                                                                                    c c f e d d d d c f c f f c 
                                                                                                                                                                    c c c c e b e b c c c f c c 
                                                                                                                                                                    c c c f e d d e d c c c f c 
                                                                                                                                                                    c c f f f c c d b c f f c c 
                                                                                                                                                                    c f c f f c d d c c b c f c 
                                                                                                                                                                    c c c b b b d c c b c c d d 
                                                                                                                                                                    c c b d b d c c e c c d d d 
                                                                                                                                                                    c f d b d d c f c c d d d d 
                                                                                                                                                                    c c d d c c c d c c b d d d 
                                                                                                                                                                    c f f c c c d d c c c b d d 
                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                    createPost("KIKIvsIT", "Look at how supportive they were of @randomuser's game!", img`
                                                                                                                                                                        f f c c f f b c c c f f f f 
                                                                                                                                                                        f f c e d d c f f f f f f f 
                                                                                                                                                                        f f c b d d b d f f f c f f 
                                                                                                                                                                        c c f d f d c f e f f f f c 
                                                                                                                                                                        c f c b d d d d b f c f f f 
                                                                                                                                                                        c c f e d d d d c f c f f c 
                                                                                                                                                                        c c c c e b e b c c c f c c 
                                                                                                                                                                        c c c f e d d e d c c c f c 
                                                                                                                                                                        c c f f f c c d b c f f c c 
                                                                                                                                                                        c f c f f c d d c c b c f c 
                                                                                                                                                                        c c c b b b d c c b c c d d 
                                                                                                                                                                        c c b d b d c c e c c d d d 
                                                                                                                                                                        c f d b d d c f c c d d d d 
                                                                                                                                                                        c c d d c c c d c c b d d d 
                                                                                                                                                                        c f f c c c d d c c c b d d 
                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                                        createPost("KIKIvsIT", "@Luke, @" + profileName + ", @Taser, @Brohann and more! We're all good at heart.", img`
                                                                                                                                                                            f f c c f f b c c c f f f f 
                                                                                                                                                                            f f c e d d c f f f f f f f 
                                                                                                                                                                            f f c b d d b d f f f c f f 
                                                                                                                                                                            c c f d f d c f e f f f f c 
                                                                                                                                                                            c f c b d d d d b f c f f f 
                                                                                                                                                                            c c f e d d d d c f c f f c 
                                                                                                                                                                            c c c c e b e b c c c f c c 
                                                                                                                                                                            c c c f e d d e d c c c f c 
                                                                                                                                                                            c c f f f c c d b c f f c c 
                                                                                                                                                                            c f c f f c d d c c b c f c 
                                                                                                                                                                            c c c b b b d c c b c c d d 
                                                                                                                                                                            c c b d b d c c e c c d d d 
                                                                                                                                                                            c f d b d d c f c c d d d d 
                                                                                                                                                                            c c d d c c c d c c b d d d 
                                                                                                                                                                            c f f c c c d d c c c b d d 
                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                                            createPost("discobot", "INSTALLING...", img`
                                                                                                                                                                                1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                                                                                                                1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                                                1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                                                1 a a a a a a a a a a a 1 1 
                                                                                                                                                                                1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                                                1 a 9 a a a a a a a 9 a 1 1 
                                                                                                                                                                                1 9 a a a a a a a 9 a a 1 1 
                                                                                                                                                                                b a a 5 5 a a a 5 5 a a b 1 
                                                                                                                                                                                9 a a 5 5 a a a 5 5 a a 9 1 
                                                                                                                                                                                9 a a a a a a a a a a a 9 1 
                                                                                                                                                                                1 9 a a a a 9 a a a a a 1 1 
                                                                                                                                                                                1 a d d d d d d d d d 9 1 1 
                                                                                                                                                                                1 9 a a a a a a a a a 9 1 1 
                                                                                                                                                                                1 1 a 9 9 9 9 9 9 9 a 1 1 1 
                                                                                                                                                                                1 1 a a a a a a a a a 1 1 1 
                                                                                                                                                                                `, "abc", true)
                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                createPost("scamma", "...", img`
                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                    scene.cameraShake(4, 3000)
                                                                                                                                                                                    glitchEffect(3000, 0)
                                                                                                                                                                                    createPost("scamma", "...SILENCE! HOW ARE YOU EVEN HERE?!", img`
                                                                                                                                                                                        c c c c c c c c c c c c c c 
                                                                                                                                                                                        f f f f c c c c c c c c f f 
                                                                                                                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                        f f e e e e f f e e e f f f 
                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                        f f f f f f f f f f f e f f 
                                                                                                                                                                                        f f f f f f f e e e e e f f 
                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                    timer.after(3000, function () {
                                                                                                                                                                                        scene.cameraShake(2, 2000)
                                                                                                                                                                                        createPost("scamma", "I REMOVED YOU, YOU AND @richard!", img`
                                                                                                                                                                                            c c c c c c c c c c c c c c 
                                                                                                                                                                                            f f f f c c c c c c c c f f 
                                                                                                                                                                                            5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                            4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                            f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                            f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                            f f e e e e f f e e e f f f 
                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                            f f f f f f f f f f f e f f 
                                                                                                                                                                                            f f f f f f f e e e e e f f 
                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                        timer.after(2000, function () {
                                                                                                                                                                                            scene.cameraShake(4, 2000)
                                                                                                                                                                                            createPost("scamma", "NOT TO MENTION @MakeCode TOO! I REMOVED EVERYONE!", img`
                                                                                                                                                                                                c c c c c c c c c c c c c c 
                                                                                                                                                                                                f f f f c c c c c c c c f f 
                                                                                                                                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                f f e e e e f f e e e f f f 
                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                f f f f f f f f f f f e f f 
                                                                                                                                                                                                f f f f f f f e e e e e f f 
                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                                            timer.after(2000, function () {
                                                                                                                                                                                                createPost("chaosbot", "INSTALLATION COMPLETE", img`
                                                                                                                                                                                                    1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                                                                                                                                    1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                                                                                                                    1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                                                                                                                    1 4 4 4 4 4 4 4 4 4 4 4 1 1 
                                                                                                                                                                                                    1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                                                                                                                    1 4 2 4 4 4 4 4 4 4 2 4 1 1 
                                                                                                                                                                                                    1 2 4 4 4 4 4 4 4 2 4 4 1 1 
                                                                                                                                                                                                    b 4 4 8 8 4 4 4 8 8 4 4 b 1 
                                                                                                                                                                                                    2 4 4 8 8 4 4 4 8 8 4 4 2 1 
                                                                                                                                                                                                    2 4 4 4 4 4 4 4 4 4 4 4 2 1 
                                                                                                                                                                                                    1 2 4 4 4 4 2 4 4 4 4 4 1 1 
                                                                                                                                                                                                    1 4 e e e e e e e e e 2 1 1 
                                                                                                                                                                                                    1 2 4 4 4 4 4 4 4 4 4 2 1 1 
                                                                                                                                                                                                    1 1 4 2 2 2 2 2 2 2 4 1 1 1 
                                                                                                                                                                                                    1 1 4 4 4 4 4 4 4 4 4 1 1 1 
                                                                                                                                                                                                    `, "abc", true)
                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                    createPost("scamma", "FINALLY! My parting gift.", img`
                                                                                                                                                                                                        c c c c c c c c c c c c c c 
                                                                                                                                                                                                        f f f f c c c c c c c c f f 
                                                                                                                                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                        f f e e e e f f e e e f f f 
                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                        f f f f f f f f f f f e f f 
                                                                                                                                                                                                        f f f f f f f e e e e e f f 
                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                    timer.after(1500, function () {
                                                                                                                                                                                                        waitForReply(false, "@scamma please don't do this!", "You're such an awful person...", "Does this really make you happy?")
                                                                                                                                                                                                        if (blockMenu.selectedMenuIndex() == 0) {
                                                                                                                                                                                                            timer.after(5000, function () {
                                                                                                                                                                                                                createPost("scamma", "@" + profileName + ", it's already been done.", img`
                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                good = 1
                                                                                                                                                                                                                continueDialogue2()
                                                                                                                                                                                                            })
                                                                                                                                                                                                        } else if (blockMenu.selectedMenuIndex() == 1) {
                                                                                                                                                                                                            timer.after(5000, function () {
                                                                                                                                                                                                                createPost("scamma", "That's what I always ever hear.", img`
                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                bad = 1
                                                                                                                                                                                                                continueDialogue2()
                                                                                                                                                                                                            })
                                                                                                                                                                                                        } else if (blockMenu.selectedMenuIndex() == 2) {
                                                                                                                                                                                                            timer.after(5000, function () {
                                                                                                                                                                                                                createPost("scamma", "...", img`
                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                    `, "abc", true)
                                                                                                                                                                                                                timer.after(3000, function () {
                                                                                                                                                                                                                    createPost("scamma", "Just forget it.", img`
                                                                                                                                                                                                                        c c c c c c c c c c c c c c 
                                                                                                                                                                                                                        f f f f c c c c c c c c f f 
                                                                                                                                                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                        f f e e e e f f e e e f f f 
                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                        f f f f f f f f f f f e f f 
                                                                                                                                                                                                                        f f f f f f f e e e e e f f 
                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                                    perfect = 1
                                                                                                                                                                                                                    continueDialogue2()
                                                                                                                                                                                                                })
                                                                                                                                                                                                            })
                                                                                                                                                                                                        }
                                                                                                                                                                                                    })
                                                                                                                                                                                                })
                                                                                                                                                                                            })
                                                                                                                                                                                        })
                                                                                                                                                                                    })
                                                                                                                                                                                })
                                                                                                                                                                            })
                                                                                                                                                                        })
                                                                                                                                                                    })
                                                                                                                                                                })
                                                                                                                                                            })
                                                                                                                                                        })
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        } else {
            scene.cameraShake(3, 500)
        }
    }
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (waitToSelectOption) {
        reply = blockMenu.selectedMenuOption()
        replied = true
        blockMenu.closeMenu()
        waitToSelectOption = true
    }
})
function continueDialogue3 () {
    timer.after(randint(2000, 5000), function () {
        BADLYglitching = true
        glitching = false
        scene.cameraShake(4, 500)
        createPost("scamma", "Escape?! HAHA, what a joke! I have you SURROUNDED!", img`
            c c c c c c c c c c c c c c 
            f f f f c c c c c c c c f f 
            5 4 3 f c c c c c c f f f 5 
            4 3 3 f f f c c f f f 3 4 4 
            f 3 3 e e f f f f e e 3 3 4 
            f 3 e e 2 e f f e 2 e e f f 
            f f e e e e f f e e e f f f 
            f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f 
            f f f f f f f f f f f e f f 
            f f f f f f f e e e e e f f 
            f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f 
            `, "abc", false)
        timer.after(randint(2000, 5000), function () {
            BADLYglitching = false
            glitching = true
            createPost("Sonicblaston", "Surrounded? What's that supposed to mean?", img`
                a a a a a a a a a a a a a a 
                a a a a 9 9 9 9 9 9 9 9 a a 
                a a a 9 1 1 9 9 9 9 9 9 9 a 
                a a 9 1 9 9 f 9 9 9 9 9 a a 
                a a 9 9 9 9 9 9 9 f 9 9 8 a 
                a a 9 9 9 9 9 9 9 9 9 8 8 a 
                a a 9 9 9 9 9 9 f 9 9 8 a a 
                a a 9 9 9 9 f f 9 9 9 8 a a 
                a a a 9 9 9 9 9 9 9 8 a a a 
                a a a 9 9 9 9 9 9 8 a a a a 
                a a a b d 9 b 9 8 8 a a a a 
                a a b f d 9 1 b 8 a a a a a 
                a a f f f b f f a a a a a a 
                a b f f f f f f a a a a a a 
                a f f f f f f f b a a a a a 
                `, "abc", false)
            timer.after(randint(2000, 5000), function () {
                BADLYglitching = true
                glitching = false
                createPost("scamma", "Come on THINK! EVERYONE is secluded to this ONE TOPIC!", img`
                    c c c c c c c c c c c c c c 
                    f f f f c c c c c c c c f f 
                    5 4 3 f c c c c c c f f f 5 
                    4 3 3 f f f c c f f f 3 4 4 
                    f 3 3 e e f f f f e e 3 3 4 
                    f 3 e e 2 e f f e 2 e e f f 
                    f f e e e e f f e e e f f f 
                    f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f 
                    f f f f f f f f f f f e f f 
                    f f f f f f f e e e e e f f 
                    f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f 
                    `, "abc", false)
                timer.after(randint(2000, 5000), function () {
                    createPost("scamma", "The rest of the topics are under MY DOMAIN!", img`
                        c c c c c c c c c c c c c c 
                        f f f f c c c c c c c c f f 
                        5 4 3 f c c c c c c f f f 5 
                        4 3 3 f f f c c f f f 3 4 4 
                        f 3 3 e e f f f f e e 3 3 4 
                        f 3 e e 2 e f f e 2 e e f f 
                        f f e e e e f f e e e f f f 
                        f f f f f f f f f f f f f f 
                        f f f f f f f f f f f f f f 
                        f f f f f f f f f f f f f f 
                        f f f f f f f f f f f f f f 
                        f f f f f f f f f f f e f f 
                        f f f f f f f e e e e e f f 
                        f f f f f f f f f f f f f f 
                        f f f f f f f f f f f f f f 
                        `, "abc", false)
                    timer.after(randint(2000, 5000), function () {
                        createPost("scamma", "Any last words on the Microsoft MakeCode Forums?", img`
                            c c c c c c c c c c c c c c 
                            f f f f c c c c c c c c f f 
                            5 4 3 f c c c c c c f f f 5 
                            4 3 3 f f f c c f f f 3 4 4 
                            f 3 3 e e f f f f e e 3 3 4 
                            f 3 e e 2 e f f e 2 e e f f 
                            f f e e e e f f e e e f f f 
                            f f f f f f f f f f f f f f 
                            f f f f f f f f f f f f f f 
                            f f f f f f f f f f f f f f 
                            f f f f f f f f f f f f f f 
                            f f f f f f f f f f f e f f 
                            f f f f f f f e e e e e f f 
                            f f f f f f f f f f f f f f 
                            f f f f f f f f f f f f f f 
                            `, "abc", false)
                        timer.after(randint(2000, 5000), function () {
                            glitching = true
                            BADLYglitching = false
                            createPost("Taser", "...really? What about Coder king...", img`
                                d d d d d b b f f f d d b d 
                                d d d c c c f f f b d d d d 
                                d d d d d f f f f b b d d d 
                                d d d d d 5 5 5 5 f f d d d 
                                d b d d d 5 e 5 5 d d d b d 
                                d d d d d 5 5 5 e d d d d d 
                                d d d b d d f f f f b d d d 
                                d d d f f e e e f f f f d d 
                                d d f f f f f e f c d f f d 
                                d f f c b f e 5 f f b f f c 
                                d f c f f f e 5 f f f d f f 
                                f d f f f f 8 f f f f d b f 
                                5 d b b f 8 8 8 8 f f f d 5 
                                d d d b 8 8 d b d f 8 d d 5 
                                d d d d 8 d d d d d 8 d d d 
                                `, "abc", false)
                            timer.after(randint(2000, 5000), function () {
                                createPost("InvalidProject99", "I was so close to finishing Zombie's of God...", img`
                                    9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                    9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                    9 9 9 9 9 9 9 9 1 9 9 9 9 9 
                                    9 9 9 9 9 9 b d c 9 9 9 9 9 
                                    9 9 9 9 d d b f f 1 9 9 9 9 
                                    9 9 9 1 f c f f d c 9 9 9 9 
                                    9 9 9 d f c f b f d b 9 9 9 
                                    9 9 9 d d f f f d 1 9 9 9 9 
                                    9 9 9 1 f d d d 9 9 9 9 9 9 
                                    9 9 9 9 d 9 9 9 9 9 9 9 9 9 
                                    9 9 9 9 1 d 9 9 9 9 9 9 9 9 
                                    9 9 9 9 9 d f 9 9 9 9 9 9 9 
                                    e e b 9 d f 1 9 9 9 9 9 7 9 
                                    e b e e 9 f f 9 9 9 5 7 5 7 
                                    e 4 e e c f f 9 9 5 5 5 5 5 
                                    `, "abc", false)
                                timer.after(randint(2000, 5000), function () {
                                    createPost("AbstractDesigner", "Roller was fun while it lasted...", img`
                                        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                        9 9 c c c c f f f f 9 9 9 9 
                                        9 9 c 7 e b c f 6 f 9 9 9 9 
                                        9 9 c d 7 7 c 6 6 f 9 9 9 9 
                                        9 9 c c 7 d 4 c f f 9 9 9 9 
                                        9 9 9 c d d 4 4 f 9 9 9 9 9 
                                        9 9 c c d d 4 4 f f 9 9 9 9 
                                        9 9 c d d d 4 d 4 f 9 9 9 9 
                                        9 9 c d d c d f d f 9 9 9 9 
                                        9 9 c d 5 d 4 4 d f 9 9 9 9 
                                        9 9 c c d d d d f f 9 9 9 9 
                                        9 9 9 c c c f f f 9 9 9 9 9 
                                        9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                        9 9 9 9 c 9 9 f 9 9 9 9 9 9 
                                        `, "abc", false)
                                    timer.after(randint(2000, 5000), function () {
                                        createPost("scamma", "...well, maybe...", img`
                                            c c c c c c c c c c c c c c 
                                            f f f f c c c c c c c c f f 
                                            5 4 3 f c c c c c c f f f 5 
                                            4 3 3 f f f c c f f f 3 4 4 
                                            f 3 3 e e f f f f e e 3 3 4 
                                            f 3 e e 2 e f f e 2 e e f f 
                                            f f e e e e f f e e e f f f 
                                            f f f f f f f f f f f f f f 
                                            f f f f f f f f f f f f f f 
                                            f f f f f f f f f f f f f f 
                                            f f f f f f f f f f f f f f 
                                            f f f f f f f f f f f e f f 
                                            f f f f f f f e e e e e f f 
                                            f f f f f f f f f f f f f f 
                                            f f f f f f f f f f f f f f 
                                            `, "abc", false)
                                        timer.after(randint(2000, 5000), function () {
                                            createPost("scamma", "NO! I did not do all this just to back down!", img`
                                                c c c c c c c c c c c c c c 
                                                f f f f c c c c c c c c f f 
                                                5 4 3 f c c c c c c f f f 5 
                                                4 3 3 f f f c c f f f 3 4 4 
                                                f 3 3 e e f f f f e e 3 3 4 
                                                f 3 e e 2 e f f e 2 e e f f 
                                                f f e e e e f f e e e f f f 
                                                f f f f f f f f f f f f f f 
                                                f f f f f f f f f f f f f f 
                                                f f f f f f f f f f f f f f 
                                                f f f f f f f f f f f f f f 
                                                f f f f f f f f f f f e f f 
                                                f f f f f f f e e e e e f f 
                                                f f f f f f f f f f f f f f 
                                                f f f f f f f f f f f f f f 
                                                `, "abc", false)
                                            timer.after(randint(2000, 5000), function () {
                                                createPost("scamma", "Goodbye, MakeCode Forums.", img`
                                                    c c c c c c c c c c c c c c 
                                                    f f f f c c c c c c c c f f 
                                                    5 4 3 f c c c c c c f f f 5 
                                                    4 3 3 f f f c c f f f 3 4 4 
                                                    f 3 3 e e f f f f e e 3 3 4 
                                                    f 3 e e 2 e f f e 2 e e f f 
                                                    f f e e e e f f e e e f f f 
                                                    f f f f f f f f f f f f f f 
                                                    f f f f f f f f f f f f f f 
                                                    f f f f f f f f f f f f f f 
                                                    f f f f f f f f f f f f f f 
                                                    f f f f f f f f f f f e f f 
                                                    f f f f f f f e e e e e f f 
                                                    f f f f f f f f f f f f f f 
                                                    f f f f f f f f f f f f f f 
                                                    `, "abc", false)
                                                color.FadeToBlack.startScreenEffect(10000)
                                                timer.after(10000, function () {
                                                    glitching = false
                                                    color.startFade(color.White, color.originalPalette, 100)
                                                    createPost("UnsignedArduino", "Not so fast!", img`
                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                        1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                        1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                        1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                        `, "abc", false)
                                                    timer.after(randint(2000, 5000), function () {
                                                        scene.cameraShake(2, 500)
                                                        createPost("scamma", "W-what?", img`
                                                            c c c c c c c c c c c c c c 
                                                            f f f f c c c c c c c c f f 
                                                            5 4 3 f c c c c c c f f f 5 
                                                            4 3 3 f f f c c f f f 3 4 4 
                                                            f 3 3 e e f f f f e e 3 3 4 
                                                            f 3 e e 2 e f f e 2 e e f f 
                                                            f f e e e e f f e e e f f f 
                                                            f f f f f f f f f f f f f f 
                                                            f f f f f f f f f f f f f f 
                                                            f f f f f f f f f f f f f f 
                                                            f f f f f f f f f f f f f f 
                                                            f f f f f f f f f f f e f f 
                                                            f f f f f f f e e e e e f f 
                                                            f f f f f f f f f f f f f f 
                                                            f f f f f f f f f f f f f f 
                                                            `, "abc", false)
                                                        timer.after(randint(1000, 2000), function () {
                                                            createPost("AqeeAqee", "Ok, @Vegz78, it's ready!", img`
                                                                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                1 1 1 8 8 8 8 8 8 8 1 1 1 1 
                                                                1 1 1 8 8 8 8 8 8 8 1 1 1 1 
                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                `, "abc", false)
                                                            timer.after(randint(2000, 5000), function () {
                                                                scene.cameraShake(2, 500)
                                                                glitching = true
                                                                createPost("scamma", "What's going on? ANSWER ME!!!", img`
                                                                    c c c c c c c c c c c c c c 
                                                                    f f f f c c c c c c c c f f 
                                                                    5 4 3 f c c c c c c f f f 5 
                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                    f f e e e e f f e e e f f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    f f f f f f f f f f f e f f 
                                                                    f f f f f f f e e e e e f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    f f f f f f f f f f f f f f 
                                                                    `, "abc", false)
                                                                timer.after(randint(1000, 2000), function () {
                                                                    glitching = false
                                                                    createPost("Vegz78", "Perfect! @UnsignedArduino, the terminal!", img`
                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                        1 1 a a 1 1 1 1 1 1 a a 1 1 
                                                                        1 1 a a 1 1 1 1 1 1 a a 1 1 
                                                                        1 1 1 1 a a a a a a 1 1 1 1 
                                                                        1 1 1 1 a a a a a a 1 1 1 1 
                                                                        1 1 a a 1 1 a a 1 1 a a 1 1 
                                                                        1 1 a a 1 1 a a 1 1 a a 1 1 
                                                                        1 1 a a a a 1 1 a a a a 1 1 
                                                                        1 1 a a a a 1 1 a a a a 1 1 
                                                                        1 1 a a 1 1 1 1 1 1 a a 1 1 
                                                                        1 1 a a 1 1 1 1 1 1 a a 1 1 
                                                                        1 1 a a 1 1 1 1 1 1 a a 1 1 
                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                        `, "abc", false)
                                                                    timer.after(randint(1000, 2000), function () {
                                                                        createPost("UnsignedArduino", "Done! @AqeeAqee and I will keep going. You explain.", img`
                                                                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                            1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                            1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                            1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                            1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                            1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                            1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                            1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                            1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                            `, "abc", false)
                                                                        timer.after(randint(1000, 2000), function () {
                                                                            createPost("Vegz78", "Ok @everyone, we're working together to face @scamma.", img`
                                                                                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                1 1 a a 1 1 1 1 1 1 a a 1 1 
                                                                                1 1 a a 1 1 1 1 1 1 a a 1 1 
                                                                                1 1 1 1 a a a a a a 1 1 1 1 
                                                                                1 1 1 1 a a a a a a 1 1 1 1 
                                                                                1 1 a a 1 1 a a 1 1 a a 1 1 
                                                                                1 1 a a 1 1 a a 1 1 a a 1 1 
                                                                                1 1 a a a a 1 1 a a a a 1 1 
                                                                                1 1 a a a a 1 1 a a a a 1 1 
                                                                                1 1 a a 1 1 1 1 1 1 a a 1 1 
                                                                                1 1 a a 1 1 1 1 1 1 a a 1 1 
                                                                                1 1 a a 1 1 1 1 1 1 a a 1 1 
                                                                                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                `, "abc", false)
                                                                            timer.after(randint(2000, 5000), function () {
                                                                                createPost("scamma", "WHAT?? Urgh, so that's what all those errors are.", img`
                                                                                    c c c c c c c c c c c c c c 
                                                                                    f f f f c c c c c c c c f f 
                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                    f f e e e e f f e e e f f f 
                                                                                    f f f f f f f f f f f f f f 
                                                                                    f f f f f f f f f f f f f f 
                                                                                    f f f f f f f f f f f f f f 
                                                                                    f f f f f f f f f f f f f f 
                                                                                    f f f f f f f f f f f e f f 
                                                                                    f f f f f f f e e e e e f f 
                                                                                    f f f f f f f f f f f f f f 
                                                                                    f f f f f f f f f f f f f f 
                                                                                    `, "abc", false)
                                                                                timer.after(randint(2000, 5000), function () {
                                                                                    createPost("scamma", "I need time... @chaosbot, deal with them!", img`
                                                                                        c c c c c c c c c c c c c c 
                                                                                        f f f f c c c c c c c c f f 
                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                        f f e e e e f f e e e f f f 
                                                                                        f f f f f f f f f f f f f f 
                                                                                        f f f f f f f f f f f f f f 
                                                                                        f f f f f f f f f f f f f f 
                                                                                        f f f f f f f f f f f f f f 
                                                                                        f f f f f f f f f f f e f f 
                                                                                        f f f f f f f e e e e e f f 
                                                                                        f f f f f f f f f f f f f f 
                                                                                        f f f f f f f f f f f f f f 
                                                                                        `, "abc", false)
                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                        createPost("chaosbot", "CHAOS COMMAND EVENT LISTENERS ACTIVATED.", img`
                                                                                            1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                            1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                            1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                            1 4 4 4 4 4 4 4 4 4 4 4 1 1 
                                                                                            1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                            1 4 2 4 4 4 4 4 4 4 2 4 1 1 
                                                                                            1 2 4 4 4 4 4 4 4 2 4 4 1 1 
                                                                                            b 4 4 8 8 4 4 4 8 8 4 4 b 1 
                                                                                            2 4 4 8 8 4 4 4 8 8 4 4 2 1 
                                                                                            2 4 4 4 4 4 4 4 4 4 4 4 2 1 
                                                                                            1 2 4 4 4 4 2 4 4 4 4 4 1 1 
                                                                                            1 4 e e e e e e e e e 2 1 1 
                                                                                            1 2 4 4 4 4 4 4 4 4 4 2 1 1 
                                                                                            1 1 4 2 2 2 2 2 2 2 4 1 1 1 
                                                                                            1 1 4 4 4 4 4 4 4 4 4 1 1 1 
                                                                                            `, "abc", true)
                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                            createPost("scamma", "PERFECT...", img`
                                                                                                c c c c c c c c c c c c c c 
                                                                                                f f f f c c c c c c c c f f 
                                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                                f f e e e e f f e e e f f f 
                                                                                                f f f f f f f f f f f f f f 
                                                                                                f f f f f f f f f f f f f f 
                                                                                                f f f f f f f f f f f f f f 
                                                                                                f f f f f f f f f f f f f f 
                                                                                                f f f f f f f f f f f e f f 
                                                                                                f f f f f f f e e e e e f f 
                                                                                                f f f f f f f f f f f f f f 
                                                                                                f f f f f f f f f f f f f f 
                                                                                                `, "abc", false)
                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                createPost("AqeeAqee", "Is @chaosbot supposed to be @discobot? That's mad.", img`
                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                    8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                                                    8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                                                    8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                                                    1 1 1 8 8 8 8 8 8 8 1 1 1 1 
                                                                                                    1 1 1 8 8 8 8 8 8 8 1 1 1 1 
                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                    1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                                                    1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                                                    1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                    `, "abc", false)
                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                    createPost("chaosbot", "Chaos Command: $ mad: INVERT", img`
                                                                                                        1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                                        1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                        1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                        1 4 4 4 4 4 4 4 4 4 4 4 1 1 
                                                                                                        1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                        1 4 2 4 4 4 4 4 4 4 2 4 1 1 
                                                                                                        1 2 4 4 4 4 4 4 4 2 4 4 1 1 
                                                                                                        b 4 4 8 8 4 4 4 8 8 4 4 b 1 
                                                                                                        2 4 4 8 8 4 4 4 8 8 4 4 2 1 
                                                                                                        2 4 4 4 4 4 4 4 4 4 4 4 2 1 
                                                                                                        1 2 4 4 4 4 2 4 4 4 4 4 1 1 
                                                                                                        1 4 e e e e e e e e e 2 1 1 
                                                                                                        1 2 4 4 4 4 4 4 4 4 4 2 1 1 
                                                                                                        1 1 4 2 2 2 2 2 2 2 4 1 1 1 
                                                                                                        1 1 4 4 4 4 4 4 4 4 4 1 1 1 
                                                                                                        `, "abc", true)
                                                                                                    timer.after(500, function () {
                                                                                                        color.RotatePalette.startScreenEffect()
                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                            createPost("Luke", "AHHHHHHH MY EYES!!!", img`
                                                                                                                9 9 9 9 6 9 6 6 9 9 9 9 9 9 
                                                                                                                9 9 9 6 7 7 7 7 6 6 c 9 9 9 
                                                                                                                9 9 d 6 6 6 6 7 6 6 7 f 9 9 
                                                                                                                9 6 7 7 7 7 6 6 7 6 7 f c 9 
                                                                                                                6 7 6 7 6 6 7 6 6 7 7 c 7 9 
                                                                                                                6 7 7 6 6 6 6 6 6 6 6 6 7 9 
                                                                                                                6 6 6 6 7 6 6 6 6 7 7 6 6 9 
                                                                                                                b 6 c c 7 6 6 6 6 7 6 6 6 9 
                                                                                                                6 6 6 6 f f f f d f 7 f 9 9 
                                                                                                                6 6 f b f 7 7 7 f f 6 6 9 9 
                                                                                                                9 9 6 6 7 7 7 7 7 c c c 9 9 
                                                                                                                9 9 1 7 f f 7 f f 7 9 9 9 9 
                                                                                                                9 9 9 7 7 7 b 7 7 7 9 9 9 9 
                                                                                                                9 9 9 7 7 7 e 7 7 7 9 9 9 9 
                                                                                                                9 9 9 9 9 f 7 f 9 9 9 9 9 9 
                                                                                                                `, "abc", false)
                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                createPost("Futureknight12", "AAAAAAAAHHHH! THIS IS CRAZY!", img`
                                                                                                                    6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                                                                                                                    6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                                                                                                                    6 6 f 6 6 6 6 6 6 f c 6 6 6 
                                                                                                                    f f f f f f f f f f 1 f f f 
                                                                                                                    f b 7 f f f f f f f 1 b f f 
                                                                                                                    f d b f f f f f f f 1 b f f 
                                                                                                                    f c d f c 1 1 1 1 d 1 f f f 
                                                                                                                    f f 1 1 1 1 1 1 b 1 1 f f f 
                                                                                                                    f f f d d d d d 1 d f f f f 
                                                                                                                    f f f 1 d d d d d d f f f f 
                                                                                                                    f f f d 7 7 d d 7 7 f f f f 
                                                                                                                    f f f f 7 7 d d 7 e f f f f 
                                                                                                                    f f f f d d d d d f f f f f 
                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                    `, "abc", false)
                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                    createPost("chaosbot", "Chaos Command: $ crazy: BRIGHTEN", img`
                                                                                                                        1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                                                        1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                                        1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                                        1 4 4 4 4 4 4 4 4 4 4 4 1 1 
                                                                                                                        1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                                        1 4 2 4 4 4 4 4 4 4 2 4 1 1 
                                                                                                                        1 2 4 4 4 4 4 4 4 2 4 4 1 1 
                                                                                                                        b 4 4 8 8 4 4 4 8 8 4 4 b 1 
                                                                                                                        2 4 4 8 8 4 4 4 8 8 4 4 2 1 
                                                                                                                        2 4 4 4 4 4 4 4 4 4 4 4 2 1 
                                                                                                                        1 2 4 4 4 4 2 4 4 4 4 4 1 1 
                                                                                                                        1 4 e e e e e e e e e 2 1 1 
                                                                                                                        1 2 4 4 4 4 4 4 4 4 4 2 1 1 
                                                                                                                        1 1 4 2 2 2 2 2 2 2 4 1 1 1 
                                                                                                                        1 1 4 4 4 4 4 4 4 4 4 1 1 1 
                                                                                                                        `, "abc", true)
                                                                                                                    timer.after(500, function () {
                                                                                                                        color.Brighten.startScreenEffect()
                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                            createPost("AqeeAqee", "Ok imma deal with @chaosbot. You ok with that @UnsignedArduino?", img`
                                                                                                                                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                                                                                8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                                                                                8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                                                                                1 1 1 8 8 8 8 8 8 8 1 1 1 1 
                                                                                                                                1 1 1 8 8 8 8 8 8 8 1 1 1 1 
                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                                                1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                                                                                1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                                                                                1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                                                                                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                `, "abc", false)
                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                createPost("UnsignedArduino", "No problem! Just come back, I'll need the help.", img`
                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                    1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                    1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                    1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                    1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                    1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                    1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                    1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                    1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                    `, "abc", false)
                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                    createPost("AqeeAqee", "echo. echo. set /p a=.        Password: title ERROR CODE: %random% cls", img`
                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                        8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                                                                                        8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                                                                                        8 8 8 1 1 8 8 8 1 1 8 8 8 1 
                                                                                                                                        1 1 1 8 8 8 8 8 8 8 1 1 1 1 
                                                                                                                                        1 1 1 8 8 8 8 8 8 8 1 1 1 1 
                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 1 
                                                                                                                                        1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                                                                                        1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                                                                                        1 1 1 1 1 8 8 8 1 1 1 1 1 1 
                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                        `, "abc", true)
                                                                                                                                    timer.after(randint(5000, 6000), function () {
                                                                                                                                        createPost("chaosbot", "UNINSTALLING MALWARE...", img`
                                                                                                                                            1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                                                                            1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                                                            1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                                                            1 4 4 4 4 4 4 4 4 4 4 4 1 1 
                                                                                                                                            1 4 4 1 1 1 1 1 1 1 4 4 1 1 
                                                                                                                                            1 4 2 4 4 4 4 4 4 4 2 4 1 1 
                                                                                                                                            1 2 4 4 4 4 4 4 4 2 4 4 1 1 
                                                                                                                                            b 4 4 8 8 4 4 4 8 8 4 4 b 1 
                                                                                                                                            2 4 4 8 8 4 4 4 8 8 4 4 2 1 
                                                                                                                                            2 4 4 4 4 4 4 4 4 4 4 4 2 1 
                                                                                                                                            1 2 4 4 4 4 2 4 4 4 4 4 1 1 
                                                                                                                                            1 4 e e e e e e e e e 2 1 1 
                                                                                                                                            1 2 4 4 4 4 4 4 4 4 4 2 1 1 
                                                                                                                                            1 1 4 2 2 2 2 2 2 2 4 1 1 1 
                                                                                                                                            1 1 4 4 4 4 4 4 4 4 4 1 1 1 
                                                                                                                                            `, "abc", true)
                                                                                                                                        timer.after(randint(5000, 6000), function () {
                                                                                                                                            color.Darken.startScreenEffect(500)
                                                                                                                                            color.startFadeFromCurrent(color.originalPalette)
                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                createPost("discobot", "Hi! To find out what I can do, say @discobot display help .", img`
                                                                                                                                                    1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                                                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                    1 a a a a a a a a a a a 1 1 
                                                                                                                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                    1 a 9 a a a a a a a 9 a 1 1 
                                                                                                                                                    1 9 a a a a a a a 9 a a 1 1 
                                                                                                                                                    b a a 5 5 a a a 5 5 a a b 1 
                                                                                                                                                    9 a a 5 5 a a a 5 5 a a 9 1 
                                                                                                                                                    9 a a a a a a a a a a a 9 1 
                                                                                                                                                    1 9 a a a a 9 a a a a a 1 1 
                                                                                                                                                    1 a d d d d d d d d d 9 1 1 
                                                                                                                                                    1 9 a a a a a a a a a 9 1 1 
                                                                                                                                                    1 1 a 9 9 9 9 9 9 9 a 1 1 1 
                                                                                                                                                    1 1 a a a a a a a a a 1 1 1 
                                                                                                                                                    `, "abc", false)
                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                    createPost("CyberPulse", "OH THANK GOD...", img`
                                                                                                                                                        e e e e e e 3 e e e e e e e 
                                                                                                                                                        e c c c c f f f f f f f e e 
                                                                                                                                                        e f f f f f f f f f f f c e 
                                                                                                                                                        e f f c c c f f c c f f c e 
                                                                                                                                                        e f f d 1 1 f f 1 1 c f c e 
                                                                                                                                                        e f f f f f f f f f f f c e 
                                                                                                                                                        e f f f f f f f f f f f c e 
                                                                                                                                                        e f f f f f f f f f f f c e 
                                                                                                                                                        e f f d 1 1 1 1 1 1 c f c e 
                                                                                                                                                        e f f d 1 1 1 1 1 1 c f c e 
                                                                                                                                                        e f f b d d d d d d c f c e 
                                                                                                                                                        e f f f f f f f f f f f c e 
                                                                                                                                                        e f f f f f f f f f f f e e 
                                                                                                                                                        e e e e e e e e e e e e e e 
                                                                                                                                                        e e e e e e e e e e e e e e 
                                                                                                                                                        `, "abc", false)
                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                        BADLYglitching = true
                                                                                                                                                        scene.cameraShake(7, 500)
                                                                                                                                                        createPost("scamma", "You think you've won?! You are VERY wrong.", img`
                                                                                                                                                            c c c c c c c c c c c c c c 
                                                                                                                                                            f f f f c c c c c c c c f f 
                                                                                                                                                            5 4 3 f c c c c c c f f f 5 
                                                                                                                                                            4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                            f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                            f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                            f f e e e e f f e e e f f f 
                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                            f f f f f f f f f f f e f f 
                                                                                                                                                            f f f f f f f e e e e e f f 
                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                            `, "abc", false)
                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                            createPost("scamma", "@UnsignedArduino, @AqeeAqee, @Vegz78, they've already LOST!", img`
                                                                                                                                                                c c c c c c c c c c c c c c 
                                                                                                                                                                f f f f c c c c c c c c f f 
                                                                                                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                f f e e e e f f e e e f f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                f f f f f f f f f f f e f f 
                                                                                                                                                                f f f f f f f e e e e e f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                `, "abc", false)
                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                BADLYglitching = false
                                                                                                                                                                createPost("UnsignedArduino", "It's true. We can't do anything else. It's just a stalling game.", img`
                                                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                    1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                    1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                    1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                    1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                    1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                    1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                                                    1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                                                    1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                    createPost("UnsignedArduino", "But we're definitely not losing.", img`
                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                        1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                                                        1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                                                        1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                                        scene.cameraShake(7, 500)
                                                                                                                                                                        createPost("scamma", "AND WHAT WOULD MAKE YOU SAY THAT?!", img`
                                                                                                                                                                            c c c c c c c c c c c c c c 
                                                                                                                                                                            f f f f c c c c c c c c f f 
                                                                                                                                                                            5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                            4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                            f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                            f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                            f f e e e e f f e e e f f f 
                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                            f f f f f f f f f f f e f f 
                                                                                                                                                                            f f f f f f f e e e e e f f 
                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                        timer.after(4000, function () {
                                                                                                                                                                            createPost("MakeCode", "Me.", img`
                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                createPost("scamma", "...oh.", img`
                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                    createPost("richard", "Hey.", img`
                                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                        1 1 1 d c 8 8 8 b 1 1 1 1 1 
                                                                                                                                                                                        1 1 1 f f f f f f 1 1 1 1 1 
                                                                                                                                                                                        1 c f f c c c c f f f 1 1 1 
                                                                                                                                                                                        c f c c c c c c c d 1 1 1 1 
                                                                                                                                                                                        1 1 1 c c c c c c 8 1 1 1 1 
                                                                                                                                                                                        1 1 1 c 8 c c c c c 8 1 1 1 
                                                                                                                                                                                        1 1 1 d b b c c c 8 c 1 1 1 
                                                                                                                                                                                        1 1 1 1 6 6 6 6 6 c c f c 1 
                                                                                                                                                                                        1 1 1 f b 6 6 6 6 c c f f 1 
                                                                                                                                                                                        1 1 8 8 b b b a a b b f f 1 
                                                                                                                                                                                        1 1 8 8 d d a b d b f f 1 1 
                                                                                                                                                                                        1 1 1 8 c 6 6 b d f f 1 1 1 
                                                                                                                                                                                        1 1 f 8 f 6 6 b f c 1 1 1 1 
                                                                                                                                                                                        1 1 1 1 1 6 c 1 1 1 1 1 1 1 
                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                        createPost("jwunderl", "@scamma, right? I've heard A LOT about you.", img`
                                                                                                                                                                                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                            1 1 1 d 1 1 1 1 1 4 1 1 1 1 
                                                                                                                                                                                            1 1 1 4 e e e e 4 d 1 1 1 1 
                                                                                                                                                                                            1 1 1 e e e e e 4 d 1 1 1 1 
                                                                                                                                                                                            1 1 e e e e e 4 4 d 1 1 1 1 
                                                                                                                                                                                            1 1 e e e e 4 4 4 4 1 1 1 1 
                                                                                                                                                                                            1 1 1 b 4 c 4 4 4 d 1 1 1 1 
                                                                                                                                                                                            1 1 d d d 3 d d d d 1 1 1 1 
                                                                                                                                                                                            1 1 f d d d d d d 4 c 1 1 1 
                                                                                                                                                                                            1 1 d d d d d d 4 4 c 1 1 1 
                                                                                                                                                                                            1 1 c b b b d d d c c c 1 1 
                                                                                                                                                                                            1 1 c b b 1 1 1 c f c 1 1 1 
                                                                                                                                                                                            1 1 c c c 1 d c c c 1 1 1 1 
                                                                                                                                                                                            1 1 1 1 b 1 c 1 1 1 1 1 1 1 
                                                                                                                                                                                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                            createPost("eanders", "Ok, what do we do with him?", img`
                                                                                                                                                                                                6 6 6 7 7 7 7 7 b b 7 7 7 7 
                                                                                                                                                                                                6 7 7 7 b 7 7 7 7 7 7 7 7 7 
                                                                                                                                                                                                6 b 6 6 6 6 6 6 b 7 7 7 7 7 
                                                                                                                                                                                                6 c c c c c 6 6 7 7 7 7 7 7 
                                                                                                                                                                                                c c c c 6 7 6 7 6 6 7 7 7 7 
                                                                                                                                                                                                c c c 6 6 7 1 7 6 6 7 7 7 7 
                                                                                                                                                                                                c c c 7 7 7 7 6 7 6 7 6 7 b 
                                                                                                                                                                                                c c c 6 1 7 7 7 d 6 7 7 7 b 
                                                                                                                                                                                                c c c 7 7 d 6 b 6 6 6 6 6 6 
                                                                                                                                                                                                6 6 6 6 7 7 7 6 6 6 6 6 6 6 
                                                                                                                                                                                                6 6 6 6 6 6 6 7 7 6 6 6 6 6 
                                                                                                                                                                                                6 6 6 6 6 7 6 6 7 6 6 6 6 6 
                                                                                                                                                                                                6 6 6 6 6 6 6 7 7 7 7 c c 7 
                                                                                                                                                                                                c c c 6 6 6 6 7 6 7 c c 7 c 
                                                                                                                                                                                                c 6 6 6 6 6 7 7 6 c c c c c 
                                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                createPost("KIKIvsIT", "@MakeCode will decide.", img`
                                                                                                                                                                                                    f f c c f f b c c c f f f f 
                                                                                                                                                                                                    f f c e d d c f f f f f f f 
                                                                                                                                                                                                    f f c b d d b d f f f c f f 
                                                                                                                                                                                                    c c f d f d c f e f f f f c 
                                                                                                                                                                                                    c f c b d d d d b f c f f f 
                                                                                                                                                                                                    c c f e d d d d c f c f f c 
                                                                                                                                                                                                    c c c c e b e b c c c f c c 
                                                                                                                                                                                                    c c c f e d d e d c c c f c 
                                                                                                                                                                                                    c c f f f c c d b c f f c c 
                                                                                                                                                                                                    c f c f f c d d c c b c f c 
                                                                                                                                                                                                    c c c b b b d c c b c c d d 
                                                                                                                                                                                                    c c b d b d c c e c c d d d 
                                                                                                                                                                                                    c f d b d d c f c c d d d d 
                                                                                                                                                                                                    c c d d c c c d c c b d d d 
                                                                                                                                                                                                    c f f c c c d d c c c b d d 
                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                    createPost("MakeCode", "@scamma You nearly destroyed our forums,", img`
                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                        8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                        8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                        8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                        8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                        8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                        8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                        8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                    timer.after(3000, function () {
                                                                                                                                                                                                        createPost("MakeCode", "corrupted them with malware,", img`
                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                            8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                            8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                            8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                            8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                            8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                            8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                            8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                                        timer.after(3000, function () {
                                                                                                                                                                                                            createPost("MakeCode", "rewrote @discobot,", img`
                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                                                            timer.after(2000, function () {
                                                                                                                                                                                                                createPost("discobot", "Hi! To find out what I can do, say @discobot display help .", img`
                                                                                                                                                                                                                    1 d d 1 1 1 1 1 1 1 d d 1 1 
                                                                                                                                                                                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                                                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                                                                                    1 a a a a a a a a a a a 1 1 
                                                                                                                                                                                                                    1 a a 1 1 1 1 1 1 1 a a 1 1 
                                                                                                                                                                                                                    1 a 9 a a a a a a a 9 a 1 1 
                                                                                                                                                                                                                    1 9 a a a a a a a 9 a a 1 1 
                                                                                                                                                                                                                    b a a 5 5 a a a 5 5 a a b 1 
                                                                                                                                                                                                                    9 a a 5 5 a a a 5 5 a a 9 1 
                                                                                                                                                                                                                    9 a a a a a a a a a a a 9 1 
                                                                                                                                                                                                                    1 9 a a a a 9 a a a a a 1 1 
                                                                                                                                                                                                                    1 a d d d d d d d d d 9 1 1 
                                                                                                                                                                                                                    1 9 a a a a a a a a a 9 1 1 
                                                                                                                                                                                                                    1 1 a 9 9 9 9 9 9 9 a 1 1 1 
                                                                                                                                                                                                                    1 1 a a a a a a a a a 1 1 1 
                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                timer.after(3000, function () {
                                                                                                                                                                                                                    createPost("MakeCode", "and was rude to all our staff and members.", img`
                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                        createPost("MakeCode", "However, we're willing to give you a chance.", img`
                                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                            8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                            createPost("MakeCode", "You have the opportunity to join the forums like this never happened.", img`
                                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                createPost("MakeCode", "If you decline, you are banned from everything MakeCode.", img`
                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                    createPost("MakeCode", "So? What do you say?", img`
                                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                                                    timer.after(2500, function () {
                                                                                                                                                                                                                                        blockSettings.writeNumber("bad", blockSettings.readNumber("bad") + bad)
                                                                                                                                                                                                                                        blockSettings.writeNumber("good", blockSettings.readNumber("good") + good)
                                                                                                                                                                                                                                        blockSettings.writeNumber("perfect", blockSettings.readNumber("perfect") + perfect)
                                                                                                                                                                                                                                        createPost("eanders", "We're waiting.", img`
                                                                                                                                                                                                                                            6 6 6 7 7 7 7 7 b b 7 7 7 7 
                                                                                                                                                                                                                                            6 7 7 7 b 7 7 7 7 7 7 7 7 7 
                                                                                                                                                                                                                                            6 b 6 6 6 6 6 6 b 7 7 7 7 7 
                                                                                                                                                                                                                                            6 c c c c c 6 6 7 7 7 7 7 7 
                                                                                                                                                                                                                                            c c c c 6 7 6 7 6 6 7 7 7 7 
                                                                                                                                                                                                                                            c c c 6 6 7 1 7 6 6 7 7 7 7 
                                                                                                                                                                                                                                            c c c 7 7 7 7 6 7 6 7 6 7 b 
                                                                                                                                                                                                                                            c c c 6 1 7 7 7 d 6 7 7 7 b 
                                                                                                                                                                                                                                            c c c 7 7 d 6 b 6 6 6 6 6 6 
                                                                                                                                                                                                                                            6 6 6 6 7 7 7 6 6 6 6 6 6 6 
                                                                                                                                                                                                                                            6 6 6 6 6 6 6 7 7 6 6 6 6 6 
                                                                                                                                                                                                                                            6 6 6 6 6 7 6 6 7 6 6 6 6 6 
                                                                                                                                                                                                                                            6 6 6 6 6 6 6 7 7 7 7 c c 7 
                                                                                                                                                                                                                                            c c c 6 6 6 6 7 6 7 c c 7 c 
                                                                                                                                                                                                                                            c 6 6 6 6 6 7 7 6 c c c c c 
                                                                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                                                                        game.setGameOverEffect(false, effects.starField)
                                                                                                                                                                                                                                        game.setGameOverEffect(true, effects.starField)
                                                                                                                                                                                                                                        if (blockSettings.readNumber("bad") > blockSettings.readNumber("good") && blockSettings.readNumber("bad") > blockSettings.readNumber("perfect") && (blockSettings.readNumber("perfect") == 0 && blockSettings.readNumber("good") == 0)) {
                                                                                                                                                                                                                                            game.setGameOverMessage(false, "Ending 1: Bad Ending")
                                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                createPost("scamma", "What a joke! I decline!", img`
                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                    createPost("scamma", "No one understood why I even did any of this!", img`
                                                                                                                                                                                                                                                        c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                        f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                        f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                        f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                        createPost("scamma", "And you would expect me to stay?!", img`
                                                                                                                                                                                                                                                            c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                            f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                            5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                            4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                            f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                            f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                            f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                            f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                            createPost("scamma", "Not a chance. I'm not welcome here.", img`
                                                                                                                                                                                                                                                                c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                                f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                                f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                                createPost("MakeCode", "This is your final chance @scamma. Are you sure?", img`
                                                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 1 1 1 8 1 1 1 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 1 8 1 8 1 8 1 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 1 8 8 1 8 8 1 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                                                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                                                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                                    createPost("scamma", "...yes.", img`
                                                                                                                                                                                                                                                                        c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                        f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                                        f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                        f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                                        f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                                                                                    timer.after(5000, function () {
                                                                                                                                                                                                                                                                        blockSettings.clear()
                                                                                                                                                                                                                                                                        game.gameOver(false)
                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                        } else if (blockSettings.readNumber("bad") == blockSettings.readNumber("good") && blockSettings.readNumber("bad") == blockSettings.readNumber("perfect")) {
                                                                                                                                                                                                                                            game.setGameOverEffect(false, effects.starField)
                                                                                                                                                                                                                                            game.setGameOverMessage(false, "Ending 2: Considerate Ending")
                                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                createPost("scamma", "No way! I'll never be looked at the same way.", img`
                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                    createPost("scamma", "If I stay, no one will forget this.", img`
                                                                                                                                                                                                                                                        c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                        f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                        f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                        f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                        createPost("scamma", "But the people here are ...somewhat nice.", img`
                                                                                                                                                                                                                                                            c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                            f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                            5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                            4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                            f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                            f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                            f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                            f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                            createPost("scamma", "Although, I'm not too keen on staying.", img`
                                                                                                                                                                                                                                                                c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                                f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                                f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                                createPost("scamma", "I'll think about it. Wasn't expecting this though.", img`
                                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                                                timer.after(5000, function () {
                                                                                                                                                                                                                                                                    blockSettings.clear()
                                                                                                                                                                                                                                                                    game.gameOver(false)
                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                        } else if (blockSettings.readNumber("perfect") > blockSettings.readNumber("good") && blockSettings.readNumber("bad") < blockSettings.readNumber("perfect") && (!(blockSettings.readNumber("bad") == 0) || !(blockSettings.readNumber("good") == 0))) {
                                                                                                                                                                                                                                            game.setGameOverMessage(false, "Ending 3: Near Perfect Ending")
                                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                createPost("scamma", "I... I'm not sure...", img`
                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                    createPost("scamma", "If I stay, no one will forget this.", img`
                                                                                                                                                                                                                                                        c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                        f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                        f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                        f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                        createPost("scamma", "Believe it or not, I regret doing this.", img`
                                                                                                                                                                                                                                                            c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                            f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                            5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                            4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                            f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                            f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                            f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                            f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                            createPost("scamma", "But the people here are quite nice...", img`
                                                                                                                                                                                                                                                                c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                                f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                                f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                                createPost("scamma", "I'll stay. Not sure I'll be the most famous though...", img`
                                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                                                timer.after(5000, function () {
                                                                                                                                                                                                                                                                    blockSettings.clear()
                                                                                                                                                                                                                                                                    game.gameOver(false)
                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                        } else if (blockSettings.readNumber("perfect") > blockSettings.readNumber("good") && blockSettings.readNumber("bad") < blockSettings.readNumber("perfect") && (blockSettings.readNumber("bad") == 0 || blockSettings.readNumber("good") == 0)) {
                                                                                                                                                                                                                                            game.setGameOverMessage(true, "Ending 4: Perfect Ending")
                                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                createPost("scamma", "...I want to stay. Well, now I do. I wish I never did this.", img`
                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                    createPost("scamma", "But, I know I can't join.", img`
                                                                                                                                                                                                                                                        c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                        f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                        f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                        f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                        createPost("scamma", "I've done too much. No one will forget about this.", img`
                                                                                                                                                                                                                                                            c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                            f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                            5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                            4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                            f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                            f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                            f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                            f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                            createPost("randomuser", "That's not true! We don't judge people that intensely.", img`
                                                                                                                                                                                                                                                                1 1 1 1 1 1 1 1 1 f 1 d 1 1 
                                                                                                                                                                                                                                                                1 1 1 1 f 1 1 1 1 b b 1 1 1 
                                                                                                                                                                                                                                                                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                1 1 1 1 1 1 1 1 1 1 1 f f c 
                                                                                                                                                                                                                                                                1 1 1 1 1 b 1 1 1 1 f 1 b 1 
                                                                                                                                                                                                                                                                1 1 1 1 1 1 1 1 1 1 1 c 1 1 
                                                                                                                                                                                                                                                                1 1 d 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                1 1 1 1 c 1 f 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                1 1 1 1 1 1 1 1 1 1 f 1 1 1 
                                                                                                                                                                                                                                                                1 1 1 1 1 1 1 1 1 b b 1 1 1 
                                                                                                                                                                                                                                                                1 1 1 1 1 f 1 1 1 1 f f 1 1 
                                                                                                                                                                                                                                                                1 1 1 c 1 1 1 1 f f 1 c 1 f 
                                                                                                                                                                                                                                                                1 1 1 1 1 1 1 1 d f 1 1 1 1 
                                                                                                                                                                                                                                                                1 1 1 1 1 d 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                1 1 1 1 f c 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                                createPost("personalnote", "I mean, sure, what you did was BAD but that doesn't define you.", img`
                                                                                                                                                                                                                                                                    f f f f f f f f 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                    f f f e c c c f c 1 1 1 1 1 
                                                                                                                                                                                                                                                                    4 f d c 4 c e f 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                    b f d d b d d d 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                    1 b d d d d d 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                    b b b d d b b d b 1 1 1 1 1 
                                                                                                                                                                                                                                                                    b c 4 b b d d e b c c 1 1 1 
                                                                                                                                                                                                                                                                    b c d c b c c d e c c c b 1 
                                                                                                                                                                                                                                                                    c b c c c c c b c c c c c 1 
                                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                    c c c c c c b c c c c c c c 
                                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                    c c c c c d c c c c b c c c 
                                                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                                    createPost("UnsignedArduino", "If you're willing to change, you're good in my book!", img`
                                                                                                                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                                                                                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                                                                                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                                                                                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                                                                                                                        1 1 1 1 4 4 1 1 4 4 1 1 1 1 
                                                                                                                                                                                                                                                                        1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                                                                                                                                                        1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                                                                                                                                                        1 4 4 4 4 4 1 1 4 4 4 4 4 1 
                                                                                                                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                                        createPost("scamma", "Are you guys serious? After everything I did...", img`
                                                                                                                                                                                                                                                                            c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                            f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                                            5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                                            4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                                            f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                                            f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                                            f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                            f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                                            f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                                            createPost("KIKIvsIT", "I told you. These guys are scarily nice.", img`
                                                                                                                                                                                                                                                                                f f c c f f b c c c f f f f 
                                                                                                                                                                                                                                                                                f f c e d d c f f f f f f f 
                                                                                                                                                                                                                                                                                f f c b d d b d f f f c f f 
                                                                                                                                                                                                                                                                                c c f d f d c f e f f f f c 
                                                                                                                                                                                                                                                                                c f c b d d d d b f c f f f 
                                                                                                                                                                                                                                                                                c c f e d d d d c f c f f c 
                                                                                                                                                                                                                                                                                c c c c e b e b c c c f c c 
                                                                                                                                                                                                                                                                                c c c f e d d e d c c c f c 
                                                                                                                                                                                                                                                                                c c f f f c c d b c f f c c 
                                                                                                                                                                                                                                                                                c f c f f c d d c c b c f c 
                                                                                                                                                                                                                                                                                c c c b b b d c c b c c d d 
                                                                                                                                                                                                                                                                                c c b d b d c c e c c d d d 
                                                                                                                                                                                                                                                                                c f d b d d c f c c d d d d 
                                                                                                                                                                                                                                                                                c c d d c c c d c c b d d d 
                                                                                                                                                                                                                                                                                c f f c c c d d c c c b d d 
                                                                                                                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                                                createPost("scamma", "Wow. Ok then. I'll stay!", img`
                                                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                                                    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                                                                                                                                                                                                                                                                                    sprites.destroyAllSpritesOfKind(SpriteKind.repButton)
                                                                                                                                                                                                                                                                                    sprites.destroyAllSpritesOfKind(SpriteKind.post)
                                                                                                                                                                                                                                                                                    sprites.destroyAllSpritesOfKind(SpriteKind.MAINpost)
                                                                                                                                                                                                                                                                                    sprites.destroyAllSpritesOfKind(SpriteKind.Hitbox)
                                                                                                                                                                                                                                                                                    sprites.destroyAllSpritesOfKind(SpriteKind.IconProfile)
                                                                                                                                                                                                                                                                                    sprites.destroyAllSpritesOfKind(SpriteKind.bottom)
                                                                                                                                                                                                                                                                                    sprites.destroyAllSpritesOfKind(SpriteKind.Popup)
                                                                                                                                                                                                                                                                                    sprites.destroyAllSpritesOfKind(SpriteKind.openHomePage)
                                                                                                                                                                                                                                                                                    sprites.destroyAllSpritesOfKind(SpriteKind.Background)
                                                                                                                                                                                                                                                                                    Theend = true
                                                                                                                                                                                                                                                                                    scene.setBackgroundImage(img`
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                                                                                                                                                                                                                                                                        `)
                                                                                                                                                                                                                                                                                    myTextSprite4 = fancyText.create("When you're in a community, everyone is a superhero.", 100, 1)
                                                                                                                                                                                                                                                                                    fancyText.setFont(myTextSprite4, fancyText.outline_medium)
                                                                                                                                                                                                                                                                                    myTextSprite4.y += -20
                                                                                                                                                                                                                                                                                    fancyText.animateAtSpeed(myTextSprite4, fancyText.TextSpeed.Slow, fancyText.AnimationPlayMode.UntilDone)
                                                                                                                                                                                                                                                                                    timer.after(5000, function () {
                                                                                                                                                                                                                                                                                        blockSettings.clear()
                                                                                                                                                                                                                                                                                        game.gameOver(true)
                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            game.setGameOverMessage(false, "Ending 5: Better Ending")
                                                                                                                                                                                                                                            timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                createPost("scamma", "I... I'm not sure...", img`
                                                                                                                                                                                                                                                    c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                    f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                    5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                    4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                    f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                    f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                    f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                    f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                    `, "abc", false)
                                                                                                                                                                                                                                                timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                    createPost("scamma", "If I stay, no one will forget this.", img`
                                                                                                                                                                                                                                                        c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                        f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                        5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                        4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                        f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                        f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                        f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                        f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                        `, "abc", false)
                                                                                                                                                                                                                                                    timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                        createPost("scamma", "But the people here are somewhat nice.", img`
                                                                                                                                                                                                                                                            c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                            f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                            5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                            4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                            f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                            f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                            f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                            f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                            `, "abc", false)
                                                                                                                                                                                                                                                        timer.after(randint(2000, 5000), function () {
                                                                                                                                                                                                                                                            createPost("scamma", "I'll think about it. Wasn't expecting this though.", img`
                                                                                                                                                                                                                                                                c c c c c c c c c c c c c c 
                                                                                                                                                                                                                                                                f f f f c c c c c c c c f f 
                                                                                                                                                                                                                                                                5 4 3 f c c c c c c f f f 5 
                                                                                                                                                                                                                                                                4 3 3 f f f c c f f f 3 4 4 
                                                                                                                                                                                                                                                                f 3 3 e e f f f f e e 3 3 4 
                                                                                                                                                                                                                                                                f 3 e e 2 e f f e 2 e e f f 
                                                                                                                                                                                                                                                                f f e e e e f f e e e f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f e f f 
                                                                                                                                                                                                                                                                f f f f f f f e e e e e f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                f f f f f f f f f f f f f f 
                                                                                                                                                                                                                                                                `, "abc", false)
                                                                                                                                                                                                                                                            timer.after(5000, function () {
                                                                                                                                                                                                                                                                blockSettings.clear()
                                                                                                                                                                                                                                                                game.gameOver(false)
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                })
                                                                                                                                                                                                                            })
                                                                                                                                                                                                                        })
                                                                                                                                                                                                                    })
                                                                                                                                                                                                                })
                                                                                                                                                                                                            })
                                                                                                                                                                                                        })
                                                                                                                                                                                                    })
                                                                                                                                                                                                })
                                                                                                                                                                                            })
                                                                                                                                                                                        })
                                                                                                                                                                                    })
                                                                                                                                                                                })
                                                                                                                                                                            })
                                                                                                                                                                        })
                                                                                                                                                                    })
                                                                                                                                                                })
                                                                                                                                                            })
                                                                                                                                                        })
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
function playAsPixelDoodle () {
    ProfileButton = sprites.create(img`
        d c f f d d 
        f f f f f d 
        f f e f f d 
        f f e e f d 
        d f e d d d 
        d f 8 f d d 
        d 8 8 8 d d 
        `, SpriteKind.IconProfile)
    Mouse = sprites.create(img`
        . d d d . . . . . . 
        e d f d d . . . . . 
        e d f f d d . . . . 
        e d f f f d d . . . 
        e d f f f f d d . . 
        e d f f f f f d d . 
        e d f f f f f f d d 
        e d f f f f f f f d 
        e d f f f f d d d d 
        e d f f f f d d e . 
        e d f d d f f d . . 
        e d d d e d f d . . 
        e e e . e d f d . . 
        . . . . e d d d . . 
        . . . . e e e . . . 
        `, SpriteKind.Player)
    profileName = "PixelDoodle"
    replyImg = img`
        d d d f d c f f c d d d d d 
        d d f c f f f f f f f c d d 
        d d f f f f f f f f f c d d 
        f f f f f f f f f f f d d d 
        f f f f f f f f f f f f d d 
        f f f f f e e e f f f f d d 
        d f f f f e e e e e f f d d 
        d f f f f e e e e e f f d d 
        d f d f f e f f e b d f d d 
        d d d d f f e f d d d d d d 
        d d d d d 8 f 8 b d d d d d 
        d d d d f 8 8 8 f d d d d d 
        d d d d c 8 8 f 8 d d d d d 
        d d d d f 8 8 f c d d d d d 
        d d d d f f 8 f f d d d d d 
        `
    Pixel = true
}
function continueDialogue1 () {
    timer.after(randint(2000, 5000), function () {
        createPost("randomuser", "So, uh, any advice on, you know, my game?", img`
            1 1 1 1 1 1 1 1 1 f 1 d 1 1 
            1 1 1 1 f 1 1 1 1 b b 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 f f c 
            1 1 1 1 1 b 1 1 1 1 f 1 b 1 
            1 1 1 1 1 1 1 1 1 1 1 c 1 1 
            1 1 d 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 c 1 f 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 f 1 1 1 
            1 1 1 1 1 1 1 1 1 b b 1 1 1 
            1 1 1 1 1 f 1 1 1 1 f f 1 1 
            1 1 1 c 1 1 1 1 f f 1 c 1 f 
            1 1 1 1 1 1 1 1 d f 1 1 1 1 
            1 1 1 1 1 d 1 1 1 1 1 1 1 1 
            1 1 1 1 f c 1 1 1 1 1 1 1 1 
            `, "abc", false)
        timer.after(randint(2000, 5000), function () {
            createPost("scamma", "I told you it's bad, is that not enough for you?", img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                4 4 4 4 4 f f f 4 4 4 4 4 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                4 4 4 4 4 f f f 4 4 4 4 4 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `, "abc", false)
            timer.after(randint(2000, 5000), function () {
                createPost("Luke", "Be quiet @scamma. @randomuser it looks great!", img`
                    9 9 9 9 6 9 6 6 9 9 9 9 9 9 
                    9 9 9 6 7 7 7 7 6 6 c 9 9 9 
                    9 9 d 6 6 6 6 7 6 6 7 f 9 9 
                    9 6 7 7 7 7 6 6 7 6 7 f c 9 
                    6 7 6 7 6 6 7 6 6 7 7 c 7 9 
                    6 7 7 6 6 6 6 6 6 6 6 6 7 9 
                    6 6 6 6 7 6 6 6 6 7 7 6 6 9 
                    b 6 c c 7 6 6 6 6 7 6 6 6 9 
                    6 6 6 6 f f f f d f 7 f 9 9 
                    6 6 f b f 7 7 7 f f 6 6 9 9 
                    9 9 6 6 7 7 7 7 7 c c c 9 9 
                    9 9 1 7 f f 7 f f 7 9 9 9 9 
                    9 9 9 7 7 7 b 7 7 7 9 9 9 9 
                    9 9 9 7 7 7 e 7 7 7 9 9 9 9 
                    9 9 9 9 9 f 7 f 9 9 9 9 9 9 
                    `, "abc", false)
                timer.after(randint(2000, 5000), function () {
                    createPost("randomuser", "Thanks :)", img`
                        1 1 1 1 1 1 1 1 1 f 1 d 1 1 
                        1 1 1 1 f 1 1 1 1 b b 1 1 1 
                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                        1 1 1 1 1 1 1 1 1 1 1 f f c 
                        1 1 1 1 1 b 1 1 1 1 f 1 b 1 
                        1 1 1 1 1 1 1 1 1 1 1 c 1 1 
                        1 1 d 1 1 1 1 1 1 1 1 1 1 1 
                        1 1 1 1 c 1 f 1 1 1 1 1 1 1 
                        1 1 1 1 1 1 1 1 1 1 f 1 1 1 
                        1 1 1 1 1 1 1 1 1 b b 1 1 1 
                        1 1 1 1 1 f 1 1 1 1 f f 1 1 
                        1 1 1 c 1 1 1 1 f f 1 c 1 f 
                        1 1 1 1 1 1 1 1 d f 1 1 1 1 
                        1 1 1 1 1 d 1 1 1 1 1 1 1 1 
                        1 1 1 1 f c 1 1 1 1 1 1 1 1 
                        `, "abc", false)
                    timer.after(randint(2000, 5000), function () {
                        createPost("Brohann", "I like the art, it's really cool!", img`
                            c c c c 7 e e e 7 e 7 7 7 7 
                            7 e 7 e 7 e e e e 7 7 7 7 7 
                            7 7 7 7 7 5 e e f 7 7 7 7 7 
                            7 7 e 7 5 e 7 e f c 7 7 e 7 
                            7 7 7 7 7 5 e f f c 7 7 7 7 
                            7 7 7 7 7 7 7 f f c 7 7 7 7 
                            7 7 7 7 5 f f f f f f c 7 e 
                            7 7 7 7 e f f f f f f c c c 
                            7 7 7 7 e f c f c f f c 7 7 
                            7 7 5 e f 7 5 e f f e 7 7 e 
                            5 7 5 f f 5 5 e e e 7 7 f e 
                            5 5 7 e 5 5 5 e e 7 e f 7 7 
                            5 7 f 5 5 5 e f 7 7 f c f f 
                            5 e f 7 5 5 f f c 7 f 7 e 7 
                            5 5 7 7 5 5 f f c f f c f 7 
                            `, "abc", false)
                        timer.after(randint(2000, 5000), function () {
                            createPost(" ArcherBright123", "Yeah @randomuser, this game is sick!", img`
                                c c c c c d b b c c 1 1 1 1 
                                c c c 4 d d d d d c 1 d c 1 
                                c c e e 4 d d d d c d c c d 
                                c c c e 4 4 d d d 1 c c c d 
                                c c c e e d b d 4 8 c 6 6 c 
                                e c c e b d d b b 6 6 c c f 
                                c 6 6 6 b d d b b f c c c 6 
                                b 6 6 6 f b d d b c c c 6 6 
                                6 6 6 f f c e 1 c c b c c 6 
                                6 6 6 f f b b c e e d c 6 6 
                                6 6 e c f f d f d c d d b 1 
                                6 b c e c b d c e f 4 d d 1 
                                d e f e b c b c e f e d c d 
                                b e c c f f e f c f e d e d 
                                d c c f f e e f c f e e c b 
                                `, "abc", false)
                            timer.after(randint(2000, 5000), function () {
                                createPost("randomuser", "Oh, thanks you guys!", img`
                                    1 1 1 1 1 1 1 1 1 f 1 d 1 1 
                                    1 1 1 1 f 1 1 1 1 b b 1 1 1 
                                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                    1 1 1 1 1 1 1 1 1 1 1 f f c 
                                    1 1 1 1 1 b 1 1 1 1 f 1 b 1 
                                    1 1 1 1 1 1 1 1 1 1 1 c 1 1 
                                    1 1 d 1 1 1 1 1 1 1 1 1 1 1 
                                    1 1 1 1 c 1 f 1 1 1 1 1 1 1 
                                    1 1 1 1 1 1 1 1 1 1 f 1 1 1 
                                    1 1 1 1 1 1 1 1 1 b b 1 1 1 
                                    1 1 1 1 1 f 1 1 1 1 f f 1 1 
                                    1 1 1 c 1 1 1 1 f f 1 c 1 f 
                                    1 1 1 1 1 1 1 1 d f 1 1 1 1 
                                    1 1 1 1 1 d 1 1 1 1 1 1 1 1 
                                    1 1 1 1 f c 1 1 1 1 1 1 1 1 
                                    `, "abc", false)
                                timer.after(randint(2000, 5000), function () {
                                    createPost("scamma", "You must be joking...", img`
                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                        `, "abc", false)
                                    timer.after(randint(2000, 5000), function () {
                                        createPost("Opisticks", "The graphics are so cool!", img`
                                            b b b b b b b b 4 4 b b b b 
                                            b b b b b 4 5 5 5 b b b b b 
                                            b b 7 5 b 5 5 5 5 5 5 b 7 b 
                                            b b b b 7 7 7 7 5 5 4 b 4 b 
                                            b b b 7 7 7 7 7 7 4 b b 5 b 
                                            b b b 7 7 7 7 7 7 7 b b b b 
                                            b b b 7 7 7 7 7 7 7 b b b b 
                                            b b 7 b 7 7 7 7 7 7 b b b b 
                                            b b 7 b b 7 7 7 7 b b b b b 
                                            b b 7 7 7 7 7 7 b b b b b b 
                                            b b 7 b 7 7 b 7 7 b b b b b 
                                            b 7 7 b 7 b b b b b b b b b 
                                            b 7 b 7 7 b b b b b b b b b 
                                            b b 7 7 b b b b b b b b b b 
                                            b 7 7 b b b b b b b b b b b 
                                            `, "abc", false)
                                        timer.after(500, function () {
                                            scene.cameraShake(7, 2500)
                                            glitchEffect(240, 1500)
                                            glitchEffect(80, 200)
                                            createPost("scamma", "SILENCE!", img`
                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                `, "abc", false)
                                            timer.after(4000, function () {
                                                scene.cameraShake(2, 4200)
                                                createPost("scamma", "None of you understand the power I hold on this site...", img`
                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                    `, "abc", false)
                                                glitchEffect(50, 1000)
                                                glitchEffect(20, 200)
                                                glitchEffect(100, 760)
                                                glitchEffect(80, 200)
                                                glitchEffect(240, 1500)
                                                timer.after(4200, function () {
                                                    createPost("scamma", "With just a bit more hacking knowledge, I can bring it to IT'S KNEES!", img`
                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                        4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                        4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                        4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                        `, "abc", false)
                                                    timer.after(randint(2000, 5000), function () {
                                                        createPost("InvalidProject99", "What... what just happened...?", img`
                                                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                            9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                            9 9 9 9 9 9 9 9 1 9 9 9 9 9 
                                                            9 9 9 9 9 9 b d c 9 9 9 9 9 
                                                            9 9 9 9 d d b f f 1 9 9 9 9 
                                                            9 9 9 1 f c f f d c 9 9 9 9 
                                                            9 9 9 d f c f b f d b 9 9 9 
                                                            9 9 9 d d f f f d 1 9 9 9 9 
                                                            9 9 9 1 f d d d 9 9 9 9 9 9 
                                                            9 9 9 9 d 9 9 9 9 9 9 9 9 9 
                                                            9 9 9 9 1 d 9 9 9 9 9 9 9 9 
                                                            9 9 9 9 9 d f 9 9 9 9 9 9 9 
                                                            e e b 9 d f 1 9 9 9 9 9 7 9 
                                                            e b e e 9 f f 9 9 9 5 7 5 7 
                                                            e 4 e e c f f 9 9 5 5 5 5 5 
                                                            `, "abc", false)
                                                        timer.after(randint(2000, 5000), function () {
                                                            createPost("scamma", "IT'S OVER FOR YOU!", img`
                                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                `, "abc", false)
                                                            timer.after(5000, function () {
                                                                createPost("scamma", "Wait... what?", img`
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                    `, "abc", true)
                                                                pause(2000)
                                                                color.FadeToWhite.startScreenEffect(3000)
                                                                timer.after(5000, function () {
                                                                    color.startFade(color.White, color.originalPalette, 500)
                                                                    blockSettings.writeString("part1complete", "Yo")
                                                                    blockSettings.writeNumber("bad", blockSettings.readNumber("bad") + bad)
                                                                    blockSettings.writeNumber("good", blockSettings.readNumber("good") + good)
                                                                    blockSettings.writeNumber("perfect", blockSettings.readNumber("perfect") + perfect)
                                                                    createPost("richard", "Everyone leave the topic immediately!", img`
                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                        1 1 1 d c 8 8 8 b 1 1 1 1 1 
                                                                        1 1 1 f f f f f f 1 1 1 1 1 
                                                                        1 c f f c c c c f f f 1 1 1 
                                                                        c f c c c c c c c d 1 1 1 1 
                                                                        1 1 1 c c c c c c 8 1 1 1 1 
                                                                        1 1 1 c 8 c c c c c 8 1 1 1 
                                                                        1 1 1 d b b c c c 8 c 1 1 1 
                                                                        1 1 1 1 6 6 6 6 6 c c f c 1 
                                                                        1 1 1 f b 6 6 6 6 c c f f 1 
                                                                        1 1 8 8 b b b a a b b f f 1 
                                                                        1 1 8 8 d d a b d b f f 1 1 
                                                                        1 1 1 8 c 6 6 b d f f 1 1 1 
                                                                        1 1 f 8 f 6 6 b f c 1 1 1 1 
                                                                        1 1 1 1 1 6 c 1 1 1 1 1 1 1 
                                                                        `, "abc", false)
                                                                    timer.after(4000, function () {
                                                                        createPost("Opisticks", "RICHARD!!!", img`
                                                                            b b b b b b b b 4 4 b b b b 
                                                                            b b b b b 4 5 5 5 b b b b b 
                                                                            b b 7 5 b 5 5 5 5 5 5 b 7 b 
                                                                            b b b b 7 7 7 7 5 5 4 b 4 b 
                                                                            b b b 7 7 7 7 7 7 4 b b 5 b 
                                                                            b b b 7 7 7 7 7 7 7 b b b b 
                                                                            b b b 7 7 7 7 7 7 7 b b b b 
                                                                            b b 7 b 7 7 7 7 7 7 b b b b 
                                                                            b b 7 b b 7 7 7 7 b b b b b 
                                                                            b b 7 7 7 7 7 7 b b b b b b 
                                                                            b b 7 b 7 7 b 7 7 b b b b b 
                                                                            b 7 7 b 7 b b b b b b b b b 
                                                                            b 7 b 7 7 b b b b b b b b b 
                                                                            b b 7 7 b b b b b b b b b b 
                                                                            b 7 7 b b b b b b b b b b b 
                                                                            `, "abc", false)
                                                                        timer.after(300, function () {
                                                                            createPost("InvalidProject99", "Oh my god Richard is here", img`
                                                                                9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                                9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                                                                                9 9 9 9 9 9 9 9 1 9 9 9 9 9 
                                                                                9 9 9 9 9 9 b d c 9 9 9 9 9 
                                                                                9 9 9 9 d d b f f 1 9 9 9 9 
                                                                                9 9 9 1 f c f f d c 9 9 9 9 
                                                                                9 9 9 d f c f b f d b 9 9 9 
                                                                                9 9 9 d d f f f d 1 9 9 9 9 
                                                                                9 9 9 1 f d d d 9 9 9 9 9 9 
                                                                                9 9 9 9 d 9 9 9 9 9 9 9 9 9 
                                                                                9 9 9 9 1 d 9 9 9 9 9 9 9 9 
                                                                                9 9 9 9 9 d f 9 9 9 9 9 9 9 
                                                                                e e b 9 d f 1 9 9 9 9 9 7 9 
                                                                                e b e e 9 f f 9 9 9 5 7 5 7 
                                                                                e 4 e e c f f 9 9 5 5 5 5 5 
                                                                                `, "abc", false)
                                                                            timer.after(200, function () {
                                                                                createPost("Luke", "Yo its richard", img`
                                                                                    9 9 9 9 6 9 6 6 9 9 9 9 9 9 
                                                                                    9 9 9 6 7 7 7 7 6 6 c 9 9 9 
                                                                                    9 9 d 6 6 6 6 7 6 6 7 f 9 9 
                                                                                    9 6 7 7 7 7 6 6 7 6 7 f c 9 
                                                                                    6 7 6 7 6 6 7 6 6 7 7 c 7 9 
                                                                                    6 7 7 6 6 6 6 6 6 6 6 6 7 9 
                                                                                    6 6 6 6 7 6 6 6 6 7 7 6 6 9 
                                                                                    b 6 c c 7 6 6 6 6 7 6 6 6 9 
                                                                                    6 6 6 6 f f f f d f 7 f 9 9 
                                                                                    6 6 f b f 7 7 7 f f 6 6 9 9 
                                                                                    9 9 6 6 7 7 7 7 7 c c c 9 9 
                                                                                    9 9 1 7 f f 7 f f 7 9 9 9 9 
                                                                                    9 9 9 7 7 7 b 7 7 7 9 9 9 9 
                                                                                    9 9 9 7 7 7 e 7 7 7 9 9 9 9 
                                                                                    9 9 9 9 9 f 7 f 9 9 9 9 9 9 
                                                                                    `, "abc", false)
                                                                                timer.after(250, function () {
                                                                                    createPost("Brohann", "What Richards here but how", img`
                                                                                        c c c c 7 e e e 7 e 7 7 7 7 
                                                                                        7 e 7 e 7 e e e e 7 7 7 7 7 
                                                                                        7 7 7 7 7 5 e e f 7 7 7 7 7 
                                                                                        7 7 e 7 5 e 7 e f c 7 7 e 7 
                                                                                        7 7 7 7 7 5 e f f c 7 7 7 7 
                                                                                        7 7 7 7 7 7 7 f f c 7 7 7 7 
                                                                                        7 7 7 7 5 f f f f f f c 7 e 
                                                                                        7 7 7 7 e f f f f f f c c c 
                                                                                        7 7 7 7 e f c f c f f c 7 7 
                                                                                        7 7 5 e f 7 5 e f f e 7 7 e 
                                                                                        5 7 5 f f 5 5 e e e 7 7 f e 
                                                                                        5 5 7 e 5 5 5 e e 7 e f 7 7 
                                                                                        5 7 f 5 5 5 e f 7 7 f c f f 
                                                                                        5 e f 7 5 5 f f c 7 f 7 e 7 
                                                                                        5 5 7 7 5 5 f f c f f c f 7 
                                                                                        `, "abc", false)
                                                                                    timer.after(1500, function () {
                                                                                        createPost("richard", "I SAID Everyone leave the topic immediately!", img`
                                                                                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                            1 1 1 d c 8 8 8 b 1 1 1 1 1 
                                                                                            1 1 1 f f f f f f 1 1 1 1 1 
                                                                                            1 c f f c c c c f f f 1 1 1 
                                                                                            c f c c c c c c c d 1 1 1 1 
                                                                                            1 1 1 c c c c c c 8 1 1 1 1 
                                                                                            1 1 1 c 8 c c c c c 8 1 1 1 
                                                                                            1 1 1 d b b c c c 8 c 1 1 1 
                                                                                            1 1 1 1 6 6 6 6 6 c c f c 1 
                                                                                            1 1 1 f b 6 6 6 6 c c f f 1 
                                                                                            1 1 8 8 b b b a a b b f f 1 
                                                                                            1 1 8 8 d d a b d b f f 1 1 
                                                                                            1 1 1 8 c 6 6 b d f f 1 1 1 
                                                                                            1 1 f 8 f 6 6 b f c 1 1 1 1 
                                                                                            1 1 1 1 1 6 c 1 1 1 1 1 1 1 
                                                                                            `, "abc", false)
                                                                                        timer.after(2500, function () {
                                                                                            createPost("richard", "And refresh your page!", img`
                                                                                                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                1 1 1 d c 8 8 8 b 1 1 1 1 1 
                                                                                                1 1 1 f f f f f f 1 1 1 1 1 
                                                                                                1 c f f c c c c f f f 1 1 1 
                                                                                                c f c c c c c c c d 1 1 1 1 
                                                                                                1 1 1 c c c c c c 8 1 1 1 1 
                                                                                                1 1 1 c 8 c c c c c 8 1 1 1 
                                                                                                1 1 1 d b b c c c 8 c 1 1 1 
                                                                                                1 1 1 1 6 6 6 6 6 c c f c 1 
                                                                                                1 1 1 f b 6 6 6 6 c c f f 1 
                                                                                                1 1 8 8 b b b a a b b f f 1 
                                                                                                1 1 8 8 d d a b d b f f 1 1 
                                                                                                1 1 1 8 c 6 6 b d f f 1 1 1 
                                                                                                1 1 f 8 f 6 6 b f c 1 1 1 1 
                                                                                                1 1 1 1 1 6 c 1 1 1 1 1 1 1 
                                                                                                `, "abc", false)
                                                                                            timer.after(3000, function () {
                                                                                                scene.cameraShake(3, 1 / 0)
                                                                                                createPost("scamma", "NO... DON'T", img`
                                                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                                    4 4 4 4 4 4 2 2 2 4 4 4 4 4 
                                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                    4 4 4 4 4 f 2 2 2 4 4 4 4 4 
                                                                                                    4 4 4 4 4 f f f 4 4 4 4 4 4 
                                                                                                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                                                                                                    `, "abc", false)
                                                                                                timer.after(500, function () {
                                                                                                    glitching = true
                                                                                                    createPost("richard", "Come on, go! Hit the reset button, QUICK!!!", img`
                                                                                                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                                                                                                        1 1 1 d c 8 8 8 b 1 1 1 1 1 
                                                                                                        1 1 1 f f f f f f 1 1 1 1 1 
                                                                                                        1 c f f c c c c f f f 1 1 1 
                                                                                                        c f c c c c c c c d 1 1 1 1 
                                                                                                        1 1 1 c c c c c c 8 1 1 1 1 
                                                                                                        1 1 1 c 8 c c c c c 8 1 1 1 
                                                                                                        1 1 1 d b b c c c 8 c 1 1 1 
                                                                                                        1 1 1 1 6 6 6 6 6 c c f c 1 
                                                                                                        1 1 1 f b 6 6 6 6 c c f f 1 
                                                                                                        1 1 8 8 b b b a a b b f f 1 
                                                                                                        1 1 8 8 d d a b d b f f 1 1 
                                                                                                        1 1 1 8 c 6 6 b d f f 1 1 1 
                                                                                                        1 1 f 8 f 6 6 b f c 1 1 1 1 
                                                                                                        1 1 1 1 1 6 c 1 1 1 1 1 1 1 
                                                                                                        `, "abc", false)
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.repButton, function (sprite, otherSprite) {
    if (canReply) {
        if (canPress) {
            if (replyToBeTyped) {
                replied = false
                reply = game.askForString("What will you reply?", 36)
                canPress = false
                canReply = false
                replied = true
            }
        }
    }
})
let Pixel = false
let myTextSprite4: fancyText.TextSprite = null
let Theend = false
let BADLYglitching = false
let MouseHitbox: Sprite = null
let myTextSprite3: fancyText.TextSprite = null
let navbar: Sprite = null
let glitching = false
let waitToSelectOption = false
let reply = ""
let replyToBeTyped = false
let replied = false
let Sarge = false
let myTextSprite2: fancyText.TextSprite = null
let posterIcon: Sprite = null
let likeBtn: Sprite = null
let bgOfPost: Sprite = null
let postBgImg: Image = null
let BottomPart: Sprite = null
let BottomPartImg: Image = null
let numOfPosts = 0
let closePopUp: Sprite = null
let No_Notifs: Sprite = null
let Chimbro = false
let replyImg: Image = null
let profileName = ""
let Mouse: Sprite = null
let ProfileButton: Sprite = null
let canReply = false
let NewGameLink3: Sprite = null
let replyBtn: Sprite = null
let replyBtnImg: Image = null
let Bg: Image = null
let NewGameLink2: Sprite = null
let NewGameLink: Sprite = null
let canPress = false
let perfect = 0
let good = 0
let bad = 0
let myMenu: miniMenu.MenuSprite = null
let myTextSprite: fancyText.TextSprite = null
let gameSetUp = false
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 200
    export const ARCADE_SCREEN_HEIGHT = 150
}
gameSetUp = false
scene.setBackgroundColor(15)
let mySprite = sprites.create(img`
    ffffccccccccc..c6666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff6666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f66666666666666666666666cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f666666666666666666666666cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    c666ccccccccccc66cccc6666ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    c666cccccccccccc6cccc6666accfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    c666cccccccccccc6cccc66666ccfffc6666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    c666cccccccccccc6cccc66666666c66666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f6666ccccccccccc6cccc666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f6666666cccc66666cccc6666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f6666666cccc66666cccc66ccc66666ccccccc66666ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff666666cccc66666cccccccccc666ccccccccc66666ccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffc6666cccc66666cccccccccc666cccc66cccc6666ccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666cccc66666ccccccccccc6cccc6666ccc6666cccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666cccc66666ccccccccccc6cccc6666ccc66666ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666cccc66666cccc666cccc6ccccccccccc66666accfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666cccc66666cccc666cccc6ccccccccccc66666accfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666cccc66666ccc6666cccc6cccc66666666666aaccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666ccccc6666ccc6666cccc6cccc66666666666aaccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666ccccc6666cccc666cccc6cccc6666ccc6666aaccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666ccccc6666cccc666cccc66cccc66cccc6666aaccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666ccccc6666cccc666cccc66cccccccccc6666aaccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666ccccc6666cccc666cccc666ccccccccc6666aaccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff6666ccccc6666ccc6666cccc666cccccccc66666aaccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff666666666666666666666666666666666666666aaaccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff66666666666666666666666666666666666666aaacffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff6666666666666666666666666666666666666aaaccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffc666666aaa666666a666666aa666666666aaaaaccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffccccccccccccccccccccccccccccaaaaaccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffcccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff66666666ffffffffffffffffffff666666cffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffc666666666666666ffffffffff6666666666fffffffffffffffff66666666666ffffffffffffffffffff66666666cffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff666666666666666666ffffffffc6666666666cffffffffffffffc6666666666666ffffffffffffffffff6666666666ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff666666666666666666cfffffff666666666666cfffffffffffff666666666666666cffffffffffffffff6666666666cfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff66666666666666c6666ccffffff6666cccc6666ccfffffffffff66666cccccc666666ffffffffffffffff666cccc6666ccfffffffffffffffffffffffffffffffffff
    ffffffffffffffffff6666cccc666cccc6666cccfffff6666cccc6666cccffffffffff6666cccccccc666666cfffffffffffffc666cccc6666ccfffffffffffffffffffffffffffffffffff
    ffffffffffffffffff6666cccc66ccccc6666ac66c6666666cccc66666666666666666666cccccccccc6666666666666fffffc6666cccc66666666666ffffffffffffffffffffffffffffff
    ffffffffffffffffff6666ccccc6ccccc6666666666666666cccc66666666666666666666ccccccccccc66666666666666c6666666cccc6666666666666ffffffffffffffffffffffffffff
    ffffffffffffffffff6666ccccc6ccccc6666666666666666cccc6666666666666666666cccccc6ccccc6666666666666666666666cccc66666666666666cffffffffffffffffffffffffff
    ffffffffffffffffff6666ccccccccccc6666666666666666cccc6666666666666666666ccccc666ccccc666666666666666666666cccc666666666666666ffffffffffffffffffffffffff
    ffffffffffffffffff6666ccccccccccc66666cccc6cccc66cccc66cccc666ccccccc666ccccc666ccccc66ccccccccc66666ccccccccc6666ccccccc66666cffffffffffffffffffffffff
    ffffffffffffffffff6666ccccccccccc6666cccccccccc66cccc6ccccc66ccccccccc66ccccc666cccc666cccccccccc666cccccccccc666ccccccccc6666ccfffffffffffffffffffffff
    ffffffffffffffffff6666ccccccccccc666ccccccccccc66cccc6cccc66ccccc6cccc66ccccc666666666ccccccccccc66ccccccccccc66ccccc6cccc6666ccfffffffffffffffffffffff
    ffffffffffffffffff6666ccccccccccc666ccccccccccc66cccccccc666cccc6666ccc6ccccc666666666ccccccccccc66ccccc66cccc66cccc6666ccc6666ccffffffffffffffffffffff
    ffffffffffffffffff6666ccccccccccc66cccc6666cccc66cccccccc666cccc6666ccc6ccccc666666666cccc666cccc66ccc6666cccc66cccc6666ccc6666acffffffffffffffffffffff
    ffffffffffffffffff6666cccccc6cccc66cccc6666cccc66ccccccc6666ccccccccccc6ccccc666666666cccc6666ccc66ccc6666cccc66ccccccccccc6666accfffffffffffffffffffff
    ffffffffffffffffff6666cccc6c6cccc66cccc6666cccc66ccccccc6666ccccccccccc6ccccc6666ccc66cccc6666ccc66ccc6666cccc66ccccccccccc6666accfffffffffffffffffffff
    ffffffffffffffffff6666cccc666cccc66cccc6666cccc66cccccccc666ccc666666666ccccc666cccc66cccc6666ccc66ccc6666cccc66ccc666666666666accfffffffffffffffffffff
    ffffffffffffffffff6666cccc666cccc66cccc6666cccc66cccccccc666ccc666666666ccccc666ccccc6cccc6666ccc66ccc6666cccc66ccc666666666666accfffffffffffffffffffff
    ffffffffffffffffff6666cccc666cccc66cccc666ccccc66ccccccccc66cccc666cccc6cccccc6ccccc66cccc666cccc66cccc666cccc66cccc666cccc6666accfffffffffffffffffffff
    ffffffffffffffffff6666cccc666cccc666ccccccccccc66cccc6cccc66cccc666cccc66ccccccccccc66ccccccccccc66ccccccccccc66cccc666cccc6666accfffffffffffffffffffff
    ffffffffffffffffff6666cccc6666ccc666ccccccccccc66cccc66cccc6ccccccccccc66ccccccccccc666cccccccccc666cccccccccc66ccccccccccc666aaccfffffffffffffffffffff
    ffffffffffffffffff6666cccc6666ccc6666cccccccccc66cccc66ccccc6ccccccccc666cccccccccc6666cccccccccc666cccccccccc666ccccccccc6666aaccfffffffffffffffffffff
    ffffffffffffffffff6666cccc6666ccc66666ccc66cccc66cccc666cccc66ccccccc66666cccccccc6666666ccccccc666666ccc6cccc6666ccccccc66666aaccfffffffffffffffffffff
    ffffffffffffffffffc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaccfffffffffffffffffffff
    fffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaaccfffffffffffffffffffff
    fffffffffffffffffffc6666666666666666666666666666666666666666666666666666666666666666aa666666666666a6666666666666666666666666aaaccffffffffffffffffffffff
    ffffffffffffffffffffc666666aa666666aa6666a666666666666a6666666666666666aaac6666666aaaaaa66666666aaaaaa666666666aa666666666aaaaaccffffffffffffffffffffff
    fffffffffffffffffffffcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaccfffffffffffffffffffffff
    ffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccaaaaacccccccccaaacccccccccccaaacccccccccccccccccccccaaaaaccccffffffffffffffffffffffff
    fffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccccffffccccccccccccccccccccccfffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666ccc6666666cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666cccccccccccc6666ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666cccccccccccc66666666cff66666ccc66666666fc6666666666cccccfffc6cffffc666666666cfffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666cccccccccccc666666666666666666666666666666666666666666666666666666666666666666ffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666cccccccccccc6666666666666666666666666666666666666666666666666666666666666666666fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ccccc66666666666666666666666666666666666666666666666666666666666666666cc6666666cffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ccccc6666666cccccccc6666ccc66ccc66ccc6666cccc66ccc66cccc666ccc66666cccccccc66666cfff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ccccc666666cccccccccc666ccccccccc6cccc666cccc6ccccccccccccccccc666cccccccccc6666ccff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666cccccccc666ccccccccccc66ccccccccc6ccc6666cccc6cccccccccccccccccc6ccccccccccc66666ccf
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666cccccccc666ccccccccccc66cccccccc66ccc6666cccc6cccccccccccccccccc6ccccc66ccccc6666ccf
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666cccccccc666cccc666cccc66ccccc6cc66ccc6666cccc6cccccccccccccccccc6ccccc66666666666acc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666cccccccc666ccc6666cccc66ccc6666666cccc666cccc6cccc666cccc666cccc66ccccc6666666666acc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666cccccccc666ccc6666cccc6cccc6666666cccc666cccc6cccc666cccc666cccc666ccccccc666666aacc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ccccc666666ccc6666cccc6cccc6666666cccc666cccc6cccc666cccc666cccc6666cccccccc6666aacc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ccccc666666ccc6666cccc66ccc6666666cccc666cccc6cccc6666ccc666cccc66666666cccc6666aacc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ccccc666666cccc666cccc66ccc6666666ccccccccccc6cccc6666ccc666cccc66666666cccc66666acc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ccccc666666ccccccccccc66ccc6666666ccccccccccc6cccc6666ccc666cccc6ccccc66cccc66666acc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ccccc666666ccccccccccc66ccc6666666ccccccccccc66ccc6666ccc666cccc6ccccccccccc6666aacc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ccccc6666666ccccccccc666ccc6666666ccccccccccc66ccc6666ccc666cccc66cccccccccc6666aacc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ccccc66666666ccccccc6666ccc666666666ccc66cccc66ccc6666ccc666cccc666ccccccc666666aacc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666a6666666666666666666666666666666666666666666666666666666666666666666666aaacc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc66666666666aa666666666666666666666a6666666666666666666666666666666666666666666666aaaacc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666aaaa6666666666666666666aaa66666666666666666666666666666666666666666666aaaaccf
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6666666aaaaccc66666666a6666666aaaaacc66aa66666666666a666666a666666aa66666666aaaaacccf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccaaaaaaaccccccaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccffcccccaaaaccccccccccccccccccccccccccccccccccccccccccccccccccaaaacccccfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffcccccccccccccccccffffffcccccccccccccccccccccccccccccccccccccccccfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffff
    `, SpriteKind.Player)
pauseUntil(() => controller.A.isPressed())
sprites.destroy(mySprite)
if (!(blockSettings.exists("bad"))) {
    blockSettings.writeNumber("bad", 0)
}
if (!(blockSettings.exists("good"))) {
    blockSettings.writeNumber("good", 0)
}
if (!(blockSettings.exists("perfect"))) {
    blockSettings.writeNumber("perfect", 0)
}
if (!(blockSettings.exists("setup"))) {
    myTextSprite = fancyText.create("Pick a character!")
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Sarge", img`
        9999999999999999999999999999999
        9999999999999999999999999999999
        9999999999999999999999999999999
        9999999999999999999999999999999
        9999999999999999999999999999999
        9999999999999999999999999999999
        9999999999999999999999999999999
        9999999ffffffffffffffff99999999
        9999999fccfddddddddddbf69999999
        9999999fccfdfcccccccfbf69999999
        9999999fccfdf7676777cbf69999999
        9999999ffffdf7878767cbf99999999
        9999999fccfcf7c7c67cfcf99999999
        9999999fccfcf7ccc67cfcf69999999
        9999999ffffcf7777667fcf69999999
        9999999fccfcfffffffffcf99999999
        999999cffffcbbbbcbbcbcf99999999
        99999fffccfcffffcffcfcf69999999
        9999ffffccfbccccbccbccff9999999
        9999fffffffffffffffffffff999999
        9999fcfccffcccccccccfcfff999999
        9999ffffffffcbbbbbbbcfcfcc99999
        999fffffcffffffccccffcffcf99999
        fffffffffffffffccbcfffffff99999
        ffffffffffffffffffffffffffff999
        fffffffffffffcffffffffffffffff9
        fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff
        `),
    miniMenu.createMenuItem("ChimbroDaPro", img`
        fffffc6ffcccccfccccccccc7cc6fff
        fffffcccccfcccfcccccccccd6e66ff
        cfffc7dffccfccfcccccccfcf6ccfff
        ffff76fccfccccfcccccfcccf7ccffc
        7ffc77fffccccfffcccccccff7e6efc
        7ffc77ffcccfffffffccccccfd77eff
        fffc7ff61cfffffffffcccccbf777cc
        cffc7ffccffff6ffcfffcccfcf797cc
        ffcc7fcccffc66fc6fcffcccff717cc
        ffc7bfcffccff66ccf6cfcfffd777ee
        fcc7ffcffccccc6f6ec6cfffffc77e7
        cc77ffcfcc6b6f6c6bc666fcffd77e7
        cc7dcffc66fb6cf6cbbe6cfccfd77ee
        ee79fffcc6dff6c6cf77c6cfcf777ee
        7e7cfffcc6ebbf666bbccfcfcff77ec
        7c9cffffefcbbbfc6bbbcbfffff77ee
        bcccfffffdcbbbccebbbdcfffcfb777
        77bfffffffbbbbbbcbbbfcffffff777
        777fffcffffbbbbbbbbfcfffffcc791
        777cfffffbfcbbbbbbcfdfcfffcfd7d
        77efcffcffffcbbbbccffcffffccd77
        7f7ffffccfcfccbbccffffffffffcf7
        7fffffcffffcfccccffcffffffffff7
        dbfffffffffffcccccccfffffffffb7
        dffffffffffcffcbfffffffcfffffdc
        ccfffcffcfccfcffccccffcffffffff
        cffffffffccffcffcffffcfffffffff
        fffffffcffffcc7fcfffcfbfffffccf
        ffffcffffffffff7cffffffffffffff
        ffffffffffffcfffffff6ffccfffcff
        fffffff77cffffffffcff7d6cffffff
        fffffff71ffffffffcfff61efffffff
        `),
    miniMenu.createMenuItem("PixelDoodle", img`
        ddddddddddddddbcfbddddddddddddd
        ddddddddfdd1ffffffffb1ddddddddd
        ddddddcfc1ffffffffffffffddddddd
        dddddcffffffffffffffffffffcdddd
        dddddffffffffffffffffffffffffdd
        ddddbffffffffffffffffffffcbdddd
        dfd1ffffffffffffffffffffddddddd
        dffffffffffffffffffffffffdddddd
        dffffffffffffffffffffffffcddddd
        dfffffffffffffffffffffffffddddd
        dffffffffffffeceffffffffffddddd
        ddffffffffffefeeeffffffffffdddd
        ddfffffffffeefeeefeffffffffdddd
        ddbffffffffeefeeefeeeefffffdddd
        dd1fffffffeeefeeefeeeeeffffdddd
        dddffffffffeefeeeeeeeeeffffdddd
        ddddfffffffefeeeeeeeeefbfffdddd
        ddddffdffffeefffcfeeefddbffbddd
        ddddfbddffdffeeeeeecfddddffbddd
        ddddddddcffd1ffffffdddddddfbddd
        dddddddddffdbeeeefddddddddccddd
        ddddddddddfdffeeffbdddddddddddd
        dddddddddddcf8fff8fdddddddddddd
        dddddddddddf888888fcddddddddddd
        ddddddddddbf8888888fddddddddddd
        ddddddddddf88f888c8cfdddddddddd
        ddddddddddf88f888f88fdddddddddd
        ddddddddddc88f888f88fdddddddddd
        ddddddddddc88f888f88fdddddddddd
        ddddddddddffff888ffffdddddddddd
        ddddddddddff8f888f8ffdddddddddd
        ddddddddddeecf888ffefdddddddddd
        `)
    )
    myMenu.y += 26
    myMenu.x += 20
    myTextSprite.setPosition(104, 17)
    fancyText.setFont(myTextSprite, fancyText.rounded_small)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "Sarge") {
            playAsSarge()
            blockSettings.writeNumber("Sarge", 1)
        } else if (selection == "ChimbroDaPro") {
            playAsChimbroDaPro()
            blockSettings.writeNumber("Chimbro", 2)
        } else if (selection == "PixelDoodle") {
            playAsPixelDoodle()
            blockSettings.writeNumber("Pixel", 3)
        }
        sprites.destroy(myTextSprite)
        sprites.destroy(myMenu)
        blockSettings.writeString("setup", "done!")
        openTheHomePage()
    })
} else {
    if (blockSettings.exists("Chimbro")) {
        playAsChimbroDaPro()
    } else if (blockSettings.exists("Sarge")) {
        playAsSarge()
    } else if (blockSettings.exists("Pixel")) {
        playAsPixelDoodle()
    }
    openTheHomePage()
}
game.onUpdate(function () {
    if (!(Theend)) {
        scene.setBackgroundImage(Bg)
        if (gameSetUp) {
            MouseHitbox.x = Mouse.left
            MouseHitbox.y = Mouse.top
            MouseHitbox.x += 2
            MouseHitbox.y += 3
        }
    }
})
game.onUpdate(function () {
    if (replyBtnImg) {
        BottomPartImg = img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            ffffbdfdfdfdfdccdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            ffffddfdfcddfbdfdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99999999999999999999999999999999999999999999999f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `
    }
})
game.onUpdateInterval(500, function () {
    if (glitching) {
        glitchEffect(randint(50, 100), randint(50, 5000))
    }
})
game.onUpdateInterval(300, function () {
    console.log(blockSettings.readNumber("perfect"))
    if (BADLYglitching) {
        glitchEffect(randint(50, 100), randint(50, 5000))
    }
})
game.onUpdate(function () {
    if (Mouse) {
        if (controller.up.isPressed() || controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed())) {
            if (Chimbro) {
                extraEffects.createSpreadEffectOnAnchor(MouseHitbox, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Twinkle), 100, 3, 5)
                extraEffects.createSpreadEffectOnAnchor(MouseHitbox, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Twinkle), 100, 3, 5)
                extraEffects.createSpreadEffectOnAnchor(MouseHitbox, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100, 3, 5)
            } else if (Sarge) {
                extraEffects.createSpreadEffectOnAnchor(MouseHitbox, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 100, 3, 5)
                extraEffects.createSpreadEffectOnAnchor(MouseHitbox, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Twinkle), 100, 3, 5)
                extraEffects.createSpreadEffectOnAnchor(MouseHitbox, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100, 3, 5)
            } else if (Pixel) {
                extraEffects.createSpreadEffectOnAnchor(MouseHitbox, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Twinkle), 100, 3, 5)
                extraEffects.createSpreadEffectOnAnchor(MouseHitbox, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100, 1.5, 5)
                extraEffects.createSpreadEffectOnAnchor(MouseHitbox, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Twinkle), 100, 3, 5)
                extraEffects.createSpreadEffectOnAnchor(MouseHitbox, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100, 1.5, 5)
            }
        }
    }
    if (canReply) {
        extraEffects.createSpreadEffectOnAnchor(replyBtn, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 100, 29, 5)
        extraEffects.createSpreadEffectOnAnchor(replyBtn, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Twinkle), 100, 29, 5)
    } else {
        effects.clearParticles(replyBtn)
    }
})
