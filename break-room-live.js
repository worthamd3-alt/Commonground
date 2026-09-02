/* The Break Room — CommonGround
 * Recovered application source for app-live.html.
 * Build:  node build.js   (splices this file into the vendor shell)
 * Do not edit app-live.html directly; edit this file and rebuild.
 */
var i = Qa(Xs()),
  d = {
    paper: "#EFEBE2",
    card: "#FFFFFF",
    ink: "#1C1B16",
    sub: "#77746A",
    faint: "#A6A297",
    pine: "#1E3A32",
    pine2: "#2E5247",
    honey: "#E19A38",
    honeySoft: "#F3E2C4",
    line: "#E8E3D8",
    secure: "#14231E",
    secureHi: "#4FB68A",
    flag: "#C0563E"
  },
  jk = "https://pgvrfrfmknmpsfufzjzh.supabase.co",
  Cv = "sb_publishable_hqlwbvYBa9OkiwY6ywX5Wg_9y2QnlLc",
  F = hv(jk, Cv),
  Mp = e => {
    let t = Math.floor((Date.now() - new Date(e).getTime()) / 1e3);
    return t < 60 ? "now" : t < 3600 ? Math.floor(t / 60) + "m" : t < 86400 ? Math.floor(t / 3600) + "h" : t < 604800 ? Math.floor(t / 86400) + "d" : new Date(e).toLocaleDateString()
  },
  mo = "You",
  Hp = e => {
    let t = e.split(":");
    return t[0] + "-" + t[1].toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
  },
  D = "'Bricolage Grotesque', system-ui, sans-serif",
  p = "'Hanken Grotesk', system-ui, sans-serif",
  kd = [{
    id: "hunting",
    name: "Hunting",
    icon: hs,
    color: "#6B7A3A",
    members: 27,
    subs: ["Deer", "Turkey", "Waterfowl", "Other"]
  }, {
    id: "fishing",
    name: "Fishing",
    icon: Qi,
    color: "#2E7DA6",
    members: 33
  }, {
    id: "sports",
    name: "Sports",
    icon: fa,
    color: "#3E7C57",
    members: 41,
    subs: ["Basketball", "Football", "Golf", "Softball", "Volleyball", "Tennis"]
  }, {
    id: "youth",
    name: "Youth Sports",
    icon: un,
    color: "#C77D2E",
    members: 38,
    subs: ["Baseball", "Softball", "Travel Ball", "Volleyball", "Gymnastics", "Soccer", "Swimming & Lessons"]
  }, {
    id: "parenting",
    name: "Parenting",
    icon: Qr,
    color: "#B25E7E",
    members: 44,
    subs: ["New & Expecting", "Toddlers & Littles", "School-Age", "Teens", "Special Needs Support"]
  }, {
    id: "alumni",
    name: "Alumni & Fans",
    icon: Lr,
    color: "#3D6AA6",
    members: 51,
    subs: ["Ole Miss", "Mississippi State", "Northeast MS CC", "Itawamba CC", "Delta State"],
    addable: !0
  }, {
    id: "water",
    name: "Water Sports",
    icon: xs,
    color: "#2E8A9E",
    members: 21,
    subs: ["Kayaking", "Water Skiing", "Boating", "Paddleboarding", "Wakeboarding"]
  }, {
    id: "pickle",
    name: "Pickleball",
    icon: Yi,
    color: "#DD6455",
    members: 34
  }, {
    id: "rides",
    name: "Running & Cycling",
    icon: Ji,
    color: "#C0563E",
    members: 29,
    subs: ["Marathon Running", "Road Cycling", "Mountain Biking", "Trail Running"]
  }, {
    id: "moto",
    name: "Motorcycles & Off-Road",
    icon: gs,
    color: "#7A5A3A",
    members: 19,
    subs: ["Motorcycles", "4-Wheeling / ATVs"]
  }, {
    id: "cars",
    name: "Classic Cars",
    icon: eo,
    color: "#B4532F",
    members: 22
  }, {
    id: "music",
    name: "Musicians",
    icon: as,
    color: "#3D6AA6",
    members: 28,
    subs: ["Guitar", "Piano / Keys", "Vocals", "Band / Ensemble"]
  }, {
    id: "gaming",
    name: "Gaming & Esports",
    icon: Zi,
    color: "#6A4FA0",
    members: 24
  }, {
    id: "mahjong",
    name: "Mahjong",
    icon: ss,
    color: "#3B8C7A",
    members: 9
  }, {
    id: "garden",
    name: "Gardening",
    icon: ps,
    color: "#4C7A45",
    members: 26
  }, {
    id: "pets",
    name: "Pets & Animals",
    icon: Xi,
    color: "#B07A2E",
    members: 31,
    subs: ["Dog Training", "Dog Breeding", "Cat Lovers", "Equine / Horses"]
  }, {
    id: "outdoors",
    name: "Outdoors",
    icon: us,
    color: "#4C6B39",
    members: 39,
    subs: ["Hiking", "Camping", "Bird Watching"]
  }, {
    id: "art",
    name: "Art & Crafts",
    icon: cs,
    color: "#7A54A0",
    members: 17
  }, {
    id: "food",
    name: "Foodies",
    icon: vs,
    color: "#CE8A2C",
    members: 52
  }, {
    id: "books",
    name: "Book Club",
    icon: nn,
    color: "#2E8A85",
    members: 14
  }, {
    id: "collect",
    name: "Collectors",
    icon: is,
    color: "#8A6A4A",
    members: 12,
    subs: ["Stamps", "Coins", "Other"]
  }],
  En = [{
    id: "surgery",
    name: "Surgery Center",
    members: 24
  }, {
    id: "billing",
    name: "Billing",
    members: 19
  }, {
    id: "workcomp",
    name: "Work Comp",
    members: 8
  }, {
    id: "front",
    name: "Front Desk / Appointments",
    members: 46
  }, {
    id: "physadmin",
    name: "Physicians / Administration",
    members: 21
  }, {
    id: "vendors",
    name: "Vendors",
    members: 12
  }, {
    id: "dme",
    name: "DME",
    members: 9
  }, {
    id: "purchasing",
    name: "Purchasing",
    members: 6
  }, {
    id: "imaging",
    name: "Imaging",
    members: 18
  }, {
    id: "pt",
    name: "Physical Therapy",
    members: 31
  }, {
    id: "nursing",
    name: "Nursing / Clinical",
    members: 33
  }, {
    id: "records",
    name: "Medical Records",
    members: 11
  }, {
    id: "marketing",
    name: "Marketing",
    members: 6
  }, {
    id: "ithr",
    name: "IT & HR",
    members: 10
  }],
  IT = ["Everyone", ...En.map(e => e.name)],
  vv = [{
    name: "Jordan Pace",
    role: "Scheduler",
    dept: "Front Desk / Appointments"
  }, {
    name: "Jordan Pace",
    role: "Scheduler",
    dept: "Surgery Center"
  }, {
    name: "Lena Ortiz",
    role: "Surgical Tech",
    dept: "Surgery Center"
  }, {
    name: "Cade Nichols",
    role: "AR Specialist",
    dept: "Billing"
  }],
  Up = ["Employee", "Manager", "Admin"],
  Np = {
    Employee: "#8A9690",
    Manager: "#5A8FCB",
    Admin: "#E19A38"
  },
  xv = [{
    role: "Employee",
    icon: hn,
    note: "Messaging + optional social. Can post to the feed."
  }, {
    role: "Department Manager",
    icon: St,
    note: "Approves their department's members, posts official to their department, handles reports."
  }, {
    role: "Admin / HR",
    icon: wt,
    note: "Full control: companywide announcements, account provisioning, audit log, all approvals."
  }],
  Hk = {},
  Ys = [{
    id: "furniture",
    name: "Furniture",
    icon: ds,
    color: "#B4772A"
  }, {
    id: "vehicles",
    name: "Vehicles",
    icon: eo,
    color: "#3E7C57"
  }, {
    id: "electronics",
    name: "Electronics",
    icon: fs,
    color: "#3D6AA6"
  }, {
    id: "kids",
    name: "Kids & Baby",
    icon: Qr,
    color: "#C0563E"
  }, {
    id: "tickets",
    name: "Tickets",
    icon: ms,
    color: "#7A54A0"
  }, {
    id: "free",
    name: "Free",
    icon: es,
    color: "#2E8A85"
  }, {
    id: "other",
    name: "Other",
    icon: oo,
    color: "#8A6A4A"
  }];
var qk = e => Ys.find(t => t.id === e) || Ys[Ys.length - 1],
  $p = {
    on: !0,
    title: "Fall Food Drive",
    season: "Q3 2026",
    cause: "North Mississippi food pantries",
    unit: "cans",
    ends: "September 30",
    sides: [{
      id: "oxford",
      name: "Oxford",
      color: "#14213D",
      staff: 118,
      units: 742
    }, {
      id: "tupelo",
      name: "Tupelo",
      color: "#B4532F",
      staff: 84,
      units: 561
    }],
    history: [{
      season: "Q2 2026",
      title: "School Supply Drive",
      winner: "Tupelo"
    }, {
      season: "Q1 2026",
      title: "Coat Drive",
      winner: "Oxford"
    }]
  },
  xd = e => e.staff > 0 ? e.units / e.staff : 0,
  Vp = e => {
    if (e.length < 2) return null;
    let [t, a] = e, r = xd(t) - xd(a);
    return Math.abs(r) < .005 ? {
      tie: !0
    } : {
      tie: !1,
      side: r > 0 ? t : a,
      by: Math.abs(r)
    }
  },
  Wa = ["#14213D", "#660000", "#1E3A32", "#F5821F", "#B4772A", "#3D6AA6", "#7A54A0", "#B4532F", "#2E8A85"],
  wd = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  $k = e => {
    let t = e.split(/\r?\n/).map(r => r.trim()).filter(Boolean),
      a = [];
    return t.forEach((r, o) => {
      let n = r.split(",").map(m => m.trim().replace(/^"|"$/g, ""));
      if (n.length < 2) return;
      let s = n[0],
        l = n[1];
      if (o === 0 && /name/i.test(s)) return;
      let u = null,
        c = null,
        f = l.match(/\d{4}[\/\-.](\d{1,2})[\/\-.](\d{1,2})/),
        h = l.match(/(\d{1,2})[\/\-.](\d{1,2})/);
      if (f) u = parseInt(f[1]), c = parseInt(f[2]);
      else if (h) u = parseInt(h[1]), c = parseInt(h[2]);
      else {
        let m = new Date(l);
        isNaN(m.getTime()) || (u = m.getMonth() + 1, c = m.getDate())
      }
      s && u >= 1 && u <= 12 && c >= 1 && c <= 31 && a.push({
        name: s,
        month: u,
        day: c
      })
    }), a
  },
  Vk = e => {
    let t = e.split(/\r?\n/).map(r => r.trim()).filter(Boolean),
      a = [];
    return t.forEach((r, o) => {
      let n = r.split(",").map(g => g.trim().replace(/^"|"$/g, ""));
      if (n.length < 2) return;
      let s = n[0],
        l = n[1];
      if (o === 0 && /name/i.test(s)) return;
      let u = null,
        c = null,
        f = null,
        h = l.match(/^(\d{4})[\/\-.](\d{1,2})[\/\-.](\d{1,2})/),
        m = l.match(/(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})/);
      if (h) f = +h[1], u = +h[2], c = +h[3];
      else if (m) u = +m[1], c = +m[2], f = +m[3], f < 100 && (f += 2e3);
      else {
        let g = new Date(l);
        isNaN(g.getTime()) || (u = g.getMonth() + 1, c = g.getDate(), f = g.getFullYear())
      }
      s && u >= 1 && u <= 12 && c >= 1 && c <= 31 && f && a.push({
        name: s,
        month: u,
        day: c,
        year: f
      })
    }), a
  },
  _v = e => Math.max(0, new Date().getFullYear() - (e.year || new Date().getFullYear()));
var Sd = [{
    id: "praise",
    name: "Patient Praise",
    icon: Yt,
    color: "#C0563E"
  }, {
    id: "bestof",
    name: "Best Of / Honors",
    icon: fa,
    color: "#B4772A"
  }, {
    id: "grad",
    name: "Graduations",
    icon: Lr,
    color: "#3D6AA6"
  }, {
    id: "milestone",
    name: "Milestones",
    icon: un,
    color: "#2E8A85"
  }, {
    id: "arrival",
    name: "New Arrivals",
    icon: Qr,
    color: "#B25E7E"
  }],
  Gp = e => Sd.find(t => t.id === e) || Sd[0],
  CT = [{
    id: 1,
    cat: "praise",
    title: "A patient wrote in about our PT team",
    body: '"I came in barely able to walk and left feeling like myself again. The whole therapy crew treated me like family." - a grateful patient',
    link: "",
    postedAt: Date.now() - 3 * 36e5,
    pinUntil: Date.now() + 6 * 864e5
  }, {
    id: 2,
    cat: "bestof",
    title: "Vote SOG for Best Orthopedic Practice",
    body: "The Best of North Mississippi ballot is open. Help us bring it home - it only takes two minutes.",
    link: "https://example.com/vote",
    postedAt: Date.now() - 4 * 864e5,
    pinUntil: Date.now() + 12 * 864e5
  }, {
    id: 3,
    cat: "grad",
    title: "Congrats to Angela's daughter, Maya",
    body: "Maya just graduated from Ole Miss with her nursing degree. It runs in the family!",
    link: "",
    postedAt: Date.now() - 2 * 864e5,
    pinUntil: Date.now() + 3 * 864e5
  }];
var wvArchive = [{
  official: !0,
  pinned: !0,
  from: "People & Culture",
  role: "HR",
  time: "1h",
  audience: "Everyone",
  requireAck: !0,
  title: "Updated patient-privacy policy - please acknowledge",
  body: "We've refreshed the confidentiality policy. Open it, read it, and acknowledge so we have a record that every team member has seen it.",
  policy: [{
    h: "Why this matters",
    b: "Protecting patient information is part of everyone's job at SOG. This policy explains what to keep confidential and how to handle it inside The Break Room."
  }, {
    h: "What counts as protected information",
    b: "Any detail that identifies a patient or their care - names, records, diagnoses, appointment details, images, and billing information. When in doubt, treat it as protected."
  }, {
    h: "The golden rule: minimum necessary",
    b: "Access and share patient information only when you need it to do your job, and only with the people who need it. Never browse records out of curiosity."
  }, {
    h: "Using The Break Room correctly",
    b: "Patient information belongs ONLY in the Secure Messaging section. Never put patient details in posts, department chats, group messages, profiles, or any community area."
  }, {
    h: "Protect your access",
    b: "Keep your login private, lock your device, sign out of shared computers, and report a lost or stolen phone right away."
  }, {
    h: "Speak up",
    b: "If you see patient information shared where it shouldn't be - or you make a mistake - report it promptly. Reporting early prevents harm."
  }, {
    h: "If the rules are broken",
    b: "Misusing or mishandling patient information can lead to disciplinary action, up to termination, and may carry legal penalties."
  }, {
    h: "Your acknowledgment",
    b: "By acknowledging, you confirm: I have read and understand this policy. I will protect patient information and keep it out of the non-secure areas of The Break Room."
  }],
  readBy: [],
  notYet: []
}];
var wv = [];

var qp = {};
kd.forEach(e => {
  qp[e.id] = e.id, (e.subs || []).forEach(t => {
    qp[Hp(e.id + ":" + t)] = e.id + ":" + t
  })
});
var Gk = e => qp[e] || e;
var Av = (e, t = 1400, a = .82) => new Promise(r => {
    let o = new FileReader;
    o.onload = () => {
      let n = String(o.result),
        s = new window.Image;
      s.onload = () => {
        try {
          let l = Math.min(1, t / Math.max(s.width, s.height)),
            u = Math.round(s.width * l),
            c = Math.round(s.height * l),
            f = document.createElement("canvas");
          f.width = u, f.height = c, f.getContext("2d").drawImage(s, 0, 0, u, c), r(f.toDataURL("image/jpeg", a))
        } catch {
          r(n)
        }
      }, s.onerror = () => r(n), s.src = n
    }, o.onerror = () => r(null), o.readAsDataURL(e)
  }),
  Kk = "BFjLXnIPnwgwcLapUZ6SzgT9l5w2h-8P6PoH1sg8FpVMrQhRNyVSOw88D5FYq9-AjkUUdx0vayGYAsM_gul3ox8",
  Jk = e => {
    let t = "=".repeat((4 - e.length % 4) % 4),
      a = window.atob((e + t).replace(/-/g, "+").replace(/_/g, "/")),
      r = new Uint8Array(a.length);
    for (let o = 0; o < a.length; o++) r[o] = a.charCodeAt(o);
    return r
  },
  Xk = [{
    k: "dms",
    label: "Direct messages"
  }, {
    k: "announcements",
    label: "Companywide posts"
  }, {
    k: "department",
    label: "My department"
  }, {
    k: "channels",
    label: "Channels"
  }, {
    k: "groups",
    label: "Posts in my groups"
  }],
  Wp = () => /iphone|ipad|ipod/i.test(window.navigator.userAgent),
  Sv = () => window.navigator.standalone === !0 || window.matchMedia && window.matchMedia("(display-mode: standalone)").matches,
  Tr = e => String(e || "").toLowerCase().replace(/[.,']/g, "").replace(/\s+/g, " ").trim(),
  kv = (e, t = 600, a = .85) => new Promise(r => {
    if (!e || typeof e != "string") {
      r(e);
      return
    }
    let o = new window.Image;
    o.onload = () => {
      try {
        let n = Math.min(1, t / Math.max(o.width, o.height)),
          s = Math.round(o.width * n),
          l = Math.round(o.height * n),
          u = document.createElement("canvas");
        u.width = s, u.height = l, u.getContext("2d").drawImage(o, 0, 0, s, l), r(u.toDataURL("image/jpeg", a))
      } catch {
        r(e)
      }
    }, o.onerror = () => r(e), o.src = e
  }),
  Yk = [],
  Qk = [],
  bv = [{
    id: "team",
    label: "My care team",
    note: "8 people",
    min: !0
  }, ...En.map(e => ({
    id: "dept_" + e.id,
    label: e.name,
    note: e.members + " people",
    min: !0
  })), {
    id: "everyone",
    label: "Everyone",
    note: "all staff"
  }],
  Zk = [],
  eb = [{
    icon: Yt,
    color: d.honey,
    title: "Connect over shared interests",
    body: "Find teammates who love what you love - and build real friendships at work."
  }, {
    icon: Zt,
    color: "#3E7C57",
    title: "Keep it respectful and professional",
    body: "Good company and good conversation - the way you'd want to be treated."
  }, {
    icon: sn,
    color: d.flag,
    title: "See something off? Report it",
    body: "Every profile and message has a report button. An admin reviews it."
  }, {
    icon: wt,
    color: d.secureHi,
    title: "Never post patient or confidential info",
    body: "Anything sensitive goes in Secure Messaging - keep it out of posts, chats, and profiles."
  }],
  tb = e => e.split(" ").map(t => t[0]).slice(0, 2).join(""),
  Kp = e => e.split(" ")[0],
  ab = e => kd.find(t => t.id === e),
  rb = e => Yk.find(t => t.name === e);

function Ne({
  name: e,
  size: t = 40,
  bg: a = d.pine,
  src: r
}) {
  return r ? (0, i.jsx)("img", {
    src: r,
    alt: e,
    style: {
      width: t,
      height: t,
      borderRadius: 999,
      objectFit: "cover",
      display: "block",
      flexShrink: 0,
      background: a
    }
  }) : (0, i.jsx)("div", {
    style: {
      width: t,
      height: t,
      background: a,
      color: "#F5F1E8",
      borderRadius: 999,
      fontFamily: D,
      fontWeight: 600,
      fontSize: t * .36,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      letterSpacing: "0.02em"
    },
    children: tb(e)
  })
}

function ob({
  interest: e,
  active: t
}) {
  let a = e.icon;
  return (0, i.jsxs)("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "3px 9px 3px 7px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      color: t ? "#fff" : e.color,
      background: t ? e.color : e.color + "18",
      fontFamily: p
    },
    children: [(0, i.jsx)(a, {
      size: 12,
      strokeWidth: 2.4
    }), e.name]
  })
}

function Qs({
  children: e,
  bg: t,
  color: a
}) {
  return (0, i.jsx)("span", {
    style: {
      fontFamily: p,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "2px 7px",
      borderRadius: 999,
      background: t,
      color: a
    },
    children: e
  })
}

function nb({
  done: e,
  myDept: t = ""
}) {
  let [a, r] = (0, I.useState)(1);
  return a === 2 ? (0, i.jsxs)("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      background: d.paper,
      display: "flex",
      flexDirection: "column"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "30px 22px 28px",
        color: "#F5F1E8",
        textAlign: "center"
      },
      children: [(0, i.jsx)("div", {
        style: {
          width: 52,
          height: 52,
          borderRadius: 15,
          background: "rgba(79,182,138,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 14px"
        },
        children: (0, i.jsx)(pe, {
          size: 26,
          color: d.secureHi,
          strokeWidth: 3
        })
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 800,
          fontSize: 23,
          letterSpacing: "-0.01em"
        },
        children: "You're in"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13,
          opacity: .82,
          marginTop: 8,
          lineHeight: 1.45
        },
        children: t ? "You're in " + t + ". You can join more departments anytime from your profile." : "You can join your departments anytime from your profile."
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "22px 20px",
        flex: 1
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: d.honey,
          marginBottom: 8
        },
        children: "Optional \xB7 your call"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 20,
          color: d.ink,
          marginBottom: 8,
          lineHeight: 1.15
        },
        children: "Want to set up your community profile?"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13.5,
          color: d.sub,
          lineHeight: 1.5,
          marginBottom: 20
        },
        children: "Add a few interests and a little about yourself so coworkers can find their people. Totally optional - do it now, later, or never."
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10
        },
        children: [(0, i.jsx)("button", {
          onClick: () => e("me"),
          style: {
            width: "100%",
            background: d.honey,
            border: "none",
            borderRadius: 14,
            padding: "14px 0",
            fontFamily: D,
            fontWeight: 700,
            fontSize: 15,
            color: d.pine,
            cursor: "pointer"
          },
          children: "Set up my profile"
        }), (0, i.jsx)("button", {
          onClick: () => e(),
          style: {
            width: "100%",
            background: d.card,
            border: "1px solid " + d.line,
            borderRadius: 14,
            padding: "13px 0",
            fontFamily: D,
            fontWeight: 700,
            fontSize: 15,
            color: d.sub,
            cursor: "pointer"
          },
          children: "Skip for now"
        })]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 16,
          fontFamily: p,
          fontSize: 11.5,
          color: d.faint,
          justifyContent: "center"
        },
        children: [(0, i.jsx)(Qt, {
          size: 12
        }), " You can set this up anytime from your profile."]
      })]
    })]
  }) : (0, i.jsxs)("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      background: d.paper
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "28px 22px 30px",
        color: "#F5F1E8",
        textAlign: "center"
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(245,241,232,0.5)",
          marginBottom: 16
        },
        children: "Powered by CommonGround"
      }), (0, i.jsx)("div", {
        style: {
          width: 54,
          height: 54,
          borderRadius: 16,
          background: d.honey,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 14px"
        },
        children: (0, i.jsx)(Yt, {
          size: 28,
          color: d.pine,
          strokeWidth: 2.2
        })
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13,
          opacity: .75,
          marginBottom: 2
        },
        children: "Welcome to"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 800,
          fontSize: 30,
          letterSpacing: "-0.02em",
          lineHeight: 1
        },
        children: "The Break Room"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13.5,
          opacity: .82,
          marginTop: 8
        },
        children: "Where the people of SOG get to know one another."
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "20px 18px 16px"
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: d.faint,
          marginBottom: 14
        },
        children: "A few house rules"
      }), eb.map((o, n) => {
        let s = o.icon;
        return (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 13,
            marginBottom: 18
          },
          children: [(0, i.jsx)("div", {
            style: {
              width: 40,
              height: 40,
              borderRadius: 12,
              background: o.color + "1A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            },
            children: (0, i.jsx)(s, {
              size: 20,
              color: o.color,
              strokeWidth: 2.2
            })
          }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
              style: {
                fontFamily: D,
                fontWeight: 600,
                fontSize: 15,
                color: d.ink,
                marginBottom: 2
              },
              children: o.title
            }), (0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontSize: 13,
                color: d.sub,
                lineHeight: 1.4
              },
              children: o.body
            })]
          })]
        }, n)
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "4px 18px 10px"
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: d.faint,
          marginBottom: 10
        },
        children: "Your department"
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 12,
          padding: "11px 13px",
          marginBottom: 10
        },
        children: [(0, i.jsx)(pe, {
          size: 15,
          color: "#3E7C57",
          strokeWidth: 3
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: p,
            fontSize: 13.5,
            fontWeight: 700,
            color: d.ink
          },
          children: t || "Not set yet"
        })]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 5,
          fontFamily: p,
          fontSize: 11.5,
          color: d.faint
        },
        children: [(0, i.jsx)(St, {
          size: 12,
          color: "#3E7C57"
        }), " Belong to more than one? Add them from your profile anytime."]
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "10px 18px 24px"
      },
      children: [(0, i.jsxs)("div", {
        style: {
          background: d.honeySoft,
          borderRadius: 12,
          padding: "13px 14px",
          marginBottom: 16
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 9,
            marginBottom: 9
          },
          children: [(0, i.jsx)(Da, {
            size: 16,
            color: "#7A5418",
            style: {
              marginTop: 1,
              flexShrink: 0
            }
          }), (0, i.jsxs)("div", {
            style: {
              fontFamily: p,
              fontSize: 13,
              color: "#7A5418",
              lineHeight: 1.4
            },
            children: [(0, i.jsx)("b", {
              style: {
                fontWeight: 700
              },
              children: "Messaging keeps everyone in the loop."
            }), " It's how SOG communicates, so every teammate is here and reachable."]
          })]
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 9
          },
          children: [(0, i.jsx)(Zt, {
            size: 16,
            color: "#7A5418",
            style: {
              marginTop: 1,
              flexShrink: 0
            }
          }), (0, i.jsxs)("div", {
            style: {
              fontFamily: p,
              fontSize: 13,
              color: "#7A5418",
              lineHeight: 1.4
            },
            children: [(0, i.jsx)("b", {
              style: {
                fontWeight: 700
              },
              children: "The social side is all yours."
            }), " Profile, interests, groups - share as much or as little as you like."]
          })]
        })]
      }), (0, i.jsx)("button", {
        onClick: () => r(2),
        style: {
          width: "100%",
          background: d.honey,
          border: "none",
          borderRadius: 14,
          padding: "14px 0",
          fontFamily: D,
          fontWeight: 700,
          fontSize: 15.5,
          color: d.pine,
          cursor: "pointer"
        },
        children: "Continue"
      })]
    })]
  })
}
var Tv = 24 * 36e5,
  ib = e => (e || []).filter(t => t.postedAt && Date.now() - t.postedAt < Tv).sort((t, a) => a.postedAt - t.postedAt);

function sb({
  items: e,
  onOpen: t
}) {
  let a = ib(e);
  if (!a.length) return null;
  let r = a[0],
    o = Gp(r.cat),
    n = o.icon,
    s = Math.floor((Date.now() - r.postedAt) / 36e5),
    l = s < 1 ? "just now" : s + "h ago";
  return (0, i.jsxs)("div", {
    onClick: t,
    style: {
      marginTop: 12,
      background: d.card,
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid " + o.color + "55",
      cursor: "pointer"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: o.color,
        padding: "9px 15px",
        display: "flex",
        alignItems: "center",
        gap: 7,
        color: "#fff"
      },
      children: [(0, i.jsx)(n, {
        size: 14,
        strokeWidth: 2.4
      }), (0, i.jsx)("span", {
        style: {
          fontFamily: p,
          fontSize: 10.5,
          fontWeight: 800,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          flex: 1
        },
        children: o.name
      }), (0, i.jsx)("span", {
        style: {
          fontFamily: p,
          fontSize: 10.5,
          fontWeight: 700,
          opacity: .85
        },
        children: l
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "13px 15px 14px"
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 16,
          color: d.ink,
          lineHeight: 1.25,
          marginBottom: 5
        },
        children: r.title
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13,
          color: d.sub,
          lineHeight: 1.5
        },
        children: r.body
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 11,
          fontFamily: p,
          fontSize: 11.5,
          fontWeight: 700,
          color: o.color
        },
        children: [a.length > 1 ? (0, i.jsxs)(i.Fragment, {
          children: ["+", a.length - 1, " more today \xB7 Open Recognition"]
        }) : (0, i.jsx)(i.Fragment, {
          children: "Open Recognition"
        }), (0, i.jsx)(at, {
          size: 13,
          strokeWidth: 2.6,
          style: {
            transform: "rotate(-90deg)"
          }
        })]
      })]
    })]
  })
}

function lb({
  items: e,
  onOpen: t
}) {
  return (0, i.jsxs)("div", {
    onClick: t,
    style: {
      marginTop: 12,
      background: d.card,
      border: "1px solid " + d.line,
      borderRadius: 18,
      overflow: "hidden",
      cursor: "pointer"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "12px 15px",
        color: "#F5F1E8",
        display: "flex",
        alignItems: "center",
        gap: 10
      },
      children: [(0, i.jsx)("div", {
        style: {
          width: 38,
          height: 38,
          borderRadius: 11,
          background: "rgba(224,154,56,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        },
        children: (0, i.jsx)(Yt, {
          size: 20,
          color: d.honey
        })
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: d.honey
          },
          children: "Recognition"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 16
          },
          children: "Good news & shout-outs"
        })]
      }), (0, i.jsx)(at, {
        size: 18,
        color: "rgba(245,241,232,0.7)",
        style: {
          transform: "rotate(-90deg)"
        }
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "10px 15px",
        fontFamily: p,
        fontSize: 12.5,
        color: d.sub
      },
      children: [e.filter(a => (a.pinUntil || 0) > Date.now()).length, " featured now \u2014 tap to celebrate our people"]
    })]
  })
}

function CodesScreen({
  back: t
}) {
  let a = [{
    name: "Code Red",
    meaning: "Fire",
    color: "#C0392B"
  }, {
    name: "Code Blue",
    meaning: "Cardiac arrest",
    color: "#2C6FA8"
  }, {
    name: "Code Yellow",
    meaning: "Hazardous material spill",
    color: "#D4A017"
  }, {
    name: "Code Gray",
    meaning: "Inclement weather",
    color: "#7A7A72"
  }, {
    name: "Code Black",
    meaning: "Bomb threat",
    color: "#1C1B16"
  }, {
    name: "Code Adam",
    meaning: "Missing person",
    color: "#B5651D"
  }, {
    name: "Code Silver",
    meaning: "Combative person",
    color: "#8A8F98"
  }, {
    name: "Code White",
    meaning: "Person with a weapon",
    color: "#5B6B7A"
  }, {
    name: "Code Green",
    meaning: "All clear",
    color: "#3E7C57"
  }];
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.paper
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "14px 16px 18px",
        color: "#F5F1E8"
      },
      children: [(0, i.jsxs)("button", {
        onClick: t,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.75)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 12
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " Back"]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        },
        children: [(0, i.jsx)(St, {
          size: 20,
          color: d.honey
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 22
          },
          children: "Emergency Codes"
        })]
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          opacity: .82,
          marginTop: 4
        },
        children: "What you hear called overhead, and what it means."
      })]
    }), (0, i.jsxs)("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "14px 16px 22px"
      },
      children: [(0, i.jsx)("div", {
        style: {
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 16,
          overflow: "hidden"
        },
        children: a.map((r, o) => (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "13px 14px",
            borderTop: o === 0 ? "none" : "1px solid " + d.line
          },
          children: [(0, i.jsx)("span", {
            style: {
              width: 14,
              height: 14,
              borderRadius: 999,
              background: r.color,
              border: "1px solid rgba(28,27,22,0.18)",
              flexShrink: 0
            }
          }), (0, i.jsxs)("div", {
            style: {
              minWidth: 0
            },
            children: [(0, i.jsx)("div", {
              style: {
                fontFamily: D,
                fontWeight: 700,
                fontSize: 15,
                color: d.ink,
                lineHeight: 1.2
              },
              children: r.name
            }), (0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontSize: 13,
                color: d.sub,
                marginTop: 2
              },
              children: r.meaning
            })]
          })]
        }, r.name))
      }), (0, i.jsx)("div", {
        style: {
          marginTop: 14,
          background: d.honeySoft,
          borderRadius: 14,
          padding: "12px 14px",
          fontFamily: p,
          fontSize: 12.5,
          color: d.ink,
          lineHeight: 1.5
        },
        children: "This page is here so you already know these before you hear one. In an actual event, follow your location's emergency plan and your supervisor's direction."
      }), (0, i.jsx)("div", {
        style: {
          marginTop: 10,
          fontFamily: p,
          fontSize: 11.5,
          color: d.faint,
          lineHeight: 1.45,
          textAlign: "center"
        },
        children: "Official SOG code list. Questions go to your director."
      })]
    })]
  })
}
function ub({
  items: e,
  back: t
}) {
  let [a, r] = (0, I.useState)("all"), o = Date.now(), n = e.filter(c => a === "all" || c.cat === a), s = n.filter(c => (c.pinUntil || 0) > o).sort((c, f) => f.pinUntil - c.pinUntil), l = n.filter(c => (c.pinUntil || 0) <= o).sort((c, f) => (f.pinUntil || 0) - (c.pinUntil || 0)), u = (c, f) => {
    let h = Gp(c.cat),
      m = h.icon,
      g = Math.max(1, Math.ceil((c.pinUntil - o) / 864e5));
    return (0, i.jsxs)("div", {
      style: {
        background: d.card,
        border: "1px solid " + d.line,
        borderRadius: 16,
        padding: 14,
        marginBottom: 10,
        opacity: f ? 1 : .72
      },
      children: [(0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          marginBottom: 8
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            background: h.color + "18",
            borderRadius: 999,
            padding: "3px 9px"
          },
          children: [(0, i.jsx)(m, {
            size: 12,
            color: h.color
          }), (0, i.jsx)("span", {
            style: {
              fontFamily: p,
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: h.color
            },
            children: h.name
          })]
        }), f && (0, i.jsxs)("span", {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            color: d.faint
          },
          children: [(0, i.jsx)(cn, {
            size: 11
          }), g, "d left"]
        })]
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 15.5,
          color: d.ink,
          marginBottom: 4,
          lineHeight: 1.25
        },
        children: c.title
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13,
          color: d.sub,
          lineHeight: 1.5
        },
        children: c.body
      }), c.link && (0, i.jsxs)("a", {
        href: c.link,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          marginTop: 10,
          background: h.color,
          borderRadius: 9,
          padding: "8px 14px",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 12.5,
          color: "#fff",
          textDecoration: "none"
        },
        children: [c.cat === "bestof" ? "Vote now" : "Learn more", " ", (0, i.jsx)(br, {
          size: 12
        })]
      })]
    }, c.id)
  };
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.paper
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "14px 16px 18px",
        color: "#F5F1E8"
      },
      children: [(0, i.jsxs)("button", {
        onClick: t,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.75)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 12
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " Back"]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        },
        children: [(0, i.jsx)(Yt, {
          size: 20,
          color: d.honey
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 22
          },
          children: "Recognition"
        })]
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          opacity: .82,
          marginTop: 4
        },
        children: "Celebrating our people and the good word about SOG."
      })]
    }), (0, i.jsxs)("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "14px 16px 20px"
      },
      children: [(0, i.jsx)("div", {
        style: {
          display: "flex",
          gap: 7,
          flexWrap: "wrap",
          marginBottom: 14
        },
        children: [{
          id: "all",
          name: "All"
        }, ...Sd].map(c => (0, i.jsx)("button", {
          onClick: () => r(c.id),
          style: {
            border: "1px solid " + (a === c.id ? d.pine : d.line),
            background: a === c.id ? d.pine : "#fff",
            color: a === c.id ? "#F5F1E8" : d.sub,
            borderRadius: 999,
            padding: "6px 12px",
            fontFamily: p,
            fontSize: 12.5,
            fontWeight: 600,
            cursor: "pointer"
          },
          children: c.name
        }, c.id))
      }), s.length === 0 && l.length === 0 && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13.5,
          color: d.faint,
          textAlign: "center",
          padding: "26px 0"
        },
        children: "Nothing here yet."
      }), s.map(c => u(c, !0)), l.length > 0 && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: d.faint,
          margin: "8px 0 10px"
        },
        children: "Earlier"
      }), l.map(c => u(c, !1))]
    })]
  })
}

function Rv({
  people: e,
  photoFor: t,
  max: a = 6
}) {
  if (!e.length) return null;
  let r = e.slice(0, a),
    o = e.length - r.length;
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexShrink: 0
    },
    children: [r.map((n, s) => (0, i.jsx)("div", {
      style: {
        marginLeft: s === 0 ? 0 : -8,
        border: "2px solid " + d.card,
        borderRadius: 999,
        display: "flex"
      },
      children: (0, i.jsx)(Ne, {
        name: n.name,
        size: 26,
        bg: d.pine2,
        src: t ? t(n.name) : null
      })
    }, n.name + s)), o > 0 && (0, i.jsxs)("span", {
      style: {
        fontFamily: p,
        fontSize: 11.5,
        fontWeight: 700,
        color: d.faint,
        marginLeft: 6
      },
      children: ["+", o]
    })]
  })
}

function db({
  anniversaries: e,
  onOpen: t,
  photoFor: a
}) {
  let r = new Date().getMonth() + 1,
    o = new Date().toLocaleString("en-US", {
      month: "long"
    }),
    n = e.filter(s => s.month === r).length;
  if (!n) return null;
  return (0, i.jsxs)("div", {
    onClick: t,
    style: {
      marginTop: 12,
      background: d.card,
      border: "1px solid " + d.line,
      borderRadius: 18,
      overflow: "hidden",
      cursor: "pointer"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "12px 15px",
        color: "#F5F1E8",
        display: "flex",
        alignItems: "center",
        gap: 10
      },
      children: [(0, i.jsx)("div", {
        style: {
          width: 38,
          height: 38,
          borderRadius: 11,
          background: "rgba(224,154,56,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        },
        children: (0, i.jsx)(on, {
          size: 20,
          color: d.honey
        })
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: d.honey
          },
          children: "Work Anniversaries"
        }), (0, i.jsxs)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 16
          },
          children: [o, " milestones"]
        })]
      }), (0, i.jsx)(at, {
        size: 18,
        color: "rgba(245,241,232,0.7)",
        style: {
          transform: "rotate(-90deg)"
        }
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "10px 15px",
        display: "flex",
        alignItems: "center",
        gap: 10
      },
      children: [(0, i.jsxs)("div", {
        style: {
          flex: 1,
          fontFamily: p,
          fontSize: 12.5,
          color: d.sub
        },
        children: [e.filter(s => s.month === r).sort((s, l) => s.day - l.day).map(s => {
          let yrs = s.year ? new Date().getFullYear() - s.year : 0;
          return yrs > 0 ? s.name + " \xB7 " + yrs + (yrs === 1 ? " year" : " years") : s.name
        }).join(", "), " \u2014 tap to celebrate our team"]
      }), (0, i.jsx)(Rv, {
        people: e.filter(s => s.month === r),
        photoFor: a
      })]
    })]
  })
}

function cb({
  anniversaries: e,
  back: t,
  photoFor: a,
  wished: alreadyWished = {},
  onWish: sendWish = null
}) {
  let r = new Date,
    o = r.getMonth() + 1,
    n = r.toLocaleString("en-US", {
      month: "long"
    }),
    s = e.filter(c => c.month === o).sort((c, f) => c.day - f.day),
    [l, u] = (0, I.useState)({});
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.paper
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "14px 16px 18px",
        color: "#F5F1E8"
      },
      children: [(0, i.jsxs)("button", {
        onClick: t,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.75)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 12
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " Back"]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        },
        children: [(0, i.jsx)(on, {
          size: 20,
          color: d.honey
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 22
          },
          children: "Work Anniversaries"
        })]
      }), (0, i.jsxs)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          opacity: .82,
          marginTop: 4
        },
        children: ["Thank you for all you do, ", n, " crew."]
      })]
    }), (0, i.jsxs)("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "14px 16px 20px"
      },
      children: [s.length === 0 ? (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13.5,
          color: d.faint,
          textAlign: "center",
          padding: "28px 0"
        },
        children: "No anniversaries this month."
      }) : s.map(c => {
        let f = _v(c);
        return (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: d.card,
            border: "1px solid " + d.line,
            borderRadius: 15,
            padding: "11px 13px",
            marginBottom: 10
          },
          children: [(0, i.jsxs)("div", {
            style: {
              position: "relative",
              flexShrink: 0
            },
            children: [(0, i.jsx)(Ne, {
              name: c.name,
              size: 44,
              bg: d.pine2,
              src: a(c.name)
            }), (0, i.jsx)("div", {
              style: {
                position: "absolute",
                right: -4,
                bottom: -4,
                background: d.honey,
                color: d.pine,
                borderRadius: 999,
                minWidth: 20,
                height: 20,
                padding: "0 5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: D,
                fontWeight: 800,
                fontSize: 11,
                border: "2px solid " + d.paper
              },
              children: f
            })]
          }), (0, i.jsxs)("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [(0, i.jsx)("div", {
              style: {
                fontFamily: D,
                fontWeight: 700,
                fontSize: 15,
                color: d.ink
              },
              children: c.name
            }), (0, i.jsxs)("div", {
              style: {
                fontFamily: p,
                fontSize: 12.5,
                color: d.honey,
                fontWeight: 700
              },
              children: [f, " year", f !== 1 ? "s" : "", " with SOG \xB7 ", wd[c.month], " ", c.day]
            })]
          }), (0, i.jsx)("button", {
            onClick: () => {
              u(h => ({
                ...h,
                [c.name]: !0
              })), sendWish && sendWish(c.name)
            },
            disabled: l[c.name] || alreadyWished[c.name],
            style: {
              border: "none",
              borderRadius: 999,
              padding: "7px 13px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12,
              cursor: l[c.name] || alreadyWished[c.name] ? "default" : "pointer",
              background: l[c.name] || alreadyWished[c.name] ? d.honeySoft : d.honey,
              color: l[c.name] || alreadyWished[c.name] ? "#8A5A12" : d.pine,
              display: "flex",
              alignItems: "center",
              gap: 5,
              flexShrink: 0
            },
            children: l[c.name] || alreadyWished[c.name] ? (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(dn, {
                size: 13
              }), "Sent"]
            }) : "Say congrats"
          })]
        }, c.name + c.year)
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 11,
          color: d.faint,
          textAlign: "center",
          marginTop: 10,
          lineHeight: 1.4
        },
        children: "Milestones are drawn from hire dates on the roster."
      })]
    })]
  })
}

function fb({
  birthdays: e,
  onOpen: t,
  photoFor: a
}) {
  let r = new Date().getMonth() + 1,
    o = new Date().toLocaleString("en-US", {
      month: "long"
    }),
    n = e.filter(s => s.month === r).length;
  if (!n) return null;
  return (0, i.jsxs)("div", {
    onClick: t,
    style: {
      marginTop: 12,
      background: d.card,
      border: "1px solid " + d.line,
      borderRadius: 18,
      overflow: "hidden",
      cursor: "pointer"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "12px 15px",
        color: "#F5F1E8",
        display: "flex",
        alignItems: "center",
        gap: 10
      },
      children: [(0, i.jsx)("div", {
        style: {
          width: 38,
          height: 38,
          borderRadius: 11,
          background: "rgba(224,154,56,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        },
        children: (0, i.jsx)(Sr, {
          size: 20,
          color: d.honey
        })
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: d.honey
          },
          children: "Birthdays"
        }), (0, i.jsxs)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 16
          },
          children: [o, " celebrations"]
        })]
      }), (0, i.jsx)(at, {
        size: 18,
        color: "rgba(245,241,232,0.7)",
        style: {
          transform: "rotate(-90deg)"
        }
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "10px 15px"
      },
      children: [(0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        },
        children: [(0, i.jsxs)("div", {
          style: {
            flex: 1,
            fontFamily: p,
            fontSize: 12.5,
            color: d.sub
          },
          children: [n, " birthday", n !== 1 ? "s" : "", " this month \u2014 tap to celebrate"]
        }), (0, i.jsx)(Rv, {
          people: e.filter(s => s.month === r),
          photoFor: a
        })]
      }), (0, i.jsx)("div", {
        style: {
          marginTop: 7,
          fontFamily: p,
          fontSize: 12.5,
          fontWeight: 600,
          color: d.ink,
          lineHeight: 1.55
        },
        children: e.filter(s => s.month === r).sort((s, l) => s.day - l.day).map(s => s.name).join(", ")
      })]
    })]
  })
}

function pb({
  birthdays: e,
  cupcake: t,
  back: a,
  photoFor: r,
  wished: alreadyWished = {},
  onWish: sendWish = null
}) {
  let o = new Date,
    n = o.getMonth() + 1,
    s = o.toLocaleString("en-US", {
      month: "long"
    }),
    l = e.filter(f => f.month === n).sort((f, h) => f.day - h.day),
    [u, c] = (0, I.useState)({});
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.paper
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "14px 16px 18px",
        color: "#F5F1E8"
      },
      children: [(0, i.jsxs)("button", {
        onClick: a,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.75)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 12
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " Back"]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        },
        children: [(0, i.jsx)(Sr, {
          size: 20,
          color: d.honey
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 22
          },
          children: "Birthdays"
        })]
      }), (0, i.jsxs)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          opacity: .82,
          marginTop: 4
        },
        children: ["Celebrating our ", s, " crew."]
      })]
    }), (0, i.jsxs)("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "14px 16px 20px"
      },
      children: [t.on && t.msg && (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: d.honeySoft,
          borderRadius: 14,
          padding: "12px 14px",
          marginBottom: 16
        },
        children: [(0, i.jsx)(Sr, {
          size: 22,
          color: "#8A5A12",
          style: {
            flexShrink: 0
          }
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12.5,
            color: "#8A5A12",
            lineHeight: 1.4,
            fontWeight: 600
          },
          children: t.msg
        })]
      }), l.length === 0 ? (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13.5,
          color: d.faint,
          textAlign: "center",
          padding: "28px 0"
        },
        children: "No birthdays this month."
      }) : l.map(f => (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 15,
          padding: "11px 13px",
          marginBottom: 10
        },
        children: [(0, i.jsx)(Ne, {
          name: f.name,
          size: 42,
          bg: d.pine2,
          src: r(f.name)
        }), (0, i.jsxs)("div", {
          style: {
            flex: 1,
            minWidth: 0
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 15,
              color: d.ink
            },
            children: f.name
          }), (0, i.jsxs)("div", {
            style: {
              fontFamily: p,
              fontSize: 12.5,
              color: d.honey,
              fontWeight: 700
            },
            children: [wd[f.month], " ", f.day]
          })]
        }), (0, i.jsx)("button", {
          onClick: () => {
            c(h => ({
              ...h,
              [f.name]: !0
            })), sendWish && sendWish(f.name)
          },
          disabled: u[f.name] || alreadyWished[f.name],
          style: {
            border: "none",
            borderRadius: 999,
            padding: "7px 13px",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 12,
            cursor: u[f.name] || alreadyWished[f.name] ? "default" : "pointer",
            background: u[f.name] || alreadyWished[f.name] ? d.honeySoft : d.honey,
            color: u[f.name] || alreadyWished[f.name] ? "#8A5A12" : d.pine,
            display: "flex",
            alignItems: "center",
            gap: 5,
            flexShrink: 0
          },
          children: u[f.name] || alreadyWished[f.name] ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(dn, {
              size: 13
            }), "Sent"]
          }) : "Say happy birthday"
        })]
      }, f.name)), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 11,
          color: d.faint,
          textAlign: "center",
          marginTop: 10,
          lineHeight: 1.4
        },
        children: "Only the day shows \u2014 never the year. You can hide your birthday anytime in your profile."
      })]
    })]
  })
}

function hb({
  sd: e,
  pp: t,
  maxPP: a
}) {
  let r = a > 0 ? Math.max(6, Math.round(t / a * 100)) : 6;
  return (0, i.jsxs)("div", {
    style: {
      marginBottom: 12
    },
    children: [(0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 7,
        marginBottom: 5
      },
      children: [(0, i.jsx)("div", {
        style: {
          width: 10,
          height: 10,
          borderRadius: 3,
          background: e.color,
          flexShrink: 0
        }
      }), (0, i.jsx)("div", {
        style: {
          flex: 1,
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14.5,
          color: d.ink
        },
        children: e.name
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 800,
          fontSize: 15,
          color: e.color
        },
        children: t.toFixed(1)
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 10.5,
          color: d.faint
        },
        children: "per person"
      })]
    }), (0, i.jsx)("div", {
      style: {
        height: 9,
        borderRadius: 999,
        background: d.line,
        overflow: "hidden"
      },
      children: (0, i.jsx)("div", {
        style: {
          width: r + "%",
          height: "100%",
          background: e.color
        }
      })
    }), (0, i.jsxs)("div", {
      style: {
        fontFamily: p,
        fontSize: 11,
        color: d.faint,
        marginTop: 4
      },
      children: [e.units.toLocaleString(), " total \xB7 ", e.staff, " on staff"]
    })]
  })
}

function mb({
  cup: e,
  onOpen: t
}) {
  if (!e.on) return null;
  let a = Vp(e.sides),
    r = e.sides.reduce((o, n) => o + n.units, 0);
  return (0, i.jsxs)("div", {
    onClick: t,
    style: {
      marginTop: 12,
      background: d.card,
      border: "1px solid " + d.line,
      borderRadius: 18,
      overflow: "hidden",
      cursor: "pointer"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "12px 15px",
        color: "#F5F1E8",
        display: "flex",
        alignItems: "center",
        gap: 10
      },
      children: [(0, i.jsx)("div", {
        style: {
          width: 38,
          height: 38,
          borderRadius: 11,
          background: "rgba(224,154,56,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        },
        children: (0, i.jsx)(fa, {
          size: 19,
          color: d.honey
        })
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1
        },
        children: [(0, i.jsxs)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: d.honey
          },
          children: ["Clinic Cup \xB7 ", e.season]
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 16
          },
          children: e.title
        })]
      }), (0, i.jsx)(at, {
        size: 18,
        color: "rgba(245,241,232,0.7)",
        style: {
          transform: "rotate(-90deg)"
        }
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "11px 15px",
        display: "flex",
        alignItems: "center",
        gap: 10
      },
      children: [(0, i.jsxs)("div", {
        style: {
          flex: 1,
          fontFamily: p,
          fontSize: 12.5,
          color: d.sub
        },
        children: [a && !a.tie ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("strong", {
            style: {
              color: a.side.color
            },
            children: a.side.name
          }), " leads by ", a.by.toFixed(1), " per person"]
        }) : "Dead even right now", " \xB7 ", r.toLocaleString(), " ", e.unit, " in"]
      }), (0, i.jsx)("div", {
        style: {
          display: "flex",
          gap: 3,
          flexShrink: 0
        },
        children: e.sides.map(o => (0, i.jsx)("div", {
          style: {
            width: 9,
            height: 22,
            borderRadius: 3,
            background: o.color
          }
        }, o.id))
      })]
    })]
  })
}

function gb({
  cup: e,
  back: t,
  logUnits: a
}) {
  let [r, o] = (0, I.useState)(""), [n, s] = (0, I.useState)(e.sides[0] ? e.sides[0].id : ""), [l, u] = (0, I.useState)(!1), c = Vp(e.sides), f = e.sides.reduce((g, b) => g + b.units, 0), h = Math.max.apply(null, e.sides.map(xd).concat([.01])), m = () => {
    let g = parseInt(r, 10);
    !g || g < 1 || !n || (a(n, g), o(""), u(!0), setTimeout(() => u(!1), 2600))
  };
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.paper
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "14px 16px 18px",
        color: "#F5F1E8"
      },
      children: [(0, i.jsxs)("button", {
        onClick: t,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.75)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 8,
          padding: 0
        },
        children: [(0, i.jsx)(at, {
          size: 15,
          style: {
            transform: "rotate(90deg)"
          }
        }), "Back"]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        },
        children: [(0, i.jsx)(fa, {
          size: 20,
          color: d.honey
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 22
          },
          children: "The Clinic Cup"
        })]
      }), (0, i.jsxs)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          opacity: .82,
          marginTop: 4
        },
        children: [e.season, " \xB7 ", e.title, " \xB7 ends ", e.ends]
      })]
    }), (0, i.jsxs)("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "14px 16px 20px"
      },
      children: [(0, i.jsxs)("div", {
        style: {
          background: d.pine,
          borderRadius: 16,
          padding: "14px 15px",
          color: "#F5F1E8",
          marginBottom: 14
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: d.honey,
            marginBottom: 3
          },
          children: "Together so far"
        }), (0, i.jsxs)("div", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 28,
            lineHeight: 1.1
          },
          children: [f.toLocaleString(), " ", e.unit]
        }), (0, i.jsxs)("div", {
          style: {
            fontFamily: p,
            fontSize: 12.5,
            opacity: .8,
            marginTop: 4
          },
          children: ["headed to ", e.cause, ". However this ends, that number is the point."]
        })]
      }), (0, i.jsxs)("div", {
        style: {
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 16,
          padding: 14,
          marginBottom: 14
        },
        children: [(0, i.jsxs)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: d.faint,
            marginBottom: 11
          },
          children: ["Standings \xB7 ", e.unit, " per person"]
        }), e.sides.map(g => (0, i.jsx)(hb, {
          sd: g,
          pp: xd(g),
          maxPP: h
        }, g.id)), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 6,
            marginTop: 2,
            fontFamily: p,
            fontSize: 11,
            color: d.faint,
            lineHeight: 1.4
          },
          children: [(0, i.jsx)(Qt, {
            size: 12,
            style: {
              flexShrink: 0,
              marginTop: 1
            }
          }), "Scored per person, not by raw count - a bigger clinic can't win on headcount alone."]
        })]
      }), (0, i.jsxs)("div", {
        style: {
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 16,
          padding: 14,
          marginBottom: 14
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 15,
            color: d.ink,
            marginBottom: 3
          },
          children: "Log what you brought"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12,
            color: d.sub,
            marginBottom: 11
          },
          children: "Drop it at your clinic's collection bin, then add it here."
        }), (0, i.jsx)("div", {
          style: {
            display: "flex",
            gap: 6,
            marginBottom: 9
          },
          children: e.sides.map(g => (0, i.jsx)("button", {
            onClick: () => s(g.id),
            style: {
              flex: 1,
              border: "1px solid " + (n === g.id ? g.color : d.line),
              background: n === g.id ? g.color + "14" : d.paper,
              color: n === g.id ? g.color : d.sub,
              borderRadius: 10,
              padding: "9px 0",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              cursor: "pointer"
            },
            children: g.name
          }, g.id))
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8
          },
          children: [(0, i.jsx)("input", {
            value: r,
            onChange: g => o(g.target.value.replace(/[^0-9]/g, "")),
            inputMode: "numeric",
            placeholder: "How many " + e.unit + "?",
            style: {
              flex: 1,
              border: "1px solid " + d.line,
              borderRadius: 10,
              padding: "10px 12px",
              fontFamily: p,
              fontSize: 13.5,
              color: d.ink,
              background: d.paper,
              outline: "none"
            }
          }), (0, i.jsx)("button", {
            onClick: m,
            style: {
              background: d.honey,
              border: "none",
              borderRadius: 10,
              padding: "0 20px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 13,
              color: d.pine,
              cursor: "pointer",
              opacity: r ? 1 : .5
            },
            children: "Add"
          })]
        }), l && (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 9,
            fontFamily: p,
            fontSize: 12.5,
            fontWeight: 700,
            color: "#3E7C57"
          },
          children: [(0, i.jsx)(pe, {
            size: 14,
            strokeWidth: 3
          }), "Counted. Thank you."]
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 6,
            marginTop: 10,
            fontFamily: p,
            fontSize: 10.5,
            color: d.faint,
            lineHeight: 1.4
          },
          children: [(0, i.jsx)(Qt, {
            size: 11,
            style: {
              flexShrink: 0,
              marginTop: 1
            }
          }), "Honor system, and CommonGround never handles money - goods go straight to the drive."]
        })]
      }), e.history.length > 0 && (0, i.jsxs)("div", {
        style: {
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 16,
          padding: 14
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: d.faint,
            marginBottom: 9
          },
          children: "The cup so far"
        }), e.history.map((g, b) => (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 9,
            padding: "7px 0",
            borderBottom: b === e.history.length - 1 ? "none" : "1px solid " + d.line
          },
          children: [(0, i.jsx)(fa, {
            size: 13,
            color: d.honey,
            style: {
              flexShrink: 0
            }
          }), (0, i.jsxs)("div", {
            style: {
              flex: 1,
              minWidth: 0,
              fontFamily: p,
              fontSize: 12.5,
              color: d.sub,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: [g.season, " \xB7 ", g.title]
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              color: d.ink,
              flexShrink: 0
            },
            children: g.winner
          })]
        }, b))]
      })]
    })]
  })
}

function yb({
  items: e,
  catalog: t,
  onOpen: a
}) {
  return (0, i.jsxs)("div", {
    onClick: a,
    style: {
      marginTop: 12,
      background: d.card,
      border: "1px solid " + d.line,
      borderRadius: 18,
      overflow: "hidden",
      cursor: "pointer"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "12px 15px",
        color: "#F5F1E8",
        display: "flex",
        alignItems: "center",
        gap: 10
      },
      children: [(0, i.jsx)("div", {
        style: {
          width: 38,
          height: 38,
          borderRadius: 11,
          background: "rgba(224,154,56,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        },
        children: (0, i.jsx)(ro, {
          size: 20,
          color: d.honey
        })
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: d.honey
          },
          children: "SOG Merch"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 16
          },
          children: t.title
        })]
      }), (0, i.jsx)("span", {
        style: {
          fontFamily: p,
          fontWeight: 800,
          fontSize: 10,
          letterSpacing: "0.08em",
          background: d.honey,
          color: d.pine,
          borderRadius: 999,
          padding: "4px 8px",
          flexShrink: 0
        },
        children: "OPEN"
      }), (0, i.jsx)(at, {
        size: 18,
        color: "rgba(245,241,232,0.7)",
        style: {
          transform: "rotate(-90deg)"
        }
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "10px 15px",
        fontFamily: p,
        fontSize: 12.5,
        color: d.sub
      },
      children: ["Now taking orders", t.deadline ? " \xB7 " + t.deadline : "", e.length > 0 ? " \xB7 " + e.length + " featured " + (e.length === 1 ? "item" : "items") : "", " \u2014 tap to shop"]
    })]
  })
}

function vb({
  items: e,
  catalog: t,
  back: a
}) {
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.paper
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "14px 16px 18px",
        color: "#F5F1E8"
      },
      children: [(0, i.jsxs)("button", {
        onClick: a,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.75)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 12
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " Back"]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        },
        children: [(0, i.jsx)(ro, {
          size: 20,
          color: d.honey
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 22
          },
          children: "SOG Merch"
        })]
      }), (0, i.jsxs)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          opacity: .82,
          marginTop: 4
        },
        children: [t.title, " \xB7 official SOG gear."]
      })]
    }), (0, i.jsxs)("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "14px 16px 20px"
      },
      children: [t.open ? (0, i.jsxs)("a", {
        href: t.url || "#",
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          background: d.honey,
          borderRadius: 12,
          padding: "13px 0",
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14.5,
          color: d.pine,
          textDecoration: "none",
          marginBottom: 6
        },
        children: ["Shop the full catalog", t.deadline ? " \xB7 " + t.deadline : "", " ", (0, i.jsx)(br, {
          size: 15
        })]
      }) : (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          background: d.line,
          borderRadius: 12,
          padding: "13px 0",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 13.5,
          color: d.faint,
          marginBottom: 6
        },
        children: [(0, i.jsx)(kr, {
          size: 14
        }), "Ordering closed", t.deadline ? " \xB7 " + t.deadline : ""]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginBottom: 14,
          fontFamily: p,
          fontSize: 10.5,
          color: d.faint,
          justifyContent: "center"
        },
        children: [(0, i.jsx)(Qt, {
          size: 11
        }), " Orders are placed on the catalog site - CommonGround doesn't process payments."]
      }), e.length > 0 && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: d.faint,
          marginBottom: 10
        },
        children: "A few highlights"
      }), e.map(r => (0, i.jsxs)("div", {
        style: {
          display: "flex",
          gap: 12,
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 16,
          padding: 12,
          marginBottom: 10
        },
        children: [(0, i.jsx)("div", {
          style: {
            width: 58,
            height: 58,
            borderRadius: 12,
            background: r.color + "1A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          },
          children: (0, i.jsx)(ro, {
            size: 26,
            color: r.color,
            strokeWidth: 1.8
          })
        }), (0, i.jsxs)("div", {
          style: {
            flex: 1,
            minWidth: 0
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 14.5,
              color: d.ink
            },
            children: r.name
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 800,
              fontSize: 14,
              color: d.honey,
              margin: "1px 0 3px"
            },
            children: r.price
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 12,
              color: d.sub,
              lineHeight: 1.4
            },
            children: r.desc
          })]
        })]
      }, r.id))]
    })]
  })
}

function xb({
  ch: e,
  onBack: t,
  canManage: a,
  onEdit: r,
  onRemove: o
}) {
  let [n, s] = (0, I.useState)(null), l = e.a + e.b || 1, u = Math.round(e.a / l * 100), c = h => {
    n || (s(h), t(e.id, h))
  }, f = ({
    s: h,
    count: m
  }) => (0, i.jsxs)("div", {
    style: {
      flex: 1,
      textAlign: "center"
    },
    children: [(0, i.jsx)("div", {
      style: {
        fontFamily: D,
        fontWeight: 800,
        fontSize: 14,
        color: h.color,
        lineHeight: 1.15
      },
      children: h.name
    }), (0, i.jsxs)("div", {
      style: {
        fontFamily: p,
        fontSize: 11,
        color: d.faint,
        marginTop: 2
      },
      children: [m, " in"]
    })]
  });
  return (0, i.jsxs)("div", {
    style: {
      background: d.card,
      border: "1px solid " + d.line,
      borderRadius: 18,
      marginTop: 12,
      overflow: "hidden"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "12px 15px",
        color: "#F5F1E8"
      },
      children: [(0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6
          },
          children: [(0, i.jsx)(fa, {
            size: 14,
            color: d.honey
          }), (0, i.jsx)("span", {
            style: {
              fontFamily: p,
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: d.honey
            },
            children: "Rivalry Challenge"
          })]
        }), a && (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 12
          },
          children: [(0, i.jsx)("button", {
            onClick: () => r(e),
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 700,
              color: "rgba(245,241,232,0.85)",
              textDecoration: "underline"
            },
            children: "Edit"
          }), (0, i.jsx)("button", {
            onClick: () => o(e.id),
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 700,
              color: "#E9A08A",
              textDecoration: "underline"
            },
            children: "Remove"
          })]
        })]
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 800,
          fontSize: 18,
          marginTop: 4
        },
        children: e.event
      }), e.wager ? (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12,
          opacity: .82,
          marginTop: 2,
          lineHeight: 1.4
        },
        children: e.wager
      }) : null]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "14px 15px"
      },
      children: [(0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 8
        },
        children: [(0, i.jsx)(f, {
          s: e.sideA,
          count: e.a
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 12,
            color: d.faint
          },
          children: "VS"
        }), (0, i.jsx)(f, {
          s: e.sideB,
          count: e.b
        })]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          height: 9,
          borderRadius: 999,
          overflow: "hidden",
          marginBottom: 12
        },
        children: [(0, i.jsx)("div", {
          style: {
            width: u + "%",
            background: e.sideA.color
          }
        }), (0, i.jsx)("div", {
          style: {
            flex: 1,
            background: e.sideB.color
          }
        })]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          gap: 8
        },
        children: [(0, i.jsx)("button", {
          onClick: () => c("A"),
          disabled: !!n,
          style: {
            flex: 1,
            border: "none",
            borderRadius: 10,
            padding: "9px 0",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 12.5,
            cursor: n ? "default" : "pointer",
            background: n && n !== "A" ? d.line : e.sideA.color,
            color: n && n !== "A" ? d.faint : "#fff"
          },
          children: n === "A" ? "You're in \u2713" : e.sideA.name
        }), (0, i.jsx)("button", {
          onClick: () => c("B"),
          disabled: !!n,
          style: {
            flex: 1,
            border: "none",
            borderRadius: 10,
            padding: "9px 0",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 12.5,
            cursor: n ? "default" : "pointer",
            background: n && n !== "B" ? d.line : e.sideB.color,
            color: n && n !== "B" ? d.faint : "#fff"
          },
          children: n === "B" ? "You're in \u2713" : e.sideB.name
        })]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: 6,
          marginTop: 12,
          background: d.honeySoft,
          borderRadius: 10,
          padding: "8px 10px"
        },
        children: [(0, i.jsx)(Qt, {
          size: 12,
          color: "#8A5A12",
          style: {
            marginTop: 1,
            flexShrink: 0
          }
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "#8A5A12",
            lineHeight: 1.4
          },
          children: "The Break Room doesn't collect money or check up on anyone - it just tracks who's in and celebrates the winner."
        })]
      })]
    })]
  })
}

// Set this to a data: URI of SOG's logo and the new hire banner uses it
// instead of the SOG wordmark fallback. One line, no other changes needed.
var SOG_MARK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAABCCAYAAAC8aU3kAAAFIElEQVR42q2YXWhcRRTHf7l3uWFDioFIJCXFgJKiEEypKC0WIkqkohioVBCFgtIH0QehFCoUFUVRCORBEIVFwbdCsKJULIiVBANCUbE0VAgEWjANDSTkY8nioC//Uw7jbHJ304EhuTsz/znf58zp2FhdxI0cKIC6vseAGjBAelwG3gBm9V0ADVvsEHjuZh14DJimtTEMXAGqRlwWUV0HvmoDGOBP4ANhFB7cRPED8FLi4BTwOLAPuB84AJxN7Dsj4hpA3rGxumhyOqOb/agBr+5A8SjwU/TbKWCiY2N1MQd6gFvRhudFsekiROteRwWwqW8bD1d0qJa4eQroBtYTwLjfquJ8jy6wccEo/yc6VBFwvQlwioMGMAL8ZgsZ8EhCHLm31x1G0N4q8DvwLPAz8GQFOBxtvuAOlaHaX5ID32lSAYbchrqoKNzmsAPVeUIHAHklOjzfhvPEl9e9zFfcQtHkQFsjk9vaGIrkuGvwy9FvR0rKuxT4X8Cv7rdJJ55it+C4IBSAh4Av9d3YjZgyUXcR+FhAy8Bxuf99TjR5O+BBF7wFfAJ0ATfkuVPAicju/Uw50+01n4lMLK8rdTX0XZXSa8CPiXhCpPzb/8fgduCg4vugzyxS/HngUhNxhe3AzX3XgaPAO87JgkQGcFWXTOvyvCx4AHqB0+KgkQhixskC8K0MIjjdhFT2bwCHJPM+cZAn7L3hMk+nQm1Nl1nyCB48AM84ZW4puywrRPwtwC6Z6D6lxzXtWwE+AuYMzzJRUKI97VJVAL5XfF9KmPEAMK5wYc62oiR/w4ulH5hw7K8oDFyJzCtPRM1RlSN2wbzOBnP/F8RaXXNCwEVkpiEywUJmWXNE7ZUhhEzyO6iFPfLKuUjzqZQXHDezrkpbE141k3VUBbagqqudhHFJBJrS92Yqzyx3/hI5RZkUZ0QsSd4Nzf5M9YndOL9Nbixz0XWZ8CbQVVEFsOkmbYRYU/aKON+00mItwWIraS4OHWsmmgy4qZu2IjdvJ392CaMXyDO5tSnhnjjgt0C1VQ93C5yKzK9P4H3u2ZGXBDYOBwVeEfXXM+CaFLGlA/tLUh8nizFR3WeWlymszonydXnsQItV7lEVtN0Cn/Gx5ZrAejWfBh5IxJEiijcBOAa8IuBB+cq0vYnM5AaAF53FdCqdzUovsbyHVYIclkh75KUnZSTEyWJE4bPLcbKlzcuSZY8Ut98pv0/e+ZoquDzORMbmkNgcdjG66my406VEe6xNK9HcSCXoeHRL7uO6rNPJv3Ci6xHgqCyu8F6eAs+jV8IR4GXgCcX7La13Aneplnk0elKGlMxpUlFZOjsp64irgbPA+80qrjIRz8YhFUtj0b5ZiXHJuhdlwJtxcxz4XKLx40ErL7IWgpNXaA6ck298E+2/aoErK+necfYPrtMxDnyY6HKEsmLJt3l/mqjOA8/55k4rMt/p0qrLagCfZrsAI6p6112vC+BY1mIiDk2+7a9vX/VV7pBI/vc099aSc2dezv3+o5Jw+9CGmIywp2LKTwD/qpQLLbyaY+ACuNetz2TAFy5mTLquT9lh3b24FTjRsbG6+JmiHY61iyV7XD4T3YzWKqkGmnUuZhwHIfJK30GtRjUmwJvApD3PD0SL08B77qXRcI0ym3U90DYTHE0Che+IjgNfJzbW1MVY0AU9eua83URUnb4L7dvaqdZpK8Pn2pA5du3x1AX80SLoBNARl95ZZLfGwYheZed2AH1XoKekWF9y8B8d19HmgsayugAAAABJRU5ErkJggg==";

function Lv({
  p: e,
  spotlight: t,
  onDelete: a,
  photoFor: r = () => null,
  myName: cmName = mo,
  addComment: onAddComment = null,
  deleteComment: onDeleteComment = null
}) {
  let cmList = e.comments || [],
    [cmOpen, setCmOpen] = (0, I.useState)(!1),
    [cmDraft, setCmDraft] = (0, I.useState)(""),
    cmSend = () => {
      let txt = cmDraft.trim();
      txt && onAddComment && (onAddComment(e.id, txt), setCmDraft(""))
    };
  return (0, i.jsxs)("div", {
    style: {
      background: d.card,
      borderRadius: 18,
      padding: 16,
      marginTop: 12,
      border: "1px solid " + (t ? d.honey : d.line)
    },
    children: [t && e.kind !== "new_hire" && (0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 5,
        marginBottom: 8,
        fontFamily: p,
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "#B4772A"
      },
      children: [(0, i.jsx)(wr, {
        size: 11
      }), "Latest"]
    }), e.kind === "new_hire" ? (0, i.jsxs)("div", {
      style: {
        margin: "-16px -16px 13px",
        padding: "11px 14px",
        background: d.pine,
        borderRadius: "17px 17px 0 0",
        display: "flex",
        alignItems: "center",
        gap: 9
      },
      children: [SOG_MARK ? (0, i.jsx)("img", {
        src: SOG_MARK,
        alt: "SOG",
        style: {
          height: 21,
          width: "auto",
          flexShrink: 0,
          display: "block"
        }
      }) : null, (0, i.jsx)("span", {
        style: {
          fontFamily: D,
          fontWeight: 800,
          fontSize: 11.5,
          letterSpacing: "0.11em",
          textTransform: "uppercase",
          color: d.honey
        },
        children: "New to SOG"
      })]
    }) : null, e.kind !== "new_hire" && (0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 9
      },
      children: [(0, i.jsx)(Ne, {
        name: e.author,
        size: 34,
        bg: d.pine2,
        src: r(e.author)
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1,
          lineHeight: 1.15
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontWeight: 700,
            fontSize: 13.5,
            color: d.ink
          },
          children: e.author
        }), (0, i.jsxs)("div", {
          style: {
            fontFamily: p,
            fontSize: 11.5,
            color: d.faint
          },
          children: [e.dept, " \xB7 ", e.time]
        })]
      }), e.kind === "new_hire" ? (0, i.jsx)(Qs, {
        bg: d.honey + "2E",
        color: "#8A5A12",
        children: "WELCOME"
      }) : e.audience === "Everyone" ? (0, i.jsx)(Qs, {
        bg: d.honey + "1F",
        color: "#B4772A",
        children: "Everyone"
      }) : (0, i.jsx)(Qs, {
        bg: d.pine + "12",
        color: d.pine,
        children: e.audience
      })]
    }), e.kind === "new_hire" && e.hire ? (0, i.jsxs)("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        marginBottom: 10
      },
      children: [(0, i.jsx)("div", {
        style: {
          width: 88,
          height: 88,
          borderRadius: 18,
          flexShrink: 0,
          overflow: "hidden",
          background: d.pine,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: e.hirePhoto ? (0, i.jsx)("img", {
          src: e.hirePhoto,
          alt: e.hire.name,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        }) : (0, i.jsx)("span", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 22,
            color: "#F5F1E8"
          },
          children: (e.hire.name || "?").split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase()
        })
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 20,
            color: d.ink,
            lineHeight: 1.15
          },
          children: e.hire.name
        }), e.hire.title ? (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 13,
            color: d.sub,
            marginTop: 2
          },
          children: e.hire.title
        }) : null, (e.hire.dept || e.hire.site) ? (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12,
            color: d.faint,
            marginTop: 2
          },
          children: [e.hire.dept, e.hire.site === "oxford" ? "Oxford" : e.hire.site === "tupelo" ? "Tupelo" : e.hire.site === "both" ? "Oxford & Tupelo" : ""].filter(Boolean).join(" \xB7 ")
        }) : null, e.hire.worksWith ? (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12.5,
            color: d.pine,
            fontWeight: 700,
            marginTop: 5
          },
          children: e.hire.worksWith
        }) : null]
      })]
    }) : null, (0, i.jsx)("div", {
      style: {
        fontFamily: p,
        fontSize: 13.5,
        color: d.ink,
        lineHeight: 1.45
      },
      children: e.text
    }), e.canDelete && a && (0, i.jsx)("button", {
      onClick: () => {
        window.confirm("Delete this post? It's gone for everyone.") && a(e.id)
      },
      style: {
        marginTop: 10,
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        fontFamily: p,
        fontSize: 11.5,
        fontWeight: 700,
        color: d.faint,
        textDecoration: "underline"
      },
      children: e.mine ? "Delete" : "Remove (admin)"
    }), onAddComment && (0, i.jsxs)("div", {
      style: {
        marginTop: 12,
        paddingTop: 11,
        borderTop: "1px solid " + d.line
      },
      children: [!cmOpen && (0, i.jsx)("button", {
        onClick: () => setCmOpen(!0),
        style: {
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          fontFamily: p,
          fontSize: 12,
          fontWeight: 700,
          color: cmList.length ? d.pine : d.faint
        },
        children: cmList.length ? cmList.length + (cmList.length === 1 ? " comment" : " comments") : "Add a comment"
      }), cmOpen && (0, i.jsxs)(i.Fragment, {
        children: [cmList.map(cm => (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 9,
            marginBottom: 10
          },
          children: [(0, i.jsx)(Ne, {
            name: cm.author,
            size: 26,
            bg: d.pine2,
            src: r(cm.author)
          }), (0, i.jsxs)("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [(0, i.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "baseline",
                gap: 6
              },
              children: [(0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontWeight: 700,
                  fontSize: 12.5,
                  color: d.ink
                },
                children: cm.author
              }), (0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontSize: 11,
                  color: d.faint
                },
                children: cm.time
              }), cm.canDelete && onDeleteComment && (0, i.jsx)("button", {
                onClick: () => onDeleteComment(cm.id),
                style: {
                  marginLeft: "auto",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  fontFamily: p,
                  fontSize: 10.5,
                  fontWeight: 700,
                  color: d.faint,
                  textDecoration: "underline"
                },
                children: "Delete"
              })]
            }), (0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontSize: 13,
                color: d.ink,
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
              },
              children: cm.text
            })]
          })]
        }, cm.id)), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            alignItems: "center"
          },
          children: [(0, i.jsx)(Ne, {
            name: cmName,
            size: 26,
            bg: d.honey,
            src: r(cmName)
          }), (0, i.jsx)("input", {
            value: cmDraft,
            onChange: ev => setCmDraft(ev.target.value),
            onKeyDown: ev => {
              ev.key === "Enter" && cmSend()
            },
            placeholder: "Write a comment\u2026",
            style: {
              flex: 1,
              border: "1px solid " + d.line,
              borderRadius: 999,
              padding: "9px 13px",
              fontFamily: p,
              fontSize: 16,
              color: d.ink,
              background: d.paper,
              outline: "none",
              minWidth: 0
            }
          }), (0, i.jsx)("button", {
            onClick: cmSend,
            style: {
              background: d.pine,
              border: "none",
              borderRadius: 999,
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0
            },
            children: (0, i.jsx)(fn, {
              size: 15,
              color: "#F5F1E8"
            })
          })]
        })]
      })]
    })]
  })
}

function PollCard({
  questions: e = [],
  myVotes: t = {},
  onVote: a = () => {}
}) {
  let [r] = (0, I.useState)(() => {
    let n = e.find(s => !t[s.id]);
    return n ? n.id : null
  });
  if (!r) return null;
  let o = e.find(n => n.id === r);
  if (!o) return null;
  let n = t[o.id],
    s = (o.av || 0) + (o.bv || 0),
    l = u => {
      let c = u === "a",
        f = c ? o.av || 0 : o.bv || 0,
        h = c ? o.a : o.b,
        m = n === u,
        g = s ? Math.round(f / s * 100) : 0;
      return (0, i.jsxs)("button", {
        onClick: () => a(o.id, u),
        style: {
          flex: 1,
          position: "relative",
          overflow: "hidden",
          textAlign: "left",
          border: "1px solid " + (m ? d.pine : d.line),
          background: "#fff",
          borderRadius: 12,
          padding: "11px 12px",
          cursor: "pointer"
        },
        children: [n ? (0, i.jsx)("div", {
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: g + "%",
            background: m ? "rgba(20,48,40,0.12)" : "rgba(20,48,40,0.05)"
          }
        }) : null, (0, i.jsxs)("div", {
          style: {
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 6
          },
          children: [(0, i.jsx)("span", {
            style: {
              fontFamily: p,
              fontWeight: m ? 800 : 600,
              fontSize: 13.5,
              color: d.ink
            },
            children: h
          }), n ? (0, i.jsxs)("span", {
            style: {
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12,
              color: d.sub
            },
            children: [f, n === u ? " \u2713" : ""]
          }) : null]
        })]
      })
    };
  return (0, i.jsxs)("div", {
    style: {
      marginTop: 12,
      background: d.card,
      border: "1px solid " + d.line,
      borderRadius: 16,
      padding: 14
    },
    children: [(0, i.jsx)("div", {
      style: {
        fontFamily: D,
        fontWeight: 800,
        fontSize: 10.5,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        color: d.honey,
        marginBottom: 7
      },
      children: "The important questions"
    }), (0, i.jsx)("div", {
      style: {
        fontFamily: D,
        fontWeight: 800,
        fontSize: 16,
        color: d.ink,
        marginBottom: 11
      },
      children: o.a + " or " + o.b + "?"
    }), (0, i.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8
      },
      children: [l("a"), l("b")]
    }), (0, i.jsx)("div", {
      style: {
        fontFamily: p,
        fontSize: 11.5,
        color: d.faint,
        marginTop: 9
      },
      children: n ? "You're one of " + (n === "a" ? o.av : o.bv) + " who picked " + (n === "a" ? o.a : o.b) + " \u2014 " + s + " have weighed in." : "Tap your pick \u2014 see where the whole clinic lands."
    })]
  })
}

function wb({
  myName: e = mo,
  myDepts: t = [],
  posts: a,
  addPost: r,
  onDeletePost: o,
  addComment: onAddComment = null,
  deleteComment: onDeleteComment = null,
  onReceipts: n,
  acked: s,
  onOpenPolicy: l,
  challenges: u,
  onBack: c,
  merch: f,
  catalog: h,
  onOpenMerch: m,
  onOpenBirthdays: g,
  birthdays: b,
  recognition: k,
  onOpenRec: A,
  anniversaries: v,
  onOpenAnniv: x,
  photoFor: w,
  cup: _ = $p,
  lunches: lunchRows = [],
  onOpenCup: C = () => {},
  questions: pollQs = [],
  myVotes: pollVotes = {},
  voteQ: onPollVote = () => {}
}) {
  let [E, P] = (0, I.useState)(""), [W, K] = (0, I.useState)({
    name: "Everyone",
    id: null
  }), [B, X] = (0, I.useState)(!1), [ne, Ye] = (0, I.useState)(null), Ut = () => {
    E.trim() && (r({
      audience: W.name,
      audienceDeptId: W.id,
      text: E.trim()
    }), P(""), K({
      name: "Everyone",
      id: null
    }))
  }, ja = [{
    name: "Everyone",
    id: null
  }].concat(t.map($ => ({
    name: $.name,
    id: $.id
  }))), It = ne === null ? a : ne === "everyone" ? a.filter($ => !$.audienceDeptId) : a.filter($ => $.audienceDeptId === ne);
  return (0, i.jsxs)("div", {
    style: {
      padding: "4px 16px 20px"
    },
    children: [(() => {
      let lunchToday = (() => {
          let dd = new Date(),
            key = dd.getFullYear() + "-" + String(dd.getMonth() + 1).padStart(2, "0") + "-" + String(dd.getDate()).padStart(2, "0");
          return (lunchRows || []).filter(L => L.on_date === key)
        })(),
        siteLabel = (lunchSite => lunchSite === "oxford" ? "OXFORD" : lunchSite === "tupelo" ? "TUPELO" : "BOTH CLINICS");
      return lunchToday.length ? (0, i.jsx)("div", {
        style: {
          margin: "0 14px 12px",
          background: d.honeySoft,
          border: "1px solid " + d.honey,
          borderRadius: 16,
          padding: "13px 14px"
        },
        children: (0, i.jsxs)("div", {
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: "0.07em",
              color: "#8A5A12",
              marginBottom: 7
            },
            children: "LUNCH TODAY"
          }), lunchToday.map((L, li) => (0, i.jsxs)("div", {
            style: {
              marginTop: li ? 10 : 0
            },
            children: [(0, i.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "baseline",
                gap: 8,
                flexWrap: "wrap"
              },
              children: [(0, i.jsx)("span", {
                style: {
                  fontFamily: D,
                  fontWeight: 800,
                  fontSize: 16.5,
                  color: d.ink
                },
                children: L.vendor
              }), (0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  color: "#8A5A12",
                  border: "1px solid rgba(138,90,18,0.35)",
                  borderRadius: 999,
                  padding: "2px 7px"
                },
                children: siteLabel(L.site)
              })]
            }), L.note ? (0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontSize: 12.5,
                color: "#8A5A12",
                marginTop: 3,
                lineHeight: 1.45
              },
              children: L.note
            }) : null]
          }, L.id || li))]
        })
      }) : null
    })(), Wp() && !Sv() && (0, i.jsxs)("div", {
      style: {
        background: d.honeySoft,
        borderRadius: 14,
        padding: "12px 13px",
        marginBottom: 12,
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      },
      children: [(0, i.jsx)(wr, {
        size: 16,
        color: "#8A5A12",
        style: {
          marginTop: 2,
          flexShrink: 0
        }
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: "#7A5418",
            marginBottom: 3
          },
          children: "Add this to your home screen"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12.5,
            color: "#8A5A12",
            lineHeight: 1.45
          },
          children: "iPhones only send notifications to apps saved to the home screen. Tap the Share button below, choose Add to Home Screen, then open The Break Room from there."
        })]
      })]
    }), (0, i.jsxs)("div", {
      style: {
        background: d.card,
        border: "1px solid " + d.line,
        borderRadius: 18,
        padding: 14
      },
      children: [(0, i.jsxs)("div", {
        style: {
          display: "flex",
          gap: 10
        },
        children: [(0, i.jsx)(Ne, {
          name: e,
          size: 36,
          bg: d.honey,
          src: w ? w(e) : null
        }), (0, i.jsx)("textarea", {
          value: E,
          onChange: $ => P($.target.value),
          rows: 2,
          placeholder: "Share something with the team...",
          style: {
            flex: 1,
            border: "none",
            outline: "none",
            resize: "none",
            fontFamily: p,
            fontSize: 13.5,
            color: d.ink,
            background: "none",
            lineHeight: 1.4,
            paddingTop: 6
          }
        })]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 8
        },
        children: [(0, i.jsxs)("button", {
          onClick: () => X(!B),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 5,
            border: "1px solid " + d.line,
            cursor: "pointer",
            fontFamily: p,
            fontSize: 11.5,
            fontWeight: 700,
            padding: "6px 11px",
            borderRadius: 999,
            background: d.paper,
            color: d.pine
          },
          children: [W.id === null ? (0, i.jsx)(ts, {
            size: 13,
            strokeWidth: 2.5
          }) : (0, i.jsx)(Xt, {
            size: 13,
            strokeWidth: 2.5
          }), W.name, (0, i.jsx)(at, {
            size: 13,
            color: d.faint,
            style: {
              transform: B ? "rotate(180deg)" : "none"
            }
          })]
        }), (0, i.jsx)("button", {
          onClick: Ut,
          style: {
            background: d.pine,
            border: "none",
            borderRadius: 999,
            padding: "7px 15px",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 12.5,
            color: "#F5F1E8",
            cursor: "pointer"
          },
          children: "Post"
        })]
      }), B && (0, i.jsxs)("div", {
        style: {
          marginTop: 10,
          borderTop: "1px solid " + d.line,
          paddingTop: 10
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: d.faint,
            marginBottom: 8
          },
          children: "Post to"
        }), (0, i.jsx)("div", {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 6
          },
          children: ja.map($ => (0, i.jsx)("button", {
            onClick: () => {
              K($), X(!1)
            },
            style: {
              border: "none",
              cursor: "pointer",
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 600,
              padding: "5px 10px",
              borderRadius: 999,
              background: W.id === $.id ? d.pine : d.paper,
              color: W.id === $.id ? "#F5F1E8" : d.sub
            },
            children: $.name
          }, $.id || "all"))
        })]
      })]
    }), (0, i.jsx)(sb, {
      items: k,
      onOpen: A
    }), t.length > 0 && (0, i.jsx)("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
        marginTop: 12
      },
      children: [{
        k: null,
        label: "All posts"
      }, {
        k: "everyone",
        label: "Everyone"
      }].concat(t.map($ => ({
        k: $.id,
        label: $.name
      }))).map($ => (0, i.jsx)("button", {
        onClick: () => Ye($.k),
        style: {
          border: "1px solid " + (ne === $.k ? d.pine : d.line),
          cursor: "pointer",
          fontFamily: p,
          fontSize: 11.5,
          fontWeight: 600,
          padding: "5px 11px",
          borderRadius: 999,
          background: ne === $.k ? d.pine : d.card,
          color: ne === $.k ? "#F5F1E8" : d.sub
        },
        children: $.label
      }, $.k || "all"))
    }), It[0] ? (0, i.jsx)(Lv, {
      p: It[0],
      spotlight: !0,
      onDelete: o,
      photoFor: w,
      myName: e,
      addComment: onAddComment,
      deleteComment: onDeleteComment
    }) : (0, i.jsx)("div", {
      style: {
        marginTop: 12,
        background: d.card,
        border: "1px dashed " + d.line,
        borderRadius: 16,
        padding: 18,
        textAlign: "center",
        fontFamily: p,
        fontSize: 12.5,
        color: d.sub
      },
      children: "Nothing here yet."
    }), (0, i.jsx)(PollCard, {
      questions: pollQs,
      myVotes: pollVotes,
      onVote: onPollVote
    }), (0, i.jsx)(mb, {
      cup: _,
      onOpen: C
    }), h && h.open && (0, i.jsx)(yb, {
      items: f,
      catalog: h,
      onOpen: m
    }), (0, i.jsx)(fb, {
      birthdays: b,
      onOpen: g,
      photoFor: w
    }), (0, i.jsx)(db, {
      anniversaries: v,
      onOpen: x,
      photoFor: w
    }), k && k.length > 0 && (0, i.jsx)(lb, {
      items: k,
      onOpen: A
    }), u.map($ => (0, i.jsx)(xb, {
      ch: $,
      onBack: c
    }, $.id)), It.slice(1).map(($, me) => (0, i.jsx)(Lv, {
      p: $,
      onDelete: o,
      photoFor: w,
      myName: e,
      addComment: onAddComment,
      deleteComment: onDeleteComment
    }, $.id || "p" + me)), wv.map(($, me) => {
      let ie = s.has(me),
        We = !!$.requireAck,
        Rr = $.readBy.length + $.notYet.length;
      return We && ie ? null : (0, i.jsxs)("div", {
        style: {
          background: d.card,
          borderRadius: 18,
          padding: 16,
          marginTop: 12,
          border: "1px solid " + d.line,
          boxShadow: We && !ie ? "0 0 0 2px " + d.honey : $.pinned ? "0 0 0 2px " + d.honeySoft : "none"
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10
          },
          children: [(0, i.jsx)("div", {
            style: {
              width: 34,
              height: 34,
              borderRadius: 10,
              background: d.pine,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: (0, i.jsx)(ls, {
              size: 17,
              color: "#F5F1E8",
              strokeWidth: 2.2
            })
          }), (0, i.jsxs)("div", {
            style: {
              flex: 1,
              lineHeight: 1.15
            },
            children: [(0, i.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                flexWrap: "wrap"
              },
              children: [(0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontWeight: 700,
                  fontSize: 13.5,
                  color: d.ink
                },
                children: $.from
              }), (0, i.jsx)(Qs, {
                bg: d.pine,
                color: "#F5F1E8",
                children: "Official"
              }), We && (0, i.jsx)(Qs, {
                bg: d.honey,
                color: "#3A2A08",
                children: "Action required"
              })]
            }), (0, i.jsxs)("div", {
              style: {
                fontFamily: p,
                fontSize: 11.5,
                color: d.faint
              },
              children: [$.role, " \xB7 ", $.time]
            })]
          }), $.pinned && (0, i.jsx)(cn, {
            size: 14,
            color: d.honey,
            strokeWidth: 2.6
          })]
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 600,
            fontSize: 16,
            color: d.ink,
            lineHeight: 1.25,
            marginBottom: 5
          },
          children: $.title
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 13.5,
            color: d.sub,
            lineHeight: 1.45
          },
          children: $.body
        }), We && (ie ? (0, i.jsxs)("div", {
          style: {
            marginTop: 12,
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: p,
            fontSize: 12.5,
            fontWeight: 700,
            color: "#3E7C57"
          },
          children: [(0, i.jsx)(pe, {
            size: 15,
            strokeWidth: 3
          }), "You acknowledged this"]
        }) : (0, i.jsxs)("button", {
          onClick: () => l($, me),
          style: {
            marginTop: 12,
            width: "100%",
            background: d.honey,
            border: "none",
            borderRadius: 11,
            padding: "10px 0",
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: d.pine,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6
          },
          children: [(0, i.jsx)(nn, {
            size: 15,
            strokeWidth: 2.5
          }), "Read & acknowledge"]
        })), $.readBy && (0, i.jsxs)("button", {
          onClick: () => n($),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 12,
            paddingTop: 11,
            borderTop: "1px solid " + d.line,
            background: "none",
            border: "none",
            cursor: "pointer",
            width: "100%"
          },
          children: [Rr ? (0, i.jsx)(to, {
            size: 14,
            color: d.faint
          }) : null, Rr ? (0, i.jsxs)("span", {
            style: {
              fontFamily: p,
              fontSize: 12,
              fontWeight: 600,
              color: d.sub
            },
            children: [We ? "Acknowledged by " : "Seen by ", $.readBy.length, " of ", Rr]
          }) : null, $.notYet.length > 0 && (0, i.jsxs)("span", {
            style: {
              fontFamily: p,
              fontSize: 11,
              fontWeight: 700,
              color: d.honey,
              background: d.honey + "1F",
              padding: "2px 7px",
              borderRadius: 999
            },
            children: [$.notYet.length, " ", We ? "not acked" : "not yet"]
          }), (0, i.jsx)(at, {
            size: 14,
            color: d.faint,
            style: {
              marginLeft: "auto",
              transform: "rotate(-90deg)"
            }
          })]
        })]
      }, "a" + me)
    }), (() => {
      let $ = wv.map((me, ie) => ({
        a: me,
        i: ie
      })).filter(({
        a: me,
        i: ie
      }) => me.requireAck && s.has(ie));
      return $.length ? (0, i.jsxs)("div", {
        style: {
          marginTop: 14
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: d.faint,
            marginBottom: 8
          },
          children: "Acknowledged"
        }), $.map(({
          a: me,
          i: ie
        }) => (0, i.jsxs)("div", {
          onClick: () => l(me, ie),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 9,
            background: "none",
            border: "1px solid " + d.line,
            borderRadius: 12,
            padding: "9px 12px",
            marginBottom: 8,
            cursor: "pointer"
          },
          children: [(0, i.jsx)(pe, {
            size: 14,
            strokeWidth: 3,
            color: "#3E7C57",
            style: {
              flexShrink: 0
            }
          }), (0, i.jsx)("div", {
            style: {
              flex: 1,
              minWidth: 0,
              fontFamily: p,
              fontSize: 12.5,
              fontWeight: 600,
              color: d.sub,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: me.title
          }), (0, i.jsx)("span", {
            style: {
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 700,
              color: d.faint,
              flexShrink: 0
            },
            children: "Reread"
          })]
        }, "done" + ie))]
      }) : null
    })()]
  })
}

function Iv({
  icon: e,
  text: t,
  note: a
}) {
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginBottom: 11
    },
    children: [(0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      },
      children: [(0, i.jsx)(e, {
        size: 15,
        color: d.honey,
        strokeWidth: 2.4
      }), (0, i.jsx)("span", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 15.5,
          color: d.ink
        },
        children: t
      })]
    }), (0, i.jsx)("span", {
      style: {
        fontFamily: p,
        fontSize: 11.5,
        color: d.faint
      },
      children: a
    })]
  })
}

function Sb({
  joined: e,
  toggle: t,
  open: a,
  requests: r,
  addRequest: o,
  counts: memberCounts = {},
  deptCounts: deptMemberCounts = {}
}) {
  let [n, s] = (0, I.useState)(!1), [l, u] = (0, I.useState)(""), c = () => {
    l.trim() && (o(l.trim()), u(""), s(!1))
  };
  return (0, i.jsxs)("div", {
    style: {
      padding: "4px 16px 20px"
    },
    children: [(0, i.jsx)(Iv, {
      icon: Zt,
      text: "Interest fields",
      note: "Join what you're into"
    }), (0, i.jsx)("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      },
      children: kd.map(f => {
        let h = f.icon,
          m = e.has(f.id),
          g = !!f.subs,
          b = g ? f.subs.filter(k => e.has(f.id + ":" + k)).length : 0;
        return (0, i.jsxs)("div", {
          onClick: () => a(f),
          style: {
            background: d.card,
            border: "1px solid " + d.line,
            borderRadius: 16,
            padding: 13,
            cursor: "pointer"
          },
          children: [(0, i.jsx)("div", {
            style: {
              width: 38,
              height: 38,
              borderRadius: 11,
              background: f.color + "1A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10
            },
            children: (0, i.jsx)(h, {
              size: 19,
              color: f.color,
              strokeWidth: 2.2
            })
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 600,
              fontSize: 14.5,
              color: d.ink
            },
            children: f.name
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 11.5,
              color: d.faint,
              marginBottom: 10
            },
            children: g ? f.subs.length + " groups" + (b ? " \xB7 " + b + " joined" : "") : (memberCounts[f.id] || 0) + ((memberCounts[f.id] || 0) === 1 ? " member" : " members")
          }), g ? (0, i.jsxs)("button", {
            onClick: k => {
              k.stopPropagation(), a(f)
            },
            style: {
              width: "100%",
              border: "none",
              borderRadius: 9,
              padding: "7px 0",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              background: f.color + "18",
              color: f.color
            },
            children: ["Choose", (0, i.jsx)(at, {
              size: 13,
              strokeWidth: 3,
              style: {
                transform: "rotate(-90deg)"
              }
            })]
          }) : (0, i.jsx)("button", {
            onClick: k => {
              k.stopPropagation(), t(f.id)
            },
            style: {
              width: "100%",
              border: "none",
              borderRadius: 9,
              padding: "7px 0",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              background: m ? f.color + "18" : f.color,
              color: m ? f.color : "#fff"
            },
            children: m ? (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(pe, {
                size: 13,
                strokeWidth: 3
              }), "Joined"]
            }) : (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(Je, {
                size: 13,
                strokeWidth: 3
              }), "Join"]
            })
          })]
        }, f.id)
      })
    }), (0, i.jsxs)("div", {
      style: {
        marginTop: 12,
        background: d.card,
        border: "1px dashed " + d.honey,
        borderRadius: 16,
        padding: 14
      },
      children: [n ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)("input", {
          autoFocus: !0,
          value: l,
          onChange: f => u(f.target.value),
          onKeyDown: f => f.key === "Enter" && c(),
          placeholder: "e.g. Needlepoint",
          style: {
            width: "100%",
            border: "1px solid " + d.line,
            borderRadius: 10,
            padding: "9px 12px",
            fontFamily: p,
            fontSize: 13.5,
            outline: "none",
            color: d.ink,
            marginBottom: 8,
            boxSizing: "border-box"
          }
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8
          },
          children: [(0, i.jsx)("button", {
            onClick: c,
            style: {
              flex: 1,
              background: d.honey,
              border: "none",
              borderRadius: 9,
              padding: "8px 0",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              color: "#fff",
              cursor: "pointer"
            },
            children: "Request field"
          }), (0, i.jsx)("button", {
            onClick: () => s(!1),
            style: {
              background: "none",
              border: "1px solid " + d.line,
              borderRadius: 9,
              padding: "8px 14px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              color: d.sub,
              cursor: "pointer"
            },
            children: "Cancel"
          })]
        })]
      }) : (0, i.jsxs)("button", {
        onClick: () => s(!0),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "none",
          border: "none",
          cursor: "pointer",
          width: "100%"
        },
        children: [(0, i.jsx)("div", {
          style: {
            width: 34,
            height: 34,
            borderRadius: 10,
            background: d.honey + "22",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: (0, i.jsx)(Je, {
            size: 18,
            color: d.honey,
            strokeWidth: 2.6
          })
        }), (0, i.jsxs)("div", {
          style: {
            textAlign: "left"
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontWeight: 700,
              fontSize: 13.5,
              color: d.ink
            },
            children: "Don't see your thing?"
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 11.5,
              color: d.faint
            },
            children: "Request a field - needlepoint, disc golf, anything"
          })]
        })]
      }), r.map((f, h) => (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: 10,
          fontFamily: p,
          fontSize: 12,
          color: d.sub
        },
        children: [(0, i.jsx)(pe, {
          size: 13,
          color: d.secureHi,
          strokeWidth: 3
        }), ' "', f, '" requested - pending admin review']
      }, h))]
    })]
  })
}

function kb({
  myName: e = mo,
  group: t,
  subs: a,
  posts: r,
  canPost: o,
  onPost: n,
  onLike: s,
  onDeletePost: l,
  onLoad: u,
  err: c = "",
  isAdmin: f = !1,
  photoFor: h,
  onJoin: onJoinGroup = null
}) {
  (0, I.useEffect)(() => {
    o && u && u()
  }, [o, t.id]);
  let [m, g] = (0, I.useState)(""), [b, k] = (0, I.useState)(null), [A, v] = (0, I.useState)(!1), [x, w] = (0, I.useState)(a.length ? a[0] : null), [_, C] = (0, I.useState)("All"), E = (0, I.useRef)(null), P = async B => {
    let X = B.target.files && B.target.files[0];
    if (B.target.value = "", !X) return;
    v(!0);
    let ne = await Av(X);
    k(ne), v(!1)
  }, W = () => {
    !m.trim() && !b || (n({
      text: m.trim(),
      photo: b,
      sub: a.length ? x : null
    }), g(""), k(null))
  }, K = _ === "All" ? r : r.filter(B => B.sub === _);
  return (0, i.jsxs)("div", {
    style: {
      marginTop: 18
    },
    children: [(0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10
      },
      children: [(0, i.jsx)("div", {
        style: {
          flex: 1,
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14,
          color: d.ink
        },
        children: "The wall"
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontFamily: p,
          fontSize: 10.5,
          fontWeight: 600,
          color: d.faint
        },
        children: [(0, i.jsx)(wt, {
          size: 11,
          strokeWidth: 2.4
        }), "Members only"]
      })]
    }), o ? (0, i.jsxs)("div", {
      style: {
        background: d.card,
        border: "1px solid " + d.line,
        borderRadius: 16,
        padding: 13,
        marginBottom: 14
      },
      children: [(0, i.jsxs)("div", {
        style: {
          display: "flex",
          gap: 10
        },
        children: [(0, i.jsx)(Ne, {
          name: e,
          size: 34,
          bg: t.color,
          src: h(e)
        }), (0, i.jsx)("textarea", {
          value: m,
          onChange: B => g(B.target.value),
          rows: 2,
          placeholder: "Post to " + t.name + "...",
          style: {
            flex: 1,
            border: "none",
            outline: "none",
            resize: "none",
            fontFamily: p,
            fontSize: 13.5,
            color: d.ink,
            background: "none",
            padding: "6px 0"
          }
        })]
      }), b && (0, i.jsxs)("div", {
        style: {
          position: "relative",
          marginTop: 8
        },
        children: [(0, i.jsx)("img", {
          src: b,
          alt: "",
          style: {
            width: "100%",
            borderRadius: 12,
            display: "block"
          }
        }), (0, i.jsx)("button", {
          onClick: () => k(null),
          style: {
            position: "absolute",
            top: 8,
            right: 8,
            width: 26,
            height: 26,
            borderRadius: 999,
            background: "rgba(28,27,22,0.72)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: 0
          },
          children: (0, i.jsx)(ws, {
            size: 14,
            color: "#fff",
            strokeWidth: 3
          })
        })]
      }), a.length > 0 && (0, i.jsx)("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          marginTop: 10
        },
        children: a.map(B => (0, i.jsx)("button", {
          onClick: () => w(B),
          style: {
            border: "none",
            cursor: "pointer",
            fontFamily: p,
            fontSize: 11.5,
            fontWeight: 700,
            padding: "5px 11px",
            borderRadius: 999,
            background: x === B ? t.color : t.color + "14",
            color: x === B ? "#fff" : t.color
          },
          children: B
        }, B))
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginTop: 10
        },
        children: [(0, i.jsxs)("button", {
          onClick: () => E.current && E.current.click(),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 5,
            border: "1px solid " + d.line,
            background: d.paper,
            cursor: "pointer",
            fontFamily: p,
            fontSize: 11.5,
            fontWeight: 700,
            color: d.sub,
            padding: "6px 11px",
            borderRadius: 999
          },
          children: [(0, i.jsx)(ns, {
            size: 13,
            strokeWidth: 2.4
          }), A ? "Adding..." : b ? "Swap photo" : "Add a photo"]
        }), (0, i.jsx)("input", {
          ref: E,
          type: "file",
          accept: "image/*",
          onChange: P,
          style: {
            display: "none"
          }
        }), (0, i.jsx)("div", {
          style: {
            flex: 1
          }
        }), (0, i.jsx)("button", {
          onClick: W,
          style: {
            background: t.color,
            border: "none",
            borderRadius: 999,
            padding: "7px 16px",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 12.5,
            color: "#fff",
            cursor: "pointer",
            opacity: m.trim() || b ? 1 : .45
          },
          children: "Post"
        })]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 9,
          fontFamily: p,
          fontSize: 11,
          color: d.faint,
          lineHeight: 1.35
        },
        children: [(0, i.jsx)(to, {
          size: 12,
          strokeWidth: 2.3,
          style: {
            flexShrink: 0
          }
        }), "Stays in ", t.name, ". Never posted to the main feed."]
      })]
    }) : (0, i.jsx)("div", {
      style: {
        background: d.card,
        border: "1px dashed " + d.line,
        borderRadius: 14,
        padding: 14,
        textAlign: "center",
        marginBottom: 14
      },
      children: (0, i.jsxs)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          color: d.sub
        },
        children: [(0, i.jsxs)("div", {
          style: {
            marginBottom: onJoinGroup ? 11 : 0
          },
          children: ["Join ", t.name, " to see the wall and post."]
        }), onJoinGroup ? (0, i.jsxs)("button", {
          onClick: () => onJoinGroup(t.id),
          style: {
            background: d.pine,
            color: "#F5F1E8",
            border: "none",
            borderRadius: 11,
            padding: "10px 20px",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 13.5,
            cursor: "pointer"
          },
          children: ["Join ", t.name]
        }) : null]
      })
    }), o && a.length > 0 && r.length > 0 && (0, i.jsx)("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        marginBottom: 12
      },
      children: ["All"].concat(a).map(B => (0, i.jsx)("button", {
        onClick: () => C(B),
        style: {
          border: "1px solid " + (_ === B ? t.color : d.line),
          cursor: "pointer",
          fontFamily: p,
          fontSize: 11.5,
          fontWeight: 600,
          padding: "5px 11px",
          borderRadius: 999,
          background: _ === B ? t.color + "14" : d.card,
          color: _ === B ? t.color : d.sub
        },
        children: B
      }, B))
    }), c && (0, i.jsx)("div", {
      style: {
        background: "#FBEAE7",
        color: "#B4402F",
        borderRadius: 10,
        padding: "10px 12px",
        fontFamily: p,
        fontSize: 12,
        marginBottom: 10
      },
      children: c
    }), o && (K.length === 0 ? (0, i.jsx)("div", {
      style: {
        background: d.card,
        border: "1px dashed " + d.line,
        borderRadius: 14,
        padding: 16,
        textAlign: "center"
      },
      children: (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          color: d.sub
        },
        children: "Nothing here yet. Start it off - post a picture."
      })
    }) : K.map(B => (0, i.jsxs)("div", {
      style: {
        background: d.card,
        border: "1px solid " + d.line,
        borderRadius: 16,
        padding: 13,
        marginBottom: 10
      },
      children: [(0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 9
        },
        children: [(0, i.jsx)(Ne, {
          name: B.author,
          size: 32,
          bg: t.color,
          src: h(B.author)
        }), (0, i.jsxs)("div", {
          style: {
            flex: 1,
            minWidth: 0,
            lineHeight: 1.15
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontWeight: 700,
              fontSize: 13,
              color: d.ink
            },
            children: B.author
          }), (0, i.jsxs)("div", {
            style: {
              fontFamily: p,
              fontSize: 11,
              color: d.faint
            },
            children: [B.role, " \xB7 ", B.time]
          })]
        }), B.sub && (0, i.jsx)(Qs, {
          bg: t.color + "18",
          color: t.color,
          children: B.sub
        })]
      }), B.text && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13.5,
          color: d.ink,
          lineHeight: 1.45,
          marginBottom: B.photo ? 10 : 0
        },
        children: B.text
      }), B.photo && (0, i.jsx)("img", {
        src: B.photo,
        alt: "",
        style: {
          width: "100%",
          borderRadius: 12,
          display: "block"
        }
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: 10
        },
        children: [(0, i.jsxs)("button", {
          onClick: () => s(B.id),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 5,
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
            fontFamily: p,
            fontSize: 12,
            fontWeight: 700,
            color: B.liked ? t.color : d.faint
          },
          children: [(0, i.jsx)(rs, {
            size: 14,
            strokeWidth: 2.4,
            fill: B.liked ? t.color : "none"
          }), B.likes || 0]
        }), (0, i.jsx)("div", {
          style: {
            flex: 1
          }
        }), (B.mine || f) && l && (0, i.jsx)("button", {
          onClick: () => {
            window.confirm("Delete this post?") && l(B.id)
          },
          style: {
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            fontFamily: p,
            fontSize: 11.5,
            fontWeight: 700,
            color: d.faint,
            textDecoration: "underline"
          },
          children: B.mine ? "Delete" : "Remove"
        })]
      })]
    }, B.id)))]
  })
}

function bb({
  myName: e = mo,
  group: t,
  back: a,
  joined: r,
  toggle: o,
  openPerson: n,
  posts: s = [],
  onPost: l,
  onLike: u,
  onDeletePost: c,
  onLoad: f,
  err: h = "",
  isAdmin: m = !1,
  photoFor: g,
  members: b = [],
  memberCount: k = null
}) {
  let A = t.icon || Xt,
    v = r.has(t.id),
    x = !t.dept,
    [w, _] = (0, I.useState)([]),
    [C, E] = (0, I.useState)(!1),
    [P, W] = (0, I.useState)(""),
    K = t.subs ? t.subs.concat(w) : [];
  (0, I.useEffect)(() => {
    f && f()
  }, [t.id, v]);
  let B = () => {
    let X = P.trim();
    X && (_(ne => [...ne, X]), W(""), E(!1))
  };
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      style: {
        background: t.color,
        padding: "18px 16px 20px",
        color: "#fff"
      },
      children: [(0, i.jsxs)("button", {
        onClick: a,
        style: {
          background: "none",
          border: "none",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 14,
          opacity: .9
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " Back"]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12
        },
        children: [(0, i.jsx)("div", {
          style: {
            width: 46,
            height: 46,
            borderRadius: 13,
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: (0, i.jsx)(A, {
            size: 24,
            strokeWidth: 2.2
          })
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 21
            },
            children: t.name
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 12.5,
              opacity: .9
            },
            children: k === null ? "\xA0" : k + (k === 1 ? " member" : " members")
          })]
        })]
      }), x && !t.subs && (0, i.jsx)("button", {
        onClick: () => o(t.id),
        style: {
          marginTop: 14,
          width: "100%",
          border: "none",
          borderRadius: 10,
          padding: "9px 0",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 13.5,
          cursor: "pointer",
          background: v ? "rgba(255,255,255,0.22)" : "#fff",
          color: v ? "#fff" : t.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6
        },
        children: v ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(pe, {
            size: 15,
            strokeWidth: 3
          }), "You're in"]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(Je, {
            size: 15,
            strokeWidth: 3
          }), "Join ", t.name]
        })
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: 16
      },
      children: [t.subs && (0, i.jsxs)("div", {
        style: {
          marginBottom: 18
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 14,
            color: d.ink,
            marginBottom: 3
          },
          children: "Choose your groups"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11.5,
            color: d.faint,
            marginBottom: 12
          },
          children: "Join any that fit - mix and match."
        }), K.map(X => {
          let ne = t.id + ":" + X,
            Ye = r.has(ne);
          return (0, i.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 11,
              background: d.card,
              border: "1px solid " + d.line,
              borderRadius: 13,
              padding: "10px 12px",
              marginBottom: 8
            },
            children: [(0, i.jsx)("div", {
              style: {
                width: 8,
                height: 8,
                borderRadius: 999,
                background: t.color,
                flexShrink: 0
              }
            }), (0, i.jsx)("div", {
              style: {
                flex: 1,
                fontFamily: p,
                fontWeight: 600,
                fontSize: 13.5,
                color: d.ink
              },
              children: X
            }), (0, i.jsx)("button", {
              onClick: () => o(ne),
              style: {
                border: "none",
                borderRadius: 999,
                padding: "5px 13px",
                fontFamily: p,
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: Ye ? t.color + "18" : t.color,
                color: Ye ? t.color : "#fff"
              },
              children: Ye ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(pe, {
                  size: 12,
                  strokeWidth: 3
                }), "Joined"]
              }) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(Je, {
                  size: 12,
                  strokeWidth: 3
                }), "Join"]
              })
            })]
          }, X)
        }), t.addable && (C ? (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            marginTop: 2
          },
          children: [(0, i.jsx)("input", {
            autoFocus: !0,
            value: P,
            onChange: X => W(X.target.value),
            onKeyDown: X => X.key === "Enter" && B(),
            placeholder: "Add a school",
            style: {
              flex: 1,
              border: "1px solid " + d.line,
              borderRadius: 10,
              padding: "9px 12px",
              fontFamily: p,
              fontSize: 13.5,
              color: d.ink,
              outline: "none",
              background: d.paper
            }
          }), (0, i.jsx)("button", {
            onClick: B,
            style: {
              border: "none",
              borderRadius: 10,
              padding: "9px 15px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              background: t.color,
              color: "#fff",
              cursor: "pointer"
            },
            children: "Add"
          })]
        }) : (0, i.jsxs)("button", {
          onClick: () => E(!0),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            width: "100%",
            border: "1px dashed " + t.color,
            background: "none",
            borderRadius: 13,
            padding: "10px 0",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 12.5,
            color: t.color,
            cursor: "pointer"
          },
          children: [(0, i.jsx)(Je, {
            size: 14,
            strokeWidth: 3
          }), "Add a school"]
        }))]
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14,
          color: d.ink,
          marginBottom: 10
        },
        children: "People here"
      }), b.length === 0 && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          color: d.faint,
          marginBottom: 12
        },
        children: v ? "Just you so far. Ask somebody to join." : "Nobody yet - be the first."
      }), b.map((X, ne) => (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 11,
          marginBottom: 11
        },
        children: [(0, i.jsx)(Ne, {
          name: X.name,
          size: 38,
          bg: t.color,
          src: g ? g(X.name) : null
        }), (0, i.jsxs)("div", {
          children: [n ? (0, i.jsx)("button", {
            onClick: () => n(X),
            style: {
              background: "none",
              border: "none",
              padding: 0,
              fontFamily: p,
              fontWeight: 700,
              fontSize: 13.5,
              color: d.ink,
              cursor: "pointer",
              textAlign: "left"
            },
            children: X.name
          }) : (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontWeight: 700,
              fontSize: 13.5,
              color: d.ink
            },
            children: X.name
          }),
          /* was `role · loc` - loc never existed on a member row, so every line ended
             in a dangling separator. Show whichever parts are actually present. */
          [X.role, X.loc].filter(Boolean).length > 0 && (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 11.5,
              color: d.faint
            },
            children: [X.role, X.loc].filter(Boolean).join(" \xB7 ")
          })]
        })]
      }, X.id || ne)), (0, i.jsx)(kb, {
        myName: e,
        group: t,
        subs: K,
        posts: s,
        canPost: t.subs ? K.some(X => r.has(t.id + ":" + X)) : v,
        onPost: l,
        onLike: u,
        onDeletePost: c,
        onLoad: f,
        err: h,
        isAdmin: m,
        photoFor: g,
        onJoin: o
      })]
    })]
  })
}

/* ---------- Know the doctor ----------
   Physicians are not accounts. These are cards anyone can read, seeded from the
   practice's own public material, which a doctor claims by signing up. The list is
   grouped by specialty because that is how the practice is actually organised, and
   because it teaches the shape of SOG to someone who does not know it yet. */
function DoctorsScreen({ docs: list = [], back: onBack, photoFor: photo = () => null, openDoc: onOpen = () => {} }) {
  let [q, setQ] = (0, I.useState)(""),
    needle = q.trim().toLowerCase(),
    match = x => !needle || (x.name + " " + x.specialty + " " + (x.towns || []).join(" ")).toLowerCase().indexOf(needle) !== -1,
    shown = list.filter(match),
    groups = [];
  shown.forEach(x => {
    let g = groups.filter(y => y.key === x.specialty)[0];
    g || (g = { key: x.specialty, items: [] }, groups.push(g));
    g.items.push(x)
  });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      style: { background: d.pine, padding: "14px 16px 18px", color: "#F5F1E8" },
      children: [(0, i.jsxs)("button", {
        onClick: onBack,
        style: { background: "none", border: "none", color: "rgba(245,241,232,0.75)", display: "flex",
                 alignItems: "center", gap: 3, fontFamily: p, fontSize: 13, fontWeight: 600,
                 cursor: "pointer", marginBottom: 12 },
        children: [(0, i.jsx)(Me, { size: 16 }), " Back"]
      }), (0, i.jsx)("div", {
        style: { fontFamily: D, fontWeight: 700, fontSize: 24 },
        children: "Know the doctor"
      }), (0, i.jsx)("div", {
        style: { fontFamily: p, fontSize: 13, opacity: .8, marginTop: 3 },
        children: list.length + " physicians \xB7 who they are and where they see patients"
      })]
    }), (0, i.jsxs)("div", {
      style: { padding: 14 },
      children: [(0, i.jsx)("input", {
        value: q,
        onChange: ev => setQ(ev.target.value),
        placeholder: "Search name, specialty or town",
        autoCapitalize: "none",
        autoCorrect: "off",
        spellCheck: !1,
        style: { width: "100%", boxSizing: "border-box", padding: "11px 13px", borderRadius: 12,
                 border: "1px solid " + d.line, background: d.card, fontFamily: p, fontSize: 15,
                 color: d.ink, marginBottom: 14 }
      }), shown.length === 0 && (0, i.jsx)("div", {
        style: { fontFamily: p, fontSize: 13.5, color: d.sub, textAlign: "center", padding: "22px 0" },
        children: "No one matches that."
      }), groups.map(g => (0, i.jsxs)("div", {
        style: { marginBottom: 18 },
        children: [(0, i.jsx)("div", {
          style: { fontFamily: p, fontSize: 11, fontWeight: 800, letterSpacing: ".05em",
                   textTransform: "uppercase", color: d.pine, marginBottom: 7 },
          children: g.key
        }), g.items.map(x => (0, i.jsxs)("button", {
          onClick: () => onOpen(x),
          style: { width: "100%", textAlign: "left", background: d.card, border: "1px solid " + d.line,
                   borderRadius: 14, padding: 11, marginBottom: 8, display: "flex", gap: 11,
                   alignItems: "center", cursor: "pointer" },
          children: [(0, i.jsx)(Ne, { name: x.name, size: 46, bg: d.pine, src: photo(x.name) }),
          (0, i.jsxs)("div", { style: { minWidth: 0 }, children: [
            (0, i.jsx)("div", {
              style: { fontFamily: D, fontWeight: 700, fontSize: 15.5, color: d.ink },
              children: x.name
            }),
            (0, i.jsx)("div", {
              style: { fontFamily: p, fontSize: 12.5, color: d.sub, marginTop: 2 },
              children: (x.towns || []).join(" \xB7 ")
            })
          ]})]
        }, x.id))]
      }, g.key))]
    })]
  })
}

function DoctorScreen({ doc: e, back: onBack, photoFor: photo = () => null, onMessage: onMsg = null }) {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      style: { background: d.pine, padding: "14px 16px 22px", color: "#F5F1E8" },
      children: [(0, i.jsxs)("button", {
        onClick: onBack,
        style: { background: "none", border: "none", color: "rgba(245,241,232,0.75)", display: "flex",
                 alignItems: "center", gap: 3, fontFamily: p, fontSize: 13, fontWeight: 600,
                 cursor: "pointer", marginBottom: 14 },
        children: [(0, i.jsx)(Me, { size: 16 }), " Back"]
      }), (0, i.jsxs)("div", {
        style: { display: "flex", alignItems: "center", gap: 14 },
        children: [(0, i.jsx)(Ne, { name: e.name, size: 64, bg: d.honey, src: photo(e.name) }),
        (0, i.jsxs)("div", { style: { minWidth: 0 }, children: [
          (0, i.jsx)("div", {
            style: { fontFamily: D, fontWeight: 700, fontSize: 21, lineHeight: 1.15 },
            children: e.name
          }),
          (0, i.jsx)("div", {
            style: { fontFamily: p, fontSize: 13, opacity: .85, marginTop: 2 },
            children: e.specialty
          })
        ]})]
      })]
    }), (0, i.jsxs)("div", {
      style: { padding: 16 },
      children: [
        (e.towns || []).length > 0 && (0, i.jsxs)("div", {
          style: { marginBottom: 14 },
          children: [(0, i.jsx)("div", {
            style: { fontFamily: p, fontSize: 11, fontWeight: 800, letterSpacing: ".04em",
                     textTransform: "uppercase", color: d.faint, marginBottom: 6 },
            children: "Sees patients in"
          }), (0, i.jsx)("div", {
            style: { display: "flex", flexWrap: "wrap", gap: 6 },
            children: (e.towns || []).map(t => (0, i.jsx)("span", {
              style: { background: d.honeySoft, color: "#7A5418", borderRadius: 99,
                       padding: "4px 11px", fontFamily: p, fontSize: 12.5, fontWeight: 700 },
              children: t
            }, t))
          }),
          /* Deliberately no clinic days. The schedule changes monthly and mid-month;
             showing it here would invite people to trust the app over the real one. */
          (0, i.jsx)("div", {
            style: { fontFamily: p, fontSize: 11.5, color: d.faint, marginTop: 7 },
            children: "Clinic days change month to month \u2014 check the schedule for dates."
          })]
        }),
        e.bio && (0, i.jsx)("div", {
          style: { background: d.card, border: "1px solid " + d.line, borderRadius: 14, padding: 14,
                   fontFamily: p, fontSize: 14, color: d.ink, lineHeight: 1.55, whiteSpace: "pre-wrap" },
          children: e.bio
        }),
        onMsg && e.profile_id && (0, i.jsxs)("button", {
          onClick: () => onMsg(e.profile_id, e.name),
          style: { width: "100%", marginTop: 12, padding: "13px 0", borderRadius: 14, border: "none",
                   background: d.pine, color: "#F5F1E8", fontFamily: p, fontSize: 14.5, fontWeight: 700,
                   cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 },
          children: [(0, i.jsx)(Da, { size: 17, strokeWidth: 2.3 }), "Message"]
        })
      ]
    })]
  })
}

function PersonScreen({
  person: e,
  depts: deptList = [],
  back: onBack,
  onMessage: onMsg = null,
  meId: myId = null,
  photoFor: photo = () => null
}) {
  let deptName = id => {
      let m = deptList.filter(x => x.id === id)[0];
      return m ? m.name : null
    },
    myDepts = (e.department_members || []).map(x => deptName(x.department_id)).filter(Boolean),
    isMe = myId && e.id === myId,
    rows = [
      { label: "Home base", value: e.home_base, icon: ln },
      { label: "School", value: e.school, icon: Lr },
      { label: "Ask me about", value: e.ask_about, icon: Zt }
    ].filter(r => (r.value || "").trim());
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      style: { background: d.pine, padding: "14px 16px 22px", color: "#F5F1E8" },
      children: [(0, i.jsxs)("button", {
        onClick: onBack,
        style: { background: "none", border: "none", color: "rgba(245,241,232,0.75)", display: "flex",
                 alignItems: "center", gap: 3, fontFamily: p, fontSize: 13, fontWeight: 600,
                 cursor: "pointer", marginBottom: 14 },
        children: [(0, i.jsx)(Me, { size: 16 }), " Back"]
      }), (0, i.jsxs)("div", {
        style: { display: "flex", alignItems: "center", gap: 14 },
        children: [(0, i.jsx)(Ne, { name: e.display_name, size: 64, bg: d.honey, src: photo(e.display_name) }),
        (0, i.jsxs)("div", { style: { minWidth: 0 }, children: [
          (0, i.jsx)("div", {
            style: { fontFamily: D, fontWeight: 700, fontSize: 21, lineHeight: 1.15 },
            children: e.display_name
          }),
          e.title && (0, i.jsx)("div", {
            style: { fontFamily: p, fontSize: 13, opacity: .85, marginTop: 2 },
            children: e.title
          }),
          myDepts.length > 0 && (0, i.jsx)("div", {
            style: { fontFamily: p, fontSize: 12.5, opacity: .75, marginTop: 3 },
            children: myDepts.join(" \xB7 ")
          })
        ]})]
      })]
    }), (0, i.jsxs)("div", {
      style: { padding: 16 },
      children: [
        rows.length === 0 && (0, i.jsx)("div", {
          style: { background: d.card, border: "1px dashed " + d.line, borderRadius: 16, padding: 18,
                   textAlign: "center", fontFamily: p, fontSize: 12.5, color: d.sub, lineHeight: 1.5 },
          /* An empty profile should read as an invitation, not as a broken screen. */
          children: isMe ? "Your profile is empty. Add a home base, where you went to school, and something you could talk about all day \u2014 the Me tab has the editor."
                         : e.display_name.split(" ")[0] + " hasn\u2019t filled in a profile yet."
        }),
        rows.map((r, ix) => (0, i.jsxs)("div", {
          style: { background: d.card, border: "1px solid " + d.line, borderRadius: 14, padding: 13,
                   marginBottom: 10, display: "flex", gap: 11, alignItems: "flex-start" },
          children: [(0, i.jsx)("div", {
            style: { width: 34, height: 34, borderRadius: 10, background: d.honey + "22", flexShrink: 0,
                     display: "flex", alignItems: "center", justifyContent: "center" },
            children: (0, i.jsx)(r.icon, { size: 17, color: d.pine, strokeWidth: 2.2 })
          }), (0, i.jsxs)("div", { style: { minWidth: 0 }, children: [
            (0, i.jsx)("div", {
              style: { fontFamily: p, fontSize: 11, fontWeight: 800, letterSpacing: ".04em",
                       textTransform: "uppercase", color: d.faint, marginBottom: 2 },
              children: r.label
            }),
            (0, i.jsx)("div", {
              style: { fontFamily: p, fontSize: 14.5, color: d.ink, lineHeight: 1.45 },
              children: r.value
            })
          ]})]
        }, ix)),
        onMsg && !isMe && (0, i.jsxs)("button", {
          onClick: () => onMsg(e.id, e.display_name),
          style: { width: "100%", marginTop: 4, padding: "13px 0", borderRadius: 14, border: "none",
                   background: d.pine, color: "#F5F1E8", fontFamily: p, fontSize: 14.5, fontWeight: 700,
                   cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 },
          children: [(0, i.jsx)(Da, { size: 17, strokeWidth: 2.3 }), "Message ", e.display_name.split(" ")[0]]
        })
      ]
    })]
  })
}

function Lb({
  people: e = [],
  depts: t = [],
  err: a = "",
  isAdmin: r = !1,
  meId: o = null,
  setPersonRole: n = () => {},
  setPersonActive: s = () => {},
  photoFor: l = () => null,
  onMessage: u = null,
  removeDept: onRemoveDept = null,
  openPerson: onOpenPerson = null,
  openDoctors: onOpenDoctors = null,
  doctorCount: doctorCount = 0
}) {
  let [c, f] = (0, I.useState)(""), [h, m] = (0, I.useState)(!1), g = w => {
    let _ = t.filter(C => C.id === w)[0];
    return _ ? _.name : null
  }, b = w => (w.department_members || []).map(_ => ({
    id: _.department_id,
    name: g(_.department_id)
  })).filter(_ => _.name), k = c.trim().toLowerCase(), v = e.filter(w => r && h ? !0 : w.active !== !1).filter(w => k ? [w.display_name, w.title, w.dept].concat(b(w)).join(" ").toLowerCase().indexOf(k) !== -1 : !0), x = e.filter(w => w.active === !1).length;
  return (0, i.jsxs)("div", {
    style: {
      padding: "4px 16px 20px"
    },
    /* The doctors sit at the TOP of the Directory: it is the same question ("who is
       that, and what do they do") asked about people who do not have accounts yet. */
    children: [onOpenDoctors && (0, i.jsxs)("button", {
      onClick: onOpenDoctors,
      style: {
        width: "100%", display: "flex", alignItems: "center", gap: 11,
        background: d.pine, border: "none", borderRadius: 14,
        padding: "12px 13px", marginBottom: 12, cursor: "pointer", textAlign: "left"
      },
      children: [(0, i.jsx)("div", {
        style: {
          width: 34, height: 34, borderRadius: 10, background: "rgba(245,241,232,0.14)",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
        },
        children: (0, i.jsx)(Zt, { size: 18, color: "#F5F1E8", strokeWidth: 2.2 })
      }), (0, i.jsxs)("div", { style: { minWidth: 0 }, children: [
        (0, i.jsx)("div", {
          style: { fontFamily: D, fontWeight: 700, fontSize: 15.5, color: "#F5F1E8" },
          children: "Know the doctor"
        }),
        (0, i.jsx)("div", {
          style: { fontFamily: p, fontSize: 12, color: "rgba(245,241,232,0.72)", marginTop: 1 },
          children: (doctorCount || "") + " physicians \xB7 what they do and where"
        })
      ]})]
    }), (0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: d.card,
        border: "1px solid " + d.line,
        borderRadius: 12,
        padding: "9px 12px",
        marginBottom: 12
      },
      children: [(0, i.jsx)(ao, {
        size: 16,
        color: d.faint
      }), (0, i.jsx)("input", {
        value: c,
        onChange: w => f(w.target.value),
        placeholder: "Search name or department",
        style: {
          border: "none",
          outline: "none",
          background: "none",
          fontFamily: p,
          fontSize: 13.5,
          color: d.ink,
          width: "100%"
        }
      })]
    }), (0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 12
      },
      children: [(0, i.jsxs)("div", {
        style: {
          flex: 1,
          fontFamily: p,
          fontSize: 11.5,
          color: d.faint
        },
        children: [v.length, " ", v.length === 1 ? "person" : "people"]
      }), r && x > 0 && (0, i.jsx)("button", {
        onClick: () => m(!h),
        style: {
          border: "1px solid " + d.line,
          background: h ? d.pine : d.card,
          color: h ? "#F5F1E8" : d.sub,
          borderRadius: 999,
          padding: "5px 11px",
          fontFamily: p,
          fontSize: 11.5,
          fontWeight: 700,
          cursor: "pointer"
        },
        children: h ? "Hide deactivated" : "Show deactivated (" + x + ")"
      })]
    }), a && (0, i.jsxs)("div", {
      style: {
        background: "#FBEAE7",
        color: "#B4402F",
        borderRadius: 10,
        padding: "10px 12px",
        fontFamily: p,
        fontSize: 12,
        marginBottom: 12
      },
      children: ["Couldn't load: ", a]
    }), v.length === 0 && (0, i.jsx)("div", {
      style: {
        background: d.card,
        border: "1px dashed " + d.line,
        borderRadius: 16,
        padding: 18,
        textAlign: "center",
        fontFamily: p,
        fontSize: 12.5,
        color: d.sub
      },
      children: k ? "Nobody matches that." : "Nobody here yet."
    }), v.map(w => {
      let _ = b(w),
        C = w.active === !1,
        E = w.id === o;
      return (0, i.jsxs)("div", {
        style: {
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 16,
          padding: 14,
          marginBottom: 10,
          opacity: C ? .55 : 1
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 12,
            alignItems: "center"
          },
          children: [(0, i.jsx)(Ne, {
            name: w.display_name,
            size: 46,
            bg: d.pine2,
            src: l(w.display_name)
          }), (0, i.jsxs)("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [(0, i.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                flexWrap: "wrap"
              },
              children: [onOpenPerson ? (0, i.jsx)("button", {
                onClick: ev => {
                  let pane = ev.currentTarget.closest("[data-dirpane]");
                  onOpenPerson(w, pane ? pane.scrollTop : 0)
                },
                style: {
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontFamily: D,
                  fontWeight: 600,
                  fontSize: 15.5,
                  color: d.ink,
                  cursor: "pointer",
                  textAlign: "left"
                },
                children: w.display_name
              }) : (0, i.jsx)("span", {
                style: {
                  fontFamily: D,
                  fontWeight: 600,
                  fontSize: 15.5,
                  color: d.ink
                },
                children: w.display_name
              }), E && (0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#7A5418",
                  background: d.honey + "2E",
                  padding: "1px 6px",
                  borderRadius: 6
                },
                children: "YOU"
              }), w.role === "admin" && (0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#2C5E45",
                  background: "rgba(62,124,87,0.16)",
                  padding: "1px 6px",
                  borderRadius: 6
                },
                children: "ADMIN"
              }), C && (0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#B4402F",
                  background: "#FBEAE7",
                  padding: "1px 6px",
                  borderRadius: 6
                },
                children: "DEACTIVATED"
              })]
            }), w.title && (0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontSize: 12,
                color: d.sub,
                marginTop: 2
              },
              children: w.title
            }), (0, i.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: p,
                fontSize: 11.5,
                color: d.faint,
                marginTop: 3
              },
              flexWrap: "wrap",
              children: [(0, i.jsx)(ca, {
                size: 11
              }), _.length ? _.map(dm => (0, i.jsxs)("span", {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  background: r && onRemoveDept ? "rgba(20,48,40,0.06)" : "transparent",
                  borderRadius: 999,
                  padding: r && onRemoveDept ? "2px 4px 2px 8px" : 0
                },
                children: [dm.name, r && onRemoveDept ? (0, i.jsx)("button", {
                  onClick: ev => {
                    ev.stopPropagation(), window.confirm("Remove " + w.display_name + " from " + dm.name + "?") && onRemoveDept(w.id, dm.id)
                  },
                  title: "Remove from " + dm.name,
                  style: {
                    border: "none",
                    background: "none",
                    color: d.sub,
                    fontSize: 13,
                    lineHeight: 1,
                    padding: "0 3px",
                    cursor: "pointer"
                  },
                  children: "\xD7"
                }) : null]
              }, dm.id)) : w.dept || "No department yet"]
            })]
          })]
        }), !E && !C && u && (0, i.jsxs)("button", {
          onClick: () => u(w.id, w.display_name),
          style: {
            marginTop: 11,
            width: "100%",
            border: "1px solid " + d.line,
            background: d.paper,
            color: d.pine,
            borderRadius: 12,
            padding: "9px 0",
            fontFamily: p,
            fontSize: 12.5,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6
          },
          children: [(0, i.jsx)(Da, {
            size: 14,
            strokeWidth: 2.3
          }), "Message"]
        }), r && !E && (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 7,
            marginTop: 12,
            paddingTop: 11,
            borderTop: "1px solid " + d.line,
            flexWrap: "wrap"
          },
          children: [(0, i.jsx)("button", {
            onClick: () => n(w.id, w.role === "admin" ? "employee" : "admin"),
            style: {
              border: "1px solid " + d.line,
              background: d.paper,
              color: d.sub,
              borderRadius: 999,
              padding: "6px 12px",
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 700,
              cursor: "pointer"
            },
            children: w.role === "admin" ? "Remove admin" : "Make admin"
          }), (0, i.jsx)("button", {
            onClick: () => {
              let P = C ? "Turn " + w.display_name + "'s access back on?" : "Deactivate " + w.display_name + "? They keep their posts but can't sign in and use the app.";
              window.confirm(P) && s(w.id, C)
            },
            style: {
              border: "1px solid " + (C ? "#3E7C57" : "#B4402F"),
              background: d.paper,
              color: C ? "#2C5E45" : "#B4402F",
              borderRadius: 999,
              padding: "6px 12px",
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 700,
              cursor: "pointer"
            },
            children: C ? "Reactivate" : "Deactivate"
          })]
        })]
      }, w.id)
    }), r && (0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 5,
        marginTop: 6,
        fontFamily: p,
        fontSize: 11,
        color: d.faint,
        lineHeight: 1.4
      },
      children: [(0, i.jsx)(St, {
        size: 11,
        color: "#3E7C57",
        style: {
          flexShrink: 0,
          marginTop: 1
        }
      }), "Admin controls. Deactivating keeps someone's history but blocks their access - the database enforces it, not just this screen."]
    })]
  })
}

function Ib({
  person: e,
  back: t,
  myTags: a,
  onMessage: r,
  photoFor: o = () => null
}) {
  let [n, s] = (0, I.useState)(e.tags[0]), [l, u] = (0, I.useState)(!1);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "14px 16px 20px",
        color: "#F5F1E8"
      },
      children: [(0, i.jsxs)("button", {
        onClick: t,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.75)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 14
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " Directory"]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 14
        },
        children: [(0, i.jsx)(Ne, {
          name: e.name,
          size: 58,
          bg: d.honey,
          src: o(e.name)
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8
            },
            children: [(0, i.jsx)("span", {
              style: {
                fontFamily: D,
                fontWeight: 700,
                fontSize: 21
              },
              children: e.name
            }), e.cred && (0, i.jsx)("span", {
              style: {
                fontFamily: p,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.03em",
                color: d.pine,
                background: d.honey,
                padding: "2px 8px",
                borderRadius: 7
              },
              children: e.cred
            })]
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 13,
              opacity: .85
            },
            children: e.role
          })]
        })]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          marginTop: 14,
          fontFamily: p,
          fontSize: 12,
          opacity: .85
        },
        children: [(0, i.jsxs)("span", {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4
          },
          children: [(0, i.jsx)(ln, {
            size: 12
          }), e.loc]
        }), (0, i.jsxs)("span", {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4
          },
          children: [(0, i.jsx)(Lr, {
            size: 13
          }), e.school]
        }), (0, i.jsxs)("span", {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4
          },
          children: [(0, i.jsx)(ca, {
            size: 12
          }), e.dept]
        })]
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: 16
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14,
          color: d.ink,
          marginBottom: 4
        },
        children: "Interests"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12,
          color: d.faint,
          marginBottom: 12
        },
        children: "Tap one to see their story - and reach out."
      }), e.tags.map(c => {
        let f = ab(c),
          h = f.icon,
          m = n === c,
          g = a.has(c);
        return (0, i.jsxs)("div", {
          style: {
            border: "1px solid " + (m ? f.color + "44" : d.line),
            borderRadius: 16,
            marginBottom: 10,
            overflow: "hidden",
            background: d.card
          },
          children: [(0, i.jsxs)("button", {
            onClick: () => s(m ? null : c),
            style: {
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 11,
              padding: 13,
              background: "none",
              border: "none",
              cursor: "pointer"
            },
            children: [(0, i.jsx)("div", {
              style: {
                width: 38,
                height: 38,
                borderRadius: 11,
                background: f.color + "1A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              },
              children: (0, i.jsx)(h, {
                size: 19,
                color: f.color,
                strokeWidth: 2.2
              })
            }), (0, i.jsxs)("div", {
              style: {
                flex: 1,
                textAlign: "left"
              },
              children: [(0, i.jsxs)("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 7
                },
                children: [(0, i.jsx)("span", {
                  style: {
                    fontFamily: D,
                    fontWeight: 600,
                    fontSize: 14.5,
                    color: d.ink
                  },
                  children: f.name
                }), g && (0, i.jsx)("span", {
                  style: {
                    fontFamily: p,
                    fontSize: 10,
                    fontWeight: 700,
                    color: f.color,
                    background: f.color + "18",
                    padding: "1px 6px",
                    borderRadius: 999
                  },
                  children: "SHARED"
                })]
              }), !m && (0, i.jsx)("div", {
                style: {
                  fontFamily: p,
                  fontSize: 11.5,
                  color: d.faint,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: 210
                },
                children: e.details[c]
              })]
            }), (0, i.jsx)(at, {
              size: 17,
              color: d.faint,
              style: {
                transform: m ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
                flexShrink: 0
              }
            })]
          }), m && (0, i.jsxs)("div", {
            style: {
              padding: "0 14px 14px 62px"
            },
            children: [(0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontSize: 13.5,
                color: d.ink,
                lineHeight: 1.5,
                marginBottom: 12
              },
              children: e.details[c]
            }), (0, i.jsxs)("button", {
              onClick: () => r(e, f.name),
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: f.color,
                border: "none",
                borderRadius: 10,
                padding: "8px 14px",
                fontFamily: p,
                fontWeight: 700,
                fontSize: 12.5,
                color: "#fff",
                cursor: "pointer"
              },
              children: [(0, i.jsx)(Da, {
                size: 14,
                strokeWidth: 2.4
              }), " Message ", Kp(e.name), " about ", f.name]
            })]
          })]
        }, c)
      }), (0, i.jsx)("div", {
        style: {
          marginTop: 8,
          textAlign: "center"
        },
        children: l ? (0, i.jsxs)("div", {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: p,
            fontSize: 12,
            color: d.sub
          },
          children: [(0, i.jsx)(pe, {
            size: 13,
            color: d.secureHi,
            strokeWidth: 3
          }), " Reported - an admin will review this profile."]
        }) : (0, i.jsxs)("button", {
          onClick: () => u(!0),
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: p,
            fontSize: 12,
            fontWeight: 600,
            color: d.faint
          },
          children: [(0, i.jsx)(sn, {
            size: 12
          }), " Report this profile"]
        })
      })]
    })]
  })
}

function Cb({
  open: e,
  threads: t = [],
  err: a = "",
  onNew: r,
  photoFor: o = () => null,
  people: roster = [],
  meId: myId = null,
  onCreateGroup: makeCrew = () => {}
}) {
  let n = t.filter(l => l.kind !== "dm"),
    s = t.filter(l => l.kind === "dm"),
    [crewOpen, setCrewOpen] = (0, I.useState)(!1),
    [crewName, setCrewName] = (0, I.useState)(""),
    [crewPicked, setCrewPicked] = (0, I.useState)([]),
    crewToggle = pid => setCrewPicked(prev => prev.indexOf(pid) === -1 ? prev.concat([pid]) : prev.filter(x => x !== pid)),
    crewCreate = () => {
      crewPicked.length >= 2 && (makeCrew(crewName.trim(), crewPicked), setCrewName(""), setCrewPicked([]), setCrewOpen(!1))
    };
  return (0, i.jsxs)("div", {
    style: {
      padding: "4px 8px 20px"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        padding: "4px 12px 8px"
      },
      children: [(0, i.jsx)("div", {
        style: {
          flex: 1,
          fontFamily: p,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: d.faint
        },
        children: "Channels"
      }), (0, i.jsxs)("button", {
        onClick: () => setCrewOpen(!crewOpen),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 5,
          border: "1px solid " + d.line,
          background: crewOpen ? d.pine : d.card,
          borderRadius: 999,
          padding: "6px 12px",
          fontFamily: p,
          fontSize: 11.5,
          fontWeight: 700,
          color: crewOpen ? "#F5F1E8" : d.sub,
          cursor: "pointer",
          marginRight: 6
        },
        children: [(0, i.jsx)(to, {
          size: 12,
          strokeWidth: 2.6
        }), "New group"]
      }), (0, i.jsxs)("button", {
        onClick: r,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 5,
          border: "1px solid " + d.line,
          background: d.card,
          borderRadius: 999,
          padding: "6px 12px",
          fontFamily: p,
          fontSize: 11.5,
          fontWeight: 700,
          color: d.sub,
          cursor: "pointer"
        },
        children: [(0, i.jsx)(Je, {
          size: 12,
          strokeWidth: 2.6
        }), "New DM"]
      })]
    }), crewOpen && (0, i.jsxs)("div", {
      style: {
        margin: "0 12px 12px",
        background: d.card,
        border: "1px solid " + d.line,
        borderRadius: 14,
        padding: 13
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14,
          color: d.ink,
          marginBottom: 2
        },
        children: "Start a group chat"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 11.5,
          color: d.faint,
          marginBottom: 10
        },
        children: "Pick two or more people. Everyone in it sees the whole conversation."
      }), (0, i.jsx)("input", {
        value: crewName,
        onChange: ev => setCrewName(ev.target.value),
        placeholder: "Name it (optional)",
        style: {
          width: "100%",
          border: "1px solid " + d.line,
          borderRadius: 10,
          padding: "9px 11px",
          fontFamily: p,
          fontSize: 13.5,
          color: d.ink,
          background: d.paper,
          outline: "none",
          boxSizing: "border-box",
          marginBottom: 10
        }
      }), (0, i.jsx)("div", {
        style: {
          maxHeight: 210,
          overflowY: "auto",
          marginBottom: 10
        },
        children: roster.filter(pr => pr.id !== myId && pr.active !== !1).map(pr => {
          let on = crewPicked.indexOf(pr.id) !== -1;
          return (0, i.jsxs)("div", {
            onClick: () => crewToggle(pr.id),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "7px 0",
              cursor: "pointer"
            },
            children: [(0, i.jsx)(Ne, {
              name: pr.display_name,
              size: 30,
              bg: d.pine2,
              src: o(pr.display_name)
            }), (0, i.jsx)("div", {
              style: {
                flex: 1,
                minWidth: 0,
                fontFamily: p,
                fontWeight: 600,
                fontSize: 13,
                color: d.ink,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: pr.display_name
            }), (0, i.jsx)("div", {
              style: {
                width: 20,
                height: 20,
                borderRadius: 999,
                flexShrink: 0,
                border: "1px solid " + (on ? d.pine : d.line),
                background: on ? d.pine : "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: on ? (0, i.jsx)(pe, {
                size: 12,
                color: "#F5F1E8",
                strokeWidth: 3
              }) : null
            })]
          }, pr.id)
        })
      }), (0, i.jsx)("button", {
        onClick: crewCreate,
        style: {
          width: "100%",
          background: d.pine,
          border: "none",
          borderRadius: 11,
          padding: "11px 0",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 13.5,
          color: "#F5F1E8",
          cursor: "pointer",
          opacity: crewPicked.length >= 2 ? 1 : .5
        },
        children: crewPicked.length >= 2 ? "Start chat with " + crewPicked.length + " people" : "Pick at least two people"
      })]
    }), a && (0, i.jsx)("div", {
      style: {
        margin: "0 12px 10px",
        background: "#FBEAE7",
        color: "#B4402F",
        borderRadius: 10,
        padding: "10px 12px",
        fontFamily: p,
        fontSize: 12
      },
      children: a
    }), n.length === 0 && (0, i.jsx)("div", {
      style: {
        margin: "0 12px 10px",
        fontFamily: p,
        fontSize: 12.5,
        color: d.faint,
        lineHeight: 1.45
      },
      children: "Join a group or a department and its channel shows up here."
    }), n.map(l => (0, i.jsxs)("div", {
      onClick: () => e(l),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px",
        cursor: "pointer"
      },
      children: [(0, i.jsx)("div", {
        style: {
          width: 46,
          height: 46,
          borderRadius: 14,
          background: (l.kind === "dept" ? d.pine : "#6B7A3A") + "1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        },
        children: l.kind === "dept" ? (0, i.jsx)(ca, {
          size: 21,
          color: d.pine
        }) : (0, i.jsx)(Xt, {
          size: 21,
          color: "#6B7A3A"
        })
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontWeight: 700,
            fontSize: 14.5,
            color: d.ink
          },
          children: l.name
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12.5,
            color: d.sub,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: l.last
        })]
      }), l.unread > 0 && (0, i.jsx)("span", {
        style: {
          background: d.honey,
          color: "#fff",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 10.5,
          minWidth: 18,
          height: 18,
          borderRadius: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 5px",
          flexShrink: 0
        },
        children: l.unread
      }), (0, i.jsx)(Me, {
        size: 16,
        color: d.faint,
        style: {
          transform: "rotate(180deg)",
          flexShrink: 0
        }
      })]
    }, l.id)), (0, i.jsx)("div", {
      style: {
        fontFamily: p,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: d.faint,
        padding: "14px 12px 6px"
      },
      children: "Direct messages"
    }), s.length === 0 && (0, i.jsx)("div", {
      style: {
        margin: "0 12px 10px",
        fontFamily: p,
        fontSize: 12.5,
        color: d.faint,
        lineHeight: 1.45
      },
      children: "Find someone in People and start a conversation."
    }), s.map(l => (0, i.jsxs)("div", {
      onClick: () => e(l),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px",
        cursor: "pointer"
      },
      children: [(0, i.jsx)(Ne, {
        name: l.name,
        size: 46,
        bg: d.pine2,
        src: l.kind === "dm" ? o(l.name) : null
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontWeight: 700,
            fontSize: 14.5,
            color: d.ink
          },
          children: l.name
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12.5,
            color: d.sub,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: l.last
        })]
      }), l.unread > 0 && (0, i.jsx)("span", {
        style: {
          background: d.honey,
          color: "#fff",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 10.5,
          minWidth: 18,
          height: 18,
          borderRadius: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 5px",
          flexShrink: 0
        },
        children: l.unread
      }), (0, i.jsx)(Me, {
        size: 16,
        color: d.faint,
        style: {
          transform: "rotate(180deg)",
          flexShrink: 0
        }
      })]
    }, l.id)), (0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 5,
        margin: "10px 14px 0",
        fontFamily: p,
        fontSize: 11,
        color: d.faint,
        lineHeight: 1.4
      },
      children: [(0, i.jsx)(wt, {
        size: 11,
        style: {
          flexShrink: 0,
          marginTop: 1
        }
      }), "Never send patient or confidential information here."]
    })]
  })
}

function _b({
  thread: e,
  back: t,
  me: a,
  seedInterest: r,
  photoFor: o = () => null
}) {
  let [n, s] = (0, I.useState)([]), [l, u] = (0, I.useState)(e.seedText ? e.seedText : r ? "Hey " + Kp(e.name) + "! Saw you're into " + r + " - would love to connect about it." : ""), [c, f] = (0, I.useState)(""), [h, m] = (0, I.useState)(!0), g = (0, I.useRef)(null), b = e.kind && e.kind !== "dm", k = async () => {
    let {
      data: v,
      error: x
    } = await F.from("messages").select("id, body, sender_id, created_at, profiles(display_name)").eq("thread_id", e.id).order("created_at");
    if (m(!1), x) {
      f(x.message);
      return
    }
    f(""), s((v || []).map(w => ({
      id: w.id,
      text: w.body,
      me: w.sender_id === (a && a.id),
      who: w.profiles && w.profiles.display_name || "Someone",
      at: w.created_at
    })))
  };
  (0, I.useEffect)(() => {
    k();
    let v = setInterval(k, 4e3);
    return () => clearInterval(v)
  }, [e.id]), (0, I.useEffect)(() => {
    g.current && g.current.scrollIntoView({
      block: "end"
    })
  }, [n.length]), (0, I.useEffect)(() => {
    a && a.id && F.from("thread_reads").upsert({
      profile_id: a.id,
      thread_id: e.id,
      last_read_at: new Date().toISOString()
    }, {
      onConflict: "profile_id,thread_id"
    }).then(() => {})
  }, [e.id, n.length]);
  let A = async () => {
    let v = l.trim();
    if (!v) return;
    u("");
    let {
      error: x
    } = await F.from("messages").insert({
      thread_id: e.id,
      sender_id: a.id,
      body: v
    });
    if (x) {
      f(x.message), u(v);
      return
    }
    k()
  };
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 14px",
        borderBottom: "1px solid " + d.line
      },
      children: [(0, i.jsx)("button", {
        onClick: t,
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          display: "flex"
        },
        children: (0, i.jsx)(Me, {
          size: 22,
          color: d.ink
        })
      }), b ? (0, i.jsx)("div", {
        style: {
          width: 34,
          height: 34,
          borderRadius: 10,
          background: (e.kind === "dept" ? d.pine : "#6B7A3A") + "1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: e.kind === "dept" ? (0, i.jsx)(ca, {
          size: 17,
          color: d.pine
        }) : (0, i.jsx)(Xt, {
          size: 17,
          color: "#6B7A3A"
        })
      }) : (0, i.jsx)(Ne, {
        name: e.name,
        size: 34,
        bg: d.pine2,
        src: e.kind === "dm" ? o(e.name) : null
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 15.5,
            color: d.ink
          },
          children: e.name
        }), b && (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: d.faint
          },
          children: e.kind === "dept" ? "Everyone in this department" : "Everyone in this group"
        })]
      })]
    }), (0, i.jsxs)("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "14px",
        display: "flex",
        flexDirection: "column",
        gap: 9
      },
      children: [h && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          color: d.faint,
          textAlign: "center"
        },
        children: "Loading\u2026"
      }), !h && n.length === 0 && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          color: d.faint,
          textAlign: "center",
          padding: "20px 10px",
          lineHeight: 1.5
        },
        children: "Nothing here yet. Say hey."
      }), n.map(v => (0, i.jsxs)("div", {
        style: {
          alignSelf: v.me ? "flex-end" : "flex-start",
          maxWidth: "80%"
        },
        children: [!v.me && b && (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            color: d.faint,
            margin: "0 0 3px 10px"
          },
          children: v.who
        }), (0, i.jsx)("div", {
          style: {
            background: v.me ? d.pine : d.card,
            color: v.me ? "#F5F1E8" : d.ink,
            border: v.me ? "none" : "1px solid " + d.line,
            borderRadius: 16,
            padding: "10px 13px",
            fontFamily: p,
            fontSize: 13.5,
            lineHeight: 1.45,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          },
          children: v.text
        })]
      }, v.id)), (0, i.jsx)("div", {
        ref: g
      })]
    }), c && (0, i.jsx)("div", {
      style: {
        margin: "0 14px 8px",
        background: "#FBEAE7",
        color: "#B4402F",
        borderRadius: 10,
        padding: "9px 12px",
        fontFamily: p,
        fontSize: 12
      },
      children: c
    }), (0, i.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        padding: "10px 14px 14px",
        borderTop: "1px solid " + d.line,
        background: d.paper
      },
      children: [(0, i.jsx)("input", {
        value: l,
        onChange: v => u(v.target.value),
        onKeyDown: v => {
          v.key === "Enter" && A()
        },
        placeholder: "Message\u2026",
        style: {
          flex: 1,
          border: "1px solid " + d.line,
          borderRadius: 999,
          padding: "11px 15px",
          fontFamily: p,
          fontSize: 16,
          color: d.ink,
          background: d.card,
          outline: "none"
        }
      }), (0, i.jsx)("button", {
        onClick: A,
        style: {
          background: d.pine,
          border: "none",
          borderRadius: 999,
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0
        },
        children: (0, i.jsx)(fn, {
          size: 18,
          color: "#F5F1E8"
        })
      })]
    })]
  })
}

function Ab({
  back: e,
  msgs: t,
  setMsgs: a
}) {
  let [r, o] = (0, I.useState)(new Set(["team"])), n = k => o(A => {
    let v = new Set(A);
    return v.has(k) ? v.delete(k) : v.add(k), v
  }), [s, l] = (0, I.useState)(""), u = bv.filter(k => r.has(k.id)), c = r.has("everyone"), [f, h] = (0, I.useState)(""), m = () => {
    !s.trim() || u.length === 0 || (a([...t, {
      who: "You",
      me: !0,
      text: s.trim(),
      time: "now"
    }]), l(""))
  }, g = k => {
    a(t.filter((A, v) => v !== k)), h("Marked complete - cleared from the desk, kept in the audit log."), setTimeout(() => h(""), 3e3)
  }, b = t.filter(k => k.me).length;
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.secure
    },
    children: [(0, i.jsxs)("div", {
      style: {
        padding: "12px 14px 14px"
      },
      children: [(0, i.jsxs)("button", {
        onClick: e,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.7)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 10
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " Back"]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 9
        },
        children: [(0, i.jsx)(wt, {
          size: 20,
          color: d.secureHi,
          strokeWidth: 2.4
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 22,
            color: "#F5F1E8"
          },
          children: "Secure Messaging"
        })]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: 6,
          marginTop: 10,
          background: "rgba(79,182,138,0.12)",
          borderRadius: 10,
          padding: "8px 10px"
        },
        children: [(0, i.jsx)(St, {
          size: 14,
          color: d.secureHi,
          style: {
            marginTop: 1,
            flexShrink: 0
          }
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: p,
            fontSize: 11.5,
            color: "rgba(245,241,232,0.82)",
            lineHeight: 1.4
          },
          children: "The only place patient info is allowed. Encrypted, access-controlled, and audit-logged - separate from everything social."
        })]
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "0 14px 8px"
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "rgba(245,241,232,0.45)",
          marginBottom: 7
        },
        children: "Send to"
      }), (0, i.jsx)("div", {
        style: {
          display: "flex",
          gap: 7,
          flexWrap: "wrap"
        },
        children: bv.map(k => {
          let A = r.has(k.id);
          return (0, i.jsx)("button", {
            onClick: () => n(k.id),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 5,
              border: A ? "1px solid " + d.secureHi : "1px solid rgba(245,241,232,0.16)",
              background: A ? "rgba(79,182,138,0.18)" : "transparent",
              borderRadius: 999,
              padding: "6px 11px",
              cursor: "pointer",
              fontFamily: p,
              fontWeight: 600,
              fontSize: 12,
              color: A ? "#F5F1E8" : "rgba(245,241,232,0.7)"
            },
            children: k.label
          }, k.id)
        })
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 8,
          fontFamily: p,
          fontSize: 11,
          color: "rgba(245,241,232,0.5)"
        },
        children: [(0, i.jsx)(Qt, {
          size: 11
        }), " ", u.length === 0 ? "Pick at least one recipient." : c ? "Includes Everyone - the widest scope. Use the tightest groups that work." : "Sending to " + u.length + " group" + (u.length > 1 ? "s" : "") + " - keep it to who needs to know."]
      })]
    }), b > 0 && (0, i.jsxs)("div", {
      style: {
        margin: "0 14px 8px",
        background: "rgba(224,154,56,0.14)",
        border: "1px solid rgba(224,154,56,0.3)",
        borderRadius: 12,
        padding: "9px 12px",
        display: "flex",
        alignItems: "flex-start",
        gap: 8
      },
      children: [(0, i.jsx)(wr, {
        size: 14,
        color: d.honey,
        style: {
          marginTop: 1,
          flexShrink: 0
        }
      }), (0, i.jsxs)("div", {
        style: {
          fontFamily: p,
          fontSize: 11.5,
          color: "rgba(245,241,232,0.85)",
          lineHeight: 1.4
        },
        children: [(0, i.jsxs)("b", {
          style: {
            color: d.honey
          },
          children: [b, " open item", b > 1 ? "s" : "", " you sent."]
        }), " As the sender, you close each once it's handled - anything still open at shift change is flagged to your lead."]
      })]
    }), f && (0, i.jsxs)("div", {
      style: {
        margin: "0 14px 6px",
        background: "rgba(79,182,138,0.15)",
        borderRadius: 10,
        padding: "8px 11px",
        fontFamily: p,
        fontSize: 11.5,
        color: d.secureHi,
        display: "flex",
        alignItems: "center",
        gap: 6
      },
      children: [(0, i.jsx)(pe, {
        size: 13,
        strokeWidth: 3
      }), f]
    }), (0, i.jsxs)("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "10px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 9
      },
      children: [t.length === 0 && (0, i.jsx)("div", {
        style: {
          margin: "auto",
          textAlign: "center",
          fontFamily: p,
          fontSize: 12.5,
          color: "rgba(245,241,232,0.45)",
          padding: 20,
          lineHeight: 1.5
        },
        children: "All clear. Completed items stay in the audit log for compliance - just not on the desk."
      }), t.map((k, A) => (0, i.jsxs)("div", {
        style: {
          alignSelf: k.me ? "flex-end" : "flex-start",
          maxWidth: "82%"
        },
        children: [!k.me && (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            color: "rgba(245,241,232,0.5)",
            margin: "0 0 2px 10px"
          },
          children: k.who
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "flex-end",
            gap: 6,
            flexDirection: k.me ? "row-reverse" : "row"
          },
          children: [(0, i.jsx)("div", {
            style: {
              padding: "9px 13px",
              borderRadius: 15,
              fontFamily: p,
              fontSize: 13.5,
              lineHeight: 1.4,
              background: k.me ? d.secureHi : "rgba(245,241,232,0.09)",
              color: k.me ? "#0E1A16" : "#F5F1E8",
              fontWeight: k.me ? 600 : 400,
              borderBottomRightRadius: k.me ? 5 : 15,
              borderBottomLeftRadius: k.me ? 15 : 5
            },
            children: k.text
          }), k.me && (0, i.jsx)("button", {
            onClick: () => g(A),
            title: "Mark complete (you sent this)",
            style: {
              background: "rgba(79,182,138,0.15)",
              border: "1px solid rgba(79,182,138,0.4)",
              borderRadius: 999,
              width: 26,
              height: 26,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0
            },
            children: (0, i.jsx)(pe, {
              size: 14,
              color: d.secureHi,
              strokeWidth: 3
            })
          })]
        }), (0, i.jsxs)("div", {
          style: {
            fontFamily: p,
            fontSize: 9.5,
            color: "rgba(245,241,232,0.35)",
            textAlign: k.me ? "right" : "left",
            margin: "3px 8px 0"
          },
          children: [k.time, " \xB7 logged"]
        }), k.me && k.reminded != null && (0, i.jsxs)("div", {
          style: {
            fontFamily: p,
            fontSize: 9.5,
            color: d.honey,
            textAlign: "right",
            margin: "2px 8px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 4
          },
          children: [(0, i.jsx)(kr, {
            size: 9
          }), " Open ", k.age, " \xB7 reminded ", k.reminded, "\xD7 \xB7 next nudge ", k.next]
        })]
      }, A))]
    }), (0, i.jsx)("div", {
      style: {
        padding: "10px 12px",
        borderTop: "1px solid rgba(245,241,232,0.1)"
      },
      children: (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        },
        children: [(0, i.jsx)("input", {
          value: s,
          onChange: k => l(k.target.value),
          onKeyDown: k => k.key === "Enter" && m(),
          placeholder: "Message " + (u.length === 0 ? "secure recipients" : u.length === 1 ? u[0].label.toLowerCase() : u.length + " groups") + "...",
          style: {
            flex: 1,
            border: "1px solid rgba(245,241,232,0.18)",
            borderRadius: 999,
            padding: "9px 14px",
            fontFamily: p,
            fontSize: 13.5,
            outline: "none",
            color: "#F5F1E8",
            background: "rgba(245,241,232,0.06)"
          }
        }), (0, i.jsx)("button", {
          onClick: m,
          style: {
            background: d.secureHi,
            border: "none",
            borderRadius: 999,
            width: 38,
            height: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          },
          children: (0, i.jsx)(fn, {
            size: 17,
            color: "#0E1A16"
          })
        })]
      })
    })]
  })
}
var Tb = [],
  jp = {
    Sent: "#6FA8DC",
    Delivered: "rgba(245,241,232,0.4)",
    Read: "rgba(245,241,232,0.6)",
    Acknowledged: d.honey,
    "Marked complete": d.secureHi
  };

function Rb({
  back: e,
  addNewHire: onAddNewHire = async () => null,
  lunches: lunchRows = [],
  addLunch: onAddLunch = () => {},
  removeLunch: onRemoveLunch = () => {},
  deptList: deptRows = [],
  removeDept: onRemoveDept = null,
  addDept: onAddDept = () => {},
  renameDept: onRenameDept = () => {},
  retireDept: onRetireDept = () => {},
  people: t = [],
  meId: a = null,
  setPersonRole: r = () => {},
  setPersonActive: o = () => {},
  adminErr: n = "",
  photoErr: s = "",
  role: l = "admin",
  cup: u = $p,
  saveCup: c = () => {},
  closeCupSeason: f = () => {},
  photoFor: h = () => null,
  setPersonPhoto: m,
  clearPersonPhoto: g,
  challenges: b = [],
  addChallenge: k,
  editChallenge: A,
  removeChallenge: v,
  merch: x = [],
  addMerch: w,
  editMerch: _,
  removeMerch: C,
  catalog: E = {},
  editCatalog: P,
  announceMerch: doAnnounceMerch = null,
  birthdays: W = [],
  addBirthday: K,
  editBirthday: B,
  removeBirthday: X,
  importBirthdays: ne,
  cupcake: Ye = {},
  editCupcake: Ut,
  recognition: ja = [],
  addRec: It,
  editRec: $,
  removeRec: me,
  anniversaries: ie = [],
  addAnniv: We,
  editAnniv: Rr,
  removeAnniv: Pn,
  importAnniv: go,
  questions: Er = [],
  addQ: yo,
  editQ: Fn,
  removeQ: On
}) {
  let Se = l === "manager",
    showMockSections = !1,
    [hireDraft, setHireDraft] = (0, I.useState)({
      name: "",
      title: "",
      dept: "",
      site: "oxford",
      worksWith: "",
      bio: "",
      photoDataUrl: null
    }),
    [hireErr, setHireErr] = (0, I.useState)(""),
    [merchMsg, setMerchMsg] = (0, I.useState)(""),
    [catDraft, setCatDraft] = (0, I.useState)({}),
    catCommit = key => {
      if (catDraft[key] === void 0) return;
      P({
        [key]: catDraft[key]
      });
      setCatDraft(d => {
        let next = {
          ...d
        };
        return delete next[key], next
      })
    },
    [hireBusy, setHireBusy] = (0, I.useState)(!1),
    [lunchDraft, setLunchDraft] = (0, I.useState)({
      on_date: "",
      site: "oxford",
      vendor: "",
      note: ""
    }),
    Ha = "Front Desk / Appointments",
    [vo, q] = (0, I.useState)(!1),
    [ke, je] = (0, I.useState)(null),
    [Ct, ta] = (0, I.useState)(""),
    [Sa, Pr] = (0, I.useState)(""),
    ka = () => {
      ta(""), Pr(""), je(null), q(!1)
    },
    xo = y => {
      ta(y.a), Pr(y.b), je(y.id), q(!0)
    },
    qa = () => {
      !Ct.trim() || !Sa.trim() || (ke ? Fn(ke, {
        a: Ct.trim(),
        b: Sa.trim()
      }) : yo(Ct.trim(), Sa.trim()), ka())
    },
    [deptDraft, setDeptDraft] = (0, I.useState)(""),
    [deptEditing, setDeptEditing] = (0, I.useState)(null),
    saveDeptRow = () => {
      let nm = deptDraft.trim();
      nm && (deptEditing ? onRenameDept(deptEditing, nm) : onAddDept(nm), setDeptDraft(""), setDeptEditing(null))
    },
    [Bn, Dn] = (0, I.useState)(!1),
    [wo, zn] = (0, I.useState)(null),
    [ge, _t] = (0, I.useState)({
      cat: "praise",
      title: "",
      body: "",
      link: "",
      days: 7
    }),
    [Fr, Mn] = (0, I.useState)(null),
    [Zs, $a] = (0, I.useState)(!1),
    ba = () => {
      _t({
        cat: "praise",
        title: "",
        body: "",
        link: "",
        days: 7
      }), zn(null), Dn(!1)
    },
    el = y => {
      let M = y.pinUntil ? Math.max(1, Math.ceil((y.pinUntil - Date.now()) / 864e5)) : 7;
      _t({
        cat: y.cat,
        title: y.title,
        body: y.body,
        link: y.link || "",
        days: M
      }), zn(y.id), Dn(!0)
    },
    tl = () => {
      if (!ge.title.trim() || !ge.body.trim()) return;
      let y = {
        cat: ge.cat,
        title: ge.title.trim(),
        body: ge.body.trim(),
        link: ge.link.trim(),
        pinUntil: Date.now() + (ge.days || 7) * 864e5
      };
      wo ? $(wo, y) : It(y), ba()
    },
    Un = (0, I.useRef)(null),
    aa = (0, I.useRef)(null),
    Va = (0, I.useRef)(null),
    bd = y => {
      Va.current = y, aa.current && aa.current.click()
    },
    Ld = y => {
      let M = y.target.files && y.target.files[0],
        Z = Va.current;
      if (y.target.value = "", !M || !Z) return;
      let G = new FileReader;
      G.onload = () => {
        m(Z, String(G.result)), Va.current = null
      }, G.readAsDataURL(M)
    },
    al = ({
      name: y
    }) => {
      let M = h(y);
      return (0, i.jsxs)("div", {
        onClick: () => bd(y),
        title: M ? "Swap photo" : "Add a photo",
        style: {
          position: "relative",
          flexShrink: 0,
          cursor: "pointer"
        },
        children: [(0, i.jsx)(Ne, {
          name: y,
          size: 28,
          bg: d.pine2,
          src: M
        }), (0, i.jsx)("div", {
          style: {
            position: "absolute",
            right: -3,
            bottom: -3,
            width: 14,
            height: 14,
            borderRadius: 999,
            background: M ? d.secureHi : d.honey,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: (0, i.jsx)(Zr, {
            size: 8,
            color: d.pine,
            strokeWidth: 3
          })
        })]
      })
    },
    [Nn, Or] = (0, I.useState)(""),
    [So, Wn] = (0, I.useState)(""),
    rl = y => {
      let M = y.target.files && y.target.files[0];
      if (!M) return;
      let Z = new FileReader;
      Z.onload = () => {
        let G = $k(String(Z.result));
        G.length && ne(G)
      }, Z.readAsText(M), y.target.value = ""
    },
    At = (0, I.useRef)(null),
    [jn, ra] = (0, I.useState)(""),
    [Ga, ft] = (0, I.useState)(""),
    ol = y => {
      let M = y.target.files && y.target.files[0];
      if (!M) return;
      let Z = new FileReader;
      Z.onload = () => {
        let G = Vk(String(Z.result));
        G.length && go(G)
      }, Z.readAsText(M), y.target.value = ""
    },
    [La, nl] = (0, I.useState)(null),
    Id = y => {
      nl(y), ra(y.name), ft(y.year + "-" + String(y.month).padStart(2, "0") + "-" + String(y.day).padStart(2, "0"))
    },
    ko = () => {
      nl(null), ra(""), ft("")
    },
    Cd = () => {
      if (!jn.trim() || !Ga) return;
      let y = new Date(Ga + "T00:00:00");
      if (isNaN(y.getTime())) return;
      let M = {
        name: jn.trim(),
        month: y.getMonth() + 1,
        day: y.getDate(),
        year: y.getFullYear()
      };
      La ? Rr(La, M) : We(M), ko()
    },
    [se, oa] = (0, I.useState)({
      title: u.title,
      season: u.season,
      unit: u.unit,
      cause: u.cause,
      ends: u.ends,
      sides: u.sides.map(y => ({
        ...y,
        staff: String(y.staff)
      }))
    }),
    [Nt, il] = (0, I.useState)(null),
    Hn = y => {
      il(y), Or(y.name), Wn(new Date().getFullYear() + "-" + String(y.month).padStart(2, "0") + "-" + String(y.day).padStart(2, "0"))
    },
    qn = () => {
      il(null), Or(""), Wn("")
    },
    _d = () => {
      if (!Nn.trim() || !So) return;
      let y = new Date(So + "T00:00:00");
      if (isNaN(y.getTime())) return;
      let M = {
        name: Nn.trim(),
        month: y.getMonth() + 1,
        day: y.getDate()
      };
      Nt ? B(Nt, M) : K(M), qn()
    },
    [ot, $n] = (0, I.useState)(!1),
    [bo, Lo] = (0, I.useState)(null),
    [ae, Oe] = (0, I.useState)({
      event: "",
      aName: "",
      aColor: Wa[0],
      bName: "",
      bColor: Wa[1],
      wager: ""
    }),
    [sl, Vn] = (0, I.useState)(!1),
    [Gn, ll] = (0, I.useState)(null),
    [He, Ka] = (0, I.useState)({
      name: "",
      price: "",
      desc: "",
      color: Wa[2]
    }),
    Kn = () => {
      Ka({
        name: "",
        price: "",
        desc: "",
        color: Wa[2]
      }), ll(null), Vn(!1)
    },
    Ad = y => {
      Ka({
        name: y.name,
        price: y.price,
        desc: y.desc,
        color: y.color
      }), ll(y.id), Vn(!0)
    },
    Td = () => {
      if (!He.name.trim() || !He.price.trim()) return;
      let y = {
        name: He.name.trim(),
        price: He.price.trim(),
        desc: He.desc.trim(),
        color: He.color
      };
      Gn ? _(Gn, y) : w(y), Kn()
    },
    re = {
      width: "100%",
      border: "1px solid rgba(245,241,232,0.18)",
      borderRadius: 10,
      padding: "10px 12px",
      fontFamily: p,
      fontSize: 13.5,
      color: "#F5F1E8",
      outline: "none",
      background: "rgba(245,241,232,0.06)",
      boxSizing: "border-box"
    },
    Jn = () => {
      Oe({
        event: "",
        aName: "",
        aColor: Wa[0],
        bName: "",
        bColor: Wa[1],
        wager: ""
      }), Lo(null), $n(!1)
    },
    Rd = y => {
      Oe({
        event: y.event,
        aName: y.sideA.name,
        aColor: y.sideA.color,
        bName: y.sideB.name,
        bColor: y.sideB.color,
        wager: y.wager
      }), Lo(y.id), $n(!0)
    },
    ul = () => {
      if (!ae.event.trim() || !ae.aName.trim() || !ae.bName.trim()) return;
      let y = {
        event: ae.event.trim(),
        wager: ae.wager.trim(),
        sideA: {
          name: ae.aName.trim(),
          color: ae.aColor
        },
        sideB: {
          name: ae.bName.trim(),
          color: ae.bColor
        }
      };
      bo ? A(bo, y) : k(y), Jn()
    },
    [dl, cl] = (0, I.useState)({
      push: !0,
      badge: !0,
      email: !1,
      sms: !1
    }),
    Xn = y => cl(M => ({
      ...M,
      [y]: !M[y]
    })),
    [Wt, Ed] = (0, I.useState)(Se ? vv.filter(y => y.dept === Ha) : vv),
    fl = y => Ed(M => M.filter((Z, G) => G !== y)),
    Br = (Se ? t.filter(y => y.dept === Ha) : t).map(y => ({
      id: y.id,
      name: y.display_name,
      dept: y.dept || "No department",
      depts: (y.department_members || []).map(dmRow => {
        let dRow = deptRows.filter(dd => dd.id === dmRow.department_id)[0];
        return dRow ? {
          id: dRow.id,
          name: dRow.name
        } : null
      }).filter(Boolean),
      role: y.role === "admin" ? "Admin" : y.role === "manager" ? "Manager" : "Employee",
      active: y.active !== !1,
      isMe: !!a && y.id === a
    })),
    [Pd, pl] = (0, I.useState)(Hk),
    [hl, Io] = (0, I.useState)(null),
    Fd = {
      Employee: "employee",
      Manager: "manager",
      Admin: "admin"
    },
    Od = y => {
      let M = Up[(Up.indexOf(y.role) + 1) % Up.length];
      r(y.id, Fd[M])
    },
    ml = y => o(y.id, !y.active),
    Bd = [{
      k: "push",
      label: "Push notifications",
      note: "Escalating nudges to the sender",
      fixed: !0
    }, {
      k: "badge",
      label: "In-app badge",
      note: "Open count on Secure Messaging",
      fixed: !0
    }, {
      k: "email",
      label: "Email fallback",
      note: "For weekend coverage"
    }, {
      k: "sms",
      label: "SMS fallback",
      note: "Optional second net"
    }];
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.secure
    },
    children: [(0, i.jsxs)("div", {
      style: {
        padding: "12px 14px 12px"
      },
      children: [(0, i.jsxs)("button", {
        onClick: e,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.7)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 10
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " ", "Back"]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 9
        },
        children: [(0, i.jsx)(St, {
          size: 20,
          color: d.secureHi,
          strokeWidth: 2.4
        }), (0, i.jsx)("span", {
          style: {
            fontFamily: D,
            fontWeight: 800,
            fontSize: 22,
            color: "#F5F1E8"
          },
          children: Se ? "Your department" : "Admin console"
        })]
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12,
          color: "rgba(245,241,232,0.55)",
          marginTop: 3
        },
        children: Se ? Ha + " \xB7 approvals & members" : "Roles, members, and announcements"
      })]
    }), Se ? (0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 6,
        margin: "0 14px 10px",
        background: "rgba(90,143,203,0.14)",
        borderRadius: 10,
        padding: "8px 10px"
      },
      children: [(0, i.jsx)(St, {
        size: 13,
        color: "#8FB4E4",
        style: {
          marginTop: 1,
          flexShrink: 0
        }
      }), (0, i.jsxs)("span", {
        style: {
          fontFamily: p,
          fontSize: 11.5,
          color: "rgba(245,241,232,0.82)",
          lineHeight: 1.4
        },
        children: ["Manager view. You see only ", Ha, " - your department's approvals and members. Company-wide settings and the secure audit log are admin-only."]
      })]
    }) : null, s && (0, i.jsxs)("div", {
      style: {
        margin: "0 14px 10px",
        background: "rgba(180,64,47,0.18)",
        border: "1px solid rgba(180,64,47,0.5)",
        borderRadius: 10,
        padding: "9px 11px",
        fontFamily: p,
        fontSize: 12,
        color: "#fff"
      },
      children: ["Couldn't save that photo \u2014 ", s]
    }), n && (0, i.jsxs)("div", {
      style: {
        margin: "0 14px 10px",
        background: "rgba(180,64,47,0.18)",
        border: "1px solid rgba(180,64,47,0.5)",
        borderRadius: 10,
        padding: "9px 11px",
        fontFamily: p,
        fontSize: 11.5,
        color: "#F6C9C0",
        lineHeight: 1.4
      },
      children: ["Couldn't save: ", n]
    }), (0, i.jsxs)("div", {
      style: {
        flex: 1,
        overflowY: "auto"
      },
      children: [showMockSections && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 13.5,
              color: "#F5F1E8"
            },
            children: "Pending approvals"
          }), Wt.length > 0 && (0, i.jsx)("span", {
            style: {
              background: d.honey,
              color: d.secure,
              fontFamily: p,
              fontWeight: 700,
              fontSize: 11,
              minWidth: 20,
              height: 20,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 6px"
            },
            children: Wt.length
          })]
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "Each row is one department's OK. A member in two departments needs both."
        }), Wt.length === 0 ? (0, i.jsxs)("div", {
          style: {
            fontFamily: p,
            fontSize: 12,
            color: "rgba(245,241,232,0.55)",
            display: "flex",
            alignItems: "center",
            gap: 6
          },
          children: [(0, i.jsx)(pe, {
            size: 13,
            color: d.secureHi,
            strokeWidth: 3
          }), " All caught up."]
        }) : Wt.map((y, M) => (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 9,
            marginBottom: 11
          },
          children: [(0, i.jsx)(Ne, {
            name: y.name,
            size: 34,
            bg: d.pine2
          }), (0, i.jsxs)("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [(0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontWeight: 700,
                fontSize: 12.5,
                color: "#F5F1E8"
              },
              children: y.name
            }), (0, i.jsxs)("div", {
              style: {
                fontFamily: p,
                fontSize: 10.5,
                color: "rgba(245,241,232,0.5)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: [y.role, " \xB7 ", y.dept]
            })]
          }), (0, i.jsx)("button", {
            onClick: () => fl(M),
            style: {
              background: d.secureHi,
              border: "none",
              borderRadius: 8,
              padding: "6px 12px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 11.5,
              color: "#0E1A16",
              cursor: "pointer"
            },
            children: "Approve"
          }), (0, i.jsx)("button", {
            onClick: () => fl(M),
            style: {
              background: "none",
              border: "1px solid rgba(245,241,232,0.2)",
              borderRadius: 8,
              padding: "6px 10px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 11.5,
              color: "rgba(245,241,232,0.7)",
              cursor: "pointer"
            },
            children: "Deny"
          })]
        }, M))]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: "#F5F1E8",
            marginBottom: 2
          },
          children: "Roles & permissions"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "Who can do what."
        }), xv.map((y, M) => {
          let Z = y.icon;
          return (0, i.jsxs)("div", {
            style: {
              display: "flex",
              gap: 10,
              marginBottom: M === xv.length - 1 ? 0 : 12
            },
            children: [(0, i.jsx)("div", {
              style: {
                width: 30,
                height: 30,
                borderRadius: 9,
                background: "rgba(245,241,232,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              },
              children: (0, i.jsx)(Z, {
                size: 15,
                color: d.secureHi,
                strokeWidth: 2.2
              })
            }), (0, i.jsxs)("div", {
              children: [(0, i.jsx)("div", {
                style: {
                  fontFamily: p,
                  fontWeight: 700,
                  fontSize: 12.5,
                  color: "#F5F1E8"
                },
                children: y.role
              }), (0, i.jsx)("div", {
                style: {
                  fontFamily: p,
                  fontSize: 11,
                  color: "rgba(245,241,232,0.5)",
                  lineHeight: 1.4
                },
                children: y.note
              })]
            })]
          }, M)
        })]
      }), (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 13.5,
              color: "#F5F1E8"
            },
            children: "Member access"
          }), (0, i.jsxs)("button", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: "rgba(79,182,138,0.15)",
              border: "1px solid rgba(79,182,138,0.4)",
              borderRadius: 8,
              padding: "5px 10px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 11,
              color: d.secureHi,
              cursor: "pointer"
            },
            children: [(0, i.jsx)(Je, {
              size: 12,
              strokeWidth: 3
            }), "Add"]
          })]
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "Assign roles and offboard. Tap a role to change it."
        }), Br.length === 0 && (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11.5,
            color: "rgba(245,241,232,0.45)"
          },
          children: "Nobody here yet."
        }), Br.map((y, M) => (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 9,
            marginBottom: 11,
            opacity: y.active ? 1 : .5
          },
          children: [(0, i.jsx)(Ne, {
            name: y.name,
            size: 32,
            bg: d.pine2,
            src: h(y.name)
          }), (0, i.jsxs)("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [(0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontWeight: 700,
                fontSize: 12.5,
                color: "#F5F1E8",
                textDecoration: y.active ? "none" : "line-through"
              },
              children: y.name
            }), (0, i.jsxs)("div", {
              style: {
                fontFamily: p,
                fontSize: 10.5,
                color: "rgba(245,241,232,0.5)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 5
              },
              children: [y.depts.length ? y.depts.map(dm => (0, i.jsxs)("span", {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  background: onRemoveDept ? "rgba(245,241,232,0.1)" : "transparent",
                  borderRadius: 999,
                  padding: onRemoveDept ? "1px 3px 1px 7px" : 0
                },
                children: [dm.name, onRemoveDept ? (0, i.jsx)("button", {
                  onClick: ev => {
                    ev.stopPropagation(), window.confirm("Remove " + y.name + " from " + dm.name + "?") && onRemoveDept(y.id, dm.id)
                  },
                  style: {
                    border: "none",
                    background: "none",
                    color: "rgba(245,241,232,0.75)",
                    fontSize: 13,
                    lineHeight: 1,
                    padding: "0 3px",
                    cursor: "pointer"
                  },
                  children: "\xD7"
                }) : null]
              }, dm.id)) : y.dept, y.isMe ? " \xB7 you" : ""]
            })]
          }), (0, i.jsx)("button", {
            disabled: y.isMe,
            onClick: () => {
              y.isMe || Od(y)
            },
            style: {
              background: Np[y.role] + "26",
              border: "1px solid " + Np[y.role] + "66",
              borderRadius: 999,
              padding: "4px 9px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 10.5,
              color: Np[y.role],
              cursor: y.isMe ? "default" : "pointer",
              flexShrink: 0
            },
            children: y.role
          }), (0, i.jsx)("button", {
            disabled: y.isMe,
            onClick: () => {
              y.isMe || ml(y)
            },
            style: {
              background: y.active ? "rgba(79,182,138,0.15)" : "rgba(245,241,232,0.08)",
              border: "none",
              borderRadius: 999,
              padding: "4px 9px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 10.5,
              color: y.active ? d.secureHi : "rgba(245,241,232,0.5)",
              cursor: y.isMe ? "default" : "pointer",
              flexShrink: 0
            },
            children: y.active ? "Active" : "Off"
          })]
        }, y.id || M))]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: "#F5F1E8",
            marginBottom: 2
          },
          children: "New hire announcement"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "Pins to the top of the feed for 3 days and notifies everyone. Comments are on."
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
            marginBottom: 9
          },
          children: [(0, i.jsxs)("label", {
            style: {
              width: 62,
              height: 62,
              borderRadius: 14,
              flexShrink: 0,
              background: hireDraft.photoDataUrl ? "transparent" : "rgba(245,241,232,0.08)",
              border: "1px dashed rgba(245,241,232,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              overflow: "hidden"
            },
            children: [hireDraft.photoDataUrl ? (0, i.jsx)("img", {
              src: hireDraft.photoDataUrl,
              alt: "",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }) : (0, i.jsx)("span", {
              style: {
                fontFamily: p,
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(245,241,232,0.6)",
                textAlign: "center",
                lineHeight: 1.25
              },
              children: "Add photo"
            }), (0, i.jsx)("input", {
              type: "file",
              accept: "image/*",
              style: {
                display: "none"
              },
              onChange: async ev => {
                let file = ev.target.files && ev.target.files[0];
                if (!file) return;
                setHireErr("");
                let dataUrl = await Av(file, 600, .85);
                // Av takes a FILE (kv takes a data URL and silently hands back
                // whatever it was given, which is what broke this picker).
                // Av hands back the ORIGINAL when the browser can't decode the
                // image (HEIC from an iPhone camera does this). Anything that
                // isn't a re-encoded JPEG never made it through the canvas.
                if (!dataUrl || dataUrl.indexOf("data:image/jpeg") !== 0) {
                  setHireErr("That photo format isn't supported here. On an iPhone, take a screenshot of it and use that, or save it as a JPEG.");
                  return
                }
                setHireDraft(pv => ({
                  ...pv,
                  photoDataUrl: dataUrl
                }))
              }
            })]
          }), (0, i.jsxs)("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [(0, i.jsx)("input", {
              value: hireDraft.name,
              onChange: ev => setHireDraft(pv => ({
                ...pv,
                name: ev.target.value
              })),
              placeholder: "Full name",
              style: {
            background: "rgba(245,241,232,0.08)",
            border: "1px solid rgba(245,241,232,0.18)",
            borderRadius: 9,
            padding: "8px 9px",
            fontFamily: p,
            fontSize: 12.5,
            color: "#F5F1E8",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: 7
          }
            }), (0, i.jsx)("input", {
              value: hireDraft.title,
              onChange: ev => setHireDraft(pv => ({
                ...pv,
                title: ev.target.value
              })),
              placeholder: "Job title",
              style: {
            background: "rgba(245,241,232,0.08)",
            border: "1px solid rgba(245,241,232,0.18)",
            borderRadius: 9,
            padding: "8px 9px",
            fontFamily: p,
            fontSize: 12.5,
            color: "#F5F1E8",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: 7
          }
            })]
          })]
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 7
          },
          children: [(0, i.jsx)("input", {
            value: hireDraft.dept,
            onChange: ev => setHireDraft(pv => ({
              ...pv,
              dept: ev.target.value
            })),
            placeholder: "Department",
            style: {
            background: "rgba(245,241,232,0.08)",
            border: "1px solid rgba(245,241,232,0.18)",
            borderRadius: 9,
            padding: "8px 9px",
            fontFamily: p,
            fontSize: 12.5,
            color: "#F5F1E8",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: 7
          }
          }), (0, i.jsx)("select", {
            value: hireDraft.site,
            onChange: ev => setHireDraft(pv => ({
              ...pv,
              site: ev.target.value
            })),
            style: {
              background: "rgba(245,241,232,0.08)",
              border: "1px solid rgba(245,241,232,0.18)",
              borderRadius: 9,
              padding: "8px 9px",
              fontFamily: p,
              fontSize: 12.5,
              color: "#F5F1E8",
              marginBottom: 7,
              flexShrink: 0
            },
            children: [(0, i.jsx)("option", {
              value: "oxford",
              children: "Oxford"
            }), (0, i.jsx)("option", {
              value: "tupelo",
              children: "Tupelo"
            }), (0, i.jsx)("option", {
              value: "both",
              children: "Both"
            })]
          })]
        }), (0, i.jsx)("input", {
          value: hireDraft.worksWith,
          onChange: ev => setHireDraft(pv => ({
            ...pv,
            worksWith: ev.target.value
          })),
          placeholder: "Who they work with (e.g. Works with Dr. Moore)",
          style: {
            background: "rgba(245,241,232,0.08)",
            border: "1px solid rgba(245,241,232,0.18)",
            borderRadius: 9,
            padding: "8px 9px",
            fontFamily: p,
            fontSize: 12.5,
            color: "#F5F1E8",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: 7
          }
        }), (0, i.jsx)("textarea", {
          value: hireDraft.bio,
          onChange: ev => setHireDraft(pv => ({
            ...pv,
            bio: ev.target.value
          })),
          placeholder: "A few lines about them - where they came from, what they'll be doing, something human.",
          rows: 4,
          style: {
            background: "rgba(245,241,232,0.08)",
            border: "1px solid rgba(245,241,232,0.18)",
            borderRadius: 9,
            padding: "8px 9px",
            fontFamily: p,
            fontSize: 12.5,
            color: "#F5F1E8",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: 9,
            resize: "vertical"
          }
        }), hireErr ? (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11.5,
            color: "#F6C9C0",
            fontWeight: 700,
            marginBottom: 8
          },
          children: hireErr
        }) : null, (0, i.jsx)("button", {
          disabled: hireBusy,
          onClick: async () => {
            if (setHireErr(""), !hireDraft.name.trim()) {
              setHireErr("A name is required.");
              return
            }
            setHireBusy(!0);
            let msg = await onAddNewHire({
              name: hireDraft.name.trim(),
              title: hireDraft.title.trim(),
              dept: hireDraft.dept.trim(),
              site: hireDraft.site,
              worksWith: hireDraft.worksWith.trim(),
              bio: hireDraft.bio.trim(),
              photoDataUrl: hireDraft.photoDataUrl
            });
            setHireBusy(!1), msg && msg.indexOf("Posted") !== 0 ? setHireErr(msg) : (msg && setHireErr(msg), setHireDraft({
              name: "",
              title: "",
              dept: "",
              site: "oxford",
              worksWith: "",
              bio: "",
              photoDataUrl: null
            }))
          },
          style: {
            width: "100%",
            background: hireBusy ? "rgba(245,241,232,0.25)" : d.honey,
            border: "none",
            borderRadius: 9,
            padding: "9px 0",
            fontFamily: p,
            fontWeight: 800,
            fontSize: 12.5,
            color: d.ink,
            cursor: hireBusy ? "default" : "pointer"
          },
          children: hireBusy ? "Posting..." : "Post welcome announcement"
        })]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: "#F5F1E8",
            marginBottom: 2
          },
          children: "Vendor lunches"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "Shows on Home that morning and notifies that clinic at 10am."
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 7,
            marginBottom: 7
          },
          children: [(0, i.jsx)("input", {
            type: "date",
            value: lunchDraft.on_date,
            onChange: ev => setLunchDraft(pv => ({
              ...pv,
              on_date: ev.target.value
            })),
            style: {
              flex: 1,
              background: "rgba(245,241,232,0.08)",
              border: "1px solid rgba(245,241,232,0.18)",
              borderRadius: 9,
              padding: "8px 9px",
              fontFamily: p,
              fontSize: 12.5,
              color: "#F5F1E8"
            }
          }), (0, i.jsx)("select", {
            value: lunchDraft.site,
            onChange: ev => setLunchDraft(pv => ({
              ...pv,
              site: ev.target.value
            })),
            style: {
              background: "rgba(245,241,232,0.08)",
              border: "1px solid rgba(245,241,232,0.18)",
              borderRadius: 9,
              padding: "8px 9px",
              fontFamily: p,
              fontSize: 12.5,
              color: "#F5F1E8"
            },
            children: [(0, i.jsx)("option", {
              value: "oxford",
              children: "Oxford"
            }), (0, i.jsx)("option", {
              value: "tupelo",
              children: "Tupelo"
            }), (0, i.jsx)("option", {
              value: "both",
              children: "Both"
            })]
          })]
        }), (0, i.jsx)("input", {
          value: lunchDraft.vendor,
          onChange: ev => setLunchDraft(pv => ({
            ...pv,
            vendor: ev.target.value
          })),
          placeholder: "Company bringing lunch",
          style: {
            width: "100%",
            boxSizing: "border-box",
            background: "rgba(245,241,232,0.08)",
            border: "1px solid rgba(245,241,232,0.18)",
            borderRadius: 9,
            padding: "8px 9px",
            fontFamily: p,
            fontSize: 12.5,
            color: "#F5F1E8",
            marginBottom: 7
          }
        }), (0, i.jsx)("input", {
          value: lunchDraft.note,
          onChange: ev => setLunchDraft(pv => ({
            ...pv,
            note: ev.target.value
          })),
          placeholder: "What they're presenting (optional)",
          style: {
            width: "100%",
            boxSizing: "border-box",
            background: "rgba(245,241,232,0.08)",
            border: "1px solid rgba(245,241,232,0.18)",
            borderRadius: 9,
            padding: "8px 9px",
            fontFamily: p,
            fontSize: 12.5,
            color: "#F5F1E8",
            marginBottom: 9
          }
        }), (0, i.jsx)("button", {
          onClick: async () => {
            lunchDraft.on_date && lunchDraft.vendor.trim() && (await onAddLunch({
              on_date: lunchDraft.on_date,
              site: lunchDraft.site,
              vendor: lunchDraft.vendor.trim(),
              note: lunchDraft.note.trim() || null
            }), setLunchDraft({
              on_date: "",
              site: "oxford",
              vendor: "",
              note: ""
            }))
          },
          style: {
            width: "100%",
            background: d.honey,
            border: "none",
            borderRadius: 9,
            padding: "9px 0",
            fontFamily: p,
            fontWeight: 800,
            fontSize: 12.5,
            color: d.ink,
            cursor: "pointer",
            marginBottom: 12
          },
          children: "Add lunch"
        }), (lunchRows || []).length ? (lunchRows || []).map(L => (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 9,
            padding: "8px 0",
            borderTop: "1px solid rgba(245,241,232,0.08)"
          },
          children: [(0, i.jsxs)("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [(0, i.jsxs)("div", {
              style: {
                fontFamily: p,
                fontWeight: 700,
                fontSize: 12.5,
                color: "#F5F1E8"
              },
              children: [L.vendor, " · ", L.site === "oxford" ? "Oxford" : L.site === "tupelo" ? "Tupelo" : "Both"]
            }), (0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontSize: 11,
                color: "rgba(245,241,232,0.5)"
              },
              children: L.on_date + (L.note ? " · " + L.note : "")
            })]
          }), (0, i.jsx)("button", {
            onClick: () => onRemoveLunch(L),
            style: {
              background: "transparent",
              border: "1px solid rgba(245,241,232,0.25)",
              borderRadius: 999,
              padding: "4px 10px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 10.5,
              color: "rgba(245,241,232,0.75)",
              cursor: "pointer",
              flexShrink: 0
            },
            children: "Remove"
          })]
        }, L.id)) : (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11.5,
            color: "rgba(245,241,232,0.45)"
          },
          children: "Nothing scheduled yet."
        })]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: "#F5F1E8",
            marginBottom: 2
          },
          children: "Departments"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "The list everyone picks from at signup, and the audiences a post can be aimed at. Retiring one keeps its old posts intact."
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            marginBottom: 12
          },
          children: [(0, i.jsx)("input", {
            value: deptDraft,
            onChange: ev => setDeptDraft(ev.target.value),
            placeholder: deptEditing ? "New name" : "Add a department",
            style: {
              flex: 1,
              background: "rgba(245,241,232,0.08)",
              border: "1px solid rgba(245,241,232,0.2)",
              borderRadius: 10,
              padding: "9px 11px",
              fontFamily: p,
              fontSize: 13,
              color: "#F5F1E8",
              outline: "none"
            }
          }), (0, i.jsx)("button", {
            onClick: saveDeptRow,
            style: {
              background: d.honey,
              border: "none",
              borderRadius: 10,
              padding: "9px 15px",
              fontFamily: D,
              fontWeight: 700,
              fontSize: 13,
              color: d.pine,
              cursor: "pointer"
            },
            children: deptEditing ? "Save" : "Add"
          }), deptEditing && (0, i.jsx)("button", {
            onClick: () => {
              setDeptEditing(null), setDeptDraft("")
            },
            style: {
              background: "rgba(245,241,232,0.06)",
              border: "1px solid rgba(245,241,232,0.18)",
              borderRadius: 10,
              padding: "9px 13px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              color: "rgba(245,241,232,0.75)",
              cursor: "pointer"
            },
            children: "Cancel"
          })]
        }), (0, i.jsx)("div", {
          style: {
            maxHeight: 220,
            overflowY: "auto"
          },
          children: deptRows.length === 0 ? (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 12,
              color: "rgba(245,241,232,0.5)",
              padding: "6px 0"
            },
            children: "No departments yet."
          }) : deptRows.map(dr => (0, i.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 0",
              borderBottom: "1px solid rgba(245,241,232,0.08)"
            },
            children: [(0, i.jsx)("div", {
              style: {
                flex: 1,
                minWidth: 0,
                fontFamily: p,
                fontWeight: 600,
                fontSize: 12.5,
                color: "#F5F1E8",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: dr.name
            }), (0, i.jsx)("button", {
              onClick: () => {
                setDeptEditing(dr.id), setDeptDraft(dr.name)
              },
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(245,241,232,0.85)",
                textDecoration: "underline"
              },
              children: "Rename"
            }), (0, i.jsx)("button", {
              onClick: () => {
                window.confirm("Retire " + dr.name + "? It stops appearing for new posts and signups. Old posts stay.") && onRetireDept(dr.id)
              },
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "#E9A08A",
                textDecoration: "underline"
              },
              children: "Retire"
            })]
          }, dr.id))
        })]
      }), showMockSections && !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: "#F5F1E8",
            marginBottom: 2
          },
          children: "Department managers"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "The assigned manager approves membership for that department. Tap to assign or change."
        }), (0, i.jsx)("div", {
          style: {
            maxHeight: 224,
            overflowY: "auto"
          },
          children: En.map(y => {
            let M = Pd[y.name],
              Z = hl === y.name;
            return (0, i.jsxs)("div", {
              style: {
                marginBottom: 9
              },
              children: [(0, i.jsxs)("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 9
                },
                children: [(0, i.jsxs)("div", {
                  style: {
                    flex: 1,
                    minWidth: 0
                  },
                  children: [(0, i.jsx)("div", {
                    style: {
                      fontFamily: p,
                      fontWeight: 700,
                      fontSize: 12.5,
                      color: "#F5F1E8",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    children: y.name
                  }), (0, i.jsx)("div", {
                    style: {
                      fontFamily: p,
                      fontSize: 10.5,
                      color: M ? d.secureHi : "rgba(245,241,232,0.45)"
                    },
                    children: M ? "Manager: " + M : "No manager assigned"
                  })]
                }), (0, i.jsx)("button", {
                  onClick: () => Io(Z ? null : y.name),
                  style: {
                    background: "rgba(79,182,138,0.15)",
                    border: "1px solid rgba(79,182,138,0.35)",
                    borderRadius: 8,
                    padding: "5px 10px",
                    fontFamily: p,
                    fontWeight: 700,
                    fontSize: 11,
                    color: d.secureHi,
                    cursor: "pointer",
                    flexShrink: 0
                  },
                  children: M ? "Change" : "Assign"
                })]
              }), Z && (0, i.jsxs)("div", {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 8,
                  marginBottom: 4
                },
                children: [Br.map(G => G.name).map(G => (0, i.jsx)("button", {
                  onClick: () => {
                    pl(nt => ({
                      ...nt,
                      [y.name]: G
                    })), Io(null)
                  },
                  style: {
                    border: "1px solid rgba(245,241,232,0.2)",
                    background: G === M ? "rgba(79,182,138,0.18)" : "transparent",
                    color: "#F5F1E8",
                    borderRadius: 999,
                    padding: "5px 11px",
                    fontFamily: p,
                    fontSize: 11.5,
                    fontWeight: 600,
                    cursor: "pointer"
                  },
                  children: G
                }, G)), M && (0, i.jsx)("button", {
                  onClick: () => {
                    pl(G => {
                      let nt = {
                        ...G
                      };
                      return delete nt[y.name], nt
                    }), Io(null)
                  },
                  style: {
                    border: "1px solid rgba(224,154,56,0.4)",
                    background: "transparent",
                    color: d.honey,
                    borderRadius: 999,
                    padding: "5px 11px",
                    fontFamily: p,
                    fontSize: 11.5,
                    fontWeight: 600,
                    cursor: "pointer"
                  },
                  children: "Remove"
                })]
              })]
            }, y.id)
          })
        })]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 13.5,
              color: "#F5F1E8"
            },
            children: "Rivalry challenges"
          }), !ot && (0, i.jsxs)("button", {
            onClick: () => {
              Jn(), $n(!0)
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: d.honey,
              border: "none",
              borderRadius: 999,
              padding: "5px 11px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 11.5,
              color: d.pine,
              cursor: "pointer"
            },
            children: [(0, i.jsx)(Je, {
              size: 12,
              strokeWidth: 3
            }), "New"]
          })]
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "Build here, then publish to the home feed. Marketing / admin only."
        }), ot ? (0, i.jsxs)("div", {
          children: [(0, i.jsx)("input", {
            value: ae.event,
            onChange: y => Oe({
              ...ae,
              event: y.target.value
            }),
            placeholder: "Event name (e.g. Egg Bowl Week)",
            style: {
              ...re,
              marginBottom: 10
            }
          }), [
            ["aName", "aColor", "Side 1 (e.g. Ole Miss)"],
            ["bName", "bColor", "Side 2 (e.g. Mississippi State)"]
          ].map(([y, M, Z]) => (0, i.jsxs)("div", {
            style: {
              marginBottom: 10
            },
            children: [(0, i.jsx)("input", {
              value: ae[y],
              onChange: G => Oe({
                ...ae,
                [y]: G.target.value
              }),
              placeholder: Z,
              style: re
            }), (0, i.jsx)("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 7
              },
              children: Wa.map(G => (0, i.jsx)("button", {
                onClick: () => Oe({
                  ...ae,
                  [M]: G
                }),
                style: {
                  width: 22,
                  height: 22,
                  borderRadius: 999,
                  background: G,
                  border: ae[M] === G ? "2px solid #F5F1E8" : "2px solid transparent",
                  boxShadow: "0 0 0 1px rgba(245,241,232,0.2)",
                  cursor: "pointer",
                  padding: 0
                }
              }, G))
            })]
          }, y)), (0, i.jsx)("input", {
            value: ae.wager,
            onChange: y => Oe({
              ...ae,
              wager: y.target.value
            }),
            placeholder: "The wager + cause (optional)",
            style: {
              ...re,
              marginBottom: 12
            }
          }), (0, i.jsxs)("div", {
            style: {
              display: "flex",
              gap: 8
            },
            children: [(0, i.jsx)("button", {
              onClick: ul,
              style: {
                flex: 1,
                background: d.honey,
                border: "none",
                borderRadius: 10,
                padding: "10px 0",
                fontFamily: D,
                fontWeight: 700,
                fontSize: 13,
                color: d.pine,
                cursor: "pointer"
              },
              children: bo ? "Save changes" : "Publish to feed"
            }), (0, i.jsx)("button", {
              onClick: Jn,
              style: {
                background: "rgba(245,241,232,0.06)",
                border: "1px solid rgba(245,241,232,0.18)",
                borderRadius: 10,
                padding: "10px 16px",
                fontFamily: p,
                fontWeight: 700,
                fontSize: 13,
                color: "rgba(245,241,232,0.75)",
                cursor: "pointer"
              },
              children: "Cancel"
            })]
          })]
        }) : b.length === 0 ? (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12,
            color: "rgba(245,241,232,0.5)",
            padding: "6px 0"
          },
          children: "No challenges yet. Tap New to build one."
        }) : b.map(y => (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 0",
            borderBottom: "1px solid rgba(245,241,232,0.1)"
          },
          children: [(0, i.jsxs)("div", {
            style: {
              display: "flex",
              gap: 4,
              flexShrink: 0
            },
            children: [(0, i.jsx)("div", {
              style: {
                width: 12,
                height: 12,
                borderRadius: 999,
                background: y.sideA.color
              }
            }), (0, i.jsx)("div", {
              style: {
                width: 12,
                height: 12,
                borderRadius: 999,
                background: y.sideB.color
              }
            })]
          }), (0, i.jsxs)("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [(0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontWeight: 700,
                fontSize: 12.5,
                color: "#F5F1E8",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: y.event
            }), (0, i.jsxs)("div", {
              style: {
                fontFamily: p,
                fontSize: 10.5,
                color: "rgba(245,241,232,0.5)"
              },
              children: [y.sideA.name, " vs ", y.sideB.name, " \xB7 ", y.a + y.b, " in"]
            })]
          }), (0, i.jsx)("button", {
            onClick: () => Rd(y),
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 700,
              color: d.secureHi,
              textDecoration: "underline"
            },
            children: "Edit"
          }), (0, i.jsx)("button", {
            onClick: () => v(y.id),
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 700,
              color: "#E9A08A",
              textDecoration: "underline"
            },
            children: "Remove"
          })]
        }, y.id))]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 13.5,
              color: "#F5F1E8"
            },
            children: "SOG Merch"
          }), !sl && (0, i.jsxs)("button", {
            onClick: () => {
              Kn(), Vn(!0)
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: d.honey,
              border: "none",
              borderRadius: 999,
              padding: "5px 11px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 11.5,
              color: d.pine,
              cursor: "pointer"
            },
            children: [(0, i.jsx)(Je, {
              size: 12,
              strokeWidth: 3
            }), "New item"]
          })]
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "A few featured highlights, plus one link to the full catalog."
        }), (0, i.jsxs)("div", {
          style: {
            background: "rgba(245,241,232,0.04)",
            border: "1px solid rgba(245,241,232,0.12)",
            borderRadius: 12,
            padding: 11,
            marginBottom: 14
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "rgba(245,241,232,0.5)",
              marginBottom: 8
            },
            children: "Full catalog link & ordering window"
          }), (0, i.jsx)("input", {
            value: catDraft.title !== void 0 ? catDraft.title : E.title || "",
            onChange: y => {
              let v = y.target.value;
              setCatDraft(d => ({
                ...d,
                title: v
              }))
            },
            onBlur: () => catCommit("title"),
            placeholder: "Drop title (e.g. Spring/Summer 2026)",
            style: {
              ...re,
              marginBottom: 8
            }
          }), (0, i.jsx)("input", {
            value: catDraft.url !== void 0 ? catDraft.url : E.url || "",
            onChange: y => {
              let v = y.target.value;
              setCatDraft(d => ({
                ...d,
                url: v
              }))
            },
            onBlur: () => catCommit("url"),
            placeholder: "Catalog link (store or Google Form)",
            style: {
              ...re,
              marginBottom: 8
            }
          }), (0, i.jsx)("input", {
            value: catDraft.deadline !== void 0 ? catDraft.deadline : E.deadline || "",
            onChange: y => {
              let v = y.target.value;
              setCatDraft(d => ({
                ...d,
                deadline: v
              }))
            },
            onBlur: () => catCommit("deadline"),
            placeholder: "Deadline text (e.g. Order by Mar 15)",
            style: {
              ...re,
              marginBottom: 8
            }
          }), (0, i.jsxs)("button", {
            onClick: async () => {
              let willOpen = !E.open;
              setMerchMsg("");
              await P({
                open: willOpen
              });
              if (!willOpen || !doAnnounceMerch) return;
              if (!window.confirm("SOG Merch is now open. Send a notification to everyone?")) return;
              setMerchMsg("Sending...");
              setMerchMsg(await doAnnounceMerch({
                ...E,
                open: !0
              }))
            },
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              background: "rgba(245,241,232,0.06)",
              border: "1px solid rgba(245,241,232,0.18)",
              borderRadius: 10,
              padding: "9px 12px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              color: "#F5F1E8",
              cursor: "pointer"
            },
            children: [(0, i.jsx)("span", {
              children: "Ordering window \u2014 employees only see the store while this is Open"
            }), (0, i.jsx)("span", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 5,
                color: E.open ? d.secureHi : "rgba(245,241,232,0.55)"
              },
              children: E.open ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(pe, {
                  size: 13,
                  strokeWidth: 3
                }), "Open"]
              }) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(kr, {
                  size: 12
                }), "Closed"]
              })
            })]
          }), merchMsg ? (0, i.jsx)("div", {
            style: {
              marginTop: 8,
              fontFamily: p,
              fontSize: 11.5,
              color: "rgba(245,241,232,0.7)"
            },
            children: merchMsg
          }) : null]
        }), sl ? (0, i.jsxs)("div", {
          children: [(0, i.jsx)("input", {
            value: He.name,
            onChange: y => Ka({
              ...He,
              name: y.target.value
            }),
            placeholder: "Featured item name",
            style: {
              ...re,
              marginBottom: 8
            }
          }), (0, i.jsx)("input", {
            value: He.price,
            onChange: y => Ka({
              ...He,
              price: y.target.value
            }),
            placeholder: "Price (e.g. $45)",
            style: {
              ...re,
              marginBottom: 8
            }
          }), (0, i.jsx)("input", {
            value: He.desc,
            onChange: y => Ka({
              ...He,
              desc: y.target.value
            }),
            placeholder: "Short description",
            style: {
              ...re,
              marginBottom: 8
            }
          }), (0, i.jsx)("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: 12
            },
            children: Wa.map(y => (0, i.jsx)("button", {
              onClick: () => Ka({
                ...He,
                color: y
              }),
              style: {
                width: 22,
                height: 22,
                borderRadius: 999,
                background: y,
                border: He.color === y ? "2px solid #F5F1E8" : "2px solid transparent",
                boxShadow: "0 0 0 1px rgba(245,241,232,0.2)",
                cursor: "pointer",
                padding: 0
              }
            }, y))
          }), (0, i.jsxs)("div", {
            style: {
              display: "flex",
              gap: 8
            },
            children: [(0, i.jsx)("button", {
              onClick: Td,
              style: {
                flex: 1,
                background: d.honey,
                border: "none",
                borderRadius: 10,
                padding: "10px 0",
                fontFamily: D,
                fontWeight: 700,
                fontSize: 13,
                color: d.pine,
                cursor: "pointer"
              },
              children: Gn ? "Save changes" : "Add featured item"
            }), (0, i.jsx)("button", {
              onClick: Kn,
              style: {
                background: "rgba(245,241,232,0.06)",
                border: "1px solid rgba(245,241,232,0.18)",
                borderRadius: 10,
                padding: "10px 16px",
                fontFamily: p,
                fontWeight: 700,
                fontSize: 13,
                color: "rgba(245,241,232,0.75)",
                cursor: "pointer"
              },
              children: "Cancel"
            })]
          })]
        }) : x.length === 0 ? (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12,
            color: "rgba(245,241,232,0.5)",
            padding: "6px 0"
          },
          children: "No featured items yet. Tap New item."
        }) : x.map(y => (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 0",
            borderBottom: "1px solid rgba(245,241,232,0.1)"
          },
          children: [(0, i.jsx)("div", {
            style: {
              width: 12,
              height: 12,
              borderRadius: 999,
              background: y.color,
              flexShrink: 0
            }
          }), (0, i.jsxs)("div", {
            style: {
              flex: 1,
              minWidth: 0,
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              color: "#F5F1E8",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: [y.name, " \xB7 ", y.price]
          }), (0, i.jsx)("button", {
            onClick: () => Ad(y),
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 700,
              color: "rgba(245,241,232,0.85)",
              textDecoration: "underline"
            },
            children: "Edit"
          }), (0, i.jsx)("button", {
            onClick: () => C(y.id),
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 700,
              color: "#E9A08A",
              textDecoration: "underline"
            },
            children: "Del"
          })]
        }, y.id))]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: "#F5F1E8",
            marginBottom: 2
          },
          children: "Birthdays"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "Import the roster once, then add/remove as it changes. Only day & month are kept - the year is dropped. Faces come from each person's own profile photo; add one here for anyone who hasn't set theirs."
        }), (0, i.jsxs)("button", {
          onClick: () => Un.current && Un.current.click(),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            width: "100%",
            background: "rgba(79,182,138,0.14)",
            border: "1px solid rgba(79,182,138,0.4)",
            borderRadius: 10,
            padding: "10px 0",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 12.5,
            color: d.secureHi,
            cursor: "pointer",
            marginBottom: 12
          },
          children: [(0, i.jsx)(pn, {
            size: 14
          }), "Import roster (CSV)"]
        }), (0, i.jsx)("input", {
          ref: Un,
          type: "file",
          accept: ".csv,text/csv",
          onChange: rl,
          style: {
            display: "none"
          }
        }), (0, i.jsxs)("div", {
          style: {
            background: "rgba(245,241,232,0.04)",
            border: "1px solid rgba(245,241,232,0.12)",
            borderRadius: 12,
            padding: 11,
            marginBottom: 12
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "rgba(245,241,232,0.5)",
              marginBottom: 8
            },
            children: "Cupcake announcement"
          }), (0, i.jsx)("input", {
            value: Ye.msg || "",
            onChange: y => Ut({
              msg: y.target.value
            }),
            placeholder: "Cupcake message",
            style: {
              ...re,
              marginBottom: 8
            }
          }), (0, i.jsx)("button", {
            onClick: () => Ut({
              on: !Ye.on
            }),
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              width: "100%",
              border: "none",
              borderRadius: 10,
              padding: "9px 0",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              cursor: "pointer",
              background: Ye.on ? "rgba(79,182,138,0.15)" : d.honey,
              color: Ye.on ? d.secureHi : d.pine
            },
            children: Ye.on ? (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(pe, {
                size: 13,
                strokeWidth: 3
              }), "Showing on the board"]
            }) : (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(Sr, {
                size: 13
              }), "Post cupcake announcement"]
            })
          })]
        }), Nt && (0, i.jsxs)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: d.honey,
            marginBottom: 6
          },
          children: ["Editing ", Nt.name]
        }), (0, i.jsx)("input", {
          value: Nn,
          onChange: y => Or(y.target.value),
          placeholder: Nt ? "Name" : "Add a person - name",
          style: {
            ...re,
            marginBottom: 8
          }
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            marginBottom: 12
          },
          children: [(0, i.jsx)("input", {
            type: "date",
            value: So,
            onChange: y => Wn(y.target.value),
            style: {
              ...re,
              flex: 1
            }
          }), (0, i.jsx)("button", {
            onClick: _d,
            style: {
              background: d.honey,
              border: "none",
              borderRadius: 10,
              padding: "0 20px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 13,
              color: d.pine,
              cursor: "pointer"
            },
            children: Nt ? "Save" : "Add"
          }), Nt && (0, i.jsx)("button", {
            onClick: qn,
            style: {
              background: "none",
              border: "1px solid rgba(245,241,232,0.25)",
              borderRadius: 10,
              padding: "0 14px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              color: "rgba(245,241,232,0.8)",
              cursor: "pointer"
            },
            children: "Cancel"
          })]
        }), (0, i.jsx)("input", {
          ref: aa,
          type: "file",
          accept: "image/*",
          onChange: Ld,
          style: {
            display: "none"
          }
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 6
          },
          children: [(0, i.jsxs)("div", {
            style: {
              fontFamily: p,
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "rgba(245,241,232,0.5)"
            },
            children: ["Roster \xB7 ", W.length]
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 10.5,
              color: "rgba(245,241,232,0.45)"
            },
            children: "Tap a face to add a photo"
          })]
        }), (0, i.jsx)("div", {
          style: {
            maxHeight: 176,
            overflowY: "auto"
          },
          children: [...W].sort((y, M) => y.month - M.month || y.day - M.day).map((y, M) => (0, i.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 0",
              borderBottom: "1px solid rgba(245,241,232,0.08)"
            },
            children: [(0, i.jsx)(al, {
              name: y.name
            }), (0, i.jsx)("div", {
              style: {
                flex: 1,
                minWidth: 0,
                fontFamily: p,
                fontWeight: 600,
                fontSize: 12.5,
                color: "#F5F1E8",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: y.name
            }), (0, i.jsxs)("div", {
              style: {
                fontFamily: p,
                fontSize: 11.5,
                color: d.secureHi,
                fontWeight: 700,
                flexShrink: 0
              },
              children: [wd[y.month], " ", y.day]
            }), h(y.name) && (0, i.jsx)("button", {
              onClick: () => g(y.name),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(245,241,232,0.55)",
                textDecoration: "underline",
                flexShrink: 0
              },
              children: "Clear"
            }), (0, i.jsx)("button", {
              onClick: () => Hn(y),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(245,241,232,0.85)",
                textDecoration: "underline",
                flexShrink: 0
              },
              children: "Edit"
            }), (0, i.jsx)("button", {
              onClick: () => X(y.name, y.month, y.day),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "#E9A08A",
                textDecoration: "underline",
                flexShrink: 0
              },
              children: "Del"
            })]
          }, y.name + M))
        })]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 13.5,
              color: "#F5F1E8"
            },
            children: "Clinic Cup"
          }), (0, i.jsx)("button", {
            onClick: () => c({
              on: !u.on
            }),
            style: {
              background: u.on ? d.honey : "rgba(245,241,232,0.12)",
              border: "none",
              borderRadius: 999,
              padding: "5px 11px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 11.5,
              color: u.on ? d.pine : "rgba(245,241,232,0.75)",
              cursor: "pointer"
            },
            children: u.on ? "Live on Home" : "Hidden"
          })]
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "A quarterly drive between locations, scored per person so headcount doesn't decide it. Keep it to goods - never money."
        }), (0, i.jsx)("input", {
          value: se.title,
          onChange: y => oa({
            ...se,
            title: y.target.value
          }),
          placeholder: "Drive name (Fall Food Drive)",
          style: {
            ...re,
            marginBottom: 8
          }
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            marginBottom: 8
          },
          children: [(0, i.jsx)("input", {
            value: se.season,
            onChange: y => oa({
              ...se,
              season: y.target.value
            }),
            placeholder: "Q3 2026",
            style: {
              ...re,
              flex: 1
            }
          }), (0, i.jsx)("input", {
            value: se.unit,
            onChange: y => oa({
              ...se,
              unit: y.target.value
            }),
            placeholder: "cans",
            style: {
              ...re,
              flex: 1
            }
          })]
        }), (0, i.jsx)("input", {
          value: se.cause,
          onChange: y => oa({
            ...se,
            cause: y.target.value
          }),
          placeholder: "Where it goes (North Mississippi food pantries)",
          style: {
            ...re,
            marginBottom: 8
          }
        }), (0, i.jsx)("input", {
          value: se.ends,
          onChange: y => oa({
            ...se,
            ends: y.target.value
          }),
          placeholder: "Ends (September 30)",
          style: {
            ...re,
            marginBottom: 10
          }
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "rgba(245,241,232,0.5)",
            marginBottom: 7
          },
          children: "Sides \xB7 staff count sets the per-person math"
        }), se.sides.map((y, M) => (0, i.jsxs)("div", {
          style: {
            marginBottom: 9
          },
          children: [(0, i.jsxs)("div", {
            style: {
              display: "flex",
              gap: 8,
              marginBottom: 6
            },
            children: [(0, i.jsx)("input", {
              value: y.name,
              onChange: Z => oa({
                ...se,
                sides: se.sides.map((G, nt) => nt === M ? {
                  ...G,
                  name: Z.target.value
                } : G)
              }),
              placeholder: "Location",
              style: {
                ...re,
                flex: 2
              }
            }), (0, i.jsx)("input", {
              value: y.staff,
              onChange: Z => oa({
                ...se,
                sides: se.sides.map((G, nt) => nt === M ? {
                  ...G,
                  staff: Z.target.value.replace(/[^0-9]/g, "")
                } : G)
              }),
              inputMode: "numeric",
              placeholder: "Staff",
              style: {
                ...re,
                flex: 1
              }
            })]
          }), (0, i.jsx)("div", {
            style: {
              display: "flex",
              gap: 5,
              flexWrap: "wrap"
            },
            children: Wa.map(Z => (0, i.jsx)("button", {
              onClick: () => oa({
                ...se,
                sides: se.sides.map((G, nt) => nt === M ? {
                  ...G,
                  color: Z
                } : G)
              }),
              style: {
                width: 20,
                height: 20,
                borderRadius: 6,
                background: Z,
                border: y.color === Z ? "2px solid #F5F1E8" : "1px solid rgba(245,241,232,0.2)",
                cursor: "pointer",
                padding: 0
              }
            }, Z))
          })]
        }, y.id)), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            marginTop: 4
          },
          children: [(0, i.jsx)("button", {
            onClick: () => c({
              title: se.title.trim() || u.title,
              season: se.season.trim() || u.season,
              unit: se.unit.trim() || u.unit,
              cause: se.cause.trim() || u.cause,
              ends: se.ends.trim() || u.ends,
              sides: se.sides.map(y => ({
                ...y,
                staff: parseInt(y.staff, 10) || 0
              }))
            }),
            style: {
              flex: 1,
              background: d.honey,
              border: "none",
              borderRadius: 10,
              padding: "10px 0",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 13,
              color: d.pine,
              cursor: "pointer"
            },
            children: "Save drive"
          }), (0, i.jsx)("button", {
            onClick: () => {
              f()
            },
            style: {
              background: "none",
              border: "1px solid rgba(245,241,232,0.25)",
              borderRadius: 10,
              padding: "0 14px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              color: "rgba(245,241,232,0.8)",
              cursor: "pointer"
            },
            children: "End season"
          })]
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            color: "rgba(245,241,232,0.45)",
            marginTop: 8
          },
          children: "Ending the season files the winner into the cup history and takes the card off Home."
        })]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: "#F5F1E8",
            marginBottom: 2
          },
          children: "Work anniversaries"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "Import hire dates once, then add/remove as the roster changes. The app counts the years automatically. Faces work the same as birthdays - a person's own profile photo wins."
        }), (0, i.jsxs)("button", {
          onClick: () => At.current && At.current.click(),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            width: "100%",
            background: "rgba(79,182,138,0.14)",
            border: "1px solid rgba(79,182,138,0.4)",
            borderRadius: 10,
            padding: "10px 0",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 12.5,
            color: d.secureHi,
            cursor: "pointer",
            marginBottom: 12
          },
          children: [(0, i.jsx)(pn, {
            size: 14
          }), "Import roster (CSV: name, hire date)"]
        }), (0, i.jsx)("input", {
          ref: At,
          type: "file",
          accept: ".csv,text/csv",
          onChange: ol,
          style: {
            display: "none"
          }
        }), La && (0, i.jsxs)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: d.honey,
            marginBottom: 6
          },
          children: ["Editing ", La.name]
        }), (0, i.jsx)("input", {
          value: jn,
          onChange: y => ra(y.target.value),
          placeholder: La ? "Name" : "Add a person - name",
          style: {
            ...re,
            marginBottom: 8
          }
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            marginBottom: 12
          },
          children: [(0, i.jsx)("input", {
            type: "date",
            value: Ga,
            onChange: y => ft(y.target.value),
            style: {
              ...re,
              flex: 1
            }
          }), (0, i.jsx)("button", {
            onClick: Cd,
            style: {
              background: d.honey,
              border: "none",
              borderRadius: 10,
              padding: "0 20px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 13,
              color: d.pine,
              cursor: "pointer"
            },
            children: La ? "Save" : "Add"
          }), La && (0, i.jsx)("button", {
            onClick: ko,
            style: {
              background: "none",
              border: "1px solid rgba(245,241,232,0.25)",
              borderRadius: 10,
              padding: "0 14px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              color: "rgba(245,241,232,0.8)",
              cursor: "pointer"
            },
            children: "Cancel"
          })]
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 6
          },
          children: [(0, i.jsxs)("div", {
            style: {
              fontFamily: p,
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "rgba(245,241,232,0.5)"
            },
            children: ["Roster \xB7 ", ie.length]
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 10.5,
              color: "rgba(245,241,232,0.45)"
            },
            children: "Tap a face to add a photo"
          })]
        }), (0, i.jsx)("div", {
          style: {
            maxHeight: 176,
            overflowY: "auto"
          },
          children: [...ie].sort((y, M) => y.month - M.month || y.day - M.day).map((y, M) => (0, i.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 0",
              borderBottom: "1px solid rgba(245,241,232,0.08)"
            },
            children: [(0, i.jsx)(al, {
              name: y.name
            }), (0, i.jsx)("div", {
              style: {
                flex: 1,
                minWidth: 0,
                fontFamily: p,
                fontWeight: 600,
                fontSize: 12.5,
                color: "#F5F1E8",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: y.name
            }), (0, i.jsxs)("div", {
              style: {
                fontFamily: p,
                fontSize: 11.5,
                color: d.secureHi,
                fontWeight: 700,
                flexShrink: 0
              },
              children: [wd[y.month], " ", y.day, " \xB7 ", _v(y), "yr"]
            }), h(y.name) && (0, i.jsx)("button", {
              onClick: () => g(y.name),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(245,241,232,0.55)",
                textDecoration: "underline",
                flexShrink: 0
              },
              children: "Clear"
            }), (0, i.jsx)("button", {
              onClick: () => Id(y),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(245,241,232,0.85)",
                textDecoration: "underline",
                flexShrink: 0
              },
              children: "Edit"
            }), (0, i.jsx)("button", {
              onClick: () => Pn(y.name, y.month, y.day, y.year),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "#E9A08A",
                textDecoration: "underline",
                flexShrink: 0
              },
              children: "Del"
            })]
          }, y.name + M))
        })]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 13.5,
              color: "#F5F1E8"
            },
            children: "Recognition"
          }), !Bn && (0, i.jsxs)("button", {
            onClick: () => {
              ba(), Dn(!0)
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: d.honey,
              border: "none",
              borderRadius: 999,
              padding: "5px 11px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 11.5,
              color: d.pine,
              cursor: "pointer"
            },
            children: [(0, i.jsx)(Je, {
              size: 12,
              strokeWidth: 3
            }), "New"]
          })]
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "Post fresh or paste one in from Facebook \u2014 then Share any post back out to SOG's socials. New posts sit at the top of the feed for 24 hours, then file onto the Recognition board."
        }), Bn ? (0, i.jsxs)("div", {
          children: [(0, i.jsx)("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: 10
            },
            children: Sd.map(y => (0, i.jsx)("button", {
              onClick: () => _t({
                ...ge,
                cat: y.id
              }),
              style: {
                border: "1px solid " + (ge.cat === y.id ? y.color : "rgba(245,241,232,0.18)"),
                background: ge.cat === y.id ? y.color + "26" : "transparent",
                color: ge.cat === y.id ? "#F5F1E8" : "rgba(245,241,232,0.65)",
                borderRadius: 999,
                padding: "5px 11px",
                fontFamily: p,
                fontSize: 11.5,
                fontWeight: 600,
                cursor: "pointer"
              },
              children: y.name
            }, y.id))
          }), (0, i.jsx)("input", {
            value: ge.title,
            onChange: y => _t({
              ...ge,
              title: y.target.value
            }),
            placeholder: "Headline",
            style: {
              ...re,
              marginBottom: 8
            }
          }), (0, i.jsx)("textarea", {
            value: ge.body,
            onChange: y => _t({
              ...ge,
              body: y.target.value
            }),
            placeholder: "The details (a patient's kind words, who graduated, etc.)",
            rows: 3,
            style: {
              ...re,
              marginBottom: 8,
              resize: "none"
            }
          }), (0, i.jsx)("input", {
            value: ge.link,
            onChange: y => _t({
              ...ge,
              link: y.target.value
            }),
            placeholder: "Link (e.g. Best Of ballot) - optional",
            style: {
              ...re,
              marginBottom: 12
            }
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "rgba(245,241,232,0.5)",
              marginBottom: 7
            },
            children: "Feature at top for"
          }), (0, i.jsx)("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: 12
            },
            children: [
              ["3 days", 3],
              ["1 week", 7],
              ["2 weeks", 14],
              ["30 days", 30]
            ].map(([y, M]) => (0, i.jsx)("button", {
              onClick: () => _t({
                ...ge,
                days: M
              }),
              style: {
                border: "1px solid " + (ge.days === M ? d.secureHi : "rgba(245,241,232,0.18)"),
                background: ge.days === M ? "rgba(79,182,138,0.18)" : "transparent",
                color: ge.days === M ? d.secureHi : "rgba(245,241,232,0.65)",
                borderRadius: 999,
                padding: "5px 11px",
                fontFamily: p,
                fontSize: 11.5,
                fontWeight: 700,
                cursor: "pointer"
              },
              children: y
            }, M))
          }), (0, i.jsxs)("div", {
            style: {
              display: "flex",
              gap: 8
            },
            children: [(0, i.jsx)("button", {
              onClick: tl,
              style: {
                flex: 1,
                background: d.honey,
                border: "none",
                borderRadius: 10,
                padding: "10px 0",
                fontFamily: D,
                fontWeight: 700,
                fontSize: 13,
                color: d.pine,
                cursor: "pointer"
              },
              children: wo ? "Save changes" : "Post recognition"
            }), (0, i.jsx)("button", {
              onClick: ba,
              style: {
                background: "rgba(245,241,232,0.06)",
                border: "1px solid rgba(245,241,232,0.18)",
                borderRadius: 10,
                padding: "10px 16px",
                fontFamily: p,
                fontWeight: 700,
                fontSize: 13,
                color: "rgba(245,241,232,0.75)",
                cursor: "pointer"
              },
              children: "Cancel"
            })]
          })]
        }) : Fr ? (() => {
          let y = Fr.title + `

` + Fr.body + (Fr.link ? `

` + Fr.link : "") + `

#SpecialtyOrthopedicGroup`;
          return (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontSize: 11,
                color: "rgba(245,241,232,0.6)",
                marginBottom: 8
              },
              children: "Copy this and paste it onto SOG's Facebook or Instagram. (Grab any photo separately.)"
            }), (0, i.jsx)("textarea", {
              readOnly: !0,
              value: y,
              rows: 6,
              style: {
                ...re,
                marginBottom: 10,
                resize: "none",
                lineHeight: 1.5
              }
            }), (0, i.jsxs)("div", {
              style: {
                display: "flex",
                gap: 8
              },
              children: [(0, i.jsx)("button", {
                onClick: () => {
                  try {
                    navigator.clipboard.writeText(y)
                  } catch {}
                  $a(!0)
                },
                style: {
                  flex: 1,
                  background: d.honey,
                  border: "none",
                  borderRadius: 10,
                  padding: "10px 0",
                  fontFamily: D,
                  fontWeight: 700,
                  fontSize: 13,
                  color: d.pine,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6
                },
                children: Zs ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(pe, {
                    size: 14,
                    strokeWidth: 3
                  }), "Copied"]
                }) : (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(br, {
                    size: 14
                  }), "Copy for social"]
                })
              }), (0, i.jsx)("button", {
                onClick: () => {
                  Mn(null), $a(!1)
                },
                style: {
                  background: "rgba(245,241,232,0.06)",
                  border: "1px solid rgba(245,241,232,0.18)",
                  borderRadius: 10,
                  padding: "10px 16px",
                  fontFamily: p,
                  fontWeight: 700,
                  fontSize: 13,
                  color: "rgba(245,241,232,0.75)",
                  cursor: "pointer"
                },
                children: "Done"
              })]
            })]
          })
        })() : ja.length === 0 ? (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12,
            color: "rgba(245,241,232,0.5)",
            padding: "6px 0"
          },
          children: "No recognition posts yet. Tap New."
        }) : ja.map(y => {
          let M = Gp(y.cat),
            Z = (y.pinUntil || 0) > Date.now(),
            G = y.postedAt && Date.now() - y.postedAt < Tv;
          return (0, i.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 0",
              borderBottom: "1px solid rgba(245,241,232,0.1)"
            },
            children: [(0, i.jsx)("div", {
              style: {
                width: 12,
                height: 12,
                borderRadius: 999,
                background: M.color,
                flexShrink: 0
              }
            }), (0, i.jsxs)("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [(0, i.jsx)("div", {
                style: {
                  fontFamily: p,
                  fontWeight: 700,
                  fontSize: 12.5,
                  color: "#F5F1E8",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: y.title
              }), (0, i.jsxs)("div", {
                style: {
                  fontFamily: p,
                  fontSize: 10.5,
                  color: Z ? d.secureHi : "rgba(245,241,232,0.45)"
                },
                children: [M.name, " \xB7 ", Z ? Math.max(1, Math.ceil((y.pinUntil - Date.now()) / 864e5)) + "d left" : "expired", G ? " \xB7 on the feed" : ""]
              })]
            }), !Z && (0, i.jsx)("button", {
              onClick: () => $(y.id, {
                pinUntil: Date.now() + 7 * 864e5
              }),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: d.secureHi,
                textDecoration: "underline"
              },
              children: "Re-pin"
            }), (0, i.jsx)("button", {
              onClick: () => {
                Mn(y), $a(!1)
              },
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: d.honey,
                textDecoration: "underline"
              },
              children: "Share"
            }), (0, i.jsx)("button", {
              onClick: () => el(y),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(245,241,232,0.85)",
                textDecoration: "underline"
              },
              children: "Edit"
            }), (0, i.jsx)("button", {
              onClick: () => me(y.id),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "#E9A08A",
                textDecoration: "underline"
              },
              children: "Del"
            })]
          }, y.id)
        })]
      }), !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 13.5,
              color: "#F5F1E8"
            },
            children: "This-or-that questions"
          }), !vo && (0, i.jsxs)("button", {
            onClick: () => {
              ka(), q(!0)
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: d.honey,
              border: "none",
              borderRadius: 999,
              padding: "5px 11px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 11.5,
              color: d.pine,
              cursor: "pointer"
            },
            children: [(0, i.jsx)(Je, {
              size: 12,
              strokeWidth: 3
            }), "New"]
          })]
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "The profile poll. The app rotates a fresh set of 4 every two weeks from this pool."
        }), vo ? (0, i.jsxs)("div", {
          children: [(0, i.jsx)("input", {
            value: Ct,
            onChange: y => ta(y.target.value),
            placeholder: "Option 1 (e.g. Dog)",
            style: {
              ...re,
              marginBottom: 8
            }
          }), (0, i.jsx)("input", {
            value: Sa,
            onChange: y => Pr(y.target.value),
            placeholder: "Option 2 (e.g. Cat)",
            style: {
              ...re,
              marginBottom: 12
            }
          }), (0, i.jsxs)("div", {
            style: {
              display: "flex",
              gap: 8
            },
            children: [(0, i.jsx)("button", {
              onClick: qa,
              style: {
                flex: 1,
                background: d.honey,
                border: "none",
                borderRadius: 10,
                padding: "10px 0",
                fontFamily: D,
                fontWeight: 700,
                fontSize: 13,
                color: d.pine,
                cursor: "pointer"
              },
              children: ke ? "Save changes" : "Add question"
            }), (0, i.jsx)("button", {
              onClick: ka,
              style: {
                background: "rgba(245,241,232,0.06)",
                border: "1px solid rgba(245,241,232,0.18)",
                borderRadius: 10,
                padding: "10px 16px",
                fontFamily: p,
                fontWeight: 700,
                fontSize: 13,
                color: "rgba(245,241,232,0.75)",
                cursor: "pointer"
              },
              children: "Cancel"
            })]
          })]
        }) : (0, i.jsx)("div", {
          style: {
            maxHeight: 190,
            overflowY: "auto"
          },
          children: Er.length === 0 ? (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 12,
              color: "rgba(245,241,232,0.5)",
              padding: "6px 0"
            },
            children: "No questions yet. Tap New."
          }) : Er.map(y => (0, i.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 0",
              borderBottom: "1px solid rgba(245,241,232,0.08)"
            },
            children: [(0, i.jsxs)("div", {
              style: {
                flex: 1,
                minWidth: 0,
                fontFamily: p,
                fontWeight: 600,
                fontSize: 12.5,
                color: "#F5F1E8",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: [y.a, " ", (0, i.jsx)("span", {
                style: {
                  color: "rgba(245,241,232,0.4)"
                },
                children: "vs"
              }), " ", y.b]
            }), (0, i.jsx)("button", {
              onClick: () => xo(y),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(245,241,232,0.85)",
                textDecoration: "underline"
              },
              children: "Edit"
            }), (0, i.jsx)("button", {
              onClick: () => On(y.id),
              style: {
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "#E9A08A",
                textDecoration: "underline"
              },
              children: "Del"
            })]
          }, y.id))
        })]
      }), showMockSections && !Se && (0, i.jsxs)("div", {
        style: {
          margin: "0 14px 12px",
          background: "rgba(245,241,232,0.05)",
          border: "1px solid rgba(245,241,232,0.1)",
          borderRadius: 14,
          padding: 13
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: "#F5F1E8",
            marginBottom: 2
          },
          children: "Reminder channels"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            color: "rgba(245,241,232,0.5)",
            marginBottom: 12
          },
          children: "How the app pings a sender who has an open item. Pluggable - flip a channel on or off."
        }), Bd.map(y => (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10
          },
          children: [(0, i.jsxs)("div", {
            style: {
              flex: 1
            },
            children: [(0, i.jsxs)("div", {
              style: {
                fontFamily: p,
                fontSize: 12.5,
                fontWeight: 600,
                color: "#F5F1E8"
              },
              children: [y.label, y.fixed && (0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontSize: 9,
                  fontWeight: 700,
                  color: d.secureHi,
                  marginLeft: 6,
                  letterSpacing: "0.06em"
                },
                children: "CORE"
              })]
            }), (0, i.jsx)("div", {
              style: {
                fontFamily: p,
                fontSize: 10.5,
                color: "rgba(245,241,232,0.45)"
              },
              children: y.note
            })]
          }), (0, i.jsx)("button", {
            onClick: () => !y.fixed && Xn(y.k),
            disabled: y.fixed,
            style: {
              width: 40,
              height: 23,
              borderRadius: 999,
              border: "none",
              cursor: y.fixed ? "default" : "pointer",
              background: dl[y.k] ? d.secureHi : "rgba(245,241,232,0.15)",
              position: "relative",
              flexShrink: 0,
              opacity: y.fixed ? .65 : 1
            },
            children: (0, i.jsx)("span", {
              style: {
                position: "absolute",
                top: 3,
                left: dl[y.k] ? 20 : 3,
                width: 17,
                height: 17,
                borderRadius: 999,
                background: "#fff",
                transition: "left 0.15s"
              }
            })
          })]
        }, y.k)), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginTop: 6,
            paddingTop: 10,
            borderTop: "1px solid rgba(245,241,232,0.1)",
            fontFamily: p,
            fontSize: 10.5,
            color: "rgba(245,241,232,0.5)"
          },
          children: [(0, i.jsx)(St, {
            size: 11,
            color: d.secureHi
          }), " Every channel uses PHI-safe wording - never a patient name."]
        })]
      }), showMockSections && !Se && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "rgba(245,241,232,0.4)",
            margin: "0 14px 8px"
          },
          children: "Message trail"
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            margin: "0 14px 10px",
            background: "rgba(245,241,232,0.06)",
            border: "1px solid rgba(245,241,232,0.14)",
            borderRadius: 10,
            padding: "8px 11px"
          },
          children: [(0, i.jsx)(ao, {
            size: 14,
            color: "rgba(245,241,232,0.4)"
          }), (0, i.jsx)("span", {
            style: {
              fontFamily: p,
              fontSize: 12.5,
              color: "rgba(245,241,232,0.4)"
            },
            children: "Filter by patient, sender, date, or action"
          })]
        })]
      }), showMockSections && (0, i.jsx)("div", {
        style: {
          padding: "0 14px 16px"
        },
        children: Se ? (0, i.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 10,
            minHeight: 200,
            padding: "20px 30px"
          },
          children: [(0, i.jsx)(wt, {
            size: 22,
            color: "rgba(245,241,232,0.4)"
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 12.5,
              color: "rgba(245,241,232,0.55)",
              lineHeight: 1.5
            },
            children: "The secure message audit log is admin-only. Managers don't have access to patient-message records."
          })]
        }) : Tb.map(y => (0, i.jsxs)("div", {
          style: {
            background: "rgba(245,241,232,0.05)",
            border: "1px solid rgba(245,241,232,0.1)",
            borderRadius: 16,
            padding: 14,
            marginBottom: 12
          },
          children: [(0, i.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 9
            },
            children: [(0, i.jsxs)("span", {
              style: {
                fontFamily: p,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(245,241,232,0.55)",
                letterSpacing: "0.03em"
              },
              children: ["MSG #", y.id]
            }), (0, i.jsxs)("span", {
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontFamily: p,
                fontSize: 10.5,
                fontWeight: 700,
                color: d.secureHi,
                background: "rgba(79,182,138,0.14)",
                padding: "2px 8px",
                borderRadius: 999
              },
              children: [(0, i.jsx)(wt, {
                size: 10,
                strokeWidth: 2.6
              }), "Sealed \xB7 ", y.hash]
            })]
          }), (0, i.jsx)("div", {
            style: {
              background: "rgba(245,241,232,0.06)",
              borderLeft: "2px solid rgba(245,241,232,0.25)",
              borderRadius: "0 8px 8px 0",
              padding: "8px 11px",
              fontFamily: p,
              fontSize: 12.5,
              color: "#F5F1E8",
              lineHeight: 1.4,
              marginBottom: 10
            },
            children: y.content
          }), (0, i.jsxs)("div", {
            style: {
              fontFamily: p,
              fontSize: 11,
              color: "rgba(245,241,232,0.5)",
              marginBottom: 12
            },
            children: ["To: ", y.scope, " \xB7 ", y.date]
          }), (0, i.jsx)("div", {
            children: y.events.map((M, Z) => (0, i.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 9,
                marginBottom: Z === y.events.length - 1 ? 0 : 8
              },
              children: [(0, i.jsx)("span", {
                style: {
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  background: jp[M.action],
                  flexShrink: 0
                }
              }), (0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontSize: 10.5,
                  color: "rgba(245,241,232,0.4)",
                  width: 58,
                  flexShrink: 0,
                  fontVariantNumeric: "tabular-nums"
                },
                children: M.t
              }), (0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontSize: 12,
                  fontWeight: 700,
                  color: jp[M.action] === "rgba(245,241,232,0.4)" ? "rgba(245,241,232,0.75)" : jp[M.action]
                },
                children: M.action
              }), (0, i.jsxs)("span", {
                style: {
                  fontFamily: p,
                  fontSize: 12,
                  color: "rgba(245,241,232,0.6)"
                },
                children: ["\xB7 ", M.who]
              })]
            }, Z))
          }), (0, i.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 5,
              marginTop: 12,
              paddingTop: 10,
              borderTop: "1px solid rgba(245,241,232,0.1)",
              fontFamily: p,
              fontSize: 10.5,
              color: "rgba(245,241,232,0.45)"
            },
            children: [(0, i.jsx)(kr, {
              size: 11
            }), " Immutable \xB7 retained until ", y.retain]
          })]
        }, y.id))
      })]
    })]
  })
}

function Eb({
  joined: e,
  onAdmin: t,
  isAdmin: a = !1,
  saveProfile: r = () => {},
  pushState: o = "checking",
  pushErr: n = "",
  enablePush: s = () => {},
  disablePush: l = () => {},
  notifyPrefs: u = {},
  setNotifyPref: c = () => {},
  sendTestPush: f = () => {},
  testMsg: h = "",
  onRestart: m,
  questions: g = [],
  photo: b,
  setPhoto: k,
  photoErr: A = "",
  profile: v,
  signOut: x,
  email: w,
  allDepts: _ = [],
  myDeptIds: C = [],
  joinDept: E = () => {},
  leaveDept: P = () => {},
  deptErr: W = "",
  myVotes: K = {},
  voteQ: B = () => {},
  onOpenCodes: openCodesScreen = () => {}
}) {
  let X = kd.filter(q => e.has(q.id) || q.subs && q.subs.some(ke => e.has(q.id + ":" + ke))),
    ne = (0, I.useRef)(null),
    Ye = q => {
      let ke = q.target.files && q.target.files[0];
      if (!ke) return;
      let je = new FileReader;
      je.onload = () => k(je.result), je.readAsDataURL(ke)
    },
    Ut = Math.floor(Date.now() / (14 * 864e5)) % (g.length || 1),
    ja = g.slice(Ut).concat(g.slice(0, Ut)).slice(0, 4),
    It = K,
    [$, me] = (0, I.useState)(!1),
    [ie, We] = (0, I.useState)({
      name: "",
      home: "",
      school: "",
      ask: ""
    }),
    [Rr, Pn] = (0, I.useState)({
      name: "",
      home: "",
      school: "",
      ask: ""
    }),
    [go, Er] = (0, I.useState)("");
  (0, I.useEffect)(() => {
    We({
      name: v && v.display_name || "",
      home: v && v.home_base || "",
      school: v && v.school || "",
      ask: v && v.ask_about || ""
    })
  }, [v && v.display_name, v && v.home_base, v && v.school, v && v.ask_about]);
  let yo = () => {
      Pn(ie), me(!0)
    },
    Fn = () => {
      We(Rr), me(!1)
    },
    On = async () => {
      if (Er(""), !ie.name.trim()) {
        Er("Your name can't be blank.");
        return
      }
      if (await r({
          display_name: ie.name.trim(),
          home_base: ie.home,
          school: ie.school,
          ask_about: ie.ask
        }) === !1) {
        Er("Couldn't save that.");
        return
      }
      me(!1)
    }, Se = {
      name: "Your name as coworkers know it",
      home: "Oxford, Mississippi",
      school: "Where you went",
      ask: "What you could talk about all day"
    }, Ha = [{
      k: "name",
      icon: hn,
      label: "Name"
    }, {
      k: "home",
      icon: ln,
      label: "Home base"
    }, {
      k: "school",
      icon: Lr,
      label: "School"
    }, {
      k: "ask",
      icon: Zt,
      label: "Ask me about"
    }], vo = ({
      icon: q,
      label: ke,
      value: je
    }) => (0, i.jsxs)("div", {
      style: {
        display: "flex",
        gap: 11,
        padding: "12px 0",
        borderBottom: "1px solid " + d.line
      },
      children: [(0, i.jsx)(q, {
        size: 17,
        color: d.honey,
        strokeWidth: 2.2,
        style: {
          marginTop: 1
        }
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            fontWeight: 700,
            color: d.faint,
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          },
          children: ke
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 14,
            color: je ? d.ink : d.faint,
            fontWeight: 500,
            fontStyle: je ? "normal" : "italic"
          },
          children: je || "Not added yet"
        })]
      })]
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      style: {
        background: d.pine,
        padding: "22px 16px 20px",
        color: "#F5F1E8"
      },
      children: (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 14
        },
        children: [(0, i.jsxs)("div", {
          style: {
            position: "relative",
            width: 62,
            height: 62,
            flexShrink: 0
          },
          children: [b ? (0, i.jsx)("img", {
            src: b,
            alt: "",
            style: {
              width: 62,
              height: 62,
              borderRadius: 999,
              objectFit: "cover",
              display: "block"
            }
          }) : (0, i.jsx)(Ne, {
            name: v && v.display_name || mo,
            size: 62,
            bg: d.honey
          }), (0, i.jsx)("button", {
            onClick: () => ne.current && ne.current.click(),
            style: {
              position: "absolute",
              right: -2,
              bottom: -2,
              width: 24,
              height: 24,
              borderRadius: 999,
              background: d.honey,
              border: "2px solid " + d.pine,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: 0
            },
            children: (0, i.jsx)(Zr, {
              size: 12,
              color: d.pine,
              strokeWidth: 2.5
            })
          }), (0, i.jsx)("input", {
            ref: ne,
            type: "file",
            accept: "image/*",
            onChange: Ye,
            style: {
              display: "none"
            }
          })]
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 21
            },
            children: ie.name || v && v.display_name || mo
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 13,
              opacity: .85
            },
            children: _.filter(q => C.indexOf(q.id) !== -1).map(q => q.name).join(" \xB7 ") || "No department yet"
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 11.5,
              opacity: .6
            },
            children: w
          }), (0, i.jsx)("button", {
            onClick: () => b ? k(null) : ne.current && ne.current.click(),
            style: {
              marginTop: 4,
              background: "none",
              border: "none",
              padding: 0,
              fontFamily: p,
              fontSize: 11.5,
              fontWeight: 600,
              color: "rgba(245,241,232,0.72)",
              cursor: "pointer",
              textDecoration: "underline"
            },
            children: b ? "Remove photo" : "Add a profile photo"
          }), A && (0, i.jsxs)("div", {
            style: {
              fontFamily: p,
              fontSize: 11,
              color: "#B4402F",
              fontWeight: 700,
              marginTop: 3
            },
            children: ["Photo didn't save \u2014 ", A]
          })]
        })]
      })
    }), (0, i.jsxs)("div", {
      style: {
        padding: "6px 16px 20px"
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14,
          color: d.ink,
          margin: "14px 0 6px"
        },
        children: "My interests"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12,
          color: d.faint,
          marginBottom: 8
        },
        children: "Tap a field to add your story - level, what you're after, who you want to meet."
      }), (0, i.jsx)("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: 7,
          marginBottom: 8
        },
        children: X.length ? X.map(q => (0, i.jsx)(ob, {
          interest: q,
          active: !0
        }, q.id)) : (0, i.jsx)("span", {
          style: {
            fontFamily: p,
            fontSize: 12.5,
            color: d.faint
          },
          children: "Join a field on the Groups tab and it shows up here."
        })
      }), (0, i.jsxs)("div", {
        style: {
          padding: "12px 0",
          borderBottom: "1px solid " + d.line
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11,
            fontWeight: 700,
            color: d.faint,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: 7
          },
          children: "Work location"
        }), (0, i.jsx)("div", {
          style: {
            display: "flex",
            gap: 7
          },
          children: [
            ["oxford", "Oxford"],
            ["tupelo", "Tupelo"],
            ["both", "Both"]
          ].map(([wsKey, wsLabel]) => {
            let wsOn = ((v && v.work_site) || "both") === wsKey;
            return (0, i.jsx)("button", {
              onClick: () => r({
                work_site: wsKey
              }),
              style: {
                flex: 1,
                background: wsOn ? d.pine : d.card,
                border: "1px solid " + (wsOn ? d.pine : d.line),
                borderRadius: 999,
                padding: "8px 0",
                fontFamily: p,
                fontWeight: 700,
                fontSize: 12.5,
                color: wsOn ? "#F5F1E8" : d.sub,
                cursor: "pointer"
              },
              children: wsLabel
            }, wsKey)
          })
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11.5,
            color: d.faint,
            marginTop: 6
          },
          children: "Which clinic's lunch alerts you get. Pick Both if you travel."
        })]
      }), Ha.map(({
        k: q,
        icon: ke,
        label: je
      }) => (0, i.jsxs)("div", {
        onClick: () => {
          $ || yo()
        },
        style: {
          display: "flex",
          gap: 11,
          padding: "12px 0",
          borderBottom: "1px solid " + d.line,
          cursor: $ ? "default" : "pointer"
        },
        children: [(0, i.jsx)(ke, {
          size: 17,
          color: d.honey,
          strokeWidth: 2.2,
          style: {
            marginTop: 1
          }
        }), (0, i.jsxs)("div", {
          style: {
            flex: 1
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 11,
              fontWeight: 700,
              color: d.faint,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            },
            children: je
          }), $ ? (0, i.jsx)("input", {
            value: ie[q],
            onChange: Ct => We(ta => ({
              ...ta,
              [q]: Ct.target.value
            })),
            placeholder: Se[q],
            style: {
              width: "100%",
              border: "2px solid " + d.pine,
              borderRadius: 10,
              padding: "13px 12px",
              fontFamily: p,
              fontSize: 16,
              fontWeight: 600,
              color: d.ink,
              outline: "none",
              marginTop: 6,
              boxSizing: "border-box",
              background: "#fff",
              boxShadow: "inset 0 2px 5px rgba(30,58,50,0.14)"
            }
          }) : (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 14,
              color: ie[q] ? d.ink : d.honey,
              fontWeight: ie[q] ? 500 : 600,
              fontStyle: (ie[q], "normal")
            },
            children: ie[q] || "Tap to add"
          })]
        })]
      }, q)), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14,
          color: d.ink,
          margin: "20px 0 8px"
        },
        children: "Notifications"
      }), o === "needs-homescreen" && (0, i.jsxs)("div", {
        style: {
          background: d.honeySoft,
          borderRadius: 12,
          padding: "12px 13px"
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 13,
            fontWeight: 700,
            color: "#8A5A12",
            marginBottom: 5
          },
          children: "Add The Break Room to your home screen first"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12.5,
            color: "#8A5A12",
            lineHeight: 1.5
          },
          children: "iPhones only allow notifications for apps saved to the home screen. Tap the Share button in Safari, choose Add to Home Screen, then open The Break Room from there and come back."
        })]
      }), o === "blocked" && (0, i.jsx)("div", {
        style: {
          background: "rgba(180,64,47,0.12)",
          border: "1px solid rgba(180,64,47,0.35)",
          borderRadius: 12,
          padding: "12px 13px",
          fontFamily: p,
          fontSize: 12.5,
          color: "#8A2F22",
          lineHeight: 1.5
        },
        children: "Notifications are switched off for this app in your device settings. You'll need to turn them back on there - the app can't ask again once it's been declined."
      }), o === "unsupported" && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          color: d.faint,
          lineHeight: 1.5
        },
        children: "This browser doesn't support notifications. Try Safari or Chrome."
      }), (o === "off" || o === "on") && (0, i.jsxs)("div", {
        children: [(0, i.jsx)("button", {
          onClick: o === "on" ? l : s,
          style: {
            width: "100%",
            background: o === "on" ? d.card : d.pine,
            border: o === "on" ? "1px solid " + d.line : "none",
            borderRadius: 12,
            padding: "12px 0",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 13.5,
            color: o === "on" ? d.sub : "#F5F1E8",
            cursor: "pointer"
          },
          children: o === "on" ? "Turn off on this device" : "Turn on notifications"
        }), o === "on" && (0, i.jsxs)("div", {
          style: {
            marginTop: 10
          },
          children: [(0, i.jsx)("button", {
            onClick: f,
            style: {
              width: "100%",
              background: d.card,
              border: "1px solid " + d.line,
              borderRadius: 12,
              padding: "10px 0",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 12.5,
              color: d.pine,
              cursor: "pointer",
              marginBottom: 4
            },
            children: "Send a test notification"
          }), h && (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 11.5,
              color: h.startsWith("Failed") ? "#B4402F" : d.faint,
              fontWeight: 600,
              padding: "2px 0 8px"
            },
            children: h
          }), Xk.map(({
            k: q,
            label: ke
          }) => (0, i.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "9px 0",
              borderBottom: "1px solid " + d.line
            },
            children: [(0, i.jsx)("span", {
              style: {
                fontFamily: p,
                fontSize: 13.5,
                color: d.ink
              },
              children: ke
            }), (0, i.jsx)("button", {
              onClick: () => c(q, !u[q]),
              style: {
                width: 44,
                height: 25,
                borderRadius: 999,
                border: "none",
                background: u[q] ? d.pine : d.line,
                cursor: "pointer",
                position: "relative",
                flexShrink: 0,
                padding: 0
              },
              children: (0, i.jsx)("span", {
                style: {
                  position: "absolute",
                  top: 3,
                  left: u[q] ? 22 : 3,
                  width: 19,
                  height: 19,
                  borderRadius: 999,
                  background: "#fff"
                }
              })
            })]
          }, q))]
        })]
      }), n && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 11.5,
          color: "#B4402F",
          fontWeight: 700,
          marginTop: 8
        },
        children: n
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14,
          color: d.ink,
          margin: "20px 0 8px"
        },
        children: "My departments"
      }), _.length === 0 && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          color: d.faint,
          paddingBottom: 6
        },
        children: "Loading\u2026"
      }), _.filter(q => C.indexOf(q.id) !== -1).map(q => (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 0",
          borderBottom: "1px solid " + d.line
        },
        children: [(0, i.jsx)(ca, {
          size: 16,
          color: d.honey,
          strokeWidth: 2.2
        }), (0, i.jsx)("span", {
          style: {
            flex: 1,
            fontFamily: p,
            fontSize: 14,
            color: d.ink,
            fontWeight: 500
          },
          children: q.name
        }), (0, i.jsx)("button", {
          onClick: () => P(q.id),
          style: {
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            fontFamily: p,
            fontSize: 11.5,
            fontWeight: 700,
            color: d.faint,
            textDecoration: "underline"
          },
          children: "Leave"
        })]
      }, q.id)), C.length === 0 && _.length > 0 && (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 12.5,
          color: d.sub,
          paddingBottom: 6
        },
        children: "You're not in one yet. Pick yours below - it decides what you see and where you can post."
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: d.faint,
          margin: "14px 0 8px"
        },
        children: "Join a department"
      }), (0, i.jsx)("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: 7
        },
        children: _.filter(q => C.indexOf(q.id) === -1).map(q => (0, i.jsx)("button", {
          onClick: () => E(q.id),
          style: {
            border: "1px solid " + d.line,
            background: d.card,
            cursor: "pointer",
            fontFamily: p,
            fontSize: 12,
            fontWeight: 600,
            padding: "6px 11px",
            borderRadius: 999,
            color: d.sub
          },
          children: q.name
        }, q.id))
      }), W && (0, i.jsxs)("div", {
        style: {
          marginTop: 10,
          background: "#FBEAE7",
          color: "#B4402F",
          borderRadius: 10,
          padding: "10px 12px",
          fontFamily: p,
          fontSize: 12,
          lineHeight: 1.45
        },
        children: ["Couldn't save: ", W]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: 5,
          marginTop: 10,
          fontFamily: p,
          fontSize: 11,
          color: d.faint,
          lineHeight: 1.4
        },
        children: [(0, i.jsx)(St, {
          size: 11,
          color: "#3E7C57",
          style: {
            flexShrink: 0,
            marginTop: 1
          }
        }), "Anyone here can join any department, so treat a department post as readable by the whole practice. An admin can remove someone who joined by mistake."]
      }), $ ? (0, i.jsxs)("div", {
        children: [go && (0, i.jsx)("div", {
          style: {
            marginTop: 10,
            fontFamily: p,
            fontSize: 12,
            fontWeight: 700,
            color: "#B4402F"
          },
          children: go
        }), (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            marginTop: 16
          },
          children: [(0, i.jsx)("button", {
            onClick: On,
            style: {
              flex: 1,
              background: d.pine,
              border: "none",
              borderRadius: 12,
              padding: "11px 0",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 13.5,
              color: "#F5F1E8",
              cursor: "pointer"
            },
            children: "Save changes"
          }), (0, i.jsx)("button", {
            onClick: Fn,
            style: {
              background: d.card,
              border: "1px solid " + d.line,
              borderRadius: 12,
              padding: "11px 18px",
              fontFamily: p,
              fontWeight: 700,
              fontSize: 13.5,
              color: d.sub,
              cursor: "pointer"
            },
            children: "Cancel"
          })]
        })]
      }) : (0, i.jsx)("button", {
        onClick: yo,
        style: {
          marginTop: 16,
          width: "100%",
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 12,
          padding: "11px 0",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 13.5,
          color: d.pine,
          cursor: "pointer"
        },
        children: "Edit profile"
      }), a && (0, i.jsxs)("button", {
        onClick: t,
        style: {
          marginTop: 10,
          width: "100%",
          background: d.secure,
          border: "none",
          borderRadius: 12,
          padding: "11px 0",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 13.5,
          color: "#F5F1E8",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7
        },
        children: [(0, i.jsx)(St, {
          size: 15,
          color: d.secureHi
        }), " Admin console"]
      }), (0, i.jsxs)("button", {
        onClick: openCodesScreen,
        style: {
          marginTop: 10,
          width: "100%",
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 12,
          padding: "11px 0",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 13.5,
          color: d.pine,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7
        },
        children: [(0, i.jsx)(St, {
          size: 15,
          color: d.honey
        }), " Emergency codes"]
      }), (0, i.jsx)("button", {
        onClick: x,
        style: {
          width: "100%",
          marginTop: 12,
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 12,
          padding: "12px 0",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 13,
          color: d.sub,
          cursor: "pointer"
        },
        children: "Sign out"
      }), (0, i.jsx)("div", {
        style: {
          textAlign: "center",
          marginTop: 10,
          fontFamily: p,
          fontSize: 10.5,
          color: d.faint,
          letterSpacing: "0.03em"
        },
        children: "build 2026-09-02 · 73"
      }), (0, i.jsx)("button", {
        onClick: m,
        style: {
          display: "block",
          margin: "16px auto 0",
          background: "none",
          border: "none",
          fontFamily: p,
          fontSize: 11,
          fontWeight: 600,
          color: d.faint,
          textDecoration: "underline",
          cursor: "pointer"
        },
        children: "Restart onboarding"
      }), (0, i.jsx)("div", {
        style: {
          textAlign: "center",
          marginTop: 14,
          fontFamily: p,
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: d.faint
        },
        children: "Powered by CommonGround"
      })]
    })]
  })
}

function Pb({
  item: e,
  back: t
}) {
  let [a, r] = (0, I.useState)(!1), o = e.readBy.length + e.notYet.length, n = !!e.requireAck, s = ({
    name: l,
    seen: u
  }) => {
    let c = rb(l);
    return (0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "9px 0",
        borderBottom: "1px solid " + d.line
      },
      children: [(0, i.jsx)(Ne, {
        name: l,
        size: 34,
        bg: u ? d.pine2 : d.faint
      }), (0, i.jsxs)("div", {
        style: {
          flex: 1
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontWeight: 700,
            fontSize: 13.5,
            color: d.ink
          },
          children: l
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 11.5,
            color: d.faint
          },
          children: c ? c.role + " \xB7 " + c.loc : "Staff"
        })]
      }), u ? (0, i.jsxs)("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          fontFamily: p,
          fontSize: 11,
          fontWeight: 700,
          color: "#3E7C57"
        },
        children: [(0, i.jsx)(pe, {
          size: 13,
          strokeWidth: 3
        }), n ? "Acknowledged" : "Read"]
      }) : (0, i.jsx)("span", {
        style: {
          fontFamily: p,
          fontSize: 11,
          fontWeight: 700,
          color: d.honey
        },
        children: "Not yet"
      })]
    })
  };
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.paper
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "14px 16px 18px",
        color: "#F5F1E8"
      },
      children: [(0, i.jsxs)("button", {
        onClick: t,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.75)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 12
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " Back"]
      }), (0, i.jsxs)("div", {
        style: {
          fontFamily: p,
          fontSize: 11.5,
          opacity: .7,
          marginBottom: 3
        },
        children: [n ? "Acknowledgments" : "Read receipts", " \xB7 ", e.audience]
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 18,
          lineHeight: 1.2
        },
        children: e.title
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginTop: 12
        },
        children: [(0, i.jsx)("div", {
          style: {
            flex: 1,
            height: 7,
            background: "rgba(245,241,232,0.18)",
            borderRadius: 999,
            overflow: "hidden"
          },
          children: (0, i.jsx)("div", {
            style: {
              width: Math.round(e.readBy.length / o * 100) + "%",
              height: "100%",
              background: d.secureHi
            }
          })
        }), (0, i.jsxs)("span", {
          style: {
            fontFamily: p,
            fontSize: 12,
            fontWeight: 700
          },
          children: [e.readBy.length, "/", o, " ", n ? "acked" : "read"]
        })]
      })]
    }), (0, i.jsxs)("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "14px 16px 20px"
      },
      children: [e.notYet.length > 0 && (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 8
        },
        children: [(0, i.jsxs)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 13.5,
            color: d.ink
          },
          children: [n ? "Not yet acknowledged" : "Not yet seen", " (", e.notYet.length, ")"]
        }), (0, i.jsx)("button", {
          onClick: () => r(!0),
          disabled: a,
          style: {
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: a ? "none" : d.honey,
            border: "none",
            borderRadius: 999,
            padding: a ? 0 : "5px 11px",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 11.5,
            color: a ? d.sub : "#fff",
            cursor: a ? "default" : "pointer"
          },
          children: a ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(pe, {
              size: 12,
              strokeWidth: 3
            }), "Reminder sent"]
          }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(wr, {
              size: 12
            }), "Remind them"]
          })
        })]
      }), e.notYet.map(l => (0, i.jsx)(s, {
        name: l,
        seen: !1
      }, l)), (0, i.jsxs)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 13.5,
          color: d.ink,
          margin: "18px 0 8px"
        },
        children: [n ? "Acknowledged" : "Read", " (", e.readBy.length, ")"]
      }), e.readBy.map(l => (0, i.jsx)(s, {
        name: l,
        seen: !0
      }, l))]
    })]
  })
}

function Fb({
  item: e,
  acked: t,
  onAck: a,
  back: r
}) {
  let [o, n] = (0, I.useState)(!1), s = l => {
    let u = l.currentTarget;
    u.scrollTop + u.clientHeight >= u.scrollHeight - 28 && n(!0)
  };
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.paper
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "14px 18px 18px",
        color: "#F5F1E8"
      },
      children: [(0, i.jsxs)("button", {
        onClick: r,
        style: {
          background: "none",
          border: "none",
          color: "rgba(245,241,232,0.75)",
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontFamily: p,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 12
        },
        children: [(0, i.jsx)(Me, {
          size: 16
        }), " Back"]
      }), (0, i.jsx)("div", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          background: d.honey,
          color: "#3A2A08",
          fontFamily: p,
          fontSize: 10.5,
          fontWeight: 800,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          padding: "3px 9px",
          borderRadius: 999,
          marginBottom: 8
        },
        children: "Action required"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 19,
          lineHeight: 1.2
        },
        children: e.title
      }), (0, i.jsxs)("div", {
        style: {
          fontFamily: p,
          fontSize: 12,
          opacity: .72,
          marginTop: 4
        },
        children: [e.from, " \xB7 ", e.role, " \xB7 ", e.time]
      })]
    }), (0, i.jsxs)("div", {
      onScroll: s,
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "18px 18px 8px"
      },
      children: [e.policy.map((l, u) => (0, i.jsxs)("div", {
        style: {
          marginBottom: 16
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 14.5,
            color: d.pine,
            marginBottom: 4
          },
          children: l.h
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 13.5,
            color: d.ink,
            lineHeight: 1.5
          },
          children: l.b
        })]
      }, u)), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 0 14px",
          fontFamily: p,
          fontSize: 11.5,
          color: d.faint
        },
        children: [(0, i.jsx)(pe, {
          size: 13,
          strokeWidth: 3,
          color: d.honey
        }), " You've reached the end of the policy."]
      })]
    }), (0, i.jsx)("div", {
      style: {
        borderTop: "1px solid " + d.line,
        background: d.card,
        padding: "12px 16px",
        paddingBottom: 18
      },
      children: t ? (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14,
          color: "#3E7C57"
        },
        children: [(0, i.jsx)(pe, {
          size: 17,
          strokeWidth: 3
        }), "You acknowledged this"]
      }) : (0, i.jsx)("button", {
        onClick: a,
        disabled: !o,
        style: {
          width: "100%",
          border: "none",
          borderRadius: 13,
          padding: "14px 0",
          fontFamily: D,
          fontWeight: 700,
          fontSize: 15,
          cursor: o ? "pointer" : "default",
          background: o ? d.honey : d.line,
          color: o ? d.pine : d.faint,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7
        },
        children: o ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(pe, {
            size: 16,
            strokeWidth: 3
          }), "Got it \u2014 acknowledge"]
        }) : "Scroll to the end to acknowledge"
      })
    })]
  })
}

function Ob({
  listings: e = [],
  addListing: t = () => {},
  toggleSold: a = () => {},
  removeListing: r = () => {},
  onMessage: o = () => {},
  meId: n = null,
  isAdmin: s = !1,
  err: l = ""
}) {
  let [u, c] = (0, I.useState)("all"), [f, h] = (0, I.useState)(!1), [m, g] = (0, I.useState)(!1), [b, k] = (0, I.useState)({
    title: "",
    price: "",
    cat: "furniture",
    desc: "",
    photo: null
  }), A = (0, I.useRef)(null), v = async C => {
    let E = C.target.files && C.target.files[0];
    if (C.target.value = "", !E) return;
    let P = await Av(E, 1200, .8);
    k(W => ({
      ...W,
      photo: P
    }))
  }, x = {
    width: "100%",
    border: "1px solid " + d.line,
    borderRadius: 10,
    padding: "10px 12px",
    fontFamily: p,
    fontSize: 14,
    color: d.ink,
    outline: "none",
    background: d.paper,
    boxSizing: "border-box"
  }, w = async () => {
    if (!b.title.trim() || m) return;
    g(!0);
    let C = await t({
      title: b.title.trim(),
      price: b.price.trim(),
      cat: b.cat,
      desc: b.desc.trim(),
      photo: b.photo
    });
    g(!1), C && (k({
      title: "",
      price: "",
      cat: "furniture",
      desc: "",
      photo: null
    }), h(!1))
  }, _ = e.filter(C => u === "all" || C.cat === u);
  return (0, i.jsxs)("div", {
    style: {
      padding: "16px 16px 24px"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 3
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 800,
          fontSize: 22,
          color: d.ink
        },
        children: "Marketplace"
      }), (0, i.jsx)("div", {
        style: {
          width: 34,
          height: 34,
          borderRadius: 10,
          background: d.honey + "22",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: (0, i.jsx)(oo, {
          size: 17,
          color: d.honey,
          strokeWidth: 2.3
        })
      })]
    }), (0, i.jsx)("div", {
      style: {
        fontFamily: p,
        fontSize: 12.5,
        color: d.faint,
        marginBottom: 14
      },
      children: "Buy and sell with coworkers."
    }), f ? (0, i.jsxs)("div", {
      style: {
        background: d.card,
        border: "1px solid " + d.line,
        borderRadius: 14,
        padding: 13,
        marginBottom: 14
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 700,
          fontSize: 14,
          color: d.ink,
          marginBottom: 10
        },
        children: "List an item"
      }), (0, i.jsx)("input", {
        value: b.title,
        onChange: C => k({
          ...b,
          title: C.target.value
        }),
        placeholder: "What are you selling?",
        style: x
      }), (0, i.jsx)("input", {
        value: b.price,
        onChange: C => k({
          ...b,
          price: C.target.value
        }),
        placeholder: "Price (e.g. $50, or Free)",
        style: {
          ...x,
          marginTop: 8
        }
      }), (0, i.jsx)("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          margin: "10px 0"
        },
        children: Ys.map(C => (0, i.jsx)("button", {
          onClick: () => k({
            ...b,
            cat: C.id
          }),
          style: {
            border: "1px solid " + (b.cat === C.id ? C.color : d.line),
            background: b.cat === C.id ? C.color + "18" : "#fff",
            color: b.cat === C.id ? C.color : d.sub,
            borderRadius: 999,
            padding: "5px 11px",
            fontFamily: p,
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer"
          },
          children: C.name
        }, C.id))
      }), (0, i.jsx)("textarea", {
        value: b.desc,
        onChange: C => k({
          ...b,
          desc: C.target.value
        }),
        placeholder: "Add a detail or two (optional)",
        rows: 2,
        style: {
          ...x,
          resize: "none"
        }
      }), (0, i.jsx)("input", {
        ref: A,
        type: "file",
        accept: "image/*",
        onChange: v,
        style: {
          display: "none"
        }
      }), b.photo && (0, i.jsxs)("div", {
        style: {
          position: "relative",
          marginTop: 10,
          width: 90
        },
        children: [(0, i.jsx)("img", {
          src: b.photo,
          alt: "",
          style: {
            width: 90,
            height: 90,
            borderRadius: 10,
            objectFit: "cover",
            display: "block"
          }
        }), (0, i.jsx)("button", {
          onClick: () => k({
            ...b,
            photo: null
          }),
          style: {
            position: "absolute",
            top: -6,
            right: -6,
            width: 22,
            height: 22,
            borderRadius: 999,
            border: "none",
            background: d.ink,
            color: "#fff",
            fontFamily: p,
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            lineHeight: 1
          },
          children: "\xD7"
        })]
      }), (0, i.jsxs)("button", {
        onClick: () => A.current && A.current.click(),
        style: {
          marginTop: 10,
          border: "1px solid " + d.line,
          background: "#fff",
          borderRadius: 10,
          padding: "8px 12px",
          fontFamily: p,
          fontWeight: 700,
          fontSize: 12.5,
          color: d.pine,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 6
        },
        children: [(0, i.jsx)(Zr, {
          size: 14
        }), b.photo ? "Change photo" : "Add a photo"]
      }), l && (0, i.jsx)("div", {
        style: {
          marginTop: 9,
          background: "rgba(180,64,47,0.12)",
          border: "1px solid rgba(180,64,47,0.4)",
          borderRadius: 9,
          padding: "8px 10px",
          fontFamily: p,
          fontSize: 12,
          color: "#8A2F22"
        },
        children: l
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          gap: 8,
          marginTop: 10
        },
        children: [(0, i.jsx)("button", {
          onClick: w,
          style: {
            flex: 1,
            background: d.pine,
            border: "none",
            borderRadius: 10,
            padding: "10px 0",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 13.5,
            color: "#F5F1E8",
            cursor: m ? "default" : "pointer",
            opacity: m ? .7 : 1
          },
          children: m ? "Posting\u2026" : "Post listing"
        }), (0, i.jsx)("button", {
          onClick: () => h(!1),
          style: {
            background: "#fff",
            border: "1px solid " + d.line,
            borderRadius: 10,
            padding: "10px 16px",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 13.5,
            color: d.sub,
            cursor: "pointer"
          },
          children: "Cancel"
        })]
      })]
    }) : (0, i.jsxs)("button", {
      onClick: () => h(!0),
      style: {
        width: "100%",
        background: d.honey,
        border: "none",
        borderRadius: 12,
        padding: "12px 0",
        fontFamily: D,
        fontWeight: 700,
        fontSize: 14.5,
        color: d.pine,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        marginBottom: 14
      },
      children: [(0, i.jsx)(Je, {
        size: 16,
        strokeWidth: 3
      }), "Post an item"]
    }), (0, i.jsx)("div", {
      style: {
        display: "flex",
        gap: 7,
        flexWrap: "wrap",
        marginBottom: 14
      },
      children: [{
        id: "all",
        name: "All"
      }, ...Ys].map(C => (0, i.jsx)("button", {
        onClick: () => c(C.id),
        style: {
          border: "1px solid " + (u === C.id ? d.pine : d.line),
          background: u === C.id ? d.pine : "#fff",
          color: u === C.id ? "#F5F1E8" : d.sub,
          borderRadius: 999,
          padding: "6px 12px",
          fontFamily: p,
          fontSize: 12.5,
          fontWeight: 600,
          cursor: "pointer"
        },
        children: C.name
      }, C.id))
    }), _.length === 0 ? (0, i.jsx)("div", {
      style: {
        fontFamily: p,
        fontSize: 13.5,
        color: d.faint,
        textAlign: "center",
        padding: "24px 0"
      },
      children: "Crickets. Be the first to unload something."
    }) : _.map(C => {
      let E = qk(C.cat),
        P = E.icon;
      return (0, i.jsxs)("div", {
        style: {
          display: "flex",
          gap: 12,
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 15,
          padding: 12,
          marginBottom: 10,
          opacity: C.sold ? .6 : 1
        },
        children: [C.photo ? (0, i.jsx)("img", {
          src: C.photo,
          alt: "",
          style: {
            width: 58,
            height: 58,
            borderRadius: 12,
            objectFit: "cover",
            flexShrink: 0,
            background: E.color + "1A"
          }
        }) : (0, i.jsx)("div", {
          style: {
            width: 58,
            height: 58,
            borderRadius: 12,
            background: E.color + "1A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          },
          children: (0, i.jsx)(P, {
            size: 24,
            color: E.color,
            strokeWidth: 2
          })
        }), (0, i.jsxs)("div", {
          style: {
            flex: 1,
            minWidth: 0
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 700,
              fontSize: 14.5,
              color: d.ink,
              lineHeight: 1.2
            },
            children: C.title
          }), (0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 800,
              fontSize: 15,
              color: C.price === "Free" ? "#2E8A85" : d.honey,
              margin: "2px 0 4px"
            },
            children: C.price
          }), (0, i.jsxs)("div", {
            style: {
              fontFamily: p,
              fontSize: 11.5,
              color: d.faint,
              marginBottom: 9
            },
            children: [E.name, " \xB7 ", C.seller, " \xB7 ", C.time, C.sold ? " \xB7 SOLD" : ""]
          }), (0, i.jsxs)("div", {
            style: {
              display: "flex",
              gap: 7,
              flexWrap: "wrap"
            },
            children: [C.mine ? (0, i.jsx)("button", {
              onClick: () => a(C.id, !C.sold),
              style: {
                border: "1px solid " + (C.sold ? d.line : d.honey),
                background: C.sold ? "#fff" : d.honey + "18",
                borderRadius: 9,
                padding: "6px 12px",
                fontFamily: p,
                fontWeight: 700,
                fontSize: 12,
                color: C.sold ? d.faint : "#B4772A",
                cursor: "pointer"
              },
              children: C.sold ? "Sold \u2713" : "Mark sold"
            }) : (0, i.jsxs)("button", {
              disabled: C.sold,
              onClick: () => o(C.sellerId, C.seller, C.title),
              style: {
                border: "none",
                background: C.sold ? d.line : d.pine,
                borderRadius: 9,
                padding: "6px 14px",
                fontFamily: p,
                fontWeight: 700,
                fontSize: 12,
                color: C.sold ? d.faint : "#F5F1E8",
                cursor: C.sold ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: 5
              },
              children: [(0, i.jsx)(Da, {
                size: 13
              }), "Message seller"]
            }), (C.mine || s) && (0, i.jsx)("button", {
              onClick: () => {
                window.confirm('Take down "' + C.title + '"?') && r(C.id)
              },
              style: {
                border: "1px solid " + d.line,
                background: "#fff",
                borderRadius: 9,
                padding: "6px 12px",
                fontFamily: p,
                fontWeight: 700,
                fontSize: 12,
                color: d.faint,
                cursor: "pointer"
              },
              children: C.mine ? "Take down" : "Remove"
            })]
          })]
        })]
      }, C.id)
    }), (0, i.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 6,
        marginTop: 8,
        background: d.honeySoft,
        borderRadius: 10,
        padding: "9px 11px"
      },
      children: [(0, i.jsx)(Qt, {
        size: 13,
        color: "#8A5A12",
        style: {
          marginTop: 1,
          flexShrink: 0
        }
      }), (0, i.jsx)("span", {
        style: {
          fontFamily: p,
          fontSize: 11.5,
          color: "#8A5A12",
          lineHeight: 1.4
        },
        children: "Arrange payment directly with the seller. CommonGround never handles money - it just connects you."
      })]
    })]
  })
}
var Bb = [{
  id: "home",
  label: "Home",
  icon: os
}, {
  id: "groups",
  label: "Groups",
  icon: ys
}, {
  id: "market",
  label: "Market",
  icon: oo
}, {
  id: "messages",
  label: "Chats",
  icon: Da
}, {
  id: "people",
  label: "People",
  icon: ao
}, {
  id: "me",
  label: "Me",
  icon: hn
}];

function Db() {
  let [e, t] = (0, I.useState)("in"), [a, r] = (0, I.useState)(""), [o, n] = (0, I.useState)(En[0].name), [s, l] = (0, I.useState)(""), [u, c] = (0, I.useState)(""), [f, h] = (0, I.useState)(""), [m, g] = (0, I.useState)(!1), b = async () => {
    if (h(""), g(!0), e === "up") {
      if (!a.trim()) return g(!1), h("Add your name - it's what shows on your posts.");
      let {
        error: A
      } = await F.auth.signUp({
        email: s.trim(),
        password: u,
        options: {
          data: {
            display_name: a.trim(),
            dept: o
          }
        }
      });
      if (g(!1), A) return h(A.message)
    } else {
      let {
        error: A
      } = await F.auth.signInWithPassword({
        email: s.trim(),
        password: u
      });
      if (g(!1), A) return h(A.message)
    }
  }, k = {
    width: "100%",
    border: "1px solid " + d.line,
    borderRadius: 11,
    padding: "12px 13px",
    fontFamily: p,
    fontSize: 16,
    color: d.ink,
    background: d.paper,
    outline: "none",
    marginBottom: 9,
    boxSizing: "border-box"
  };
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: d.paper,
      overflowY: "auto"
    },
    children: [(0, i.jsxs)("div", {
      style: {
        background: d.pine,
        padding: "34px 20px 26px",
        color: "#F5F1E8",
        textAlign: "center"
      },
      children: [(0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(245,241,232,0.6)"
        },
        children: "Powered by CommonGround"
      }), (0, i.jsx)("div", {
        style: {
          width: 54,
          height: 54,
          borderRadius: 15,
          background: d.honey,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "14px auto 12px"
        },
        children: (0, i.jsx)(Yt, {
          size: 28,
          color: d.pine
        })
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13,
          opacity: .8
        },
        children: "Welcome to"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: D,
          fontWeight: 800,
          fontSize: 27,
          lineHeight: 1.15
        },
        children: "The Break Room"
      }), (0, i.jsx)("div", {
        style: {
          fontFamily: p,
          fontSize: 13,
          opacity: .82,
          marginTop: 5
        },
        children: "Where the people of SOG get to know one another."
      })]
    }), (0, i.jsxs)("div", {
      style: {
        padding: "18px 18px 26px"
      },
      children: [(0, i.jsxs)("div", {
        style: {
          background: d.card,
          border: "1px solid " + d.line,
          borderRadius: 18,
          padding: 16
        },
        children: [(0, i.jsx)("div", {
          style: {
            fontFamily: D,
            fontWeight: 700,
            fontSize: 17,
            color: d.ink,
            marginBottom: 3
          },
          children: e === "up" ? "Create your account" : "Sign in"
        }), (0, i.jsx)("div", {
          style: {
            fontFamily: p,
            fontSize: 12.5,
            color: d.sub,
            marginBottom: 14,
            lineHeight: 1.45
          },
          children: e === "up" ? "Your name and department show on what you post." : "Welcome back."
        }), e === "up" && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("input", {
            value: a,
            onChange: A => r(A.target.value),
            placeholder: "Your name",
            name: "br-display-name",
            id: "br-display-name",
            autoComplete: "off",
            autoCorrect: "off",
            spellCheck: !1,
            style: k
          }), (0, i.jsx)("select", {
            value: o,
            onChange: A => n(A.target.value),
            style: {
              ...k,
              appearance: "none"
            },
            children: En.map(A => (0, i.jsx)("option", {
              value: A.name,
              children: A.name
            }, A.id))
          })]
        }), (0, i.jsx)("input", {
          value: s,
          onChange: A => l(A.target.value),
          type: "email",
          name: "br-signin-email",
          inputMode: "email",
          autoComplete: "username",
          autoCapitalize: "none",
          autoCorrect: "off",
          spellCheck: !1,
          placeholder: "Email",
          style: k
        }), (0, i.jsx)("input", {
          value: u,
          onChange: A => c(A.target.value),
          type: "password",
          name: "br-signin-password",
          autoComplete: "current-password",
          autoCapitalize: "none",
          autoCorrect: "off",
          spellCheck: !1,
          placeholder: "Password",
          style: k
        }), (0, i.jsx)("button", {
          onClick: b,
          disabled: m,
          style: {
            width: "100%",
            background: d.honey,
            border: "none",
            borderRadius: 11,
            padding: "13px 0",
            fontFamily: p,
            fontWeight: 700,
            fontSize: 14,
            color: d.pine,
            cursor: "pointer",
            opacity: m ? .6 : 1
          },
          children: m ? "One moment..." : e === "up" ? "Create account" : "Sign in"
        }), f && (0, i.jsx)("div", {
          style: {
            marginTop: 10,
            background: "#FBEAE7",
            color: "#B4402F",
            borderRadius: 10,
            padding: "10px 12px",
            fontFamily: p,
            fontSize: 12.5,
            lineHeight: 1.45
          },
          children: f
        }), (0, i.jsx)("button", {
          onClick: () => {
            t(e === "up" ? "in" : "up"), h("")
          },
          style: {
            width: "100%",
            background: "none",
            border: "none",
            marginTop: 12,
            fontFamily: p,
            fontSize: 12.5,
            fontWeight: 700,
            color: d.sub,
            cursor: "pointer",
            textDecoration: "underline"
          },
          children: e === "up" ? "I already have an account" : "First time here? Create an account"
        })]
      }), (0, i.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: 6,
          marginTop: 13,
          fontFamily: p,
          fontSize: 11,
          color: d.faint,
          lineHeight: 1.45
        },
        children: [(0, i.jsx)(wt, {
          size: 12,
          style: {
            flexShrink: 0,
            marginTop: 1
          }
        }), "Never post patient or confidential information here."]
      })]
    })]
  })
}

function zb({
  me: e,
  profile: t,
  signOut: a
}) {
  let [r, o] = (0, I.useState)(() => {
    try {
      return localStorage.getItem("br_onboarded") === "1"
    } catch {
      return !1
    }
  }), [n, s] = (0, I.useState)("home"), [l, u] = (0, I.useState)(new Set), [c, f] = (0, I.useState)(""), h = (0, I.useCallback)(async () => {
    if (!e) return;
    let {
      data: S,
      error: L
    } = await F.from("group_members").select("group_slug").eq("profile_id", e.id);
    if (L) {
      f(L.message);
      return
    }
    u(new Set((S || []).map(T => Gk(T.group_slug))))
  }, [e]);
  (0, I.useEffect)(() => {
    h()
  }, [h]);
  let [m, g] = (0, I.useState)(null), [b, k] = (0, I.useState)(null), [A, v] = (0, I.useState)(null), [x, w] = (0, I.useState)(!1), [_, C] = (0, I.useState)(!1), [E, P] = (0, I.useState)(null), [personOpen, setPersonOpen] = (0, I.useState)(null), personScrollRef = (0, I.useRef)(0), personFromGroup = (0, I.useRef)(null), [W, K] = (0, I.useState)(new Set), [B, X] = (0, I.useState)(null), [ne, Ye] = (0, I.useState)([]), [Ut, ja] = (0, I.useState)([]), [It, $] = (0, I.useState)({
    title: "",
    url: "",
    open: !0,
    deadline: ""
  }), [me, ie] = (0, I.useState)($p), We = (0, I.useCallback)(async () => {
    let [S, L, T, U, N] = await Promise.all([F.from("merch_items").select("*").order("sort"), F.from("challenges").select("*").order("created_at", {
      ascending: !1
    }), F.from("challenge_backers").select("challenge_id, side, profile_id"), F.from("cup_logs").select("side_id, units"), F.from("app_settings").select("key, value").in("key", ["merch_catalog", "clinic_cup"])]);
    if (S.error || L.error) {
      ot((S.error || L.error).message);
      return
    }
    ja((S.data || []).map(Q => ({
      id: Q.id,
      name: Q.name,
      price: Q.price || "",
      desc: Q.descr || "",
      color: Q.color || d.pine
    })));
    let Y = {};
    (T.data || []).forEach(Q => {
      Y[Q.challenge_id] = Y[Q.challenge_id] || {
        a: 0,
        b: 0,
        mine: null
      }, Q.side === "A" ? Y[Q.challenge_id].a++ : Y[Q.challenge_id].b++, e && Q.profile_id === e.id && (Y[Q.challenge_id].mine = Q.side)
    }), Ye((L.data || []).map(Q => ({
      id: Q.id,
      event: Q.event,
      wager: Q.wager,
      sideA: Q.side_a,
      sideB: Q.side_b,
      a: (Y[Q.id] || {}).a || 0,
      b: (Y[Q.id] || {}).b || 0,
      mine: (Y[Q.id] || {}).mine || null
    })));
    let J = {};
    if ((N.data || []).forEach(Q => {
        J[Q.key] = Q.value
      }), J.merch_catalog && $(J.merch_catalog), J.clinic_cup) {
      let Q = {};
      (U.data || []).forEach(Tt => {
        Q[Tt.side_id] = (Q[Tt.side_id] || 0) + Tt.units
      });
      let pt = J.clinic_cup;
      ie({
        ...pt,
        sides: (pt.sides || []).map(Tt => ({
          ...Tt,
          units: Q[Tt.id] || 0
        }))
      })
    }
  }, [e]);
  (0, I.useEffect)(() => {
    We()
  }, [We]);
  let Rr = S => Oe(F.from("challenges").insert({
      event: S.event,
      wager: S.wager,
      side_a: S.sideA,
      side_b: S.sideB
    })),
    Pn = (S, L) => {
      let T = {};
      return L.event !== void 0 && (T.event = L.event), L.wager !== void 0 && (T.wager = L.wager), L.sideA !== void 0 && (T.side_a = L.sideA), L.sideB !== void 0 && (T.side_b = L.sideB), Oe(F.from("challenges").update(T).eq("id", S))
    },
    go = S => Oe(F.from("challenges").delete().eq("id", S)),
    Er = (S, L) => Oe(F.from("challenge_backers").upsert({
      challenge_id: S,
      profile_id: e.id,
      side: L
    }, {
      onConflict: "challenge_id,profile_id"
    })),
    yo = S => Oe(F.from("merch_items").insert({
      name: S.name,
      price: S.price,
      descr: S.desc,
      color: S.color
    })),
    Fn = (S, L) => Oe(F.from("merch_items").update({
      name: L.name,
      price: L.price,
      descr: L.desc,
      color: L.color
    }).eq("id", S)),
    On = S => Oe(F.from("merch_items").delete().eq("id", S)),
    Se = async S => {
      let L = {
        ...It,
        ...S
      };
      return $(L), Oe(F.from("app_settings").upsert({
        key: "merch_catalog",
        value: L
      }, {
        onConflict: "key"
      }))
    }, announceMerch = async cat => {
      // Deliberately NOT a direct notify invoke. A feed post fires
      // trg_notify_on_feed_post, which is proven working, and leaves a
      // permanent post for anyone whose notification was missed or muted.
      try {
        let lines = ["SOG Merch is open" + (cat && cat.title ? " \u2014 " + cat.title : "") + "."];
        cat && cat.deadline && lines.push(cat.deadline + ".");
        cat && cat.url && lines.push(cat.url);
        let {
          error: postErr
        } = await F.from("feed_posts").insert({
          author_id: e.id,
          body: lines.join(" "),
          audience: "Everyone",
          audience_dept: null,
          kind: "post"
        });
        if (postErr) return "Couldn't post: " + postErr.message;
        return "Posted to the feed \u2014 everyone with companywide notifications on gets a buzz."
      } catch (ex) {
        return "Couldn't post: " + String(ex.message || ex)
      }
    }, [Ha, vo] = (0, I.useState)(!1), [q, ke] = (0, I.useState)(!1), [je, Ct] = (0, I.useState)(!1), ta = (S, L) => Oe(F.from("cup_logs").insert({
      side_id: S,
      profile_id: e.id,
      units: L
    })), Sa = async S => {
      let L = {
        ...me,
        ...S
      };
      ie(L);
      let {
        units: T,
        ...U
      } = L;
      return Oe(F.from("app_settings").upsert({
        key: "clinic_cup",
        value: {
          ...U,
          sides: (L.sides || []).map(({
            units: N,
            ...Y
          }) => Y)
        }
      }, {
        onConflict: "key"
      }))
    }, Pr = () => ie(S => {
      let L = Vp(S.sides),
        T = L && !L.tie ? L.side.name : "Tie";
      return {
        ...S,
        on: !1,
        history: [{
          season: S.season,
          title: S.title,
          winner: T
        }].concat(S.history)
      }
    }), [ka, xo] = (0, I.useState)(null), [qa, Bn] = (0, I.useState)({}), [Dn, wo] = (0, I.useState)([]), [zn, ge] = (0, I.useState)({}), _t = (0, I.useCallback)(async () => {
      let {
        data: S
      } = await F.from("group_members").select("group_slug"), L = {};
      (S || []).forEach(T => {
        L[T.group_slug] = (L[T.group_slug] || 0) + 1
      }), ge(L)
    }, []);
  let [deptCounts, setDeptCounts] = (0, I.useState)({}),
    loadDeptCounts = (0, I.useCallback)(async () => {
      let {
        data: S
      } = await F.from("department_members").select("departments(name)"), L = {};
      (S || []).forEach(T => {
        let nm = T.departments && T.departments.name;
        nm && (L[nm] = (L[nm] || 0) + 1)
      }), setDeptCounts(L)
    }, []);
  (0, I.useEffect)(() => {
    _t(), loadDeptCounts()
  }, [_t, loadDeptCounts]);
  let [Fr, Mn] = (0, I.useState)([]), [Zs, $a] = (0, I.useState)(""), ba = (0, I.useCallback)(async () => {
    if (!e) return;
    let {
      data: S,
      error: L
    } = await F.from("thread_participants").select("thread_id").eq("profile_id", e.id);
    if (L) {
      $a(L.message);
      return
    }
    let T = (S || []).map(Ce => Ce.thread_id),
      {
        data: U
      } = await F.from("threads").select("id, kind, group_slug, dept_id, groups(name), departments(name)").neq("kind", "dm"),
      N = T.concat((U || []).map(Ce => Ce.id));
    if (!N.length) {
      Mn([]);
      return
    }
    let {
      data: Y
    } = T.length ? await F.from("thread_participants").select("thread_id, profile_id, profiles(display_name)").in("thread_id", T) : {
      data: []
    }, {
      data: J
    } = await F.from("messages").select("thread_id, body, created_at, sender_id").in("thread_id", N).order("created_at", {
      ascending: !1
    }), Q = {};
    (J || []).forEach(Ce => {
      Q[Ce.thread_id] || (Q[Ce.thread_id] = Ce)
    });
    let {
      data: titleRows
    } = T.length ? await F.from("threads").select("id, title").in("id", T) : {
      data: []
    };
    let titleById = {};
    (titleRows || []).forEach(tr => {
      titleById[tr.id] = tr.title
    });
    let {
      data: readRows
    } = await F.from("thread_reads").select("thread_id, last_read_at").eq("profile_id", e.id);
    let lastReadAt = {};
    (readRows || []).forEach(rr => {
      lastReadAt[rr.thread_id] = rr.last_read_at
    });
    let unreadBy = {};
    (J || []).forEach(Ce => {
      if (Ce.sender_id === e.id) return;
      let lr = lastReadAt[Ce.thread_id];
      if (!lr || Ce.created_at > lr) unreadBy[Ce.thread_id] = (unreadBy[Ce.thread_id] || 0) + 1
    });
    let pt = T.map(Ce => {
        let others = (Y || []).filter(oh => oh.thread_id === Ce && oh.profile_id !== e.id),
          ei = others[0],
          ti = Q[Ce],
          otherNames = others.map(oh => oh.profiles && oh.profiles.display_name || "Someone"),
          crew = others.length > 1,
          shownName = crew ? titleById[Ce] || otherNames.map(nm => nm.split(" ")[0]).join(", ") : ei && ei.profiles ? ei.profiles.display_name : "Someone";
        return {
          id: Ce,
          kind: "dm",
          crew: crew,
          people: others.length + 1,
          name: shownName,
          otherId: crew ? null : ei ? ei.profile_id : null,
          last: ti ? (ti.sender_id === e.id ? "You: " : "") + ti.body : "No messages yet",
          at: ti ? ti.created_at : null,
          unread: unreadBy[Ce] || 0
        }
      }),
      Tt = (U || []).map(Ce => {
        let Ya = Q[Ce.id];
        return {
          id: Ce.id,
          kind: Ce.kind,
          name: Ce.groups && Ce.groups.name || Ce.departments && Ce.departments.name || "Channel",
          last: Ya ? (Ya.sender_id === e.id ? "You: " : "") + Ya.body : "No messages yet",
          at: Ya ? Ya.created_at : null,
          unread: unreadBy[Ce.id] || 0
        }
      }),
      rh = (Ce, Ya) => (Ya.at || "").localeCompare(Ce.at || "");
    pt.sort(rh), Tt.sort(rh), Mn(Tt.concat(pt))
  }, [e]);
  (0, I.useEffect)(() => {
    ba();
    let S = setInterval(ba, 8e3);
    return () => clearInterval(S)
  }, [ba]);
  let el = async (S, L, T) => {
    $a("");
    let {
      data: U
    } = await F.from("thread_participants").select("thread_id").eq("profile_id", e.id), N = (U || []).map(pt => pt.thread_id);
    if (N.length) {
      let {
        data: pt
      } = await F.from("thread_participants").select("thread_id").eq("profile_id", S).in("thread_id", N);
      if (pt && pt.length) {
        v({
          id: pt[0].thread_id,
          name: L,
          otherId: S,
          seedText: T
        });
        return
      }
    }
    let Y = window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, pt => {
        let Tt = Math.random() * 16 | 0;
        return (pt === "x" ? Tt : Tt & 3 | 8).toString(16)
      }),
      {
        error: J
      } = await F.from("threads").insert({
        id: Y,
        created_by: e.id
      });
    if (J) {
      $a("Couldn't start the conversation: " + J.message);
      return
    }
    let {
      error: Q
    } = await F.from("thread_participants").insert([{
      thread_id: Y,
      profile_id: e.id
    }, {
      thread_id: Y,
      profile_id: S
    }]);
    if (Q) {
      $a("Couldn't start the conversation: " + Q.message);
      return
    }
    v({
      id: Y,
      name: L,
      otherId: S,
      seedText: T
    }), ba()
  }, makeGroupChat = async (groupTitle, ids) => {
    $a("");
    if (!ids || ids.length < 2) return;
    let newId = window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, ch => {
        let rn = Math.random() * 16 | 0;
        return (ch === "x" ? rn : rn & 3 | 8).toString(16)
      }),
      {
        error: mkErr
      } = await F.from("threads").insert({
        id: newId,
        created_by: e.id,
        title: groupTitle || null
      });
    if (mkErr) {
      $a("Couldn't start the conversation: " + mkErr.message);
      return
    }
    let {
      error: pErr
    } = await F.from("thread_participants").insert(ids.concat([e.id]).map(pid => ({
      thread_id: newId,
      profile_id: pid
    })));
    if (pErr) {
      $a("Couldn't start the conversation: " + pErr.message);
      return
    }
    v({
      id: newId,
      name: groupTitle || "Group chat"
    }), ba()
  }, tl = (0, I.useCallback)(async S => {
    if (!S) {
      wo([]);
      return
    }
    let {
      data: L
    } = await F.from("group_members").select("profile_id, profiles(display_name, title, home_base, school, ask_about, department_members(department_id))").eq("group_slug", S).limit(12);
    wo((L || []).map(T => Object.assign({}, T.profiles || {}, {
      id: T.profile_id,
      name: T.profiles && T.profiles.display_name || "Someone",
      role: T.profiles && T.profiles.title || ""
    })))
  }, []), [Un, aa] = (0, I.useState)(""), Va = (0, I.useCallback)(async S => {
    if (!S) return;
    let {
      data: L,
      error: T
    } = await F.from("group_posts").select("id, body, photo_path, sub_slug, created_at, author_id, profiles(display_name, dept), groups!group_posts_sub_slug_fkey(name)").eq("group_slug", S).order("created_at", {
      ascending: !1
    }).limit(60);
    if (T) {
      aa(T.message);
      return
    }
    aa("");
    let U = (L || []).map(Y => Y.photo_path).filter(Boolean),
      N = {};
    if (U.length) {
      let {
        data: Y
      } = await F.storage.from("group-photos").createSignedUrls(U, 3600);
      (Y || []).forEach(J => {
        J && J.path && (N[J.path] = J.signedUrl)
      })
    }
    Bn(Y => ({
      ...Y,
      [S]: (L || []).map(J => ({
        id: J.id,
        author: J.profiles && J.profiles.display_name || "Someone",
        role: J.profiles && J.profiles.dept || "SOG",
        time: Mp(J.created_at),
        text: J.body || "",
        sub: J.groups ? J.groups.name : null,
        photo: J.photo_path ? N[J.photo_path] : null,
        mine: J.author_id === (e && e.id)
      }))
    }))
  }, [e]), bd = async (S, L) => {
    aa("");
    let T = null;
    if (L.photo) {
      let N = await (await fetch(L.photo)).blob();
      T = e.id + "/" + S + "/" + Date.now() + ".jpg";
      let {
        error: Y
      } = await F.storage.from("group-photos").upload(T, N, {
        contentType: "image/jpeg"
      });
      if (Y) {
        aa(Y.message);
        return
      }
    }
    let {
      error: U
    } = await F.from("group_posts").insert({
      group_slug: S,
      sub_slug: L.sub ? Hp(S + ":" + L.sub) : null,
      author_id: e.id,
      body: L.text || null,
      photo_path: T
    });
    if (U) {
      aa(U.message);
      return
    }
    Va(S)
  }, Ld = async (S, L) => {
    let {
      error: T
    } = await F.from("group_posts").delete().eq("id", L);
    if (T) {
      aa(T.message);
      return
    }
    Va(S)
  }, al = (S, L) => Bn(T => ({
    ...T,
    [S]: (T[S] || []).map(U => U.id === L ? {
      ...U,
      liked: !U.liked,
      likes: (U.likes || 0) + (U.liked ? -1 : 1)
    } : U)
  })), [Nn, Or] = (0, I.useState)({}), [So, Wn] = (0, I.useState)({}), [rl, At] = (0, I.useState)(""), jn = async S => {
    let L = {};
    if (!S.length) return L;
    let {
      data: T
    } = await F.storage.from("people-photos").createSignedUrls(S, 3600);
    return (T || []).forEach(U => {
      U.signedUrl && (L[U.path] = U.signedUrl)
    }), L
  }, [hirePhotoUrls, setHirePhotoUrls] = (0, I.useState)({}), ra = (0, I.useCallback)(async () => {
    let hp = await F.from("feed_posts").select("hire_photo_path").eq("kind", "new_hire").not("hire_photo_path", "is", null);
    if (hp.data && hp.data.length) {
      let signed = await jn(hp.data.map(J => J.hire_photo_path));
      setHirePhotoUrls(signed || {})
    }
    let [S, L] = await Promise.all([F.from("profiles").select("display_name, photo_path").not("photo_path", "is", null), F.from("roster_photos").select("name, photo_path")]), T = [].concat((S.data || []).map(J => J.photo_path), (L.data || []).map(J => J.photo_path)), U = await jn(T), N = {};
    (S.data || []).forEach(J => {
      U[J.photo_path] && (N[Tr(J.display_name)] = U[J.photo_path])
    });
    let Y = {};
    (L.data || []).forEach(J => {
      U[J.photo_path] && (Y[Tr(J.name)] = U[J.photo_path])
    }), Wn(N), Or(Y)
  }, [e]);
  (0, I.useEffect)(() => {
    ra()
  }, [ra]);
  /* The physician roster is small and changes a few times a year, so it loads once
     with the app rather than being polled. */
  (0, I.useEffect)(() => {
    let alive = !0;
    F.from("physicians").select("id, last_name, name, specialty, towns, bio, profile_id")
      .eq("active", !0).order("sort").then(({ data: S }) => { alive && setDocList(S || []) });
    return () => { alive = !1 }
  }, []);
  let Ga = t && t.display_name || mo,
    ft = S => Tr(S) === Tr(Ga) && ka ? ka : So[Tr(S)] || Nn[Tr(S)] || null,
    ol = async (S, L) => {
      let T = await (await fetch(S)).blob(),
        U = L + "/" + Date.now() + ".jpg",
        {
          error: N
        } = await F.storage.from("people-photos").upload(U, T, {
          contentType: "image/jpeg"
        });
      return N ? (At(N.message), null) : U
    }, La = async S => {
      if (At(""), !S) {
        xo(null);
        let {
          error: N
        } = await F.from("profiles").update({
          photo_path: null
        }).eq("id", e.id);
        N && At(N.message), ra();
        return
      }
      let L = await kv(S);
      xo(L);
      let T = await ol(L, "p/" + e.id);
      if (!T) return;
      let {
        error: U
      } = await F.from("profiles").update({
        photo_path: T
      }).eq("id", e.id);
      if (U) {
        At(U.message);
        return
      }
      ra()
    }, nl = async (S, L) => {
      At("");
      let T = await kv(L);
      Or(Y => ({
        ...Y,
        [Tr(S)]: T
      }));
      let U = await ol(T, "r");
      if (!U) return;
      let {
        error: N
      } = await F.from("roster_photos").upsert({
        name: S,
        photo_path: U,
        updated_at: new Date().toISOString()
      }, {
        onConflict: "name"
      });
      if (N) {
        At(N.message);
        return
      }
      ra()
    }, Id = async S => {
      At(""), Or(T => {
        let U = {
          ...T
        };
        return delete U[Tr(S)], U
      });
      let {
        error: L
      } = await F.from("roster_photos").delete().eq("name", S);
      L && At(L.message), ra()
    }, [lunchRows, setLunchRows] = (0, I.useState)([]), [ko, Cd] = (0, I.useState)([]), [se, oa] = (0, I.useState)([]), [Nt, il] = (0, I.useState)([]), [Hn, qn] = (0, I.useState)({
      msg: "",
      on: !1
    }), [_d, ot] = (0, I.useState)(""), [$n, bo] = (0, I.useState)(!1), Lo = (0, I.useCallback)(async () => {
      let [S, L, T, U, LZ] = await Promise.all([F.from("birthdays").select("id, name, month, day").order("month").order("day"), F.from("anniversaries").select("id, name, month, day, year").order("month").order("day"), F.from("recognition").select("*").order("posted_at", {
        ascending: !1
      }), F.from("app_settings").select("key, value").eq("key", "cupcake").maybeSingle(), F.from("lunch_days").select("id, on_date, site, vendor, note").gte("on_date", new Date(Date.now() - 864e5).toISOString().slice(0, 10)).order("on_date")]);
      LZ && !LZ.error && setLunchRows(LZ.data || []);
      if (S.error || L.error || T.error) {
        ot((S.error || L.error || T.error).message);
        return
      }
      ot(""), oa(S.data || []), Cd(L.data || []), il((T.data || []).map(N => ({
        id: N.id,
        cat: N.cat,
        title: N.title,
        body: N.body,
        link: N.link || "",
        postedAt: new Date(N.posted_at).getTime(),
        pinUntil: new Date(N.pin_until).getTime()
      }))), U && U.data && U.data.value && qn(U.data.value)
    }, []);
  (0, I.useEffect)(() => {
    Lo()
  }, [Lo]), (0, I.useEffect)(() => {
    loadMyWishes()
  }, [e && e.id]);
  let ae = async S => {
    let {
      error: L
    } = await S;
    return L ? (ot(L.message), !1) : (ot(""), Lo(), !0)
  }, Oe = async S => {
    let {
      error: L
    } = await S;
    return L ? (ot(L.message), !1) : (ot(""), We(), !0)
  }, addNewHire = async S => {
    let path = null;
    let photoWarning = "";
    if (S.photoDataUrl) {
      try {
        let blob = await (await fetch(S.photoDataUrl)).blob();
        let tryPath = "hires/" + Date.now() + ".jpg";
        let {
          error: upErr
        } = await F.storage.from("people-photos").upload(tryPath, blob, {
          contentType: "image/jpeg"
        });
        // A photo that won't upload must never cost the whole announcement.
        upErr ? photoWarning = " (photo didn't attach: " + upErr.message + ")" : path = tryPath
      } catch (ex) {
        photoWarning = " (photo didn't attach)"
      }
    }
    let {
      error: insErr
    } = await F.from("feed_posts").insert({
      author_id: e.id,
      body: (S.bio || "").trim() || ("Please join us in welcoming " + (S.name || "our newest teammate") + " to SOG."),
      audience: "Everyone",
      audience_dept: null,
      kind: "new_hire",
      hire_name: S.name,
      hire_title: S.title || null,
      hire_dept: S.dept || null,
      hire_site: S.site || null,
      hire_works_with: S.worksWith || null,
      hire_photo_path: path,
      pinned_until: new Date(Date.now() + 7 * 864e5).toISOString()
    });
    return insErr ? insErr.message : (Zn(), ra(), photoWarning ? "Posted" + photoWarning : null)
  }, addLunchRow = S => ae(F.from("lunch_days").insert(S)),
    removeLunchRow = S => ae(F.from("lunch_days").delete().eq("id", S.id)),
    sl = S => ae(F.from("birthdays").insert({
    name: S.name,
    month: S.month,
    day: S.day
  })), Vn = (S, L) => ae(F.from("birthdays").update({
    name: L.name,
    month: L.month,
    day: L.day
  }).eq("id", S.id)), Gn = (S, L, T) => ae(F.from("birthdays").delete().eq("name", S).eq("month", L).eq("day", T)), ll = async S => (await F.from("birthdays").delete().neq("id", "00000000-0000-0000-0000-000000000000"), ae(F.from("birthdays").insert(S.map(L => ({
    name: L.name,
    month: L.month,
    day: L.day
  }))))), He = S => ae(F.from("anniversaries").insert({
    name: S.name,
    month: S.month,
    day: S.day,
    year: S.year
  })), Ka = (S, L) => ae(F.from("anniversaries").update({
    name: L.name,
    month: L.month,
    day: L.day,
    year: L.year
  }).eq("id", S.id)), Kn = (S, L, T, U) => ae(F.from("anniversaries").delete().eq("name", S).eq("month", L).eq("day", T).eq("year", U)), Ad = async S => (await F.from("anniversaries").delete().neq("id", "00000000-0000-0000-0000-000000000000"), ae(F.from("anniversaries").insert(S.map(L => ({
    name: L.name,
    month: L.month,
    day: L.day,
    year: L.year
  }))))), Td = S => ae(F.from("recognition").insert({
    cat: S.cat,
    title: S.title,
    body: S.body,
    link: S.link || null,
    pin_until: new Date(S.pinUntil || Date.now() + 7 * 864e5).toISOString(),
    created_by: e.id
  })), re = (S, L) => {
    let T = {};
    return L.cat !== void 0 && (T.cat = L.cat), L.title !== void 0 && (T.title = L.title), L.body !== void 0 && (T.body = L.body), L.link !== void 0 && (T.link = L.link || null), L.pinUntil !== void 0 && (T.pin_until = new Date(L.pinUntil).toISOString()), ae(F.from("recognition").update(T).eq("id", S))
  }, Jn = S => ae(F.from("recognition").delete().eq("id", S)), Rd = async S => {
    let L = {
      ...Hn,
      ...S
    };
    return qn(L), ae(F.from("app_settings").upsert({
      key: "cupcake",
      value: L
    }, {
      onConflict: "key"
    }))
  }, [ul, dl] = (0, I.useState)([]), [cl, Xn] = (0, I.useState)({}), Wt = (0, I.useCallback)(async () => {
    let [S, L] = await Promise.all([F.from("questions").select("*").order("sort"), F.from("question_votes").select("question_id, choice, profile_id")]);
    if (S.error) {
      ot(S.error.message);
      return
    }
    let T = {},
      U = {};
    (L.data || []).forEach(N => {
      T[N.question_id] = T[N.question_id] || {
        a: 0,
        b: 0
      }, T[N.question_id][N.choice]++, e && N.profile_id === e.id && (U[N.question_id] = N.choice)
    }), dl((S.data || []).map(N => ({
      id: N.id,
      a: N.a,
      b: N.b,
      av: (T[N.id] || {}).a || 0,
      bv: (T[N.id] || {}).b || 0
    }))), Xn(U)
  }, [e]);
  (0, I.useEffect)(() => {
    Wt()
  }, [Wt]);
  let Ed = async (S, L) => {
    cl[S] === L ? (Xn(T => {
      let U = {
        ...T
      };
      return delete U[S], U
    }), await F.from("question_votes").delete().eq("question_id", S).eq("profile_id", e.id)) : (Xn(T => ({
      ...T,
      [S]: L
    })), await F.from("question_votes").upsert({
      question_id: S,
      profile_id: e.id,
      choice: L
    }, {
      onConflict: "question_id,profile_id"
    })), Wt()
  }, fl = (S, L) => F.from("questions").insert({
    a: S,
    b: L
  }).then(({
    error: U
  }) => {
    U && ot(U.message), Wt()
  }), Br = (S, L) => F.from("questions").update({
    a: L.a,
    b: L.b
  }).eq("id", S).then(({
    error: T
  }) => {
    T && ot(T.message), Wt()
  }), Pd = S => F.from("questions").delete().eq("id", S).then(({
    error: L
  }) => {
    L && ot(L.message), Wt()
  }), addDeptRow = S => F.from("departments").insert({
    name: S,
    active: !0,
    sort: 900
  }).then(({
    error: L
  }) => {
    L && ot(L.message), gl()
  }), renameDeptRow = (S, L) => F.from("departments").update({
    name: L
  }).eq("id", S).then(({
    error: T
  }) => {
    T && ot(T.message), gl()
  }), retireDeptRow = S => F.from("departments").update({
    active: !1
  }).eq("id", S).then(({
    error: L
  }) => {
    L && ot(L.message), gl()
  }), [myWishes, setMyWishes] = (0, I.useState)({
    birthday: {},
    anniversary: {}
  }), [pl, hl] = (0, I.useState)(!1), [Io, Fd] = (0, I.useState)(Zk), Od = Io.filter(S => S.me).length, ml = Fr.reduce((S, L) => S + (L.unread || 0), 0), [Bd, y] = (0, I.useState)([]), [M, Z] = (0, I.useState)(""), G = !!(t && t.role === "admin"), [nt, Fv] = (0, I.useState)([]), [Dd, zd] = (0, I.useState)([]), gl = (0, I.useCallback)(async () => {
    let {
      data: S
    } = await F.from("departments").select("id, name, sort").eq("active", !0).order("sort");
    if (Fv(S || []), !e) return;
    let {
      data: L
    } = await F.from("department_members").select("department_id, is_primary").eq("profile_id", e.id);
    zd((L || []).map(T => T.department_id))
  }, [e]);
  (0, I.useEffect)(() => {
    gl()
  }, [gl]);
  let Ov = nt.filter(S => Dd.indexOf(S.id) !== -1),
    [Bv, yl] = (0, I.useState)(""),
    [Md, Dv] = (0, I.useState)([]),
    [zv, vl] = (0, I.useState)(""),
    Yn = (0, I.useCallback)(async () => {
      let {
        data: S,
        error: L
      } = await F.from("profiles").select("id, display_name, dept, title, role, active, created_at, home_base, school, ask_about, department_members(department_id)").order("display_name");
      if (L) {
        vl(L.message);
        return
      }
      vl(""), Dv(S || [])
    }, []);
  (0, I.useEffect)(() => {
    Yn()
  }, [Yn]);
  let [Mv, Ja] = (0, I.useState)("checking"), [Uv, Dr] = (0, I.useState)(""), [Xp, Yp] = (0, I.useState)({
    dms: !0,
    announcements: !0,
    department: !0,
    channels: !1,
    groups: !1
  });
  (0, I.useEffect)(() => {
    t && t.notify && Yp(S => ({
      ...S,
      ...t.notify
    }))
  }, [t && t.notify]), (0, I.useEffect)(() => {
    let S = !0;
    return (async () => {
      if (!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) {
        S && Ja(Wp() && !Sv() ? "needs-homescreen" : "unsupported");
        return
      }
      if (Wp() && !Sv()) {
        S && Ja("needs-homescreen");
        return
      }
      if (window.Notification.permission === "denied") {
        S && Ja("blocked");
        return
      }
      try {
        let reg = await navigator.serviceWorker.register("sw.js");
        let T = await reg.pushManager.getSubscription();
        // iOS silently discards the subscription (storage eviction, SW update)
        // while permission stays granted. Without this the app reports "off"
        // and leaves a dead endpoint in the table that Apple still accepts,
        // so every send reports success and nothing ever arrives.
        if (!T && window.Notification.permission === "granted") try {
          await navigator.serviceWorker.ready, T = await reg.pushManager.subscribe({
            userVisibleOnly: !0,
            applicationServerKey: Jk(Kk)
          })
        } catch (resubErr) {}
        if (T && e && e.id) {
          let U = T.toJSON();
          let {
            error: pushClaimErr
          } = await F.rpc("claim_push_device", {
            p_endpoint: T.endpoint,
            p_p256dh: U.keys.p256dh,
            p_auth: U.keys.auth,
            p_label: Wp() ? "iPhone" : "Computer"
          });
          if (pushClaimErr) {
            S && Dr("Notifications: " + (pushClaimErr.message || "could not register this device"))
          } else {
            let {
              data: pushOwnRow
            } = await F.from("push_subscriptions").select("endpoint").eq("endpoint", T.endpoint);
            if (S && (!pushOwnRow || !pushOwnRow.length)) {
              Dr("This device's notifications are still registered to another account. Turn notifications off and back on to claim it.")
            }
          }
        }
        S && Ja(T ? "on" : "off")
      } catch (L) {
        S && (Ja("unsupported"), Dr(String(L.message || L)))
      }
    })(), () => {
      S = !1
    }
  }, [e && e.id]);
  let Nv = async () => {
    Dr("");
    try {
      let S = await window.Notification.requestPermission();
      if (S !== "granted") {
        Ja(S === "denied" ? "blocked" : "off");
        return
      }
      let L = await navigator.serviceWorker.register("sw.js");
      await navigator.serviceWorker.ready;
      let T = await L.pushManager.getSubscription();
      T || (T = await L.pushManager.subscribe({
        userVisibleOnly: !0,
        applicationServerKey: Jk(Kk)
      }));
      let U = T.toJSON(),
        {
          error: N
        } = await F.rpc("claim_push_device", {
          p_endpoint: T.endpoint,
          p_p256dh: U.keys.p256dh,
          p_auth: U.keys.auth,
          p_label: Wp() ? "iPhone" : "Computer"
        });
      if (N) {
        Dr(N.message);
        return
      }
      Ja("on")
    } catch (S) {
      Dr(String(S.message || S))
    }
  }, Wv = async () => {
    Dr("");
    try {
      let S = await navigator.serviceWorker.getRegistration(),
        L = S && await S.pushManager.getSubscription();
      L && (await F.from("push_subscriptions").delete().eq("endpoint", L.endpoint), await L.unsubscribe()), Ja("off")
    } catch (S) {
      Dr(String(S.message || S))
    }
  }, [jv, Qn] = (0, I.useState)(""), Hv = async () => {
    Qn("Sending...");
    try {
      let {
        data: S,
        error: L
      } = await F.functions.invoke("notify", {
        body: {
          kind: "test",
          title: "The Break Room",
          body: "Notifications are working."
        }
      });
      if (L) {
        Qn("Failed: " + L.message);
        return
      }
      if (S && S.error) {
        Qn("Failed: " + S.error);
        return
      }
      let T = S && S.sent || 0;
      Qn(T ? "Sent to " + T + (T === 1 ? " device" : " devices") + " - watch for it" : S && S.note || "Nothing was sent")
    } catch (S) {
      Qn("Failed: " + String(S.message || S))
    }
  }, qv = async (S, L) => {
    let T = {
      ...Xp,
      [S]: L
    };
    Yp(T);
    let {
      error: U
    } = await F.from("profiles").update({
      notify: T
    }).eq("id", e.id);
    U && Dr(U.message)
  }, $v = async S => {
    let {
      error: L
    } = await F.from("profiles").update(S).eq("id", e.id);
    return L ? !1 : (Yn(), !0)
  }, Qp = async (S, L) => {
    let {
      error: T
    } = await F.from("profiles").update({
      role: L
    }).eq("id", S);
    if (T) {
      vl(T.message);
      return
    }
    Yn()
  }, removeFromDept = async (S, L) => {
    let {
      error: T
    } = await F.from("department_members").delete().eq("profile_id", S).eq("department_id", L);
    if (T) {
      vl(T.message);
      return
    }
    Yn(), loadDeptCounts()
  }, Zp = async (S, L) => {
    let {
      error: T
    } = await F.from("profiles").update({
      active: L
    }).eq("id", S);
    if (T) {
      vl(T.message);
      return
    }
    Yn()
  }, Vv = async S => {
    yl("");
    let L = Dd.length === 0,
      {
        error: T
      } = await F.from("department_members").insert({
        profile_id: e.id,
        department_id: S,
        is_primary: L
      });
    if (T) {
      yl(T.message || "Couldn't join - unknown error");
      return
    }
    zd(U => U.indexOf(S) === -1 ? U.concat([S]) : U), gl()
  }, Gv = async S => {
    yl("");
    let {
      error: L
    } = await F.from("department_members").delete().eq("profile_id", e.id).eq("department_id", S);
    if (L) {
      yl(L.message || "Couldn't leave - unknown error");
      return
    }
    zd(T => T.filter(U => U !== S)), gl()
  }, loadMyWishes = async () => {
    if (!e) return;
    let {
      data: wRows
    } = await F.from("wishes").select("kind, recipient_name").eq("sender_id", e.id).eq("year", new Date().getFullYear());
    let next = {
      birthday: {},
      anniversary: {}
    };
    (wRows || []).forEach(wRow => {
      next[wRow.kind] && (next[wRow.kind][wRow.recipient_name] = !0)
    }), setMyWishes(next)
  }, sendWishTo = async (kindKey, personName) => {
    setMyWishes(prev => ({
      ...prev,
      [kindKey]: {
        ...prev[kindKey],
        [personName]: !0
      }
    }));
    let {
      error: wErr
    } = await F.from("wishes").insert({
      kind: kindKey,
      recipient_name: personName,
      sender_id: e.id,
      year: new Date().getFullYear()
    });
    if (wErr && wErr.code !== "23505") return;
    let match = Md.filter(pr => Tr(pr.display_name) === Tr(personName) && pr.id !== e.id)[0];
    if (!match) return;
    let note = kindKey === "birthday" ? "Happy birthday, " + Kp(personName) + "!" : "Congratulations on your work anniversary, " + Kp(personName) + "!",
      {
        data: mine
      } = await F.from("thread_participants").select("thread_id").eq("profile_id", e.id),
      ids = (mine || []).map(rw => rw.thread_id),
      threadId = null;
    if (ids.length) {
      let {
        data: shared
      } = await F.from("thread_participants").select("thread_id").eq("profile_id", match.id).in("thread_id", ids);
      shared && shared.length && (threadId = shared[0].thread_id)
    }
    if (!threadId) {
      threadId = window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, ch => {
        let rn = Math.random() * 16 | 0;
        return (ch === "x" ? rn : rn & 3 | 8).toString(16)
      });
      let {
        error: tErr
      } = await F.from("threads").insert({
        id: threadId,
        created_by: e.id
      });
      if (tErr) return;
      let {
        error: pErr
      } = await F.from("thread_participants").insert([{
        thread_id: threadId,
        profile_id: e.id
      }, {
        thread_id: threadId,
        profile_id: match.id
      }]);
      if (pErr) return
    }
    await F.from("messages").insert({
      thread_id: threadId,
      sender_id: e.id,
      body: note
    }), ba()
  }, addFeedComment = async (S, L) => {
    let {
      error: T
    } = await F.from("post_comments").insert({
      post_id: S,
      author_id: e.id,
      body: L
    });
    if (T) {
      Z(T.message);
      return
    }
    Zn()
  }, deleteFeedComment = async S => {
    let {
      error: L
    } = await F.from("post_comments").delete().eq("id", S);
    if (L) {
      Z(L.message);
      return
    }
    Zn()
  }, Kv = async S => {
    let {
      error: L
    } = await F.from("feed_posts").delete().eq("id", S);
    if (L) {
      Z(L.message);
      return
    }
    Zn()
  }, Zn = (0, I.useCallback)(async () => {
    let {
      data: S,
      error: L
    } = await F.from("feed_posts").select("id, body, audience, audience_dept, created_at, author_id, kind, hire_name, hire_title, hire_dept, hire_site, hire_works_with, hire_photo_path, pinned_until, departments(name), profiles(display_name, department_members(department_id))").order("created_at", {
      ascending: !1
    }).limit(60);
    if (L) {
      Z(L.message);
      return
    }
    let deptNameById = {};
    nt.forEach(dRow => {
      deptNameById[dRow.id] = dRow.name
    });
    let postIds = (S || []).map(pRow => pRow.id),
      commentsByPost = {};
    if (postIds.length) {
      let {
        data: cmRows
      } = await F.from("post_comments").select("id, post_id, body, created_at, author_id, profiles(display_name)").in("post_id", postIds).order("created_at");
      (cmRows || []).forEach(cmRow => {
        (commentsByPost[cmRow.post_id] = commentsByPost[cmRow.post_id] || []).push({
          id: cmRow.id,
          author: cmRow.profiles && cmRow.profiles.display_name || "Someone",
          text: cmRow.body,
          time: Mp(cmRow.created_at),
          canDelete: cmRow.author_id === (e && e.id) || G
        })
      })
    }
    let authorDepts = pr => ((pr && pr.department_members || []).map(mRow => deptNameById[mRow.department_id]).filter(Boolean).join(" \xB7 ")) || "SOG";
    Z(""), y((S || []).map(T => ({
      id: T.id,
      author: T.profiles && T.profiles.display_name || "Someone",
      dept: authorDepts(T.profiles),
      audience: T.departments && T.departments.name || "Everyone",
      audienceDeptId: T.audience_dept || null,
      time: Mp(T.created_at),
      text: T.body,
      comments: commentsByPost[T.id] || [],
      kind: T.kind || "post",
      hire: T.kind === "new_hire" ? {
        name: T.hire_name || "",
        title: T.hire_title || "",
        dept: T.hire_dept || "",
        site: T.hire_site || "",
        worksWith: T.hire_works_with || "",
        photoPath: T.hire_photo_path || null
      } : null,
      hirePhoto: T.hire_photo_path ? hirePhotoUrls[T.hire_photo_path] || null : null,
      pinned: !!(T.pinned_until && new Date(T.pinned_until).getTime() > Date.now()),
      mine: T.author_id === (e && e.id),
      canDelete: T.author_id === (e && e.id) || G
    })).sort((A, B) => A.pinned === B.pinned ? 0 : A.pinned ? -1 : 1))
  }, [e, G, nt, hirePhotoUrls]);
  (0, I.useEffect)(() => {
    Zn();
    let S = setInterval(Zn, 5e3);
    return () => clearInterval(S)
  }, [Zn]);
  let [Jv, Xv] = (0, I.useState)([]), eh = async S => {
    f(""), aa("");
    let L = S.indexOf(":") !== -1 ? S.split(":")[0] : null,
      T = S.indexOf(":") !== -1 ? Hp(S) : S,
      U = l.has(S),
      N = new Set(l);
    if (U ? N.delete(S) : (N.add(S), L && N.add(L)), u(N), U) {
      let {
        error: Y
      } = await F.from("group_members").delete().eq("profile_id", e.id).eq("group_slug", T);
      if (_t(), Y) {
        f(Y.message), aa(Y.message), h();
        return
      }
      L && (Array.from(N).some(Q => Q.indexOf(L + ":") === 0) || await F.from("group_members").delete().eq("profile_id", e.id).eq("group_slug", L))
    } else {
      let Y = [{
        profile_id: e.id,
        group_slug: T
      }];
      L && Y.push({
        profile_id: e.id,
        group_slug: L
      });
      let {
        error: J
      } = await F.from("group_members").upsert(Y, {
        onConflict: "profile_id,group_slug"
      });
      if (_t(), J) {
        f(J.message), aa(J.message), h();
        return
      }
    }
    await h(), m && (Va(m.id), tl(m.id))
  }, Yv = async S => {
    let {
      error: L
    } = await F.from("feed_posts").insert({
      author_id: e.id,
      body: S.text,
      audience: S.audience || "Everyone",
      audience_dept: S.audienceDeptId || null
    });
    if (L) {
      Z(L.message);
      return
    }
    Zn()
  }, [Qv, Zv] = (0, I.useState)([]), [e1, Xa] = (0, I.useState)(""), Co = (0, I.useCallback)(async () => {
    let {
      data: S,
      error: L
    } = await F.from("listings").select("id, seller_id, title, price, cat, descr, photo_path, sold, created_at, profiles(display_name)").order("created_at", {
      ascending: !1
    });
    if (L) {
      Xa(L.message);
      return
    }
    let T = (S || []).map(N => N.photo_path).filter(Boolean),
      U = {};
    if (T.length) {
      let {
        data: N
      } = await F.storage.from("listing-photos").createSignedUrls(T, 3600);
      (N || []).forEach(Y => {
        Y.signedUrl && (U[Y.path] = Y.signedUrl)
      })
    }
    Zv((S || []).map(N => ({
      id: N.id,
      sellerId: N.seller_id,
      title: N.title,
      price: N.price || "Contact for price",
      cat: N.cat,
      desc: N.descr || "",
      photo: N.photo_path ? U[N.photo_path] : null,
      sold: N.sold,
      time: Mp(N.created_at),
      seller: N.profiles && N.profiles.display_name || "Someone",
      mine: !!(e && N.seller_id === e.id)
    })))
  }, [e]);
  (0, I.useEffect)(() => {
    Co();
    let S = setInterval(Co, 2e4);
    return () => clearInterval(S)
  }, [Co]);
  let t1 = async S => {
    Xa("");
    let L = null;
    if (S.photo) {
      let U = await (await fetch(S.photo)).blob();
      L = e.id + "/" + Date.now() + ".jpg";
      let {
        error: N
      } = await F.storage.from("listing-photos").upload(L, U, {
        contentType: "image/jpeg"
      });
      if (N) return Xa(N.message), !1
    }
    let {
      error: T
    } = await F.from("listings").insert({
      seller_id: e.id,
      title: S.title,
      price: S.price || null,
      cat: S.cat,
      descr: S.desc || null,
      photo_path: L
    });
    return T ? (Xa(T.message), !1) : (Co(), !0)
  }, a1 = async (S, L) => {
    Xa("");
    let {
      error: T
    } = await F.from("listings").update({
      sold: L
    }).eq("id", S);
    if (T) {
      Xa(T.message);
      return
    }
    Co()
  }, r1 = async S => {
    Xa("");
    let {
      error: L
    } = await F.from("listings").delete().eq("id", S);
    if (L) {
      Xa(L.message);
      return
    }
    Co()
  }, o1 = S => Xv(L => [...L, S]), n1 = (S, L) => v({
    name: S.name,
    seedInterest: L
  }), i1 = {
    home: "The Break Room",
    groups: "Groups",
    messages: "Messages",
    people: "Directory",
    me: "Profile"
  }, Ud = Md.filter(S => S.active !== !1).length, th = {
    home: "Specialty Orthopedic Group",
    groups: "Find your people",
    messages: "",
    people: Ud ? Ud + (Ud === 1 ? " teammate" : " teammates") : "",
    me: ""
  }, [codesOpen, setCodesOpen] = (0, I.useState)(!1),
    [docsOpen, setDocsOpen] = (0, I.useState)(!1),
    [docOpen, setDocOpen] = (0, I.useState)(null),
    [docList, setDocList] = (0, I.useState)([]),
    s1 = m || b, ah = docOpen ? (0, i.jsx)(DoctorScreen, {
    doc: docOpen,
    photoFor: ft,
    back: () => setDocOpen(null),
    onMessage: (S, L) => { setDocOpen(null), setDocsOpen(!1), el(S, L) }
  }) : docsOpen ? (0, i.jsx)(DoctorsScreen, {
    docs: docList,
    photoFor: ft,
    back: () => setDocsOpen(!1),
    openDoc: S => setDocOpen(S)
  }) : codesOpen ? (0, i.jsx)(CodesScreen, {
    back: () => setCodesOpen(!1)
  }) : $n ? (0, i.jsx)(cb, {
    anniversaries: ko,
    back: () => bo(!1),
    photoFor: ft,
    wished: myWishes.anniversary,
    onWish: nm => sendWishTo("anniversary", nm)
  }) : pl ? (0, i.jsx)(ub, {
    items: Nt,
    back: () => hl(!1)
  }) : je ? (0, i.jsx)(gb, {
    cup: me,
    back: () => Ct(!1),
    logUnits: ta
  }) : q ? (0, i.jsx)(pb, {
    birthdays: se,
    cupcake: Hn,
    back: () => ke(!1),
    photoFor: ft,
    wished: myWishes.birthday,
    onWish: nm => sendWishTo("birthday", nm)
  }) : Ha ? (0, i.jsx)(vb, {
    items: Ut,
    catalog: It,
    back: () => vo(!1)
  }) : B ? (0, i.jsx)(Fb, {
    item: B.item,
    acked: W.has(B.idx),
    onAck: () => {
      K(S => new Set(S).add(B.idx)), X(null)
    },
    back: () => X(null)
  }) : E ? (0, i.jsx)(Pb, {
    item: E,
    back: () => P(null)
  }) : _ && G ? (0, i.jsx)(Rb, {
    people: Md,
    meId: e && e.id,
    setPersonRole: Qp,
    setPersonActive: Zp,
    adminErr: _d,
    back: () => C(!1),
    role: "admin",
    cup: me,
    saveCup: Sa,
    closeCupSeason: Pr,
    photoFor: ft,
    setPersonPhoto: nl,
    clearPersonPhoto: Id,
    photoErr: rl,
    challenges: ne,
    addChallenge: Rr,
    editChallenge: Pn,
    removeChallenge: go,
    merch: Ut,
    addMerch: yo,
    editMerch: Fn,
    removeMerch: On,
    catalog: It,
    editCatalog: Se,
    removeDept: removeFromDept,
    announceMerch: announceMerch,
    birthdays: se,
    addBirthday: sl,
    editBirthday: Vn,
    removeBirthday: Gn,
    importBirthdays: ll,
    cupcake: Hn,
    editCupcake: Rd,
    recognition: Nt,
    addRec: Td,
    editRec: re,
    removeRec: Jn,
    anniversaries: ko,
    addAnniv: He,
    editAnniv: Ka,
    removeAnniv: Kn,
    importAnniv: Ad,
    questions: ul,
    addQ: fl,
    editQ: Br,
    removeQ: Pd,
    deptList: nt,
    addDept: addDeptRow,
    renameDept: renameDeptRow,
    retireDept: retireDeptRow,
    lunches: lunchRows,
    addLunch: addLunchRow,
    removeLunch: removeLunchRow,
    addNewHire: addNewHire
  }) : x ? (0, i.jsx)(Ab, {
    back: () => w(!1),
    msgs: Io,
    setMsgs: Fd
  }) : A ? (0, i.jsx)(_b, {
    thread: A,
    photoFor: ft,
    me: e,
    seedInterest: A.seedInterest,
    back: () => {
      v(null), ba()
    }
  }) : null;
  return (0, i.jsxs)("div", {
    id: "br-shell",
    style: {
      minHeight: "100vh",
      background: d.paper,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      fontFamily: p
    },
    children: [(0, i.jsx)("style", {
      children: "@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesk:wght@400..700&display=swap'); *::-webkit-scrollbar{width:0;height:0} ::placeholder{color:#8C9691;opacity:1} [style*=\"overflow-y\"]{overscroll-behavior:contain;-webkit-overflow-scrolling:touch} @media (max-width:520px){#br-shell{padding:0 !important;min-height:0 !important}#br-frame{position:fixed !important;inset:0 !important;width:auto !important;max-width:none !important;height:auto !important;border-radius:0 !important;border:none !important;box-shadow:none !important}input,textarea,select{font-size:16px !important}}"
    }), (0, i.jsxs)("div", {
      id: "br-frame",
      style: {
        width: 400,
        maxWidth: "100%",
        height: 780,
        background: d.paper,
        borderRadius: 34,
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(28,27,22,0.28)",
        border: "1px solid rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        position: "relative"
      },
      children: [(0, i.jsx)("div", {
        style: {
          padding: "calc(8px + env(safe-area-inset-top, 0px)) 0 0",
          background: x || _ || !r ? d.pine : "transparent"
        }
      }), r ? ah ? (0, i.jsx)("div", {
        style: {
          flex: 1,
          overflow: "hidden"
        },
        children: ah
      }) : (0, i.jsxs)(i.Fragment, {
        children: [!s1 && (0, i.jsxs)("div", {
          style: {
            padding: "8px 16px 12px"
          },
          children: [(0, i.jsx)("div", {
            style: {
              fontFamily: D,
              fontWeight: 800,
              fontSize: 25,
              color: d.ink,
              letterSpacing: "-0.02em",
              lineHeight: 1
            },
            children: i1[n]
          }), th[n] && (0, i.jsx)("div", {
            style: {
              fontFamily: p,
              fontSize: 12.5,
              color: d.faint,
              marginTop: 3
            },
            children: th[n]
          })]
        }), (0, i.jsx)("div", {
          "data-dirpane": "1",
          style: {
            flex: 1,
            overflowY: "auto"
          },
          children: m ? (0, i.jsx)(bb, {
            myName: Ga,
            memberCount: zn[m.id] === void 0 ? null : zn[m.id],
            group: m,
            joined: l,
            toggle: eh,
            back: () => g(null),
            openPerson: S => {
              personFromGroup.current = m; g(null), setPersonOpen(S)
            },
            members: Dn,
            posts: qa[m.id] || [],
            onPost: S => bd(m.id, S),
            onDeletePost: S => Ld(m.id, S),
            onLoad: () => {
              Va(m.id), tl(m.id)
            },
            err: Un,
            isAdmin: G,
            onLike: S => al(m.id, S),
            photoFor: ft
          }) : personOpen ? (0, i.jsx)(PersonScreen, {
            person: personOpen,
            depts: nt,
            meId: e && e.id,
            photoFor: ft,
            back: () => {
              setPersonOpen(null);
              if (personFromGroup.current) { let bk = personFromGroup.current; personFromGroup.current = null; g(bk); return }
              /* two frames: the first lets React swap the screen back in, the second
                 runs after layout so the list is tall enough to scroll. */
              requestAnimationFrame(() => requestAnimationFrame(() => {
                let pane = document.querySelector("[data-dirpane]");
                if (pane) pane.scrollTop = personScrollRef.current || 0
              }))
            },
            onMessage: (S, L) => { setPersonOpen(null); el(S, L) }
          }) : b ? (0, i.jsx)(Ib, {
            person: b,
            photoFor: ft,
            myTags: l,
            back: () => k(null),
            onMessage: (S, L) => n1(S, L)
          }) : (0, i.jsxs)(i.Fragment, {
            children: [n === "home" && (0, i.jsx)(wb, {
              myName: Ga,
              myDepts: Ov,
              posts: Bd,
              addPost: Yv,
              onDeletePost: Kv,
              addComment: addFeedComment,
              deleteComment: deleteFeedComment,
              onReceipts: P,
              acked: W,
              onOpenPolicy: (S, L) => X({
                item: S,
                idx: L
              }),
              challenges: ne,
              onBack: Er,
              questions: ul,
              myVotes: cl,
              voteQ: Ed,
              merch: Ut,
              catalog: It,
              onOpenMerch: () => vo(!0),
              onOpenBirthdays: () => ke(!0),
              birthdays: se,
              recognition: Nt,
              onOpenRec: () => hl(!0),
              anniversaries: ko,
              onOpenAnniv: () => bo(!0),
              photoFor: ft,
              cup: me,
              lunches: lunchRows,
              onOpenCup: () => Ct(!0)
            }), n === "groups" && (0, i.jsx)(Sb, {
              joined: l,
              toggle: eh,
              open: g,
              requests: Jv,
              addRequest: o1,
              counts: zn,
              deptCounts: deptCounts
            }), n === "market" && (0, i.jsx)(Ob, {
              listings: Qv,
              addListing: t1,
              toggleSold: a1,
              removeListing: r1,
              onMessage: (S, L, T) => el(S, L, "Hey " + Kp(L) + '! Is "' + T + '" still available?'),
              meId: e && e.id,
              isAdmin: G,
              err: e1
            }), n === "messages" && (0, i.jsx)(Cb, {
              open: v,
              photoFor: ft,
              threads: Fr,
              err: Zs,
              people: Md,
              meId: e && e.id,
              onCreateGroup: makeGroupChat,
              onNew: () => s("people")
            }), n === "people" && (0, i.jsx)(Lb, {
              openPerson: (S, scrollTop) => { personScrollRef.current = scrollTop || 0; setPersonOpen(S) },
              openDoctors: () => setDocsOpen(!0),
              doctorCount: docList.length,
              onMessage: (S, L) => el(S, L),
              people: Md,
              depts: nt,
              err: zv || Zs,
              isAdmin: G,
              meId: e && e.id,
              setPersonRole: Qp,
              setPersonActive: Zp,
              removeDept: removeFromDept,
              photoFor: ft
            }), n === "me" && (0, i.jsx)(Eb, {
              onOpenCodes: () => setCodesOpen(!0),
              deptErr: Bv,
              allDepts: nt,
              myDeptIds: Dd,
              joinDept: Vv,
              leaveDept: Gv,
              profile: t,
              signOut: a,
              email: e && e.email,
              photo: ka || So[Ga] || null,
              setPhoto: La,
              photoErr: rl,
              joined: l,
              onAdmin: () => C(!0),
              isAdmin: G,
              saveProfile: $v,
              pushState: Mv,
              pushErr: Uv,
              enablePush: Nv,
              disablePush: Wv,
              notifyPrefs: Xp,
              setNotifyPref: qv,
              sendTestPush: Hv,
              testMsg: jv,
              onRestart: () => {
                try {
                  localStorage.removeItem("br_onboarded")
                } catch {}
                o(!1)
              }
            })]
          })
        }), (0, i.jsx)("div", {
          style: {
            display: "flex",
            borderTop: "1px solid " + d.line,
            background: d.card,
            paddingBottom: "calc(6px + env(safe-area-inset-bottom, 0px))",
            flexShrink: 0
          },
          children: Bb.map(S => {
            let L = n === S.id && !m && !b,
              T = S.icon;
            return (0, i.jsxs)("button", {
              onClick: () => {
                s(S.id), g(null), k(null)
              },
              style: {
                flex: 1,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "9px 0 4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                color: L ? d.pine : d.faint
              },
              children: [(0, i.jsxs)("div", {
                style: {
                  position: "relative"
                },
                children: [(0, i.jsx)(T, {
                  size: 21,
                  strokeWidth: L ? 2.5 : 2
                }), S.id === "messages" && ml > 0 && (0, i.jsx)("span", {
                  style: {
                    position: "absolute",
                    top: -4,
                    right: -9,
                    background: d.honey,
                    color: "#fff",
                    fontFamily: p,
                    fontWeight: 700,
                    fontSize: 9,
                    minWidth: 15,
                    height: 15,
                    borderRadius: 999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 4px"
                  },
                  children: ml
                })]
              }), (0, i.jsx)("span", {
                style: {
                  fontFamily: p,
                  fontSize: 10.5,
                  fontWeight: L ? 700 : 500
                },
                children: S.label
              })]
            }, S.id)
          })
        })]
      }) : (0, i.jsx)("div", {
        style: {
          flex: 1,
          overflow: "hidden"
        },
        children: (0, i.jsx)(nb, {
          myDept: t && t.dept || "",
          done: S => {
            o(!0);
            try {
              localStorage.setItem("br_onboarded", "1")
            } catch {}
            typeof S == "string" && s(S)
          }
        })
      })]
    })]
  })
}

function Jp() {
  let [e, t] = (0, I.useState)({
    phase: "loading",
    me: null,
    profile: null
  }), a = (0, I.useCallback)(async n => {
    let {
      data: s
    } = await F.from("profiles").select("*").eq("id", n.id).single();
    s && s.display_name && (mo = s.display_name), t({
      phase: "in",
      me: n,
      profile: s || {
        display_name: n.email,
        dept: "SOG"
      }
    })
  }, []);
  (0, I.useEffect)(() => {
    let n = !0;
    F.auth.getSession().then(({
      data: l
    }) => {
      n && (l.session ? a(l.session.user) : t({
        phase: "out",
        me: null,
        profile: null
      }))
    });
    let {
      data: s
    } = F.auth.onAuthStateChange((l, u) => {
      n && (u ? a(u.user) : t({
        phase: "out",
        me: null,
        profile: null
      }))
    });
    return () => {
      n = !1, s.subscription.unsubscribe()
    }
  }, [a]);
  let r = async () => {
    await F.auth.signOut()
  }, o = n => (0, i.jsxs)("div", {
    style: {
      minHeight: "100vh",
      background: "#0F1A16",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    },
    children: [(0, i.jsx)("style", {
      children: "@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesk:wght@400..700&display=swap'); *::-webkit-scrollbar{width:0;height:0} ::placeholder{color:#8C9691;opacity:1} [style*=\"overflow-y\"]{overscroll-behavior:contain;-webkit-overflow-scrolling:touch}"
    }), (0, i.jsx)("div", {
      style: {
        width: "100%",
        maxWidth: 430,
        height: "100vh",
        background: d.paper,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      },
      children: n
    })]
  });
  return Cv.indexOf("PASTE") === 0 ? o((0, i.jsxs)("div", {
    style: {
      padding: 24,
      fontFamily: p,
      fontSize: 14,
      color: d.ink,
      lineHeight: 1.5
    },
    children: [(0, i.jsx)("strong", {
      children: "One thing first."
    }), (0, i.jsx)("br", {}), "Open this file on GitHub and paste your publishable key where it says PASTE_YOUR_PUBLISHABLE_KEY_HERE, then commit and reload."]
  })) : e.phase === "loading" ? o((0, i.jsx)("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: p,
      fontSize: 13,
      color: d.faint
    },
    children: "Loading\u2026"
  })) : e.phase === "out" ? o((0, i.jsx)(Db, {})) : e.profile && e.profile.active === !1 ? o((0, i.jsxs)("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 28,
      textAlign: "center"
    },
    children: [(0, i.jsx)("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 14,
        background: d.line,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 14
      },
      children: (0, i.jsx)(wt, {
        size: 22,
        color: d.sub
      })
    }), (0, i.jsx)("div", {
      style: {
        fontFamily: D,
        fontWeight: 700,
        fontSize: 19,
        color: d.ink,
        marginBottom: 6
      },
      children: "Your access is turned off"
    }), (0, i.jsx)("div", {
      style: {
        fontFamily: p,
        fontSize: 13,
        color: d.sub,
        lineHeight: 1.5,
        maxWidth: 300
      },
      children: "This account has been deactivated. If that's a mistake, reach out to whoever manages The Break Room."
    }), (0, i.jsx)("button", {
      onClick: r,
      style: {
        marginTop: 18,
        background: d.card,
        border: "1px solid " + d.line,
        borderRadius: 12,
        padding: "11px 22px",
        fontFamily: p,
        fontWeight: 700,
        fontSize: 13,
        color: d.sub,
        cursor: "pointer"
      },
      children: "Sign out"
    })]
  })) : (0, i.jsx)(zb, {
    me: e.me,
    profile: e.profile,
    signOut: r
  })
}
var Pv = Qa(Xs());
(0, Ev.createRoot)(document.getElementById("root")).render((0, Pv.jsx)(Jp, {}));
})();
