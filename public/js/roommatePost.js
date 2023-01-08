// create a fetch request to grab roommate posts
//and append new posts on top of each other
async function createPost(e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name");
    const city = document.getElementById("city").value;

  
    const res = await fetch("/api/roommatePost", {
      method: "POST",
      body: JSON.stringify({
        title,
        city,
        
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