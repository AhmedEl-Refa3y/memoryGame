import React, { useEffect } from "react";

const MemoryGame = ({
  matchedBlocks,
  addMatchedBlock,
  incrementTries,
  setGameOver,
}) => {
  useEffect(() => {
    const blocks = document.querySelectorAll(".game-block");
    const orderRange = Array.from(Array(blocks.length).keys());
    shuffle(orderRange);

    blocks.forEach((block, index) => {
      block.style.order = orderRange[index];

      block.addEventListener("click", () => {
        flipBlock(block);
      });
    });

    return () => {
      blocks.forEach((block) => {
        block.replaceWith(block.cloneNode(true));
      });
    };
  }, []);

  const flipBlock = (selectedBlock) => {
    selectedBlock.classList.add("is-flipp");

    const allFlippedBlocks = Array.from(document.querySelectorAll(".is-flipp"));

    if (allFlippedBlocks.length === 2) {
      stopClicking();
      checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
  };

  const stopClicking = () => {
    const blocksContainer = document.querySelector(".memory-game-blocks");
    blocksContainer.classList.add("no-click");

    setTimeout(() => {
      blocksContainer.classList.remove("no-click");
    }, 1000);
  };

  const checkMatchedBlocks = (firstBlock, secondBlock) => {
    if (firstBlock.dataset.friend === secondBlock.dataset.friend) {
      firstBlock.classList.remove("is-flipp");
      secondBlock.classList.remove("is-flipp");

      firstBlock.classList.add("has-match");
      secondBlock.classList.add("has-match");

      document.getElementById("success").play();
      addMatchedBlock();

      if (
        matchedBlocks + 1 ===
        document.querySelectorAll(".game-block").length / 2
      ) {
        setGameOver(true);
      }
    } else {
      incrementTries();

      setTimeout(() => {
        firstBlock.classList.remove("is-flipp");
        secondBlock.classList.remove("is-flipp");
      }, 1000);

      document.getElementById("fail").play();
    }
  };

  return (
    <>
      {/* <audio
        id="welcome"
        src="/audio/welcome-traveler-97167.mp3"
        preload="auto"
      ></audio> */}
      <div className="memory-game-blocks">
        <div class="game-block" data-friend="gandor">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/gandor.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="gandor">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/gandor.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="gano">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/gano.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="gano">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/gano.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="gohare">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/gohare.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="gohare">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/gohare.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="lila">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/lila.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="lila">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/lila.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="meto">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/meto.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="meto">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/meto.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="none">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/none.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="none">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/none.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="shalabe">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/shalabe.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="shalabe">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/shalabe.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="sharara">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/sharara.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="sharara">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/sharara.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="sonkor">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/sonkor.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="sonkor">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/sonkor.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="zeko">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/zeko.webp" alt="" />
          </div>
        </div>
        <div class="game-block" data-friend="zeko">
          <div class="face front"></div>
          <div class="face back">
            <img src="./imgs/zeko.webp" alt="" />
          </div>
        </div>{" "}
      </div>
      <audio
        id="success"
        src="/audio/success-fanfare-trumpets-6185.mp3"
        preload="auto"
      ></audio>
      <audio
        id="fail"
        src="/audio/failure-drum-sound-effect-2-7184.mp3"
        preload="auto"
      ></audio>
    </>
  );
};

export default MemoryGame;

function shuffle(array) {
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;

    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}
