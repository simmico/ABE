/**
 * Aqeelah's Beauty Empire (ABE) | Progress & JSON Synchronisation Engine
 *
 * Works both when hosted on GitHub / Cloudflare Pages (via fetch('./data/*.json'))
 * AND when opened directly on your computer by double-clicking index.html (file:// fallback).
 */

const STORAGE_KEY = 'abe_founder_progress_v1';

const FALLBACK_ROADMAP = {
  "project": "Aqeelah's Beauty Empire (ABE)",
  "cities": ["CPT", "JHB"],
  "lastUpdated": "2026-11-11",
  "stages": [
    {
      "id": "stage_1",
      "number": 1,
      "title": "Stage 1: Getting Comfortable & Understanding the Market",
      "subtitle": "Learn to look at the CPT and JHB nail markets with founder eyes, define our quality standard, and set up the core app workspace."
    },
    {
      "id": "stage_2",
      "number": 2,
      "title": "Stage 2: Shaping the Product Rules Together",
      "subtitle": "Turn market research into real decisions inside the app and set up our public brand identity."
    },
    {
      "id": "stage_3",
      "number": 3,
      "title": "Stage 3: Dipping a Toe into Outreach (Low-Pressure DMs)",
      "subtitle": "Start friendly, curiosity-based text chats with nail techs online while building the calendar, venue safety lock, and badge system."
    },
    {
      "id": "stage_4",
      "number": 4,
      "title": "Stage 4: Building Real-World Voice & Salon Confidence",
      "subtitle": "Graduate comfortably from text messages to short voice notes, warm 5-minute calls, and salon partner chats."
    },
    {
      "id": "stage_5",
      "number": 5,
      "title": "Stage 5: Loading the App & Launching",
      "subtitle": "Load verified CPT and JHB nail techs into the app, connect South African payments, test everything thoroughly, and welcome our first clients."
    }
  ],
  "items": [
    {
      "id": "item_1",
      "order": 1,
      "stageId": "stage_1",
      "title": "Defining Our Quality Standard & Workspace Setup",
      "aqeelah": {
        "title": "Set Up the Research Sheet & 'Certified Pro' Checklist",
        "description": "Create our Master Research Google Sheet (with tabs for Nail Techs and Independent Salons in CPT/JHB). Then write down the 5 to 7 non-negotiable checks that separate amazing nail work from bad work (cuticle neatness, apex structure, shaping, hygiene, retention).",
        "deliverable": "Google Sheet link + 5 to 7 Certified Pro quality rules",
        "growthSkill": "Trusting Your Judgement Instead of Overthinking",
        "growthWhy": "You already know a lot, but you let self-doubt and overthinking cloud your judgement. Think back to your shop when the techs you hired messed up and you literally had to go in and sort things out for clients yourself. Who better to write the checklist for what makes a nail tech genuinely good than someone who already lived through hiring the wrong people? You already know what quality you wished those techs had. Put those exact standards on paper and do not second-guess yourself.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Initialise Flutter Multi-Platform Project & Backend",
        "description": "Set up the Flutter workspace (iOS, Android, and Web Admin) and configure Firebase/Supabase authentication, database environments, and user role guards (client, tech, salon_partner, admin).",
        "deliverable": "Base repository & auth role routing initialised",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_2",
      "order": 2,
      "stageId": "stage_1",
      "title": "Learning How to Research (First 5 Nail Techs)",
      "aqeelah": {
        "title": "Find 5 Independent Nail Techs in CPT",
        "description": "Use the Instagram and TikTok search guide in the Research tab to find 5 independent nail techs in Cape Town whose work looks clean. Write down their handle, how they take bookings, and their price for a plain set.",
        "deliverable": "First 5 CPT nail techs logged in the sheet",
        "growthSkill": "Figuring Things Out Without Panicking",
        "growthWhy": "In the past, whenever you did not know where to start, your first instinct was to panic and call your dad or ask someone else what to do. I want you to see that when you break something down into small pieces, you do not need to panic at all. Searching for 5 nail techs at a time and writing down their prices teaches you how to gather facts on your own. Once the facts are written down in front of you, your mind stops spiralling because the answer is right there on the sheet.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build Core Database Schemas & Security Rules",
        "description": "Create database models for Users, Tech Profiles, Verified Commercial Venues, and Visual Contract Portfolio items (image URL, fixed base price, duration in minutes, allowed modifiers).",
        "deliverable": "Database schemas & security rules deployed",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_3",
      "order": 3,
      "stageId": "stage_1",
      "title": "Spotting the Problem (Booking Flaws & Auth)",
      "aqeelah": {
        "title": "Find 5 More CPT Techs & Spot Booking Flaws",
        "description": "Add 5 more CPT nail techs to your sheet, and write down 1 annoying thing about trying to book each of them (such as no prices shown, 'WhatsApp only', or confusing policy highlights).",
        "deliverable": "10 total CPT techs logged with booking pain points",
        "growthSkill": "Translating Past Frustrations Into Our Solution",
        "growthWhy": "When you look at other nail techs' pages, remember what frustrated you at your shop when techs were disorganised or didn't do things properly. Spotting those flaws on other pages shows you exactly why clients and good techs need the structure we are building.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build Auth Screens & Scout 5 JHB Nail Techs",
        "description": "Implement login, registration, and role onboarding screens in Flutter, and add 5 independent nail techs in JHB to the shared research sheet.",
        "deliverable": "Working auth screens + 5 JHB techs in sheet",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_4",
      "order": 4,
      "stageId": "stage_1",
      "title": "The 'Mystery Shopper' Test & Visual Contract Card",
      "aqeelah": {
        "title": "Mystery Shop 2 Nail Techs on WhatsApp / IG",
        "description": "Message 2 nail techs as a normal customer asking how much a specific nail photo costs and when they have a slot next week. Time how long they take to reply and how many messages it takes to get a straight answer.",
        "deliverable": "Notes on how long the 2 mystery enquiries took",
        "growthSkill": "Seeing the Problem With Your Own Eyes",
        "growthWhy": "Because you hate calling people to make bookings yourself (and usually get your brother to do it), you already know how annoying booking beauty appointments is. Seeing how slow and awkward WhatsApp enquiries are proves why our 1-tap Visual Contract booking is so much better.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build the Signature Visual Contract Card UI",
        "description": "Create the portfolio card component displaying the tech's real nail photo, hard-coded base price, exact appointment duration, tier badge, and verified venue tag.",
        "deliverable": "Visual Contract UI component completed",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_5",
      "order": 5,
      "stageId": "stage_1",
      "title": "The Google Maps 'Quiet Salon' Trick & Discovery Feed",
      "aqeelah": {
        "title": "Find 5 Independent Salons in CPT & Check Quiet Hours",
        "description": "Use Google Maps to find 5 independent salons in Cape Town. Scroll down to their 'Popular Times' bar graph for Tuesdays, Wednesdays, and Thursdays to see which hours their chairs sit empty.",
        "deliverable": "5 CPT salons with quiet mid-week hours logged",
        "growthSkill": "Using What You Lived Through at Your Shop",
        "growthWhy": "You know firsthand what it felt like having quiet days at your shop when chairs sat empty. When you look at Google Maps and see other salons sitting empty on a Tuesday afternoon, remember how that felt for you. You are not guessing what salon owners want because you have literally been in their shoes.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build the Visual Contract Discovery Feed & Scout 3 JHB Salons",
        "description": "Build the scrollable discovery feed with CPT and JHB city filters, and add 3 independent salons in JHB (with quiet mid-week hours) to the shared sheet.",
        "deliverable": "Scrollable discovery feed + 3 JHB salons logged",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_6",
      "order": 6,
      "stageId": "stage_2",
      "title": "Pricing Averages & The Add-On Toggles",
      "aqeelah": {
        "title": "Decide Standard Add-On Modifiers & Time Additions",
        "description": "Look at your research sheet and decide on the standard optional switches a client can tap when booking a photo (such as Soak-Off / Removal, Extra Length, or Nail Repair) and how much extra time each one should add.",
        "deliverable": "Final list of add-on toggles and extra minutes",
        "growthSkill": "Backing Your Own Decisions",
        "growthWhy": "Usually you wait for someone else to lead, or you ask your dad, your brother, or me before settling on something because you start overthinking. You know how when you ask me, I ask you questions back so you realise you already knew the right answer? That is what this is. Make the call on the add-ons, lock it in, and do not doubt yourself afterwards.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build the Booking Screen & Dynamic Modifier Calculator",
        "description": "Build the Visual Contract booking detail screen with live toggle switches that automatically recalculate the total price and appointment duration.",
        "deliverable": "Dynamic price and duration booking screen",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_7",
      "order": 7,
      "stageId": "stage_2",
      "title": "Brand Identity & Tech Portfolio Upload",
      "aqeelah": {
        "title": "Set Up Official ABE Instagram & TikTok Pages",
        "description": "Choose our official handles, write a warm and clear 3-line bio explaining the Visual Contract concept, and plan our first 'Founding Techs' story highlight.",
        "deliverable": "Official IG & TikTok pages created with bio",
        "growthSkill": "Bringing Ideas Out of Your Head",
        "growthWhy": "You have so many good ideas in your mind, but sometimes they stay in your head because you overthink how to start. Setting up the page puts our brand into the real world so it is no longer just an idea in your head.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build the Tech Portfolio Upload Flow",
        "description": "Create the screen for nail techs to upload a nail photo, set the fixed base price and duration, and select which optional add-ons apply.",
        "deliverable": "Working portfolio upload flow for techs",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_8",
      "order": 8,
      "stageId": "stage_2",
      "title": "Testing the First Prototype Together",
      "aqeelah": {
        "title": "Review the Clickable App Feed & Booking Prototype",
        "description": "Open the first clickable version of the app with Rio. Test scrolling through looks and toggling add-ons, and give honest feedback on anything that feels confusing for a beauty client or nail tech.",
        "deliverable": "List of UI/UX tweaks from your beauty perspective",
        "growthSkill": "Speaking Up as an Equal Partner",
        "growthWhy": "I built the code, but you know how nail clients and salon owners actually think. Tell me straight what works and what needs changing, and trust that your opinion matters here.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Demo Stage 1 & 2 Prototype & Refine UI",
        "description": "Walk Aqeelah through the clickable prototype and refine the layout, wording, and flow based on her feedback.",
        "deliverable": "Refined Stage 2 app build",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_9",
      "order": 9,
      "stageId": "stage_3",
      "title": "Personalising Outreach Scripts & Tech Calendar",
      "aqeelah": {
        "title": "Make the Friendly DM Scripts Sound Like You",
        "description": "Read through the DM templates in the Scripts tab and tweak a few words so they sound natural, warm, and genuinely like how you speak.",
        "deliverable": "Personalised DM templates ready to copy-paste",
        "growthSkill": "Stopping Overthinking Before It Starts",
        "growthWhy": "When you have to message or speak to someone new, you normally freeze up because you do not know what to say. Having the script written out in your own words ahead of time means there is nothing left to overthink.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build the Tech Availability Calendar & Slot Engine",
        "description": "Implement working hours, buffer times, and slot generation that accounts for the exact duration of the chosen Visual Contract plus selected modifiers.",
        "deliverable": "Calendar availability engine completed",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_10",
      "order": 10,
      "stageId": "stage_3",
      "title": "First 5 Friendly DMs & Strict Venue-Only Lock",
      "aqeelah": {
        "title": "Send the 'Market Research Question' DM to 5 CPT Techs",
        "description": "Send Script 1 to just 5 nail techs from your sheet. You are not selling anything yet; you are complimenting their work and asking what annoys them most when clients book with them right now.",
        "deliverable": "5 friendly research DMs sent in CPT",
        "growthSkill": "Taking the Intimidation Out of Reaching Out (Step 1)",
        "growthWhy": "I know how shy and intimidated you can feel reaching out to people. That is why we are not doing phone calls yet. It is just a friendly text message complimenting their nails and asking a simple question. Copy, paste, hit send, and do not overthink it.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Enforce Strict Venue-Only Bookings & Message 5 JHB Techs",
        "description": "Enforce the safety rule in code: every booking must link either to a Tech's Verified Commercial Studio or a Partner Salon Empty Chair (blocking house calls). Send the warm research DM to 5 JHB techs.",
        "deliverable": "Venue-only safety lock + 5 JHB DMs sent",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_11",
      "order": 11,
      "stageId": "stage_3",
      "title": "Replying to Techs & The Tier Badge System",
      "aqeelah": {
        "title": "Reply to Techs with Founding Invite & Message 5 More",
        "description": "Anyone who replied to Item 10 gets Script 2 (explaining how upfront payments and our 25% late-cancellation payout solve their exact frustration, and inviting them onto our Founding Tech list). Send Script 1 to 5 new CPT techs.",
        "deliverable": "Follow-up replies sent + 5 new CPT techs messaged",
        "growthSkill": "Realising People Want What We Have",
        "growthWhy": "Unlike the unreliable techs you dealt with in the past, good nail techs are desperate for a platform that pays them upfront and stops time-wasters. You are offering them something genuinely valuable.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build the Grading & Badge Engine UI",
        "description": "Implement the logic and UI badges for Rising Tech, Verified Tech (auto-unlocked via bookings, rating threshold, and completion photos), and Certified Pro (unlocked via Aqeelah's audition approval).",
        "deliverable": "Tier badge engine & profile badges",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_12",
      "order": 12,
      "stageId": "stage_4",
      "title": "30-Second Voice Notes & The 4-Digit PIN Lock",
      "aqeelah": {
        "title": "Send a 30-Second Voice Note to 3 Interested Techs",
        "description": "Instead of typing, send a friendly 30-second voice note (Script 3) to 3 techs who showed interest, thanking them and asking for 5 photos of their favourite sets so we can build their preview page.",
        "deliverable": "3 friendly voice notes sent",
        "growthSkill": "Warming Up Your Voice Before Calls (Step 2)",
        "growthWhy": "Because you hate phone calls, a 30-second voice note is the bridge between texting and calling. You can read Script 3 right off the screen, and if you mess up, you can delete and re-record it until you are happy.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build the Biometric + 4-Digit Randomised PIN Start Lock",
        "description": "Generate a unique, randomised 4-digit PIN on the client's booking screen. Require the tech to pass Biometric/Selfie verification AND enter the client's 4-digit PIN to start the appointment timer.",
        "deliverable": "Biometric + 4-digit PIN check-in flow",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_13",
      "order": 13,
      "stageId": "stage_4",
      "title": "Vetting Real Tech Photos & Live Completion Camera",
      "aqeelah": {
        "title": "Review & Approve Founding Tech Photos",
        "description": "Check the nail photos sent by interested techs against your Item 1 Quality Checklist. Confirm the exact price and duration for each approved look.",
        "deliverable": "Approved Founding Tech photo packs ready for upload",
        "growthSkill": "Protecting Our Brand From Bad Work",
        "growthWhy": "Remember how exhausting it was having to go into your shop to fix bad nail jobs for upset clients? By checking these photos properly now, you make sure only techs who actually know what they are doing get onto our app.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build the In-App Live Completion Camera Lock",
        "description": "Force the 'Complete Appointment' button to open the native in-app camera directly (blocking gallery uploads) so the tech captures a live photo of the finished nails to unlock their payout.",
        "deliverable": "Live camera completion lock implemented",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_14",
      "order": 14,
      "stageId": "stage_4",
      "title": "Your First 5-Minute Warm Call & The Wallet Engine",
      "aqeelah": {
        "title": "Do a 5-Minute Warm Call with 2 Interested Techs",
        "description": "Use Script 4 to do a quick, friendly 5-minute call with 2 techs who already sent you their photos. Say hello, tell them their photos are approved, and briefly explain how weekly payouts and the 4-digit PIN work.",
        "deliverable": "2 warm 5-minute onboarding calls completed",
        "growthSkill": "Remembering the Day You Called Your Uncle (Step 3)",
        "growthWhy": "I know you loathe phone calls and normally get your brother to make bookings for you. But whenever your mind tells you that you cannot make a call, remember the day your dad was rushed to hospital. You did not freeze up: you called your uncle out of nowhere and got the ambulance sorted yourself. If you could handle an emergency call like that, a 5-minute chat with a friendly nail tech who already sent you her photos is easy for you.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build the Closed-Loop Wallet & 75/25 Cancellation Split",
        "description": "Implement the Client Closed-Loop Wallet (non-withdrawable credits), Tech Earnings Ledger (15% platform fee, weekly payouts, Instant Cash-Out), and Automated Cancellation Logic (75% client wallet / 25% tech on late client cancel).",
        "deliverable": "Closed-loop wallet & automated cancellation splits",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_15",
      "order": 15,
      "stageId": "stage_4",
      "title": "Quiet Salon Outreach & Dispute Resolution View",
      "aqeelah": {
        "title": "Contact or Visit 3 Quiet Independent Salons in CPT",
        "description": "Use Script 5 and our 1-page 'Empty Chair' summary to contact or pop into 3 independent salons from your Item 5 list during their quiet mid-week hours. Show them how they can earn guaranteed fees from their spare nail stations.",
        "deliverable": "3 CPT salons contacted with Empty Chair summary",
        "growthSkill": "Speaking Salon Owner to Salon Owner (Step 4)",
        "growthWhy": "Do not feel intimidated by salon owners. You literally owned a shop yourself, and you know what quiet days feel like. You are walking in with a 1-page sheet that helps them make money on their empty chairs.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Build 3-Photo Dispute View, Empty Chair Portal & JHB Salons",
        "description": "Create the side-by-side Admin Dispute tool (Portfolio Photo vs. Tech Camera Photo vs. Client Complaint Photo) and the Salon Partner station listing view. Contact 2 independent salons in JHB.",
        "deliverable": "Dispute tool + Salon portal + 2 JHB salons contacted",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_16",
      "order": 16,
      "stageId": "stage_5",
      "title": "Loading Founding Tech Profiles & SA Payments",
      "aqeelah": {
        "title": "Upload Founding Tech Portfolios & Send Previews",
        "description": "Load our approved CPT Founding Techs (their photos, fixed prices, durations, and add-ons) into the app and send each tech a screenshot of their live profile preview.",
        "deliverable": "First CPT Founding Tech profiles live in the app",
        "growthSkill": "Putting Pen to Paper & Seeing It Real",
        "growthWhy": "Usually ideas stay in your head because you do not know where to start. Seeing real nail techs loaded into our app because of the steps you ticked off proves what happens when you bring your ideas out of your head.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Integrate SA Payment Gateways & Load JHB Profiles",
        "description": "Connect Paystack or Peach Payments (Card tokenisation + Instant EFT) and PayJustNow (BNPL webhook) so full upfront funds land in our float account. Load JHB Founding Tech profiles.",
        "deliverable": "Payment gateway sandbox & JHB profiles loaded",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_17",
      "order": 17,
      "stageId": "stage_5",
      "title": "Full 'Break the App' Test Run & Security Audit",
      "aqeelah": {
        "title": "Test the Whole App as a Picky Client & Nail Tech",
        "description": "Use the test build on your phone from start to finish: book a nail look, toggle a soak-off, enter the 4-digit PIN, snap a live completion photo, and test a cancellation. Note anything that feels confusing.",
        "deliverable": "Sign-off on user experience & bug notes",
        "growthSkill": "Making Sure Clients Never Get Burned",
        "growthWhy": "Everything that went wrong with techs at your old shop is prevented here: upfront payment, the 4-digit PIN, and the live completion photo. Test it thoroughly so you feel 100% proud of how it works.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Security Audit, Bug Fixes & Partner Salon Lock-In",
        "description": "Audit database security rules (preventing wallet cash withdrawals or PIN spoofing), fix all issues found during Aqeelah's testing, and confirm partner salon stations in JHB and CPT.",
        "deliverable": "Production-ready, audited release candidate",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    },
    {
      "id": "item_18",
      "order": 18,
      "stageId": "stage_5",
      "title": "Soft Launch with Founding Techs & First Clients",
      "aqeelah": {
        "title": "Post Launch Content & Welcome Our First CPT Clients",
        "description": "Share our first 'Inspo vs. Reality' posts featuring our Founding Techs' real work, confirm their calendars are active, and invite our first wave of CPT clients to book.",
        "deliverable": "Launch posts live & first CPT client bookings",
        "growthSkill": "Owning What We Built Together",
        "growthWhy": "Look back at Item 1 and look at where you are now. You did the research, trusted your judgement, sent the messages, made the calls, and brought this out of your head into reality.",
        "completed": false,
        "completedAt": null,
        "notes": ""
      },
      "tech": {
        "title": "Deploy Production Builds & Monitor Live Transactions",
        "description": "Deploy live iOS and Android builds, switch payment keys to production mode, and monitor webhooks, bookings, and payouts in real time.",
        "deliverable": "Live production launch in CPT & JHB",
        "completed": false,
        "completedAt": null,
        "notes": ""
      }
    }
  ]
};

const FALLBACK_GROWTH = {
  "intro": "Aqeelah, I did not just put this plan together so we can build an app. I built it this way for you. You have so many good ideas in your head, but because you overthink, you sometimes get stuck in your own mind and never put pen to paper. You do not like being bossed around, and I never want to just tell you what to do without explaining why. Every step in here is broken down so you can see exactly how it works, trust your own head, and prove to yourself how capable and independent you really are.",
  "levels": [
    {
      "level": "Foundation",
      "badge": "Trusting Your Standards",
      "activity": "Writing the 'Certified Pro' Quality Checklist & Vetting Tech Photos",
      "linkedItems": [1, 13],
      "skillBuilt": "Trusting Your Judgement Instead of Overthinking",
      "explanation": "You already know a lot, but you let self-doubt and overthinking cloud your judgement. Think back to your shop when the techs you hired messed up and you literally had to go in and sort things out for clients yourself. Who better to write the checklist for what makes a nail tech genuinely good than someone who already lived through hiring the wrong people? You already know what quality you wished those techs had. Put those exact standards on paper and do not second-guess yourself."
    },
    {
      "level": "Foundation",
      "badge": "Clear Thinking",
      "activity": "Researching Techs & Prices on IG / TikTok",
      "linkedItems": [2, 3],
      "skillBuilt": "Figuring Things Out Without Panicking",
      "explanation": "In the past, whenever you did not know where to start, your first instinct was to panic and call your dad or ask someone else what to do. I want you to see that when you break something down into small pieces, you do not need to panic at all. Searching for 5 nail techs at a time and writing down their prices teaches you how to gather facts on your own. Once the facts are written down in front of you, your mind stops spiralling because the answer is right there on the sheet."
    },
    {
      "level": "Foundation",
      "badge": "Real Experience",
      "activity": "Mystery Shopping Techs & Checking Quiet Salon Hours",
      "linkedItems": [4, 5],
      "skillBuilt": "Using What You Lived Through at Your Shop",
      "explanation": "You know firsthand what it felt like having quiet days at your shop, and you know how frustrating it was when techs were unreliable or did a poor job. When you message other nail techs as a mystery client and check Google Maps to see which salons are sitting empty on a Tuesday afternoon, I want you to connect what you experienced at your shop to what we are building now. You are not guessing how salon owners feel on quiet days because you have literally been in their shoes."
    },
    {
      "level": "Leadership",
      "badge": "Taking the Lead",
      "activity": "Deciding Add-On Rules, Brand Bio & Prototype Review",
      "linkedItems": [6, 7, 8],
      "skillBuilt": "Backing Your Own Decisions",
      "explanation": "Usually you wait for someone else to take the lead, or you ask your dad, your brother, or me before you settle on a decision because you start doubting yourself. You know how when you ask me what to do, I ask you questions back so you realise you already had the right answer? That is what this step is. Your name is on this company. When you decide the add-on rules and set up our page, you are practising making a call, locking it in, and not overthinking it afterwards."
    },
    {
      "level": "Outreach Level 1 & 2",
      "badge": "Warming Up",
      "activity": "Starting with Text DMs, Then 30-Second Voice Notes",
      "linkedItems": [9, 10, 11, 12],
      "skillBuilt": "Taking the Intimidation Out of Reaching Out",
      "explanation": "I know how much you hate phone calls and how shy or intimidated you can feel talking to strangers, to the point where your brother even makes bookings for you. That is why I would never throw you into making cold calls on Day 1. We start with simple text messages where you just compliment a nail tech's work and ask a question, using scripts we already prepared. Then we move to a short 30-second voice note. It lets you warm up slowly without feeling put on the spot."
    },
    {
      "level": "Outreach Level 3 & 4",
      "badge": "Real Strength",
      "activity": "Doing a 5-Minute Call & Speaking to Quiet Salons",
      "linkedItems": [14, 15],
      "skillBuilt": "Remembering How Strong You Are When It Counts",
      "explanation": "Whenever your brain tells you that you cannot make a phone call or speak to a salon owner, I want you to remember the day your dad was rushed to hospital. In a moment where you would normally freeze up or panic, you picked up the phone, called your uncle out of nowhere, and got the ambulance sorted. You did that yourself. If you could handle a phone call in a real emergency like that, a 5-minute chat with a friendly nail tech who already sent you her photos is nothing to you."
    },
    {
      "level": "Execution",
      "badge": "Pen to Paper",
      "activity": "Ticking Off One Item at a Time & Launching",
      "linkedItems": [16, 17, 18],
      "skillBuilt": "Bringing Ideas Out of Your Head Into Reality",
      "explanation": "You have great ideas, but when you look at a massive project all at once, you never know where to start so it stays stuck in your head instead of becoming real. That is why we only show one Current Focus item at a time. You do not need to worry about next week. You just put pen to paper on the one small thing in front of you today, tick it off, and watch what was in your head turn into a real business."
    }
  ]
};

const FALLBACK_SCRIPTS = {
  "researchGuides": [
    {
      "id": "guide_techs",
      "title": "How to Find Independent Nail Techs (Instagram & TikTok)",
      "subtitle": "Takes about 15 minutes for 5 nail techs. Focus on real individuals or boutique studios, not huge corporate chains.",
      "steps": [
        "Open Instagram or TikTok and search phrases like 'Nail tech Cape Town', 'Nails CPT', 'Gel X Cape Town', or 'BIAB Cape Town'.",
        "Click on accounts belonging to individual nail techs or small studios with clean, well-lit nail photos.",
        "Check their Bio: write down how they tell clients to book (for example: 'WhatsApp only', 'DM to book', or 'Link in bio').",
        "Check their Story Highlights: look for a highlight called 'Price List' or 'Policy'. Write down their price for a plain set and their deposit rule.",
        "Spot 1 Booking Flaw: note one thing that is annoying or slow for a client (such as no prices shown, slow replies, or strict deposit rules without buyer protection)."
      ]
    },
    {
      "id": "guide_salons",
      "title": "How to Find 'Empty Chair' Salons (The Google Maps Trick)",
      "subtitle": "How to spot independent salons that have empty nail stations sitting idle during the week.",
      "steps": [
        "Open Google Maps and search 'Nail salon' or 'Beauty salon' in Cape Town.",
        "Click on independent salons (places with 1 location, nice photos of their interior stations, and good reviews).",
        "Scroll down on their Google Maps listing until you see the 'Popular times' bar graph.",
        "Tap through Tuesday, Wednesday, and Thursday. Look for salons where the activity bars are very low between 10:00 and 15:00.",
        "Add those salons to your sheet! When a salon owner sees empty chairs on a Tuesday afternoon, they are still paying rent and electricity for an empty room, which is why our Empty Chair partnership makes them extra money."
      ]
    }
  ],
  "scripts": [
    {
      "id": "script_1",
      "stage": "Item 10 • Outreach Level 1",
      "title": "Script 1: Friendly 'Market Research' DM to Nail Techs",
      "whyItWorks": "You are complimenting their work and asking for their opinion, not trying to sell them anything yet. People love sharing their frustrations.",
      "text": "Hey [Name]! I came across your page and your cuticle work and shaping are honestly so clean. I'm busy building a new booking app for top nail techs in CPT and JHB that stops late cancellations and cuts out long WhatsApp price chats. Since you're doing great work already, can I ask you a quick question? What is the most annoying thing you deal with right now when clients book with you?"
    },
    {
      "id": "script_2",
      "stage": "Item 11 • Outreach Level 1",
      "title": "Script 2: Reply When Techs Complain About No-Shows or WhatsApp",
      "whyItWorks": "Because they just told you their problem, inviting them onto our Founding Tech list feels natural and helpful.",
      "text": "That is literally the exact reason we started building this! On our app, your portfolio photo is the booking button, with the exact price and time already locked in, and the client pays 100% upfront before they get your slot. Even better, if a client cancels late, you still get paid 25% automatically for your wasted time.\n\nWe are picking just 10 Founding Techs in Cape Town to launch with at 0% platform fee on your first 3 bookings. Your work is definitely the standard we want. Would you be keen for me to save you one of the Founding spots?"
    },
    {
      "id": "script_3",
      "stage": "Item 12 • Outreach Level 2",
      "title": "Script 3: 30-Second Voice Note to Interested Techs",
      "whyItWorks": "Smile while you record it! If you stumble over a word, do not worry, because it makes you sound like a warm, real human rather than a script.",
      "text": "Hey [Name], thank you so much for your reply! I'm so excited to have you on our Founding Tech list for Cape Town. To get your profile preview ready for you to see, all I need is 5 photos of your favourite sets that you've done recently, along with what you charge for each of those 5 looks and roughly how long each one takes you. Whenever you have a gap today or tomorrow, just send them through here and I'll build your preview page for you!"
    },
    {
      "id": "script_4",
      "stage": "Item 14 • Outreach Level 3",
      "title": "Script 4: 5-Minute Warm Onboarding Call with Techs",
      "whyItWorks": "You are only calling techs who already sent you their photos. Keep these 3 simple points in front of you during the call so you feel relaxed.",
      "text": "Hi [Name]! It's Aqeelah here from ABE. Thank you so much for sending your nail photos through, they look stunning and I've approved all of them for your Founding profile! I just wanted to say a quick hello so you have a real voice to the name, and quickly let you know how appointments work on the day:\n1. Clients pay 100% upfront when they book your photo.\n2. When the client sits in your chair, you'll type their 4-digit PIN into your phone to start the booking, and snap one quick photo of their finished nails inside the app when you're done.\n3. Your payouts go straight to your bank weekly, or you can cash out instantly whenever you need.\nAre you currently working from a commercial salon chair, or would you like us to match your bookings with one of our partner salons in Cape Town?"
    },
    {
      "id": "script_5",
      "stage": "Item 15 • Outreach Level 4",
      "title": "Script 5: 5-Minute Quiet Salon Walk-In or Phone Call",
      "whyItWorks": "Salon owners are normal business people trying to pay their shop rent. You are bringing them extra income for chairs that are currently sitting empty.",
      "text": "Hi there! Hope your week is going well. My name is Aqeelah. I noticed you have a really lovely space here. Are the owner or manager around for 2 minutes by any chance?\n\n(When speaking to the owner or manager):\nWe are launching a nail booking platform in Cape Town that connects pre-vetted, top-rated independent nail techs with paying clients. For safety reasons, we do not allow house calls on our app, so every booking has to happen inside a proper salon. Instead of techs working from home, we partner with independent salons like yours so our verified techs can use one of your spare stations during your quieter mid-week hours, and your salon earns a guaranteed fee on every booking with zero marketing cost to you. I brought a quick 1-page summary showing how it works. Could I leave this with you and grab your WhatsApp or email to follow up on Thursday?"
    }
  ]
};

window.ABESync = {
  roadmap: null,
  growth: null,
  scripts: null,
  syncMode: 'Saved in Browser',

  async loadAllData() {
    try {
      const [roadmapRes, growthRes, scriptsRes] = await Promise.all([
        fetch('./data/roadmap.json?t=' + Date.now()),
        fetch('./data/growth.json?t=' + Date.now()),
        fetch('./data/scripts.json?t=' + Date.now())
      ]);
      if (!roadmapRes.ok) throw new Error('Fetch failed');
      this.roadmap = await roadmapRes.json();
      this.growth = await growthRes.json();
      this.scripts = await scriptsRes.json();
    } catch (_) {
      // Opened directly via double-clicking index.html (file://) without a server
      this.roadmap = JSON.parse(JSON.stringify(FALLBACK_ROADMAP));
      this.growth = JSON.parse(JSON.stringify(FALLBACK_GROWTH));
      this.scripts = JSON.parse(JSON.stringify(FALLBACK_SCRIPTS));
    }

    // 1. Apply any saved local state first
    this.applySavedOverlay(this.getLocalState());

    // 2. Check if cloud/server API state is available (Cloudflare Pages or local server.js)
    try {
      const apiRes = await fetch('./api/progress', { method: 'GET' });
      if (apiRes.ok) {
        const remoteState = await apiRes.json();
        if (remoteState && remoteState.overrides) {
          this.applySavedOverlay(remoteState.overrides);
          this.saveLocalState(remoteState.overrides);
          this.syncMode = remoteState.mode || 'Live Sync Active';
        }
      }
    } catch (_) {}

    return {
      roadmap: this.roadmap,
      growth: this.growth,
      scripts: this.scripts,
      syncMode: this.syncMode
    };
  },

  getLocalState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  },

  saveLocalState(overrides) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    } catch (_) {}
  },

  applySavedOverlay(overrides) {
    if (!overrides || !this.roadmap || !Array.isArray(this.roadmap.items)) return;

    this.roadmap.items.forEach((item) => {
      const saved = overrides[item.id];
      if (!saved) return;

      if (saved.aqeelah) {
        if (typeof saved.aqeelah.completed === 'boolean') {
          item.aqeelah.completed = saved.aqeelah.completed;
        }
        if (saved.aqeelah.completedAt !== undefined) {
          item.aqeelah.completedAt = saved.aqeelah.completedAt;
        }
        if (typeof saved.aqeelah.notes === 'string') {
          item.aqeelah.notes = saved.aqeelah.notes;
        }
      }

      if (saved.tech) {
        if (typeof saved.tech.completed === 'boolean') {
          item.tech.completed = saved.tech.completed;
        }
        if (saved.tech.completedAt !== undefined) {
          item.tech.completedAt = saved.tech.completedAt;
        }
        if (typeof saved.tech.notes === 'string') {
          item.tech.notes = saved.tech.notes;
        }
      }
    });
  },

  buildOverridesSnapshot() {
    const overrides = {};
    if (!this.roadmap || !Array.isArray(this.roadmap.items)) return overrides;

    this.roadmap.items.forEach((item) => {
      overrides[item.id] = {
        aqeelah: {
          completed: Boolean(item.aqeelah.completed),
          completedAt: item.aqeelah.completedAt || null,
          notes: item.aqeelah.notes || ''
        },
        tech: {
          completed: Boolean(item.tech.completed),
          completedAt: item.tech.completedAt || null,
          notes: item.tech.notes || ''
        }
      };
    });
    return overrides;
  },

  async updateItemState(itemId, role, changes) {
    const item = this.roadmap.items.find((i) => i.id === itemId);
    if (!item || !item[role]) return;

    Object.assign(item[role], changes);
    if (changes.completed === true && !item[role].completedAt) {
      item[role].completedAt = new Date().toISOString();
    } else if (changes.completed === false) {
      item[role].completedAt = null;
    }

    const overrides = this.buildOverridesSnapshot();
    this.saveLocalState(overrides);

    try {
      const res = await fetch('./api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemId,
          role,
          changes,
          overrides,
          fullRoadmap: this.roadmap
        })
      });
      if (res.ok) {
        this.syncMode = 'Saved';
      }
    } catch (_) {
      this.syncMode = 'Saved in Browser';
    }
  },

  calculateProgress() {
    const items = (this.roadmap && this.roadmap.items) ? this.roadmap.items : [];
    const totalPerRole = items.length;
    const totalCombined = totalPerRole * 2;

    let aqeelahDone = 0;
    let techDone = 0;

    items.forEach((item) => {
      if (item.aqeelah && item.aqeelah.completed) aqeelahDone++;
      if (item.tech && item.tech.completed) techDone++;
    });

    const combinedDone = aqeelahDone + techDone;

    return {
      totalItems: totalPerRole,
      aqeelah: {
        done: aqeelahDone,
        total: totalPerRole,
        percent: totalPerRole > 0 ? Math.round((aqeelahDone / totalPerRole) * 100) : 0
      },
      tech: {
        done: techDone,
        total: totalPerRole,
        percent: totalPerRole > 0 ? Math.round((techDone / totalPerRole) * 100) : 0
      },
      combined: {
        done: combinedDone,
        total: totalCombined,
        percent: totalCombined > 0 ? Math.round((combinedDone / totalCombined) * 100) : 0
      }
    };
  }
};
