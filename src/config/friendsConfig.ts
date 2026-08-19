import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
    title: "三省文旅局",
    imgurl: "https://i0.hdslb.com/bfs/face/798f477db514516c5c213297f5de9c227571083c.jpg@128w_128h_1c_1s.webp",
    desc: "一个我朋友的ARG项目 by:Online_Always(该项目已结束请前去互联网档案馆查看存档 原网站:https://onlineyun.dpdns.org/)",
    siteurl: "https://space.bilibili.com/1705270158",
    tags: ["ARG"],
    weight: 1,
    enabled: true,
  },
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
