module.exports = {
	config: {
		name: "out",
		version: "1.0",
		author: "chris st",
		countDown: 5,
		role: 2,

		shortDescription: {
			vi: "",
			en: "minato expulsé du groupe"
		},

		longDescription: {
			vi: "",
			en: "Retirer minato du groupe"
		},

		category: "owner",

		guide: {
			vi: "",
			en: "out"
		}
	},

	onStart: async function ({ api, args, event }) {

		const botName = "Minato";

		const leaveMessage =
`🚀 ❲ ${botName} ❳ 🚀
━━━━━━━━━━━━━━━
╭── 👋 𝗔𝘂 𝗥𝗲𝘃𝗼𝗶𝗿 ───
│ 🤖 ${botName} quitte
│ ce groupe à la demande
│ du propriétaire.
│
│ 💬 Merci pour votre
│ accueil et à bientôt.
╰──────────────────
━━━━━━━ ✕ ━━━━━━`;

		if (!args[0]) {

			return api.sendMessage(
				leaveMessage,
				event.threadID,
				() => api.removeUserFromGroup(
					api.getCurrentUserID(),
					event.threadID
				)
			);
		}

		if (!isNaN(args[0])) {

			return api.sendMessage(
				leaveMessage,
				args.join(" "),
				() => api.removeUserFromGroup(
					api.getCurrentUserID(),
					args.join(" ")
				)
			);
		}
	}
};
