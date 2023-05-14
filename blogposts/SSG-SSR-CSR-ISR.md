---
title: 'SSG SSR CSR ISR'
date: '2023-05-12'
---

## Overview of SSR (in static context)
![SSR](https://aboutmonica.com/media/ssr-hydration/hydration-steps-with-link.png)
> Giải thích ảnh trên
> Ban đầu mình viết code bằng React sau khi viết xong mình sẽ build ở dạng production và mình build theo dạng ReactDOMServer để nó build ra những file HTML. Ở ảnh 3 User gửi Request lên thì mình sẽ trả file HTML đó về , vì file HTML nó đã được render sẵn layout tất cả mọi thứ rồi. Tuy nhiên , nó **chỉ mới là phần content** và **chưa có event** . Sau khi user nó đẫ load file HTML lên rồi thì nó sẽ load JavaScript nữa . Thì nó sẽ thực hiện 1 quá trình nó gọi là **hydrate()** thì nó sẽ dùng **ReactDOM.hydrate()** để attach(gắn) thêm cái event listener lên cái markup để được render phía server.

Thường thì khi học ReactDOM mình thường chỉ nghe hàm **render()** nhưng nó còn có một hàm nữa là hàm **hydrate**

**Hydrate**
Same as render(), but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer. React will attempt to attach event listeners to the existing markup.(Tương tự như render(), nhưng được sử dụng để hydrat hóa vùng chứa có nội dung HTML được kết xuất bởi ReactDOMServer. React sẽ cố gắng đính kèm trình xử lý sự kiện vào đánh dấu hiện có.). Có nghĩa là làm việc máy chủ và máy khách nó render sẵn ở phía sever rồi khi user request nó sẽ attach thêm cái event.[Hydrate docs](https://legacy.reactjs.org/docs/react-dom.html#hydrate)

> 1. Pre-rendering(Có 2 loại SSG-SSR)
> 
>   SSR - Server Side Rendering
> 
> SSG - Static Site Generation  
>
> 2. CSR - Client Side Rendering
> 3. ISR - Incremental Static Regeneration
## 1. Pre-rendering (SSR)
### Sự khác nhau Pre-rendering(NextJs) - No Pre-rendering(React)
![Pre-rendering and No Pre-rendering(SSR)](https://images.viblo.asia/be129f53-a445-4a43-89a9-43310f3bf08d.png)
#### Pre-rendering(Using Next.js)

**Pre-rendering** mình sẽ render sẵn file HTMl ở phía server khi user nó load nên mình có sẵn đầy đủ mọi thứ thông tin nó show lên rồi sau đó nó sẽ load thêm file JavaScript và khi đó nó thực hiện quá trình Hydration
#### No pre-rendering (Pain React.js app)

**No pre-rendering** Ở lần đâu tiên nó tải về thì file HTML của mình là file rỗng và nó chỉ 1  ```<div>root</div>``` sau đó nó load về xong rồi Js load lên sau đó nó mới render cái DOM mình lên.

--- 
---
# Mình Học Next Js quan tâm từ ở đây trở xuống 

## 2. Pre-rendering(SSG) (Build-time)
### (SSG) Static Site Generation( khá là xịn và nó cũng được khuyến khích sử dụng default bởi nextjs .Cứ render mặc định là SSG).Và những trường hợp sử dụng Server side rendering(SSR) khá là ít
![SSG - Static Site Generation](https://images.viblo.asia/ca8dfffb-65fe-4e02-bd82-aa194736717e.png)
#### [SSR Generation :](https://nextjs.org/learn/basics/data-fetching/two-forms)

**Đây là trong giai đoạn (build-time là trong thời điểm mình gõ lệnh yarn build) và sau đó nó sẽ gọi thằng (next-build)**
* Là phương thức Pre-rendering mà khi đó HTML sẽ được tạo ra lúc build time (tạo ra ngay từ đầu).
* HTML cùng với tất cả data tạo nên nội dung của trang web được tạo khi từ trước, khi mà bạn build ứng dụng của mình.
* Là phương thức được Next.js đề xuất sử dụng
* Trang web của chúng ta được lưu trữ trong bộ nhớ cache bởi CDN và được cung cấp cho người dùng gần như tức thì.
* Phù hợp với các website: blog, docs, marketing, trang sản phẩm thương mại điện tử,...
**Tóm tắt: Build 1 phát ra 1 đống HTML và phục vụ cho user là xong**

## 3. SSR - Server Side Rendering (Run-time)
### Per-request(Mỗi yêu cầu)
#### Và đây còn được gọi là run time (run-time là khi chúng ra gõ lện yarn run)
![SSR](https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png)
* Mỗi user gửi request lên rồi nó sẽ xử lý gom dữ liệu, lấy dữ liệu gì đó sau đó mới tạo ra file HTML rồi mới trả lại cho user bước này cứ mỗi lần request lên thì mình phải đi xử lý và tạo ra file HTML .Điều này nếu như mình có nhiều request gửi lên giống như vậy thì server mình sẽ làm việc rất là cực. 
* Nhưng đối với thằng Static side mình build xong ra một file HTML rồi thì ông nào cần query(hỏi) thì trả về rất là nhanh ko cần phải tính toán gì query lên CDN nó trả về. 
* Nhưng đối với Server side rendering mình phải đợi cái việc tính toán bên phía server nữa rồi server phải xử lý thì nó sẽ tốn cái resort trên cái server của mình và tùy thuộc vào server của mình tính toán nhanh hay chậm thì nó sẽ ảnh hưởng tới việc user nó sẽ đợi nhanh hay chậm để lấy cái file HTML trả về. 
**Tóm lại: SSR Theo mỗi request nó sẽ tạo ra 1 file HTML trả về**

## 4. CSR Client Side Rendering 
### Sự kết hợp giữa Satatic Generation + Fetch Data on the Client-Side(Mình sẽ làm cho những trường hợp : 

` Dữ liệu mình không phải render sẵn bên phía server không cần SEO cho những cái Private website thì có thể làm kiểu này `

`Làm kiểu này tiện cái markup của mình vẫn generate sẵn và vẫn 1 static side sẵn và cái phần dynamic mà cần phải có data thì mình đợi về phía client mình show cái loading và mình fetch data về mình show lên là xong vừa kết hợp sự thuận lời ả 2 bên`

![CSR](https://nextjs.org/static/images/learn/data-fetching/client-side-rendering.png)
#### Tạo những file markup sẵn còn phần dữ liệu mình ko cần Fetch trên phía server mà đợi load về phía client rồi nó show được cái markup rồi sau đó mình có thể đi Fetch dữ liệu rồi sau đó mới show phần dữ liệu liệu cuối **3 màu vàng xanh hông** như trong ảnh lên
[CSR : ](https://nextjs.org/learn/basics/data-fetching/request-time)

Nếu không cần kết xuất trước dữ liệu, bạn cũng có thể sử dụng chiến lược sau (được gọi là Kết xuất phía máy khách):
* Tạo tĩnh (kết xuất trước) các phần của trang không yêu cầu dữ liệu ngoài.
* Khi trang tải, tìm nạp dữ liệu bên ngoài từ ứng dụng khách bằng JavaScript và điền vào các phần còn lại.

## 5. ISR- Incremental Static Regeneration 
### VD: Trong trường hơp làm 1 trang E-commerce mình có hàng triệu sản phẩm nhanh vầ SEO thì mình có 2 loại SSG và SSR 
`Nếu mình mà dùng SSG thì nó sẽ không hợp lý , lý do: có 1 triệu sản phẩm mà lúc build tạo ra 1 triêu trang HTML thì nó sẽ tốn hằng giờ đồng hồ. `

` Nếu mà sử dụng SSR thì ko lẽ 1 triệu thằng user nó query cùng một trang đấy thì server phải chạy 1 triệu lần thì nó rất là ác mộng  server mình xử lý rất cực hình vì cứ rất nhiều product thì mỗi lần nó gửi lên phải query database rồi trả nó về `
![ISR](https://external-preview.redd.it/7QrReZKQakhoTe8tTfHqg9BglAtJZJ1H4p-EfNOdUd8.jpg?auto=webp&s=5ae5b6176a77103f6b9da5ea77cf94fd9fda641d)

* Vì thế nó mới sinh ra thằng ISR tức là mình có 1 triệu sản phẩm nhưng đâu đó tôi chỉ có 1 nghàn sản phẩm phổ biến như vậy tui chỉ build 1000 phẩm tui build 1000 sản phẩm đó ra dạng Static Generation tui build ra sẵn tui sẽ query 1000 sản phẩm phổ biến đó và build ra sẵn 1000file HTML như vậy ông nào ổng nào ổng query lên thì có sẵn file HTML trả về cứ ông nào query lên có file HTML trả về rất là nhanh. 

Nếu như 1 ông mà query sản phẩm mà chưa có query nếu mà chưa có mình sẽ tạo ra 1 cái file generation file HTML mới để mình trả về cho user và những thằng sau mà nó lại query lại sẵn cái file HTML đó vì mình đã generation sẵn hồi nảy rồi mình lấy mình tái sử dụng thôi như vậy cứ thằng user request thêm thì chỉ có thằng đầu tiên nó phải đợi chút xíu để mình đi generation ra file HTML để mình trả về còn những thằng sau thì nó rất là nhanh hầu như là lập tức.

* Bản chất của ISR thì nó vẫn dựa trên cái **Static side generation** nhưng nó sẽ kết hợp thêm 1 **option** đó là **revalidate: 60** 
![ISR](https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a9d6ec1f-b714-4102-b845-0986bfc65417/regeneration-regeneration-nextjs.png)

## 6. Một cái hay của Next JS là mỗi trang mình có thể dùng 1 hình thức pre-rendering khác nhau Static side Generation và kết hợp Server-side Rendering
` VD: Tôi có trang Home tôi muốn sử dụng SSG  nhưng tôi muốn trang About sử dụng SSR vẫn ok hết `
![Per-pageBasic](https://nextjs.org/static/images/learn/data-fetching/per-page-basis.png)

Nó sẽ phụ thuộc vào sự phụ thuộc vào của 1 số hàm đặc biệt
![ISR-SSG-SSR](https://images.viblo.asia/eed7a1d5-4ff2-4d75-a8a2-10717550c76c.png)

Nếu `sử dụng` **getServerSideProps** thì nó sẽ là dạng **Server Side Rendering (SSR)**

Còn nếu `không sử dụng` **getServerSideProps** thì nó sẽ là **Static Side Generation(SSG)**

**Static Side Generation (SSG)** nó cũng **có nhiều trường hợp** có sử dụng hoặc không sử dụng **getStaticProps** **getStaticPath** ...

**ISR** tái tạo tĩnh gia tăng (sử dụng xác thực lại trong **getStaticProps**)

---

> 1. Static automatically rendered as static HTML `(uses no initial props)`
> 2. SSG automatically generated as static HTML + JSON `(uses getStaticProps)`
> 3. ISR incremental static regeneration `(uses revalidate in getStaticProps)`
> 4. SSG + CSR pre-rendered HTML + data fetching on client side using `useEffect`
> 5. SSR server-side renders at runtime `(uses getInitialProps or getServerSideProps)`

# (Bây giờ nó có SSG và thêm thằng ISR cho nên hầu như không cần đụng tới SSR)

## When to use 

### For "public-first" websites (blog, e-commerce)

**Public website with static public data: sử dụng SSG, static public data are fetched at build time**

**Public website with dynamic public data:**
`sử dụng SSG, static public data are initially fetched at build time`

* Tạo Static Generation for updating public dynamic data
* Client-side to fetch data that changes really really quickly

Trang web công khai với một số dữ liệu riêng tư: tương tự + bạn tìm nạp dữ liệu riêng tư phía máy khách như bình thường trong SPA

Trang web công cộng có yêu cầu rất cao về việc có dữ liệu mới được hiển thị phía máy chủ: bạn sử dụng SSR, nhưng điều đó hiếm khi xảy ra đối với hầu hết các ứng dụng

### For "private-first" websites (Software as a Service, administration interface)

Các ứng dụng riêng tư đã làm phiền tôi một thời gian nhưng tôi nghĩ bây giờ tôi đã hiểu rõ hơn:

* Bất kỳ ứng dụng riêng tư nào: SSG của shell trống không có dữ liệu + data-fetching client-side
Các ứng dụng riêng tư có yêu cầu rất cao về having fresh data being server-side rendered: SSR (ví dụ: có thể xảy ra với người dùng thiết bị di động, nhưng vẫn là một trường hợp sử dụng hạn chế)
* Cụ thể, một người có thể muốn sử dụng SSR một cách có hệ thống cho các ứng dụng riêng tư, bởi vì về mặt kỹ thuật, kết xuất luôn phụ thuộc vào người dùng đã đăng nhập hiện tại (vì vậy cookie yêu cầu hiện tại hoặc tiêu đề xác thực). Ngay cả khi bạn tải dữ liệu sau, phía máy khách, bạn vẫn cần kiểm tra xem người dùng có quyền truy cập vào trang hay không.

Nhưng việc sử dụng getServerSideProps chỉ để kiểm tra xác thực hầu như là sai: nó dẫn đến sự gia tăng lớn về độ phức tạp của quy trình xác thực (bạn phải mạo danh người dùng, kể cả đối với các quy trình công việc phức tạp như làm mới mã thông báo, xem #17515) và độ phức tạp của mã (chúng tôi có 200 line monster tại Vulcan để kiểm tra chuyển hướng).

Thay vào đó, việc sử dụng một máy chủ chuyên dụng, đơn giản để kiểm tra xác thực và sau đó xem xét ứng dụng riêng tư vì nó là ứng dụng công khai có vẻ thông minh và đơn giản hơn.
Giống như trong một công ty, bạn kiểm tra xem mọi người có được phép vào cửa hay không (đó là máy chủ xác thực của bạn), nhưng sau đó bạn xem xét rằng nếu họ ở trong công ty, họ là những người được ủy quyền (vì vậy bạn có thể hiển thị vỏ trống của bạn một cách an toàn của trang riêng tư). Cuối cùng, bạn sẽ nhận được private data client-side to fetch the data.

Trong tất cả các trường hợp đó, sử dụng getServerSideProps là tốt, nhưng có nghĩa là trong các trường hợp sử dụng nâng cao với lý do chính đáng để sử dụng nó, vì getStaticProps
* Incremental Static Generation is most often sufficient

Có thể chỉ cần sử dụng Next là có thể thực hiện được, nhưng tôi nghĩ điều này cần có khả năng thiết lập một loại phần mềm trung gian chỉ chạy khi máy chủ đang chạy chứ không phải trong SSG (không có máy chủ tùy chỉnh).

[when-to-use-publib-private](https://github.com/vercel/next.js/discussions/10437#discussioncomment-90459)

[when-to-use-SSR-SSG](https://nextjs.org/learn/basics/data-fetching/two-forms)
