(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    309: function (e, a, s) {
      Promise.resolve().then(s.bind(s, 4023)),
        Promise.resolve().then(s.t.bind(s, 8173, 23));
    },
    4023: function (e, a, s) {
      "use strict";
      s.d(a, {
        default: function () {
          return c;
        },
      });
      var t = s(7437);
      let i = (0, s(4593).eI)(
        "https://llerozewmfsivnhgroch.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZXJvemV3bWZzaXZuaGdyb2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwODIxODksImV4cCI6MjA0NDY1ODE4OX0.ytsR7KzNsyyCRoLrDtJ0PDyJCX6cXXhj--M_zbT8tNM"
      );
      var l = s(6648),
        n = s(2265);
      function r() {
        let e = ["red", "yellow", "green", "blue"],
          a = "wedding_guestbook",
          [s, r] = (0, n.useState)(""),
          [d, c] = (0, n.useState)(""),
          [m, h] = (0, n.useState)([]),
          x = (a, s) => {
            let t = (s - 1 - a) % e.length;
            return e[t];
          },
          g = () => {
            try {
              return (
                i
                  .channel(a)
                  .on(
                    "postgres_changes",
                    {
                      event: "*",
                      schema: "public",
                      table: "wedding_guestbook",
                    },
                    (e) => {
                      if ("INSERT" === e.eventType) {
                        let {
                          created_at: a,
                          id: s,
                          message: t,
                          uid: i,
                          channel: l,
                          name: n,
                        } = e.new;
                        h((e) => [
                          {
                            id: s,
                            created_at: a,
                            message: t,
                            uid: i,
                            channel: l,
                            name: n,
                          },
                          ...e,
                        ]);
                      }
                    }
                  )
                  .subscribe(),
                () => i.channel(a).unsubscribe()
              );
            } catch (e) {
              console.error(e);
            }
          };
        (0, n.useEffect)(() => {
          (async () => {
            let e = null;
            try {
              let { data: a } = await i
                .from("wedding_guestbook")
                .select("*")
                .order("created_at", { ascending: !1 });
              e = a;
            } catch (e) {
              console.error(e);
            }
            null != e && h(e);
          })(),
            g();
        }, []);
        let o = async (e) => {
          if ((e.preventDefault(), "" !== s)) {
            try {
              let e = "Guest";
              "" !== d && (e = d),
                await i
                  .from("wedding_guestbook")
                  .insert({ message: s, name: e });
            } catch (e) {
              console.error(e);
            }
            r("");
          }
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              id: "chatbox",
              children: m.map((e, a) => {
                let s = "avatar bg-chat-".concat(x(a, m.length), " mt-0.5");
                return (0, t.jsxs)(
                  "div",
                  {
                    className: "flex flex-row items-start mt-3",
                    children: [
                      (0, t.jsx)("div", {
                        className: s,
                        children: (0, t.jsx)(l.default, {
                          src: "/logos/FACE.png",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "ml-4",
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("span", {
                                className: "text-md text-white",
                                children: e.name,
                              }),
                              (0, t.jsx)("span", {
                                className: "hidden",
                                children: e.created_at,
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "text-xs text-[#A3A1A1]",
                            children: (0, t.jsx)("p", { children: e.message }),
                          }),
                        ],
                      }),
                    ],
                  },
                  a
                );
              }),
            }),
            (0, t.jsxs)("form", {
              className: "flex flex-col mt-4",
              onSubmit: o,
              children: [
                (0, t.jsx)("span", {
                  className: "text-white",
                  children: "Name",
                }),
                (0, t.jsx)("input", {
                  type: "text",
                  className: "mt-2 text-black p-1",
                  id: "",
                  name: "name",
                  onChange: (e) => c(() => e.target.value),
                  value: d,
                }),
                (0, t.jsx)("span", {
                  className: "mt-3 text-white",
                  children: "Message",
                }),
                (0, t.jsx)("textarea", {
                  className: "mt-2 text-black p-1",
                  name: "message",
                  onChange: (e) => r(() => e.target.value),
                  value: s,
                }),
                (0, t.jsx)("button", {
                  className: "mt-2 text-white",
                  children: "Send",
                }),
              ],
            }),
          ],
        });
      }
      var d = s(5380);
      function c(e) {
        var a;
        let { searchParams: s } = e,
          i = null == s ? void 0 : s.slug,
          c =
            null !== (a = null == s ? void 0 : s.guest) && void 0 !== a
              ? a
              : "Kita atau Stalker?";
        console.log(s);
        let m = [
            "rahma-jenaka",
            "nicol-jenaka",
            "prili-jenaka",
            "nica-jenaka",
            "iki-jenaka",
            "ikbal-jenaka",
            "teh-ama",
            "teh-novi",
            "mayang-temen-alya",
            "indah-temen-alya",
            "shania-temen-alya",
            "syahrul-temen-alya",
            "fq-temen-alya",
            "anne-temen-alya",
            "mamski-temen-alya",
            "damas-temen-yohan",
            "ridwan-temen-yohan",
            "wahid-temen-yohan",
            "lianda-temen-yohan",
            "adit-temen-yohan",
            "keluarga-alya",
            "keluarga-yohan",
            "idam-temen-yohan",
          ].includes("" !== i ? i : null),
          [h, x] = (0, n.useState)(!1),
          [g, o] = (0, n.useState)(!1),
          [p, u] = (0, n.useState)(!m),
          [j, N] = (0, n.useState)("" !== c ? c : "Kita atau Stalker?"),
          k = () => {
            let e = new Audio("/musics/sothisislove.mp3");
            (e.loop = !0),
              e.play().catch(() => {
                document.addEventListener(
                  "click",
                  () => {
                    e.play();
                  },
                  { once: !0 }
                );
              });
          };
        return (
          (0, n.useEffect)(() => {
            g && k();
          }, [g]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                id: "login-page",
                class: h ? "hide-login" : "show-login",
                className: "bg-black",
                style: {
                  maxWidth: "400px",
                  position: "fixed",
                  top: 0,
                  zIndex: 1020,
                  height: "100vh",
                  width: "100%",
                  minHeight: "100%",
                },
                children: (0, t.jsxs)("div", {
                  className: "flex flex-col items-center justify-center",
                  children: [
                    (0, t.jsx)(l.default, {
                      src: "/logos/NIKAH FIX.png",
                      width: 125,
                      height: 48,
                      alt: "NIKAHFIX",
                      className: "mt-[4rem]",
                    }),
                    (0, t.jsxs)("span", {
                      className: "mt-[5rem] text-white",
                      children: ["Siapa ", p ? "yang Menonton?" : "Invited?"],
                    }),
                    (0, t.jsxs)("div", {
                      id: "guest-icon",
                      className:
                        "flex flex-col items-center justify-center cursor-pointer",
                      onClick: () => {
                        x(!0);
                      },
                      children: [
                        (0, t.jsx)(l.default, {
                          src: "/logos/Guest Icon.png",
                          width: 100,
                          height: 100,
                          alt: "Kita atau Stalker?",
                          className: "mt-8",
                        }),
                        (0, t.jsx)("span", {
                          className: "mt-2 text-white",
                          children: j,
                        }),
                      ],
                    }),
                    (0, t.jsx)("span", {
                      className:
                        "mt-[4rem] px-4 py-1 text-xs text-[#D9D9D966] border border-gray-500",
                      children: "CLICK YOUR NAME",
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("div", {
                id: "main-poster",
                class: g ? "hide-poster" : "show-poster",
                className: "bg-black",
                style: {
                  maxWidth: "400px",
                  position: "fixed",
                  top: 0,
                  zIndex: 1e3,
                  height: "100vh",
                },
                children: [
                  (0, t.jsx)(l.default, {
                    src: "/images/THUMBNAIL.png",
                    width: 300,
                    height: 500,
                    alt: "Fauzan & Nazwa",
                    layout: "responsive",
                  }),
                  (0, t.jsxs)("div", {
                    className: "px-8",
                    style: { marginTop: "-79.5%" },
                    children: [
                      (0, t.jsx)(l.default, {
                        src: "/logos/NIKAH FIX.png",
                        width: 56,
                        height: 15,
                        alt: "Nikahfix",
                        className: "ml-0.5 mb-2",
                      }),
                      (0, t.jsx)("h1", {
                        className:
                          "text-white text-[2.03rem] font-bold leading-9",
                        children: "Fauzan & Nazwa:",
                      }),
                      (0, t.jsx)("h1", {
                        className:
                          "text-white text-[2.03rem] font-bold leading-9 mb-3",
                        children: "Sebelum Hari H",
                      }),
                      (0, t.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, t.jsx)("span", {
                            className:
                              "bg-[#E50913] py-1.5 px-2 rounded text-[10px] text-white font-bold",
                            children: "Coming soon",
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "text-white text-[14px] font-medium ml-3",
                            children: "27 Agustus ????",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("span", {
                            className:
                              "bg-[#4D4D4D] py-1.5 px-2 rounded-2xl text-[10px] text-white",
                            children: "#romantic",
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "bg-[#4D4D4D] py-1.5 px-2 rounded-2xl text-[10px] text-white ml-2",
                            children: "#getmarried",
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "bg-[#4D4D4D] py-1.5 px-2 rounded-2xl text-[10px] text-white ml-2",
                            children: "#action",
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "bg-[#4D4D4D] py-1.5 px-2 rounded-2xl text-[10px] text-white ml-2",
                            children: "#comedy",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col items-center mt-6",
                        onClick: () => {
                          o(!0);
                        },
                        children: [
                          (0, t.jsx)("span", {
                            class: "bounce",
                            children: (0, t.jsx)("svg", {
                              class: "w-6 h-6 text-[#A3A1A1] dark:text-white",
                              "aria-hidden": "true",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 14 8",
                              children: (0, t.jsx)("path", {
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7",
                              }),
                            }),
                          }),
                          (0, t.jsx)("a", {
                            href: "#",
                            onClick: () => {
                              o(!0);
                            },
                            id: "button-detail",
                            className:
                              "text-lg leading-5 text-white font-bold mt-4 hover:text-white-200 focus:text-gray-200 active:text-sm",
                            children: (0, t.jsx)("span", {
                              children: "SEE THE DETAIL",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                class: g ? "show-detail" : "hide-detail",
                className: "bg-black",
                style: { zIndex: 100 },
                children: [
                  (0, t.jsx)("div", {
                    children: (0, t.jsx)(d.Z, { src: "/videos/VID_20241030_150233.mp4" }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "px-4 py-6",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex flex-wrap mb-1.5",
                        children: [
                          (0, t.jsx)(l.default, {
                            src: "/logos/N.png",
                            width: 10,
                            height: 18,
                            alt: "Nikahfix",
                            className: "mr-2",
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "text-[#A3A1A1] text-xs mt-0.5 tracking-widest",
                            children: "DOCUMENTER",
                          }),
                        ],
                      }),
                      (0, t.jsx)("h2", {
                        className: "text-lg leading-5 text-white font-bold",
                        children: "Fauzan & Nazwa: Sebelum Hari H",
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex row content-center text-sm leading-4 my-2",
                        children: [
                          (0, t.jsx)("span", {
                            className: "text-green-500 mr-2",
                            children: "100% match",
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "bg-[#4D4D4D] text-white text-xs px-1 py-0 mr-2 rounded-sm",
                            children: "SU",
                          }),
                          (0, t.jsx)("span", {
                            className: "text-white mr-2",
                            children: "2024",
                          }),
                          (0, t.jsx)("span", {
                            className: "text-white mr-2",
                            children: "10h 30m",
                          }),
                          (0, t.jsx)("span", {
                            className: "mr-2",
                            children: (0, t.jsx)(l.default, {
                              src: "/images/ICON 4K.png",
                              width: 16,
                              height: 16,
                              alt: "4K",
                            }),
                          }),
                          (0, t.jsx)("span", {
                            children: (0, t.jsx)(l.default, {
                              src: "/images/ICON HD.png",
                              width: 16,
                              height: 16,
                              alt: "4K",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("span", {
                        className:
                          "bg-[#E50913] py-1 px-2 rounded text-sm text-white font-bold",
                        children: "Coming soon on 27 August ????",
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-2",
                        children: [
                          (0, t.jsx)("p", {
                            className:
                              "text-white text-sm leading-[1.15rem] mb-2",
                            children:
                              "Setelah Fauzan dan Nazwa dipertemukan di bisnis digital unimed dalam situasi yang tak disangka sangka, di mana keduanya masih bertarung dengan tugas hahaha, jangan bosen dan tetap bertahan, semoga kita sampai nikah yaa.",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-[#A3A1A1] text-[10px] leading-[1rem]",
                            children:
                              '"Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah)" (Q.S Az-Zariyah: 49)',
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-6",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "text-lg leading-5 text-white font-bold",
                            children: "Breaking News",
                          }),
                          (0, t.jsx)(l.default, {
                            src: "/images/BREAKING NEWS.png",
                            width: 500,
                            height: 300,
                            alt: "Breaking News",
                            layout: "responsive",
                            className: "my-4",
                          }),
                          p &&
                            (0, t.jsxs)("div", {
                              className:
                                "text-[#A3A1A1] text-sm italic leading-[1.15rem]",
                              children: [
                                (0, t.jsx)("p", {
                                  className: "pr-1",
                                  children:
                                    "Halo! Karena kalian adalah orang penting yang mengisi hari-hari kami, kami ingin informasikan bahwa kami akan segera menikah! <3",
                                }),
                                (0, t.jsx)("p", {
                                  className: "mt-4",
                                  children:
                                    "Tapi sebelumnya, kami mohon maaf kepada teman dan kerabat semua karena tidak bisa mengundang kalian hadir di hari bahagia kami, dikarenakan pernikahan kami bersifat intimate wedding yang dilaksanakan di Medan/Binjai dan hanya dihadiri oleh keluarga dan orang terdekat.",
                                }),
                                (0, t.jsx)("p", {
                                  className: "mt-4",
                                  children:
                                    "Walaupun begitu, kami harapkan sebaik-baiknya doa untuk kelancaran pernikahan dan hari-hari bahagia setelahnya.",
                                }),
                                (0, t.jsx)("p", {
                                  className: "mt-4",
                                  children: "Dengan penuh cinta,",
                                }),
                                (0, t.jsx)("p", {
                                  className: "",
                                  children: "The bride and groom <3",
                                }),
                              ],
                            }),
                          !p &&
                            (0, t.jsxs)("div", {
                              className:
                                "text-[#A3A1A1] text-sm italic leading-[1.15rem]",
                              children: [
                                (0, t.jsx)("p", {
                                  className: "pr-1",
                                  children:
                                    "Halo! Kami ingin informasikan bahwa kami akan segera menikah, dan kamu jadi 1 dari 100 orang yang kami undang untuk hadir di hari bahagia kami!",
                                }),
                                (0, t.jsx)("p", {
                                  className: "mt-4",
                                  children:
                                    "Perlu diketahui, karena bersifat intimate wedding dan hanya mengundang orang terdekat, maka dari itu kami harapkan untuk tidak menyebarluaskan informasi detail terkait hari pernikahan kami (misalnya, lokasi dan waktu acara)",
                                }),
                                (0, t.jsx)("p", {
                                  className: "mt-4",
                                  children:
                                    "Kami tunggu kedatangannya di hari bahagia kami ya!",
                                }),
                                (0, t.jsx)("p", {
                                  className: "mt-4",
                                  children: "Dengan penuh cinta,",
                                }),
                                (0, t.jsx)("p", {
                                  className: "",
                                  children: "The bride and groom <3",
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-8",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "text-lg leading-5 text-white font-bold",
                            children: "Bride and Groom",
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-x-7 mt-4",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "grid-cols-2",
                                children: [
                                  (0, t.jsx)(l.default, {
                                    src: "/images/BRIDE.png",
                                    width: 300,
                                    height: 164,
                                    alt: "Alya",
                                  }),
                                  (0, t.jsx)("h4", {
                                    className:
                                      "text-sm text-white font-medium mt-2",
                                    children: "Nazwa Mutiara Sani",
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-[#A3A1A1] text-xs leading-4 mt-2",
                                    children:
                                      "Spill nama camer dong",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "grid-cols-2",
                                children: [
                                  (0, t.jsx)(l.default, {
                                    src: "/images/GROOM.png",
                                    width: 300,
                                    height: 164,
                                    alt: "Yohan",
                                  }),
                                  (0, t.jsx)("h4", {
                                    className:
                                      "text-sm text-white font-medium mt-2",
                                    children: "Fauzan Al Gholi",
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-[#A3A1A1] text-xs leading-4 mt-2",
                                    children:
                                      "Putra dari Bapak... kasih tau gak yaa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      !p &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsxs)("div", {
                              className: "mt-8",
                              children: [
                                (0, t.jsx)("h2", {
                                  className:
                                    "text-lg leading-5 text-white font-bold",
                                  children: "Location",
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex gap-x-4 mt-4",
                                  children: [
                                    (0, t.jsx)(l.default, {
                                      src: "/images/LOCATION RESTO.png",
                                      width: 165,
                                      height: 200,
                                      alt: "Akad",
                                      className: "grid-cols-2 rounded-lg",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "flex grid-cols-2",
                                      children: (0, t.jsxs)("div", {
                                        className: "my-auto",
                                        children: [
                                          (0, t.jsx)("p", {
                                            className: "text-white mb-2",
                                            children: "Warna-Warni Resto",
                                          }),
                                          (0, t.jsx)("p", {
                                            className: "text-xs text-[#A3A1A1]",
                                            children:
                                              "Jl. Inspeksi Kalimalang No.36,",
                                          }),
                                          (0, t.jsx)("p", {
                                            className: "text-xs text-[#A3A1A1]",
                                            children: "Kec. Tambun Selatan,",
                                          }),
                                          (0, t.jsx)("p", {
                                            className: "text-xs text-[#A3A1A1]",
                                            children: "Kabupaten Bekasi",
                                          }),
                                          (0, t.jsx)("a", {
                                            className:
                                              "text-xs text-white mt-2 underline",
                                            href: "https://maps.app.goo.gl/xtwc8Rf6hmiriWfq5",
                                            target: "_blank",
                                            children: "Show Location",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "mt-8",
                              children: [
                                (0, t.jsx)("h2", {
                                  className:
                                    "text-lg leading-5 text-white font-bold",
                                  children: "Timeline",
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex gap-x-4 mt-4",
                                  children: [
                                    (0, t.jsx)(l.default, {
                                      src: "/images/AKAD.png",
                                      width: 165,
                                      height: 200,
                                      alt: "Akad",
                                      className: "grid-cols-2",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "flex grid-cols-2",
                                      children: (0, t.jsxs)("div", {
                                        className: "my-auto",
                                        children: [
                                          (0, t.jsx)("p", {
                                            className: "text-white mb-2",
                                            children: "Akad Nikah",
                                          }),
                                          (0, t.jsx)("p", {
                                            className: "text-xs text-[#A3A1A1]",
                                            children: "26 Oktober 2024",
                                          }),
                                          (0, t.jsx)("p", {
                                            className: "text-xs text-[#A3A1A1]",
                                            children: "09:00-10:00 WIB",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex gap-x-4 mt-4",
                                  children: [
                                    (0, t.jsx)(l.default, {
                                      src: "/images/RESEPSI.png",
                                      width: 165,
                                      height: 200,
                                      alt: "Resepsi",
                                      className: "grid-cols-2",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "flex grid-cols-2",
                                      children: (0, t.jsxs)("div", {
                                        className: "my-auto",
                                        children: [
                                          (0, t.jsx)("p", {
                                            className: "text-white mb-2",
                                            children: "Resepsi",
                                          }),
                                          (0, t.jsx)("p", {
                                            className: "text-xs text-[#A3A1A1]",
                                            children: "26 Oktober 2024",
                                          }),
                                          (0, t.jsx)("p", {
                                            className: "text-xs text-[#A3A1A1]",
                                            children: "10:30-12:00 WIB",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, t.jsxs)("div", {
                        className: "mt-8",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "text-lg leading-5 text-white font-bold",
                            children: "Our Love Story",
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-x-4 mt-4",
                            children: [
                              (0, t.jsx)(l.default, {
                                src: "/images/Episode/Episode_1.JPG",
                                width: 163,
                                height: 243,
                                alt: "Akad",
                                className: "grid-cols-2 rounded-lg",
                              }),
                              (0, t.jsx)("div", {
                                className: "flex grid-cols-2",
                                children: (0, t.jsxs)("div", {
                                  className: "my-auto",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className:
                                        "text-white mb-2 tracking-tighter",
                                      children:
                                        "Episode 1: How We Met Each Other that Time",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-xs text-[#A3A1A1]",
                                      children: "26m 10s",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "text-[#A3A1A1] text-xs mt-2",
                            children:
                              "Fauzan dan Nazwa pertama kali bertemu sebagai mahasiswa di kelompok yang sama. Kegiatan-kegiatan kecil kelas yang sering melibatkan orang-orang didala...",
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-x-4 mt-5",
                            children: [
                              (0, t.jsx)(l.default, {
                                src: "/images/Episode/Episode_2.JPG",
                                width: 165,
                                height: 200,
                                alt: "Akad",
                                className: "grid-cols-2 rounded-lg",
                              }),
                              (0, t.jsx)("div", {
                                className: "flex grid-cols-2",
                                children: (0, t.jsxs)("div", {
                                  className: "my-auto",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className:
                                        "text-white mb-2 tracking-tighter",
                                      children:
                                        "Episode 2: A Love That Grows With Time",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-xs text-[#A3A1A1]",
                                      children: "26m 10s",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "text-[#A3A1A1] text-xs mt-2",
                            children:
                              "Hari demi hari terlewati, sampai akhirnya mereka menyadari bahwa perasaan yang mereka miliki satu sama lain bukan sebatas teman sekelas belaka, melain...",
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-x-4 mt-5",
                            children: [
                              (0, t.jsx)(l.default, {
                                src: "/images/Episode/Episode_3.JPG",
                                width: 165,
                                height: 200,
                                alt: "Akad",
                                className: "grid-cols-2 rounded-lg",
                              }),
                              (0, t.jsx)("div", {
                                className: "flex grid-cols-2",
                                children: (0, t.jsxs)("div", {
                                  className: "my-auto",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className:
                                        "text-white mb-2 tracking-tighter",
                                      children:
                                        "Episode 3: Choose to Spend Life Together",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-xs text-[#A3A1A1]",
                                      children: "26m 10s",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "text-[#A3A1A1] text-xs mt-2",
                            children:
                              "Wawa said, kakak ini mah udh dijalanin baru dibuat cerita, kalo ini? Hahaha mau buat dokumentasi dulu baru dijalanin?",
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-x-4 mt-5",
                            children: [
                              (0, t.jsx)(l.default, {
                                src: "/images/Episode/Episode_4.JPG",
                                width: 165,
                                height: 243,
                                alt: "Akad",
                                className: "grid-cols-2 rounded-lg",
                              }),
                              (0, t.jsx)("div", {
                                className: "flex grid-cols-2",
                                children: (0, t.jsxs)("div", {
                                  className: "my-auto",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "text-white",
                                      children: "[Coming Soon]",
                                    }),
                                    (0, t.jsx)("p", {
                                      className:
                                        "text-white mb-2 tracking-tighter",
                                      children:
                                        "Final Episode: The Beginning of Forever",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-xs text-[#A3A1A1]",
                                      children: "26m 10s",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "text-[#A3A1A1] text-xs mt-2",
                            children:
                              "Wawa said, kakak ini mah udh dijalanin baru dibuat cerita, kalo ini? Hahaha mau buat dokumentasi dulu baru dijalanin?",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-8",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "text-lg leading-5 text-white font-bold",
                            children: "Our Gallery",
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-x-3 mt-4",
                            children: [
                              (0, t.jsx)("div", {
                                className: "grid-cols-3",
                                children: (0, t.jsx)(l.default, {
                                  src: "/images/galleries/Gallery_1.png",
                                  width: 200,
                                  height: 200,
                                  alt: "Gallery 1",
                                  layout: "responsive",
                                  className: "image-gallery",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "grid-cols-3",
                                children: (0, t.jsx)(l.default, {
                                  src: "/images/galleries/Gallery_2.png",
                                  width: 200,
                                  height: 200,
                                  alt: "Gallery 2",
                                  layout: "responsive",
                                  className: "image-gallery",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "grid-cols-3",
                                children: (0, t.jsx)(l.default, {
                                  src: "/images/galleries/Gallery_3.png",
                                  width: 200,
                                  height: 200,
                                  alt: "Gallery 3",
                                  layout: "responsive",
                                  className: "image-gallery",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-x-3 mt-4",
                            children: [
                              (0, t.jsx)("div", {
                                className: "grid-cols-3",
                                children: (0, t.jsx)(l.default, {
                                  src: "/images/galleries/Gallery_4.png",
                                  width: 200,
                                  height: 200,
                                  alt: "Gallery 4",
                                  layout: "responsive",
                                  className: "image-gallery",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "grid-cols-3",
                                children: (0, t.jsx)(l.default, {
                                  src: "/images/galleries/Gallery_5.png",
                                  width: 200,
                                  height: 200,
                                  alt: "Gallery 5",
                                  layout: "responsive",
                                  className: "image-gallery",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "grid-cols-3",
                                children: (0, t.jsx)(l.default, {
                                  src: "/images/galleries/Gallery_6.png",
                                  width: 200,
                                  height: 200,
                                  alt: "Gallery 6",
                                  layout: "responsive",
                                  className: "image-gallery",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-x-3 mt-4",
                            children: [
                              (0, t.jsx)("div", {
                                className: "grid-cols-3",
                                children: (0, t.jsx)(l.default, {
                                  src: "/images/galleries/Gallery_7.png",
                                  width: 200,
                                  height: 200,
                                  alt: "Gallery 4",
                                  layout: "responsive",
                                  className: "image-gallery",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "grid-cols-3",
                                children: (0, t.jsx)(l.default, {
                                  src: "/images/galleries/Gallery_8.png",
                                  width: 200,
                                  height: 200,
                                  alt: "Gallery 5",
                                  layout: "responsive",
                                  className: "image-gallery",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "grid-cols-3",
                                children: (0, t.jsx)(l.default, {
                                  src: "/images/galleries/Gallery_9.png",
                                  width: 200,
                                  height: 200,
                                  alt: "Gallery 6",
                                  layout: "responsive",
                                  className: "image-gallery",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-8",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "text-lg leading-5 text-white font-bold",
                            children: "Wish for the couple",
                          }),
                          (0, t.jsx)(r, {}),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-8 flex flex-col  items-center",
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-white text-sm",
                            children:
                              "Thank you for checking up all the things up there!",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-white text-sm",
                            children: "Can’t wait to see u again! <3",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "mt-8 flex flex-col items-center",
                        children: (0, t.jsx)("p", {
                          className: "text-[10px] text-[#A3A1A1] mb-6",
                          children: "E-Invitation made by Fauzan & Nazwa with ♥",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [404, 648, 979, 971, 23, 744], function () {
      return e((e.s = 309));
    }),
      (_N_E = e.O());
  },
]);
