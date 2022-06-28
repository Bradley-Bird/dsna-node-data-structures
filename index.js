class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(val) {
        this.head = new Node(val);
    }

    add(val) {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(val);
    }
    removeTail() {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    getList() {
        const listArr = [];
        let current = this.head;
        while (current.next) {
            listArr.push(current.val);
            current = current.next;
        }
        listArr.push(current.val);
        return listArr;
    }
}

const list = new LinkedList('A');
console.log(list.head);
list.add('B');
console.log(list.getList());
list.add('C');
console.log(list.getList());
list.removeTail();
console.log(list.getList());


class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
        if (node.value === this.value) {
            if (!this.left) {
              this.left = node;
            } else {
              this.left.add(node);
            }
          } else {
            if (!this.right) {
              this.right = node;
            } else {
              this.right.add(node);
            }
          }
    }
  }

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');
B.add(A);
B.add(D);
B.add(C);;
console.log(B,D);


class PersonTreeNode {
    constructor(person) {
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
      // implemented as in previous challenge
    }
  
    findPerson(name) {
      // Implement me!
    }
  }


module.exports = { LinkedList, BinaryTreeNode, PersonTreeNode };
