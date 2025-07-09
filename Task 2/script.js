//! =========================== Task 1 ===========================
// Access
const angela = document.getElementById("user-1");
console.log(angela.textContent);

// Create
const newItem = document.createElement("li");
newItem.innerText = "New Item";

const items = document.getElementById("users");
items.append(newItem);

// Modify Text
const sara = document.getElementById("user-4");
sara.innerText = "this is New Text";

// Remove
const alice = document.getElementById("user-3");
alice.remove();

const users = document.getElementById("users");
users.style.listStyle = "none";
users.style.textAlign = "center";

const container = document.getElementById("container");

const newImage1 = document.createElement("img");
newImage1.setAttribute("src", "dom.jpg");
newImage1.style.display = "block";
newImage1.style.marginLeft = "auto";
newImage1.style.marginRight = "0";
container.prepend(newImage1);

const newImage2 = document.createElement("img");
newImage2.setAttribute("src", "dom.jpg");
container.appendChild(newImage2);

//! =========================== Task 2 ===========================
// Date Format => MM DD YYYY
// NOTE:
// const x = "12 10 2003"; // invalid date
// let date = new Date(x);
// console.log(date); // invalid data (string)
// console.log(!isNaN(date.getTime())); // check if valid data or NOT

function getDay(inputDate = null) {
  const regExpDate = /^\d{2} \d{2} \d{4}$/; // MM DD YYYY
  let date;
  while (true) {
    inputDate = prompt("Enter Date in Form; MM DD YYYY");
    date = new Date(inputDate); // convert input into string
    if (regExpDate.test(inputDate) && !isNaN(date.getTime())) break;
    alert("Invalid Date Format Please write MM DD YYYY");
  }

  const day = date.toLocaleString("en-US", { weekday: "long" });
  return day;
}
const result = getDay();
console.log(result);

//! =========================== Task 4 ===========================
window.addEventListener("keydown", (e) => {
  console.log(e.key); // name of key you clicked such as => n , Alt, Shift , Delete, .......
  let ascii = e.key.charCodeAt(0);

  if (e.altKey) ascii = "Alt Key is Pressed";
  if (e.shiftKey) ascii = "Shift Key is Pressed";
  if (e.ctrlKey) ascii = "Ctrl Key is Pressed";

  if (e.key.length === 1) alert(`Ascii Code for ${e.key} : ${ascii}`);
  else alert(`${e.key} : ${ascii}`);
});

//! =========================== Task 5 ===========================
const input = document.getElementById("inp");
input.addEventListener("keydown", (e) => {
  console.log(e.key);
  const allowedKeys = ["Backspace", "Delete", "ArrowRight", "ArrowLeft"];

  if (allowedKeys.includes(e.key) || e.key >= 0 || e.key <= 9) return;
  else e.preventDefault();
});

//! =========================== Task 6 ===========================

function createPost(post) {
  let postContainer = document.createElement("div");
  postContainer.classList.add("post");

  let post_id = document.createElement("h3");
  post_id.classList.add("post-id");
  post_id.innerText = post.id;

  let title = document.createElement("h5");
  title.classList.add("post-title");
  title.innerText = post.title;

  let body = document.createElement("p");
  body.classList.add("post-body");
  body.innerText = post.body;

  postContainer.appendChild(post_id);
  postContainer.appendChild(title);
  postContainer.appendChild(body);
  document.body.appendChild(postContainer);
}

// *********************** First Way
// will notice the order of posts is Unorderd so it is recommed to use the Async & Await way
function fetchPostsUsingFetch(numOfPosts) {
  for (let i = 1; i <= numOfPosts; i++) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
      .then((res) => res.json())
      .then((data) => {
        createPost(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
}
fetchPostsUsingFetch(10);

// *********************** Second Way
// Post are fetched in order
async function fetchPostsUsingAsync(numOfPosts) {
  try {
    for (let i = 1; i <= numOfPosts; i++) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${i}`
      );
      const post = await res.json();
      createPost(post);
    }
  } catch (err) {
    console.log(err);
  }
}

fetchPostsUsingAsync(10);
