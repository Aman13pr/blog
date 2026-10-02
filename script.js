// ===============================
// PAGE NAVIGATION
// ===============================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// OPEN BLOG
// ===============================

function openBlog(title) {

    document.getElementById("articleTitle").innerText = title;

    showPage("blogDetails");
}


// ===============================
// SEARCH BLOGS
// ===============================

function searchBlogs() {

    const searchValue =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const blogs =
        document.querySelectorAll(".blog-card");

    blogs.forEach(function(blog) {

        const title =
            blog
                .getAttribute("data-title")
                .toLowerCase();

        if (title.includes(searchValue)) {

            blog.style.display = "block";

        } else {

            blog.style.display = "none";

        }

    });
}


// ===============================
// FILTER BLOGS
// ===============================

function filterBlogs(category) {

    const blogs =
        document.querySelectorAll(".blog-card");

    blogs.forEach(function(blog) {

        const blogCategory =
            blog.getAttribute("data-category");

        if (
            category === "all" ||
            blogCategory === category
        ) {

            blog.style.display = "block";

        } else {

            blog.style.display = "none";

        }

    });
}


// ===============================
// LOGIN
// ===============================

function login(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    alert(
        "Login successful!\n\nEmail: " + email
    );

    showPage("dashboard");
}


// ===============================
// REGISTER
// ===============================

function register(event) {

    event.preventDefault();

    const name =
        document.getElementById("registerName").value;

    alert(
        "Account created successfully!\n\nWelcome " + name
    );

    showPage("login");
}


// ===============================
// SAVE DRAFT
// ===============================

function saveDraft() {

    const title =
        document.getElementById("blogTitle").value;

    if (!title) {

        alert("Please enter blog title.");

        return;
    }

    alert(
        "Blog saved as draft!"
    );
}


// ===============================
// PUBLISH BLOG
// ===============================

function publishBlog() {

    const title =
        document.getElementById("blogTitle").value;

    const content =
        document.getElementById("blogContent").value;

    if (!title || !content) {

        alert(
            "Please enter title and content."
        );

        return;
    }

    alert(
        "Blog published successfully!"
    );

    document.getElementById("blogTitle").value = "";

    document.getElementById("blogTags").value = "";

    document.getElementById("blogContent").value = "";

    showPage("home");
}


// ===============================
// DELETE BLOG
// ===============================

function deleteBlog(button) {

    const confirmed =
        confirm(
            "Are you sure you want to delete this blog?"
        );

    if (confirmed) {

        button
            .closest(".dashboard-card")
            .remove();

        alert("Blog deleted successfully.");
    }
}
