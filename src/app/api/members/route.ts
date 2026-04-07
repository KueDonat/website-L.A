import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
const MEMBER_IDS = [
  "1214815892668547105",
  "762016751810117712",
  "1380038926793703495",
  "908159981168251012",
  "763938193418354727",
  "999264557916762224",
];

export async function GET() {
  try {
    const fetchMember = async (id: string) => {
      const res = await fetch(`https://discord.com/api/v10/users/${id}`, {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
        next: { revalidate: 3600 },
      });

      const data = await res.json();

      // Jika Discord balikin error (misal token salah/user ga ada),
      // kita kasih ID dummy supaya frontend ga crash
      if (!res.ok) {
        console.error(`Error fetching Discord ID ${id}:`, data);
        return {
          id: `error-${id}`,
          username: "Unknown",
          global_name: "Staff L.A",
          avatar: null,
        };
      }

      return data;
    };

    const membersData = await Promise.all(
      MEMBER_IDS.map((id) => fetchMember(id)),
    );

    return NextResponse.json(membersData);
  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
