import {
  Bell,
  CalendarDays,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronLeft,
  CircleHelp,
  Code2,
  FolderKanban,
  Home,
  LayoutDashboard,
  ListTodo,
  LockKeyhole,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Signal,
  Users,
  Wifi,
} from "lucide-react";
import type { HeroLabCopy } from "./content";

const sceneText = {
  ar: {
    brand: "مدار",
    workspace: "مساحة فريق التصميم",
    search: "ابحث في المشاريع…",
    overview: "نظرة عامة",
    projects: "المشاريع",
    tasks: "مهامي",
    team: "الفريق",
    messages: "الرسائل",
    settings: "الإعدادات",
    help: "المساعدة والدعم",
    project: "إطلاق متجر نواة",
    subtitle: "كل التفاصيل الصغيرة التي تصنع تجربة كبيرة.",
    board: "لوحة المهام",
    files: "الملفات",
    timeline: "الجدول الزمني",
    invite: "دعوة عضو",
    newTask: "مهمة جديدة",
    done: "مكتملة",
    active: "قيد التنفيذ",
    review: "للمراجعة",
    todo: "المهام القادمة",
    due: "موعد الإطلاق",
    date: "٢٨ أكتوبر",
    progress: "تقدّم المشروع",
    week: "هذا الأسبوع",
    greeting: "صباح الخير، سارة",
    daily: "لنصنع يومًا مثمرًا ✦",
    today: "مهام اليوم",
    all: "عرض الكل",
    next: "اجتماعك القادم",
    meeting: "مراجعة تجربة الشراء",
    meetingTime: "١١:٣٠ — ١٢:٠٠",
    join: "انضم للاجتماع",
    design: "تصميم",
    dev: "تطوير",
    content: "محتوى",
    taskA: "تصميم صفحة المنتج",
    taskB: "تطوير سلة المشتريات",
    taskC: "مراجعة تجربة الدفع",
    taskD: "كتابة وصف المنتجات",
    taskE: "نظام الألوان والخطوط",
    taskF: "اختبار واجهة الجوال",
    person: "سارة أحمد",
    role: "مصممة منتجات",
    updated: "تم التحديث الآن",
    completed: "أنجزت ٤ من ٦ مهام",
    dateShort: "٢٤ أكتوبر",
    todayDate: "الأربعاء، ٢١ أكتوبر",
    sprint: "دورة العمل ٠٣",
    high: "أولوية عالية",
    normal: "متوسطة",
    you: "أنت",
    ready: "جاهز للنشر",
    demo: "منتج تجريبي — بيانات توضيحية",
  },
  en: {
    brand: "Madar",
    workspace: "Design team workspace",
    search: "Search projects…",
    overview: "Overview",
    projects: "Projects",
    tasks: "My tasks",
    team: "Team",
    messages: "Messages",
    settings: "Settings",
    help: "Help & support",
    project: "Nawa store launch",
    subtitle: "The little details that make a great experience.",
    board: "Task board",
    files: "Files",
    timeline: "Timeline",
    invite: "Invite member",
    newTask: "New task",
    done: "Completed",
    active: "In progress",
    review: "In review",
    todo: "Up next",
    due: "Launch date",
    date: "28 October",
    progress: "Project progress",
    week: "This week",
    greeting: "Good morning, Sarah",
    daily: "Let’s make today count ✦",
    today: "Today’s tasks",
    all: "View all",
    next: "Your next meeting",
    meeting: "Checkout experience review",
    meetingTime: "11:30 — 12:00",
    join: "Join meeting",
    design: "Design",
    dev: "Development",
    content: "Content",
    taskA: "Product page design",
    taskB: "Shopping cart development",
    taskC: "Checkout experience review",
    taskD: "Write product descriptions",
    taskE: "Colors & typography",
    taskF: "Mobile interface testing",
    person: "Sarah Ahmed",
    role: "Product designer",
    updated: "Updated just now",
    completed: "4 of 6 tasks completed",
    dateShort: "24 Oct",
    todayDate: "Wednesday, October 21",
    sprint: "Sprint 03",
    high: "High priority",
    normal: "Medium",
    you: "You",
    ready: "Ready to deploy",
    demo: "Concept product — sample data",
  },
};

function Avatars({ small = false }: { small?: boolean }) {
  return (
    <div className="flex -space-x-1.5" dir="ltr">
      {[
        { letter: "S", color: "#c6b4e9" },
        { letter: "M", color: "#b9d6c5" },
        { letter: "A", color: "#ebc5a8" },
      ].map(({ letter, color }) => (
        <span
          key={letter}
          className={`flex shrink-0 items-center justify-center rounded-full border-2 border-white font-sans font-bold text-[#45404d] ${small ? "size-5 text-[7px]" : "size-7 text-[9px]"}`}
          style={{ backgroundColor: color }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

export function ProductScene({ copy }: { copy: HeroLabCopy }) {
  const ar = copy.dashboard === "مساحة العمل";
  const t = sceneText[ar ? "ar" : "en"];
  const columns = [
    {
      title: t.todo,
      color: "#9b94a7",
      count: "04",
      items: [
        {
          title: t.taskD,
          tag: t.content,
          color: "#f0e7db",
          priority: t.normal,
        },
        { title: t.taskF, tag: t.dev, color: "#e1ebf5", priority: t.normal },
      ],
    },
    {
      title: t.active,
      color: "#8c57d9",
      count: "03",
      items: [
        { title: t.taskA, tag: t.design, color: "#eee4fa", priority: t.high },
        { title: t.taskB, tag: t.dev, color: "#e1ebf5", priority: t.high },
      ],
    },
    {
      title: t.review,
      color: "#cf9d48",
      count: "02",
      items: [
        { title: t.taskC, tag: t.design, color: "#eee4fa", priority: t.normal },
        { title: t.taskE, tag: t.design, color: "#eee4fa", priority: t.normal },
      ],
    },
  ];

  return (
    <figure
      data-motion="scene"
      data-entrance
      className="mx-auto mt-9 w-full max-w-6xl sm:mt-12"
    >
      <div
        className="relative aspect-[1100/600] w-full [container-type:inline-size]"
        aria-hidden="true"
        dir="ltr"
      >
        {/* Scale a complete interface as one object, like an actual device screenshot. */}
        <div
          className="absolute left-0 top-0 h-[600px] w-[1100px] origin-top-left select-none text-[10px] leading-[1.4]"
          style={{ transform: "scale(calc(100cqw / 1100px))" }}
        >
          <div className="absolute left-52 top-12 h-96 w-[650px] rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute left-[130px] top-3 w-[840px] rotate-[-3deg]">
            <div className="rounded-t-[22px] rounded-b-lg border border-[#58515e] bg-[#242129] p-[9px] shadow-[0_30px_70px_#0005]">
              <div className="relative mb-1 flex h-3 justify-center">
                <span className="size-1.5 rounded-full bg-[#393540] ring-1 ring-[#111015]" />
              </div>
              <div className="overflow-hidden rounded-lg bg-[#f8f9fc] text-[#252031]">
                <div className="flex h-8 items-center gap-2 border-b border-[#e6e3eb] bg-[#efedf3] px-3">
                  <span className="size-2 rounded-full bg-[#e3a5a5]" />
                  <span className="size-2 rounded-full bg-[#e8c48d]" />
                  <span className="size-2 rounded-full bg-[#a4c6a8]" />
                  <div className="mx-auto flex h-5 w-80 items-center justify-center gap-2 rounded bg-white text-[8px] text-[#82788d]">
                    <LockKeyhole className="size-2.5" />
                    <span className="font-mono">
                      app.madar.example / projects / nawa
                    </span>
                  </div>
                  <Plus className="size-3 text-[#8a8196]" />
                </div>
                <div className="flex h-[460px]" dir={ar ? "rtl" : "ltr"}>
                  <aside className="flex w-[155px] shrink-0 flex-col border-e border-[#e9e6ef] bg-white p-3">
                    <div className="flex items-center gap-2 px-1 pt-1">
                      <span className="flex size-7 items-center justify-center rounded-lg bg-[#7943c7] text-white">
                        <FolderKanban className="size-4" />
                      </span>
                      <b className="text-xl">
                        {t.brand}
                        <span className="text-[#8b54ce]">.</span>
                      </b>
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-md border border-[#ebe7f1] px-2 py-2 text-[8px] text-[#72687e]">
                      {t.workspace}
                      <ChevronDown className="size-3" />
                    </div>
                    <div className="mt-4 space-y-1">
                      {[
                        { Icon: LayoutDashboard, text: t.overview },
                        { Icon: FolderKanban, text: t.projects },
                        { Icon: ListTodo, text: t.tasks },
                        { Icon: Users, text: t.team },
                        { Icon: MessageSquare, text: t.messages },
                      ].map(({ Icon, text }, index) => (
                        <div
                          key={text}
                          className={`flex items-center gap-2 rounded-md px-2 py-2.5 text-[9px] ${index === 1 ? "bg-[#f0e8fb] font-bold text-[#7943c7]" : "text-[#756b82]"}`}
                        >
                          <Icon className="size-3.5" />
                          {text}
                          {index === 4 && (
                            <span className="ms-auto rounded bg-[#f0edf5] px-1.5 text-[8px]">
                              3
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto space-y-3 px-2 text-[9px] text-[#81768c]">
                      <div className="flex items-center gap-2">
                        <Settings className="size-3" />
                        {t.settings}
                      </div>
                      <div className="flex items-center gap-2">
                        <CircleHelp className="size-3" />
                        {t.help}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 border-t border-[#eeeaf2] pt-3">
                      <span className="flex size-7 items-center justify-center rounded-full bg-[#d8c8ed] text-[10px]">
                        S
                      </span>
                      <div>
                        <b className="block text-[9px]">{t.person}</b>
                        <span className="text-[7px] text-[#8a8094]">
                          {t.role}
                        </span>
                      </div>
                      <MoreHorizontal className="ms-auto size-3" />
                    </div>
                  </aside>
                  <div className="min-w-0 flex-1">
                    <div className="flex h-10 items-center justify-between border-b border-[#e9e6ef] bg-white px-5 text-[9px] text-[#8c8298]">
                      <div className="flex items-center gap-2">
                        <Search className="size-3" />
                        {t.search}
                      </div>
                      <div className="flex items-center gap-4">
                        <span>{t.todayDate}</span>
                        <Bell className="size-3.5" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] text-[#998ba8]">
                          {t.projects} / {t.sprint}
                        </span>
                        <span className="flex items-center gap-1 text-[7px] text-[#8d8199]">
                          <span className="size-1 rounded-full bg-[#7baf8a]" />
                          {t.updated}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div>
                          <h3 className="text-[21px] font-bold">{t.project}</h3>
                          <p className="mt-1 text-[8px] text-[#8d8199]">
                            {t.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatars />
                          <span className="rounded-md border border-[#ded8e8] bg-white px-2.5 py-2 text-[8px]">
                            + {t.invite}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {[
                          {
                            label: t.progress,
                            value: "68%",
                            detail: "17 / 25",
                            color: "#8650cc",
                          },
                          {
                            label: t.done,
                            value: "17",
                            detail: "+4 ↗",
                            color: "#568d69",
                          },
                          {
                            label: t.due,
                            value: t.date,
                            detail: t.week,
                            color: "#ad8853",
                          },
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-lg border border-[#e9e5ef] bg-white px-3 py-2.5"
                          >
                            <div className="flex items-center justify-between text-[8px] text-[#877a95]">
                              <span>{stat.label}</span>
                              <span style={{ color: stat.color }}>
                                {stat.detail}
                              </span>
                            </div>
                            <div className="mt-1 text-[19px] font-bold tabular-nums">
                              {stat.value}
                            </div>
                            {stat.label === t.progress && (
                              <div className="mt-1 h-1 rounded-full bg-[#eee8f6]">
                                <div className="h-full w-[68%] rounded-full bg-[#8650cc]" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between border-b border-[#e4deed] pb-2">
                        <div className="flex gap-5 text-[9px]">
                          <span className="font-bold text-[#7b45be]">
                            {t.board}
                          </span>
                          <span className="text-[#94869f]">{t.timeline}</span>
                          <span className="text-[#94869f]">{t.files}</span>
                        </div>
                        <span className="flex items-center gap-1 rounded-md bg-[#7b45be] px-2 py-1.5 text-[8px] text-white">
                          <Plus className="size-2.5" />
                          {t.newTask}
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        {columns.map((column) => (
                          <div key={column.title}>
                            <div className="mb-2 flex items-center gap-1.5 text-[8px]">
                              <span
                                className="size-1.5 rounded-full"
                                style={{ background: column.color }}
                              />
                              <b>{column.title}</b>
                              <span className="text-[#a49aae]">
                                {column.count}
                              </span>
                              <Plus className="ms-auto size-2.5 text-[#9e92a9]" />
                            </div>
                            <div className="space-y-2">
                              {column.items.map((task, index) => (
                                <div
                                  key={task.title}
                                  className="rounded-md border border-[#e6e0ec] bg-white p-2.5 shadow-[0_2px_3px_#35204504]"
                                >
                                  <div className="flex justify-between">
                                    <span
                                      className="rounded px-1.5 py-0.5 text-[6px] text-[#72607e]"
                                      style={{ background: task.color }}
                                    >
                                      {task.tag}
                                    </span>
                                    <MoreHorizontal className="size-3 text-[#a59aaf]" />
                                  </div>
                                  <div className="mt-2 text-[9px] font-bold">
                                    {task.title}
                                  </div>
                                  <div className="mt-2 flex items-center gap-1 text-[6px] text-[#9b8da7]">
                                    <CalendarDays className="size-2" />
                                    {t.dateShort}
                                    <span className="ms-auto text-[#b18a62]">
                                      {task.priority}
                                    </span>
                                  </div>
                                  <div className="mt-2 flex items-center justify-between border-t border-[#f0edf4] pt-2">
                                    <Avatars small />
                                    <span className="flex items-center gap-1 text-[7px] text-[#9c90a6]">
                                      <MessageSquare className="size-2.5" />
                                      {index ? "2" : "5"}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative -mx-7 h-4 rounded-b-[50%] border-t border-[#918b97] bg-gradient-to-b from-[#8d8697] via-[#645d70] to-[#302b37] shadow-xl">
              <div className="mx-auto h-1.5 w-28 rounded-b-xl bg-[#3b3545]" />
            </div>
          </div>
          <div
            data-motion="terminal"
            data-entrance
            className="absolute left-1 top-[305px] w-[300px] rotate-[4deg] overflow-hidden rounded-xl border border-[#4d405f] bg-[#19151f] text-[#c8bfd4] shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-[#342a40] bg-[#211a2a] px-4 py-3 text-[9px]">
              <Code2 className="size-3 text-[#b899e4]" />
              <span className="font-mono">project.tsx</span>
              <span className="ms-auto text-[#85778f]">M</span>
            </div>
            <div
              className="space-y-2 px-4 py-4 font-mono text-[10px] leading-5"
              dir="ltr"
            >
              <div>
                <span className="me-4 text-[#655970]">01</span>
                <span className="text-[#b591e1]">export default</span>{" "}
                <span className="text-[#9bc9b5]">Project</span>() &#123;
              </div>
              <div>
                <span className="me-4 text-[#655970]">02</span>{" "}
                <span className="text-[#b591e1]">return</span> (
              </div>
              <div>
                <span className="me-4 text-[#655970]">03</span> &lt;
                <span className="text-[#d5c394]">Workspace</span>
              </div>
              <div>
                <span className="me-4 text-[#655970]">04</span>{" "}
                <span className="text-[#a9bcdb]">name</span>=
                <span className="text-[#b3d59e]">&quot;Nawa Store&quot;</span>
              </div>
              <div>
                <span className="me-4 text-[#655970]">05</span>{" "}
                <span className="text-[#a9bcdb]">status</span>=
                <span className="text-[#b3d59e]">&quot;in-progress&quot;</span>
              </div>
              <div>
                <span className="me-4 text-[#655970]">06</span> /&gt; ); &#125;
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-[#342a40] px-4 py-2 text-[8px]">
              <CheckCheck className="size-3 text-[#a8d79b]" />
              <span>{t.ready}</span>
              <span className="ms-auto font-mono text-[#8d7f9a]">
                TypeScript
              </span>
            </div>
          </div>
          <div
            data-motion="phone"
            data-entrance
            className="absolute right-[12px] top-[100px] w-[244px] origin-top-right scale-75 rotate-[6deg] rounded-[33px] border border-[#78717f] bg-[#242129] p-[6px] shadow-[12px_20px_40px_#0005]"
          >
            <div className="overflow-hidden rounded-[27px] bg-[#faf9fc] text-[#302637]">
              <div className="relative flex h-8 items-center justify-between px-4 pt-1 text-[8px] font-bold">
                <span>9:41</span>
                <span className="absolute left-1/2 top-2 h-3 w-14 -translate-x-1/2 rounded-full bg-[#1d1922]" />
                <div className="flex items-center gap-1">
                  <Signal className="size-2.5" />
                  <Wifi className="size-2.5" />
                  <div className="h-1.5 w-3 rounded-sm bg-[#302637]" />
                </div>
              </div>
              <div className="px-3.5 pt-3" dir={ar ? "rtl" : "ltr"}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">
                    {t.brand}
                    <span className="text-[#8b54ce]">.</span>
                  </span>
                  <div className="relative">
                    <Bell className="size-3.5 text-[#86758e]" />
                    <span className="absolute -top-0.5 right-0 size-1 rounded-full bg-[#8955c8]" />
                  </div>
                </div>
                <p className="mt-4 text-[8px] text-[#9a8aa3]">{t.todayDate}</p>
                <h3 className="mt-1 text-[15px] font-bold">{t.greeting}</h3>
                <p className="mt-1 text-[8px] text-[#9886a2]">{t.daily}</p>
                <div className="mt-3 rounded-xl bg-[#ede5f6] p-3">
                  <div className="flex items-center justify-between text-[8px] text-[#8c739f]">
                    <span>{t.project}</span>
                    <MoreHorizontal className="size-3" />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[25px] font-bold text-[#7242ac]">
                        68<span className="text-xs">%</span>
                      </span>
                      <p className="text-[7px] text-[#9a83ad]">{t.progress}</p>
                    </div>
                    <svg viewBox="0 0 50 50" className="size-12 -rotate-90">
                      <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke="#dbcee9"
                        strokeWidth="5"
                      />
                      <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke="#8b55c6"
                        strokeWidth="5"
                        strokeDasharray="85 126"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 border-t border-[#dcd0e9] pt-2 text-[7px] text-[#947ca7]">
                    {t.completed}
                  </div>
                </div>
                <div className="mb-2 mt-4 flex items-center justify-between">
                  <b className="text-[10px]">{t.today}</b>
                  <span className="text-[7px] text-[#9665ba]">{t.all}</span>
                </div>
                {[
                  { title: t.taskA, checked: true, time: "09:00" },
                  { title: t.taskC, checked: false, time: "11:30" },
                  { title: t.taskF, checked: false, time: "14:00" },
                ].map((task) => (
                  <div
                    key={task.title}
                    className="flex items-center gap-2 border-b border-[#eee9f3] py-2.5"
                  >
                    <span
                      className={`flex size-3.5 items-center justify-center rounded border ${task.checked ? "border-[#9e7cc5] bg-[#9e7cc5] text-white" : "border-[#d9cfe4]"}`}
                    >
                      {task.checked && <Check className="size-2.5" />}
                    </span>
                    <div className="flex-1">
                      <p
                        className={`text-[8px] ${task.checked ? "text-[#aea1b8] line-through" : "text-[#5f4c6e]"}`}
                      >
                        {task.title}
                      </p>
                      <span className="font-mono text-[6px] text-[#af9ebc]">
                        {task.time}
                      </span>
                    </div>
                    <ChevronLeft className="size-2.5 text-[#b9adbf]" />
                  </div>
                ))}
                <div className="mt-3 rounded-lg bg-[#e8efdc] p-2.5">
                  <p className="text-[6px] text-[#86946c]">
                    {t.next} · {t.meetingTime}
                  </p>
                  <div className="mt-1.5 flex items-center justify-between">
                    <b className="text-[8px] text-[#5b6c46]">{t.meeting}</b>
                    <span className="flex size-5 items-center justify-center rounded-full bg-[#64794c] text-white">
                      <ChevronLeft className="size-3" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-around border-t border-[#e9e1f1] bg-white py-2 text-[#ad9bb8]">
                {[Home, ListTodo, CalendarDays, Users].map((Icon, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center gap-1 ${i === 0 ? "text-[#8651bc]" : ""}`}
                  >
                    <Icon className="size-3.5" />
                    <span className="size-0.5 rounded-full bg-current" />
                  </div>
                ))}
              </div>
              <div className="mx-auto mb-1.5 mt-1 h-1 w-16 rounded-full bg-[#342c3c]" />
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
