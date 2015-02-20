TestMyCode.run("testing hello world function", function(assert){     
    var result = helloWorld(); 
    // is the result as we expected?
    assert.equals("hello world!", result);
});

TestMyCode.run("testing hello Mars function", function(assert){ 
    var result = helloMars(); 
    // is the result as we expected?
    assert.equals("hello world!", result);
});

TestMyCode.run("testing add function", function(assert){ 
    var result = add(5,6); 
    // is the result as we expected?
    assert.equals(11, result);
});
