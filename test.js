var utils = require('./utils'),
    expect =  require('expect.js');

describe('Utils', function() {

	describe('#sort()', function() {
		it('should sort given array of numbers with ascending ordering (default - without comparator)', function() {
			expect(utils.sort([2, 1, 3, 0]).join()).to.equal([0, 1, 2, 3].join());
		});
	});

	describe('#sort()', function() {
		it('should sort given array of numbers with ascending ordering (with equal comparator: 0)', function() {
			expect(utils.sort([2, 1, 1, 0], function(a, b){ return a == b; }).join()).to.equal([0, 1, 1, 2].join());
		});
	});

	describe('#sort()', function() {
		it('should sort given array of numbers with ascending ordering (with ascending comparator: 1)', function() {
			expect(utils.sort([2, 1, 3, 0], function(a, b){ return b - a; }).join()).to.equal([0, 1, 2, 3].join());
		});
	});

	describe('#sort()', function() {
		it('should sort given array of numbers with descending ordering (with descending comparator: -1)', function() {
			expect(utils.sort([2, 1, 3, 0], function(a, b){ return a - b; }).join()).to.equal([3, 2, 1, 0].join());
		});
	});

	describe('#capitalize()', function() {
		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('just do it!')).to.equal('Just do it!');
		});
	});

	describe('#capitalize()', function() {
		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('JUST DO IT!')).to.equal('Just do it!');
		});
	});

  describe('#camelize()', function() {
    it('should camelize given string', function() {
      expect(utils.camelize('just do it!')).to.equal('JustDoIt');
    });
  });

  describe('#camelize()', function() {
    it('should camelize given string', function() {
      expect(utils.camelize('just   do  it!')).to.equal('JustDoIt');
    });
  });

  describe('#camelize()', function() {
    it('should camelize given array of string', function() {
      expect(utils.camelize(['just','do','it!'])).to.equal('JustDoIt');
    });
  });

  describe('#camelize()', function() {
    it('should camelize given array of string', function() {
      expect(utils.camelize(['just try to','do','it!'])).to.equal('JustTryToDoIt');
    });
  });

  describe('#camelize()', function() {
    it('should camelize given array of string', function() {
      expect(utils.camelize([['just try to','do','it!'],'do','it!'])).to.equal('JustTryToDoItDoIt');
    });
  });

  describe('#camelize()', function() {
    it('should camelize given array of string', function() {
      expect(utils.camelize([['just   try  to','do','it!'],'do','it!'])).to.equal('JustTryToDoItDoIt');
    });
  });

  describe('#trim()', function() {
    it('should cut of any count of spaces from the beginning and from the end of the string', function() {
      expect(utils.trim('just try to do it!')).to.equal('just try to do it!');
    });
  });

  describe('#trim()', function() {
    it('should cut of any count of spaces from the beginning and from the end of the string', function() {
      expect(utils.trim('   just try to do it!')).to.equal('just try to do it!');
    });
  });

  describe('#trim()', function() {
    it('should cut of any count of spaces from the beginning and from the end of the string', function() {
      expect(utils.trim('just try to do it!     ')).to.equal('just try to do it!');
    });
  });

  describe('#trim()', function() {
    it('should cut of any count of spaces from the beginning and from the end of the string', function() {
      expect(utils.trim(' just try to do it!     ')).to.equal('just try to do it!');
    });
  });

  describe('#trim()', function() {
    it('should cut of any count of spaces from the beginning and from the end of the string', function() {
      expect(utils.trim(' just   try  to do it!     ')).to.equal('just   try  to do it!');
    });
  });

  describe('#reverse()', function() {
    it('should reverses a specified list', function() {
      expect(utils.reverse([]).join()).to.equal([].join());
    });
  });

  describe('#reverse()', function() {
    it('should reverses a specified list', function() {
      expect(utils.reverse([0]).join()).to.equal([0].join());
    });
  });

  describe('#reverse()', function() {
    it('should reverses a specified list', function() {
      expect(utils.reverse([0, 1]).join()).to.equal([1, 0].join());
    });
  });

  describe('#reverse()', function() {
    it('should reverses a specified list', function() {
      expect(utils.reverse([0, 1, 2]).join()).to.equal([2, 1, 0].join());
    });
  });

  describe('#reverse()', function() {
    it('should reverses a specified list', function() {
      expect(utils.reverse([0, 1, 2, 3]).join()).to.equal([3, 2, 1, 0].join());
    });
  });

  //describe('#map()', function() {
  //  it('should change each list element by applying handler', function() {
  //  });
  //});
  //
  //describe('#groupBy()', function() {
  //  it('should group some input sequence of element by some rule', function() {
  //  });
  //});
  //
  //describe('#once()', function() {
  //  it('should create a version of the function that can only be called one time', function() {
  //  });
  //});
  //
  //describe('#debounce()', function() {
  //  it('should create and return a new debounced version of the passed function', function() {
  //  });
  //});

});