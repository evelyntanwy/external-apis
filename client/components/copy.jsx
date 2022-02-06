export const Choice = () => {
  const tagsEl = document.getElementById("tags");
  const textarea = document.getElementById("textarea");

  textarea.focus();

  textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.value = "";
      }, 10);

      randomSelect();
    }
  });

  function createTags(input) {
    const tags = input
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    tagsEl.innerHTML = "";

    tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.classList.add("tag");
      tagEl.innerText = tag;
      tagsEl.appendChild(tagEl);
    });
  }

  function randomSelect() {
    const times = 29;
    let start_index = 0;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();

      // console.log(start_index);

      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);

      start_index = start_index + 1;

      // If its index = 29, use the new highlihgting function
      if (start_index == 28) {
        // console.log("Hello");
        lastHighlightTag(randomTag);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
      }, 100);
    }, times * 100);
  }

  function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
  }

  function highlightTag(tag) {
    tag.classList.add("highlight");
  }

  function unHighlightTag(tag) {
    tag.classList.remove("highlight");
  }

  function lastHighlightTag(tag) {
    tag.classList.add("result");
  }
};
