import Node from "./Node.js";

class BinarySearchTree extends Node {
  constructor(root) {
    // root dari binary tree
    this.root = root;
  }

  // mengimplementasikan method insert(data) dan remove(data)

  // method pembantu yang mana akan membuat node baru yang akan dimasukkan dan memanggil method insertNode()
  insert(data) {
    // membuat node dan menginisialisasikannya dengan data
    let newNode = new Node(data);

    // ketika root bernilai null, maka node akan ditambahkan ke tree dan akan dijadikan root
    if (this.root === null) {
      this.root = newNode;
    } else {
      // temukan posisi yang benar di tree dan tambahkan node
      this.insertNode(this.root, newNode);
    }
  }

  // method untuk memasukkan sebuah node kedalam sebuah tree
  // yang berpindah di tree untuk menemukan lokasi
  // untuk memasukkan node dengan data yang sudah diberikan
  insertNode(node, newNode) {
    // jika data lebih kecil dari node
    // data berpindah ke kiri dari tree-nya
    if (newNode.data < node.data) {
      // jika kiri bernilai null, masukkan node baru disini
      if (node.left === null) {
        node.left = newNode;
      } else {
        // jika kiri tidak bernilai null, maka node akan berulang sampai null ditemukan
        this.insertNode(node.left, newNode);
      }

      // jika data lebih besar dari node
      // data berpindah ke kanan dari tree-nya
    } else {
      // jika kanan bernilai null, masukkan node baru disini
      if (node.right === null) {
        node.right = newNode;

        // jika kanan tidak bernilai null, maka node akan berulang sampai null ditemukan
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

let bst = new BinarySearchTree(20);
console.log(bst);
