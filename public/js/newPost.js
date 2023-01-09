

async function createPost(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const first_name = document.getElementById("first-name").value;
  const last_name = document.getElementById("last-name").value;
  const city = document.getElementById("city").value;
  const county = document.getElementById("county").value;
  const age = document.getElementById("age").value;
  const lease_length = document.getElementById("lease_length").value;
  const communication = document.getElementById("communication").value;
  const ontime_payments = document.getElementById("ontime_payments").value;
  const cleanliness = document.getElementById("cleanliness").value;
  const friendly = document.getElementById("friendly").value;
  const guests = document.getElementById("guests").value;
  const comments = document.getElementById("comments").value;


  const res = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({
      title,
      city,
      first_name,
      last_name,
      county,
      age,
      ontime_payments,
      lease_length,
      communication,
      cleanliness,
      friendly,
      guests,
      comments,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(res);
  if (res.ok) {
    document.location.replace("/roommatePage");
  } else {
    alert("Unable to create new post!");
  }
}

document.getElementById("create-post").addEventListener("submit", createPost);
