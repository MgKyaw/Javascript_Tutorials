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
