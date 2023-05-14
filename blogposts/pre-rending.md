---
title: 'Two Forms of Pre-rendering'
date: '2023-03-14'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

Next.js có hai hình thức kết xuất trước: **Tạo tĩnh** và **Kết xuất phía máy chủ**. Sự khác biệt là ở **thời điểm** nó tạo HTML cho một trang.
---
---
- **Tạo tĩnh** là phương pháp kết xuất trước tạo HTML tại **thời gian xây dựng**. Sau đó, HTML kết xuất trước được _reused_ trên mỗi yêu cầu.

- **Kết xuất phía máy chủ** là phương thức kết xuất trước tạo HTML trên **từng yêu cầu**.

Điều quan trọng là Next.js cho phép bạn **chọn** hình thức hiển thị trước để sử dụng cho mỗi trang. Bạn có thể tạo ứng dụng Next.js "kết hợp" bằng cách sử dụng Tạo tĩnh cho hầu hết các trang và sử dụng Kết xuất phía máy chủ cho những trang khác.