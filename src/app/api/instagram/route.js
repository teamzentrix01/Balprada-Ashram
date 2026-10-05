import { NextResponse } from "next/server";

// Comprehensive curated posts for @balpradaayurvedics if API tokens are not yet configured or rate-limited
const FALLBACK_INSTAGRAM_POSTS = [
  {
    id: "post-1",
    caption: "Holistic healing and herbal therapies at Balprada Ashram. Witnessing the positive recovery of patients under traditional Ayurvedic care. 🌿✨ #Ayurveda #NaturalHealing #BalpradaAshram",
    media_type: "VIDEO",
    media_url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    thumbnail_url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-11-20T10:00:00+0000",
    likes: 142,
    isReel: true,
  },
  {
    id: "post-2",
    caption: "A joyful review from a family sharing their experience after 21 days of Panchakarma rejuvenation therapy at Balprada. Pure herbs & authentic diet. 🌸 #Panchakarma #PatientReview #AyurvedicCare",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-11-15T14:30:00+0000",
    likes: 219,
    isReel: false,
  },
  {
    id: "post-3",
    caption: "Behind the scenes: Preparation of fresh classical Kadhas and decoctions prepared daily from in-house medicinal herbs. 🍃 #HerbalMedicine #AyurvedicPharmacy",
    media_type: "VIDEO",
    media_url: "https://images.unsplash.com/photo-1512290900672-1f416e8b4e1f?auto=format&fit=crop&w=800&q=80",
    thumbnail_url: "https://images.unsplash.com/photo-1512290900672-1f416e8b4e1f?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-11-10T09:15:00+0000",
    likes: 310,
    isReel: true,
  },
  {
    id: "post-4",
    caption: "Daily morning yoga & meditation sessions helping patients align body, mind and spirit during their stay at Balprada Ashram. 🧘‍♂️ #Mindfulness #YogaForHealth",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-11-05T07:45:00+0000",
    likes: 185,
    isReel: false,
  },
  {
    id: "post-5",
    caption: "Doctor consultation and Nadi Pariksha (pulse diagnosis) with our senior Vaidya at Balprada OPD center. Finding root-cause relief. 🩺 #NadiPariksha #Vaidya",
    media_type: "VIDEO",
    media_url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    thumbnail_url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-10-28T16:20:00+0000",
    likes: 420,
    isReel: true,
  },
  {
    id: "post-6",
    caption: "Patient story: How personalized diet and Ayurvedic regimen managed chronic kidney and metabolic vitality without invasive stress. 🙏 #ChronicCare #AyurvedaSuccess",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-10-22T11:00:00+0000",
    likes: 275,
    isReel: false,
  },
  {
    id: "post-7",
    caption: "Shirodhara therapy in progress: Calming the nervous system, reducing anxiety, and restoring deep restful sleep at Balprada Ashram. 🌿💆‍♂️ #Shirodhara #StressRelief #AyurvedaTherapy",
    media_type: "VIDEO",
    media_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    thumbnail_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-10-18T12:30:00+0000",
    likes: 388,
    isReel: true,
  },
  {
    id: "post-8",
    caption: "Organic harvest from Balprada Ashram Gaushala and herbal farms. Wholesome Sattvic nutrition is integral to fast patient recovery. 🌾🥬 #OrganicFarming #SattvicDiet #AshramLife",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-10-14T08:20:00+0000",
    likes: 196,
    isReel: false,
  },
  {
    id: "post-9",
    caption: "Recovery celebration! A warm farewell to a patient who spent 3 weeks with us recovering from severe arthritis & joint pain. Now walking pain-free! 🌻👏 #JointCare #ArthritisRecovery",
    media_type: "VIDEO",
    media_url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    thumbnail_url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-10-08T15:45:00+0000",
    likes: 512,
    isReel: true,
  },
  {
    id: "post-10",
    caption: "Authentic herbal oil formulation: Traditional copper vessels and slow cooking of classical Tailams ensuring maximum medicinal potency. 🧪🌱 #AyurvedicFormulation #HerbalOils",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-10-02T10:10:00+0000",
    likes: 230,
    isReel: false,
  },
  {
    id: "post-11",
    caption: "Specialist consultation: Dr. U. S. Sharma explaining individualized pathya (diet) and herbal protocols for metabolic liver rejuvenation. 🩺✨ #LiverCare #AyurvedicDoctor",
    media_type: "VIDEO",
    media_url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    thumbnail_url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-09-27T17:00:00+0000",
    likes: 345,
    isReel: true,
  },
  {
    id: "post-12",
    caption: "The peaceful green surroundings of Balprada Ashram in Bilari, Moradabad. Nature plays a silent yet powerful role in the healing process. 🌳🕊️ #HealingEnvironment #BalpradaAshram",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80",
    permalink: "https://www.instagram.com/balpradaayurvedics/",
    timestamp: "2024-09-20T11:25:00+0000",
    likes: 268,
    isReel: false,
  }
];

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  // If no env credentials configured yet, return all fallback curated posts smoothly
  if (!token || !userId) {
    return NextResponse.json({
      success: true,
      source: "fallback",
      username: "balpradaayurvedics",
      data: FALLBACK_INSTAGRAM_POSTS,
      message: "Showing all curated posts. Add INSTAGRAM_ACCESS_TOKEN & INSTAGRAM_USER_ID in .env.local for live Meta sync.",
    });
  }

  try {
    // Fetch all posts from Meta Instagram Graph API with revalidation (cached for 1 hour)
    const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count";
    const apiUrl = `https://graph.facebook.com/v19.0/${userId}/media?fields=${fields}&access_token=${token}&limit=100`;

    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error("[Instagram API Error]", errorData);
      return NextResponse.json({
        success: true,
        source: "fallback_on_error",
        username: "balpradaayurvedics",
        data: FALLBACK_INSTAGRAM_POSTS,
        error: errorData?.error?.message || "Failed to fetch from Instagram API",
      });
    }

    const json = await res.json();
    const formattedData = (json.data || []).map((item) => ({
      id: item.id,
      caption: item.caption || "Follow @balpradaayurvedics on Instagram for more patient stories and updates.",
      media_type: item.media_type,
      media_url: item.media_type === "VIDEO" && item.thumbnail_url ? item.thumbnail_url : item.media_url,
      video_url: item.media_type === "VIDEO" ? item.media_url : null,
      thumbnail_url: item.thumbnail_url || item.media_url,
      permalink: item.permalink || "https://www.instagram.com/balpradaayurvedics/",
      timestamp: item.timestamp,
      likes: item.like_count || null,
      comments: item.comments_count || null,
      isReel: item.media_type === "VIDEO",
    }));

    return NextResponse.json({
      success: true,
      source: "live_meta_api",
      username: "balpradaayurvedics",
      data: formattedData.length > 0 ? formattedData : FALLBACK_INSTAGRAM_POSTS,
    });
  } catch (error) {
    console.error("[Instagram Fetch Exception]", error);
    return NextResponse.json({
      success: true,
      source: "fallback_on_exception",
      username: "balpradaayurvedics",
      data: FALLBACK_INSTAGRAM_POSTS,
      error: error.message,
    });
  }
}
