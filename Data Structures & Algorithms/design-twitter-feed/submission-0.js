class Twitter {
    constructor() {
        this.tweets = [];        // [{userId, tweetId, time}]
        this.following = new Map(); // userId -> Set of followeeIds
        this.time = 0;
    }

    postTweet(userId, tweetId) {
        this.tweets.push({ userId, tweetId, time: this.time++ });
    }

    getNewsFeed(userId) {
        const followed = this.following.get(userId) || new Set();
        
        return this.tweets
            .filter(t => t.userId === userId || followed.has(t.userId))
            .sort((a, b) => b.time - a.time)
            .slice(0, 10)
            .map(t => t.tweetId);
    }

    follow(followerId, followeeId) {
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set());
        }
        this.following.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (this.following.has(followerId)) {
            this.following.get(followerId).delete(followeeId);
        }
    }
}
