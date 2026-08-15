const doctors = [
  {
    name: "Dr. Amit Sharma",
    appointments: 42,
    rating: "4.9",
  },
  {
    name: "Dr. Priya Singh",
    appointments: 37,
    rating: "4.8",
  },
  {
    name: "Dr. Rahul Mehta",
    appointments: 31,
    rating: "4.9",
  },
];

export default function TopDoctorsCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        👨‍⚕️ Top Performing Doctors
      </h2>

      <p className="mt-1 text-sm text-zinc-400">
        Ranked by appointments handled.
      </p>

      <div className="mt-6 space-y-4">

        {doctors.map((doctor) => (
          <div
            key={doctor.name}
            className="flex items-center justify-between rounded-xl bg-zinc-800 p-4"
          >

            <div>

              <p className="font-medium text-white">
                {doctor.name}
              </p>

              <p className="text-sm text-zinc-500">
                ⭐ {doctor.rating}
              </p>

            </div>

            <div className="text-right">

              <p className="text-2xl font-bold text-cyan-400">
                {doctor.appointments}
              </p>

              <p className="text-sm text-zinc-500">
                Appointments
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}