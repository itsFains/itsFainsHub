
export interface NavItem {
  label: string;
  sectionId: string;
}

export interface VideoItem {
  id: string; // YouTube Video ID
  title: string;
}

export interface ClipItem {
  id: string; // Twitch Clip Slug
  title: string;
  // Twitch embed URLs need parent parameter like: &parent=localhost or &parent=yourdomain.com
  // The `parent` parameter should match the domain where this app is hosted.
  // For local development, 'localhost' is usually fine.
  // Example: `https://clips.twitch.tv/embed?clip=${id}&parent=localhost&autoplay=false&muted=true`
  // Alternatively, provide a direct link to the clip on Twitch.
}
