document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      id: 1,
      title: "Netflix Doc – Color Grading",
      category: "Documentaries",
      tags: ["4K", "DaVinci Resolve", "Multicam"],
      previewUrl: "https://placehold.co/600x800/2A2A2A/FFFFFF?text=Preview+Doc ",
      fullVideo: "https://player.vimeo.com/video/769798709?h=3f4b207b24&badge=0&autopause=0&player_id=0&app_id=58479 ",
      description: "Color grading and editorial cut for an environmental documentary series on Netflix.",
      tools: ["DaVinci Resolve", "Premiere Pro", "Pro Tools"],
      testimonial: "Rizwan brought life into our raw footage — absolutely stunning work!",
    },
    {
      id: 2,
      title: "Wedding Highlight Reel",
      category: "Wedding Films",
      tags: ["Cinematic", "Drone Footage", "Slow Motion"],
      previewUrl: "https://placehold.co/600x800/FFD700/000000?text=Preview+Wedding ",
      fullVideo: "https://player.vimeo.com/video/769798709?h=3f4b207b24&badge=0&autopause=0&player_id=0&app_id=58479 ",
      description: "A cinematic highlight reel using drone shots and emotional storytelling.",
      tools: ["Final Cut Pro", "After Effects", "Lumetri"],
      testimonial: "Our special day turned into a movie! Highly recommend Rizwan’s talent.",
    },
    {
      id: 3,
      title: "Sneaker Ad Campaign",
      category: "Commercials",
      tags: ["Product Shoot", "Fast Cuts", "Motion Graphics"],
      previewUrl: "https://placehold.co/600x800/00FFFF/000000?text=Preview+Commercial ",
      fullVideo: "https://player.vimeo.com/video/769798709?h=3f4b207b24&badge=0&autopause=0&player_id=0&app_id=58479 ",
      description: "High-energy commercial edit with fast cuts and motion graphics overlay.",
      tools: ["After Effects", "Premiere Pro", "Trapcode Form"],
      testimonial: "Rizwan nailed the vibe we were going for. Perfectly energetic and stylish.",
    },
    {
      id: 4,
      title: "Instagram Stories Montage",
      category: "Social Media",
      tags: ["Vertical", "Trending Music", "Text Overlays"],
      previewUrl: "https://placehold.co/600x800/2E8B57/FFFFFF?text=Preview+Social ",
      fullVideo: "https://player.vimeo.com/video/769798709?h=3f4b207b24&badge=0&autopause=0&player_id=0&app_id=58479 ",
      description: "Engaging vertical montage for Instagram reels using trending audio and text overlays.",
      tools: ["Premiere Rush", "CapCut", "Audition"],
      testimonial: "Boosted our engagement by 200%! Will definitely use again.",
    },
  ];

  const categories = [...new Set(projects.map((p) => p.category))];

  const groupedProjects = categories.reduce((acc, cat) => {
    acc[cat] = projects.filter((p) => p.category === cat);
    return acc;
  }, {});

  const container = document.getElementById("grid-container");

  categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category-section");
    categoryDiv.innerHTML = `<h3 class="bebas">${category}</h3>`;
    const grid = document.createElement("div");
    grid.classList.add("grid-subcontainer");

    groupedProjects[category].forEach((project) => {
      const item = document.createElement("div");
      item.classList.add("grid-item");
      item.innerHTML = `
        <img src="${project.previewUrl}" alt="${project.title}" />
        <div class="hover-overlay">View Project</div>
      `;
      item.addEventListener("click", () => showModal(project));
      grid.appendChild(item);
    });

    categoryDiv.appendChild(grid);
    container.appendChild(categoryDiv);
  });

  // Modal Logic
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-modal");
  const modalContent = {
    video: document.getElementById("modal-video"),
    title: document.getElementById("modal-title"),
    tags: document.getElementById("modal-tags"),
    description: document.getElementById("modal-description"),
    tools: document.getElementById("modal-tools"),
    testimonial: document.getElementById("modal-testimonial"),
  };

  function showModal(project) {
    modal.style.display = "block";
    modalContent.video.src = project.fullVideo;
    modalContent.title.textContent = project.title;
    modalContent.tags.textContent = project.tags.join(" • ");
    modalContent.description.textContent = project.description;
    modalContent.testimonial.innerHTML = `"${project.testimonial}"`;
    modalContent.tools.innerHTML = "";
    project.tools.forEach((tool) => {
      const badge = document.createElement("span");
      badge.textContent = tool;
      modalContent.tools.appendChild(badge);
    });
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalContent.video.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalContent.video.src = "";
    }
  });

  // Form Submission
  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusMsg.textContent = "Thanks! I’ll storyboard your vision within 24hrs.";
    form.reset();
    setTimeout(() => {
      statusMsg.textContent = "";
    }, 3000);
  });
});