

async function createPost(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const first_name = document.getElementById("first-name").value;
  const last_name = document.getElementById("last-name").value;
  const city = document.getElementById("city").value;
  const county = document.getElementById("county").value;
  const age = document.getElementById("age").value;
  const lease_length = document.getElementById("lease_length").value;
  const comments = document.getElementById("comments").value;
  const rating = document.getElementById("rating").value;
  
  const res = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({
      title,
      city,
      first_name,
      last_name,
      county,
      age,
      lease_length,
      rating,
      comments,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(res);
  if (res.ok) {
    console.log(res),
    document.location.replace("/roommatePage");
  } else {
    alert("Unable to create new post!");
  }
}

document.getElementById("create-post").addEventListener("submit", createPost);
