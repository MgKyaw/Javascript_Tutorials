function Promise(executor) {
    // invoke the executor function
    try { executor(); }
    catch(e) { reject(e); }
}

