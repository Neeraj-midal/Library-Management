import team from "@/data/team.json";

export default function Team() {
  return (
    <section className="py-20">
      <h2>Meet Mur Team</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 text-center">
            <img
              src={member.image}
              className="w-28 h-28 rounded-full mx-auto object-cover"
            />

            <h3 className="font-bold mt-4">{member.name}</h3>
            <p className="text-slate-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
