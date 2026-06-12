// ============================================================
// WARREN IMAGE CONFIG — local images in public/warren/
// To change a photo: replace the file in public/warren/
// keeping the same name (hero.jpg, serious.jpg, ...).
// ============================================================

export const WARREN = {
  hero: "/warren/hero.jpg",
  serious: "/warren/serious.jpg",
  story: "/warren/story.jpg",
  hopeful: "/warren/hopeful.jpg",
  confident: "/warren/confident.jpg",
  popup: "/warren/popup.jpg",
} as const;

// External links — paste yours here
export const LINKS = {
  // Your Gumroad product page for The Quiet Wealth Blueprint
  gumroad: "https://YOUR-GUMROAD-LINK.gumroad.com/l/quiet-wealth-blueprint",
  // MailerLite form action URL (Forms -> Embedded form -> HTML -> "action")
  mailerliteAction: "https://assets.mailerlite.com/jsonp/YOUR_ACCOUNT/forms/YOUR_FORM_ID/subscribe",
  youtube: "https://youtube.com/@warrenmitchell",
  instagram: "https://instagram.com/warrenmitchell",
} as const;
