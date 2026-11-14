class PrefixTree {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }

    insert(word) {
        let node = this;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new PrefixTree();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this;
        for (const char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEnd;
    }

    startsWith(prefix) {
        let node = this;
        for (const char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}
