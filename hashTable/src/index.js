class HashTable {
  constructor(length) {
    this.table = new Array(length);
    this.length = this.table.length;
  }
  hash(key) {
    if (typeof key === 'number') {
      return key % this.length;
    }

    let res = 0;

    for (let i = 0; i < key.length; i++) {
      res += key.charCodeAt(i);
    }
    return res % this.length;
  }

  add(keys, val) {
    const keyRes = this.hash(keys);

    if (this.table[keyRes]) {
      const duplicateElement = this.table[keyRes];

      if (duplicateElement.key !== keys) {
        this.table.push({ 'key': keys, 'value': val });
      }

      if (duplicateElement.key === keys) {
        if (duplicateElement.value instanceof Array) {
          duplicateElement.value.push(val);
        } else {
          this.table[keyRes].value = [...[duplicateElement.value], ...[val]];
        }
      }
    } else {
      this.table[keyRes] = { 'key': keys, 'value': val };
    }
  }
  remove(key) {
    const keyRes = this.hash(key);

    delete this.table[keyRes];
  }
  find(key) {
    const keyRes = this.hash(key);

    return this.table[keyRes];
  }
}

export default HashTable;
