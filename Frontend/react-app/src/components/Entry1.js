import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Entry1.css';

function Entry1() {
    const navigate = useNavigate();

    return (
        <section className="entry">
            <h1>Chapter 1: A Brush with Death </h1>
            <p className="subtitle">A personal reflection on love, death, and distance</p>

            <p>
                <span className="bold-italic">Death</span>. It’s a word we instinctively avoid, a concept we shroud in euphemisms and turn away from as if by ignoring it, we could keep it at bay. Yet here it is, inescapable, written before you in stark, quiet letters. It’s strange, isn’t it? How some words carry more weight than others, as though they exist in extra dimensions. <span className="highlight">Death</span> is one of them. Just reading it can feel like it’s reaching out, tapping you on the shoulder, whispering in your ear. It’s a word woven from shadows and silence, drawing from a vast reservoir of meaning and mystery.
            </p>

            <p>
                <span className="italic highlight">Love</span> is another such word, but unlike death, it draws us in, wrapping us in warmth, in memory, in an ache that feels as close to joy as to sorrow. To think about <span className="italic highlight">love</span> for even a moment is to fill it with our own meanings, with images and feelings uniquely ours. Perhaps <span className="highlight">love</span> and <span className="highlight">death</span> do come in pairs, bound by their unfathomable depth, by their unbreakable grip on our lives. Where death closes, love opens; where death separates, love binds.
            </p>

            <div className="thought-prompt">
                <p>“<span className="italic">Pause and consider: What is the first memory that comes to mind when you think of <span className="highlight">love</span>?</span>”</p>
            </div>

            <p>
                For me, it is my mother. A mother’s love, as intimate as <span className="italic">breath itself</span>, is woven into the fabric of our first moments, into the cells of our growing bodies. My earliest memory of love is of my mother, <span className="italic">chewing food until it was soft</span>, then feeding it to me, bridging the worlds of her body and mine. <span className="bold-italic">I was part of her; she was part of me.</span> Her love was not taught; it simply was. Such love is primal, ancient, as close to the essence of life as we can reach.
            </p>

            <p>
                Maybe that’s why, as I grew older, I found it hard to place <span className="italic">hatred</span> as the opposite of <span className="highlight">love</span>. <span className="italic">Hatred felt flimsy and small</span> in comparison, an angry spark beside the boundless fire of love. <span className="highlight">Death</span>, though—death was a more fitting opposite. And yet, even in that pairing, <span className="italic highlight">love</span> somehow prevailed. Death may close the door, but love keeps it ajar. It lingers, reaching through the veil. <span className="bold">Love always outlasts death.</span>
            </p>

            <p>
                When someone you love dies, you don’t stop loving them. Instead, you find yourself <span className="italic">loving them in their absence</span>, drawing them back through photos, fragments of memories, the echo of laughter that hangs in the air long after they’re gone. Death doesn’t end love; it changes its form. The weight around death is not just its finality but the <span className="italic highlight">aching beauty</span> of love that remains. And with that love comes pain—a beast that roars and claws, demanding to be felt, refusing to be ignored.
            </p>

            <p>
                The summer before my sophomore year in college, I had what I can only describe as a <span className="italic">profound brush with death</span>. But the strange thing about such encounters is that you don’t recognize them as they unfold. Only afterward, in the stillness, do you realize what’s changed, what’s been broken open within you. My mother died that summer. She <span className="bold-italic">took her own life</span>, one year after I left home. I was <span className="highlight">thousands of miles away</span>, an ocean and a continent stretched between us, and in the blink of an eye, that distance became eternal.
            </p>

            <p>
                The modern world allows us to <span className="italic">scatter across the globe</span>, each of us building lives far from where we began. But the price of that distance, of living so far from home, is that the places and people you love are reduced to voices on a screen, memories wrapped in pixelated images. It’s a strange kind of existence, comforting in its distractions, until something happens to shatter that illusion.
            </p>

            <p>
                It was a bright, ordinary day at the bagel shop where I worked. The kind of day that fools you into thinking life is steady and safe. Then my best friend called, and in her voice, I heard something that froze me, a stillness that prickled my skin. She told me I needed to go home. Her words didn’t make sense. <span className="italic">Go home?</span> I was at work, everything was fine. I almost laughed at the absurdity. But her tone turned urgent, and the ground beneath my feet began to shift.
            </p>

            <p>
                “Call home, <span className="italic">right away</span>,” she said, her voice tight, as though holding back a truth too heavy to bear.
            </p>

            <p>
                I remember that moment as if in slow motion. The sounds around me faded, leaving only the frantic beat of my heart. I checked my phone—missed calls from my aunt, my grandfather, my best friend. My mother’s name was absent, and in that silence, I understood. The world around me shrank, became surreal, like a landscape seen through fogged glass.
            </p>

            <p>
                I knew, even before I knew. Some part of me understood that I was about to cross a threshold from which there was no return. There are certain moments in life when you feel the veil between worlds thin, when the ordinary cracks open to reveal a glimpse of something infinite, something sacred and terrifying. I was caught in that liminal space, standing on the precipice of <span className="italic">loss and love</span>, with nothing to hold onto but fragments of the life I had known.
            </p>

            <p>
                There is a quiet wisdom in tragedy, a kind of knowing that only reveals itself in the stillness that follows. In the days that would come, I would return home, walk through the familiar rooms that now felt foreign, haunted by her absence. I would search for her in the spaces where she once was, only to find echoes, traces, the faint scent of her perfume clinging to the air. And I would learn, painfully and beautifully, that love is not bound by time or space. It endures, like light from a distant star, reaching us long after its source has disappeared.
            </p>

            <p>
                And in that enduring love, I found a strange solace. <span className="highlight">Death may take, but love gives</span>. It is the bridge that spans life and death, a thread that binds us across worlds. There is something eternal in love—a spark of divinity, perhaps—that no amount of darkness can extinguish.
            </p>

            <p>
                As I bought my ticket home, the tears and panic finally setting in, I knew that my life was no longer the same. I was embarking on a journey not just back to where I had come from, but into the depths of what it means to <span className="italic">love and lose</span>, to live with the weight of absence, and to find, even in the darkest moments, a glimmer of hope.
            </p>

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
                <button className="nav-button" onClick={() => navigate('/')}>Home</button>
                <button className="nav-button" onClick={() => navigate('/entry2')}>Next Chapter</button>
            </div>
        </section>
    );
}

export default Entry1;
