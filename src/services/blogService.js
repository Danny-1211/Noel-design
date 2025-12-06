//　專門存放並使用　BLOG 相關的資料處裡
import BLOG_LIST from "../data/blog_list.js";

// 全 blog 的資料
export const getAllBlogs = () => {
    return BLOG_LIST;
}

// 依 id 取得單一 blog 的資料
export const getBlogById = (id) => {
    if (!id) {
        id = 1;
    }
    return BLOG_LIST.find(blog => blog.id === parseInt(id));
}

// 取得所有 blog 的分類
export const getBlogCategorires = () => {
    return [...new Set(BLOG_LIST.map((item) => item.category))];
}

// 詳情頁面相關文章推薦 ( 抓兩個 )
export const getRecommendBlog = () => {
    const loopCount = 2;
    let randomBlogs = [];
    for (let i = 1; i <= loopCount; i++) {
        randomBlogs.push(BLOG_LIST[Math.floor(Math.random() * BLOG_LIST.length)]);
    }
    return randomBlogs;
}