import type { MenuItem } from "./navType";

export const homeList: MenuItem[] = [
  { id: 1, text: "Home One", url: "/" },
  { id: 2, text: "Home Two", url: "/home-two" },
  { id: 3, text: "Home Three", url: "/home-three" },
  { id: 4, text: "Home One Single Page", url: "/single-page-home-one" },
  { id: 5, text: "Home Two Single Page", url: "/single-page-home-two" },
  { id: 6, text: "Home Three Single Page", url: "/single-page-home-three" },
]

// Pages Dropdown
export const pagesList: MenuItem[] = [
  { id: 1, text: "Team", url: "/inner/team" },
  { id: 2, text: "Team Details", url: "/inner/team-details" },
  { id: 3, text: "Projects", url: "/inner/projects" },
  { id: 4, text: "Project Details", url: "/inner/project-details" },
  { id: 5, text: "Testimonials", url: "/inner/testimonials" },
  { id: 6, text: "Pricing", url: "/inner/pricing" },
  { id: 7, text: "FAQs", url: "/inner/faqs" },
  { id: 8, text: "404 Error", url: "/404" },
];

// Services Dropdown
export const servicesList: MenuItem[] = [
  { id: 1, text: "Services", url: "/inner/services" },
  { id: 2, text: "International Transport", url: "/inner/international-transport" },
  { id: 3, text: "Local Track Transport", url: "/inner/track-transport" },
  { id: 4, text: "Fast Personal Delivery", url: "/inner/personal-delivery" },
  { id: 5, text: "Safe Ocean Transport", url: "/inner/ocean-transport" },
  { id: 6, text: "Warehouse Facility", url: "/inner/warehouse-facility" },
  { id: 7, text: "Emergency Transport", url: "/inner/emergency-transport" },
];

// Shop Dropdown
export const shopList: MenuItem[] = [
  { id: 1, text: "Products", url: "/inner/products" },
  { id: 2, text: "Product Details", url: "/inner/product-details" },
  { id: 3, text: "Cart", url: "/inner/cart" },
  { id: 4, text: "Checkout", url: "/inner/checkout" },
  { id: 5, text: "Wishlist", url: "/inner/wishlist" },
  { id: 6, text: "Sign Up", url: "/inner/sign-up" },
  { id: 7, text: "Login", url: "/inner/login" },
];

// Blog Dropdown
export const blogList: MenuItem[] = [
  { id: 1, text: "Blog", url: "/inner/blog" },
  { id: 2, text: "Blog Standard", url: "/inner/blog-standard" },
  { id: 3, text: "Blog Left Sidebar", url: "/inner/blog-left-sidebar" },
  { id: 4, text: "Blog Right Sidebar", url: "/inner/blog-right-sidebar" },
  { id: 5, text: "Blog Details", url: "/inner/blog-details" },
];
