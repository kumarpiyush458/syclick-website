import {
  CalendarCheck,
  PhoneCall,
  MessageCircle,
  ArrowRightLeft,
} from "lucide-react";

const activities = [
  {
    icon: CalendarCheck,
    title: "Appointment Booked",
    subtitle: "Sarah Johnson • Dr. Sharma",
    time: "2 mins ago",
  },
  {
    icon: PhoneCall,
    title: "Call Answered",
    subtitle: "Patient inquiry handled",
    time: "8 mins ago",
  },
  {
    icon: MessageCircle,
    title: "FAQ Answered",
    subtitle: "Clinic timings shared",
    time: "14 mins ago",
  },
  {
    icon: ArrowRightLeft,
    title: "Call Transferred",
    subtitle: "Transferred to Reception",
    time: "26 mins ago",
  },
];

export default function ActivityFeed() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white">
        Today's Activity
      </h2>

      <p className="mt-1 text-sm text-zinc-400">
        Live activity from your AI receptionist.
      </p>

      <div className="mt-8 space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title + activity.time}
              className="flex items-start gap-4"
            >
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <Icon className="h-5 w-5 text-cyan-400" />
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-white">
                  {activity.title}
                </h3>

                <p className="text-sm text-zinc-400">
                  {activity.subtitle}
                </p>
              </div>

              <span className="text-xs text-zinc-500">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}