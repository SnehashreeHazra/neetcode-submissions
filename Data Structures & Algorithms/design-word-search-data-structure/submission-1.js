class WordDictionary {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }

    addWord(word) {
        let node = this;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new WordDictionary();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (char === '.') {
                // Try all possible children recursively
                for (const child of Object.values(node.children)) {
                    if (child.search(word.slice(i + 1))) return true;
                }
                return false;
            }
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEnd;
    }
}
