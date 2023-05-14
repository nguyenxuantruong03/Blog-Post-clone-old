---
title: 'When to Use Static Generation vs. Server-side Rendering'
date: '2023-03-17'
---

We recommend using `Static Generation` (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

> Marketing pages
> Blog posts
> E-commerce product listings
> Help and documentation

You should ask yourself: "Can I pre-render this page `ahead` of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is `not` a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use `Server-Side Rendering`. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

----------------------------------------------------------------------------------------------------------------
---

Chúng tôi khuyên bạn nên sử dụng **Tạo tĩnh** (có và không có dữ liệu) bất cứ khi nào có thể vì trang của bạn có thể được tạo một lần và được cung cấp bởi CDN, điều này giúp quá trình này nhanh hơn nhiều so với việc máy chủ hiển thị trang theo mọi yêu cầu.

Bạn có thể sử dụng Tạo tĩnh cho nhiều loại trang, bao gồm:

- Các trang tiếp thị
- Bài đăng trên blog
- Danh sách sản phẩm thương mại điện tử
- Trợ giúp và tài liệu

Bạn nên tự hỏi: "Tôi có thể hiển thị trước trang này **trước** yêu cầu của người dùng không?" Nếu câu trả lời là có, thì bạn nên chọn Tạo tĩnh.

Mặt khác, Tạo tĩnh **không** là một ý tưởng hay nếu bạn không thể kết xuất trước một trang trước yêu cầu của người dùng. Có thể trang của bạn hiển thị dữ liệu được cập nhật thường xuyên và nội dung trang thay đổi theo mọi yêu cầu.

Trong trường hợp đó, bạn có thể sử dụng **Kết xuất phía máy chủ**. Nó sẽ chậm hơn, nhưng trang kết xuất trước sẽ luôn được cập nhật. Hoặc bạn có thể bỏ qua kết xuất trước và sử dụng JavaScript phía máy khách để điền dữ liệu.
