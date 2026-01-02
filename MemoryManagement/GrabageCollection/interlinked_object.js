function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

delete family.father;
delete family.mother.husband;

// It’s not enough to delete only one of these two references, because all objects would still be reachable.

// But if we delete both, then we can see that John has no incoming reference any more:

//Unreachable island
//It is possible that the whole island of interlinked objects becomes unreachable and is removed from the memory.

//The source object is the same as above. Then:

family = null;

// Internal algorithms
// The basic garbage collection algorithm is called “mark-and-sweep”.

// The following “garbage collection” steps are regularly performed:

// The garbage collector takes roots and “marks” (remembers) them.
// Then it visits and “marks” all references from them.
// Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
// …And so on until every reachable (from the roots) references are visited.
// All objects except marked ones are removed.