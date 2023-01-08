// create a fetch request to grab roommate posts
//and append new posts on top of each other
async function createPost(e) {
  e.preventDefault();

  const name = document.getElementById("post-title roommateName").value;
  const post_content = document.getElementById("post-description").value;

  const res = await fetch("/api/roommatePost", {
    method: "POST",
    body: JSON.stringify({
      post_title,
      name,
      city,
      county,
      age,
      lease_length
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    document.location.replace("/roommatePage");
  } else {
    alert("Unable to create new post!");
  }
}

document.getElementById("create-post").addEventListener("submit", createPost);

