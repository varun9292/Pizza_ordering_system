import React from "react";

function Blog()
{
    return (
        <div>
<section id="blog" class="blog">
    <h4>Latest Blog</h4>
    <div class="inner-blog">
        <div class="blog-content">
            <div class="in-blog">
                <div class="im">
                    {/* <img src="blog-1.jpg" alt="img"></img> */}
                    <div class="in-blog-icon">
                        <a href="#"><i class="fas fa-calendar"></i>20th June 2021</a>
                        <a href="#"><i class="fas fa-user"></i>Admin</a>
                    </div>

                </div>
                <div class="in-blog-content">
                    <h2>Pizza is too Good.</h2>
                    <p>Paragraph Has to be added..</p>
                    <button class="btn">Read More</button>
                </div>
            </div>
        </div>
        <div class="blog-content">
            <div class="in-blog">
                <div class="im">
                    {/* <img src="blog-2.jpg" alt="img"></img> */}
                    <div class="in-blog-icon">
                        <a href="#"><i class="fas fa-calendar"></i>20th June 2021</a>
                        <a href="#"><i class="fas fa-user"></i>Admin</a>
                    </div>

                </div>
                <div class="in-blog-content">
                    <h2>Amazing Pizza,Best Quality</h2>
                    <p>Paragraph Has to be added.</p>
                    <button class="btn">Read More</button>
                </div>
            </div>
        </div>
        <div class="blog-content">
            <div class="in-blog">
                <div class="im">
                    {/* <img src="blog-3.jpg" alt="img"></img> */}
                    <div class="in-blog-icon">
                        <a href="#"><i class="fas fa-calendar"></i>20th June 2021</a>
                        <a href="#"><i class="fas fa-user"></i>Admin</a>
                    </div>

                </div>
                <div class="in-blog-content">
                    <h2>Yummy Pizza, We Loved It.</h2>
                    <p>Paragraph Has to be added.</p>
                    <button class="btn">Read More</button>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Blog;