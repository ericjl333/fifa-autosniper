
              e.id && (e = e.id);
              const s = `${t}/messages/${e}`;
              return {
                toString: () => s,
                reactions: `${s}/reactions`,
                ack: `${s}/ack`,
                Reaction: (e) => {
                  const t = `${s}/reactions/${e}`;
                  return { toString: () => t, User: (e) => `${t}/${e}` };
                },
              };
            },
          };
        },
        Message: (e) => t.Endpoints.Channel(e.channel).Message(e),
        Member: (e) => t.Endpoints.Guild(e.guild).Member(e),
        CDN: (e) => ({
          Emoji: (t, s = "png") => `${e}/emojis/${t}.${s}`,
          Asset: (t) => `${e}/assets/${t}`,
          Avatar: (t, s) =>
            `${e}/avatars/${t}/${s}.${
              s.startsWith("a_") ? "gif" : "png?size=2048"
            }`,
          Icon: (t, s) => `${e}/icons/${t}/${s}.jpg`,
          AppIcon: (t, s) => `${e}/app-icons/${t}/${s}.png`,
          AppAsset: (t, s) => `${e}/app-assets/${t}/${s}.png`,
          GDMIcon: (t, s) => `${e}/channel-icons/${t}/${s}.jpg?size=2048`,
          Splash: (t, s) => `${e}/splashes/${t}/${s}.jpg`,
        }),
        OAUTH2: {
          Application: (e) => {
            const t = `/oauth2/applications/${e}`;
            return {
              toString: () => t,
              resetSecret: `${t}/reset`,
              resetToken: `${t}/bot/reset`,
            };
          },
          App: (e) => `/oauth2/authorize?client_id=${e}`,
        },
        login: "/auth/login",
        logout: "/auth/logout",
        voiceRegions: "/voice/regions",
        gateway: { toString: () => "/gateway", bot: "/gateway/bot" },
        Invite: (e) => `/invite/${e}?with_counts=true`,
        inviteLink: (e) => `https://discord.gg/${e}`,
        Webhook: (e, t) => `/webhooks/${e}${t ? `/${t}` : ""}`,
      });
      (t.Status = {
        READY: 0,
        CONNECTING: 1,
        RECONNECTING: 2,
        IDLE: 3,
        NEARLY: 4,
        DISCONNECTED: 5,
      }),
        (t.VoiceStatus = {
          CONNECTED: 0,
          CONNECTING: 1,
          AUTHENTICATING: 2,
          RECONNECTING: 3,
          DISCONNECTED: 4,
        }),
        (t.ChannelTypes = {
          TEXT: 0,
          DM: 1,
          VOICE: 2,
          GROUP_DM: 3,
          CATEGORY: 4,
        }),
        (t.OPCodes = {
          DISPATCH: 0,
          HEARTBEAT: 1,
          IDENTIFY: 2,
          STATUS_UPDATE: 3,
          VOICE_STATE_UPDATE: 4,
          VOICE_GUILD_PING: 5,
          RESUME: 6,
          RECONNECT: 7,
          REQUEST_GUILD_MEMBERS: 8,
          INVALID_SESSION: 9,
          HELLO: 10,
          HEARTBEAT_ACK: 11,
        }),
        (t.VoiceOPCodes = {
          IDENTIFY: 0,
          SELECT_PROTOCOL: 1,
          READY: 2,
          HEARTBEAT: 3,
          SESSION_DESCRIPTION: 4,
          SPEAKING: 5,
        }),
        (t.Events = {
          RATE_LIMIT: "rateLimit",
          READY: "ready",
          RESUME: "resume",
          GUILD_CREATE: "guildCreate",
          GUILD_DELETE: "guildDelete",
          GUILD_UPDATE: "guildUpdate",
          GUILD_UNAVAILABLE: "guildUnavailable",
          GUILD_AVAILABLE: "guildAvailable",
          GUILD_MEMBER_ADD: "guildMemberAdd",
          GUILD_MEMBER_REMOVE: "guildMemberRemove",
          GUILD_MEMBER_UPDATE: "guildMemberUpdate",
          GUILD_MEMBER_AVAILABLE: "guildMemberAvailable",
          GUILD_MEMBER_SPEAKING: "guildMemberSpeaking",
          GUILD_MEMBERS_CHUNK: "guildMembersChunk",
          GUILD_ROLE_CREATE: "roleCreate",
          GUILD_ROLE_DELETE: "roleDelete",
          GUILD_ROLE_UPDATE: "roleUpdate",
          GUILD_EMOJI_CREATE: "emojiCreate",
          GUILD_EMOJI_DELETE: "emojiDelete",
          GUILD_EMOJI_UPDATE: "emojiUpdate",
          GUILD_BAN_ADD: "guildBanAdd",
          GUILD_BAN_REMOVE: "guildBanRemove",
          CHANNEL_CREATE: "channelCreate",
          CHANNEL_DELETE: "channelDelete",
          CHANNEL_UPDATE: "channelUpdate",
          CHANNEL_PINS_UPDATE: "channelPinsUpdate",
          MESSAGE_CREATE: "message",
          MESSAGE_DELETE: "messageDelete",
          MESSAGE_UPDATE: "messageUpdate",
          MESSAGE_BULK_DELETE: "messageDeleteBulk",
          MESSAGE_REACTION_ADD: "messageReactionAdd",
          MESSAGE_REACTION_REMOVE: "messageReactionRemove",
          MESSAGE_REACTION_REMOVE_ALL: "messageReactionRemoveAll",
          USER_UPDATE: "userUpdate",
          USER_NOTE_UPDATE: "userNoteUpdate",
          USER_SETTINGS_UPDATE: "clientUserSettingsUpdate",
          USER_GUILD_SETTINGS_UPDATE: "clientUserGuildSettingsUpdate",
          PRESENCE_UPDATE: "presenceUpdate",
          VOICE_STATE_UPDATE: "voiceStateUpdate",
          TYPING_START: "typingStart",
          TYPING_STOP: "typingStop",
          DISCONNECT: "disconnect",
          RECONNECTING: "reconnecting",
          ERROR: "error",
          WARN: "warn",
          DEBUG: "debug",
        }),
        (t.ActivityTypes = ["PLAYING", "STREAMING", "LISTENING", "WATCHING"]),
        (t.ActivityFlags = {
          INSTANCE: 1,
          JOIN: 2,
          SPECTATE: 4,
          JOIN_REQUEST: 8,
          SYNC: 16,
          PLAY: 32,
        }),
        (t.WSEvents = {
          READY: "READY",
          RESUMED: "RESUMED",
          GUILD_SYNC: "GUILD_SYNC",
          GUILD_CREATE: "GUILD_CREATE",
          GUILD_DELETE: "GUILD_DELETE",
          GUILD_UPDATE: "GUILD_UPDATE",
          GUILD_MEMBER_ADD: "GUILD_MEMBER_ADD",
          GUILD_MEMBER_REMOVE: "GUILD_MEMBER_REMOVE",
          GUILD_MEMBER_UPDATE: "GUILD_MEMBER_UPDATE",
          GUILD_MEMBERS_CHUNK: "GUILD_MEMBERS_CHUNK",
          GUILD_ROLE_CREATE: "GUILD_ROLE_CREATE",
          GUILD_ROLE_DELETE: "GUILD_ROLE_DELETE",
          GUILD_ROLE_UPDATE: "GUILD_ROLE_UPDATE",
          GUILD_BAN_ADD: "GUILD_BAN_ADD",
          GUILD_BAN_REMOVE: "GUILD_BAN_REMOVE",
          GUILD_EMOJIS_UPDATE: "GUILD_EMOJIS_UPDATE",
          CHANNEL_CREATE: "CHANNEL_CREATE",
          CHANNEL_DELETE: "CHANNEL_DELETE",
          CHANNEL_UPDATE: "CHANNEL_UPDATE",
          CHANNEL_PINS_UPDATE: "CHANNEL_PINS_UPDATE",
          MESSAGE_CREATE: "MESSAGE_CREATE",
          MESSAGE_DELETE: "MESSAGE_DELETE",
          MESSAGE_UPDATE: "MESSAGE_UPDATE",
          MESSAGE_DELETE_BULK: "MESSAGE_DELETE_BULK",
          MESSAGE_REACTION_ADD: "MESSAGE_REACTION_ADD",
          MESSAGE_REACTION_REMOVE: "MESSAGE_REACTION_REMOVE",
          MESSAGE_REACTION_REMOVE_ALL: "MESSAGE_REACTION_REMOVE_ALL",
          USER_UPDATE: "USER_UPDATE",
          USER_NOTE_UPDATE: "USER_NOTE_UPDATE",
          USER_SETTINGS_UPDATE: "USER_SETTINGS_UPDATE",
          USER_GUILD_SETTINGS_UPDATE: "USER_GUILD_SETTINGS_UPDATE",
          PRESENCE_UPDATE: "PRESENCE_UPDATE",
          VOICE_STATE_UPDATE: "VOICE_STATE_UPDATE",
          TYPING_START: "TYPING_START",
          VOICE_SERVER_UPDATE: "VOICE_SERVER_UPDATE",
          RELATIONSHIP_ADD: "RELATIONSHIP_ADD",
          RELATIONSHIP_REMOVE: "RELATIONSHIP_REMOVE",
        }),
        (t.MessageTypes = [
          "DEFAULT",
          "RECIPIENT_ADD",
          "RECIPIENT_REMOVE",
          "CALL",
          "CHANNEL_NAME_CHANGE",
          "CHANNEL_ICON_CHANGE",
          "PINS_ADD",
          "GUILD_MEMBER_JOIN",
        ]),
        (t.MessageNotificationTypes = [
          "EVERYTHING",
          "MENTIONS",
          "NOTHING",
          "INHERIT",
        ]),
        (t.DefaultAvatars = {
          BLURPLE: "6debd47ed13483642cf09e832ed0bc1b",
          GREY: "322c936a8c8be1b803cd94861bdfa868",
          GREEN: "dd4dbc0016779df1378e7812eabaa04d",
          ORANGE: "0e291f67c9274a1abdddeb3fd919cbaa",
          RED: "1cbd08c76f8af6dddce02c5138971129",
        }),
        (t.ExplicitContentFilterTypes = [
          "DISABLED",
          "NON_FRIENDS",
          "FRIENDS_AND_NON_FRIENDS",
        ]),
        (t.UserSettingsMap = {
          convert_emoticons: "convertEmoticons",
          default_guilds_restricted: "defaultGuildsRestricted",
          detect_platform_accounts: "detectPlatformAccounts",
          developer_mode: "developerMode",
          enable_tts_command: "enableTTSCommand",
          theme: "theme",
          status: "status",
          show_current_game: "showCurrentGame",
          inline_attachment_media: "inlineAttachmentMedia",
          inline_embed_media: "inlineEmbedMedia",
          locale: "locale",
          message_display_compact: "messageDisplayCompact",
          render_reactions: "renderReactions",
          guild_positions: "guildPositions",
          restricted_guilds: "restrictedGuilds",
          explicit_content_filter: function (e) {
            return t.ExplicitContentFilterTypes[e];
          },
          friend_source_flags: function (e) {
            return {
              all: e.all || !1,
              mutualGuilds: !!e.all || e.mutual_guilds || !1,
              mutualFriends: !!e.all || e.mutualFriends || !1,
            };
          },
        }),
        (t.UserGuildSettingsMap = {
          message_notifications: function (e) {
            return t.MessageNotificationTypes[e];
          },
          mobile_push: "mobilePush",
          muted: "muted",
          suppress_everyone: "suppressEveryone",
          channel_overrides: "channelOverrides",
        }),
        (t.UserChannelOverrideMap = {
          message_notifications: function (e) {
            return t.MessageNotificationTypes[e];
          },
          muted: "muted",
        }),
        (t.Colors = {
          DEFAULT: 0,
          AQUA: 1752220,
          GREEN: 3066993,
          BLUE: 3447003,
          PURPLE: 10181046,
          LUMINOUS_VIVID_PINK: 15277667,
          GOLD: 15844367,
          ORANGE: 15105570,
          RED: 15158332,
          GREY: 9807270,
          NAVY: 3426654,
          DARK_AQUA: 1146986,
          DARK_GREEN: 2067276,
          DARK_BLUE: 2123412,
          DARK_PURPLE: 7419530,
          DARK_VIVID_PINK: 11342935,
          DARK_GOLD: 12745742,
          DARK_ORANGE: 11027200,
          DARK_RED: 10038562,
          DARK_GREY: 9936031,
          DARKER_GREY: 8359053,
          LIGHT_GREY: 12370112,
          DARK_NAVY: 2899536,
          BLURPLE: 7506394,
          GREYPLE: 10070709,
          DARK_BUT_NOT_BLACK: 2895667,
          NOT_QUITE_BLACK: 2303786,
        }),
        (t.APIErrors = {
          UNKNOWN_ACCOUNT: 10001,
          UNKNOWN_APPLICATION: 10002,
          UNKNOWN_CHANNEL: 10003,
          UNKNOWN_GUILD: 10004,
          UNKNOWN_INTEGRATION: 10005,
          UNKNOWN_INVITE: 10006,
          UNKNOWN_MEMBER: 10007,
          UNKNOWN_MESSAGE: 10008,
          UNKNOWN_OVERWRITE: 10009,
          UNKNOWN_PROVIDER: 10010,
          UNKNOWN_ROLE: 10011,
          UNKNOWN_TOKEN: 10012,
          UNKNOWN_USER: 10013,
          UNKNOWN_EMOJI: 10014,
          BOT_PROHIBITED_ENDPOINT: 20001,
          BOT_ONLY_ENDPOINT: 20002,
          MAXIMUM_GUILDS: 30001,
          MAXIMUM_FRIENDS: 30002,
          MAXIMUM_PINS: 30003,
          MAXIMUM_ROLES: 30005,
          MAXIMUM_REACTIONS: 30010,
          UNAUTHORIZED: 40001,
          MISSING_ACCESS: 50001,
          INVALID_ACCOUNT_TYPE: 50002,
          CANNOT_EXECUTE_ON_DM: 50003,
          EMBED_DISABLED: 50004,
          CANNOT_EDIT_MESSAGE_BY_OTHER: 50005,
          CANNOT_SEND_EMPTY_MESSAGE: 50006,
          CANNOT_MESSAGE_USER: 50007,
          CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL: 50008,
          CHANNEL_VERIFICATION_LEVEL_TOO_HIGH: 50009,
          OAUTH2_APPLICATION_BOT_ABSENT: 50010,
          MAXIMUM_OAUTH2_APPLICATIONS: 50011,
          INVALID_OAUTH_STATE: 50012,
          MISSING_PERMISSIONS: 50013,
          INVALID_AUTHENTICATION_TOKEN: 50014,
          NOTE_TOO_LONG: 50015,
          INVALID_BULK_DELETE_QUANTITY: 50016,
          CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL: 50019,
          CANNOT_EXECUTE_ON_SYSTEM_MESSAGE: 50021,
          BULK_DELETE_MESSAGE_TOO_OLD: 50034,
          INVITE_ACCEPTED_TO_GUILD_NOT_CONTANING_BOT: 50036,
          REACTION_BLOCKED: 90001,
        }),
        (t.DefaultMessageNotifications = ["ALL", "MENTIONS"]);
    }.call(t, s(9)));
  },
  function (e, t) {
    e.exports = class AbstractHandler {
      constructor(e) {
        this.packetManager = e;
      }
      handle(e) {
        return e;
      }
    };
  },
  function (e, t) {
    e.exports = class GenericAction {
      constructor(e) {
        this.client = e;
      }
      handle(e) {
        return e;
      }
    };
  },
  function (e, t, s) {
    (function (t) {
      const i = s(6);
      class Collection extends Map {
        constructor(e) {
          super(e),
            Object.defineProperty(this, "_array", {
              value: null,
              writable: !0,
              configurable: !0,
            }),
            Object.defineProperty(this, "_keyArray", {
              value: null,
              writable: !0,
              configurable: !0,
            });
        }
        set(e, t) {
          return (this._array = null), (this._keyArray = null), super.set(e, t);
        }
        delete(e) {
          return (this._array = null), (this._keyArray = null), super.delete(e);
        }
        array() {
          return (
            (this._array && this._array.length === this.size) ||
              (this._array = [...this.values()]),
            this._array
          );
        }
        keyArray() {
          return (
            (this._keyArray && this._keyArray.length === this.size) ||
              (this._keyArray = [...this.keys()]),
            this._keyArray
          );
        }
        first(e) {
          if (void 0 === e) return this.values().next().value;
          if ("number" != typeof e)
            throw new TypeError("The count must be a number.");
          if (!Number.isInteger(e) || e < 1)
            throw new RangeError(
              "The count must be an integer greater than 0."
            );
          e = Math.min(this.size, e);
          const t = new Array(e),
            s = this.values();
          for (let i = 0; i < e; i++) t[i] = s.next().value;
          return t;
        }
        firstKey(e) {
          if (void 0 === e) return this.keys().next().value;
          if ("number" != typeof e)
            throw new TypeError("The count must be a number.");
          if (!Number.isInteger(e) || e < 1)
            throw new RangeError(
              "The count must be an integer greater than 0."
            );
          e = Math.min(this.size, e);
          const t = new Array(e),
            s = this.keys();
          for (let i = 0; i < e; i++) t[i] = s.next().value;
          return t;
        }
        last(e) {
          const t = this.array();
          if (void 0 === e) return t[t.length - 1];
          if ("number" != typeof e)
            throw new TypeError("The count must be a number.");
          if (!Number.isInteger(e) || e < 1)
            throw new RangeError(
              "The count must be an integer greater than 0."
            );
          return t.slice(-e);
        }
        lastKey(e) {
          const t = this.keyArray();
          if (void 0 === e) return t[t.length - 1];
          if ("number" != typeof e)
            throw new TypeError("The count must be a number.");
          if (!Number.isInteger(e) || e < 1)
            throw new RangeError(
              "The count must be an integer greater than 0."
            );
          return t.slice(-e);
        }
        random(e) {
          let t = this.array();
          if (void 0 === e) return t[Math.floor(Math.random() * t.length)];
          if ("number" != typeof e)
            throw new TypeError("The count must be a number.");
          if (!Number.isInteger(e) || e < 1)
            throw new RangeError(
              "The count must be an integer greater than 0."
            );
          if (0 === t.length) return [];
          const s = new Array(e);
          t = t.slice();
          for (let i = 0; i < e; i++)
            s[i] = t.splice(Math.floor(Math.random() * t.length), 1)[0];
          return s;
        }
        randomKey(e) {
          let t = this.keyArray();
          if (void 0 === e) return t[Math.floor(Math.random() * t.length)];
          if ("number" != typeof e)
            throw new TypeError("The count must be a number.");
          if (!Number.isInteger(e) || e < 1)
            throw new RangeError(
              "The count must be an integer greater than 0."
            );
          if (0 === t.length) return [];
          const s = new Array(e);
          t = t.slice();
          for (let i = 0; i < e; i++)
            s[i] = t.splice(Math.floor(Math.random() * t.length), 1)[0];
          return s;
        }
        findAll(e, t) {
          if ("string" != typeof e)
            throw new TypeError("Key must be a string.");
          if (void 0 === t) throw new Error("Value must be specified.");
          const s = [];
          for (const i of this.values()) i[e] === t && s.push(i);
          return s;
        }
        find(e, t) {
          if ("string" == typeof e) {
            if (void 0 === t) throw new Error("Value must be specified.");
            for (const s of this.values()) if (s[e] === t) return s;
            return null;
          }
          if ("function" == typeof e) {
            for (const [t, s] of this) if (e(s, t, this)) return s;
            return null;
          }
          throw new Error(
            "First argument must be a property string or a function."
          );
        }
        findKey(e, t) {
          if ("string" == typeof e) {
            if (void 0 === t) throw new Error("Value must be specified.");
            for (const [s, i] of this) if (i[e] === t) return s;
            return null;
          }
          if ("function" == typeof e) {
            for (const [t, s] of this) if (e(s, t, this)) return t;
            return null;
          }
          throw new Error(
            "First argument must be a property string or a function."
          );
        }
        exists(e, t) {
          return Boolean(this.find(e, t));
        }
        sweep(e, t) {
          t && (e = e.bind(t));
          const s = this.size;
          for (const [t, s] of this) e(s, t, this) && this.delete(t);
          return s - this.size;
        }
        filter(e, t) {
          t && (e = e.bind(t));
          const s = new Collection();
          for (const [t, i] of this) e(i, t, this) && s.set(t, i);
          return s;
        }
        filterArray(e, t) {
          t && (e = e.bind(t));
          const s = [];
          for (const [t, i] of this) e(i, t, this) && s.push(i);
          return s;
        }
        partition(e, t) {
          void 0 !== t && (e = e.bind(t));
          const s = [new Collection(), new Collection()];
          for (const [t, i] of this)
            e(i, t, this) ? s[0].set(t, i) : s[1].set(t, i);
          return s;
        }
        map(e, t) {
          t && (e = e.bind(t));
          const s = new Array(this.size);
          let i = 0;
          for (const [t, n] of this) s[i++] = e(n, t, this);
          return s;
        }
        some(e, t) {
          t && (e = e.bind(t));
          for (const [t, s] of this) if (e(s, t, this)) return !0;
          return !1;
        }
        every(e, t) {
          t && (e = e.bind(t));
          for (const [t, s] of this) if (!e(s, t, this)) return !1;
          return !0;
        }
        reduce(e, t) {
          let s;
          if (void 0 !== t) {
            s = t;
            for (const [t, i] of this) s = e(s, i, t, this);
          } else {
            let t = !0;
            for (const [i, n] of this)
              t ? ((s = n), (t = !1)) : (s = e(s, n, i, this));
          }
          return s;
        }
        tap(e, t) {
          return this.forEach(e, t), this;
        }
        clone() {
          return new this.constructor(this);
        }
        concat(...e) {
          const t = this.clone();
          for (const s of e) for (const [e, i] of s) t.set(e, i);
          return t;
        }
        deleteAll() {
          const e = [];
          for (const t of this.values()) t.delete && e.push(t.delete());
          return e;
        }
        equals(e) {
          return (
            !!e &&
            (this === e ||
              (this.size === e.size &&
                !this.find((t, s) => {
                  const i = e.get(s);
                  return i !== t || (void 0 === i && !e.has(s));
                })))
          );
        }
        sort(e = (e, t) => +(e > t) || +(e === t) - 1) {
          return new Collection(
            [...this.entries()].sort((t, s) => e(t[1], s[1], t[0], s[0]))
          );
        }
      }
      (Collection.prototype.findAll = i.deprecate(
        Collection.prototype.findAll,
        "Collection#findAll: use Collection#filter instead"
      )),
        (Collection.prototype.filterArray = i.deprecate(
          Collection.prototype.filterArray,
          "Collection#filterArray: use Collection#filter instead"
        )),
        (Collection.prototype.exists = i.deprecate(
          Collection.prototype.exists,
          "Collection#exists: use Collection#some instead"
        )),
        (Collection.prototype.find = function (e, s) {
          if ("string" == typeof e) {
            if (
              (t.emitWarning(
                "Collection#find: pass a function instead",
                "DeprecationWarning"
              ),
              void 0 === s)
            )
              throw new Error("Value must be specified.");
            for (const t of this.values()) if (t[e] === s) return t;
            return null;
          }
          if ("function" == typeof e) {
            for (const [t, s] of this) if (e(s, t, this)) return s;
            return null;
          }
          throw new Error(
            "First argument must be a property string or a function."
          );
        }),
        (Collection.prototype.findKey = function (e, s) {
          if ("string" == typeof e) {
            if (
              (t.emitWarning(
                "Collection#findKey: pass a function instead",
                "DeprecationWarning"
              ),
              void 0 === s)
            )
              throw new Error("Value must be specified.");
            for (const [t, i] of this) if (i[e] === s) return t;
            return null;
          }
          if ("function" == typeof e) {
            for (const [t, s] of this) if (e(s, t, this)) return t;
            return null;
          }
          throw new Error(
            "First argument must be a property string or a function."
          );
        }),
        (e.exports = Collection);
    }.call(t, s(9)));
  },
  function (e, t, s) {
    (function (t) {
      const i = s(25),
        n = s(0),
        r = n.DefaultOptions.http;
      e.exports = class Util {
        constructor() {
          throw new Error(
            `The ${this.constructor.name} class may not be instantiated.`
          );
        }
        static splitMessage(
          e,
          {
            maxLength: t = 1950,
            char: s = "\n",
            prepend: i = "",
            append: n = "",
          } = {}
        ) {
          if (e.length <= t) return e;
          const r = e.split(s);
          if (1 === r.length)
            throw new Error(
              "Message exceeds the max length and contains no split characters."
            );
          const o = [""];
          let a = 0;
          for (let e = 0; e < r.length; e++)
            o[a].length + r[e].length + 1 > t && ((o[a] += n), o.push(i), a++),
              (o[a] += (o[a].length > 0 && o[a] !== i ? s : "") + r[e]);
          return o;
        }
        static escapeMarkdown(e, t = !1, s = !1) {
          return t
            ? e.replace(/```/g, "`â€‹``")
            : s
            ? e.replace(/\\(`|\\)/g, "$1").replace(/(`|\\)/g, "\\$1")
            : e
                .replace(/\\(\*|_|`|~|\\)/g, "$1")
                .replace(/(\*|_|`|~|\\)/g, "\\$1");
        }
        static fetchRecommendedShards(e, t = 1e3) {
          return new Promise((s, o) => {
            if (!e) throw new Error("A token must be provided.");
            i.get(`${r.host}/api/v${r.version}${n.Endpoints.gateway.bot}`)
              .set("Authorization", `Bot ${e.replace(/^Bot\s*/i, "")}`)
              .end((e, i) => {
                e && o(e), s(i.body.shards * (1e3 / t));
              });
          });
        }
        static parseEmoji(e) {
          if (
            (e.includes("%") && (e = decodeURIComponent(e)), !e.includes(":"))
          )
            return { animated: !1, name: e, id: null };
          const t = e.match(/<?(a:)?(\w{2,32}):(\d{17,19})>?/);
          return t ? { animated: Boolean(t[1]), name: t[2], id: t[3] } : null;
        }
        static arraysEqual(e, t) {
          if (e === t) return !0;
          if (e.length !== t.length) return !1;
          for (const s of e) {
            const e = t.indexOf(s);
            -1 !== e && t.splice(e, 1);
          }
          return 0 === t.length;
        }
        static cloneObject(e) {
          return Object.assign(Object.create(e), e);
        }
        static mergeDefault(e, t) {
          if (!t) return e;
          for (const s in e)
            !{}.hasOwnProperty.call(t, s)
              ? (t[s] = e[s])
              : t[s] === Object(t[s]) && (t[s] = this.mergeDefault(e[s], t[s]));
          return t;
        }
        static convertToBuffer(e) {
          return "string" == typeof e && (e = this.str2ab(e)), t.from(e);
        }
        static str2ab(e) {
          const t = new ArrayBuffer(2 * e.length),
            s = new Uint16Array(t);
          for (var i = 0, n = e.length; i < n; i++) s[i] = e.charCodeAt(i);
          return t;
        }
        static makeError(e) {
          const t = new Error(e.message);
          return (t.name = e.name), (t.stack = e.stack), t;
        }
        static makePlainError(e) {
          const t = {};
          return (
            (t.name = e.name), (t.message = e.message), (t.stack = e.stack), t
          );
        }
        static moveElementInArray(e, t, s, i = !1) {
          const n = e.indexOf(t);
          if ((s = (i ? n : 0) + s) > -1 && s < e.length) {
            const t = e.splice(n, 1)[0];
            e.splice(s, 0, t);
          }
          return e.indexOf(t);
        }
        static delayFor(e) {
          return new Promise((t) => {
            setTimeout(t, e);
          });
        }
      };
    }.call(t, s(13).Buffer));
  },
  function (e, t, s) {
    const i = s(0),
      n = s(6);
    class Permissions {
      constructor(e, t) {
        (t = "object" != typeof e || e instanceof Array ? e : t),
          (this._member = "object" == typeof e ? e : null),
          (this.bitfield =
            "number" == typeof t ? t : this.constructor.resolve(t));
      }
      get member() {
        return this._member;
      }
      set member(e) {
        this._member = e;
      }
      get raw() {
        return this.bitfield;
      }
      set raw(e) {
        this.bitfield = e;
      }
      has(e, t = !0) {
        return e instanceof Array
          ? e.every((e) => this.has(e, t))
          : ((e = this.constructor.resolve(e)),
            !!(
              t && (this.bitfield & this.constructor.FLAGS.ADMINISTRATOR) > 0
            ) || (this.bitfield & e) === e);
      }
      missing(e, t = !0) {
        return (
          e instanceof Array || (e = [e]), e.filter((e) => !this.has(e, t))
        );
      }
      add(...e) {
        let t = 0;
        for (let s = e.length - 1; s >= 0; s--) {
          t |= this.constructor.resolve(e[s]);
        }
        return Object.isFrozen(this)
          ? new this.constructor(this.bitfield | t)
          : ((this.bitfield |= t), this);
      }
      remove(...e) {
        let t = 0;
        for (let s = e.length - 1; s >= 0; s--) {
          t |= this.constructor.resolve(e[s]);
        }
        return Object.isFrozen(this)
          ? new this.constructor(this.bitfield & ~t)
          : ((this.bitfield &= ~t), this);
      }
      serialize(e = !0) {
        const t = {};
        for (const s in this.constructor.FLAGS) t[s] = this.has(s, e);
        return t;
      }
      hasPermission(e, t = !1) {
        return this.has(e, !t);
      }
      hasPermissions(e, t = !1) {
        return this.has(e, !t);
      }
      missingPermissions(e, t = !1) {
        return this.missing(e, !t);
      }
      toArray(e = !0) {
        return Object.keys(this.constructor.FLAGS).filter((t) =>
          this.has(t, e)
        );
      }
      freeze() {
        return Object.freeze(this);
      }
      valueOf() {
        return this.bitfield;
      }
      static resolve(e) {
        if (e instanceof Array)
          return e.map((e) => this.resolve(e)).reduce((e, t) => e | t, 0);
        if (
          ("string" == typeof e && (e = this.FLAGS[e]),
          "number" != typeof e || e < 0)
        )
          throw new RangeError(i.Errors.NOT_A_PERMISSION);
        return e;
      }
    }
    (Permissions.FLAGS = {
      CREATE_INSTANT_INVITE: 1,
      KICK_MEMBERS: 2,
      BAN_MEMBERS: 4,
      ADMINISTRATOR: 8,
      MANAGE_CHANNELS: 16,
      MANAGE_GUILD: 32,
      ADD_REACTIONS: 64,
      VIEW_AUDIT_LOG: 128,
      PRIORITY_SPEAKER: 256,
      VIEW_CHANNEL: 1024,
      READ_MESSAGES: 1024,
      SEND_MESSAGES: 2048,
      SEND_TTS_MESSAGES: 4096,
      MANAGE_MESSAGES: 8192,
      EMBED_LINKS: 16384,
      ATTACH_FILES: 32768,
      READ_MESSAGE_HISTORY: 65536,
      MENTION_EVERYONE: 1 << 17,
      EXTERNAL_EMOJIS: 1 << 18,
      USE_EXTERNAL_EMOJIS: 1 << 18,
      CONNECT: 1 << 20,
      SPEAK: 1 << 21,
      MUTE_MEMBERS: 1 << 22,
      DEAFEN_MEMBERS: 1 << 23,
      MOVE_MEMBERS: 1 << 24,
      USE_VAD: 1 << 25,
      CHANGE_NICKNAME: 1 << 26,
      MANAGE_NICKNAMES: 1 << 27,
      MANAGE_ROLES: 1 << 28,
      MANAGE_ROLES_OR_PERMISSIONS: 1 << 28,
      MANAGE_WEBHOOKS: 1 << 29,
      MANAGE_EMOJIS: 1 << 30,
    }),
      (Permissions.ALL = Object.keys(Permissions.FLAGS).reduce(
        (e, t) => e | Permissions.FLAGS[t],
        0
      )),
      (Permissions.DEFAULT = 104324097),
      (Permissions.prototype.hasPermission = n.deprecate(
        Permissions.prototype.hasPermission,
        "EvaluatedPermissions#hasPermission is deprecated, use Permissions#has instead"
      )),
      (Permissions.prototype.hasPermissions = n.deprecate(
        Permissions.prototype.hasPermissions,
        "EvaluatedPermissions#hasPermissions is deprecated, use Permissions#has instead"
      )),
      (Permissions.prototype.missingPermissions = n.deprecate(
        Permissions.prototype.missingPermissions,
        "EvaluatedPermissions#missingPermissions is deprecated, use Permissions#missing instead"
      )),
      Object.defineProperty(Permissions.prototype, "member", {
        get: n.deprecate(
          Object.getOwnPropertyDescriptor(Permissions.prototype, "member").get,
          "EvaluatedPermissions#member is deprecated"
        ),
      }),
      (e.exports = Permissions);
  },
  function (e, t, s) {
    (function (e, i) {
      var n = /%[sdj%]/g;
      (t.format = function (e) {
        if (!E(e)) {
          for (var t = [], s = 0; s < arguments.length; s++)
            t.push(a(arguments[s]));
          return t.join(" ");
        }
        s = 1;
        for (
          var i = arguments,
            r = i.length,
            o = String(e).replace(n, function (e) {
              if ("%%" === e) return "%";
              if (s >= r) return e;
              switch (e) {
                case "%s":
                  return String(i[s++]);
                case "%d":
                  return Number(i[s++]);
                case "%j":
                  try {
                    return JSON.stringify(i[s++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }),
            l = i[s];
          s < r;
          l = i[++s]
        )
          g(l) || !b(l) ? (o += " " + l) : (o += " " + a(l));
        return o;
      }),
        (t.deprecate = function (s, n) {
          if (_(e.process))
            return function () {
              return t.deprecate(s, n).apply(this, arguments);
            };
          if (!0 === i.noDeprecation) return s;
          var r = !1;
          return function () {
            if (!r) {
              if (i.throwDeprecation) throw new Error(n);
              i.traceDeprecation ? console.trace(n) : console.error(n),
                (r = !0);
            }
            return s.apply(this, arguments);
          };
        });
      var r,
        o = {};
      function a(e, s) {
        var i = { seen: [], stylize: h };
        return (
          arguments.length >= 3 && (i.depth = arguments[2]),
          arguments.length >= 4 && (i.colors = arguments[3]),
          p(s) ? (i.showHidden = s) : s && t._extend(i, s),
          _(i.showHidden) && (i.showHidden = !1),
          _(i.depth) && (i.depth = 2),
          _(i.colors) && (i.colors = !1),
          _(i.customInspect) && (i.customInspect = !0),
          i.colors && (i.stylize = l),
          c(i, e, i.depth)
        );
      }
      function l(e, t) {
        var s = a.styles[t];
        return s
          ? "[" + a.colors[s][0] + "m" + e + "[" + a.colors[s][1] + "m"
          : e;
      }
      function h(e, t) {
        return e;
      }
      function c(e, s, i) {
        if (
          e.customInspect &&
          s &&
          A(s.inspect) &&
          s.inspect !== t.inspect &&
          (!s.constructor || s.constructor.prototype !== s)
        ) {
          var n = s.inspect(i, e);
          return E(n) || (n = c(e, n, i)), n;
        }
        var r = (function (e, t) {
          if (_(t)) return e.stylize("undefined", "undefined");
          if (E(t)) {
            var s =
              "'" +
              JSON.stringify(t)
                .replace(/^"|"$/g, "")
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return e.stylize(s, "string");
          }
          if (f(t)) return e.stylize("" + t, "number");
          if (p(t)) return e.stylize("" + t, "boolean");
          if (g(t)) return e.stylize("null", "null");
        })(e, s);
        if (r) return r;
        var o = Object.keys(s),
          a = (function (e) {
            var t = {};
            return (
              e.forEach(function (e, s) {
                t[e] = !0;
              }),
              t
            );
          })(o);
        if (
          (e.showHidden && (o = Object.getOwnPropertyNames(s)),
          w(s) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
        )
          return u(s);
        if (0 === o.length) {
          if (A(s)) {
            var l = s.name ? ": " + s.name : "";
            return e.stylize("[Function" + l + "]", "special");
          }
          if (v(s))
            return e.stylize(RegExp.prototype.toString.call(s), "regexp");
          if (y(s)) return e.stylize(Date.prototype.toString.call(s), "date");
          if (w(s)) return u(s);
        }
        var h,
          b = "",
          T = !1,
          M = ["{", "}"];
        (m(s) && ((T = !0), (M = ["[", "]"])), A(s)) &&
          (b = " [Function" + (s.name ? ": " + s.name : "") + "]");
        return (
          v(s) && (b = " " + RegExp.prototype.toString.call(s)),
          y(s) && (b = " " + Date.prototype.toUTCString.call(s)),
          w(s) && (b = " " + u(s)),
          0 !== o.length || (T && 0 != s.length)
            ? i < 0
              ? v(s)
                ? e.stylize(RegExp.prototype.toString.call(s), "regexp")
                : e.stylize("[Object]", "special")
              : (e.seen.push(s),
                (h = T
                  ? (function (e, t, s, i, n) {
                      for (var r = [], o = 0, a = t.length; o < a; ++o)
                        D(t, String(o))
                          ? r.push(d(e, t, s, i, String(o), !0))
                          : r.push("");
                      return (
                        n.forEach(function (n) {
                          n.match(/^\d+$/) || r.push(d(e, t, s, i, n, !0));
                        }),
                        r
                      );
                    })(e, s, i, a, o)
                  : o.map(function (t) {
                      return d(e, s, i, a, t, T);
                    })),
                e.seen.pop(),
                (function (e, t, s) {
                  if (
                    e.reduce(function (e, t) {
                      return (
                        0,
                        t.indexOf("\n") >= 0 && 0,
                        e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                      );
                    }, 0) > 60
                  )
                    return (
                      s[0] +
                      ("" === t ? "" : t + "\n ") +
                      " " +
                      e.join(",\n  ") +
                      " " +
                      s[1]
                    );
                  return s[0] + t + " " + e.join(", ") + " " + s[1];
                })(h, b, M))
            : M[0] + b + M[1]
        );
      }
      function u(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }
      function d(e, t, s, i, n, r) {
        var o, a, l;
        if (
          ((l = Object.getOwnPropertyDescriptor(t, n) || { value: t[n] }).get
            ? (a = l.set
                ? e.stylize("[Getter/Setter]", "special")
                : e.stylize("[Getter]", "special"))
            : l.set && (a = e.stylize("[Setter]", "special")),
          D(i, n) || (o = "[" + n + "]"),
          a ||
            (e.seen.indexOf(l.value) < 0
              ? (a = g(s) ? c(e, l.value, null) : c(e, l.value, s - 1)).indexOf(
                  "\n"
                ) > -1 &&
                (a = r
                  ? a
                      .split("\n")
                      .map(function (e) {
                        return "  " + e;
                      })
                      .join("\n")
                      .substr(2)
                  : "\n" +
                    a
                      .split("\n")
                      .map(function (e) {
                        return "   " + e;
                      })
                      .join("\n"))
              : (a = e.stylize("[Circular]", "special"))),
          _(o))
        ) {
          if (r && n.match(/^\d+$/)) return a;
          (o = JSON.stringify("" + n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((o = o.substr(1, o.length - 2)), (o = e.stylize(o, "name")))
            : ((o = o
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (o = e.stylize(o, "string")));
        }
        return o + ": " + a;
      }
      function m(e) {
        return Array.isArray(e);
      }
      function p(e) {
        return "boolean" == typeof e;
      }
      function g(e) {
        return null === e;
      }
      function f(e) {
        return "number" == typeof e;
      }
      function E(e) {
        return "string" == typeof e;
      }
      function _(e) {
        return void 0 === e;
      }
      function v(e) {
        return b(e) && "[object RegExp]" === T(e);
      }
      function b(e) {
        return "object" == typeof e && null !== e;
      }
      function y(e) {
        return b(e) && "[object Date]" === T(e);
      }
      function w(e) {
        return b(e) && ("[object Error]" === T(e) || e instanceof Error);
      }
      function A(e) {
        return "function" == typeof e;
      }
      function T(e) {
        return Object.prototype.toString.call(e);
      }
      function M(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }
      (t.debuglog = function (e) {
        if (
          (_(r) &&
            (r = Object({ __DISCORD_WEBPACK__: "true" }).NODE_DEBUG || ""),
          (e = e.toUpperCase()),
          !o[e])
        )
          if (new RegExp("\\b" + e + "\\b", "i").test(r)) {
            var s = i.pid;
            o[e] = function () {
              var i = t.format.apply(t, arguments);
              console.error("%s %d: %s", e, s, i);
            };
          } else o[e] = function () {};
        return o[e];
      }),
        (t.inspect = a),
        (a.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (a.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red",
        }),
        (t.isArray = m),
        (t.isBoolean = p),
        (t.isNull = g),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = f),
        (t.isString = E),
        (t.isSymbol = function (e) {
          return "symbol" == typeof e;
        }),
        (t.isUndefined = _),
        (t.isRegExp = v),
        (t.isObject = b),
        (t.isDate = y),
        (t.isError = w),
        (t.isFunction = A),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" == typeof e ||
            void 0 === e
          );
        }),
        (t.isBuffer = s(71));
      var R = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      function D(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.log = function () {
        var e, s;
        console.log(
          "%s - %s",
          ((e = new Date()),
          (s = [M(e.getHours()), M(e.getMinutes()), M(e.getSeconds())].join(
            ":"
          )),
          [e.getDate(), R[e.getMonth()], s].join(" ")),
          t.format.apply(t, arguments)
        );
      }),
        (t.inherits = s(72)),
        (t._extend = function (e, t) {
          if (!t || !b(t)) return e;
          for (var s = Object.keys(t), i = s.length; i--; ) e[s[i]] = t[s[i]];
          return e;
        });
    }.call(t, s(35), s(9)));
  },
  function (e, t, s) {
    const i = s(26),
      n = 14200704e5;
    let r = 0;
    function o(e, t, s = "0") {
      return String(e).length >= t
        ? String(e)
        : (String(s).repeat(t) + e).slice(-t);
    }
    e.exports = class SnowflakeUtil {
      constructor() {
        throw new Error(
          `The ${this.constructor.name} class may not be instantiated.`
        );
      }
      static generate(e = Date.now()) {
        if (
          (e instanceof Date && (e = e.getTime()),
          "number" != typeof e || isNaN(e))
        )
          throw new TypeError(
            `"timestamp" argument must be a number (received ${
              isNaN(e) ? "NaN" : typeof e
            })`
          );
        r >= 4095 && (r = 0);
        const t = `${o((e - n).toString(2), 42)}0000100000${o(
          (r++).toString(2),
          12
        )}`;
        return i.fromString(t, 2).toString();
      }
      static deconstruct(e) {
        const t = o(i.fromString(e).toString(2), 64),
          s = {
            timestamp: parseInt(t.substring(0, 42), 2) + n,
            workerID: parseInt(t.substring(42, 47), 2),
            processID: parseInt(t.substring(47, 52), 2),
            increment: parseInt(t.substring(52, 64), 2),
            binary: t,
          };
        return (
          Object.defineProperty(s, "date", {
            get: function () {
              return new Date(this.timestamp);
            },
            enumerable: !0,
          }),
          s
        );
      }
    };
  },
  function (e, t, s) {
    const i = s(7),
      n = s(5),
      r = s(6);
    class Role {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e.client }),
          (this.guild = e),
          (this.deleted = !1),
          t && this.setup(t);
      }
      setup(e) {
        (this.id = e.id),
          (this.name = e.name),
          (this.color = e.color),
          (this.hoist = e.hoist),
          (this.position = e.position),
          (this.permissions = e.permissions),
          (this.managed = e.managed),
          (this.mentionable = e.mentionable);
      }
      get createdTimestamp() {
        return i.deconstruct(this.id).timestamp;
      }
      get createdAt() {
        return new Date(this.createdTimestamp);
      }
      get hexColor() {
        let e = this.color.toString(16);
        for (; e.length < 6; ) e = `0${e}`;
        return `#${e}`;
      }
      get members() {
        return this.guild.members.filter((e) => e.roles.has(this.id));
      }
      get editable() {
        if (this.managed) return !1;
        const e = this.guild.member(this.client.user);
        return (
          !!e.permissions.has(n.FLAGS.MANAGE_ROLES_OR_PERMISSIONS) &&
          e.highestRole.comparePositionTo(this) > 0
        );
      }
      get calculatedPosition() {
        const e = this.guild._sortedRoles;
        return e.array().indexOf(e.get(this.id));
      }
      serialize() {
        return new n(this.permissions).serialize();
      }
      hasPermission(e, t = !1, s) {
        return new n(this.permissions).has(e, void 0 !== s ? s : !t);
      }
      hasPermissions(e, t = !1) {
        return new n(this.permissions).has(e, !t);
      }
      comparePositionTo(e) {
        return this.constructor.comparePositions(this, e);
      }
      edit(e, t) {
        return this.client.rest.methods.updateGuildRole(this, e, t);
      }
      setName(e, t) {
        return this.edit({ name: e }, t);
      }
      setColor(e, t) {
        return this.edit({ color: e }, t);
      }
      setHoist(e, t) {
        return this.edit({ hoist: e }, t);
      }
      setPosition(e, t) {
        return this.guild.setRolePosition(this, e, t).then(() => this);
      }
      setPermissions(e, t) {
        return this.edit({ permissions: e }, t);
      }
      setMentionable(e, t) {
        return this.edit({ mentionable: e }, t);
      }
      delete(e) {
        return this.client.rest.methods.deleteGuildRole(this, e);
      }
      equals(e) {
        return (
          e &&
          this.id === e.id &&
          this.name === e.name &&
          this.color === e.color &&
          this.hoist === e.hoist &&
          this.position === e.position &&
          this.permissions === e.permissions &&
          this.managed === e.managed
        );
      }
      toString() {
        return this.id === this.guild.id ? "@everyone" : `<@&${this.id}>`;
      }
      static comparePositions(e, t) {
        return e.position === t.position
          ? t.id - e.id
          : e.position - t.position;
      }
    }
    (Role.prototype.hasPermissions = r.deprecate(
      Role.prototype.hasPermissions,
      "Role#hasPermissions is deprecated - use Role#hasPermission instead, it now takes an array"
    )),
      (e.exports = Role);
  },
  function (e, t) {
    var s,
      i,
      n = (e.exports = {});
    function r() {
      throw new Error("setTimeout has not been defined");
    }
    function o() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (s === setTimeout) return setTimeout(e, 0);
      if ((s === r || !s) && setTimeout)
        return (s = setTimeout), setTimeout(e, 0);
      try {
        return s(e, 0);
      } catch (t) {
        try {
          return s.call(null, e, 0);
        } catch (t) {
          return s.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        s = "function" == typeof setTimeout ? setTimeout : r;
      } catch (e) {
        s = r;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        i = o;
      }
    })();
    var l,
      h = [],
      c = !1,
      u = -1;
    function d() {
      c &&
        l &&
        ((c = !1), l.length ? (h = l.concat(h)) : (u = -1), h.length && m());
    }
    function m() {
      if (!c) {
        var e = a(d);
        c = !0;
        for (var t = h.length; t; ) {
          for (l = h, h = []; ++u < t; ) l && l[u].run();
          (u = -1), (t = h.length);
        }
        (l = null),
          (c = !1),
          (function (e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === o || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(e);
            try {
              i(e);
            } catch (t) {
              try {
                return i.call(null, e);
              } catch (t) {
                return i.call(this, e);
              }
            }
          })(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function g() {}
    (n.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var s = 1; s < arguments.length; s++) t[s - 1] = arguments[s];
      h.push(new p(e, t)), 1 !== h.length || c || a(m);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (n.title = "browser"),
      (n.browser = !0),
      (n.env = {}),
      (n.argv = []),
      (n.version = ""),
      (n.versions = {}),
      (n.on = g),
      (n.addListener = g),
      (n.once = g),
      (n.off = g),
      (n.removeListener = g),
      (n.removeAllListeners = g),
      (n.emit = g),
      (n.prependListener = g),
      (n.prependOnceListener = g),
      (n.listeners = function (e) {
        return [];
      }),
      (n.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (n.cwd = function () {
        return "/";
      }),
      (n.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (n.umask = function () {
        return 0;
      });
  },
  function (e, t, s) {
    const i = s(15),
      n = s(0),
      r = s(11).Presence,
      o = s(7),
      a = s(6);
    class User {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e }), t && this.setup(t);
      }
      setup(e) {
        (this.id = e.id),
          (this.username = e.username),
          (this.discriminator = e.discriminator),
          (this.avatar = e.avatar),
          (this.bot = Boolean(e.bot)),
          (this.lastMessageID = null),
          (this.lastMessage = null);
      }
      patch(e) {
        for (const t of ["id", "username", "discriminator", "avatar", "bot"])
          void 0 !== e[t] && (this[t] = e[t]);
        e.token && (this.client.token = e.token);
      }
      get createdTimestamp() {
        return o.deconstruct(this.id).timestamp;
      }
      get createdAt() {
        return new Date(this.createdTimestamp);
      }
      get presence() {
        if (this.client.presences.has(this.id))
          return this.client.presences.get(this.id);
        for (const e of this.client.guilds.values())
          if (e.presences.has(this.id)) return e.presences.get(this.id);
        return new r(void 0, this.client);
      }
      get avatarURL() {
        return this.avatar
          ? n.Endpoints.User(this).Avatar(
              this.client.options.http.cdn,
              this.avatar
            )
          : null;
      }
      get defaultAvatarURL() {
        const e = Object.keys(n.DefaultAvatars),
          t = e[this.discriminator % e.length];
        return n.Endpoints.CDN(this.client.options.http.host).Asset(
          `${n.DefaultAvatars[t]}.png`
        );
      }
      get displayAvatarURL() {
        return this.avatarURL || this.defaultAvatarURL;
      }
      get tag() {
        return `${this.username}#${this.discriminator}`;
      }
      get note() {
        return this.client.user.notes.get(this.id) || null;
      }
      typingIn(e) {
        return (e = this.client.resolver.resolveChannel(e))._typing.has(
          this.id
        );
      }
      typingSinceIn(e) {
        return (e = this.client.resolver.resolveChannel(e))._typing.has(this.id)
          ? new Date(e._typing.get(this.id).since)
          : null;
      }
      typingDurationIn(e) {
        return (e = this.client.resolver.resolveChannel(e))._typing.has(this.id)
          ? e._typing.get(this.id).elapsedTime
          : -1;
      }
      get dmChannel() {
        return this.client.channels
          .filter((e) => "dm" === e.type)
          .find((e) => e.recipient.id === this.id);
      }
      createDM() {
        return this.client.rest.methods.createDM(this);
      }
      deleteDM() {
        return this.client.rest.methods.deleteChannel(this);
      }
      addFriend() {
        return this.client.rest.methods.addFriend(this);
      }
      removeFriend() {
        return this.client.rest.methods.removeFriend(this);
      }
      block() {
        return this.client.rest.methods.blockUser(this);
      }
      unblock() {
        return this.client.rest.methods.unblockUser(this);
      }
      fetchProfile() {
        return this.client.rest.methods.fetchUserProfile(this);
      }
      setNote(e) {
        return this.client.rest.methods.setNote(this, e);
      }
      equals(e) {
        return (
          e &&
          this.id === e.id &&
          this.username === e.username &&
          this.discriminator === e.discriminator &&
          this.avatar === e.avatar &&
          this.bot === Boolean(e.bot)
        );
      }
      toString() {
        return `<@${this.id}>`;
      }
      send() {}
      sendMessage() {}
      sendEmbed() {}
      sendFile() {}
      sendCode() {}
    }
    i.applyToClass(User),
      (User.prototype.block = a.deprecate(
        User.prototype.block,
        "User#block: userbot methods will be removed"
      )),
      (User.prototype.unblock = a.deprecate(
        User.prototype.unblock,
        "User#unblock: userbot methods will be removed"
      )),
      (User.prototype.addFriend = a.deprecate(
        User.prototype.addFriend,
        "User#addFriend: userbot methods will be removed"
      )),
      (User.prototype.removeFriend = a.deprecate(
        User.prototype.removeFriend,
        "User#removeFriend: userbot methods will be removed"
      )),
      (User.prototype.setNote = a.deprecate(
        User.prototype.setNote,
        "User#setNote, userbot methods will be removed"
      )),
      (User.prototype.fetchProfile = a.deprecate(
        User.prototype.fetchProfile,
        "User#fetchProfile: userbot methods will be removed"
      )),
      (e.exports = User);
  },
  function (e, t, s) {
    const { ActivityFlags: i, Endpoints: n } = s(0);
    class Game {
      constructor(e, t) {
        Object.defineProperty(this, "presence", { value: t }),
          (this.name = e.name),
          (this.type = e.type),
          (this.url = e.url || null),
          (this.details = e.details || null),
          (this.state = e.state || null),
          (this.applicationID = e.application_id || null),
          (this.timestamps = e.timestamps
            ? {
                start: e.timestamps.start
                  ? new Date(Number(e.timestamps.start))
                  : null,
                end: e.timestamps.end
                  ? new Date(Number(e.timestamps.end))
                  : null,
              }
            : null),
          (this.party = e.party || null),
          (this.assets = e.assets
            ? new RichPresenceAssets(this, e.assets)
            : null),
          (this.syncID = e.sync_id),
          (this._flags = e.flags);
      }
      get flags() {
        const e = [];
        for (const [t, s] of Object.entries(i))
          (this._flags & s) === s && e.push(t);
        return e;
      }
      get streaming() {
        return 1 === this.type;
      }
      toString() {
        return this.name;
      }
      equals(e) {
        return (
          this === e ||
          (e &&
            this.name === e.name &&
            this.type === e.type &&
            this.url === e.url)
        );
      }
    }
    class RichPresenceAssets {
      constructor(e, t) {
        Object.defineProperty(this, "game", { value: e }),
          (this.largeText = t.large_text || null),
          (this.smallText = t.small_text || null),
          (this.largeImage = t.large_image || null),
          (this.smallImage = t.small_image || null);
      }
      get smallImageURL() {
        return this.smallImage
          ? n
              .CDN(this.game.presence.client.options.http.cdn)
              .AppAsset(this.game.applicationID, this.smallImage)
          : null;
      }
      get largeImageURL() {
        return this.largeImage
          ? /^spotify:/.test(this.largeImage)
            ? `https://i.scdn.co/image/${this.largeImage.slice(8)}`
            : n
                .CDN(this.game.presence.client.options.http.cdn)
                .AppAsset(this.game.applicationID, this.largeImage)
          : null;
      }
    }
    (t.Presence = class Presence {
      constructor(e = {}, t) {
        Object.defineProperty(this, "client", { value: t }),
          (this.status = e.status || "offline"),
          (this.game = e.game ? new Game(e.game, this) : null);
      }
      update(e) {
        (this.status = e.status || this.status),
          (this.game = e.game ? new Game(e.game, this) : null);
      }
      equals(e) {
        return (
          this === e ||
          (e && this.status === e.status && this.game
            ? this.game.equals(e.game)
            : !e.game)
        );
      }
    }),
      (t.Game = Game),
      (t.RichPresenceAssets = RichPresenceAssets);
  },
  function (e, t, s) {
    const i = s(7);
    e.exports = class Channel {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e }),
          (this.type = null),
          (this.deleted = !1),
          t && this.setup(t);
      }
      setup(e) {
        this.id = e.id;
      }
      get createdTimestamp() {
        return i.deconstruct(this.id).timestamp;
      }
      get createdAt() {
        return new Date(this.createdTimestamp);
      }
      delete() {
        return this.client.rest.methods.deleteChannel(this);
      }
    };
  },
  function (e, t, s) {
    "use strict";
    (function (e) {
      var i = s(60),
        n = s(61),
        r = s(62);
      function o() {
        return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function a(e, t) {
        if (o() < t) throw new RangeError("Invalid typed array length");
        return (
          l.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = l.prototype)
            : (null === e && (e = new l(t)), (e.length = t)),
          e
        );
      }
      function l(e, t, s) {
        if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
          return new l(e, t, s);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return u(this, e);
        }
        return h(this, e, t, s);
      }
      function h(e, t, s, i) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, s, i) {
              if ((t.byteLength, s < 0 || t.byteLength < s))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < s + (i || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === s && void 0 === i
                  ? new Uint8Array(t)
                  : void 0 === i
                  ? new Uint8Array(t, s)
                  : new Uint8Array(t, s, i);
              l.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = l.prototype)
                : (e = d(e, t));
              return e;
            })(e, t, s, i)
          : "string" == typeof t
          ? (function (e, t, s) {
              ("string" == typeof s && "" !== s) || (s = "utf8");
              if (!l.isEncoding(s))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var i = 0 | p(t, s),
                n = (e = a(e, i)).write(t, s);
              n !== i && (e = e.slice(0, n));
              return e;
            })(e, t, s)
          : (function (e, t) {
              if (l.isBuffer(t)) {
                var s = 0 | m(t.length);
                return 0 === (e = a(e, s)).length ? e : (t.copy(e, 0, 0, s), e);
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length || (i = t.length) != i
                    ? a(e, 0)
                    : d(e, t);
                if ("Buffer" === t.type && r(t.data)) return d(e, t.data);
              }
              var i;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function c(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function u(e, t) {
        if ((c(t), (e = a(e, t < 0 ? 0 : 0 | m(t))), !l.TYPED_ARRAY_SUPPORT))
          for (var s = 0; s < t; ++s) e[s] = 0;
        return e;
      }
      function d(e, t) {
        var s = t.length < 0 ? 0 : 0 | m(t.length);
        e = a(e, s);
        for (var i = 0; i < s; i += 1) e[i] = 255 & t[i];
        return e;
      }
      function m(e) {
        if (e >= o())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              o().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function p(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var s = e.length;
        if (0 === s) return 0;
        for (var i = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return s;
            case "utf8":
            case "utf-8":
            case void 0:
              return B(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * s;
            case "hex":
              return s >>> 1;
            case "base64":
              return $(e).length;
            default:
              if (i) return B(e).length;
              (t = ("" + t).toLowerCase()), (i = !0);
          }
      }
      function g(e, t, s) {
        var i = e[t];
        (e[t] = e[s]), (e[s] = i);
      }
      function f(e, t, s, i, n) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof s
            ? ((i = s), (s = 0))
            : s > 2147483647
            ? (s = 2147483647)
            : s < -2147483648 && (s = -2147483648),
          (s = +s),
          isNaN(s) && (s = n ? 0 : e.length - 1),
          s < 0 && (s = e.length + s),
          s >= e.length)
        ) {
          if (n) return -1;
          s = e.length - 1;
        } else if (s < 0) {
          if (!n) return -1;
          s = 0;
        }
        if (("string" == typeof t && (t = l.from(t, i)), l.isBuffer(t)))
          return 0 === t.length ? -1 : E(e, t, s, i, n);
        if ("number" == typeof t)
          return (
            (t &= 255),
            l.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? n
                ? Uint8Array.prototype.indexOf.call(e, t, s)
                : Uint8Array.prototype.lastIndexOf.call(e, t, s)
              : E(e, [t], s, i, n)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function E(e, t, s, i, n) {
        var r,
          o = 1,
          a = e.length,
          l = t.length;
        if (
          void 0 !== i &&
          ("ucs2" === (i = String(i).toLowerCase()) ||
            "ucs-2" === i ||
            "utf16le" === i ||
            "utf-16le" === i)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (o = 2), (a /= 2), (l /= 2), (s /= 2);
        }
        function h(e, t) {
          return 1 === o ? e[t] : e.readUInt16BE(t * o);
        }
        if (n) {
          var c = -1;
          for (r = s; r < a; r++)
            if (h(e, r) === h(t, -1 === c ? 0 : r - c)) {
              if ((-1 === c && (c = r), r - c + 1 === l)) return c * o;
            } else -1 !== c && (r -= r - c), (c = -1);
        } else
          for (s + l > a && (s = a - l), r = s; r >= 0; r--) {
            for (var u = !0, d = 0; d < l; d++)
              if (h(e, r + d) !== h(t, d)) {
                u = !1;
                break;
              }
            if (u) return r;
          }
        return -1;
      }
      function _(e, t, s, i) {
        s = Number(s) || 0;
        var n = e.length - s;
        i ? (i = Number(i)) > n && (i = n) : (i = n);
        var r = t.length;
        if (r % 2 != 0) throw new TypeError("Invalid hex string");
        i > r / 2 && (i = r / 2);
        for (var o = 0; o < i; ++o) {
          var a = parseInt(t.substr(2 * o, 2), 16);
          if (isNaN(a)) return o;
          e[s + o] = a;
        }
        return o;
      }
      function v(e, t, s, i) {
        return q(B(t, e.length - s), e, s, i);
      }
      function b(e, t, s, i) {
        return q(
          (function (e) {
            for (var t = [], s = 0; s < e.length; ++s)
              t.push(255 & e.charCodeAt(s));
            return t;
          })(t),
          e,
          s,
          i
        );
      }
      function y(e, t, s, i) {
        return b(e, t, s, i);
      }
      function w(e, t, s, i) {
        return q($(t), e, s, i);
      }
      function A(e, t, s, i) {
        return q(
          (function (e, t) {
            for (
              var s, i, n, r = [], o = 0;
              o < e.length && !((t -= 2) < 0);
              ++o
            )
              (s = e.charCodeAt(o)),
                (i = s >> 8),
                (n = s % 256),
                r.push(n),
                r.push(i);
            return r;
          })(t, e.length - s),
          e,
          s,
          i
        );
      }
      function T(e, t, s) {
        return 0 === t && s === e.length
          ? i.fromByteArray(e)
          : i.fromByteArray(e.slice(t, s));
      }
      function M(e, t, s) {
        s = Math.min(e.length, s);
        for (var i = [], n = t; n < s; ) {
          var r,
            o,
            a,
            l,
            h = e[n],
            c = null,
            u = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
          if (n + u <= s)
            switch (u) {
              case 1:
                h < 128 && (c = h);
                break;
              case 2:
                128 == (192 & (r = e[n + 1])) &&
                  (l = ((31 & h) << 6) | (63 & r)) > 127 &&
                  (c = l);
                break;
              case 3:
                (r = e[n + 1]),
                  (o = e[n + 2]),
                  128 == (192 & r) &&
                    128 == (192 & o) &&
                    (l = ((15 & h) << 12) | ((63 & r) << 6) | (63 & o)) >
                      2047 &&
                    (l < 55296 || l > 57343) &&
                    (c = l);
                break;
              case 4:
                (r = e[n + 1]),
                  (o = e[n + 2]),
                  (a = e[n + 3]),
                  128 == (192 & r) &&
                    128 == (192 & o) &&
                    128 == (192 & a) &&
                    (l =
                      ((15 & h) << 18) |
                      ((63 & r) << 12) |
                      ((63 & o) << 6) |
                      (63 & a)) > 65535 &&
                    l < 1114112 &&
                    (c = l);
            }
          null === c
            ? ((c = 65533), (u = 1))
            : c > 65535 &&
              ((c -= 65536),
              i.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            i.push(c),
            (n += u);
        }
        return (function (e) {
          var t = e.length;
          if (t <= R) return String.fromCharCode.apply(String, e);
          var s = "",
            i = 0;
          for (; i < t; )
            s += String.fromCharCode.apply(String, e.slice(i, (i += R)));
          return s;
        })(i);
      }
      (t.Buffer = l),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return l.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (l.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = o()),
        (l.poolSize = 8192),
        (l._augment = function (e) {
          return (e.__proto__ = l.prototype), e;
        }),
        (l.from = function (e, t, s) {
          return h(null, e, t, s);
        }),
        l.TYPED_ARRAY_SUPPORT &&
          ((l.prototype.__proto__ = Uint8Array.prototype),
          (l.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            l[Symbol.species] === l &&
            Object.defineProperty(l, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (l.alloc = function (e, t, s) {
          return (function (e, t, s, i) {
            return (
              c(t),
              t <= 0
                ? a(e, t)
                : void 0 !== s
                ? "string" == typeof i
                  ? a(e, t).fill(s, i)
                  : a(e, t).fill(s)
                : a(e, t)
            );
          })(null, e, t, s);
        }),
        (l.allocUnsafe = function (e) {
          return u(null, e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return u(null, e);
        }),
        (l.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (l.compare = function (e, t) {
          if (!l.isBuffer(e) || !l.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var s = e.length, i = t.length, n = 0, r = Math.min(s, i);
            n < r;
            ++n
          )
            if (e[n] !== t[n]) {
              (s = e[n]), (i = t[n]);
              break;
            }
          return s < i ? -1 : i < s ? 1 : 0;
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (e, t) {
          if (!r(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          var s;
          if (void 0 === t)
            for (t = 0, s = 0; s < e.length; ++s) t += e[s].length;
          var i = l.allocUnsafe(t),
            n = 0;
          for (s = 0; s < e.length; ++s) {
            var o = e[s];
            if (!l.isBuffer(o))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            o.copy(i, n), (n += o.length);
          }
          return i;
        }),
        (l.byteLength = p),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? M(this, 0, e)
            : function (e, t, s) {
                var i = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                  return "";
                if (
                  ((void 0 === s || s > this.length) && (s = this.length),
                  s <= 0)
                )
                  return "";
                if ((s >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return S(this, t, s);
                    case "utf8":
                    case "utf-8":
                      return M(this, t, s);
                    case "ascii":
                      return D(this, t, s);
                    case "latin1":
                    case "binary":
                      return C(this, t, s);
                    case "base64":
                      return T(this, t, s);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return I(this, t, s);
                    default:
                      if (i) throw new TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (i = !0);
                  }
              }.apply(this, arguments);
        }),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          var e = "",
            s = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, s).match(/.{2}/g).join(" ")),
              this.length > s && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (l.prototype.compare = function (e, t, s, i, n) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === s && (s = e ? e.length : 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = this.length),
            t < 0 || s > e.length || i < 0 || n > this.length)
          )
            throw new RangeError("out of range index");
          if (i >= n && t >= s) return 0;
          if (i >= n) return -1;
          if (t >= s) return 1;
          if (((t >>>= 0), (s >>>= 0), (i >>>= 0), (n >>>= 0), this === e))
            return 0;
          for (
            var r = n - i,
              o = s - t,
              a = Math.min(r, o),
              h = this.slice(i, n),
              c = e.slice(t, s),
              u = 0;
            u < a;
            ++u
          )
            if (h[u] !== c[u]) {
              (r = h[u]), (o = c[u]);
              break;
            }
          return r < o ? -1 : o < r ? 1 : 0;
        }),
        (l.prototype.includes = function (e, t, s) {
          return -1 !== this.indexOf(e, t, s);
        }),
        (l.prototype.indexOf = function (e, t, s) {
          return f(this, e, t, s, !0);
        }),
        (l.prototype.lastIndexOf = function (e, t, s) {
          return f(this, e, t, s, !1);
        }),
        (l.prototype.write = function (e, t, s, i) {
          if (void 0 === t) (i = "utf8"), (s = this.length), (t = 0);
          else if (void 0 === s && "string" == typeof t)
            (i = t), (s = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(s)
                ? ((s |= 0), void 0 === i && (i = "utf8"))
                : ((i = s), (s = void 0));
          }
          var n = this.length - t;
          if (
            ((void 0 === s || s > n) && (s = n),
            (e.length > 0 && (s < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          i || (i = "utf8");
          for (var r = !1; ; )
            switch (i) {
              case "hex":
                return _(this, e, t, s);
              case "utf8":
              case "utf-8":
                return v(this, e, t, s);
              case "ascii":
                return b(this, e, t, s);
              case "latin1":
              case "binary":
                return y(this, e, t, s);
              case "base64":
                return w(this, e, t, s);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return A(this, e, t, s);
              default:
                if (r) throw new TypeError("Unknown encoding: " + i);
                (i = ("" + i).toLowerCase()), (r = !0);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var R = 4096;
      function D(e, t, s) {
        var i = "";
        s = Math.min(e.length, s);
        for (var n = t; n < s; ++n) i += String.fromCharCode(127 & e[n]);
        return i;
      }
      function C(e, t, s) {
        var i = "";
        s = Math.min(e.length, s);
        for (var n = t; n < s; ++n) i += String.fromCharCode(e[n]);
        return i;
      }
      function S(e, t, s) {
        var i = e.length;
        (!t || t < 0) && (t = 0), (!s || s < 0 || s > i) && (s = i);
        for (var n = "", r = t; r < s; ++r) n += j(e[r]);
        return n;
      }
      function I(e, t, s) {
        for (var i = e.slice(t, s), n = "", r = 0; r < i.length; r += 2)
          n += String.fromCharCode(i[r] + 256 * i[r + 1]);
        return n;
      }
      function U(e, t, s) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > s)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function N(e, t, s, i, n, r) {
        if (!l.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > n || t < r)
          throw new RangeError('"value" argument is out of bounds');
        if (s + i > e.length) throw new RangeError("Index out of range");
      }
      function O(e, t, s, i) {
        t < 0 && (t = 65535 + t + 1);
        for (var n = 0, r = Math.min(e.length - s, 2); n < r; ++n)
          e[s + n] =
            (t & (255 << (8 * (i ? n : 1 - n)))) >>> (8 * (i ? n : 1 - n));
      }
      function L(e, t, s, i) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var n = 0, r = Math.min(e.length - s, 4); n < r; ++n)
          e[s + n] = (t >>> (8 * (i ? n : 3 - n))) & 255;
      }
      function P(e, t, s, i, n, r) {
        if (s + i > e.length) throw new RangeError("Index out of range");
        if (s < 0) throw new RangeError("Index out of range");
      }
      function k(e, t, s, i, r) {
        return r || P(e, 0, s, 4), n.write(e, t, s, i, 23, 4), s + 4;
      }
      function G(e, t, s, i, r) {
        return r || P(e, 0, s, 8), n.write(e, t, s, i, 52, 8), s + 8;
      }
      (l.prototype.slice = function (e, t) {
        var s,
          i = this.length;
        if (
          ((e = ~~e),
          (t = void 0 === t ? i : ~~t),
          e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
          t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
          t < e && (t = e),
          l.TYPED_ARRAY_SUPPORT)
        )
          (s = this.subarray(e, t)).__proto__ = l.prototype;
        else {
          var n = t - e;
          s = new l(n, void 0);
          for (var r = 0; r < n; ++r) s[r] = this[r + e];
        }
        return s;
      }),
        (l.prototype.readUIntLE = function (e, t, s) {
          (e |= 0), (t |= 0), s || U(e, t, this.length);
          for (var i = this[e], n = 1, r = 0; ++r < t && (n *= 256); )
            i += this[e + r] * n;
          return i;
        }),
        (l.prototype.readUIntBE = function (e, t, s) {
          (e |= 0), (t |= 0), s || U(e, t, this.length);
          for (var i = this[e + --t], n = 1; t > 0 && (n *= 256); )
            i += this[e + --t] * n;
          return i;
        }),
        (l.prototype.readUInt8 = function (e, t) {
          return t || U(e, 1, this.length), this[e];
        }),
        (l.prototype.readUInt16LE = function (e, t) {
          return t || U(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (l.prototype.readUInt16BE = function (e, t) {
          return t || U(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (l.prototype.readUInt32LE = function (e, t) {
          return (
            t || U(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (l.prototype.readUInt32BE = function (e, t) {
          return (
            t || U(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (l.prototype.readIntLE = function (e, t, s) {
          (e |= 0), (t |= 0), s || U(e, t, this.length);
          for (var i = this[e], n = 1, r = 0; ++r < t && (n *= 256); )
            i += this[e + r] * n;
          return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)), i;
        }),
        (l.prototype.readIntBE = function (e, t, s) {
          (e |= 0), (t |= 0), s || U(e, t, this.length);
          for (var i = t, n = 1, r = this[e + --i]; i > 0 && (n *= 256); )
            r += this[e + --i] * n;
          return r >= (n *= 128) && (r -= Math.pow(2, 8 * t)), r;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return (
            t || U(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (l.prototype.readInt16LE = function (e, t) {
          t || U(e, 2, this.length);
          var s = this[e] | (this[e + 1] << 8);
          return 32768 & s ? 4294901760 | s : s;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          t || U(e, 2, this.length);
          var s = this[e + 1] | (this[e] << 8);
          return 32768 & s ? 4294901760 | s : s;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            t || U(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            t || U(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readFloatLE = function (e, t) {
          return t || U(e, 4, this.length), n.read(this, e, !0, 23, 4);
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return t || U(e, 4, this.length), n.read(this, e, !1, 23, 4);
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return t || U(e, 8, this.length), n.read(this, e, !0, 52, 8);
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return t || U(e, 8, this.length), n.read(this, e, !1, 52, 8);
        }),
        (l.prototype.writeUIntLE = function (e, t, s, i) {
          ((e = +e), (t |= 0), (s |= 0), i) ||
            N(this, e, t, s, Math.pow(2, 8 * s) - 1, 0);
          var n = 1,
            r = 0;
          for (this[t] = 255 & e; ++r < s && (n *= 256); )
            this[t + r] = (e / n) & 255;
          return t + s;
        }),
        (l.prototype.writeUIntBE = function (e, t, s, i) {
          ((e = +e), (t |= 0), (s |= 0), i) ||
            N(this, e, t, s, Math.pow(2, 8 * s) - 1, 0);
          var n = s - 1,
            r = 1;
          for (this[t + n] = 255 & e; --n >= 0 && (r *= 256); )
            this[t + n] = (e / r) & 255;
          return t + s;
        }),
        (l.prototype.writeUInt8 = function (e, t, s) {
          return (
            (e = +e),
            (t |= 0),
            s || N(this, e, t, 1, 255, 0),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeUInt16LE = function (e, t, s) {
          return (
            (e = +e),
            (t |= 0),
            s || N(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : O(this, e, t, !0),
            t + 2
          );
        }),
        (l.prototype.writeUInt16BE = function (e, t, s) {
          return (
            (e = +e),
            (t |= 0),
            s || N(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : O(this, e, t, !1),
            t + 2
          );
        }),
        (l.prototype.writeUInt32LE = function (e, t, s) {
          return (
            (e = +e),
            (t |= 0),
            s || N(this, e, t, 4, 4294967295, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : L(this, e, t, !0),
            t + 4
          );
        }),
        (l.prototype.writeUInt32BE = function (e, t, s) {
          return (
            (e = +e),
            (t |= 0),
            s || N(this, e, t, 4, 4294967295, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : L(this, e, t, !1),
            t + 4
          );
        }),
        (l.prototype.writeIntLE = function (e, t, s, i) {
          if (((e = +e), (t |= 0), !i)) {
            var n = Math.pow(2, 8 * s - 1);
            N(this, e, t, s, n - 1, -n);
          }
          var r = 0,
            o = 1,
            a = 0;
          for (this[t] = 255 & e; ++r < s && (o *= 256); )
            e < 0 && 0 === a && 0 !== this[t + r - 1] && (a = 1),
              (this[t + r] = (((e / o) >> 0) - a) & 255);
          return t + s;
        }),
        (l.prototype.writeIntBE = function (e, t, s, i) {
          if (((e = +e), (t |= 0), !i)) {
            var n = Math.pow(2, 8 * s - 1);
            N(this, e, t, s, n - 1, -n);
          }
          var r = s - 1,
            o = 1,
            a = 0;
          for (this[t + r] = 255 & e; --r >= 0 && (o *= 256); )
            e < 0 && 0 === a && 0 !== this[t + r + 1] && (a = 1),
              (this[t + r] = (((e / o) >> 0) - a) & 255);
          return t + s;
        }),
        (l.prototype.writeInt8 = function (e, t, s) {
          return (
            (e = +e),
            (t |= 0),
            s || N(this, e, t, 1, 127, -128),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, s) {
          return (
            (e = +e),
            (t |= 0),
            s || N(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : O(this, e, t, !0),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, s) {
          return (
            (e = +e),
            (t |= 0),
            s || N(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : O(this, e, t, !1),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, s) {
          return (
            (e = +e),
            (t |= 0),
            s || N(this, e, t, 4, 2147483647, -2147483648),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : L(this, e, t, !0),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, s) {
          return (
            (e = +e),
            (t |= 0),
            s || N(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : L(this, e, t, !1),
            t + 4
          );
        }),
        (l.prototype.writeFloatLE = function (e, t, s) {
          return k(this, e, t, !0, s);
        }),
        (l.prototype.writeFloatBE = function (e, t, s) {
          return k(this, e, t, !1, s);
        }),
        (l.prototype.writeDoubleLE = function (e, t, s) {
          return G(this, e, t, !0, s);
        }),
        (l.prototype.writeDoubleBE = function (e, t, s) {
          return G(this, e, t, !1, s);
        }),
        (l.prototype.copy = function (e, t, s, i) {
          if (
            (s || (s = 0),
            i || 0 === i || (i = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            i > 0 && i < s && (i = s),
            i === s)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (s < 0 || s >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (i < 0) throw new RangeError("sourceEnd out of bounds");
          i > this.length && (i = this.length),
            e.length - t < i - s && (i = e.length - t + s);
          var n,
            r = i - s;
          if (this === e && s < t && t < i)
            for (n = r - 1; n >= 0; --n) e[n + t] = this[n + s];
          else if (r < 1e3 || !l.TYPED_ARRAY_SUPPORT)
            for (n = 0; n < r; ++n) e[n + t] = this[n + s];
          else Uint8Array.prototype.set.call(e, this.subarray(s, s + r), t);
          return r;
        }),
        (l.prototype.fill = function (e, t, s, i) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((i = t), (t = 0), (s = this.length))
                : "string" == typeof s && ((i = s), (s = this.length)),
              1 === e.length)
            ) {
              var n = e.charCodeAt(0);
              n < 256 && (e = n);
            }
            if (void 0 !== i && "string" != typeof i)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof i && !l.isEncoding(i))
              throw new TypeError("Unknown encoding: " + i);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < s)
            throw new RangeError("Out of range index");
          if (s <= t) return this;
          var r;
          if (
            ((t >>>= 0),
            (s = void 0 === s ? this.length : s >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (r = t; r < s; ++r) this[r] = e;
          else {
            var o = l.isBuffer(e) ? e : B(new l(e, i).toString()),
              a = o.length;
            for (r = 0; r < s - t; ++r) this[r + t] = o[r % a];
          }
          return this;
        });
      var x = /[^+\/0-9A-Za-z-_]/g;
      function j(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function B(e, t) {
        var s;
        t = t || 1 / 0;
        for (var i = e.length, n = null, r = [], o = 0; o < i; ++o) {
          if ((s = e.charCodeAt(o)) > 55295 && s < 57344) {
            if (!n) {
              if (s > 56319) {
                (t -= 3) > -1 && r.push(239, 191, 189);
                continue;
              }
              if (o + 1 === i) {
                (t -= 3) > -1 && r.push(239, 191, 189);
                continue;
              }
              n = s;
              continue;
            }
            if (s < 56320) {
              (t -= 3) > -1 && r.push(239, 191, 189), (n = s);
              continue;
            }
            s = 65536 + (((n - 55296) << 10) | (s - 56320));
          } else n && (t -= 3) > -1 && r.push(239, 191, 189);
          if (((n = null), s < 128)) {
            if ((t -= 1) < 0) break;
            r.push(s);
          } else if (s < 2048) {
            if ((t -= 2) < 0) break;
            r.push((s >> 6) | 192, (63 & s) | 128);
          } else if (s < 65536) {
            if ((t -= 3) < 0) break;
            r.push((s >> 12) | 224, ((s >> 6) & 63) | 128, (63 & s) | 128);
          } else {
            if (!(s < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            r.push(
              (s >> 18) | 240,
              ((s >> 12) & 63) | 128,
              ((s >> 6) & 63) | 128,
              (63 & s) | 128
            );
          }
        }
        return r;
      }
      function $(e) {
        return i.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(x, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function q(e, t, s, i) {
        for (var n = 0; n < i && !(n + s >= t.length || n >= e.length); ++n)
          t[n + s] = e[n];
        return n;
      }
    }.call(t, s(35)));
  },
  function (e, t, s) {
    const i = s(21),
      n = s(27);
    let r;
    function o(e) {
      return "string" == typeof e
        ? e
        : e instanceof Array
        ? e.join("\n")
        : String(e);
    }
    e.exports = class RichEmbed {
      constructor(e = {}) {
        (this.title = e.title),
          (this.description = e.description),
          (this.url = e.url),
          (this.color = e.color),
          (this.author = e.author),
          (this.timestamp = e.timestamp),
          (this.fields = e.fields || []),
          (this.thumbnail = e.thumbnail),
          (this.image = e.image),
          (this.footer = e.footer),
          (this.file = e.file),
          (this.files = []);
      }
      setTitle(e) {
        if ((e = o(e)).length > 256)
          throw new RangeError(
            "RichEmbed titles may not exceed 256 characters."
          );
        return (this.title = e), this;
      }
      setDescription(e) {
        if ((e = o(e)).length > 2048)
          throw new RangeError(
            "RichEmbed descriptions may not exceed 2048 characters."
          );
        return (this.description = e), this;
      }
      setURL(e) {
        return (this.url = e), this;
      }
      setColor(e) {
        return r || (r = s(28)), (this.color = r.resolveColor(e)), this;
      }
      setAuthor(e, t, s) {
        return (this.author = { name: o(e), icon_url: t, url: s }), this;
      }
      setTimestamp(e = new Date()) {
        return (this.timestamp = e), this;
      }
      addField(e, t, s = !1) {
        if (this.fields.length >= 25)
          throw new RangeError("RichEmbeds may not exceed 25 fields.");
        if ((e = o(e)).length > 256)
          throw new RangeError(
            "RichEmbed field names may not exceed 256 characters."
          );
        if (!/\S/.test(e))
          throw new RangeError("RichEmbed field names may not be empty.");
        if ((t = o(t)).length > 1024)
          throw new RangeError(
            "RichEmbed field values may not exceed 1024 characters."
          );
        if (!/\S/.test(t))
          throw new RangeError("RichEmbed field values may not be empty.");
        return this.fields.push({ name: e, value: t, inline: s }), this;
      }
      addBlankField(e = !1) {
        return this.addField("â€‹", "â€‹", e);
      }
      setThumbnail(e) {
        return (this.thumbnail = { url: e }), this;
      }
      setImage(e) {
        return (this.image = { url: e }), this;
      }
      setFooter(e, t) {
        if ((e = o(e)).length > 2048)
          throw new RangeError(
            "RichEmbed footer text may not exceed 2048 characters."
          );
        return (this.footer = { text: e, icon_url: t }), this;
      }
      attachFile(e) {
        if (this.file)
          throw new RangeError(
            "You may not upload more than one file at once."
          );
        return e instanceof i && (e = e.file), (this.file = e), this;
      }
      attachFiles(e) {
        return (
          (e = e.map((e) => (e instanceof i ? e.file : e))),
          (this.files = this.files.concat(e)),
          this
        );
      }
      _apiTransform() {
        return {
          title: this.title,
          type: "rich",
          description: this.description,
          url: this.url,
          timestamp: this.timestamp ? new Date(this.timestamp) : null,
          color: this.color,
          fields: this.fields
            ? this.fields.map((e) => ({
                name: e.name,
                value: e.value,
                inline: e.inline,
              }))
            : null,
          thumbnail: this.thumbnail ? { url: this.thumbnail.url } : null,
          image: this.image ? { url: this.image.url } : null,
          author: this.author
            ? {
                name: this.author.name,
                url: this.author.url,
                icon_url:
                  this.author instanceof n.Author
                    ? this.author.iconURL
                    : this.author.icon_url,
              }
            : null,
          footer: this.footer
            ? {
                text: this.footer.text,
                icon_url:
                  this.footer instanceof n.Footer
                    ? this.footer.iconURL
                    : this.footer.icon_url,
              }
            : null,
        };
      }
    };
  },
  function (e, t, s) {
    (function (e) {
      const i = s(29),
        n = s(16),
        r = s(44),
        o = s(3),
        a = s(21),
        l = s(14),
        h = s(7),
        c = s(6);
      class TextBasedChannel {
        constructor() {
          (this.messages = new o()),
            (this.lastMessageID = null),
            (this.lastMessage = null);
        }
        send(t, s) {
          s || "object" != typeof t || t instanceof Array
            ? s || (s = {})
            : ((s = t), (t = ""));
          const { reply: n } = s;
          if (
            (s instanceof a && (s = { files: [s.file] }),
            s instanceof l &&
              (s.reply && (s.reply = void 0), (s = { embed: s })),
            (s.reply = n),
            s.embed &&
              (s.embed.file &&
                (s.files
                  ? s.files.push(s.embed.file)
                  : (s.files = [s.embed.file])),
              s.embed.files &&
                (s.files
                  ? (s.files = s.files.concat(s.embed.files))
                  : (s.files = s.embed.files))),
            s.file && (s.files ? s.files.push(s.file) : (s.files = [s.file])),
            s.embed && (s.embed = new l(s.embed)._apiTransform()),
            s.files)
          ) {
            for (let t = 0; t < s.files.length; t++) {
              let n = s.files[t];
              (n && "string" != typeof n && !e.isBuffer(n)) ||
                (n = { attachment: n }),
                n.name
                  ? n instanceof a && (n = n.file)
                  : "string" == typeof n.attachment
                  ? (n.name = i.basename(n.attachment))
                  : n.attachment && n.attachment.path
                  ? (n.name = i.basename(n.attachment.path))
                  : n instanceof a
                  ? (n = {
                      attachment: n.file,
                      name: i.basename(n.file) || "file.jpg",
                    })
                  : (n.name = "file.jpg"),
                (s.files[t] = n);
            }
            return Promise.all(
              s.files.map((e) =>
                this.client.resolver
                  .resolveFile(e.attachment)
                  .then((t) => ((e.file = t), e))
              )
            ).then((e) => this.client.rest.methods.sendMessage(this, t, s, e));
          }
          return this.client.rest.methods.sendMessage(this, t, s);
        }
        fetchMessage(e) {
          return this.client.user.bot
            ? this.client.rest.methods.getChannelMessage(this, e).then((e) => {
                const t = e instanceof n ? e : new n(this, e, this.client);
                return this._cacheMessage(t), t;
              })
            : this.fetchMessages({ limit: 1, around: e }).then((t) => {
                const s = t.get(e);
                if (!s) throw new Error("Message not found.");
                return s;
              });
        }
        fetchMessages(e = {}) {
          return this.client.rest.methods
            .getChannelMessages(this, e)
            .then((e) => {
              const t = new o();
              for (const s of e) {
                const e = new n(this, s, this.client);
                t.set(s.id, e), this._cacheMessage(e);
              }
              return t;
            });
        }
        fetchPinnedMessages() {
          return this.client.rest.methods
            .getChannelPinnedMessages(this)
            .then((e) => {
              const t = new o();
              for (const s of e) {
                const e = new n(this, s, this.client);
                t.set(s.id, e), this._cacheMessage(e);
              }
              return t;
            });
        }
        search(e = {}) {
          return this.client.rest.methods.search(this, e);
        }
        startTyping(e) {
          if (void 0 !== e && e < 1)
            throw new RangeError("Count must be at least 1.");
          if (this.client.user._typing.has(this.id)) {
            const t = this.client.user._typing.get(this.id);
            return void (t.count = e || t.count + 1);
          }
          const t = {
            count: e || 1,
            interval: this.client.setInterval(() => {
              this.client.rest.methods.sendTyping(this.id).catch(() => {
                this.client.clearInterval(t.interval),
                  this.client.user._typing.delete(this.id);
              });
            }, 9e3),
          };
          this.client.rest.methods.sendTyping(this.id).catch(() => {
            this.client.clearInterval(t.interval),
              this.client.user._typing.delete(this.id);
          }),
            this.client.user._typing.set(this.id, t);
        }
        stopTyping(e = !1) {
          if (this.client.user._typing.has(this.id)) {
            const t = this.client.user._typing.get(this.id);
            t.count--,
              (t.count <= 0 || e) &&
                (this.client.clearInterval(t.interval),
                this.client.user._typing.delete(this.id));
          }
        }
        get typing() {
          return this.client.user._typing.has(this.id);
        }
        get typingCount() {
          return this.client.user._typing.has(this.id)
            ? this.client.user._typing.get(this.id).count
            : 0;
        }
        createCollector(e, t) {
          return this.createMessageCollector(e, t);
        }
        createMessageCollector(e, t = {}) {
          return new r(this, e, t);
        }
        awaitMessages(e, t = {}) {
          return new Promise((s, i) => {
            this.createCollector(e, t).once("end", (e, n) => {
              t.errors && t.errors.includes(n) ? i(e) : s(e);
            });
          });
        }
        bulkDelete(e, t = !1) {
          if (e instanceof Array || e instanceof o) {
            let s = e instanceof o ? e.keyArray() : e.map((e) => e.id || e);
            return (
              t &&
                (s = s.filter(
                  (e) => Date.now() - h.deconstruct(e).date.getTime() < 12096e5
                )),
              0 === s.length
                ? Promise.resolve(new o())
                : 1 === s.length
                ? this.fetchMessage(s[0])
                    .then((e) => e.delete())
                    .then((e) => new o([[e.id, e]]))
                : this.client.rest.methods.bulkDeleteMessages(this, s)
            );
          }
          if (!isNaN(e))
            return this.fetchMessages({ limit: e }).then((e) =>
              this.bulkDelete(e, t)
            );
          throw new TypeError(
            "The messages must be an Array, Collection, or number."
          );
        }
        acknowledge() {
          return this.lastMessageID
            ? this.client.rest.methods.ackTextChannel(this)
            : Promise.resolve(this);
        }
        _cacheMessage(e) {
          const t = this.client.options.messageCacheMaxSize;
          return 0 === t
            ? null
            : (this.messages.size >= t &&
                t > 0 &&
                this.messages.delete(this.messages.firstKey()),
              this.messages.set(e.id, e),
              e);
        }
      }
      const u = {
        sendMessage(e, t) {
          return this.send(e, t);
        },
        sendEmbed(e, t, s) {
          return (
            s || "object" != typeof t || t instanceof Array
              ? s || (s = {})
              : ((s = t), (t = "")),
            this.send(t, Object.assign(s, { embed: e }))
          );
        },
        sendFiles(e, t, s = {}) {
          return this.send(t, Object.assign(s, { files: e }));
        },
        sendFile(e, t, s, i = {}) {
          return this.send({
            files: [{ attachment: e, name: t }],
            content: s,
            options: i,
          });
        },
        sendCode(e, t, s = {}) {
          return this.send(t, Object.assign(s, { code: e }));
        },
      };
      for (const e of Object.keys(u))
        TextBasedChannel.prototype[e] = c.deprecate(
          u[e],
          `TextChannel#${e}: use TextChannel#send instead`
        );
      (t.applyToClass = (e, t = !1, s = []) => {
        const i = [
          "send",
          "sendMessage",
          "sendEmbed",
          "sendFile",
          "sendFiles",
          "sendCode",
        ];
        t &&
          i.push(
            "_cacheMessage",
            "acknowledge",
            "fetchMessages",
            "fetchMessage",
            "search",
            "bulkDelete",
            "startTyping",
            "stopTyping",
            "typing",
            "typingCount",
            "fetchPinnedMessages",
            "createCollector",
            "createMessageCollector",
            "awaitMessages"
          );
        for (const t of i)
          s.includes(t) ||
            Object.defineProperty(
              e.prototype,
              t,
              Object.getOwnPropertyDescriptor(TextBasedChannel.prototype, t)
            );
      }),
        (TextBasedChannel.prototype.acknowledge = c.deprecate(
          TextBasedChannel.prototype.acknowledge,
          "TextBasedChannel#acknowledge: userbot methods will be removed"
        )),
        (TextBasedChannel.prototype.search = c.deprecate(
          TextBasedChannel.prototype.search,
          "TextBasedChannel#search: userbot methods will be removed"
        ));
    }.call(t, s(13).Buffer));
  },
  function (e, t, s) {
    const i = s(40),
      n = s(41),
      r = s(27),
      o = s(14),
      a = s(42),
      l = s(43),
      h = s(4),
      c = s(3),
      u = s(0),
      d = s(5);
    let m;
    e.exports = class Message {
      constructor(e, t, s) {
        Object.defineProperty(this, "client", { value: s }),
          (this.channel = e),
          (this.deleted = !1),
          t && this.setup(t);
      }
      setup(e) {
        (this.id = e.id),
          (this.type = u.MessageTypes[e.type]),
          (this.content = e.content),
          (this.author = this.client.dataManager.newUser(
            e.author,
            !e.webhook_id
          )),
          (this.member =
            (this.guild && this.guild.member(this.author)) || null),
          (this.pinned = e.pinned),
          (this.tts = e.tts),
          (this.nonce = e.nonce),
          (this.system = 6 === e.type),
          (this.embeds = e.embeds.map((e) => new r(this, e))),
          (this.attachments = new c());
        for (const t of e.attachments)
          this.attachments.set(t.id, new n(this, t));
        if (
          ((this.createdTimestamp = new Date(e.timestamp).getTime()),
          (this.editedTimestamp = e.edited_timestamp
            ? new Date(e.edited_timestamp).getTime()
            : null),
          (this.reactions = new c()),
          e.reactions && e.reactions.length > 0)
        )
          for (const t of e.reactions) {
            const e = t.emoji.id
              ? `${t.emoji.name}:${t.emoji.id}`
              : t.emoji.name;
            this.reactions.set(e, new a(this, t.emoji, t.count, t.me));
          }
        (this.mentions = new i(
          this,
          e.mentions,
          e.mention_roles,
          e.mention_everyone
        )),
          (this.webhookID = e.webhook_id || null),
          (this.hit = "boolean" == typeof e.hit ? e.hit : null),
          (this._edits = []);
      }
      patch(e) {
        const t = h.cloneObject(this);
        if (
          (this._edits.unshift(t),
          "editedTimestamp" in e &&
            (this.editedTimestamp = new Date(e.edited_timestamp).getTime()),
          "content" in e && (this.content = e.content),
          "pinned" in e && (this.pinned = e.pinned),
          "tts" in e && (this.tts = e.tts),
          (this.embeds =
            "embeds" in e
              ? e.embeds.map((e) => new r(this, e))
              : this.embeds.slice()),
          "attachments" in e)
        ) {
          this.attachments = new c();
          for (const t of e.attachments)
            this.attachments.set(t.id, new n(this, t));
        } else this.attachments = new c(this.attachments);
        this.mentions = new i(
          this,
          "mentions" in e ? e.mentions : this.mentions.users,
          "mentions_roles" in e ? e.mentions_roles : this.mentions.roles,
          "mention_everyone" in e ? e.mention_everyone : this.mentions.everyone
        );
      }
      get createdAt() {
        return new Date(this.createdTimestamp);
      }
      get editedAt() {
        return this.editedTimestamp ? new Date(this.editedTimestamp) : null;
      }
      get guild() {
        return this.channel.guild || null;
      }
      get url() {
        return `https://discordapp.com/channels/${
          this.guild ? this.guild.id : "@me"
        }/${this.channel.id}/${this.id}`;
      }
      get cleanContent() {
        return this.content
          .replace(/@(everyone|here)/g, "@â€‹$1")
          .replace(/<@!?[0-9]+>/g, (e) => {
            const t = e.replace(/<|!|>|@/g, "");
            if ("dm" === this.channel.type || "group" === this.channel.type)
              return this.client.users.has(t)
                ? `@${this.client.users.get(t).username}`
                : e;
            const s = this.channel.guild.members.get(t);
            if (s) return s.nickname ? `@${s.nickname}` : `@${s.user.username}`;
            {
              const s = this.client.users.get(t);
              return s ? `@${s.username}` : e;
            }
          })
          .replace(/<#[0-9]+>/g, (e) => {
            const t = this.client.channels.get(e.replace(/<|#|>/g, ""));
            return t ? `#${t.name}` : e;
          })
          .replace(/<@&[0-9]+>/g, (e) => {
            if ("dm" === this.channel.type || "group" === this.channel.type)
              return e;
            const t = this.guild.roles.get(e.replace(/<|@|>|&/g, ""));
            return t ? `@${t.name}` : e;
          });
      }
      createReactionCollector(e, t = {}) {
        return new l(this, e, t);
      }
      awaitReactions(e, t = {}) {
        return new Promise((s, i) => {
          this.createReactionCollector(e, t).once("end", (e, n) => {
            t.errors && t.errors.includes(n) ? i(e) : s(e);
          });
        });
      }
      get edits() {
        const e = this._edits.slice();
        return e.unshift(this), e;
      }
      get editable() {
        return this.author.id === this.client.user.id;
      }
      get deletable() {
        return (
          !this.deleted &&
          (this.author.id === this.client.user.id ||
            (this.guild &&
              this.channel
                .permissionsFor(this.client.user)
                .has(d.FLAGS.MANAGE_MESSAGES)))
        );
      }
      get pinnable() {
        return (
          !this.guild ||
          this.channel
            .permissionsFor(this.client.user)
            .has(d.FLAGS.MANAGE_MESSAGES)
        );
      }
      isMentioned(e) {
        return (
          (e = e && e.id ? e.id : e),
          this.mentions.users.has(e) ||
            this.mentions.channels.has(e) ||
            this.mentions.roles.has(e)
        );
      }
      isMemberMentioned(e) {
        return (
          m || (m = s(18)),
          !!this.mentions.everyone ||
            !!this.mentions.users.has(e.id) ||
            !!(
              e instanceof m &&
              e.roles.some((e) => this.mentions.roles.has(e.id))
            )
        );
      }
      edit(e, t) {
        return (
          t || "object" != typeof e || e instanceof Array
            ? t || (t = {})
            : ((t = e), (e = "")),
          t instanceof o && (t = { embed: t }),
          this.client.rest.methods.updateMessage(this, e, t)
        );
      }
      editCode(e, t) {
        return (
          (t = h.escapeMarkdown(this.client.resolver.resolveString(t), !0)),
          this.edit(`\`\`\`${e || ""}\n${t}\n\`\`\``)
        );
      }
      pin() {
        return this.client.rest.methods.pinMessage(this);
      }
      unpin() {
        return this.client.rest.methods.unpinMessage(this);
      }
      react(e) {
        if (!(e = this.client.resolver.resolveEmojiIdentifier(e)))
          throw new TypeError("Emoji must be a string or Emoji/ReactionEmoji");
        return this.client.rest.methods.addMessageReaction(this, e);
      }
      clearReactions() {
        return this.client.rest.methods.removeMessageReactions(this);
      }
      delete(e = 0) {
        return e <= 0
          ? this.client.rest.methods.deleteMessage(this)
          : new Promise((t) => {
              this.client.setTimeout(() => {
                t(this.delete());
              }, e);
            });
      }
      reply(e, t) {
        return (
          t || "object" != typeof e || e instanceof Array
            ? t || (t = {})
            : ((t = e), (e = "")),
          this.channel.send(
            e,
            Object.assign(t, { reply: this.member || this.author })
          )
        );
      }
      acknowledge() {
        return this.client.rest.methods.ackMessage(this);
      }
      fetchWebhook() {
        return this.webhookID
          ? this.client.fetchWebhook(this.webhookID)
          : Promise.reject(new Error("The message was not sent by a webhook."));
      }
      equals(e, t) {
        if (!e) return !1;
        if (!e.author && !e.attachments)
          return this.id === e.id && this.embeds.length === e.embeds.length;
        let s =
          this.id === e.id &&
          this.author.id === e.author.id &&
          this.content === e.content &&
          this.tts === e.tts &&
          this.nonce === e.nonce &&
          this.embeds.length === e.embeds.length &&
          this.attachments.length === e.attachments.length;
        return (
          s &&
            t &&
            (s =
              this.mentions.everyone === e.mentions.everyone &&
              this.createdTimestamp === new Date(t.timestamp).getTime() &&
              this.editedTimestamp === new Date(t.edited_timestamp).getTime()),
          s
        );
      }
      toString() {
        return this.content;
      }
      _addReaction(e, t) {
        const s = e.id ? `${e.name}:${e.id}` : e.name;
        let i;
        return (
          this.reactions.has(s)
            ? (i = this.reactions.get(s)).me ||
              (i.me = t.id === this.client.user.id)
            : ((i = new a(this, e, 0, t.id === this.client.user.id)),
              this.reactions.set(s, i)),
          i.users.has(t.id) || (i.users.set(t.id, t), i.count++),
          i
        );
      }
      _removeReaction(e, t) {
        const s = e.id ? `${e.name}:${e.id}` : e.name;
        if (this.reactions.has(s)) {
          const e = this.reactions.get(s);
          if (e.users.has(t.id))
            return (
              e.users.delete(t.id),
              e.count--,
              t.id === this.client.user.id && (e.me = !1),
              e.count <= 0 && this.reactions.delete(s),
              e
            );
        }
        return null;
      }
      _clearReactions() {
        this.reactions.clear();
      }
    };
  },
  function (e, t, s) {
    const i = s(0),
      n = s(3),
      r = s(5),
      o = s(7);
    class Emoji {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e.client }),
          (this.guild = e),
          (this.deleted = !1),
          this.setup(t);
      }
      setup(e) {
        (this.id = e.id),
          (this.name = e.name),
          (this.requiresColons = e.require_colons),
          (this.managed = e.managed),
          (this.animated = e.animated),
          (this._roles = e.roles);
      }
      get createdTimestamp() {
        return o.deconstruct(this.id).timestamp;
      }
      get createdAt() {
        return new Date(this.createdTimestamp);
      }
      get deletable() {
        return (
          !this.managed && this.guild.me.hasPermission(r.FLAGS.MANAGE_EMOJIS)
        );
      }
      get roles() {
        const e = new n();
        for (const t of this._roles)
          this.guild.roles.has(t) && e.set(t, this.guild.roles.get(t));
        return e;
      }
      get url() {
        return i.Endpoints.CDN(this.client.options.http.cdn).Emoji(
          this.id,
          this.animated ? "gif" : "png"
        );
      }
      get identifier() {
        return this.id
          ? `${this.name}:${this.id}`
          : encodeURIComponent(this.name);
      }
      edit(e, t) {
        return this.client.rest.methods.updateEmoji(this, e, t);
      }
      setName(e, t) {
        return this.edit({ name: e }, t);
      }
      fetchAuthor() {
        return this.managed
          ? Promise.reject(new Error("Emoji is managed and has no Author."))
          : this.client.rest
              .makeRequest(
                "get",
                i.Endpoints.Guild(this.guild).Emoji(this.id),
                !0
              )
              .then((e) => this.client.dataManager.newUser(e.user));
      }
      addRestrictedRole(e) {
        return this.addRestrictedRoles([e]);
      }
      addRestrictedRoles(e) {
        const t = new n(this.roles);
        for (const s of e) this.guild.roles.has(s.id) && t.set(s.id, s);
        return this.edit({ roles: t });
      }
      removeRestrictedRole(e) {
        return this.removeRestrictedRoles([e]);
      }
      removeRestrictedRoles(e) {
        const t = new n(this.roles);
        for (const s of e) t.has(s.id) && t.delete(s.id);
        return this.edit({ roles: t });
      }
      toString() {
        return this.id && this.requiresColons
          ? `<${this.animated ? "a" : ""}:${this.name}:${this.id}>`
          : this.name;
      }
      equals(e) {
        return e instanceof Emoji
          ? e.id === this.id &&
              e.name === this.name &&
              e.managed === this.managed &&
              e.requiresColons === this.requiresColons
          : e.id === this.id && e.name === this.name;
      }
    }
    e.exports = Emoji;
  },
  function (e, t, s) {
    const i = s(15),
      n = s(8),
      r = s(5),
      o = s(3),
      { Presence: a } = s(11),
      l = s(6);
    class GuildMember {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e.client }),
          (this.guild = e),
          (this.user = {}),
          (this.joinedTimestamp = null),
          (this._roles = []),
          t && this.setup(t),
          (this.lastMessageID = null),
          (this.lastMessage = null),
          (this.deleted = !1);
      }
      setup(e) {
        (this.serverDeaf = e.deaf),
          (this.serverMute = e.mute),
          (this.selfMute = e.self_mute),
          (this.selfDeaf = e.self_deaf),
          (this.voiceSessionID = e.session_id),
          (this.voiceChannelID = e.channel_id),
          (this.speaking = !1),
          (this.nickname = e.nick || null),
          e.joined_at &&
            (this.joinedTimestamp = new Date(e.joined_at).getTime()),
          (this.user = e.user),
          (this._roles = e.roles);
      }
      get joinedAt() {
        return this.joinedTimestamp ? new Date(this.joinedTimestamp) : null;
      }
      get presence() {
        return (
          this.frozenPresence ||
          this.guild.presences.get(this.id) ||
          new a(void 0, this.client)
        );
      }
      get roles() {
        const e = new o(),
          t = this.guild.roles.get(this.guild.id);
        t && e.set(t.id, t);
        for (const t of this._roles) {
          const s = this.guild.roles.get(t);
          s && e.set(s.id, s);
        }
        return e;
      }
      get highestRole() {
        return this.roles.reduce((e, t) =>
          !e || t.comparePositionTo(e) > 0 ? t : e
        );
      }
      get colorRole() {
        const e = this.roles.filter((e) => e.color);
        return e.size
          ? e.reduce((e, t) => (!e || t.comparePositionTo(e) > 0 ? t : e))
          : null;
      }
      get displayColor() {
        const e = this.colorRole;
        return (e && e.color) || 0;
      }
      get displayHexColor() {
        const e = this.colorRole;
        return (e && e.hexColor) || "#000000";
      }
      get hoistRole() {
        const e = this.roles.filter((e) => e.hoist);
        return e.size
          ? e.reduce((e, t) => (!e || t.comparePositionTo(e) > 0 ? t : e))
          : null;
      }
      get mute() {
        return this.selfMute || this.serverMute;
      }
      get deaf() {
        return this.selfDeaf || this.serverDeaf;
      }
      get voiceChannel() {
        return this.guild.channels.get(this.voiceChannelID);
      }
      get id() {
        return this.user.id;
      }
      get displayName() {
        return this.nickname || this.user.username;
      }
      get permissions() {
        if (this.user.id === this.guild.ownerID) return new r(this, r.ALL);
        let e = 0;
        const t = this.roles;
        for (const s of t.values()) e |= s.permissions;
        return new r(this, e);
      }
      get manageable() {
        return (
          this.user.id !== this.guild.ownerID &&
          this.user.id !== this.client.user.id &&
          this.guild.me.highestRole.comparePositionTo(this.highestRole) > 0
        );
      }
      get kickable() {
        return (
          this.manageable && this.guild.me.permissions.has(r.FLAGS.KICK_MEMBERS)
        );
      }
      get bannable() {
        return (
          this.manageable && this.guild.me.permissions.has(r.FLAGS.BAN_MEMBERS)
        );
      }
      permissionsIn(e) {
        if (!(e = this.client.resolver.resolveChannel(e)) || !e.guild)
          throw new Error("Could not resolve channel to a guild channel.");
        return e.permissionsFor(this);
      }
      hasPermission(e, t = !1, s, i) {
        return (
          void 0 === s && (s = !t),
          void 0 === i && (i = !t),
          !(!i || this.user.id !== this.guild.ownerID) ||
            this.roles.some((t) => t.hasPermission(e, void 0, s))
        );
      }
      hasPermissions(e, t = !1) {
        return (
          (!t && this.user.id === this.guild.ownerID) ||
          this.hasPermission(e, t)
        );
      }
      missingPermissions(e, t = !1) {
        return e instanceof Array || (e = [e]), this.permissions.missing(e, t);
      }
      edit(e, t) {
        return this.client.rest.methods.updateGuildMember(this, e, t);
      }
      setMute(e, t) {
        return this.edit({ mute: e }, t);
      }
      setDeaf(e, t) {
        return this.edit({ deaf: e }, t);
      }
      setVoiceChannel(e) {
        return this.edit({ channel: e });
      }
      setRoles(e, t) {
        return this.edit({ roles: e }, t);
      }
      addRole(e, t) {
        return (
          e instanceof n || (e = this.guild.roles.get(e)),
          e
            ? this.client.rest.methods.addMemberRole(this, e, t)
            : Promise.reject(
                new TypeError(
                  "Supplied parameter was neither a Role nor a Snowflake."
                )
              )
        );
      }
      addRoles(e, t) {
        let s;
        if (e instanceof o) {
          s = this._roles.slice();
          for (const t of e.values()) s.push(t.id);
        } else s = this._roles.concat(e);
        return this.edit({ roles: s }, t);
      }
      removeRole(e, t) {
        return (
          e instanceof n || (e = this.guild.roles.get(e)),
          e
            ? this.client.rest.methods.removeMemberRole(this, e, t)
            : Promise.reject(
                new TypeError(
                  "Supplied parameter was neither a Role nor a Snowflake."
                )
              )
        );
      }
      removeRoles(e, t) {
        const s = this._roles.slice();
        if (e instanceof o)
          for (const t of e.values()) {
            const e = s.indexOf(t.id);
            e >= 0 && s.splice(e, 1);
          }
        else
          for (const t of e) {
            const e = s.indexOf(t instanceof n ? t.id : t);
            e >= 0 && s.splice(e, 1);
          }
        return this.edit({ roles: s }, t);
      }
      setNickname(e, t) {
        return this.edit({ nick: e }, t);
      }
      createDM() {
        return this.user.createDM();
      }
      deleteDM() {
        return this.user.deleteDM();
      }
      kick(e) {
        return this.client.rest.methods.kickGuildMember(this.guild, this, e);
      }
      ban(e) {
        return this.guild.ban(this, e);
      }
      toString() {
        return `<@${this.nickname ? "!" : ""}${this.user.id}>`;
      }
      send() {}
      sendMessage() {}
      sendEmbed() {}
      sendFile() {}
      sendCode() {}
    }
    i.applyToClass(GuildMember),
      (GuildMember.prototype.hasPermissions = l.deprecate(
        GuildMember.prototype.hasPermissions,
        "GuildMember#hasPermissions is deprecated - use GuildMember#hasPermission, it now takes an array"
      )),
      (e.exports = GuildMember);
  },
  function (e, t, s) {
    const i = s(12),
      n = s(8),
      r = s(50),
      o = s(5),
      a = s(3),
      l = s(0),
      h = s(23);
    e.exports = class GuildChannel extends i {
      constructor(e, t) {
        super(e.client, t), (this.guild = e);
      }
      setup(e) {
        if (
          (super.setup(e),
          (this.name = e.name),
          (this.position = e.position),
          (this.parentID = e.parent_id),
          (this.permissionOverwrites = new a()),
          e.permission_overwrites)
        )
          for (const t of e.permission_overwrites)
            this.permissionOverwrites.set(t.id, new r(this, t));
      }
      get calculatedPosition() {
        const e = this.guild._sortedChannels(this.type);
        return e.array().indexOf(e.get(this.id));
      }
      get parent() {
        return this.guild.channels.get(this.parentID) || null;
      }
      memberPermissions(e) {
        if (!(e = this.client.resolver.resolveGuildMember(this.guild, e)))
          return null;
        if (e.id === this.guild.ownerID) return new o(e, o.ALL);
        const t = e.roles,
          s = new o(t.map((e) => e.permissions));
        if (s.has(o.FLAGS.ADMINISTRATOR)) return new o(o.ALL).freeze();
        const i = this.overwritesFor(e, !0, t);
        return s
          .remove(i.everyone ? i.everyone.deny : 0)
          .add(i.everyone ? i.everyone.allow : 0)
          .remove(i.roles.length > 0 ? i.roles.map((e) => e.deny) : 0)
          .add(i.roles.length > 0 ? i.roles.map((e) => e.allow) : 0)
          .remove(i.member ? i.member.deny : 0)
          .add(i.member ? i.member.allow : 0)
          .freeze();
      }
      rolePermissions(e) {
        if (e.permissions & o.FLAGS.ADMINISTRATOR) return new o(o.ALL).freeze();
        const t = this.permissionOverwrites.get(this.guild.id),
          s = this.permissionOverwrites.get(e.id);
        return new o(e.permissions)
          .remove(t ? t.deny : 0)
          .add(t ? t.allow : 0)
          .remove(s ? s.deny : 0)
          .add(s ? s.allow : 0)
          .freeze();
      }
      permissionsFor(e) {
        const t = this.guild.member(e);
        if (t) return this.memberPermissions(t);
        const s = this.client.resolver.resolveRole(this.guild, e);
        return s ? this.rolePermissions(s) : null;
      }
      overwritesFor(e, t = !1, s = null) {
        if (
          (t || (e = this.client.resolver.resolveGuildMember(this.guild, e)),
          !e)
        )
          return [];
        s = s || e.roles;
        const i = [];
        let n, r;
        for (const t of this.permissionOverwrites.values())
          t.id === this.guild.id
            ? (r = t)
            : s.has(t.id)
            ? i.push(t)
            : t.id === e.id && (n = t);
        return { everyone: r, roles: i, member: n };
      }
      replacePermissionOverwrites({ overwrites: e, reason: t } = {}) {
        return this.edit({ permissionOverwrites: e, reason: t }).then(
          () => this
        );
      }
      overwritePermissions(e, t, s) {
        const i = { allow: 0, deny: 0 };
        if (e instanceof n) i.type = "role";
        else if (this.guild.roles.has(e))
          (e = this.guild.roles.get(e)), (i.type = "role");
        else if (
          ((e = this.client.resolver.resolveUser(e)), (i.type = "member"), !e)
        )
          return Promise.reject(
            new TypeError("Supplied parameter was neither a User nor a Role.")
          );
        i.id = e.id;
        const r = this.permissionOverwrites.get(e.id);
        r && ((i.allow = r.allow), (i.deny = r.deny));
        for (const e in t)
          !0 === t[e]
            ? ((i.allow |= o.FLAGS[e] || 0), (i.deny &= ~(o.FLAGS[e] || 0)))
            : !1 === t[e]
            ? ((i.allow &= ~(o.FLAGS[e] || 0)), (i.deny |= o.FLAGS[e] || 0))
            : null === t[e] &&
              ((i.allow &= ~(o.FLAGS[e] || 0)), (i.deny &= ~(o.FLAGS[e] || 0)));
        return this.client.rest.methods
          .setChannelOverwrite(this, i, s)
          .then(() => this);
      }
      lockPermissions() {
        if (!this.parent)
          return Promise.reject(
            new TypeError("Could not find a parent to this guild channel.")
          );
        const e = this.parent.permissionOverwrites.map((e) => ({
          deny: e.deny.bitfield,
          allow: e.allow.bitfield,
          id: e.id,
          type: e.type,
        }));
        return this.edit({ permissionOverwrites: e });
      }
      edit(e, t) {
        return this.client.rest.methods
          .updateChannel(this, e, t)
          .then(() => this);
      }
      setName(e, t) {
        return this.edit({ name: e }, t);
      }
      setPosition(e, t) {
        return this.guild.setChannelPosition(this, e, t);
      }
      setParent(e, t) {
        return (
          (e = this.client.resolver.resolveChannelID(e)),
          this.edit({ parent: e }, t)
        );
      }
      setTopic(e, t) {
        return this.edit({ topic: e }, t);
      }
      createInvite(e = {}, t) {
        return this.client.rest.methods.createChannelInvite(this, e, t);
      }
      clone(e = this.name, t = !0, s = !0, i) {
        return this.guild
          .createChannel(e, this.type, t ? this.permissionOverwrites : [], i)
          .then((e) => (s ? e.setTopic(this.topic) : e));
      }
      fetchInvites() {
        return this.client.rest
          .makeRequest("get", l.Endpoints.Channel(this.id).invites, !0)
          .then((e) => {
            const t = new a();
            for (let s of e) (s = new h(this.client, s)), t.set(s.code, s);
            return t;
          });
      }
      delete(e) {
        return this.client.rest.methods.deleteChannel(this, e);
      }
      equals(e) {
        let t =
          e &&
          this.id === e.id &&
          this.type === e.type &&
          this.topic === e.topic &&
          this.position === e.position &&
          this.name === e.name;
        return (
          t &&
            (t =
              this.permissionOverwrites && e.permissionOverwrites
                ? this.permissionOverwrites.equals(e.permissionOverwrites)
                : !this.permissionOverwrites && !e.permissionOverwrites),
          t
        );
      }
      get deletable() {
        return (
          this.id !== this.guild.id &&
          this.permissionsFor(this.client.user).has(o.FLAGS.MANAGE_CHANNELS)
        );
      }
      get manageable() {
        if (this.client.user.id === this.guild.ownerID) return !0;
        const e = this.permissionsFor(this.client.user);
        return !!e && e.has([o.FLAGS.MANAGE_CHANNELS, o.FLAGS.VIEW_CHANNEL]);
      }
      get muted() {
        if (this.client.user.bot) return null;
        try {
          return this.client.user.guildSettings
            .get(this.guild.id)
            .channelOverrides.get(this.id).muted;
        } catch (e) {
          return !1;
        }
      }
      get messageNotifications() {
        if (this.client.user.bot) return null;
        try {
          return this.client.user.guildSettings
            .get(this.guild.id)
            .channelOverrides.get(this.id).messageNotifications;
        } catch (e) {
          return l.MessageNotificationTypes[3];
        }
      }
      toString() {
        return `<#${this.id}>`;
      }
    };
  },
  function (e, t) {
    function s() {
      (this._events = this._events || {}),
        (this._maxListeners = this._maxListeners || void 0);
    }
    function i(e) {
      return "function" == typeof e;
    }
    function n(e) {
      return "object" == typeof e && null !== e;
    }
    function r(e) {
      return void 0 === e;
    }
    (e.exports = s),
      (s.EventEmitter = s),
      (s.prototype._events = void 0),
      (s.prototype._maxListeners = void 0),
      (s.defaultMaxListeners = 10),
      (s.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || isNaN(e))
          throw TypeError("n must be a positive number");
        return (this._maxListeners = e), this;
      }),
      (s.prototype.emit = function (e) {
        var t, s, o, a, l, h;
        if (
          (this._events || (this._events = {}),
          "error" === e &&
            (!this._events.error ||
              (n(this._events.error) && !this._events.error.length)))
        ) {
          if ((t = arguments[1]) instanceof Error) throw t;
          var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
          throw ((c.context = t), c);
        }
        if (r((s = this._events[e]))) return !1;
        if (i(s))
          switch (arguments.length) {
            case 1:
              s.call(this);
              break;
            case 2:
              s.call(this, arguments[1]);
              break;
            case 3:
              s.call(this, arguments[1], arguments[2]);
              break;
            default:
              (a = Array.prototype.slice.call(arguments, 1)), s.apply(this, a);
          }
        else if (n(s))
          for (
            a = Array.prototype.slice.call(arguments, 1),
              o = (h = s.slice()).length,
              l = 0;
            l < o;
            l++
          )
            h[l].apply(this, a);
        return !0;
      }),
      (s.prototype.addListener = function (e, t) {
        var o;
        if (!i(t)) throw TypeError("listener must be a function");
        return (
          this._events || (this._events = {}),
          this._events.newListener &&
            this.emit("newListener", e, i(t.listener) ? t.listener : t),
          this._events[e]
            ? n(this._events[e])
              ? this._events[e].push(t)
              : (this._events[e] = [this._events[e], t])
            : (this._events[e] = t),
          n(this._events[e]) &&
            !this._events[e].warned &&
            (o = r(this._maxListeners)
              ? s.defaultMaxListeners
              : this._maxListeners) &&
            o > 0 &&
            this._events[e].length > o &&
            ((this._events[e].warned = !0),
            console.error(
              "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
              this._events[e].length
            ),
            "function" == typeof console.trace && console.trace()),
          this
        );
      }),
      (s.prototype.on = s.prototype.addListener),
      (s.prototype.once = function (e, t) {
        if (!i(t)) throw TypeError("listener must be a function");
        var s = !1;
        function n() {
          this.removeListener(e, n), s || ((s = !0), t.apply(this, arguments));
        }
        return (n.listener = t), this.on(e, n), this;
      }),
      (s.prototype.removeListener = function (e, t) {
        var s, r, o, a;
        if (!i(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (
          ((o = (s = this._events[e]).length),
          (r = -1),
          s === t || (i(s.listener) && s.listener === t))
        )
          delete this._events[e],
            this._events.removeListener && this.emit("removeListener", e, t);
        else if (n(s)) {
          for (a = o; a-- > 0; )
            if (s[a] === t || (s[a].listener && s[a].listener === t)) {
              r = a;
              break;
            }
          if (r < 0) return this;
          1 === s.length
            ? ((s.length = 0), delete this._events[e])
            : s.splice(r, 1),
            this._events.removeListener && this.emit("removeListener", e, t);
        }
        return this;
      }),
      (s.prototype.removeAllListeners = function (e) {
        var t, s;
        if (!this._events) return this;
        if (!this._events.removeListener)
          return (
            0 === arguments.length
              ? (this._events = {})
              : this._events[e] && delete this._events[e],
            this
          );
        if (0 === arguments.length) {
          for (t in this._events)
            "removeListener" !== t && this.removeAllListeners(t);
          return (
            this.removeAllListeners("removeListener"), (this._events = {}), this
          );
        }
        if (i((s = this._events[e]))) this.removeListener(e, s);
        else if (s) for (; s.length; ) this.removeListener(e, s[s.length - 1]);
        return delete this._events[e], this;
      }),
      (s.prototype.listeners = function (e) {
        return this._events && this._events[e]
          ? i(this._events[e])
            ? [this._events[e]]
            : this._events[e].slice()
          : [];
      }),
      (s.prototype.listenerCount = function (e) {
        if (this._events) {
          var t = this._events[e];
          if (i(t)) return 1;
          if (t) return t.length;
        }
        return 0;
      }),
      (s.listenerCount = function (e, t) {
        return e.listenerCount(t);
      });
  },
  function (e, t) {
    e.exports = class Attachment {
      constructor(e, t) {
        (this.file = null), t ? this.setAttachment(e, t) : this._attach(e);
      }
      get name() {
        return this.file.name;
      }
      get attachment() {
        return this.file.attachment;
      }
      setAttachment(e, t) {
        return (this.file = { attachment: e, name: t }), this;
      }
      setFile(e) {
        return (this.file = { attachment: e }), this;
      }
      setName(e) {
        return (this.file.name = e), this;
      }
      _attach(e, t) {
        "string" == typeof e ? (this.file = e) : this.setAttachment(e, t);
      }
    };
  },
  function (e, t, s) {
    const i = s(6),
      n = s(26),
      r = s(10),
      o = s(8),
      a = s(17),
      l = s(11).Presence,
      h = s(18),
      c = s(0),
      u = s(3),
      d = s(4),
      m = s(7);
    class Guild {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e }),
          (this.members = new u()),
          (this.channels = new u()),
          (this.roles = new u()),
          (this.presences = new u()),
          (this.deleted = !1),
          t &&
            (t.unavailable
              ? ((this.available = !1), (this.id = t.id))
              : (this.setup(t), t.channels || (this.available = !1)));
      }
      setup(e) {
        if (
          ((this.name = e.name),
          (this.icon = e.icon),
          (this.splash = e.splash),
          (this.region = e.region),
          (this.memberCount = e.member_count || this.memberCount),
          (this.large = Boolean("large" in e ? e.large : this.large)),
          (this.features = e.features),
          (this.applicationID = e.application_id),
          (this.afkTimeout = e.afk_timeout),
          (this.afkChannelID = e.afk_channel_id),
          (this.systemChannelID = e.system_channel_id),
          (this.embedEnabled = e.embed_enabled),
          (this.verificationLevel = e.verification_level),
          (this.explicitContentFilter = e.explicit_content_filter),
          (this.mfaLevel = e.mfa_level),
          (this.joinedTimestamp = e.joined_at
            ? new Date(e.joined_at).getTime()
            : this.joinedTimestamp),
          (this.defaultMessageNotifications =
            c.DefaultMessageNotifications[e.default_message_notifications] ||
            e.default_message_notifications),
          (this.id = e.id),
          (this.available = !e.unavailable),
          (this.features = e.features || this.features || []),
          e.members)
        ) {
          this.members.clear();
          for (const t of e.members) this._addMember(t, !1);
        }
        if ((e.owner_id && (this.ownerID = e.owner_id), e.channels)) {
          this.channels.clear();
          for (const t of e.channels)
            this.client.dataManager.newChannel(t, this);
        }
        if (e.roles) {
          this.roles.clear();
          for (const t of e.roles) {
            const e = new o(this, t);
            this.roles.set(e.id, e);
          }
        }
        if (e.presences)
          for (const t of e.presences) this._setPresence(t.user.id, t);
        if (((this._rawVoiceStates = new u()), e.voice_states))
          for (const t of e.voice_states) {
            this._rawVoiceStates.set(t.user_id, t);
            const e = this.members.get(t.user_id);
            e &&
              ((e.serverMute = t.mute),
              (e.serverDeaf = t.deaf),
              (e.selfMute = t.self_mute),
              (e.selfDeaf = t.self_deaf),
              (e.voiceSessionID = t.session_id),
              (e.voiceChannelID = t.channel_id),
              this.channels.get(t.channel_id).members.set(e.user.id, e));
          }
        if (this.emojis)
          this.client.actions.GuildEmojisUpdate.handle({
            guild_id: this.id,
            emojis: e.emojis,
          });
        else {
          this.emojis = new u();
          for (const t of e.emojis) this.emojis.set(t.id, new a(this, t));
        }
      }
      get createdTimestamp() {
        return m.deconstruct(this.id).timestamp;
      }
      get createdAt() {
        return new Date(this.createdTimestamp);
      }
      get joinedAt() {
        return new Date(this.joinedTimestamp);
      }
      get verified() {
        return this.features.includes("VERIFIED");
      }
      get iconURL() {
        return this.icon
          ? c.Endpoints.Guild(this).Icon(
              this.client.options.http.cdn,
              this.icon
            )
          : null;
      }
      get nameAcronym() {
        return this.name.replace(/\w+/g, (e) => e[0]).replace(/\s/g, "");
      }
      get splashURL() {
        return this.splash
          ? c.Endpoints.Guild(this).Splash(
              this.client.options.http.cdn,
              this.splash
            )
          : null;
      }
      get owner() {
        return this.members.get(this.ownerID);
      }
      get afkChannel() {
        return this.client.channels.get(this.afkChannelID) || null;
      }
      get systemChannel() {
        return this.client.channels.get(this.systemChannelID) || null;
      }
      get voiceConnection() {
        return this.client.browser
          ? null
          : this.client.voice.connections.get(this.id) || null;
      }
      get position() {
        return this.client.user.bot
          ? null
          : this.client.user.settings.guildPositions
          ? this.client.user.settings.guildPositions.indexOf(this.id)
          : null;
      }
      get muted() {
        if (this.client.user.bot) return null;
        try {
          return this.client.user.guildSettings.get(this.id).muted;
        } catch (e) {
          return !1;
        }
      }
      get messageNotifications() {
        if (this.client.user.bot) return null;
        try {
          return this.client.user.guildSettings.get(this.id)
            .messageNotifications;
        } catch (e) {
          return null;
        }
      }
      get mobilePush() {
        if (this.client.user.bot) return null;
        try {
          return this.client.user.guildSettings.get(this.id).mobilePush;
        } catch (e) {
          return !1;
        }
      }
      get suppressEveryone() {
        if (this.client.user.bot) return null;
        try {
          return this.client.user.guildSettings.get(this.id).suppressEveryone;
        } catch (e) {
          return null;
        }
      }
      get defaultRole() {
        return this.roles.get(this.id);
      }
      get me() {
        return this.members.get(this.client.user.id);
      }
      get _sortedRoles() {
        return this._sortPositionWithID(this.roles);
      }
      member(e) {
        return this.client.resolver.resolveGuildMember(this, e);
      }
      fetchBans() {
        return this.client.rest.methods.getGuildBans(this).then((e) => {
          const t = new u();
          for (const s of e.values()) t.set(s.user.id, s.user);
          return t;
        });
      }
      fetchInvites() {
        return this.client.rest.methods.getGuildInvites(this);
      }
      fetchWebhooks() {
        return this.client.rest.methods.getGuildWebhooks(this);
      }
      fetchVoiceRegions() {
        return this.client.rest.methods.fetchVoiceRegions(this.id);
      }
      fetchAuditLogs(e) {
        return this.client.rest.methods.getGuildAuditLogs(this, e);
      }
      addMember(e, t) {
        return this.members.has(e.id)
          ? Promise.resolve(this.members.get(e.id))
          : this.client.rest.methods.putGuildMember(this, e, t);
      }
      fetchMember(e, t = !0) {
        if (!(e = this.client.resolver.resolveUser(e)))
          return Promise.reject(new Error("Invalid or uncached id provided."));
        const s = this.members.get(e.id);
        return s && s.joinedTimestamp
          ? Promise.resolve(s)
          : this.client.rest.methods.getGuildMember(this, e, t);
      }
      fetchMembers(e = "", t = 0) {
        return new Promise((s, i) => {
          if (this.memberCount === this.members.size) return void s(this);
          this.client.ws.send({
            op: c.OPCodes.REQUEST_GUILD_MEMBERS,
            d: { guild_id: this.id, query: e, limit: t },
          });
          const n = (e, t) => {
            t.id === this.id &&
              (this.memberCount === this.members.size || e.length < 1e3) &&
              (this.client.removeListener(c.Events.GUILD_MEMBERS_CHUNK, n),
              s(this));
          };
          this.client.on(c.Events.GUILD_MEMBERS_CHUNK, n),
            this.client.setTimeout(
              () => i(new Error("Members didn't arrive in time.")),
              12e4
            );
        });
      }
      search(e = {}) {
        return this.client.rest.methods.search(this, e);
      }
      edit(e, t) {
        const s = {};
        return (
          e.name && (s.name = e.name),
          e.region && (s.region = e.region),
          void 0 !== e.verificationLevel &&
            (s.verification_level = Number(e.verificationLevel)),
          void 0 !== e.afkChannel &&
            (s.afk_channel_id = this.client.resolver.resolveChannelID(
              e.afkChannel
            )),
          void 0 !== e.systemChannel &&
            (s.system_channel_id = this.client.resolver.resolveChannelID(
              e.systemChannel
            )),
          e.afkTimeout && (s.afk_timeout = Number(e.afkTimeout)),
          void 0 !== e.icon && (s.icon = e.icon),
          e.owner &&
            (s.owner_id = this.client.resolver.resolveUser(e.owner).id),
          void 0 !== e.splash && (s.splash = e.splash),
          void 0 !== e.explicitContentFilter &&
            (s.explicit_content_filter = Number(e.explicitContentFilter)),
          void 0 !== e.defaultMessageNotifications &&
            (s.default_message_notifications =
              "string" == typeof e.defaultMessageNotifications
                ? c.DefaultMessageNotifications.indexOf(
                    e.defaultMessageNotifications
                  )
                : Number(e.defaultMessageNotifications)),
          this.client.rest.methods.updateGuild(this, s, t)
        );
      }
      setExplicitContentFilter(e, t) {
        return this.edit({ explicitContentFilter: e }, t);
      }
      setDefaultMessageNotifications(e, t) {
        return this.edit({ defaultMessageNotifications: e }, t);
      }
      setName(e, t) {
        return this.edit({ name: e }, t);
      }
      setRegion(e, t) {
        return this.edit({ region: e }, t);
      }
      setVerificationLevel(e, t) {
        return this.edit({ verificationLevel: e }, t);
      }
      setAFKChannel(e, t) {
        return this.edit({ afkChannel: e }, t);
      }
      setSystemChannel(e, t) {
        return this.edit({ systemChannel: e }, t);
      }
      setAFKTimeout(e, t) {
        return this.edit({ afkTimeout: e }, t);
      }
      setIcon(e, t) {
        return this.client.resolver
          .resolveImage(e)
          .then((e) => this.edit({ icon: e, reason: t }));
      }
      setOwner(e, t) {
        return this.edit({ owner: e }, t);
      }
      setSplash(e) {
        return this.client.resolver
          .resolveImage(e)
          .then((e) => this.edit({ splash: e }));
      }
      setPosition(e, t) {
        return this.client.user.bot
          ? Promise.reject(
              new Error(
                "Setting guild position is only available for user accounts"
              )
            )
          : this.client.user.settings.setGuildPosition(this, e, t);
      }
      acknowledge() {
        return this.client.rest.methods.ackGuild(this);
      }
      allowDMs(e) {
        const t = this.client.user.settings;
        return e ? t.removeRestrictedGuild(this) : t.addRestrictedGuild(this);
      }
      ban(e, t = {}) {
        return (
          "number" == typeof t
            ? (t = { reason: null, "delete-message-days": t })
            : "string" == typeof t &&
              (t = { reason: t, "delete-message-days": 0 }),
          t.days && (t["delete-message-days"] = t.days),
          this.client.rest.methods.banGuildMember(this, e, t)
        );
      }
      unban(e, t) {
        return this.client.rest.methods.unbanGuildMember(this, e, t);
      }
      pruneMembers(e, t = !1, s) {
        if ("number" != typeof e) throw new TypeError("Days must be a number.");
        return this.client.rest.methods.pruneGuildMembers(this, e, t, s);
      }
      sync() {
        this.client.user.bot || this.client.syncGuilds([this]);
      }
      createChannel(e, t, s, i) {
        return this.client.rest.methods.createChannel(this, e, t, s, i);
      }
      setChannelPositions(e) {
        return this.client.rest.methods.updateChannelPositions(this.id, e);
      }
      createRole(e = {}, t) {
        return this.client.rest.methods.createGuildRole(this, e, t);
      }
      createEmoji(e, t, s, i) {
        return "string" == typeof e && e.startsWith("data:")
          ? this.client.rest.methods.createEmoji(this, e, t, s, i)
          : this.client.resolver
              .resolveImage(e)
              .then((e) =>
                this.client.rest.methods.createEmoji(this, e, t, s, i)
              );
      }
      deleteEmoji(e, t) {
        return (
          e instanceof a || (e = this.emojis.get(e)),
          this.client.rest.methods.deleteEmoji(e, t)
        );
      }
      leave() {
        return this.client.rest.methods.leaveGuild(this);
      }
      delete() {
        return this.client.rest.methods.deleteGuild(this);
      }
      equals(e) {
        let t =
          e &&
          this.id === e.id &&
          this.available === !e.unavailable &&
          this.splash === e.splash &&
          this.region === e.region &&
          this.name === e.name &&
          this.memberCount === e.member_count &&
          this.large === e.large &&
          this.icon === e.icon &&
          d.arraysEqual(this.features, e.features) &&
          this.ownerID === e.owner_id &&
          this.verificationLevel === e.verification_level &&
          this.embedEnabled === e.embed_enabled;
        return (
          t &&
            (this.embedChannel
              ? this.embedChannel.id !== e.embed_channel_id && (t = !1)
              : e.embed_channel_id && (t = !1)),
          t
        );
      }
      toString() {
        return this.name;
      }
      _addMember(e, t = !0) {
        const s = this.members.has(e.user.id);
        e.user instanceof r ||
          (e.user = this.client.dataManager.newUser(e.user)),
          (e.joined_at = e.joined_at || 0);
        const i = new h(this, e);
        if (
          (this.members.set(i.id, i),
          this._rawVoiceStates && this._rawVoiceStates.has(i.user.id))
        ) {
          const e = this._rawVoiceStates.get(i.user.id);
          (i.serverMute = e.mute),
            (i.serverDeaf = e.deaf),
            (i.selfMute = e.self_mute),
            (i.selfDeaf = e.self_deaf),
            (i.voiceSessionID = e.session_id),
            (i.voiceChannelID = e.channel_id),
            this.client.channels.has(e.channel_id)
              ? this.client.channels.get(e.channel_id).members.set(i.user.id, i)
              : this.client.emit(
                  "warn",
                  `Member ${i.id} added in guild ${this.id} with an uncached voice channel`
                );
        }
        return (
          this.client.ws.connection.status === c.Status.READY &&
            t &&
            !s &&
            this.client.emit(c.Events.GUILD_MEMBER_ADD, i),
          i
        );
      }
      _updateMember(e, t) {
        const s = d.cloneObject(e);
        t.roles && (e._roles = t.roles),
          void 0 !== t.nick && (e.nickname = t.nick);
        const i =
          e.nickname !== s.nickname || !d.arraysEqual(e._roles, s._roles);
        return (
          this.client.ws.connection.status === c.Status.READY &&
            i &&
            this.client.emit(c.Events.GUILD_MEMBER_UPDATE, s, e),
          { old: s, mem: e }
        );
      }
      _removeMember(e) {
        this.members.delete(e.id);
      }
      _memberSpeakUpdate(e, t) {
        const s = this.members.get(e);
        s &&
          s.speaking !== t &&
          ((s.speaking = t),
          this.client.emit(c.Events.GUILD_MEMBER_SPEAKING, s, t));
      }
      _setPresence(e, t) {
        this.presences.get(e)
          ? this.presences.get(e).update(t)
          : this.presences.set(e, new l(t, this.client));
      }
      setRolePosition(e, t, s = !1) {
        if ("string" == typeof e && !(e = this.roles.get(e)))
          return Promise.reject(
            new Error("Supplied role is not a role or snowflake.")
          );
        if (((t = Number(t)), isNaN(t)))
          return Promise.reject(
            new Error("Supplied position is not a number.")
          );
        let i = this._sortedRoles.array();
        return (
          d.moveElementInArray(i, e, t, s),
          (i = i.map((e, t) => ({ id: e.id, position: t }))),
          this.client.rest.methods.setRolePositions(this.id, i)
        );
      }
      setChannelPosition(e, t, s = !1) {
        if ("string" == typeof e && !(e = this.channels.get(e)))
          return Promise.reject(
            new Error("Supplied channel is not a channel or snowflake.")
          );
        if (((t = Number(t)), isNaN(t)))
          return Promise.reject(
            new Error("Supplied position is not a number.")
          );
        let i = this._sortedChannels(e.type).array();
        return (
          d.moveElementInArray(i, e, t, s),
          (i = i.map((e, t) => ({ id: e.id, position: t }))),
          this.client.rest.methods.setChannelPositions(this.id, i)
        );
      }
      _sortedChannels(e) {
        return this._sortPositionWithID(
          this.channels.filter(
            (t) =>
              ("voice" === e && "voice" === t.type) ||
              ("voice" !== e && "voice" !== t.type) ||
              e === t.type
          )
        );
      }
      _sortPositionWithID(e) {
        return e.sort((e, t) =>
          e.position !== t.position
            ? e.position - t.position
            : n.fromString(e.id).sub(n.fromString(t.id)).toNumber()
        );
      }
    }
    Object.defineProperty(Guild.prototype, "defaultChannel", {
      get: i.deprecate(function () {
        return this.channels.get(this.id);
      }, "Guild#defaultChannel: This property is obsolete, will be removed in v12.0.0, and may not function as expected."),
    }),
      (Guild.prototype.acknowledge = i.deprecate(
        Guild.prototype.acknowledge,
        "Guild#acknowledge: userbot methods will be removed"
      )),
      (Guild.prototype.setPosition = i.deprecate(
        Guild.prototype.setPosition,
        "Guild#setPosition: userbot methods will be removed"
      )),
      (Guild.prototype.search = i.deprecate(
        Guild.prototype.search,
        "Guild#search: userbot methods will be removed"
      )),
      (Guild.prototype.sync = i.deprecate(
        Guild.prototype.sync,
        "Guild#sync:, userbot methods will be removed"
      )),
      (e.exports = Guild);
  },
  function (e, t, s) {
    const i = s(45),
      n = s(46),
      r = s(0);
    e.exports = class Invite {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e }), this.setup(t);
      }
      setup(e) {
        (this.guild =
          this.client.guilds.get(e.guild.id) || new i(this.client, e.guild)),
          (this.code = e.code),
          (this.presenceCount = e.approximate_presence_count),
          (this.memberCount = e.approximate_member_count),
          (this.textChannelCount = e.guild.text_channel_count),
          (this.voiceChannelCount = e.guild.voice_channel_count),
          (this.temporary = e.temporary),
          (this.maxAge = e.max_age),
          (this.uses = e.uses),
          (this.maxUses = e.max_uses),
          e.inviter &&
            (this.inviter = this.client.dataManager.newUser(e.inviter)),
          (this.channel =
            this.client.channels.get(e.channel.id) ||
            new n(this.client, e.channel)),
          (this.createdTimestamp = new Date(e.created_at).getTime());
      }
      get createdAt() {
        return new Date(this.createdTimestamp);
      }
      get expiresTimestamp() {
        return this.createdTimestamp + 1e3 * this.maxAge;
      }
      get expiresAt() {
        return new Date(this.expiresTimestamp);
      }
      get url() {
        return r.Endpoints.inviteLink(this.code);
      }
      delete(e) {
        return this.client.rest.methods.deleteInvite(this, e);
      }
      toString() {
        return this.url;
      }
    };
  },
  function (e, t, s) {
    (function (t) {
      const i = s(29),
        n = s(4),
        r = s(21),
        o = s(14);
      e.exports = class Webhook {
        constructor(e, t, s) {
          e
            ? (Object.defineProperty(this, "client", { value: e }),
              t && this.setup(t))
            : ((this.id = t),
              (this.token = s),
              Object.defineProperty(this, "client", { value: this }));
        }
        setup(e) {
          (this.name = e.name),
            Object.defineProperty(this, "token", {
              value: e.token,
              writable: !0,
              configurable: !0,
            }),
            (this.avatar = e.avatar),
            (this.id = e.id),
            (this.guildID = e.guild_id),
            (this.channelID = e.channel_id),
            e.user
              ? (this.owner = this.client.users
                  ? this.client.users.get(e.user.id)
                  : e.user)
              : (this.owner = null);
        }
        send(e, s) {
          if (
            (s || "object" != typeof e || e instanceof Array
              ? s || (s = {})
              : ((s = e), (e = "")),
            s instanceof r && (s = { files: [s] }),
            s instanceof o && (s = { embeds: [s] }),
            e)
          ) {
            e = this.client.resolver.resolveString(e);
            let { split: t, code: i, disableEveryone: r } = s;
            t && "object" != typeof t && (t = {}),
              void 0 === i ||
                ("boolean" == typeof i && !0 !== i) ||
                ((e = n.escapeMarkdown(e, !0)),
                (e = `\`\`\`${
                  ("boolean" != typeof i && i) || ""
                }\n${e}\n\`\`\``),
                t &&
                  ((t.prepend = `\`\`\`${
                    ("boolean" != typeof i && i) || ""
                  }\n`),
                  (t.append = "\n```"))),
              (r || (void 0 === r && this.client.options.disableEveryone)) &&
                (e = e.replace(/@(everyone|here)/g, "@â€‹$1")),
              t && (e = n.splitMessage(e, t));
          }
          if (
            (s.file && (s.files ? s.files.push(s.file) : (s.files = [s.file])),
            s.embeds)
          ) {
            const e = [];
            for (const t of s.embeds) t.file && e.push(t.file);
            s.files ? s.files.push(...e) : (s.files = e);
          }
          if (
            (s.embeds &&
              (s.embeds = s.embeds.map((e) => new o(e)._apiTransform())),
            s.files)
          ) {
            for (let e = 0; e < s.files.length; e++) {
              let n = s.files[e];
              ("string" == typeof n || t.isBuffer(n)) &&
                (n = { attachment: n }),
                n.name
                  ? n instanceof r && (n = n.file)
                  : "string" == typeof n.attachment
                  ? (n.name = i.basename(n.attachment))
                  : n.attachment && n.attachment.path
                  ? (n.name = i.basename(n.attachment.path))
                  : n instanceof r
                  ? (n = {
                      attachment: n.file,
                      name: i.basename(n.file) || "file.jpg",
                    })
                  : (n.name = "file.jpg"),
                (s.files[e] = n);
            }
            return Promise.all(
              s.files.map((e) =>
                this.client.resolver
                  .resolveFile(e.attachment)
                  .then((t) => ((e.file = t), e))
              )
            ).then((t) =>
              this.client.rest.methods.sendWebhookMessage(this, e, s, t)
            );
          }
          return this.client.rest.methods.sendWebhookMessage(this, e, s);
        }
        sendMessage(e, t = {}) {
          return this.send(e, t);
        }
        sendFile(e, t, s, i = {}) {
          return this.send(
            s,
            Object.assign(i, { file: { attachment: e, name: t } })
          );
        }
        sendCode(e, t, s = {}) {
          return this.send(t, Object.assign(s, { code: e }));
        }
        sendSlackMessage(e) {
          return this.client.rest.methods.sendSlackWebhookMessage(this, e);
        }
        edit(e = this.name, t) {
          return t
            ? this.client.resolver
                .resolveImage(t)
                .then((t) => this.client.rest.methods.editWebhook(this, e, t))
            : this.client.rest.methods.editWebhook(this, e);
        }
        delete(e) {
          return this.client.rest.methods.deleteWebhook(this, e);
        }
      };
    }.call(t, s(13).Buffer));
  },
  function (e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      s.d(t, "delete", function () {
        return d;
      });
    var i = s(63),
      n = s.n(i);
    t.default = n.a;
    const r = n.a.version;
    t.version = r;
    const o = n.a.METHODS;
    t.METHODS = o;
    const a = n.a.acl;
    t.acl = a;
    const l = n.a.bind;
    t.bind = l;
    const h = n.a.checkout;
    t.checkout = h;
    const c = n.a.connect;
    t.connect = c;
    const u = n.a.copy;
    t.copy = u;
    const d = n.a.delete,
      m = n.a.get;
    t.get = m;
    const p = n.a.head;
    t.head = p;
    const g = n.a.link;
    t.link = g;
    const f = n.a.lock;
    t.lock = f;
    const E = n.a.merge;
    t.merge = E;
    const _ = n.a.mkactivity;
    t.mkactivity = _;
    const v = n.a.mkcalendar;
    t.mkcalendar = v;
    const b = n.a.mkcol;
    t.mkcol = b;
    const y = n.a.move;
    t.move = y;
    const w = n.a.notify;
    t.notify = w;
    const A = n.a.options;
    t.options = A;
    const T = n.a.patch;
    t.patch = T;
    const M = n.a.post;
    t.post = M;
    const R = n.a.propfind;
    t.propfind = R;
    const D = n.a.proppatch;
    t.proppatch = D;
    const C = n.a.purge;
    t.purge = C;
    const S = n.a.put;
    t.put = S;
    const I = n.a.rebind;
    t.rebind = I;
    const U = n.a.report;
    t.report = U;
    const N = n.a.search;
    t.search = N;
    const O = n.a.subscribe;
    t.subscribe = O;
    const L = n.a.trace;
    t.trace = L;
    const P = n.a.unbind;
    t.unbind = P;
    const k = n.a.unlink;
    t.unlink = k;
    const G = n.a.unlock;
    t.unlock = G;
    const x = n.a.unsubscribe;
    t.unsubscribe = x;
    const j = n.a.brew;
    t.brew = j;
  },
  function (e, t) {
    e.exports = i;
    var s = null;
    try {
      s = new WebAssembly.Instance(
        new WebAssembly.Module(
          new Uint8Array([
            0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127,
            127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1,
            65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95,
            115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95,
            115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95,
            104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1,
            126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
            173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4,
            167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132,
            32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135,
            167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
            66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34,
            4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0,
            173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32,
            134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36,
            1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32,
            3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32,
            4, 167, 11,
          ])
        ),
        {}
      ).exports;
    } catch (e) {}
    function i(e, t, s) {
      (this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!s);
    }
    function n(e) {
      return !0 === (e && e.__isLong__);
    }
    i.prototype.__isLong__,
      Object.defineProperty(i.prototype, "__isLong__", { value: !0 }),
      (i.isLong = n);
    var r = {},
      o = {};
    function a(e, t) {
      var s, i, n;
      return t
        ? (n = 0 <= (e >>>= 0) && e < 256) && (i = o[e])
          ? i
          : ((s = h(e, (0 | e) < 0 ? -1 : 0, !0)), n && (o[e] = s), s)
        : (n = -128 <= (e |= 0) && e < 128) && (i = r[e])
        ? i
        : ((s = h(e, e < 0 ? -1 : 0, !1)), n && (r[e] = s), s);
    }
    function l(e, t) {
      if (isNaN(e)) return t ? _ : E;
      if (t) {
        if (e < 0) return _;
        if (e >= p) return A;
      } else {
        if (e <= -g) return T;
        if (e + 1 >= g) return w;
      }
      return e < 0 ? l(-e, t).neg() : h(e % m | 0, (e / m) | 0, t);
    }
    function h(e, t, s) {
      return new i(e, t, s);
    }
    (i.fromInt = a), (i.fromNumber = l), (i.fromBits = h);
    var c = Math.pow;
    function u(e, t, s) {
      if (0 === e.length) throw Error("empty string");
      if (
        "NaN" === e ||
        "Infinity" === e ||
        "+Infinity" === e ||
        "-Infinity" === e
      )
        return E;
      if (
        ("number" == typeof t ? ((s = t), (t = !1)) : (t = !!t),
        (s = s || 10) < 2 || 36 < s)
      )
        throw RangeError("radix");
      var i;
      if ((i = e.indexOf("-")) > 0) throw Error("interior hyphen");
      if (0 === i) return u(e.substring(1), t, s).neg();
      for (var n = l(c(s, 8)), r = E, o = 0; o < e.length; o += 8) {
        var a = Math.min(8, e.length - o),
          h = parseInt(e.substring(o, o + a), s);
        if (a < 8) {
          var d = l(c(s, a));
          r = r.mul(d).add(l(h));
        } else r = (r = r.mul(n)).add(l(h));
      }
      return (r.unsigned = t), r;
    }
    function d(e, t) {
      return "number" == typeof e
        ? l(e, t)
        : "string" == typeof e
        ? u(e, t)
        : h(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
    }
    (i.fromString = u), (i.fromValue = d);
    var m = 4294967296,
      p = m * m,
      g = p / 2,
      f = a(1 << 24),
      E = a(0);
    i.ZERO = E;
    var _ = a(0, !0);
    i.UZERO = _;
    var v = a(1);
    i.ONE = v;
    var b = a(1, !0);
    i.UONE = b;
    var y = a(-1);
    i.NEG_ONE = y;
    var w = h(-1, 2147483647, !1);
    i.MAX_VALUE = w;
    var A = h(-1, -1, !0);
    i.MAX_UNSIGNED_VALUE = A;
    var T = h(0, -2147483648, !1);
    i.MIN_VALUE = T;
    var M = i.prototype;
    (M.toInt = function () {
      return this.unsigned ? this.low >>> 0 : this.low;
    }),
      (M.toNumber = function () {
        return this.unsigned
          ? (this.high >>> 0) * m + (this.low >>> 0)
          : this.high * m + (this.low >>> 0);
      }),
      (M.toString = function (e) {
        if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
          if (this.eq(T)) {
            var t = l(e),
              s = this.div(t),
              i = s.mul(t).sub(this);
            return s.toString(e) + i.toInt().toString(e);
          }
          return "-" + this.neg().toString(e);
        }
        for (var n = l(c(e, 6), this.unsigned), r = this, o = ""; ; ) {
          var a = r.div(n),
            h = (r.sub(a.mul(n)).toInt() >>> 0).toString(e);
          if ((r = a).isZero()) return h + o;
          for (; h.length < 6; ) h = "0" + h;
          o = "" + h + o;
        }
      }),
      (M.getHighBits = function () {
        return this.high;
      }),
      (M.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      }),
      (M.getLowBits = function () {
        return this.low;
      }),
      (M.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      }),
      (M.getNumBitsAbs = function () {
        if (this.isNegative())
          return this.eq(T) ? 64 : this.neg().getNumBitsAbs();
        for (
          var e = 0 != this.high ? this.high : this.low, t = 31;
          t > 0 && 0 == (e & (1 << t));
          t--
        );
        return 0 != this.high ? t + 33 : t + 1;
      }),
      (M.isZero = function () {
        return 0 === this.high && 0 === this.low;
      }),
      (M.eqz = M.isZero),
      (M.isNegative = function () {
        return !this.unsigned && this.high < 0;
      }),
      (M.isPositive = function () {
        return this.unsigned || this.high >= 0;
      }),
      (M.isOdd = function () {
        return 1 == (1 & this.low);
      }),
      (M.isEven = function () {
        return 0 == (1 & this.low);
      }),
      (M.equals = function (e) {
        return (
          n(e) || (e = d(e)),
          (this.unsigned === e.unsigned ||
            this.high >>> 31 != 1 ||
            e.high >>> 31 != 1) &&
            this.high === e.high &&
            this.low === e.low
        );
      }),
      (M.eq = M.equals),
      (M.notEquals = function (e) {
        return !this.eq(e);
      }),
      (M.neq = M.notEquals),
      (M.ne = M.notEquals),
      (M.lessThan = function (e) {
        return this.comp(e) < 0;
      }),
      (M.lt = M.lessThan),
      (M.lessThanOrEqual = function (e) {
        return this.comp(e) <= 0;
      }),
      (M.lte = M.lessThanOrEqual),
      (M.le = M.lessThanOrEqual),
      (M.greaterThan = function (e) {
        return this.comp(e) > 0;
      }),
      (M.gt = M.greaterThan),
      (M.greaterThanOrEqual = function (e) {
        return this.comp(e) >= 0;
      }),
      (M.gte = M.greaterThanOrEqual),
      (M.ge = M.greaterThanOrEqual),
      (M.compare = function (e) {
        if ((n(e) || (e = d(e)), this.eq(e))) return 0;
        var t = this.isNegative(),
          s = e.isNegative();
        return t && !s
          ? -1
          : !t && s
          ? 1
          : this.unsigned
          ? e.high >>> 0 > this.high >>> 0 ||
            (e.high === this.high && e.low >>> 0 > this.low >>> 0)
            ? -1
            : 1
          : this.sub(e).isNegative()
          ? -1
          : 1;
      }),
      (M.comp = M.compare),
      (M.negate = function () {
        return !this.unsigned && this.eq(T) ? T : this.not().add(v);
      }),
      (M.neg = M.negate),
      (M.add = function (e) {
        n(e) || (e = d(e));
        var t = this.high >>> 16,
          s = 65535 & this.high,
          i = this.low >>> 16,
          r = 65535 & this.low,
          o = e.high >>> 16,
          a = 65535 & e.high,
          l = e.low >>> 16,
          c = 0,
          u = 0,
          m = 0,
          p = 0;
        return (
          (m += (p += r + (65535 & e.low)) >>> 16),
          (u += (m += i + l) >>> 16),
          (c += (u += s + a) >>> 16),
          (c += t + o),
          h(
            ((m &= 65535) << 16) | (p &= 65535),
            ((c &= 65535) << 16) | (u &= 65535),
            this.unsigned
          )
        );
      }),
      (M.subtract = function (e) {
        return n(e) || (e = d(e)), this.add(e.neg());
      }),
      (M.sub = M.subtract),
      (M.multiply = function (e) {
        if (this.isZero()) return E;
        if ((n(e) || (e = d(e)), s))
          return h(
            s.mul(this.low, this.high, e.low, e.high),
            s.get_high(),
            this.unsigned
          );
        if (e.isZero()) return E;
        if (this.eq(T)) return e.isOdd() ? T : E;
        if (e.eq(T)) return this.isOdd() ? T : E;
        if (this.isNegative())
          return e.isNegative()
            ? this.neg().mul(e.neg())
            : this.neg().mul(e).neg();
        if (e.isNegative()) return this.mul(e.neg()).neg();
        if (this.lt(f) && e.lt(f))
          return l(this.toNumber() * e.toNumber(), this.unsigned);
        var t = this.high >>> 16,
          i = 65535 & this.high,
          r = this.low >>> 16,
          o = 65535 & this.low,
          a = e.high >>> 16,
          c = 65535 & e.high,
          u = e.low >>> 16,
          m = 65535 & e.low,
          p = 0,
          g = 0,
          _ = 0,
          v = 0;
        return (
          (_ += (v += o * m) >>> 16),
          (g += (_ += r * m) >>> 16),
          (_ &= 65535),
          (g += (_ += o * u) >>> 16),
          (p += (g += i * m) >>> 16),
          (g &= 65535),
          (p += (g += r * u) >>> 16),
          (g &= 65535),
          (p += (g += o * c) >>> 16),
          (p += t * m + i * u + r * c + o * a),
          h(
            ((_ &= 65535) << 16) | (v &= 65535),
            ((p &= 65535) << 16) | (g &= 65535),
            this.unsigned
          )
        );
      }),
      (M.mul = M.multiply),
      (M.divide = function (e) {
        if ((n(e) || (e = d(e)), e.isZero())) throw Error("division by zero");
        var t, i, r;
        if (s)
          return this.unsigned ||
            -2147483648 !== this.high ||
            -1 !== e.low ||
            -1 !== e.high
            ? h(
                (this.unsigned ? s.div_u : s.div_s)(
                  this.low,
                  this.high,
                  e.low,
                  e.high
                ),
                s.get_high(),
                this.unsigned
              )
            : this;
        if (this.isZero()) return this.unsigned ? _ : E;
        if (this.unsigned) {
          if ((e.unsigned || (e = e.toUnsigned()), e.gt(this))) return _;
          if (e.gt(this.shru(1))) return b;
          r = _;
        } else {
          if (this.eq(T))
            return e.eq(v) || e.eq(y)
              ? T
              : e.eq(T)
              ? v
              : (t = this.shr(1).div(e).shl(1)).eq(E)
              ? e.isNegative()
                ? v
                : y
              : ((i = this.sub(e.mul(t))), (r = t.add(i.div(e))));
          else if (e.eq(T)) return this.unsigned ? _ : E;
          if (this.isNegative())
            return e.isNegative()
              ? this.neg().div(e.neg())
              : this.neg().div(e).neg();
          if (e.isNegative()) return this.div(e.neg()).neg();
          r = E;
        }
        for (i = this; i.gte(e); ) {
          t = Math.max(1, Math.floor(i.toNumber() / e.toNumber()));
          for (
            var o = Math.ceil(Math.log(t) / Math.LN2),
              a = o <= 48 ? 1 : c(2, o - 48),
              u = l(t),
              m = u.mul(e);
            m.isNegative() || m.gt(i);

          )
            m = (u = l((t -= a), this.unsigned)).mul(e);
          u.isZero() && (u = v), (r = r.add(u)), (i = i.sub(m));
        }
        return r;
      }),
      (M.div = M.divide),
      (M.modulo = function (e) {
        return (
          n(e) || (e = d(e)),
          s
            ? h(
                (this.unsigned ? s.rem_u : s.rem_s)(
                  this.low,
                  this.high,
                  e.low,
                  e.high
                ),
                s.get_high(),
                this.unsigned
              )
            : this.sub(this.div(e).mul(e))
        );
      }),
      (M.mod = M.modulo),
      (M.rem = M.modulo),
      (M.not = function () {
        return h(~this.low, ~this.high, this.unsigned);
      }),
      (M.and = function (e) {
        return (
          n(e) || (e = d(e)),
          h(this.low & e.low, this.high & e.high, this.unsigned)
        );
      }),
      (M.or = function (e) {
        return (
          n(e) || (e = d(e)),
          h(this.low | e.low, this.high | e.high, this.unsigned)
        );
      }),
      (M.xor = function (e) {
        return (
          n(e) || (e = d(e)),
          h(this.low ^ e.low, this.high ^ e.high, this.unsigned)
        );
      }),
      (M.shiftLeft = function (e) {
        return (
          n(e) && (e = e.toInt()),
          0 == (e &= 63)
            ? this
            : e < 32
            ? h(
                this.low << e,
                (this.high << e) | (this.low >>> (32 - e)),
                this.unsigned
              )
            : h(0, this.low << (e - 32), this.unsigned)
        );
      }),
      (M.shl = M.shiftLeft),
      (M.shiftRight = function (e) {
        return (
          n(e) && (e = e.toInt()),
          0 == (e &= 63)
            ? this
            : e < 32
            ? h(
                (this.low >>> e) | (this.high << (32 - e)),
                this.high >> e,
                this.unsigned
              )
            : h(this.high >> (e - 32), this.high >= 0 ? 0 : -1, this.unsigned)
        );
      }),
      (M.shr = M.shiftRight),
      (M.shiftRightUnsigned = function (e) {
        if ((n(e) && (e = e.toInt()), 0 === (e &= 63))) return this;
        var t = this.high;
        return e < 32
          ? h((this.low >>> e) | (t << (32 - e)), t >>> e, this.unsigned)
          : h(32 === e ? t : t >>> (e - 32), 0, this.unsigned);
      }),
      (M.shru = M.shiftRightUnsigned),
      (M.shr_u = M.shiftRightUnsigned),
      (M.toSigned = function () {
        return this.unsigned ? h(this.low, this.high, !1) : this;
      }),
      (M.toUnsigned = function () {
        return this.unsigned ? this : h(this.low, this.high, !0);
      }),
      (M.toBytes = function (e) {
        return e ? this.toBytesLE() : this.toBytesBE();
      }),
      (M.toBytesLE = function () {
        var e = this.high,
          t = this.low;
        return [
          255 & t,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          t >>> 24,
          255 & e,
          (e >>> 8) & 255,
          (e >>> 16) & 255,
          e >>> 24,
        ];
      }),
      (M.toBytesBE = function () {
        var e = this.high,
          t = this.low;
        return [
          e >>> 24,
          (e >>> 16) & 255,
          (e >>> 8) & 255,
          255 & e,
          t >>> 24,
          (t >>> 16) & 255,
          (t >>> 8) & 255,
          255 & t,
        ];
      }),
      (i.fromBytes = function (e, t, s) {
        return s ? i.fromBytesLE(e, t) : i.fromBytesBE(e, t);
      }),
      (i.fromBytesLE = function (e, t) {
        return new i(
          e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
          e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
          t
        );
      }),
      (i.fromBytesBE = function (e, t) {
        return new i(
          (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
          (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
          t
        );
      });
  },
  function (e, t) {
    class MessageEmbed {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e.client }),
          (this.message = e),
          this.setup(t);
      }
      setup(e) {
        if (
          ((this.type = e.type),
          (this.title = e.title),
          (this.description = e.description),
          (this.url = e.url),
          (this.color = e.color),
          (this.fields = []),
          e.fields)
        )
          for (const t of e.fields)
            this.fields.push(new MessageEmbedField(this, t));
        (this.timestamp = e.timestamp),
          (this.thumbnail = e.thumbnail
            ? new MessageEmbedThumbnail(this, e.thumbnail)
            : null),
          (this.image = e.image ? new MessageEmbedImage(this, e.image) : null),
          (this.video = e.video ? new MessageEmbedVideo(this, e.video) : null),
          (this.author = e.author
            ? new MessageEmbedAuthor(this, e.author)
            : null),
          (this.provider = e.provider
            ? new MessageEmbedProvider(this, e.provider)
            : null),
          (this.footer = e.footer
            ? new MessageEmbedFooter(this, e.footer)
            : null);
      }
      get createdAt() {
        return new Date(this.createdTimestamp);
      }
      get hexColor() {
        if (!this.color) return null;
        let e = this.color.toString(16);
        for (; e.length < 6; ) e = `0${e}`;
        return `#${e}`;
      }
    }
    class MessageEmbedThumbnail {
      constructor(e, t) {
        (this.embed = e), this.setup(t);
      }
      setup(e) {
        (this.url = e.url),
          (this.proxyURL = e.proxy_url),
          (this.height = e.height),
          (this.width = e.width);
      }
    }
    class MessageEmbedImage {
      constructor(e, t) {
        (this.embed = e), this.setup(t);
      }
      setup(e) {
        (this.url = e.url),
          (this.proxyURL = e.proxy_url),
          (this.height = e.height),
          (this.width = e.width);
      }
    }
    class MessageEmbedVideo {
      constructor(e, t) {
        (this.embed = e), this.setup(t);
      }
      setup(e) {
        (this.url = e.url), (this.height = e.height), (this.width = e.width);
      }
    }
    class MessageEmbedProvider {
      constructor(e, t) {
        (this.embed = e), this.setup(t);
      }
      setup(e) {
        (this.name = e.name), (this.url = e.url);
      }
    }
    class MessageEmbedAuthor {
      constructor(e, t) {
        (this.embed = e), this.setup(t);
      }
      setup(e) {
        (this.name = e.name), (this.url = e.url), (this.iconURL = e.icon_url);
      }
    }
    class MessageEmbedField {
      constructor(e, t) {
        (this.embed = e), this.setup(t);
      }
      setup(e) {
        (this.name = e.name), (this.value = e.value), (this.inline = e.inline);
      }
    }
    class MessageEmbedFooter {
      constructor(e, t) {
        (this.embed = e), this.setup(t);
      }
      setup(e) {
        (this.text = e.text),
          (this.iconURL = e.icon_url),
          (this.proxyIconUrl = e.proxy_icon_url);
      }
    }
    (MessageEmbed.Thumbnail = MessageEmbedThumbnail),
      (MessageEmbed.Image = MessageEmbedImage),
      (MessageEmbed.Video = MessageEmbedVideo),
      (MessageEmbed.Provider = MessageEmbedProvider),
      (MessageEmbed.Author = MessageEmbedAuthor),
      (MessageEmbed.Field = MessageEmbedField),
      (MessageEmbed.Footer = MessageEmbedFooter),
      (e.exports = MessageEmbed);
  },
  function (e, t, s) {
    (function (t) {
      const i = s(29),
        n = s(39),
        r = s(25),
        o = s(0),
        a = s(4).convertToBuffer,
        l = s(10),
        h = s(16),
        c = s(22),
        u = s(12),
        d = s(18),
        m = s(17),
        p = s(30),
        g = s(8);
      e.exports = class ClientDataResolver {
        constructor(e) {
          this.client = e;
        }
        resolveUser(e) {
          return e instanceof l
            ? e
            : "string" == typeof e
            ? this.client.users.get(e) || null
            : e instanceof d
            ? e.user
            : e instanceof h
            ? e.author
            : e instanceof c
            ? e.owner
            : null;
        }
        resolveUserID(e) {
          return e instanceof l || e instanceof d
            ? e.id
            : "string" == typeof e
            ? e || null
            : e instanceof h
            ? e.author.id
            : e instanceof c
            ? e.ownerID
            : null;
        }
        resolveGuild(e) {
          return e instanceof c
            ? e
            : ("string" == typeof e && this.client.guilds.get(e)) || null;
        }
        resolveGuildMember(e, t) {
          return t instanceof d
            ? t
            : ((e = this.resolveGuild(e)),
              (t = this.resolveUser(t)),
              (e && t && e.members.get(t.id)) || null);
        }
        resolveRole(e, t) {
          return t instanceof g
            ? t
            : (e = this.resolveGuild(e)) && "string" == typeof t
            ? e.roles.get(t)
            : null;
        }
        resolveChannel(e) {
          return e instanceof u
            ? e
            : "string" == typeof e
            ? this.client.channels.get(e) || null
            : e instanceof h
            ? e.channel
            : (e instanceof c && e.channels.get(e.id)) || null;
        }
        resolveChannelID(e) {
          return e instanceof u
            ? e.id
            : "string" == typeof e
            ? e
            : e instanceof h
            ? e.channel.id
            : e instanceof c
            ? e.defaultChannel.id
            : null;
        }
        resolveInviteCode(e) {
          const t =
            /discord(?:app\.com\/invite|\.gg(?:\/invite)?)\/([\w-]{2,255})/i.exec(
              e
            );
          return t && t[1] ? t[1] : e;
        }
        resolveString(e) {
          return "string" == typeof e
            ? e
            : e instanceof Array
            ? e.join("\n")
            : String(e);
        }
        resolveImage(e) {
          return e
            ? "string" == typeof e && e.startsWith("data:")
              ? Promise.resolve(e)
              : this.resolveFile(e).then(this.resolveBase64)
            : Promise.resolve(null);
        }
        resolveBase64(e) {
          return e instanceof t
            ? `data:image/jpg;base64,${e.toString("base64")}`
            : e;
        }
        resolveFile(e) {
          return e instanceof t
            ? Promise.resolve(e)
            : this.client.browser && e instanceof ArrayBuffer
            ? Promise.resolve(a(e))
            : "string" == typeof e
            ? /^https?:\/\//.test(e)
              ? r
                  .get(e)
                  .then((e) => (e.body instanceof t ? e.body : t.from(e.text)))
              : new Promise((t, s) => {
                  const r = i.resolve(e);
                  n.stat(r, (e, i) =>
                    e
                      ? s(e)
                      : i && i.isFile()
                      ? (n.readFile(r, (e, i) => {
                          e ? s(e) : t(i);
                        }),
                        null)
                      : s(new Error(`The file could not be found: ${r}`))
                  );
                })
            : e && e.pipe && "function" == typeof e.pipe
            ? new Promise((s, i) => {
                const n = [];
                e.once("error", i),
                  e.on("data", (e) => n.push(e)),
                  e.once("end", () => s(t.concat(n)));
              })
            : Promise.reject(
                new TypeError("The resource must be a string or Buffer.")
              );
        }
        resolveEmojiIdentifier(e) {
          return e instanceof m || e instanceof p
            ? e.identifier
            : "string" == typeof e
            ? this.client.emojis.has(e)
              ? this.client.emojis.get(e).identifier
              : e.includes("%")
              ? e
              : encodeURIComponent(e)
            : null;
        }
        static resolveColor(e) {
          if ("string" == typeof e) {
            if ("RANDOM" === e) return Math.floor(16777216 * Math.random());
            if ("DEFAULT" === e) return 0;
            e = o.Colors[e] || parseInt(e.replace("#", ""), 16);
          } else e instanceof Array && (e = (e[0] << 16) + (e[1] << 8) + e[2]);
          if (e < 0 || e > 16777215)
            throw new RangeError(
              "Color must be within the range 0 - 16777215 (0xFFFFFF)."
            );
          if (e && isNaN(e))
            throw new TypeError("Unable to convert color to a number.");
          return e;
        }
        resolveColor(e) {
          return this.constructor.resolveColor(e);
        }
      };
    }.call(t, s(13).Buffer));
  },
  function (e, t, s) {
    (function (e) {
      function s(e, t) {
        for (var s = 0, i = e.length - 1; i >= 0; i--) {
          var n = e[i];
          "." === n
            ? e.splice(i, 1)
            : ".." === n
            ? (e.splice(i, 1), s++)
            : s && (e.splice(i, 1), s--);
        }
        if (t) for (; s--; s) e.unshift("..");
        return e;
      }
      var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
        n = function (e) {
          return i.exec(e).slice(1);
        };
      function r(e, t) {
        if (e.filter) return e.filter(t);
        for (var s = [], i = 0; i < e.length; i++)
          t(e[i], i, e) && s.push(e[i]);
        return s;
      }
      (t.resolve = function () {
        for (var t = "", i = !1, n = arguments.length - 1; n >= -1 && !i; n--) {
          var o = n >= 0 ? arguments[n] : e.cwd();
          if ("string" != typeof o)
            throw new TypeError("Arguments to path.resolve must be strings");
          o && ((t = o + "/" + t), (i = "/" === o.charAt(0)));
        }
        return (
          (t = s(
            r(t.split("/"), function (e) {
              return !!e;
            }),
            !i
          ).join("/")),
          (i ? "/" : "") + t || "."
        );
      }),
        (t.normalize = function (e) {
          var i = t.isAbsolute(e),
            n = "/" === o(e, -1);
          return (
            (e = s(
              r(e.split("/"), function (e) {
                return !!e;
              }),
              !i
            ).join("/")) ||
              i ||
              (e = "."),
            e && n && (e += "/"),
            (i ? "/" : "") + e
          );
        }),
        (t.isAbsolute = function (e) {
          return "/" === e.charAt(0);
        }),
        (t.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(
            r(e, function (e, t) {
              if ("string" != typeof e)
                throw new TypeError("Arguments to path.join must be strings");
              return e;
            }).join("/")
          );
        }),
        (t.relative = function (e, s) {
          function i(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++);
            for (var s = e.length - 1; s >= 0 && "" === e[s]; s--);
            return t > s ? [] : e.slice(t, s - t + 1);
          }
          (e = t.resolve(e).substr(1)), (s = t.resolve(s).substr(1));
          for (
            var n = i(e.split("/")),
              r = i(s.split("/")),
              o = Math.min(n.length, r.length),
              a = o,
              l = 0;
            l < o;
            l++
          )
            if (n[l] !== r[l]) {
              a = l;
              break;
            }
          var h = [];
          for (l = a; l < n.length; l++) h.push("..");
          return (h = h.concat(r.slice(a))).join("/");
        }),
        (t.sep = "/"),
        (t.delimiter = ":"),
        (t.dirname = function (e) {
          var t = n(e),
            s = t[0],
            i = t[1];
          return s || i ? (i && (i = i.substr(0, i.length - 1)), s + i) : ".";
        }),
        (t.basename = function (e, t) {
          var s = n(e)[2];
          return (
            t &&
              s.substr(-1 * t.length) === t &&
              (s = s.substr(0, s.length - t.length)),
            s
          );
        }),
        (t.extname = function (e) {
          return n(e)[3];
        });
      var o =
        "b" === "ab".substr(-1)
          ? function (e, t, s) {
              return e.substr(t, s);
            }
          : function (e, t, s) {
              return t < 0 && (t = e.length + t), e.substr(t, s);
            };
    }.call(t, s(9)));
  },
  function (e, t) {
    e.exports = class ReactionEmoji {
      constructor(e, t, s) {
        (this.reaction = e), (this.name = t), (this.id = s);
      }
      get identifier() {
        return this.id
          ? `${this.name}:${this.id}`
          : encodeURIComponent(this.name);
      }
      toString() {
        return this.id ? `<:${this.name}:${this.id}>` : this.name;
      }
    };
  },
  function (e, t, s) {
    const i = s(3),
      n = s(20).EventEmitter;
    e.exports = class Collector extends n {
      constructor(e, t, s = {}) {
        super(),
          Object.defineProperty(this, "client", { value: e }),
          (this.filter = t),
          (this.options = s),
          (this.collected = new i()),
          (this.ended = !1),
          (this._timeout = null),
          (this.listener = this._handle.bind(this)),
          s.time &&
            (this._timeout = this.client.setTimeout(
              () => this.stop("time"),
              s.time
            ));
      }
      _handle(...e) {
        const t = this.handle(...e);
        if (!t || !this.filter(...e, this.collected)) return;
        this.collected.set(t.key, t.value), this.emit("collect", t.value, this);
        const s = this.postCheck(...e);
        s && this.stop(s);
      }
      get next() {
        return new Promise((e, t) => {
          if (this.ended) return void t(this.collected);
          const s = () => {
              this.removeListener("collect", i), this.removeListener("end", n);
            },
            i = (t) => {
              s(), e(t);
            },
            n = () => {
              s(), t(this.collected);
            };
          this.on("collect", i), this.on("end", n);
        });
      }
      stop(e = "user") {
        this.ended ||
          (this._timeout && this.client.clearTimeout(this._timeout),
          (this.ended = !0),
          this.cleanup(),
          this.emit("end", this.collected, e));
      }
      handle() {}
      postCheck() {}
      cleanup() {}
    };
  },
  function (e, t, s) {
    const i = s(7),
      n = s(6);
    class OAuth2Application {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e }), this.setup(t);
      }
      setup(e) {
        (this.id = e.id),
          (this.name = e.name),
          (this.description = e.description),
          (this.icon = e.icon),
          (this.iconURL = `https://cdn.discordapp.com/app-icons/${this.id}/${this.icon}.jpg`),
          (this.rpcOrigins = e.rpc_origins),
          (this.redirectURIs = e.redirect_uris),
          (this.botRequireCodeGrant = e.bot_require_code_grant),
          (this.botPublic = e.bot_public),
          (this.rpcApplicationState = e.rpc_application_state),
          (this.bot = e.bot),
          (this.flags = e.flags),
          (this.secret = e.secret),
          e.owner && (this.owner = this.client.dataManager.newUser(e.owner));
      }
      get createdTimestamp() {
        return i.deconstruct(this.id).timestamp;
      }
      get createdAt() {
        return new Date(this.createdTimestamp);
      }
      reset() {
        return this.client.rest.methods.resetApplication(this.id);
      }
      toString() {
        return this.name;
      }
    }
    (OAuth2Application.prototype.reset = n.deprecate(
      OAuth2Application.prototype.reset,
      "OAuth2Application#reset: userbot methods will be removed"
    )),
      (e.exports = OAuth2Application);
  },
  function (e, t, s) {
    const i = s(12),
      n = s(15),
      r = s(3),
      o = s(0);
    class GroupDMChannel extends i {
      constructor(e, t) {
        super(e, t),
          (this.type = "group"),
          (this.messages = new r()),
          (this._typing = new Map());
      }
      setup(e) {
        if (
          (super.setup(e),
          (this.name = e.name),
          (this.icon = e.icon),
          (this.ownerID = e.owner_id),
          (this.managed = e.managed),
          (this.applicationID = e.application_id),
          e.nicks && (this.nicks = new r(e.nicks.map((e) => [e.id, e.nick]))),
          this.recipients || (this.recipients = new r()),
          e.recipients)
        )
          for (const t of e.recipients) {
            const e = this.client.dataManager.newUser(t);
            this.recipients.set(e.id, e);
          }
        this.lastMessageID = e.last_message_id;
      }
      get owner() {
        return this.client.users.get(this.ownerID);
      }
      get iconURL() {
        return this.icon
          ? o.Endpoints.Channel(this).Icon(
              this.client.options.http.cdn,
              this.icon
            )
          : null;
      }
      edit(e) {
        const t = {};
        return (
          e.name && (t.name = e.name),
          void 0 !== e.icon && (t.icon = e.icon),
          this.client.rest.methods.updateGroupDMChannel(this, t)
        );
      }
      equals(e) {
        const t =
          e &&
          this.id === e.id &&
          this.name === e.name &&
          this.icon === e.icon &&
          this.ownerID === e.ownerID;
        return t ? this.recipients.equals(e.recipients) : t;
      }
      addUser(e, t) {
        return this.client.rest.methods.addUserToGroupDM(this, {
          nick: t,
          id: this.client.resolver.resolveUserID(e),
          accessToken: e,
        });
      }
      setIcon(e) {
        return this.client.resolver
          .resolveImage(e)
          .then((e) => this.edit({ icon: e }));
      }
      setName(e) {
        return this.edit({ name: e });
      }
      removeUser(e) {
        const t = this.client.resolver.resolveUserID(e);
        return this.client.rest.methods.removeUserFromGroupDM(this, t);
      }
      toString() {
        return this.name;
      }
      send() {}
      sendMessage() {}
      sendEmbed() {}
      sendFile() {}
      sendFiles() {}
      sendCode() {}
      fetchMessage() {}
      fetchMessages() {}
      fetchPinnedMessages() {}
      search() {}
      startTyping() {}
      stopTyping() {}
      get typing() {}
      get typingCount() {}
      createCollector() {}
      createMessageCollector() {}
      awaitMessages() {}
      acknowledge() {}
      _cacheMessage() {}
    }
    n.applyToClass(GroupDMChannel, !0, ["bulkDelete"]),
      (e.exports = GroupDMChannel);
  },
  function (e, t) {
    e.exports = class DiscordAPIError extends Error {
      constructor(e, t, s) {
        super();
        const i = this.constructor.flattenErrors(t.errors || t).join("\n");
        (this.name = "DiscordAPIError"),
          (this.message =
            t.message && i ? `${t.message}\n${i}` : t.message || i),
          (this.path = e),
          (this.code = t.code),
          (this.method = s);
      }
      static flattenErrors(e, t = "") {
        let s = [];
        for (const i of Object.keys(e)) {
          if ("message" === i) continue;
          const n = t ? (isNaN(i) ? `${t}.${i}` : `${t}[${i}]`) : i;
          e[i]._errors
            ? s.push(`${n}: ${e[i]._errors.map((e) => e.message).join(" ")}`)
            : e[i].code || e[i].message
            ? s.push(
                `${e[i].code ? `${e[i].code}: ` : ""}: ${e[i].message}`.trim()
              )
            : "string" == typeof e[i]
            ? s.push(e[i])
            : (s = s.concat(this.flattenErrors(e[i], n)));
        }
        return s;
      }
    };
  },
  function (e, t) {
    var s;
    s = (function () {
      return this;
    })();
    try {
      s = s || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (s = window);
    }
    e.exports = s;
  },
  function (e, t, s) {
    "use strict";
    (t.decode = t.parse = s(65)), (t.encode = t.stringify = s(66));
  },
  function (e, t) {
    e.exports = {
      name: "discord.js",
      version: "11.4.2",
      description: "A powerful library for interacting with the Discord API",
      main: "./src/index",
      types: "./typings/index.d.ts",
      scripts: {
        test: "npm run lint && npm run docs:test",
        docs: "docgen --source src --custom docs/index.yml --output docs/docs.json",
        "docs:test": "docgen --source src --custom docs/index.yml",
        lint: "eslint src",
        "lint:fix": "eslint --fix src",
        webpack: "parallel-webpack",
      },
      repository: {
        type: "git",
        url: "git+https://github.com/discordjs/discord.js.git",
      },
      keywords: ["discord", "api", "bot", "client", "node", "discordapp"],
      author: "Amish Shah <amishshah.2k@gmail.com>",
      license: "Apache-2.0",
      bugs: { url: "https://github.com/discordjs/discord.js/issues" },
      homepage: "https://github.com/discordjs/discord.js#readme",
      runkitExampleFilename: "./docs/examples/ping.js",
      dependencies: {
        long: "^4.0.0",
        "prism-media": "^0.0.3",
        snekfetch: "^3.6.4",
        tweetnacl: "^1.0.0",
        ws: "^4.0.0",
      },
      peerDependencies: {
        bufferutil: "^3.0.3",
        erlpack: "discordapp/erlpack",
        "node-opus": "^0.2.7",
        opusscript: "^0.0.6",
        sodium: "^2.0.3",
        "libsodium-wrappers": "^0.7.3",
        uws: "^9.14.0",
      },
      devDependencies: {
        "@types/node": "^9.4.6",
        "discord.js-docgen": "discordjs/docgen",
        eslint: "^4.18.0",
        "parallel-webpack": "^2.2.0",
        "uglifyjs-webpack-plugin": "^1.2.0",
        webpack: "^3.11.0",
      },
      engines: { node: ">=6.0.0" },
      browser: {
        ws: !1,
        uws: !1,
        erlpack: !1,
        "prism-media": !1,
        opusscript: !1,
        "node-opus": !1,
        tweetnacl: !1,
        sodium: !1,
        "src/sharding/Shard.js": !1,
        "src/sharding/ShardClientUtil.js": !1,
        "src/sharding/ShardingManager.js": !1,
        "src/client/voice/dispatcher/StreamDispatcher.js": !1,
        "src/client/voice/opus/BaseOpusEngine.js": !1,
        "src/client/voice/opus/NodeOpusEngine.js": !1,
        "src/client/voice/opus/OpusEngineList.js": !1,
        "src/client/voice/opus/OpusScriptEngine.js": !1,
        "src/client/voice/pcm/ConverterEngine.js": !1,
        "src/client/voice/pcm/ConverterEngineList.js": !1,
        "src/client/voice/pcm/FfmpegConverterEngine.js": !1,
        "src/client/voice/player/AudioPlayer.js": !1,
        "src/client/voice/receiver/VoiceReadable.js": !1,
        "src/client/voice/receiver/VoiceReceiver.js": !1,
        "src/client/voice/util/Secretbox.js": !1,
        "src/client/voice/util/SecretKey.js": !1,
        "src/client/voice/util/VolumeInterface.js": !1,
        "src/client/voice/ClientVoiceManager.js": !1,
        "src/client/voice/VoiceBroadcast.js": !1,
        "src/client/voice/VoiceConnection.js": !1,
        "src/client/voice/VoiceUDPClient.js": !1,
        "src/client/voice/VoiceWebSocket.js": !1,
      },
    };
  },
  function (e, t, s) {
    const i = s(73),
      n = s(74),
      r = s(79),
      o = s(80),
      a = s(81),
      l = s(0);
    e.exports = class RESTManager {
      constructor(e) {
        (this.client = e),
          (this.handlers = {}),
          (this.userAgentManager = new i(this)),
          (this.methods = new n(this)),
          (this.rateLimitedEndpoints = {}),
          (this.globallyRateLimited = !1);
      }
      destroy() {
        for (const e of Object.keys(this.handlers)) {
          const t = this.handlers[e];
          t.destroy && t.destroy();
        }
      }
      push(e, t) {
        return new Promise((s, i) => {
          e.push({ request: t, resolve: s, reject: i });
        });
      }
      getRequestHandler() {
        switch (this.client.options.apiRequestMethod) {
          case "sequential":
            return r;
          case "burst":
            return o;
          default:
            throw new Error(l.Errors.INVALID_RATE_LIMIT_METHOD);
        }
      }
      makeRequest(e, t, s, i, n, r) {
        const o = new a(this, e, t, s, i, n, r);
        if (!this.handlers[o.route]) {
          const e = this.getRequestHandler();
          this.handlers[o.route] = new e(this, o.route);
        }
        return this.push(this.handlers[o.route], o);
      }
    };
  },
  function (e, t) {},
  function (e, t, s) {
    const i = s(3);
    class MessageMentions {
      constructor(e, t, s, n) {
        if (((this.everyone = Boolean(n)), t))
          if (t instanceof i) this.users = new i(t);
          else {
            this.users = new i();
            for (const s of t) {
              let t = e.client.users.get(s.id);
              t || (t = e.client.dataManager.newUser(s)),
                this.users.set(t.id, t);
            }
          }
        else this.users = new i();
        if (s)
          if (s instanceof i) this.roles = new i(s);
          else {
            this.roles = new i();
            for (const t of s) {
              const s = e.channel.guild.roles.get(t);
              s && this.roles.set(s.id, s);
            }
          }
        else this.roles = new i();
        (this._content = e.content),
          (this._client = e.client),
          (this._guild = e.channel.guild),
          (this._members = null),
          (this._channels = null);
      }
      get members() {
        return this._members
          ? this._members
          : this._guild
          ? ((this._members = new i()),
            this.users.forEach((e) => {
              const t = this._guild.member(e);
              t && this._members.set(t.user.id, t);
            }),
            this._members)
          : null;
      }
      get channels() {
        if (this._channels) return this._channels;
        let e;
        for (
          this._channels = new i();
          null !== (e = this.constructor.CHANNELS_PATTERN.exec(this._content));

        ) {
          const t = this._client.channels.get(e[1]);
          t && this._channels.set(t.id, t);
        }
        return this._channels;
      }
    }
    (MessageMentions.EVERYONE_PATTERN = /@(everyone|here)/g),
      (MessageMentions.USERS_PATTERN = /<@!?[0-9]+>/g),
      (MessageMentions.ROLES_PATTERN = /<@&[0-9]+>/g),
      (MessageMentions.CHANNELS_PATTERN = /<#([0-9]+)>/g),
      (e.exports = MessageMentions);
  },
  function (e, t) {
    e.exports = class MessageAttachment {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e.client }),
          (this.message = e),
          this.setup(t);
      }
      setup(e) {
        (this.id = e.id),
          (this.filename = e.filename),
          (this.filesize = e.size),
          (this.url = e.url),
          (this.proxyURL = e.proxy_url),
          (this.height = e.height),
          (this.width = e.width);
      }
    };
  },
  function (e, t, s) {
    const i = s(3),
      n = s(17),
      r = s(30);
    e.exports = class MessageReaction {
      constructor(e, t, s, n) {
        (this.message = e),
          (this.me = n),
          (this.count = s || 0),
          (this.users = new i()),
          (this._emoji = new r(this, t.name, t.id));
      }
      get emoji() {
        if (this._emoji instanceof n) return this._emoji;
        if (this._emoji.id) {
          const e = this.message.client.emojis;
          if (e.has(this._emoji.id)) {
            const t = e.get(this._emoji.id);
            return (this._emoji = t), t;
          }
        }
        return this._emoji;
      }
      remove(e = this.message.client.user) {
        const t = this.message,
          s = this.message.client.resolver.resolveUserID(e);
        return s
          ? t.client.rest.methods.removeMessageReaction(
              t,
              this.emoji.identifier,
              s
            )
          : Promise.reject(
              new Error(
                "Couldn't resolve the user ID to remove from the reaction."
              )
            );
      }
      fetchUsers(e = 100, { after: t, before: s } = {}) {
        const n = this.message;
        return n.client.rest.methods
          .getMessageReactionUsers(n, this.emoji.identifier, {
            after: t,
            before: s,
            limit: e,
          })
          .then((e) => {
            const t = new i();
            for (const s of e) {
              const e = this.message.client.dataManager.newUser(s);
              this.users.set(e.id, e), t.set(e.id, e);
            }
            return t;
          });
      }
    };
  },
  function (e, t, s) {
    const i = s(31),
      n = s(3);
    e.exports = class ReactionCollector extends i {
      constructor(e, t, s = {}) {
        super(e.client, t, s),
          (this.message = e),
          (this.users = new n()),
          (this.total = 0),
          this.client.setMaxListeners(this.client.getMaxListeners() + 1),
          this.client.on("messageReactionAdd", this.listener);
      }
      handle(e) {
        return e.message.id !== this.message.id
          ? null
          : { key: e.emoji.id || e.emoji.name, value: e };
      }
      postCheck(e, t) {
        return (
          this.users.set(t.id, t),
          this.options.max && ++this.total >= this.options.max
            ? "limit"
            : this.options.maxEmojis &&
              this.collected.size >= this.options.maxEmojis
            ? "emojiLimit"
            : this.options.maxUsers && this.users.size >= this.options.maxUsers
            ? "userLimit"
            : null
        );
      }
      cleanup() {
        this.client.removeListener("messageReactionAdd", this.listener),
          this.client.setMaxListeners(this.client.getMaxListeners() - 1);
      }
    };
  },
  function (e, t, s) {
    const i = s(31),
      n = s(6);
    e.exports = class MessageCollector extends i {
      constructor(e, t, s = {}) {
        super(e.client, t, s),
          (this.channel = e),
          (this.received = 0),
          this.client.setMaxListeners(this.client.getMaxListeners() + 1),
          this.client.on("message", this.listener),
          this.options.max && (this.options.maxProcessed = this.options.max),
          this.options.maxMatches &&
            (this.options.max = this.options.maxMatches),
          (this._reEmitter = (e) => {
            this.emit("message", e);
          }),
          this.on("collect", this._reEmitter);
      }
      on(e, t) {
        "message" === e &&
          (t = n.deprecate(
            t,
            'MessageCollector will soon no longer emit "message", use "collect" instead'
          )),
          super.on(e, t);
      }
      handle(e) {
        return e.channel.id !== this.channel.id
          ? null
          : (this.received++, { key: e.id, value: e });
      }
      postCheck() {
        return this.options.maxMatches &&
          this.collected.size >= this.options.max
          ? "matchesLimit"
          : this.options.max && this.received >= this.options.maxProcessed
          ? "limit"
          : null;
      }
      cleanup() {
        this.removeListener("collect", this._reEmitter),
          this.client.removeListener("message", this.listener),
          this.client.setMaxListeners(this.client.getMaxListeners() - 1);
      }
    };
  },
  function (e, t) {
    e.exports = class PartialGuild {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e }), this.setup(t);
      }
      setup(e) {
        (this.id = e.id),
          (this.name = e.name),
          (this.icon = e.icon),
          (this.splash = e.splash);
      }
    };
  },
  function (e, t, s) {
    const i = s(0);
    e.exports = class PartialGuildChannel {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: e }), this.setup(t);
      }
      setup(e) {
        (this.id = e.id),
          (this.name = e.name),
          (this.type = i.ChannelTypes.TEXT === e.type ? "text" : "voice");
      }
    };
  },
  function (e, t, s) {
    const i = s(3),
      n = s(7),
      r = s(24),
      o = s(23),
      a = {
        ALL: "ALL",
        GUILD: "GUILD",
        CHANNEL: "CHANNEL",
        USER: "USER",
        ROLE: "ROLE",
        INVITE: "INVITE",
        WEBHOOK: "WEBHOOK",
        EMOJI: "EMOJI",
        MESSAGE: "MESSAGE",
      },
      l = {
        ALL: null,
        GUILD_UPDATE: 1,
        CHANNEL_CREATE: 10,
        CHANNEL_UPDATE: 11,
        CHANNEL_DELETE: 12,
        CHANNEL_OVERWRITE_CREATE: 13,
        CHANNEL_OVERWRITE_UPDATE: 14,
        CHANNEL_OVERWRITE_DELETE: 15,
        MEMBER_KICK: 20,
        MEMBER_PRUNE: 21,
        MEMBER_BAN_ADD: 22,
        MEMBER_BAN_REMOVE: 23,
        MEMBER_UPDATE: 24,
        MEMBER_ROLE_UPDATE: 25,
        ROLE_CREATE: 30,
        ROLE_UPDATE: 31,
        ROLE_DELETE: 32,
        INVITE_CREATE: 40,
        INVITE_UPDATE: 41,
        INVITE_DELETE: 42,
        WEBHOOK_CREATE: 50,
        WEBHOOK_UPDATE: 51,
        WEBHOOK_DELETE: 52,
        EMOJI_CREATE: 60,
        EMOJI_UPDATE: 61,
        EMOJI_DELETE: 62,
        MESSAGE_DELETE: 72,
      };
    class GuildAuditLogs {
      constructor(e, t) {
        if (t.users) for (const s of t.users) e.client.dataManager.newUser(s);
        if (((this.webhooks = new i()), t.webhooks))
          for (const s of t.webhooks)
            this.webhooks.set(s.id, new r(e.client, s));
        this.entries = new i();
        for (const s of t.audit_log_entries) {
          const t = new GuildAuditLogsEntry(this, e, s);
          this.entries.set(t.id, t);
        }
      }
      static build(...e) {
        const t = new GuildAuditLogs(...e);
        return Promise.all(t.entries.map((e) => e.target)).then(() => t);
      }
      static targetType(e) {
        return e < 10
          ? a.GUILD
          : e < 20
          ? a.CHANNEL
          : e < 30
          ? a.USER
          : e < 40
          ? a.ROLE
          : e < 50
          ? a.INVITE
          : e < 60
          ? a.WEBHOOK
          : e < 70
          ? a.EMOJI
          : e < 80
          ? a.MESSAGE
          : null;
      }
      static actionType(e) {
        return [
          l.CHANNEL_CREATE,
          l.CHANNEL_OVERWRITE_CREATE,
          l.MEMBER_BAN_REMOVE,
          l.ROLE_CREATE,
          l.INVITE_CREATE,
          l.WEBHOOK_CREATE,
          l.EMOJI_CREATE,
        ].includes(e)
          ? "CREATE"
          : [
              l.CHANNEL_DELETE,
              l.CHANNEL_OVERWRITE_DELETE,
              l.MEMBER_KICK,
              l.MEMBER_PRUNE,
              l.MEMBER_BAN_ADD,
              l.ROLE_DELETE,
              l.INVITE_DELETE,
              l.WEBHOOK_DELETE,
              l.EMOJI_DELETE,
              l.MESSAGE_DELETE,
            ].includes(e)
          ? "DELETE"
          : [
              l.GUILD_UPDATE,
              l.CHANNEL_UPDATE,
              l.CHANNEL_OVERWRITE_UPDATE,
              l.MEMBER_UPDATE,
              l.MEMBER_ROLE_UPDATE,
              l.ROLE_UPDATE,
              l.INVITE_UPDATE,
              l.WEBHOOK_UPDATE,
              l.EMOJI_UPDATE,
            ].includes(e)
          ? "UPDATE"
          : "ALL";
      }
    }
    class GuildAuditLogsEntry {
      constructor(e, t, s) {
        const i = GuildAuditLogs.targetType(s.action_type);
        if (
          ((this.targetType = i),
          (this.actionType = GuildAuditLogs.actionType(s.action_type)),
          (this.action = Object.keys(l).find((e) => l[e] === s.action_type)),
          (this.reason = s.reason || null),
          (this.executor = t.client.users.get(s.user_id)),
          (this.changes = s.changes
            ? s.changes.map((e) => ({
                key: e.key,
                old: e.old_value,
                new: e.new_value,
              }))
            : null),
          (this.id = s.id),
          (this.extra = null),
          s.options)
        )
          if (s.action_type === l.MEMBER_PRUNE)
            this.extra = {
              removed: s.options.members_removed,
              days: s.options.delete_member_days,
            };
          else if (s.action_type === l.MESSAGE_DELETE)
            this.extra = {
              count: s.options.count,
              channel: t.channels.get(s.options.channel_id),
            };
          else
            switch (s.options.type) {
              case "member":
                (this.extra = t.members.get(s.options.id)),
                  this.extra || (this.extra = { id: s.options.id });
                break;
              case "role":
                (this.extra = t.roles.get(s.options.id)),
                  this.extra ||
                    (this.extra = {
                      id: s.options.id,
                      name: s.options.role_name,
                    });
            }
        if ([a.USER, a.GUILD].includes(i))
          this.target = t.client[`${i.toLowerCase()}s`].get(s.target_id);
        else if (i === a.WEBHOOK)
          this.target =
            e.webhooks.get(s.target_id) ||
            new r(
              t.client,
              this.changes.reduce((e, t) => ((e[t.key] = t.new || t.old), e), {
                id: s.target_id,
                guild_id: t.id,
              })
            );
        else if (i === a.INVITE) {
          const e = this.changes.reduce(
            (e, t) => ((e[t.key] = t.new || t.old), e),
            { id: s.target_id, guild: t }
          );
          (e.channel = { id: e.channel_id }),
            (this.target = new o(t.client, e));
        } else
          i === a.MESSAGE
            ? (this.target = t.client.users.get(s.target_id))
            : (this.target = t[`${i.toLowerCase()}s`].get(s.target_id));
      }
      get createdTimestamp() {
        return n.deconstruct(this.id).timestamp;
      }
      get createdAt() {
        return new Date(this.createdTimestamp);
      }
    }
    (GuildAuditLogs.Actions = l),
      (GuildAuditLogs.Targets = a),
      (GuildAuditLogs.Entry = GuildAuditLogsEntry),
      (e.exports = GuildAuditLogs);
  },
  function (e, t) {
    e.exports = class RequestHandler {
      constructor(e) {
        (this.restManager = e), (this.queue = []);
      }
      get globalLimit() {
        return this.restManager.globallyRateLimited;
      }
      set globalLimit(e) {
        this.restManager.globallyRateLimited = e;
      }
      push(e) {
        this.queue.push(e);
      }
      handle() {}
      destroy() {
        this.queue = [];
      }
    };
  },
  function (e, t, s) {
    const i = s(19);
    e.exports = class CategoryChannel extends i {
      constructor(e, t) {
        super(e, t), (this.type = "category");
      }
      get children() {
        return this.guild.channels.filter((e) => e.parentID === this.id);
      }
    };
  },
  function (e, t, s) {
    const i = s(5);
    e.exports = class PermissionOverwrites {
      constructor(e, t) {
        Object.defineProperty(this, "channel", { value: e }),
          t && this.setup(t);
      }
      setup(e) {
        (this.id = e.id),
          (this.type = e.type),
          (this.deny = e.deny),
          (this.allow = e.allow),
          (this.denied = new i(e.deny).freeze()),
          (this.allowed = new i(e.allow).freeze());
      }
      delete(e) {
        return this.channel.client.rest.methods.deletePermissionOverwrites(
          this,
          e
        );
      }
    };
  },
  function (e, t, s) {
    const i = s(12),
      n = s(15),
      r = s(3);
    class DMChannel extends i {
      constructor(e, t) {
        super(e, t),
          (this.type = "dm"),
          (this.messages = new r()),
          (this._typing = new Map());
      }
      setup(e) {
        super.setup(e),
          (this.recipient = this.client.dataManager.newUser(e.recipients[0])),
          (this.lastMessageID = e.last_message_id);
      }
      toString() {
        return this.recipient.toString();
      }
      send() {}
      sendMessage() {}
      sendEmbed() {}
      sendFile() {}
      sendFiles() {}
      sendCode() {}
      fetchMessage() {}
      fetchMessages() {}
      fetchPinnedMessages() {}
      search() {}
      startTyping() {}
      stopTyping() {}
      get typing() {}
      get typingCount() {}
      createCollector() {}
      createMessageCollector() {}
      awaitMessages() {}
      acknowledge() {}
      _cacheMessage() {}
    }
    n.applyToClass(DMChannel, !0, ["bulkDelete"]), (e.exports = DMChannel);
  },
  function (e, t, s) {
    const i = s(19),
      n = s(15),
      r = s(3);
    class TextChannel extends i {
      constructor(e, t) {
        super(e, t),
          (this.type = "text"),
          (this.messages = new r()),
          (this._typing = new Map());
      }
      setup(e) {
        super.setup(e),
          (this.topic = e.topic),
          (this.nsfw = Boolean(e.nsfw)),
          (this.lastMessageID = e.last_message_id);
      }
      get members() {
        const e = new r();
        for (const t of this.guild.members.values())
          this.permissionsFor(t).has("READ_MESSAGES") && e.set(t.id, t);
        return e;
      }
      fetchWebhooks() {
        return this.client.rest.methods.getChannelWebhooks(this);
      }
      setNSFW(e, t) {
        return this.edit({ nsfw: e }, t);
      }
      createWebhook(e, t, s) {
        return "string" == typeof t && t.startsWith("data:")
          ? this.client.rest.methods.createWebhook(this, e, t, s)
          : this.client.resolver
              .resolveImage(t)
              .then((t) =>
                this.client.rest.methods.createWebhook(this, e, t, s)
              );
      }
      send() {}
      sendMessage() {}
      sendEmbed() {}
      sendFile() {}
      sendFiles() {}
      sendCode() {}
      fetchMessage() {}
      fetchMessages() {}
      fetchPinnedMessages() {}
      search() {}
      startTyping() {}
      stopTyping() {}
      get typing() {}
      get typingCount() {}
      createCollector() {}
      createMessageCollector() {}
      awaitMessages() {}
      bulkDelete() {}
      acknowledge() {}
      _cacheMessage() {}
    }
    n.applyToClass(TextChannel, !0), (e.exports = TextChannel);
  },
  function (e, t, s) {
    const i = s(19),
      n = s(3),
      r = s(5);
    e.exports = class VoiceChannel extends i {
      constructor(e, t) {
        super(e, t), (this.members = new n()), (this.type = "voice");
      }
      setup(e) {
        super.setup(e),
          (this.bitrate = 0.001 * e.bitrate),
          (this.userLimit = e.user_limit);
      }
      get connection() {
        const e = this.guild.voiceConnection;
        return e && e.channel.id === this.id ? e : null;
      }
      get full() {
        return this.userLimit > 0 && this.members.size >= this.userLimit;
      }
      get deletable() {
        return (
          super.deletable &&
          this.permissionsFor(this.client.user).has(r.FLAGS.CONNECT)
        );
      }
      get joinable() {
        return !(
          this.client.browser ||
          !this.permissionsFor(this.client.user).has("CONNECT") ||
          (this.full &&
            !this.permissionsFor(this.client.user).has("MOVE_MEMBERS"))
        );
      }
      get speakable() {
        return this.permissionsFor(this.client.user).has("SPEAK");
      }
      setBitrate(e, t) {
        return (e *= 1e3), this.edit({ bitrate: e }, t);
      }
      setUserLimit(e, t) {
        return this.edit({ userLimit: e }, t);
      }
      join() {
        return this.client.browser
          ? Promise.reject(
              new Error("Voice connections are not available in browsers.")
            )
          : this.client.voice.joinChannel(this);
      }
      leave() {
        if (this.client.browser) return;
        const e = this.client.voice.connections.get(this.guild.id);
        e && e.channel.id === this.id && e.disconnect();
      }
    };
  },
  function (e, t, s) {
    (function (t) {
      const i = "undefined" != typeof window,
        n = s(20),
        r = s(0),
        o = s(39),
        a = s(84),
        l = (function () {
          try {
            const e = s(123);
            return e.pack ? e : null;
          } catch (e) {
            return null;
          }
        })(),
        h = (function () {
          if (i) return window.WebSocket;
          try {
            return s(124);
          } catch (e) {
            return s(125);
          }
        })();
      class WebSocketConnection extends n {
        constructor(e, t) {
          super(),
            (this.manager = e),
            (this.client = e.client),
            (this.ws = null),
            (this.sequence = -1),
            (this.status = r.Status.IDLE),
            (this.packetManager = new a(this)),
            (this.lastPingTimestamp = 0),
            (this.ratelimit = {
              queue: [],
              remaining: 120,
              total: 120,
              time: 6e4,
              resetTimer: null,
            }),
            this.connect(t),
            (this.disabledEvents = {}),
            (this.closeSequence = 0),
            (this.expectingClose = !1);
          for (const e of this.client.options.disabledEvents)
            this.disabledEvents[e] = !0;
        }
        triggerReady() {
          this.status !== r.Status.READY
            ? ((this.status = r.Status.READY),
              this.client.emit(r.Events.READY),
              this.packetManager.handleQueue())
            : this.debug("Tried to mark self as ready, but already ready");
        }
        checkIfReady() {
          if (this.status === r.Status.READY || this.status === r.Status.NEARLY)
            return !1;
          let e = 0;
          for (const t of this.client.guilds.values()) t.available || e++;
          if (0 === e) {
            if (
              ((this.status = r.Status.NEARLY),
              !this.client.options.fetchAllMembers)
            )
              return this.triggerReady();
            const e = this.client.guilds.map((e) => e.fetchMembers());
            Promise.all(e)
              .then(() => this.triggerReady())
              .catch((e) => {
                this.debug(`Failed to fetch all members before ready! ${e}`),
                  this.triggerReady();
              });
          }
          return !0;
        }
        debug(e) {
          return (
            e instanceof Error && (e = e.stack),
            this.manager.debug(`[connection] ${e}`)
          );
        }
        unpack(e) {
          return (
            e instanceof ArrayBuffer && (e = t.from(new Uint8Array(e))),
            l && "string" != typeof e
              ? l.unpack(e)
              : (e instanceof t && (e = o.inflateSync(e).toString()),
                JSON.parse(e))
          );
        }
        pack(e) {
          return l ? l.pack(e) : JSON.stringify(e);
        }
        processQueue() {
          if (
            0 !== this.ratelimit.remaining &&
            0 !== this.ratelimit.queue.length
          )
            for (
              this.ratelimit.remaining === this.ratelimit.total &&
              (this.ratelimit.resetTimer = this.client.setTimeout(() => {
                (this.ratelimit.remaining = this.ratelimit.total),
                  this.processQueue();
              }, this.ratelimit.time));
              this.ratelimit.remaining > 0;

            ) {
              const e = this.ratelimit.queue.shift();
              if (!e) return;
              this._send(e), this.ratelimit.remaining--;
            }
        }
        _send(e) {
          this.ws && this.ws.readyState === h.OPEN
            ? this.ws.send(this.pack(e))
            : this.debug(
                `Tried to send packet ${e} but no WebSocket is available!`
              );
        }
        send(e) {
          this.ws && this.ws.readyState === h.OPEN
            ? (this.ratelimit.queue.push(e), this.processQueue())
            : this.debug(
                `Tried to send packet ${e} but no WebSocket is available!`
              );
        }
        connect(e = this.gateway, t = 0, s = !1) {
          if (t) return this.client.setTimeout(() => this.connect(e, 0, s), t);
          if (this.ws && !s)
            return this.debug("WebSocket connection already exists"), !1;
          if ("string" != typeof e)
            return (
              this.debug(`Tried to connect to an invalid gateway: ${e}`), !1
            );
          (this.expectingClose = !1),
            (this.gateway = e),
            this.debug(`Connecting to ${e}`);
          const n = (this.ws = new h(e));
          return (
            i && (n.binaryType = "arraybuffer"),
            (n.onmessage = this.onMessage.bind(this)),
            (n.onopen = this.onOpen.bind(this)),
            (n.onerror = this.onError.bind(this)),
            (n.onclose = this.onClose.bind(this)),
            (this.status = r.Status.CONNECTING),
            !0
          );
        }
        destroy() {
          const e = this.ws;
          return e
            ? (this.heartbeat(-1),
              (this.expectingClose = !0),
              e.close(1e3),
              this.packetManager.handleQueue(),
              (this.ws = null),
              (this.status = r.Status.DISCONNECTED),
              (this.ratelimit.remaining = this.ratelimit.total),
              !0)
            : (this.debug(
                "Attempted to destroy WebSocket but no connection exists!"
              ),
              !1);
        }
        onMessage(e) {
          let t;
          try {
            t = this.unpack(e.data);
          } catch (e) {
            this.emit("debug", e);
          }
          return this.onPacket(t);
        }
        setSequence(e) {
          this.sequence = e > this.sequence ? e : this.sequence;
        }
        onPacket(e) {
          if (!e) return this.debug("Received null packet"), !1;
          switch ((this.client.emit("raw", e), e.op)) {
            case r.OPCodes.HELLO:
              return this.heartbeat(e.d.heartbeat_interval);
            case r.OPCodes.RECONNECT:
              return this.reconnect();
            case r.OPCodes.INVALID_SESSION:
              return (
                e.d || (this.sessionID = null),
                (this.sequence = -1),
                this.debug(
                  "Session invalidated -- will identify with a new session"
                ),
                this.identify(e.d ? 2500 : 0)
              );
            case r.OPCodes.HEARTBEAT_ACK:
              return this.ackHeartbeat();
            case r.OPCodes.HEARTBEAT:
              return this.heartbeat();
            default:
              return this.packetManager.handle(e);
          }
        }
        onOpen(e) {
          e && e.target && e.target.url && (this.gateway = e.target.url),
            this.debug(`Connected to gateway ${this.gateway}`),
            this.identify();
        }
        reconnect() {
          this.debug("Attemping to reconnect in 5500ms..."),
            this.client.emit(r.Events.RECONNECTING),
            this.connect(this.gateway, 5500, !0);
        }
        onError(e) {
          e && "uWs client connection error" === e.message
            ? this.reconnect()
            : this.client.emit(r.Events.ERROR, e);
        }
        onClose(e) {
          if (
            (this.debug(
              `${
                this.expectingClose ? "Client" : "Server"
              } closed the WebSocket connection: ${e.code}`
            ),
            (this.closeSequence = this.sequence),
            this.emit("close", e),
            this.heartbeat(-1),
            1e3 === e.code ? this.expectingClose : r.WSCodes[e.code])
          )
            return (
              (this.expectingClose = !1),
              this.client.emit(r.Events.DISCONNECT, e),
              this.debug(r.WSCodes[e.code]),
              void this.destroy()
            );
          (this.expectingClose = !1), this.reconnect();
        }
        ackHeartbeat() {
          this.debug(
            `Heartbeat acknowledged, latency of ${
              Date.now() - this.lastPingTimestamp
            }ms`
          ),
            this.client._pong(this.lastPingTimestamp);
        }
        heartbeat(e) {
          isNaN(e)
            ? (this.debug("Sending a heartbeat"),
              (this.lastPingTimestamp = Date.now()),
              this.send({ op: r.OPCodes.HEARTBEAT, d: this.sequence }))
            : -1 === e
            ? (this.debug("Clearing heartbeat interval"),
              this.client.clearInterval(this.heartbeatInterval),
              (this.heartbeatInterval = null))
            : (this.debug(`Setting a heartbeat interval for ${e}ms`),
              (this.heartbeatInterval = this.client.setInterval(
                () => this.heartbeat(),
                e
              )));
        }
        identify(e) {
          return e
            ? this.client.setTimeout(this.identify.bind(this), e)
            : this.sessionID
            ? this.identifyResume()
            : this.identifyNew();
        }
        identifyNew() {
          if (!this.client.token)
            return void this.debug(
              "No token available to identify a new session with"
            );
          const e = Object.assign(
              { token: this.client.token },
              this.client.options.ws
            ),
            { shardId: t, shardCount: s } = this.client.options;
          s > 0 && (e.shard = [Number(t), Number(s)]),
            this.debug("Identifying as a new session"),
            this.send({ op: r.OPCodes.IDENTIFY, d: e });
        }
        identifyResume() {
          if (!this.sessionID)
            return (
              this.debug(
                "Warning: wanted to resume but session ID not available; identifying as a new session instead"
              ),
              this.identifyNew()
            );
          this.debug(`Attempting to resume session ${this.sessionID}`);
          const e = {
            token: this.client.token,
            session_id: this.sessionID,
            seq: this.sequence,
          };
          return this.send({ op: r.OPCodes.RESUME, d: e });
        }
      }
      (WebSocketConnection.ENCODING = l ? "etf" : "json"),
        (WebSocketConnection.WebSocket = h),
        (e.exports = WebSocketConnection);
    }.call(t, s(13).Buffer));
  },
  function (e, t, s) {
    const i = s(10),
      n = s(3),
      r = s(56),
      o = s(57),
      a = s(0),
      l = s(6);
    class ClientUser extends i {
      setup(e) {
        if (
          (super.setup(e),
          (this.verified = e.verified),
          (this.email = e.email),
          (this.localPresence = {}),
          (this._typing = new Map()),
          (this.friends = new n()),
          (this.blocked = new n()),
          (this.notes = new n()),
          (this.premium = "boolean" == typeof e.premium ? e.premium : null),
          (this.mfaEnabled =
            "boolean" == typeof e.mfa_enabled ? e.mfa_enabled : null),
          (this.mobile = "boolean" == typeof e.mobile ? e.mobile : null),
          (this.settings = e.user_settings
            ? new r(this, e.user_settings)
            : null),
          (this.guildSettings = new n()),
          e.user_guild_settings)
        )
          for (const t of e.user_guild_settings)
            this.guildSettings.set(t.guild_id, new o(t, this.client));
      }
      edit(e) {
        return this.client.rest.methods.updateCurrentUser(e);
      }
      setUsername(e, t) {
        return this.client.rest.methods.updateCurrentUser({ username: e }, t);
      }
      setEmail(e, t) {
        return this.client.rest.methods.updateCurrentUser({ email: e }, t);
      }
      setPassword(e, t) {
        return this.client.rest.methods.updateCurrentUser({ password: e }, t);
      }
      setAvatar(e) {
        return this.client.resolver
          .resolveImage(e)
          .then((e) =>
            this.client.rest.methods.updateCurrentUser({ avatar: e })
          );
      }
      setPresence(e) {
        return new Promise((t) => {
          let s = this.localPresence.status || this.presence.status,
            i = this.localPresence.game,
            n = this.localPresence.afk || this.presence.afk;
          if (
            (!i &&
              this.presence.game &&
              (i = {
                name: this.presence.game.name,
                type: this.presence.game.type,
                url: this.presence.game.url,
              }),
            e.status)
          ) {
            if ("string" != typeof e.status)
              throw new TypeError("Status must be a string");
            this.bot
              ? (s = e.status)
              : (this.settings.update(a.UserSettingsMap.status, e.status),
                (s = "invisible"));
          }
          e.game
            ? (((i = e.game).type =
                i.url && void 0 === i.type ? 1 : i.type || 0),
              "string" == typeof i.type &&
                (i.type = a.ActivityTypes.indexOf(i.type.toUpperCase())))
            : void 0 !== e.game && (i = null),
            void 0 !== e.afk && (n = e.afk),
            (n = Boolean(n)),
            (this.localPresence = { status: s, game: i, afk: n }),
            (this.localPresence.since = 0),
            (this.localPresence.game = this.localPresence.game || null),
            this.client.ws.send({ op: 3, d: this.localPresence }),
            this.client._setPresence(this.id, this.localPresence),
            t(this);
        });
      }
      setStatus(e) {
        return this.setPresence({ status: e });
      }
      setGame(e, t) {
        return e
          ? this.setPresence({ game: { name: e, url: t } })
          : this.setPresence({ game: null });
      }
      setActivity(e, { url: t, type: s } = {}) {
        return e
          ? this.setPresence({ game: { name: e, type: s, url: t } }).then(
              (e) => e.presence
            )
          : this.setPresence({ game: null });
      }
      setAFK(e) {
        return this.setPresence({ afk: e });
      }
      fetchMentions(e = {}) {
        return this.client.rest.methods.fetchMentions(e);
      }
      addFriend(e) {
        return (
          (e = this.client.resolver.resolveUser(e)),
          this.client.rest.methods.addFriend(e)
        );
      }
      removeFriend(e) {
        return (
          (e = this.client.resolver.resolveUser(e)),
          this.client.rest.methods.removeFriend(e)
        );
      }
      createGuild(e, t, s = null) {
        return "string" == typeof s && s.startsWith("data:")
          ? this.client.rest.methods.createGuild({
              name: e,
              icon: s,
              region: t,
            })
          : this.client.resolver
              .resolveImage(s)
              .then((s) =>
                this.client.rest.methods.createGuild({
                  name: e,
                  icon: s,
                  region: t,
                })
              );
      }
      createGroupDM(e) {
        return this.client.rest.methods.createGroupDM({
          recipients: e.map((e) => this.client.resolver.resolveUserID(e.user)),
          accessTokens: e.map((e) => e.accessToken),
          nicks: e.reduce(
            (e, t) => (t.nick && (e[t.user ? t.user.id : t.id] = t.nick), e),
            {}
          ),
        });
      }
      acceptInvite(e) {
        return this.client.rest.methods.acceptInvite(e);
      }
    }
    (ClientUser.prototype.setGame = l.deprecate(
      ClientUser.prototype.setGame,
      "ClientUser#setGame: use ClientUser#setActivity instead"
    )),
      (ClientUser.prototype.addFriend = l.deprecate(
        ClientUser.prototype.addFriend,
        "ClientUser#addFriend: userbot methods will be removed"
      )),
      (ClientUser.prototype.removeFriend = l.deprecate(
        ClientUser.prototype.removeFriend,
        "ClientUser#removeFriend: userbot methods will be removed"
      )),
      (ClientUser.prototype.setPassword = l.deprecate(
        ClientUser.prototype.setPassword,
        "ClientUser#setPassword: userbot methods will be removed"
      )),
      (ClientUser.prototype.setEmail = l.deprecate(
        ClientUser.prototype.setEmail,
        "ClientUser#setEmail: userbot methods will be removed"
      )),
      (ClientUser.prototype.fetchMentions = l.deprecate(
        ClientUser.prototype.fetchMentions,
        "ClientUser#fetchMentions: userbot methods will be removed"
      )),
      (e.exports = ClientUser);
  },
  function (e, t, s) {
    const i = s(0),
      n = s(4);
    e.exports = class ClientUserSettings {
      constructor(e, t) {
        (this.user = e), this.patch(t);
      }
      patch(e) {
        for (const t of Object.keys(i.UserSettingsMap)) {
          const s = i.UserSettingsMap[t];
          e.hasOwnProperty(t) &&
            ("function" == typeof s
              ? (this[s.name] = s(e[t]))
              : (this[s] = e[t]));
        }
      }
      update(e, t) {
        return this.user.client.rest.methods.patchUserSettings({ [e]: t });
      }
      setGuildPosition(e, t, s) {
        const i = Object.assign([], this.guildPositions);
        return (
          n.moveElementInArray(i, e.id, t, s),
          this.update("guild_positions", i).then(() => e)
        );
      }
      addRestrictedGuild(e) {
        const t = Object.assign([], this.restrictedGuilds);
        return t.includes(e.id)
          ? Promise.reject(new Error("Guild is already restricted"))
          : (t.push(e.id), this.update("restricted_guilds", t).then(() => e));
      }
      removeRestrictedGuild(e) {
        const t = Object.assign([], this.restrictedGuilds),
          s = t.indexOf(e.id);
        return s < 0
          ? Promise.reject(new Error("Guild is not restricted"))
          : (t.splice(s, 1), this.update("restricted_guilds", t).then(() => e));
      }
    };
  },
  function (e, t, s) {
    const i = s(0),
      n = s(3),
      r = s(86);
    e.exports = class ClientUserGuildSettings {
      constructor(e, t) {
        Object.defineProperty(this, "client", { value: t }),
          (this.guildID = e.guild_id),
          (this.channelOverrides = new n()),
          this.patch(e);
      }
      patch(e) {
        for (const t of Object.keys(i.UserGuildSettingsMap)) {
          const s = i.UserGuildSettingsMap[t];
          if (e.hasOwnProperty(t))
            if ("channel_overrides" === t)
              for (const s of e[t])
                this.channelOverrides.set(s.channel_id, new r(s));
            else
              "function" == typeof s
                ? (this[s.name] = s(e[t]))
                : (this[s] = e[t]);
        }
      }
      update(e, t) {
        return this.client.rest.methods.patchClientUserGuildSettings(
          this.guildID,
          { [e]: t }
        );
      }
    };
  },
  function (e, t, s) {
    const i = "undefined" != typeof window,
      n = s(59);
    (e.exports = n),
      i
        ? (window.Discord = n)
        : i ||
          console.warn(
            "Warning: Attempting to use browser version of Discord.js in a non-browser environment!"
          );
  },
  function (e, t, s) {
    const i = s(4);
    e.exports = {
      Client: s(70),
      Shard: s(159),
      ShardClientUtil: s(160),
      ShardingManager: s(161),
      WebhookClient: s(162),
      Collection: s(3),
      Constants: s(0),
      DiscordAPIError: s(34),
      EvaluatedPermissions: s(5),
      Permissions: s(5),
      Snowflake: s(7),
      SnowflakeUtil: s(7),
      Util: i,
      util: i,
      version: s(37).version,
      escapeMarkdown: i.escapeMarkdown,
      fetchRecommendedShards: i.fetchRecommendedShards,
      splitMessage: i.splitMessage,
      Attachment: s(21),
      CategoryChannel: s(49),
      Channel: s(12),
      ClientUser: s(55),
      ClientUserSettings: s(56),
      Collector: s(31),
      DMChannel: s(51),
      Emoji: s(17),
      Game: s(11).Game,
      GroupDMChannel: s(33),
      Guild: s(22),
      GuildAuditLogs: s(47),
      GuildChannel: s(19),
      GuildMember: s(18),
      Invite: s(23),
      Message: s(16),
      MessageAttachment: s(41),
      MessageCollector: s(44),
      MessageEmbed: s(27),
      MessageMentions: s(40),
      MessageReaction: s(42),
      OAuth2Application: s(32),
      ClientOAuth2Application: s(32),
      PartialGuild: s(45),
      PartialGuildChannel: s(46),
      PermissionOverwrites: s(50),
      Presence: s(11).Presence,
      ReactionEmoji: s(30),
      ReactionCollector: s(43),
      RichEmbed: s(14),
      Role: s(8),
      TextChannel: s(52),
      User: s(10),
      VoiceChannel: s(53),
      Webhook: s(24),
    };
  },
  function (e, t, s) {
    "use strict";
    (t.byteLength = function (e) {
      var t = h(e),
        s = t[0],
        i = t[1];
      return (3 * (s + i)) / 4 - i;
    }),
      (t.toByteArray = function (e) {
        for (
          var t,
            s = h(e),
            i = s[0],
            o = s[1],
            a = new r(
              (function (e, t, s) {
                return (3 * (t + s)) / 4 - s;
              })(0, i, o)
            ),
            l = 0,
            c = o > 0 ? i - 4 : i,
            u = 0;
          u < c;
          u += 4
        )
          (t =
            (n[e.charCodeAt(u)] << 18) |
            (n[e.charCodeAt(u + 1)] << 12) |
            (n[e.charCodeAt(u + 2)] << 6) |
            n[e.charCodeAt(u + 3)]),
            (a[l++] = (t >> 16) & 255),
            (a[l++] = (t >> 8) & 255),
            (a[l++] = 255 & t);
        2 === o &&
          ((t = (n[e.charCodeAt(u)] << 2) | (n[e.charCodeAt(u + 1)] >> 4)),
          (a[l++] = 255 & t));
        1 === o &&
          ((t =
            (n[e.charCodeAt(u)] << 10) |
            (n[e.charCodeAt(u + 1)] << 4) |
            (n[e.charCodeAt(u + 2)] >> 2)),
          (a[l++] = (t >> 8) & 255),
          (a[l++] = 255 & t));
        return a;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, s = e.length, n = s % 3, r = [], o = 0, a = s - n;
          o < a;
          o += 16383
        )
          r.push(c(e, o, o + 16383 > a ? a : o + 16383));
        1 === n
          ? ((t = e[s - 1]), r.push(i[t >> 2] + i[(t << 4) & 63] + "=="))
          : 2 === n &&
            ((t = (e[s - 2] << 8) + e[s - 1]),
            r.push(i[t >> 10] + i[(t >> 4) & 63] + i[(t << 2) & 63] + "="));
        return r.join("");
      });
    for (
      var i = [],
        n = [],
        r = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a = 0,
        l = o.length;
      a < l;
      ++a
    )
      (i[a] = o[a]), (n[o.charCodeAt(a)] = a);
    function h(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var s = e.indexOf("=");
      return -1 === s && (s = t), [s, s === t ? 0 : 4 - (s % 4)];
    }
    function c(e, t, s) {
      for (var n, r, o = [], a = t; a < s; a += 3)
        (n =
          ((e[a] << 16) & 16711680) +
          ((e[a + 1] << 8) & 65280) +
          (255 & e[a + 2])),
          o.push(
            i[((r = n) >> 18) & 63] +
              i[(r >> 12) & 63] +
              i[(r >> 6) & 63] +
              i[63 & r]
          );
      return o.join("");
    }
    (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
  },
  function (e, t) {
    (t.read = function (e, t, s, i, n) {
      var r,
        o,
        a = 8 * n - i - 1,
        l = (1 << a) - 1,
        h = l >> 1,
        c = -7,
        u = s ? n - 1 : 0,
        d = s ? -1 : 1,
        m = e[t + u];
      for (
        u += d, r = m & ((1 << -c) - 1), m >>= -c, c += a;
        c > 0;
        r = 256 * r + e[t + u], u += d, c -= 8
      );
      for (
        o = r & ((1 << -c) - 1), r >>= -c, c += i;
        c > 0;
        o = 256 * o + e[t + u], u += d, c -= 8
      );
      if (0 === r) r = 1 - h;
      else {
        if (r === l) return o ? NaN : (1 / 0) * (m ? -1 : 1);
        (o += Math.pow(2, i)), (r -= h);
      }
      return (m ? -1 : 1) * o * Math.pow(2, r - i);
    }),
      (t.write = function (e, t, s, i, n, r) {
        var o,
          a,
          l,
          h = 8 * r - n - 1,
          c = (1 << h) - 1,
          u = c >> 1,
          d = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          m = i ? 0 : r - 1,
          p = i ? 1 : -1,
          g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((a = isNaN(t) ? 1 : 0), (o = c))
              : ((o = Math.floor(Math.log(t) / Math.LN2)),
                t * (l = Math.pow(2, -o)) < 1 && (o--, (l *= 2)),
                (t += o + u >= 1 ? d / l : d * Math.pow(2, 1 - u)) * l >= 2 &&
                  (o++, (l /= 2)),
                o + u >= c
                  ? ((a = 0), (o = c))
                  : o + u >= 1
                  ? ((a = (t * l - 1) * Math.pow(2, n)), (o += u))
                  : ((a = t * Math.pow(2, u - 1) * Math.pow(2, n)), (o = 0)));
          n >= 8;
          e[s + m] = 255 & a, m += p, a /= 256, n -= 8
        );
        for (
          o = (o << n) | a, h += n;
          h > 0;
          e[s + m] = 255 & o, m += p, o /= 256, h -= 8
        );
        e[s + m - p] |= 128 * g;
      });
  },
  function (e, t) {
    var s = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == s.call(e);
      };
  },
  function (e, t, s) {
    e.exports = s(64);
  },
  function (e, t, s) {
    const i = "undefined" != typeof window,
      n = s(36),
      r = s(i ? 67 : 68);
    class Snekfetch extends r.Extension {
      constructor(e, t, s = {}) {
        super(),
          (this.options = Object.assign(
            { version: 1, qs: n, followRedirects: !0 },
            s
          )),
          (this.request = r.buildRequest.call(this, e, t, s)),
          s.headers && this.set(s.headers),
          s.query && this.query(s.query),
          s.data && this.send(s.data);
      }
      query(e, t) {
        if (
          (this.request.query || (this.request.query = {}),
          null !== e && "object" == typeof e)
        )
          for (const [t, s] of Object.entries(e)) this.query(t, s);
        else this.request.query[e] = t;
        return this;
      }
      set(e, t) {
        if (null !== e && "object" == typeof e)
          for (const t of Object.keys(e)) this.set(t, e[t]);
        else this.request.setHeader(e, t);
        return this;
      }
      attach(...e) {
        const t =
          this.data instanceof r.FormData
            ? this.data
            : (this.data = new r.FormData());
        if ("object" == typeof e[0])
          for (const [t, s] of Object.entries(e[0])) this.attach(t, s);
        else t.append(...e);
        return this;
      }
      send(e) {
        if (e instanceof r.FormData || r.shouldSendRaw(e)) this.data = e;
        else if (null !== e && "object" == typeof e) {
          const t = this.request.getHeader("content-type");
          let s;
          t
            ? t.includes("json")
              ? (s = JSON.stringify)
              : t.includes("urlencoded") && (s = this.options.qs.stringify)
            : (this.set("Content-Type", "application/json"),
              (s = JSON.stringify)),
            (this.data = s(e));
        } else this.data = e;
        return this;
      }
      then(e, t) {
        return this._response
          ? this._response.then(e, t)
          : (this._response = r.finalizeRequest
              .call(this)
              .then(({ response: e, raw: t, redirect: s, headers: i }) => {
                if (s) {
                  let t = this.request.method;
                  [301, 302].includes(e.statusCode)
                    ? ("HEAD" !== t && (t = "GET"), (this.data = null))
                    : 303 === e.statusCode && (t = "GET");
                  const i = this.request.getHeaders();
                  return (
                    delete i.host,
                    new Snekfetch(t, s, {
                      data: this.data,
                      headers: i,
                      version: this.options.version,
                    })
                  );
                }
                const n = e.statusCode || e.status,
                  o = this,
                  a = {
                    request: this.request,
                    get body() {
                      delete a.body;
                      const e = this.headers["content-type"];
                      if (e && e.includes("application/json"))
                        try {
                          a.body = JSON.parse(a.text);
                        } catch (e) {
                          a.body = a.text;
                        }
                      else
                        e && e.includes("application/x-www-form-urlencoded")
                          ? (a.body = o.options.qs.parse(a.text))
                          : (a.body = t);
                      return a.body;
                    },
                    text: t.toString(),
                    ok: n >= 200 && n < 400,
                    headers: i || e.headers,
                    status: n,
                    statusText: e.statusText || r.STATUS_CODES[e.statusCode],
                  };
                if (a.ok) return a;
                {
                  const e = new Error(`${a.status} ${a.statusText}`.trim());
                  return Object.assign(e, a), Promise.reject(e);
                }
              })
              .then(e, t));
      }
      catch(e) {
        return this.then(null, e);
      }
      end(e) {
        return this.then(
          (t) => (e ? e(null, t) : t),
          (t) => (e ? e(t, t.status ? t : null) : Promise.reject(t))
        );
      }
      _finalizeRequest() {
        if (
          this.request &&
          ("HEAD" !== this.request.method &&
            this.set("Accept-Encoding", "gzip, deflate"),
          this.data &&
            this.data.getBoundary &&
            this.set(
              "Content-Type",
              `multipart/form-data; boundary=${this.data.getBoundary()}`
            ),
          this.request.query)
        ) {
          const [e, t] = this.request.path.split("?");
          this.request.path = `${e}?${this.options.qs.stringify(
            this.request.query
          )}${t ? `&${t}` : ""}`;
        }
      }
    }
    Snekfetch.METHODS = r.METHODS.concat("BREW").filter(
      (e) => "M-SEARCH" !== e
    );
    for (const e of Snekfetch.METHODS)
      Snekfetch[e.toLowerCase()] = function (t, s) {
        return new (this.prototype instanceof Snekfetch ? this : Snekfetch)(
          e,
          t,
          s
        );
      };
    e.exports = Snekfetch;
  },
  function (e, t, s) {
    "use strict";
    function i(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.exports = function (e, t, s, r) {
      (t = t || "&"), (s = s || "=");
      var o = {};
      if ("string" != typeof e || 0 === e.length) return o;
      var a = /\+/g;
      e = e.split(t);
      var l = 1e3;
      r && "number" == typeof r.maxKeys && (l = r.maxKeys);
      var h = e.length;
      l > 0 && h > l && (h = l);
      for (var c = 0; c < h; ++c) {
        var u,
          d,
          m,
          p,
          g = e[c].replace(a, "%20"),
          f = g.indexOf(s);
        f >= 0
          ? ((u = g.substr(0, f)), (d = g.substr(f + 1)))
          : ((u = g), (d = "")),
          (m = decodeURIComponent(u)),
          (p = decodeURIComponent(d)),
          i(o, m) ? (n(o[m]) ? o[m].push(p) : (o[m] = [o[m], p])) : (o[m] = p);
      }
      return o;
    };
    var n =
      Array.isArray ||
      function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
  },
  function (e, t, s) {
    "use strict";
    var i = function (e) {
      switch (typeof e) {
        case "string":
          return e;
        case "boolean":
          return e ? "true" : "false";
        case "number":
          return isFinite(e) ? e : "";
        default:
          return "";
      }
    };
    e.exports = function (e, t, s, a) {
      return (
        (t = t || "&"),
        (s = s || "="),
        null === e && (e = void 0),
        "object" == typeof e
          ? r(o(e), function (o) {
              var a = encodeURIComponent(i(o)) + s;
              return n(e[o])
                ? r(e[o], function (e) {
                    return a + encodeURIComponent(i(e));
                  }).join(t)
                : a + encodeURIComponent(i(e[o]));
            }).join(t)
          : a
          ? encodeURIComponent(i(a)) + s + encodeURIComponent(i(e))
          : ""
      );
    };
    var n =
      Array.isArray ||
      function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
    function r(e, t) {
      if (e.map) return e.map(t);
      for (var s = [], i = 0; i < e.length; i++) s.push(t(e[i], i));
      return s;
    }
    var o =
      Object.keys ||
      function (e) {
        var t = [];
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) && t.push(s);
        return t;
      };
  },
  function (e, t) {
    e.exports = {
      buildRequest: function (e, t) {
        return {
          method: e,
          path: t,
          redirect: this.options.followRedirects ? "follow" : "manual",
          headers: {},
          setHeader(e, t) {
            this.headers[e.toLowerCase()] = t;
          },
          getHeader(e) {
            return this.headers[e.toLowerCase()];
          },
        };
      },
      finalizeRequest: function () {
        return (
          this._finalizeRequest(),
          this.data && (this.request.body = this.data),
          window.fetch(this.request.path, this.request).then((e) =>
            e.text().then((t) => {
              const s = {};
              for (const [t, i] of e.headers.entries()) s[t.toLowerCase()] = i;
              return { response: e, raw: t, headers: s };
            })
          )
        );
      },
      shouldSendRaw: () => !1,
      METHODS: [
        "GET",
        "HEAD",
        "POST",
        "PUT",
        "DELETE",
        "CONNECT",
        "OPTIONS",
        "PATCH",
      ],
      STATUS_CODES: {},
      Extension: Object,
      FormData: window.FormData,
    };
  },
  function (e, t) {},
  function (e, t) {
    (t.endianness = function () {
      return "LE";
    }),
      (t.hostname = function () {
        return "undefined" != typeof location ? location.hostname : "";
      }),
      (t.loadavg = function () {
        return [];
      }),
      (t.uptime = function () {
        return 0;
      }),
      (t.freemem = function () {
        return Number.MAX_VALUE;
      }),
      (t.totalmem = function () {
        return Number.MAX_VALUE;
      }),
      (t.cpus = function () {
        return [];
      }),
      (t.type = function () {
        return "Browser";
      }),
      (t.release = function () {
        return "undefined" != typeof navigator ? navigator.appVersion : "";
      }),
      (t.networkInterfaces = t.getNetworkInterfaces =
        function () {
          return {};
        }),
      (t.arch = function () {
        return "javascript";
      }),
      (t.platform = function () {
        return "browser";
      }),
      (t.tmpdir = t.tmpDir =
        function () {
          return "/tmp";
        }),
      (t.EOL = "\n"),
      (t.homedir = function () {
        return "/";
      });
  },
  function (module, exports, __webpack_require__) {
    (function (process) {
      const EventEmitter = __webpack_require__(20),
        Constants = __webpack_require__(0),
        Permissions = __webpack_require__(5),
        Util = __webpack_require__(4),
        RESTManager = __webpack_require__(38),
        ClientDataManager = __webpack_require__(82),
        ClientManager = __webpack_require__(83),
        ClientDataResolver = __webpack_require__(28),
        ClientVoiceManager = __webpack_require__(126),
        WebSocketManager = __webpack_require__(127),
        ActionsManager = __webpack_require__(128),
        Collection = __webpack_require__(3),
        Presence = __webpack_require__(11).Presence,
        ShardClientUtil = __webpack_require__(157),
        VoiceBroadcast = __webpack_require__(158);
      class Client extends EventEmitter {
        constructor(e = {}) {
          super(),
            !e.shardId &&
              "SHARD_ID" in Object({ __DISCORD_WEBPACK__: "true" }) &&
              (e.shardId = Number(
                Object({ __DISCORD_WEBPACK__: "true" }).SHARD_ID
              )),
            !e.shardCount &&
              "SHARD_COUNT" in Object({ __DISCORD_WEBPACK__: "true" }) &&
              (e.shardCount = Number(
                Object({ __DISCORD_WEBPACK__: "true" }).SHARD_COUNT
              )),
            (this.options = Util.mergeDefault(Constants.DefaultOptions, e)),
            this._validateOptions(),
            (this.rest = new RESTManager(this)),
            (this.dataManager = new ClientDataManager(this)),
            (this.manager = new ClientManager(this)),
            (this.ws = new WebSocketManager(this)),
            (this.resolver = new ClientDataResolver(this)),
            (this.actions = new ActionsManager(this)),
            (this.voice = this.browser ? null : new ClientVoiceManager(this)),
            (this.shard = process.send
              ? ShardClientUtil.singleton(this)
              : null),
            (this.users = new Collection()),
            (this.guilds = new Collection()),
            (this.channels = new Collection()),
            (this.presences = new Collection()),
            Object.defineProperty(this, "token", { writable: !0 }),
            !this.token &&
            "CLIENT_TOKEN" in Object({ __DISCORD_WEBPACK__: "true" })
              ? (this.token = Object({
                  __DISCORD_WEBPACK__: "true",
                }).CLIENT_TOKEN)
              : (this.token = null),
            (this.user = null),
            (this.readyAt = null),
            (this.broadcasts = []),
            (this.pings = []),
            (this._timeouts = new Set()),
            (this._intervals = new Set()),
            this.options.messageSweepInterval > 0 &&
              this.setInterval(
                this.sweepMessages.bind(this),
                1e3 * this.options.messageSweepInterval
              );
        }
        get _pingTimestamp() {
          return this.ws.connection ? this.ws.connection.lastPingTimestamp : 0;
        }
        get status() {
          return this.ws.connection.status;
        }
        get uptime() {
          return this.readyAt ? Date.now() - this.readyAt : null;
        }
        get ping() {
          return this.pings.reduce((e, t) => e + t, 0) / this.pings.length;
        }
        get voiceConnections() {
          return this.browser ? new Collection() : this.voice.connections;
        }
        get emojis() {
          const e = new Collection();
          for (const t of this.guilds.values())
            for (const s of t.emojis.values()) e.set(s.id, s);
          return e;
        }
        get readyTimestamp() {
          return this.readyAt ? this.readyAt.getTime() : null;
        }
        get browser() {
          return "undefined" != typeof window;
        }
        createVoiceBroadcast() {
          const e = new VoiceBroadcast(this);
          return this.broadcasts.push(e), e;
        }
        login(e = this.token) {
          return this.rest.methods.login(e);
        }
        destroy() {
          for (const e of this._timeouts) clearTimeout(e);
          for (const e of this._intervals) clearInterval(e);
          return (
            this._timeouts.clear(),
            this._intervals.clear(),
            this.manager.destroy()
          );
        }
        syncGuilds(e = this.guilds) {
          this.user.bot ||
            this.ws.send({
              op: 12,
              d: e instanceof Collection ? e.keyArray() : e.map((e) => e.id),
            });
        }
        fetchUser(e, t = !0) {
          return this.users.has(e)
            ? Promise.resolve(this.users.get(e))
            : this.rest.methods.getUser(e, t);
        }
        fetchInvite(e) {
          const t = this.resolver.resolveInviteCode(e);
          return this.rest.methods.getInvite(t);
        }
        fetchWebhook(e, t) {
          return this.rest.methods.getWebhook(e, t);
        }
        fetchVoiceRegions() {
          return this.rest.methods.fetchVoiceRegions();
        }
        sweepMessages(e = this.options.messageCacheLifetime) {
          if ("number" != typeof e || isNaN(e))
            throw new TypeError("The lifetime must be a number.");
          if (e <= 0)
            return (
              this.emit(
                "debug",
                "Didn't sweep messages - lifetime is unlimited"
              ),
              -1
            );
          const t = 1e3 * e,
            s = Date.now();
          let i = 0,
            n = 0;
          for (const e of this.channels.values())
            e.messages &&
              (i++,
              (n += e.messages.sweep(
                (e) => s - (e.editedTimestamp || e.createdTimestamp) > t
              )));
          return (
            this.emit(
              "debug",
              `Swept ${n} messages older than ${e} seconds in ${i} text-based channels`
            ),
            n
          );
        }
        fetchApplication(e = "@me") {
          return (
            "@me" !== e &&
              process.emitWarning(
                'fetchApplication: use "@me" as an argument',
                "DeprecationWarning"
              ),
            this.rest.methods.getApplication(e)
          );
        }
        generateInvite(e) {
          return (
            (e = void 0 === e ? 0 : Permissions.resolve(e)),
            this.fetchApplication().then(
              (t) =>
                `https://discordapp.com/oauth2/authorize?client_id=${t.id}&permissions=${e}&scope=bot`
            )
          );
        }
        setTimeout(e, t, ...s) {
          const i = setTimeout(() => {
            e(...s), this._timeouts.delete(i);
          }, t);
          return this._timeouts.add(i), i;
        }
        clearTimeout(e) {
          clearTimeout(e), this._timeouts.delete(e);
        }
        setInterval(e, t, ...s) {
          const i = setInterval(e, t, ...s);
          return this._intervals.add(i), i;
        }
        clearInterval(e) {
          clearInterval(e), this._intervals.delete(e);
        }
        _pong(e) {
          this.pings.unshift(Date.now() - e),
            this.pings.length > 3 && (this.pings.length = 3),
            (this.ws.lastHeartbeatAck = !0);
        }
        _setPresence(e, t) {
          this.presences.has(e)
            ? this.presences.get(e).update(t)
            : this.presences.set(e, new Presence(t, this));
        }
        _eval(script) {
          return eval(script);
        }
        _validateOptions(e = this.options) {
          if ("number" != typeof e.shardCount || isNaN(e.shardCount))
            throw new TypeError("The shardCount option must be a number.");
          if ("number" != typeof e.shardId || isNaN(e.shardId))
            throw new TypeError("The shardId option must be a number.");
          if (e.shardCount < 0)
            throw new RangeError("The shardCount option must be at least 0.");
          if (e.shardId < 0)
            throw new RangeError("The shardId option must be at least 0.");
          if (0 !== e.shardId && e.shardId >= e.shardCount)
            throw new RangeError(
              "The shardId option must be less than shardCount."
            );
          if (
            "number" != typeof e.messageCacheMaxSize ||
            isNaN(e.messageCacheMaxSize)
          )
            throw new TypeError(
              "The messageCacheMaxSize option must be a number."
            );
          if (
            "number" != typeof e.messageCacheLifetime ||
            isNaN(e.messageCacheLifetime)
          )
            throw new TypeError(
              "The messageCacheLifetime option must be a number."
            );
          if (
            "number" != typeof e.messageSweepInterval ||
            isNaN(e.messageSweepInterval)
          )
            throw new TypeError(
              "The messageSweepInterval option must be a number."
            );
          if ("boolean" != typeof e.fetchAllMembers)
            throw new TypeError(
              "The fetchAllMembers option must be a boolean."
            );
          if ("boolean" != typeof e.disableEveryone)
            throw new TypeError(
              "The disableEveryone option must be a boolean."
            );
          if (
            "number" != typeof e.restWsBridgeTimeout ||
            isNaN(e.restWsBridgeTimeout)
          )
            throw new TypeError(
              "The restWsBridgeTimeout option must be a number."
            );
          if (!(e.disabledEvents instanceof Array))
            throw new TypeError("The disabledEvents option must be an Array.");
        }
      }
      module.exports = Client;
    }.call(exports, __webpack_require__(9)));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e &&
        "object" == typeof e &&
        "function" == typeof e.copy &&
        "function" == typeof e.fill &&
        "function" == typeof e.readUInt8
      );
    };
  },
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
          (e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            }));
        })
      : (e.exports = function (e, t) {
          e.super_ = t;
          var s = function () {};
          (s.prototype = t.prototype),
            (e.prototype = new s()),
            (e.prototype.constructor = e);
        });
  },
  function (e, t, s) {
    (function (t) {
      const i = s(0);
      class UserAgentManager {
        constructor() {
          this.build(this.constructor.DEFAULT);
        }
        set({ url: e, version: t } = {}) {
          this.build({
            url: e || this.constructor.DFEAULT.url,
            version: t || this.constructor.DEFAULT.version,
          });
        }
        build(e) {
          this.userAgent = `DiscordBot (${e.url}, ${e.version}) Node.js/${t.version}`;
        }
      }
      (UserAgentManager.DEFAULT = {
        url: i.Package.homepage.split("#")[0],
        version: i.Package.version,
      }),
        (e.exports = UserAgentManager);
    }.call(t, s(9)));
  },
  function (e, t, s) {
    const i = s(36),
      n = s(26),
      r = s(5),
      o = s(0),
      a = o.Endpoints,
      l = s(3),
      h = s(4),
      c = s(75),
      u = s(14),
      d = s(10),
      m = s(18),
      p = s(16),
      g = s(8),
      f = s(23),
      E = s(24),
      _ = s(76),
      v = s(32),
      b = s(12),
      y = s(33),
      w = s(22),
      A = s(78),
      T = s(47);
    e.exports = class RESTMethods {
      constructor(e) {
        (this.rest = e), (this.client = e.client), (this._ackToken = null);
      }
      login(e = this.client.token) {
        return new Promise((t, s) => {
          if (!e || "string" != typeof e)
            throw new Error(o.Errors.INVALID_TOKEN);
          (e = e.replace(/^Bot\s*/i, "")),
            this.client.manager.connectToWebSocket(e, t, s);
        }).catch((e) => (this.client.destroy(), Promise.reject(e)));
      }
      logout() {
        return this.rest.makeRequest("post", a.logout, !0, {});
      }
      getGateway(e = !1) {
        return this.rest.makeRequest("get", e ? a.gateway.bot : a.gateway, !0);
      }
      fetchVoiceRegions(e) {
        let t;
        return (
          (t = e ? a.Guild(e).voiceRegions : a.voiceRegions),
          this.rest.makeRequest("get", t, !0).then((e) => {
            const t = new l();
            for (const s of e) t.set(s.id, new A(s));
            return t;
          })
        );
      }
      sendMessage(
        e,
        t,
        {
          tts: s,
          nonce: i,
          embed: n,
          disableEveryone: r,
          split: o,
          code: l,
          reply: c,
        } = {},
        u = null
      ) {
        return new Promise((p, g) => {
          if (
            (void 0 !== t && (t = this.client.resolver.resolveString(t)),
            void 0 !== i && ((i = parseInt(i)), isNaN(i) || i < 0))
          )
            throw new RangeError(
              "Message nonce must fit in an unsigned 64-bit integer."
            );
          if (t) {
            if (
              (o && "object" != typeof o && (o = {}),
              void 0 === l ||
                ("boolean" == typeof l && !0 !== l) ||
                ((t = h.escapeMarkdown(
                  this.client.resolver.resolveString(t),
                  !0
                )),
                (t = `\`\`\`${
                  ("boolean" != typeof l && l) || ""
                }\n${t}\n\`\`\``),
                o &&
                  ((o.prepend = `\`\`\`${
                    ("boolean" != typeof l && l) || ""
                  }\n`),
                  (o.append = "\n```"))),
              (r || (void 0 === r && this.client.options.disableEveryone)) &&
                (t = t.replace(/@(everyone|here)/g, "@â€‹$1")),
              c && !(e instanceof d || e instanceof m) && "dm" !== e.type)
            ) {
              const e = this.client.resolver.resolveUserID(c),
                s = `<@${c instanceof m && c.nickname ? "!" : ""}${e}>`;
              (t = `${s}${t ? `, ${t}` : ""}`),
                o && (o.prepend = `${s}, ${o.prepend || ""}`);
            }
            o && (t = h.splitMessage(t, o));
          } else if (
            c &&
            !(e instanceof d || e instanceof m) &&
            "dm" !== e.type
          ) {
            const e = this.client.resolver.resolveUserID(c);
            t = `<@${c instanceof m && c.nickname ? "!" : ""}${e}>`;
          }
          const f = (e) => {
            if (t instanceof Array) {
              const i = [];
              !(function t(r, o) {
                const a =
                  o === r.length - 1
                    ? { tts: s, embed: n, files: u }
                    : { tts: s };
                e.send(r[o], a)
                  .then(
                    (e) => (i.push(e), o >= r.length - 1 ? p(i) : t(r, ++o))
                  )
                  .catch(g);
              })(t, 0);
            } else
              this.rest
                .makeRequest(
                  "post",
                  a.Channel(e).messages,
                  !0,
                  { content: t, tts: s, nonce: i, embed: n },
                  u
                )
                .then(
                  (e) => p(this.client.actions.MessageCreate.handle(e).message),
                  g
                );
          };
          e instanceof d || e instanceof m ? this.createDM(e).then(f, g) : f(e);
        });
      }
      updateMessage(e, t, { embed: s, code: i, reply: n } = {}) {
        if (
          (void 0 !== t && (t = this.client.resolver.resolveString(t)),
          void 0 === i ||
            ("boolean" == typeof i && !0 !== i) ||
            ((t = h.escapeMarkdown(this.client.resolver.resolveString(t), !0)),
            (t = `\`\`\`${("boolean" != typeof i && i) || ""}\n${t}\n\`\`\``)),
          n && "dm" !== e.channel.type)
        ) {
          const e = this.client.resolver.resolveUserID(n);
          t = `${`<@${n instanceof m && n.nickname ? "!" : ""}${e}>`}${
            t ? `, ${t}` : ""
          }`;
        }
        return (
          s instanceof u && (s = s._apiTransform()),
          this.rest
            .makeRequest("patch", a.Message(e), !0, { content: t, embed: s })
            .then((e) => this.client.actions.MessageUpdate.handle(e).updated)
        );
      }
      deleteMessage(e) {
        return this.rest
          .makeRequest("delete", a.Message(e), !0)
          .then(
            () =>
              this.client.actions.MessageDelete.handle({
                id: e.id,
                channel_id: e.channel.id,
              }).message
          );
      }
      ackMessage(e) {
        return this.rest
          .makeRequest("post", a.Message(e).ack, !0, { token: this._ackToken })
          .then((t) => (t.token && (this._ackToken = t.token), e));
      }
      ackTextChannel(e) {
        return this.rest
          .makeRequest("post", a.Channel(e).Message(e.lastMessageID).ack, !0, {
            token: this._ackToken,
          })
          .then((t) => (t.token && (this._ackToken = t.token), e));
      }
      ackGuild(e) {
        return this.rest.makeRequest("post", a.Guild(e).ack, !0).then(() => e);
      }
      bulkDeleteMessages(e, t) {
        return this.rest
          .makeRequest("post", a.Channel(e).messages.bulkDelete, !0, {
            messages: t,
          })
          .then(
            () =>
              this.client.actions.MessageDeleteBulk.handle({
                channel_id: e.id,
                ids: t,
              }).messages
          );
      }
      search(e, t) {
        if (
          ("string" == typeof t && (t = { content: t }),
          t.before &&
            (t.before instanceof Date || (t.before = new Date(t.before)),
            (t.maxID = n
              .fromNumber(t.before.getTime() - 14200704e5)
              .shiftLeft(22)
              .toString())),
          t.after &&
            (t.after instanceof Date || (t.after = new Date(t.after)),
            (t.minID = n
              .fromNumber(t.after.getTime() - 14200704e5)
              .shiftLeft(22)
              .toString())),
          t.during)
        ) {
          t.during instanceof Date || (t.during = new Date(t.during));
          const e = t.during.getTime() - 14200704e5;
          (t.minID = n.fromNumber(e).shiftLeft(22).toString()),
            (t.maxID = n
              .fromNumber(e + 864e5)
              .shiftLeft(22)
              .toString());
        }
        t.channel &&
          (t.channel = this.client.resolver.resolveChannelID(t.channel)),
          t.author && (t.author = this.client.resolver.resolveUserID(t.author)),
          t.mentions &&
            (t.mentions = this.client.resolver.resolveUserID(
              t.options.mentions
            )),
          (t = {
            content: t.content,
            max_id: t.maxID,
            min_id: t.minID,
            has: t.has,
            channel_id: t.channel,
            author_id: t.author,
            author_type: t.authorType,
            context_size: t.contextSize,
            sort_by: t.sortBy,
            sort_order: t.sortOrder,
            limit: t.limit,
            offset: t.offset,
            mentions: t.mentions,
            mentions_everyone: t.mentionsEveryone,
            link_hostname: t.linkHostname,
            embed_provider: t.embedProvider,
            embed_type: t.embedType,
            attachment_filename: t.attachmentFilename,
            attachment_extension: t.attachmentExtension,
            include_nsfw: t.nsfw,
          });
        for (const e in t) void 0 === t[e] && delete t[e];
        const s = (i.stringify(t).match(/[^=&?]+=[^=&?]+/g) || []).join("&");
        let r;
        if (e instanceof b) r = a.Channel(e).search;
        else {
          if (!(e instanceof w))
            throw new TypeError(
              "Target must be a TextChannel, DMChannel, GroupDMChannel, or Guild."
            );
          r = a.Guild(e).search;
        }
        return this.rest.makeRequest("get", `${r}?${s}`, !0).then((e) => {
          const t = e.messages.map((e) =>
            e.map(
              (e) =>
                new p(this.client.channels.get(e.channel_id), e, this.client)
            )
          );
          return { totalResults: e.total_results, messages: t };
        });
      }
      createChannel(e, t, s, i, n) {
        return this.rest
          .makeRequest(
            "post",
            a.Guild(e).channels,
            !0,
            {
              name: t,
              type: s ? o.ChannelTypes[s.toUpperCase()] : "text",
              permission_overwrites: c.call(this, i, e),
            },
            void 0,
            n
          )
          .then((e) => this.client.actions.ChannelCreate.handle(e).channel);
      }
      createDM(e) {
        const t = this.getExistingDM(e);
        return t
          ? Promise.resolve(t)
          : this.rest
              .makeRequest("post", a.User(this.client.user).channels, !0, {
                recipient_id: e.id,
              })
              .then((e) => this.client.actions.ChannelCreate.handle(e).channel);
      }
      createGroupDM(e) {
        const t = this.client.user.bot
          ? { access_tokens: e.accessTokens, nicks: e.nicks }
          : { recipients: e.recipients };
        return this.rest
          .makeRequest("post", a.User("@me").channels, !0, t)
          .then((e) => new y(this.client, e));
      }
      addUserToGroupDM(e, t) {
        const s = this.client.user.bot
          ? { nick: t.nick, access_token: t.accessToken }
          : { recipient: t.id };
        return this.rest
          .makeRequest("put", a.Channel(e).Recipient(t.id), !0, s)
          .then(() => e);
      }
      removeUserFromGroupDM(e, t) {
        return this.rest
          .makeRequest("delete", a.Channel(e).Recipient(t), !0)
          .then(() => e);
      }
      updateGroupDMChannel(e, t) {
        const s = {};
        return (
          (s.name = t.name),
          (s.icon = t.icon),
          this.rest.makeRequest("patch", a.Channel(e), !0, s).then(() => e)
        );
      }
      getExistingDM(e) {
        return this.client.channels.find(
          (t) => t.recipient && t.recipient.id === e.id
        );
      }
      deleteChannel(e, t) {
        return (
          (e instanceof d || e instanceof m) && (e = this.getExistingDM(e)),
          e
            ? this.rest
                .makeRequest("delete", a.Channel(e), !0, void 0, void 0, t)
                .then(
                  (t) => (
                    (t.id = e.id),
                    this.client.actions.ChannelDelete.handle(t).channel
                  )
                )
            : Promise.reject(new Error("No channel to delete."))
        );
      }
      updateChannel(e, t, s) {
        const i = {};
        return (
          (i.name = (t.name || e.name).trim()),
          (i.topic = void 0 === t.topic ? e.topic : t.topic),
          (i.nsfw = void 0 === t.nsfw ? e.nsfw : t.nsfw),
          (i.position = t.position || e.position),
          (i.bitrate = t.bitrate || (e.bitrate ? 1e3 * e.bitrate : void 0)),
          (i.user_limit = void 0 !== t.userLimit ? t.userLimit : e.userLimit),
          (i.parent_id = t.parent),
          (i.permission_overwrites = t.permissionOverwrites
            ? c.call(this, t.permissionOverwrites, e.guild)
            : void 0),
          this.rest
            .makeRequest("patch", a.Channel(e), !0, i, void 0, s)
            .then((e) => this.client.actions.ChannelUpdate.handle(e).updated)
        );
      }
      leaveGuild(e) {
        return e.ownerID === this.client.user.id
          ? Promise.reject(new Error("Guild is owned by the client."))
          : this.rest
              .makeRequest("delete", a.User("@me").Guild(e.id), !0)
              .then(
                () => this.client.actions.GuildDelete.handle({ id: e.id }).guild
              );
      }
      createGuild(e) {
        return (
          (e.icon = this.client.resolver.resolveBase64(e.icon) || null),
          (e.region = e.region || "us-central"),
          new Promise((t, s) => {
            this.rest.makeRequest("post", a.guilds, !0, e).then((e) => {
              if (this.client.guilds.has(e.id))
                return t(this.client.guilds.get(e.id));
              const i = (s) => {
                s.id === e.id &&
                  (this.client.removeListener(o.Events.GUILD_CREATE, i),
                  this.client.clearTimeout(n),
                  t(s));
              };
              this.client.on(o.Events.GUILD_CREATE, i);
              const n = this.client.setTimeout(() => {
                this.client.removeListener(o.Events.GUILD_CREATE, i),
                  s(new Error("Took too long to receive guild data."));
              }, 1e4);
            }, s);
          })
        );
      }
      deleteGuild(e) {
        return this.rest
          .makeRequest("delete", a.Guild(e), !0)
          .then(
            () => this.client.actions.GuildDelete.handle({ id: e.id }).guild
          );
      }
      getUser(e, t) {
        return this.rest
          .makeRequest("get", a.User(e), !0)
          .then((e) =>
            t
              ? this.client.actions.UserGet.handle(e).user
              : new d(this.client, e)
          );
      }
      updateCurrentUser(e, t) {
        const s = this.client.user,
          i = {};
        return (
          (i.username = e.username || s.username),
          (i.avatar =
            void 0 === e.avatar
              ? s.avatar
              : this.client.resolver.resolveBase64(e.avatar)),
          s.bot ||
            ((i.email = e.email || s.email),
            (i.password = t),
            e.new_password && (i.new_password = e.newPassword)),
          this.rest
            .makeRequest("patch", a.User("@me"), !0, i)
            .then((e) => this.client.actions.UserUpdate.handle(e).updated)
        );
      }
      updateGuild(e, t, s) {
        return this.rest
          .makeRequest("patch", a.Guild(e), !0, t, void 0, s)
          .then((e) => this.client.actions.GuildUpdate.handle(e).updated);
      }
      kickGuildMember(e, t, s) {
        return this.rest
          .makeRequest("delete", a.Guild(e).Member(t), !0, void 0, void 0, s)
          .then(() => t);
      }
      createGuildRole(e, t, s) {
        return (
          t.color && (t.color = this.client.resolver.resolveColor(t.color)),
          t.permissions && (t.permissions = r.resolve(t.permissions)),
          this.rest
            .makeRequest("post", a.Guild(e).roles, !0, t, void 0, s)
            .then((i) => {
              const { role: n } = this.client.actions.GuildRoleCreate.handle({
                guild_id: e.id,
                role: i,
              });
              return t.position ? n.setPosition(t.position, s) : n;
            })
        );
      }
      deleteGuildRole(e, t) {
        return this.rest
          .makeRequest(
            "delete",
            a.Guild(e.guild).Role(e.id),
            !0,
            void 0,
            void 0,
            t
          )
          .then(
            () =>
              this.client.actions.GuildRoleDelete.handle({
                guild_id: e.guild.id,
                role_id: e.id,
              }).role
          );
      }
      setChannelOverwrite(e, t) {
        return this.rest.makeRequest(
          "put",
          `${a.Channel(e).permissions}/${t.id}`,
          !0,
          t
        );
      }
      deletePermissionOverwrites(e, t) {
        return this.rest
          .makeRequest(
            "delete",
            `${a.Channel(e.channel).permissions}/${e.id}`,
            !0,
            void 0,
            void 0,
            t
          )
          .then(() => e);
      }
      getChannelMessages(e, t = {}) {
        const s = [];
        t.limit && s.push(`limit=${t.limit}`),
          t.around
            ? s.push(`around=${t.around}`)
            : t.before
            ? s.push(`before=${t.before}`)
            : t.after && s.push(`after=${t.after}`);
        let i = a.Channel(e).messages;
        return (
          s.length > 0 && (i += `?${s.join("&")}`),
          this.rest.makeRequest("get", i, !0)
        );
      }
      getChannelMessage(e, t) {
        const s = e.messages.get(t);
        return s
          ? Promise.resolve(s)
          : this.rest.makeRequest("get", a.Channel(e).Message(t), !0);
      }
      putGuildMember(e, t, s) {
        if (((s.access_token = s.accessToken), s.roles)) {
          const e = s.roles;
          (e instanceof l || (e instanceof Array && e[0] instanceof g)) &&
            (s.roles = e.map((e) => e.id));
        }
        return this.rest
          .makeRequest("put", a.Guild(e).Member(t.id), !0, s)
          .then((t) => this.client.actions.GuildMemberGet.handle(e, t).member);
      }
      getGuildMember(e, t, s) {
        return this.rest
          .makeRequest("get", a.Guild(e).Member(t.id), !0)
          .then((t) =>
            s
              ? this.client.actions.GuildMemberGet.handle(e, t).member
              : new m(e, t)
          );
      }
      updateGuildMember(e, t, s) {
        t.channel &&
          ((t.channel_id = this.client.resolver.resolveChannel(t.channel).id),
          (t.channel = null)),
          t.roles &&
            (t.roles = t.roles.map((e) => (e instanceof g ? e.id : e)));
        let i = a.Member(e);
        if (e.id === this.client.user.id) {
          const s = Object.keys(t);
          1 === s.length && "nick" === s[0] && (i = a.Member(e).nickname);
        }
        return this.rest
          .makeRequest("patch", i, !0, t, void 0, s)
          .then((t) => e.guild._updateMember(e, t).mem);
      }
      addMemberRole(e, t, s) {
        return new Promise((i, n) => {
          if (e._roles.includes(t.id)) return i(e);
          const r = (s, n) => {
            n.id === e.id &&
              !s._roles.includes(t.id) &&
              n._roles.includes(t.id) &&
              (this.client.removeListener(o.Events.GUILD_MEMBER_UPDATE, r),
              i(n));
          };
          this.client.on(o.Events.GUILD_MEMBER_UPDATE, r);
          const l = this.client.setTimeout(() => {
            this.client.removeListener(o.Events.GUILD_MEMBER_UPDATE, r),
              n(new Error("Adding the role timed out."));
          }, 1e4);
          return this.rest
            .makeRequest("put", a.Member(e).Role(t.id), !0, void 0, void 0, s)
            .catch((e) => {
              this.client.removeListener(o.Events.GUILD_MEMBER_UPDATE, r),
                this.client.clearTimeout(l),
                n(e);
            });
        });
      }
      removeMemberRole(e, t, s) {
        return new Promise((i, n) => {
          if (!e._roles.includes(t.id)) return i(e);
          const r = (s, n) => {
            n.id === e.id &&
              s._roles.includes(t.id) &&
              !n._roles.includes(t.id) &&
              (this.client.removeListener(o.Events.GUILD_MEMBER_UPDATE, r),
              i(n));
          };
          this.client.on(o.Events.GUILD_MEMBER_UPDATE, r);
          const l = this.client.setTimeout(() => {
            this.client.removeListener(o.Events.GUILD_MEMBER_UPDATE, r),
              n(new Error("Removing the role timed out."));
          }, 1e4);
          return this.rest
            .makeRequest(
              "delete",
              a.Member(e).Role(t.id),
              !0,
              void 0,
              void 0,
              s
            )
            .catch((e) => {
              this.client.removeListener(o.Events.GUILD_MEMBER_UPDATE, r),
                this.client.clearTimeout(l),
                n(e);
            });
        });
      }
      sendTyping(e) {
        return this.rest.makeRequest("post", a.Channel(e).typing, !0);
      }
      banGuildMember(e, t, s) {
        const n = this.client.resolver.resolveUserID(t);
        if (!n)
          return Promise.reject(
            new Error("Couldn't resolve the user ID to ban.")
          );
        const r = `${a.Guild(e).bans}/${n}?${i.stringify(s)}`;
        return this.rest.makeRequest("put", r, !0).then(() => {
          if (t instanceof m) return t;
          const s = this.client.resolver.resolveUser(n);
          return s
            ? (t = this.client.resolver.resolveGuildMember(e, s)) || s
            : n;
        });
      }
      unbanGuildMember(e, t, s) {
        return new Promise((i, n) => {
          const r = this.client.resolver.resolveUserID(t);
          if (!r) throw new Error("Couldn't resolve the user ID to unban.");
          const l = (t, s) => {
            t.id === e.id &&
              s.id === r &&
              (this.client.removeListener(o.Events.GUILD_BAN_REMOVE, l),
              this.client.clearTimeout(h),
              i(s));
          };
          this.client.on(o.Events.GUILD_BAN_REMOVE, l);
          const h = this.client.setTimeout(() => {
            this.client.removeListener(o.Events.GUILD_BAN_REMOVE, l),
              n(new Error("Took too long to receive the ban remove event."));
          }, 1e4);
          this.rest
            .makeRequest(
              "delete",
              `${a.Guild(e).bans}/${r}`,
              !0,
              void 0,
              void 0,
              s
            )
            .catch((e) => {
              this.client.removeListener(o.Events.GUILD_BAN_REMOVE, l),
                this.client.clearTimeout(h),
                n(e);
            });
        });
      }
      getGuildBans(e) {
        return this.rest
          .makeRequest("get", a.Guild(e).bans, !0)
          .then((e) =>
            e.reduce(
              (e, t) => (
                e.set(t.user.id, {
                  reason: t.reason,
                  user: this.client.dataManager.newUser(t.user),
                }),
                e
              ),
              new l()
            )
          );
      }
      updateGuildRole(e, t, s) {
        const i = {};
        return (
          (i.name = t.name || e.name),
          (i.position = void 0 !== t.position ? t.position : e.position),
          (i.color =
            null === t.color
              ? null
              : this.client.resolver.resolveColor(t.color || e.color)),
          (i.hoist = void 0 !== t.hoist ? t.hoist : e.hoist),
          (i.mentionable =
            void 0 !== t.mentionable ? t.mentionable : e.mentionable),
          void 0 !== t.permissions
            ? (i.permissions = r.resolve(t.permissions))
            : (i.permissions = e.permissions),
          this.rest
            .makeRequest("patch", a.Guild(e.guild).Role(e.id), !0, i, void 0, s)
            .then(
              (t) =>
                this.client.actions.GuildRoleUpdate.handle({
                  role: t,
                  guild_id: e.guild.id,
                }).updated
            )
        );
      }
      pinMessage(e) {
        return this.rest
          .makeRequest("put", a.Channel(e.channel).Pin(e.id), !0)
          .then(() => e);
      }
      unpinMessage(e) {
        return this.rest
          .makeRequest("delete", a.Channel(e.channel).Pin(e.id), !0)
          .then(() => e);
      }
      getChannelPinnedMessages(e) {
        return this.rest.makeRequest("get", a.Channel(e).pins, !0);
      }
      createChannelInvite(e, t, s) {
        const i = {};
        return (
          (i.temporary = t.temporary),
          (i.max_age = t.maxAge),
          (i.max_uses = t.maxUses),
          (i.unique = t.unique),
          this.rest
            .makeRequest("post", a.Channel(e).invites, !0, i, void 0, s)
            .then((e) => new f(this.client, e))
        );
      }
      deleteInvite(e, t) {
        return this.rest
          .makeRequest("delete", a.Invite(e.code), !0, void 0, void 0, t)
          .then(() => e);
      }
      getInvite(e) {
        return this.rest
          .makeRequest("get", a.Invite(e), !0)
          .then((e) => new f(this.client, e));
      }
      getGuildInvites(e) {
        return this.rest
          .makeRequest("get", a.Guild(e).invites, !0)
          .then((e) => {
            const t = new l();
            for (const s of e) {
              const e = new f(this.client, s);
              t.set(e.code, e);
            }
            return t;
          });
      }
      pruneGuildMembers(e, t, s, i) {
        return this.rest
          .makeRequest(
            s ? "get" : "post",
            `${a.Guild(e).prune}?days=${t}`,
            !0,
            void 0,
            void 0,
            i
          )
          .then((e) => e.pruned);
      }
      createEmoji(e, t, s, i, n) {
        const r = { image: t, name: s };
        return (
          i && (r.roles = i.map((e) => (e.id ? e.id : e))),
          this.rest
            .makeRequest("post", a.Guild(e).emojis, !0, r, void 0, n)
            .then(
              (t) => this.client.actions.GuildEmojiCreate.handle(e, t).emoji
            )
        );
      }
      updateEmoji(e, t, s) {
        const i = {};
        return (
          t.name && (i.name = t.name),
          t.roles && (i.roles = t.roles.map((e) => (e.id ? e.id : e))),
          this.rest
            .makeRequest(
              "patch",
              a.Guild(e.guild).Emoji(e.id),
              !0,
              i,
              void 0,
              s
            )
            .then(
              (t) => this.client.actions.GuildEmojiUpdate.handle(e, t).emoji
            )
        );
      }
      deleteEmoji(e, t) {
        return this.rest
          .makeRequest("delete", a.Guild(e.guild).Emoji(e.id), !0, void 0, t)
          .then(() => this.client.actions.GuildEmojiDelete.handle(e).data);
      }
      getGuildAuditLogs(e, t = {}) {
        t.before && t.before instanceof T.Entry && (t.before = t.before.id),
          t.after && t.after instanceof T.Entry && (t.after = t.after.id),
          "string" == typeof t.type && (t.type = T.Actions[t.type]);
        const s = (
          i
            .stringify({
              before: t.before,
              after: t.after,
              limit: t.limit,
              user_id: this.client.resolver.resolveUserID(t.user),
              action_type: t.type,
            })
            .match(/[^=&?]+=[^=&?]+/g) || []
        ).join("&");
        return this.rest
          .makeRequest("get", `${a.Guild(e).auditLogs}?${s}`, !0)
          .then((t) => T.build(e, t));
      }
      getWebhook(e, t) {
        return this.rest
          .makeRequest("get", a.Webhook(e, t), !t)
          .then((e) => new E(this.client, e));
      }
      getGuildWebhooks(e) {
        return this.rest
          .makeRequest("get", a.Guild(e).webhooks, !0)
          .then((e) => {
            const t = new l();
            for (const s of e) t.set(s.id, new E(this.client, s));
            return t;
          });
      }
      getChannelWebhooks(e) {
        return this.rest
          .makeRequest("get", a.Channel(e).webhooks, !0)
          .then((e) => {
            const t = new l();
            for (const s of e) t.set(s.id, new E(this.client, s));
            return t;
          });
      }
      createWebhook(e, t, s, i) {
        return this.rest
          .makeRequest(
            "post",
            a.Channel(e).webhooks,
            !0,
            { name: t, avatar: s },
            void 0,
            i
          )
          .then((e) => new E(this.client, e));
      }
      editWebhook(e, t, s) {
        return this.rest
          .makeRequest("patch", a.Webhook(e.id, e.token), !1, {
            name: t,
            avatar: s,
          })
          .then((t) => ((e.name = t.name), (e.avatar = t.avatar), e));
      }
      deleteWebhook(e, t) {
        return this.rest.makeRequest(
          "delete",
          a.Webhook(e.id, e.token),
          !1,
          void 0,
          void 0,
          t
        );
      }
      sendWebhookMessage(
        e,
        t,
        { avatarURL: s, tts: i, embeds: n, username: r } = {},
        o = null
      ) {
        return new Promise((l, h) => {
          if (((r = r || e.name), t instanceof Array)) {
            const s = [];
            !(function t(r, a) {
              const c =
                a === r.length - 1
                  ? { tts: i, embeds: n, files: o }
                  : { tts: i };
              e.send(r[a], c)
                .then((e) => (s.push(e), a >= r.length - 1 ? l(s) : t(r, ++a)))
                .catch(h);
            })(t, 0);
          } else
            this.rest
              .makeRequest(
                "post",
                `${a.Webhook(e.id, e.token)}?wait=true`,
                !1,
                { username: r, avatar_url: s, content: t, tts: i, embeds: n },
                o
              )
              .then((e) => {
                this.client.channels
                  ? l(this.client.actions.MessageCreate.handle(e).message)
                  : l(e);
              }, h);
        });
      }
      sendSlackWebhookMessage(e, t) {
        return this.rest.makeRequest(
          "post",
          `${a.Webhook(e.id, e.token)}/slack?wait=true`,
          !1,
          t
        );
      }
      fetchUserProfile(e) {
        return this.rest
          .makeRequest("get", a.User(e).profile, !0)
          .then((t) => new _(e, t));
      }
      fetchMentions(e) {
        return (
          e.guild instanceof w && (e.guild = e.guild.id),
          h.mergeDefault(
            { limit: 25, roles: !0, everyone: !0, guild: null },
            e
          ),
          this.rest
            .makeRequest(
              "get",
              a.User("@me").Mentions(e.limit, e.roles, e.everyone, e.guild),
              !0
            )
            .then((e) =>
              e.map(
                (e) =>
                  new p(this.client.channels.get(e.channel_id), e, this.client)
              )
            )
        );
      }
      addFriend(e) {
        return this.rest
          .makeRequest("post", a.User("@me"), !0, {
            username: e.username,
            discriminator: e.discriminator,
          })
          .then(() => e);
      }
      removeFriend(e) {
        return this.rest
          .makeRequest("delete", a.User("@me").Relationship(e.id), !0)
          .then(() => e);
      }
      blockUser(e) {
        return this.rest
          .makeRequest("put", a.User("@me").Relationship(e.id), !0, { type: 2 })
          .then(() => e);
      }
      unblockUser(e) {
        return this.rest
          .makeRequest("delete", a.User("@me").Relationship(e.id), !0)
          .then(() => e);
      }
      updateChannelPositions(e, t) {
        const s = new Array(t.length);
        for (let e = 0; e < t.length; e++)
          s[e] = {
            id: this.client.resolver.resolveChannelID(t[e].channel),
            position: t[e].position,
          };
        return this.rest
          .makeRequest("patch", a.Guild(e).channels, !0, s)
          .then(
            () =>
              this.client.actions.GuildChannelsPositionUpdate.handle({
                guild_id: e,
                channels: t,
              }).guild
          );
      }
      setRolePositions(e, t) {
        return this.rest
          .makeRequest("patch", a.Guild(e).roles, !0, t)
          .then(
            () =>
              this.client.actions.GuildRolesPositionUpdate.handle({
                guild_id: e,
                roles: t,
              }).guild
          );
      }
      setChannelPositions(e, t) {
        return this.rest
          .makeRequest("patch", a.Guild(e).channels, !0, t)
          .then(
            () =>
              this.client.actions.GuildChannelsPositionUpdate.handle({
                guild_id: e,
                channels: t,
              }).guild
          );
      }
      addMessageReaction(e, t) {
        return this.rest
          .makeRequest("put", a.Message(e).Reaction(t).User("@me"), !0)
          .then(() => e._addReaction(h.parseEmoji(t), e.client.user));
      }
      removeMessageReaction(e, t, s) {
        const i = a
          .Message(e)
          .Reaction(t)
          .User(s === this.client.user.id ? "@me" : s);
        return this.rest
          .makeRequest("delete", i, !0)
          .then(
            () =>
              this.client.actions.MessageReactionRemove.handle({
                user_id: s,
                message_id: e.id,
                emoji: h.parseEmoji(t),
                channel_id: e.channel.id,
              }).reaction
          );
      }
      removeMessageReactions(e) {
        return this.rest
          .makeRequest("delete", a.Message(e).reactions, !0)
          .then(() => e);
      }
      getMessageReactionUsers(e, t, s) {
        const n = (i.stringify(s).match(/[^=&?]+=[^=&?]+/g) || []).join("&");
        return this.rest.makeRequest(
          "get",
          `${a.Message(e).Reaction(t)}?${n}`,
          !0
        );
      }
      getApplication(e) {
        return this.rest
          .makeRequest("get", a.OAUTH2.Application(e), !0)
          .then((e) => new v(this.client, e));
      }
      resetApplication(e) {
        return this.rest
          .makeRequest("post", a.OAUTH2.Application(e).resetToken, !0)
          .then(() =>
            this.rest.makeRequest(
              "post",
              a.OAUTH2.Application(e).resetSecret,
              !0
            )
          )
          .then((e) => new v(this.client, e));
      }
      setNote(e, t) {
        return this.rest
          .makeRequest("put", a.User(e).note, !0, { note: t })
          .then(() => e);
      }
      acceptInvite(e) {
        return (
          e.id && (e = e.id),
          new Promise((t, s) =>
            this.rest.makeRequest("post", a.Invite(e), !0).then((e) => {
              const i = (s) => {
                s.id === e.id &&
                  (t(s), this.client.removeListener(o.Events.GUILD_CREATE, i));
              };
              this.client.on(o.Events.GUILD_CREATE, i),
                this.client.setTimeout(() => {
                  this.client.removeListener(o.Events.GUILD_CREATE, i),
                    s(new Error("Accepting invite timed out"));
                }, 12e4);
            })
          )
        );
      }
      patchUserSettings(e) {
        return this.rest.makeRequest(
          "patch",
          o.Endpoints.User("@me").settings,
          !0,
          e
        );
      }
      patchClientUserGuildSettings(e, t) {
        return this.rest.makeRequest(
          "patch",
          o.Endpoints.User("@me").Guild(e).settings,
          !0,
          t
        );
      }
    };
  },
  function (e, t, s) {
    const i = s(5),
      n = s(3);
    e.exports = function (e, t) {
      return (
        (e instanceof n || e instanceof Array) &&
          (e = e.map((e) => {
            const s = this.client.resolver.resolveRole(t, e.id);
            return (
              s
                ? ((e.id = s.id), (e.type = "role"))
                : ((e.id = this.client.resolver.resolveUserID(e.id)),
                  (e.type = "member")),
              {
                allow: i.resolve(e.allow || e.allowed || 0),
                deny: i.resolve(e.deny || e.denied || 0),
                type: e.type,
                id: e.id,
              }
            );
          })),
        e
      );
    };
  },
  function (e, t, s) {
    const i = s(3),
      n = s(77);
    e.exports = class UserProfile {
      constructor(e, t) {
        (this.user = e),
          Object.defineProperty(this, "client", { value: e.client }),
          (this.mutualGuilds = new i()),
          (this.connections = new i()),
          this.setup(t);
      }
      setup(e) {
        (this.premium = e.premium),
          (this.premiumSince = e.premium_since
            ? new Date(e.premium_since)
            : null);
        for (const t of e.mutual_guilds)
          this.client.guilds.has(t.id) &&
            this.mutualGuilds.set(t.id, this.client.guilds.get(t.id));
        for (const t of e.connected_accounts)
          this.connections.set(t.id, new n(this.user, t));
      }
    };
  },
  function (e, t) {
    e.exports = class UserConnection {
      constructor(e, t) {
        (this.user = e), this.setup(t);
      }
      setup(e) {
        (this.type = e.type),
          (this.name = e.name),
          (this.id = e.id),
          (this.revoked = e.revoked),
          (this.integrations = e.integrations);
      }
    };
  },
  function (e, t) {
    e.exports = class VoiceRegion {
      constructor(e) {
        (this.id = e.id),
          (this.name = e.name),
          (this.vip = e.vip),
          (this.deprecated = e.deprecated),
          (this.optimal = e.optimal),
          (this.custom = e.custom),
          (this.sampleHostname = e.sample_hostname);
      }
    };
  },
  function (e, t, s) {
    const i = s(48),
      n = s(34),
      {
        Events: { RATE_LIMIT: r },
      } = s(0);
    e.exports = class SequentialRequestHandler extends i {
      constructor(e, t) {
        super(e, t),
          (this.client = e.client),
          (this.endpoint = t),
          (this.timeDifference = 0),
          (this.busy = !1);
      }
      push(e) {
        super.push(e), this.handle();
      }
      execute(e) {
        return (
          (this.busy = !0),
          new Promise((t) => {
            e.request.gen().end((s, i) => {
              if (
                (i &&
                  i.headers &&
                  ((this.requestLimit = Number(i.headers["x-ratelimit-limit"])),
                  (this.requestResetTime =
                    1e3 * Number(i.headers["x-ratelimit-reset"])),
                  (this.requestRemaining = Number(
                    i.headers["x-ratelimit-remaining"]
                  )),
                  (this.timeDifference =
                    Date.now() - new Date(i.headers.date).getTime())),
                s)
              )
                429 === s.status
                  ? (this.queue.unshift(e),
                    this.restManager.client.setTimeout(() => {
                      (this.globalLimit = !1), t();
                    }, Number(i.headers["retry-after"]) + this.restManager.client.options.restTimeOffset),
                    i.headers["x-ratelimit-global"] && (this.globalLimit = !0))
                  : s.status >= 500 && s.status < 600
                  ? (this.queue.unshift(e),
                    this.restManager.client.setTimeout(
                      t,
                      1e3 + this.restManager.client.options.restTimeOffset
                    ))
                  : (e.reject(
                      s.status >= 400 && s.status < 500
                        ? new n(i.request.path, i.body, i.request.method)
                        : s
                    ),
                    t(s));
              else {
                this.globalLimit = !1;
                const s = i && i.body ? i.body : {};
                e.resolve(s),
                  0 === this.requestRemaining
                    ? (this.client.listenerCount(r) &&
                        this.client.emit(r, {
                          limit: this.requestLimit,
                          timeDifference: this.timeDifference,
                          path: e.request.path,
                          method: e.request.method,
                        }),
                      this.restManager.client.setTimeout(
                        () => t(s),
                        this.requestResetTime -
                          Date.now() +
                          this.timeDifference +
                          this.restManager.client.options.restTimeOffset
                      ))
                    : t(s);
              }
            });
          })
        );
      }
      handle() {
        super.handle(),
          this.busy ||
            0 === this.remaining ||
            0 === this.queue.length ||
            this.globalLimit ||
            this.execute(this.queue.shift()).then(() => {
              (this.busy = !1), this.handle();
            });
      }
    };
  },
  function (e, t, s) {
    const i = s(48),
      n = s(34),
      {
        Events: { RATE_LIMIT: r },
      } = s(0);
    e.exports = class BurstRequestHandler extends i {
      constructor(e, t) {
        super(e, t),
          (this.client = e.client),
          (this.limit = 1 / 0),
          (this.resetTime = null),
          (this.remaining = 1),
          (this.timeDifference = 0),
          (this.resetTimeout = null);
      }
      push(e) {
        super.push(e), this.handle();
      }
      execute(e) {
        e &&
          e.request.gen().end((t, s) => {
            if (
              (s &&
                s.headers &&
                ((this.limit = Number(s.headers["x-ratelimit-limit"])),
                (this.resetTime = 1e3 * Number(s.headers["x-ratelimit-reset"])),
                (this.remaining = Number(s.headers["x-ratelimit-remaining"])),
                (this.timeDifference =
                  Date.now() - new Date(s.headers.date).getTime())),
              t)
            )
              if (429 === t.status) {
                if (
                  (this.queue.unshift(e),
                  s.headers["x-ratelimit-global"] && (this.globalLimit = !0),
                  this.resetTimeout)
                )
                  return;
                this.resetTimeout = this.client.setTimeout(() => {
                  (this.remaining = this.limit),
                    (this.globalLimit = !1),
                    this.handle(),
                    (this.resetTimeout = null);
                }, Number(s.headers["retry-after"]) + this.client.options.restTimeOffset);
              } else
                t.status >= 500 && t.status < 600
                  ? (this.queue.unshift(e),
                    (this.resetTimeout = this.client.setTimeout(() => {
                      this.handle(), (this.resetTimeout = null);
                    }, 1e3 + this.client.options.restTimeOffset)))
                  : (e.reject(
                      t.status >= 400 && t.status < 500
                        ? new n(s.request.path, s.body, s.request.method)
                        : t
                    ),
                    this.handle());
            else {
              0 === this.remaining &&
                this.client.listenerCount(r) &&
                this.client.emit(r, {
                  limit: this.limit,
                  timeDifference: this.timeDifference,
                  path: e.request.path,
                  method: e.request.method,
                }),
                (this.globalLimit = !1);
              const t = s && s.body ? s.body : {};
              e.resolve(t), this.handle();
            }
          });
      }
      handle() {
        super.handle(),
          0 !== this.queue.length &&
            (((this.remaining <= 0 || this.globalLimit) &&
              Date.now() - this.timeDifference < this.resetTime) ||
              (this.execute(this.queue.shift()),
              this.remaining--,
              this.handle()));
      }
    };
  },
  function (e, t, s) {
    const i = s(25),
      n = s(0);
    e.exports = class APIRequest {
      constructor(e, t, s, i, n, r, o) {
        (this.rest = e),
          (this.client = e.client),
          (this.method = t),
          (this.path = s.toString()),
          (this.auth = i),
          (this.data = n),
          (this.files = r),
          (this.route = this.getRoute(this.path)),
          (this.reason = o);
      }
      getRoute(e) {
        let t = e.split("?")[0];
        if (t.includes("/channels/") || t.includes("/guilds/")) {
          const e = t.includes("/channels/")
              ? t.indexOf("/channels/")
              : t.indexOf("/guilds/"),
            s = t.substring(e).split("/")[2];
          t = t.replace(/(\d{8,})/g, ":id").replace(":id", s);
        }
        return t;
      }
      getAuth() {
        if (this.client.token && this.client.user && this.client.user.bot)
          return `Bot ${this.client.token}`;
        if (this.client.token) return this.client.token;
        throw new Error(n.Errors.NO_TOKEN);
      }
      gen() {
        const e = `${this.client.options.http.host}/api/v${this.client.options.http.version}`,
          t = i[this.method](`${e}${this.path}`);
        if (
          (this.auth && t.set("Authorization", this.getAuth()),
          this.reason &&
            t.set("X-Audit-Log-Reason", encodeURIComponent(this.reason)),
          this.rest.client.browser ||
            t.set("User-Agent", this.rest.userAgentManager.userAgent),
          this.files)
        ) {
          for (const e of this.files)
            e && e.file && t.attach(e.name, e.file, e.name);
          void 0 !== this.data &&
            t.attach("payload_json", JSON.stringify(this.data));
        } else this.data && t.send(this.data);
        return t;
      }
    };
  },
  function (e, t, s) {
    const i = s(0),
      n = s(4),
      r = s(22),
      o = s(10),
      a = s(49),
      l = s(51),
      h = s(17),
      c = s(52),
      u = s(53),
      d = s(19),
      m = s(33);
    e.exports = class ClientDataManager {
      constructor(e) {
        this.client = e;
      }
      get pastReady() {
        return this.client.ws.connection.status === i.Status.READY;
      }
      newGuild(e) {
        const t = this.client.guilds.has(e.id),
          s = new r(this.client, e);
        return (
          this.client.guilds.set(s.id, s),
          this.pastReady &&
            !t &&
            (this.client.options.fetchAllMembers
              ? s.fetchMembers().then(() => {
                  this.client.emit(i.Events.GUILD_CREATE, s);
                })
              : this.client.emit(i.Events.GUILD_CREATE, s)),
          s
        );
      }
      newUser(e, t = !0) {
        if (this.client.users.has(e.id)) return this.client.users.get(e.id);
        const s = new o(this.client, e);
        return t && this.client.users.set(s.id, s), s;
      }
      newChannel(e, t) {
        const s = this.client.channels.has(e.id);
        let n;
        return (
          e.type === i.ChannelTypes.DM
            ? (n = new l(this.client, e))
            : e.type === i.ChannelTypes.GROUP_DM
            ? (n = new m(this.client, e))
            : ((t = t || this.client.guilds.get(e.guild_id)),
              s
                ? (n = this.client.channels.get(e.id))
                : t &&
                  (e.type === i.ChannelTypes.TEXT
                    ? ((n = new c(t, e)), t.channels.set(n.id, n))
                    : e.type === i.ChannelTypes.VOICE
                    ? ((n = new u(t, e)), t.channels.set(n.id, n))
                    : e.type === i.ChannelTypes.CATEGORY &&
                      ((n = new a(t, e)), t.channels.set(n.id, n)))),
          n && !s
            ? (this.pastReady && this.client.emit(i.Events.CHANNEL_CREATE, n),
              this.client.channels.set(n.id, n),
              n)
            : s
            ? n
            : null
        );
      }
      newEmoji(e, t) {
        const s = t.emojis.has(e.id);
        if (e && !s) {
          let s = new h(t, e);
          return (
            this.client.emit(i.Events.GUILD_EMOJI_CREATE, s),
            t.emojis.set(s.id, s),
            s
          );
        }
        return s ? t.emojis.get(e.id) : null;
      }
      killEmoji(e) {
        e instanceof h &&
          e.guild &&
          (this.client.emit(i.Events.GUILD_EMOJI_DELETE, e),
          e.guild.emojis.delete(e.id));
      }
      killGuild(e) {
        const t = this.client.guilds.has(e.id);
        this.client.guilds.delete(e.id),
          t && this.pastReady && this.client.emit(i.Events.GUILD_DELETE, e);
      }
      killUser(e) {
        this.client.users.delete(e.id);
      }
      killChannel(e) {
        this.client.channels.delete(e.id),
          e instanceof d && e.guild.channels.delete(e.id);
      }
      updateGuild(e, t) {
        const s = n.cloneObject(e);
        e.setup(t),
          this.pastReady && this.client.emit(i.Events.GUILD_UPDATE, s, e);
      }
      updateChannel(e, t) {
        e.setup(t);
      }
      updateEmoji(e, t) {
        const s = n.cloneObject(e);
        return (
          e.setup(t), this.client.emit(i.Events.GUILD_EMOJI_UPDATE, s, e), e
        );
      }
    };
  },
  function (e, t, s) {
    const i = s(0),
      n = s(54);
    e.exports = class ClientManager {
      constructor(e) {
        (this.client = e), (this.heartbeatInterval = null);
      }
      get status() {
        return this.connection ? this.connection.status : i.Status.IDLE;
      }
      connectToWebSocket(e, t, s) {
        this.client.emit(i.Events.DEBUG, `Authenticated using token ${e}`),
          (this.client.token = e);
        const r = this.client.setTimeout(
          () => s(new Error(i.Errors.TOOK_TOO_LONG)),
          3e5
        );
        this.client.rest.methods.getGateway().then((o) => {
          const a = i.DefaultOptions.ws.version,
            l = `${o.url}/?v=${a}&encoding=${n.ENCODING}`;
          this.client.emit(i.Events.DEBUG, `Using gateway ${l}`),
            this.client.ws.connect(l),
            this.client.ws.connection.once("error", s),
            this.client.ws.connection.once("close", (e) => {
              4004 === e.code && s(new Error(i.Errors.BAD_LOGIN)),
                4010 === e.code && s(new Error(i.Errors.INVALID_SHARD)),
                4011 === e.code && s(new Error(i.Errors.SHARDING_REQUIRED));
            }),
            this.client.once(i.Events.READY, () => {
              t(e), this.client.clearTimeout(r);
            });
        }, s);
      }
      destroy() {
        return (
          this.client.ws.destroy(),
          this.client.rest.destroy(),
          this.client.user
            ? this.client.user.bot
              ? ((this.client.token = null), Promise.resolve())
              : this.client.rest.methods.logout().then(() => {
                  this.client.token = null;
                })
            : Promise.resolve()
        );
      }
    };
  },
  function (e, t, s) {
    const i = s(0),
      n = [
        i.WSEvents.READY,
        i.WSEvents.RESUMED,
        i.WSEvents.GUILD_CREATE,
        i.WSEvents.GUILD_DELETE,
        i.WSEvents.GUILD_MEMBERS_CHUNK,
        i.WSEvents.GUILD_MEMBER_ADD,
        i.WSEvents.GUILD_MEMBER_REMOVE,
      ];
    e.exports = class WebSocketPacketManager {
      constructor(e) {
        (this.ws = e),
          (this.handlers = {}),
          (this.queue = []),
          this.register(i.WSEvents.READY, s(85)),
          this.register(i.WSEvents.RESUMED, s(87)),
          this.register(i.WSEvents.GUILD_CREATE, s(88)),
          this.register(i.WSEvents.GUILD_DELETE, s(89)),
          this.register(i.WSEvents.GUILD_UPDATE, s(90)),
          this.register(i.WSEvents.GUILD_BAN_ADD, s(91)),
          this.register(i.WSEvents.GUILD_BAN_REMOVE, s(92)),
          this.register(i.WSEvents.GUILD_MEMBER_ADD, s(93)),
          this.register(i.WSEvents.GUILD_MEMBER_REMOVE, s(94)),
          this.register(i.WSEvents.GUILD_MEMBER_UPDATE, s(95)),
          this.register(i.WSEvents.GUILD_ROLE_CREATE, s(96)),
          this.register(i.WSEvents.GUILD_ROLE_DELETE, s(97)),
          this.register(i.WSEvents.GUILD_ROLE_UPDATE, s(98)),
          this.register(i.WSEvents.GUILD_EMOJIS_UPDATE, s(99)),
          this.register(i.WSEvents.GUILD_MEMBERS_CHUNK, s(100)),
          this.register(i.WSEvents.CHANNEL_CREATE, s(101)),
          this.register(i.WSEvents.CHANNEL_DELETE, s(102)),
          this.register(i.WSEvents.CHANNEL_UPDATE, s(103)),
          this.register(i.WSEvents.CHANNEL_PINS_UPDATE, s(104)),
          this.register(i.WSEvents.PRESENCE_UPDATE, s(105)),
          this.register(i.WSEvents.USER_UPDATE, s(106)),
          this.register(i.WSEvents.USER_NOTE_UPDATE, s(107)),
          this.register(i.WSEvents.USER_SETTINGS_UPDATE, s(108)),
          this.register(i.WSEvents.USER_GUILD_SETTINGS_UPDATE, s(109)),
          this.register(i.WSEvents.VOICE_STATE_UPDATE, s(110)),
          this.register(i.WSEvents.TYPING_START, s(111)),
          this.register(i.WSEvents.MESSAGE_CREATE, s(112)),
          this.register(i.WSEvents.MESSAGE_DELETE, s(113)),
          this.register(i.WSEvents.MESSAGE_UPDATE, s(114)),
          this.register(i.WSEvents.MESSAGE_DELETE_BULK, s(115)),
          this.register(i.WSEvents.VOICE_SERVER_UPDATE, s(116)),
          this.register(i.WSEvents.GUILD_SYNC, s(117)),
          this.register(i.WSEvents.RELATIONSHIP_ADD, s(118)),
          this.register(i.WSEvents.RELATIONSHIP_REMOVE, s(119)),
          this.register(i.WSEvents.MESSAGE_REACTION_ADD, s(120)),
          this.register(i.WSEvents.MESSAGE_REACTION_REMOVE, s(121)),
          this.register(i.WSEvents.MESSAGE_REACTION_REMOVE_ALL, s(122));
      }
      get client() {
        return this.ws.client;
      }
      register(e, t) {
        this.handlers[e] = new t(this);
      }
      handleQueue() {
        this.queue.forEach((e, t) => {
          this.handle(this.queue[t], !0), this.queue.splice(t, 1);
        });
      }
      handle(e, t = !1) {
        return (
          e.op === i.OPCodes.HEARTBEAT_ACK
            ? (this.ws.client._pong(this.ws.client._pingTimestamp),
              (this.ws.lastHeartbeatAck = !0),
              this.ws.client.emit("debug", "Heartbeat acknowledged"))
            : e.op === i.OPCodes.HEARTBEAT &&
              (this.client.ws.send({
                op: i.OPCodes.HEARTBEAT,
                d: this.client.ws.sequence,
              }),
              this.ws.client.emit("debug", "Received gateway heartbeat")),
          this.ws.status === i.Status.RECONNECTING &&
            ((this.ws.reconnecting = !1), this.ws.checkIfReady()),
          this.ws.setSequence(e.s),
          void 0 === this.ws.disabledEvents[e.t] &&
            (this.ws.status !== i.Status.READY && -1 === n.indexOf(e.t)
              ? (this.queue.push(e), !1)
              : (!t && this.queue.length > 0 && this.handleQueue(),
                !!this.handlers[e.t] && this.handlers[e.t].handle(e)))
        );
      }
    };
  },
  function (e, t, s) {
    const i = s(1),
      n = s(55);
    e.exports = class ReadyHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d;
        t.ws.heartbeat(),
          (s.user.user_settings = s.user_settings),
          (s.user.user_guild_settings = s.user_guild_settings);
        const i = new n(t, s.user);
        (t.user = i), (t.readyAt = new Date()), t.users.set(i.id, i);
        for (const e of s.guilds)
          t.guilds.has(e.id) || t.dataManager.newGuild(e);
        for (const e of s.private_channels) t.dataManager.newChannel(e);
        for (const e of s.relationships) {
          const s = t.dataManager.newUser(e.user);
          1 === e.type
            ? t.user.friends.set(s.id, s)
            : 2 === e.type && t.user.blocked.set(s.id, s);
        }
        s.presences = s.presences || [];
        for (const e of s.presences)
          t.dataManager.newUser(e.user), t._setPresence(e.user.id, e);
        if (s.notes)
          for (const e in s.notes) {
            let i = s.notes[e];
            i.length || (i = null), t.user.notes.set(e, i);
          }
        !t.user.bot &&
          t.options.sync &&
          t.setInterval(t.syncGuilds.bind(t), 3e4),
          t.users.has("1") ||
            t.dataManager.newUser({
              id: "1",
              username: "Clyde",
              discriminator: "0000",
              avatar:
                "https://discordapp.com/assets/f78426a064bc9dd24847519259bc42af.png",
              bot: !0,
              status: "online",
              game: null,
              verified: !0,
            });
        const r = t.setTimeout(() => {
          t.ws.connection.triggerReady();
        }, 1200 * s.guilds.length);
        t.setMaxListeners(s.guilds.length + 10),
          t.once("ready", () => {
            t.syncGuilds(), t.setMaxListeners(10), t.clearTimeout(r);
          });
        const o = this.packetManager.ws;
        (o.sessionID = s.session_id),
          (o._trace = s._trace),
          t.emit("debug", `READY ${o._trace.join(" -> ")} ${o.sessionID}`),
          o.checkIfReady();
      }
    };
  },
  function (e, t, s) {
    const i = s(0);
    e.exports = class ClientUserChannelOverride {
      constructor(e) {
        this.patch(e);
      }
      patch(e) {
        for (const t of Object.keys(i.UserChannelOverrideMap)) {
          const s = i.UserChannelOverrideMap[t];
          e.hasOwnProperty(t) &&
            ("function" == typeof s
              ? (this[s.name] = s(e[t]))
              : (this[s] = e[t]));
        }
      }
    };
  },
  function (e, t, s) {
    const i = s(1),
      n = s(0);
    e.exports = class ResumedHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = t.ws.connection;
        (s._trace = e.d._trace),
          (s.status = n.Status.READY),
          this.packetManager.handleQueue();
        const i = s.sequence - s.closeSequence;
        s.debug(`RESUMED ${s._trace.join(" -> ")} | replayed ${i} events.`),
          t.emit(n.Events.RESUME, i),
          s.heartbeat();
      }
    };
  },
  function (e, t, s) {
    const i = s(1);
    e.exports = class GuildCreateHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d,
          i = t.guilds.get(s.id);
        i
          ? i.available ||
            s.unavailable ||
            (i.setup(s), this.packetManager.ws.checkIfReady())
          : t.dataManager.newGuild(s);
      }
    };
  },
  function (e, t, s) {
    const i = s(1),
      n = s(0);
    e.exports = class GuildDeleteHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d,
          i = t.actions.GuildDelete.handle(s);
        i.guild && t.emit(n.Events.GUILD_DELETE, i.guild);
      }
    };
  },
  function (e, t, s) {
    const i = s(1);
    e.exports = class GuildUpdateHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d;
        t.actions.GuildUpdate.handle(s);
      }
    };
  },
  function (e, t, s) {
    const i = s(1),
      n = s(0);
    e.exports = class GuildBanAddHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d,
          i = t.guilds.get(s.guild_id),
          r = t.users.get(s.user.id);
        i && r && t.emit(n.Events.GUILD_BAN_ADD, i, r);
      }
    };
  },
  function (e, t, s) {
    const i = s(1);
    e.exports = class GuildBanRemoveHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d;
        t.actions.GuildBanRemove.handle(s);
      }
    };
  },
  function (e, t, s) {
    const i = s(1);
    e.exports = class GuildMemberAddHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d,
          i = t.guilds.get(s.guild_id);
        i && (i.memberCount++, i._addMember(s));
      }
    };
  },
  function (e, t, s) {
    const i = s(1);
    e.exports = class GuildMemberRemoveHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d;
        t.actions.GuildMemberRemove.handle(s);
      }
    };
  },
  function (e, t, s) {
    const i = s(1);
    e.exports = class GuildMemberUpdateHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d,
          i = t.guilds.get(s.guild_id);
        if (i) {
          const e = i.members.get(s.user.id);
          e && i._updateMember(e, s);
        }
      }
    };
  },
  function (e, t, s) {
    const i = s(1);
    e.exports = class GuildRoleCreateHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d;
        t.actions.GuildRoleCreate.handle(s);
      }
    };
  },
  function (e, t, s) {
    const i = s(1);
    e.exports = class GuildRoleDeleteHandler extends i {
      handle(e) {
        const t = this.packetManager.client,
          s = e.d;
        t.actions.Gu
            ((i = s.members.get(e.user.id)),
            s.memberCount--,
            i
              ? (s._removeMember(i),
                this.deleted.set(s.id + e.user.id, i),
                t.status === n.Status.READY &&
                  t.emit(n.Events.GUILD_MEMBER_REMOVE, i),
                this.scheduleForDeletion(s.id, e.user.id))
              : (i = this.deleted.get(s.id + e.user.id) || null),
            i && (i.deleted = !0)),
          { guild: s, member: i }
        );
      }
      scheduleForDeletion(e, t) {
        this.client.setTimeout(
          () => this.deleted.delete(e + t),
          this.client.options.restWsBridgeTimeout
        );
      }
    };
  },
  function (e, t, s) {
    const i = s(2),
      n = s(0);
    e.exports = class GuildBanRemove extends i {
      handle(e) {
        const t = this.client,
          s = t.guilds.get(e.guild_id),
          i = t.dataManager.newUser(e.user);
        s && i && t.emit(n.Events.GUILD_BAN_REMOVE, s, i);
      }
    };
  },
  function (e, t, s) {
    const i = s(2),
      n = s(0),
      r = s(8);
    e.exports = class GuildRoleCreate extends i {
      handle(e) {
        const t = this.client,
          s = t.guilds.get(e.guild_id);
        let i;
        if (s) {
          const o = s.roles.has(e.role.id);
          (i = new r(s, e.role)),
            s.roles.set(i.id, i),
            o || t.emit(n.Events.GUILD_ROLE_CREATE, i);
        }
        return { role: i };
      }
    };
  },
  function (e, t, s) {
    const i = s(2),
      n = s(0);
    e.exports = class GuildRoleDeleteAction extends i {
      constructor(e) {
        super(e), (this.deleted = new Map());
      }
      handle(e) {
        const t = this.client,
          s = t.guilds.get(e.guild_id);
        let i;
        return (
          s &&
            ((i = s.roles.get(e.role_id))
              ? (s.roles.delete(e.role_id),
                this.deleted.set(s.id + e.role_id, i),
                this.scheduleForDeletion(s.id, e.role_id),
                t.emit(n.Events.GUILD_ROLE_DELETE, i))
              : (i = this.deleted.get(s.id + e.role_id) || null),
            i && (i.deleted = !0)),
          { role: i }
        );
      }
      scheduleForDeletion(e, t) {
        this.client.setTimeout(
          () => this.deleted.delete(e + t),
          this.client.options.restWsBridgeTimeout
        );
      }
    };
  },
  function (e, t, s) {
    const i = s(2),
      n = s(0),
      r = s(4);
    e.exports = class GuildRoleUpdateAction extends i {
      handle(e) {
        const t = this.client,
          s = t.guilds.get(e.guild_id);
        if (s) {
          const i = e.role;
          let o = null;
          const a = s.roles.get(i.id);
          return (
            a &&
              ((o = r.cloneObject(a)),
              a.setup(e.role),
              t.emit(n.Events.GUILD_ROLE_UPDATE, o, a)),
            { old: o, updated: a }
          );
        }
        return { old: null, updated: null };
      }
    };
  },
  function (e, t, s) {
    const i = s(2);
    e.exports = class UserGetAction extends i {
      handle(e) {
        return { user: this.client.dataManager.newUser(e) };
      }
    };
  },
  function (e, t, s) {
    const i = s(2),
      n = s(0),
      r = s(4);
    e.exports = class UserUpdateAction extends i {
      handle(e) {
        const t = this.client;
        if (t.user) {
          if (t.user.equals(e)) return { old: t.user, updated: t.user };
          const s = r.cloneObject(t.user);
          return (
            t.user.patch(e),
            t.emit(n.Events.USER_UPDATE, s, t.user),
            { old: s, updated: t.user }
          );
        }
        return { old: null, updated: null };
      }
    };
  },
  function (e, t, s) {
    const i = s(2),
      n = s(0);
    e.exports = class UserNoteUpdateAction extends i {
      handle(e) {
        const t = this.client,
          s = t.user.notes.get(e.id),
          i = e.note.length ? e.note : null;
        return (
          t.user.notes.set(e.id, i),
          t.emit(n.Events.USER_NOTE_UPDATE, e.id, s, i),
          { old: s, updated: i }
        );
      }
    };
  },
  function (e, t, s) {
    const i = s(2);
    e.exports = class GuildSync extends i {
      handle(e) {
        const t = this.client.guilds.get(e.id);
        if (t) {
          if (e.presences)
            for (const s of e.presences) t._setPresence(s.user.id, s);
          if (e.members)
            for (const s of e.members) {
              const e = t.members.get(s.user.id);
              e ? t._updateMember(e, s) : t._addMember(s, !1);
            }
          "large" in e && (t.large = e.large);
        }
      }
    };
  },
  function (e, t, s) {
    const i = s(2);
    e.exports = class GuildEmojiCreateAction extends i {
      handle(e, t) {
        return { emoji: this.client.dataManager.newEmoji(t, e) };
      }
    };
  },
  function (e, t, s) {
    const i = s(2);
    e.exports = class GuildEmojiDeleteAction extends i {
      handle(e) {
        return (
          this.client.dataManager.killEmoji(e), (e.deleted = !0), { emoji: e }
        );
      }
    };
  },
  function (e, t, s) {
    const i = s(2);
    e.exports = class GuildEmojiUpdateAction extends i {
      handle(e, t) {
        return { emoji: this.client.dataManager.updateEmoji(e, t) };
      }
    };
  },
  function (e, t, s) {
    const i = s(2);
    e.exports = class GuildEmojisUpdateAction extends i {
      handle(e) {
        const t = this.client.guilds.get(e.guild_id);
        if (!t || !t.emojis) return;
        const s = (function (e) {
          const t = new Map();
          for (const s of e) t.set(...s);
          return t;
        })(t.emojis.entries());
        for (const i of e.emojis) {
          const e = t.emojis.get(i.id);
          e
            ? (s.delete(i.id),
              e.equals(i, !0) ||
                this.client.actions.GuildEmojiUpdate.handle(e, i))
            : this.client.actions.GuildEmojiCreate.handle(t, i);
        }
        for (const e of s.values())
          this.client.actions.GuildEmojiDelete.handle(e);
      }
    };
  },
  function (e, t, s) {
    const i = s(2);
    e.exports = class GuildRolesPositionUpdate extends i {
      handle(e) {
        const t = this.client.guilds.get(e.guild_id);
        if (t)
          for (const s of e.roles) {
            const e = t.roles.get(s.id);
            e && (e.position = s.position);
          }
        return { guild: t };
      }
    };
  },
  function (e, t, s) {
    const i = s(2);
    e.exports = class GuildChannelsPositionUpdate extends i {
      handle(e) {
        const t = this.client.guilds.get(e.guild_id);
        if (t)
          for (const s of e.channels) {
            const e = t.channels.get(s.id);
            e && (e.position = s.position);
          }
        return { guild: t };
      }
    };
  },
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t) {},
  function (e, t, s) {
    const i = s(24),
      n = s(38),
      r = s(28),
      o = s(0),
      a = s(4);
    e.exports = class WebhookClient extends i {
      constructor(e, t, s) {
        super(null, e, t),
          (this.options = a.mergeDefault(o.DefaultOptions, s)),
          (this.rest = new n(this)),
          (this.resolver = new r(this)),
          (this._timeouts = new Set()),
          (this._intervals = new Set());
      }
      setTimeout(e, t, ...s) {
        const i = setTimeout(() => {
          e(...s), this._timeouts.delete(i);
        }, t);
        return this._timeouts.add(i), i;
      }
      clearTimeout(e) {
        clearTimeout(e), this._timeouts.delete(e);
      }
      setInterval(e, t, ...s) {
        const i = setInterval(e, t, ...s);
        return this._intervals.add(i), i;
      }
      clearInterval(e) {
        clearInterval(e), this._intervals.delete(e);
      }
      destroy() {
        for (const e of this._timeouts) clearTimeout(e);
        for (const e of this._intervals) clearInterval(e);
        this._timeouts.clear(), this._intervals.clear();
      }
    };
  },
]);
