/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function(list1, list2) {

    // TODO: Come back to this after reviewing linked list section in videos
};



let l1 = new ListNode(1, null)
l1.next = new ListNode(2, null)
l1.next.next = new ListNode(4, null)
console.log(l1)

const metaData = [
    {
        list1: [ListNode(1,2), new ListNode(2, 4), new ListNode(4, null)]
    }
]

for(let data of metaData){
    console.log(mergeTwoLists(data.list1, []))
}