/*!
 * ====================================================
 * kityminder - v1.3.5 - 2014-11-19
 * https://github.com/fex-team/kityminder
 * GitHub: https://github.com/fex-team/kityminder.git 
 * Copyright (c) 2014 f-cube @ FEX; Licensed MIT
 * ====================================================
 */

(function(window) {

/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android < 4.0, iOS < 6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== strundefined && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare,
		doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", function() {
				setDocument();
			}, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", function() {
				setDocument();
			});
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowclip^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android < 4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Math.random();
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android < 4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



/*
	Implementation Summary

	1. Enforce API surface and semantic compatibility with 1.9.x branch
	2. Improve the module's maintainability by reducing the storage
		paths to a single mechanism.
	3. Use the same single mechanism to support "private" and "user" data.
	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	5. Avoid exposing implementation details on user objects (eg. expando properties)
	6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// #11217 - WebKit loses check when the name is after the checked attribute
	// Support: Windows Web Apps (WWA)
	// `name` and `type` need .setAttribute for WWA
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE9-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome < 28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE 9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE 9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Support: IE >= 9
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Support: IE >= 9
		// Fix Cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit
					// jQuery.merge because push.apply(_, arraylike) throws
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit
					// jQuery.merge because push.apply(_, arraylike) throws
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Fixes #12346
					// Support: Webkit, IE
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') in IE9, see #12537
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {
				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {
				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS 5.1, Android 4.x, Android 2.3
	// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
	support.checkOn = input.value !== "";

	// Must access the parent to make an option select properly
	// Support: IE9, IE10
	support.optSelected = opt.selected;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Check if an input maintains its value after becoming a radio
	// Support: IE9, IE10
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// We assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

(function() {
var define, requireModule, require, requirejs;

(function() {
  var registry = {}, seen = {};

  define = function(name, deps, callback) {
    registry[name] = { deps: deps, callback: callback };
  };

  requirejs = require = requireModule = function(name) {
  requirejs._eak_seen = registry;

    if (seen[name]) { return seen[name]; }
    seen[name] = {};

    if (!registry[name]) {
      throw new Error("Could not find module " + name);
    }

    var mod = registry[name],
        deps = mod.deps,
        callback = mod.callback,
        reified = [],
        exports;

    for (var i=0, l=deps.length; i<l; i++) {
      if (deps[i] === 'exports') {
        reified.push(exports = {});
      } else {
        reified.push(requireModule(resolve(deps[i])));
      }
    }

    var value = callback.apply(this, reified);
    return seen[name] = exports || value;

    function resolve(child) {
      if (child.charAt(0) !== '.') { return child; }
      var parts = child.split("/");
      var parentBase = name.split("/").slice(0, -1);

      for (var i=0, l=parts.length; i<l; i++) {
        var part = parts[i];

        if (part === '..') { parentBase.pop(); }
        else if (part === '.') { continue; }
        else { parentBase.push(part); }
      }

      return parentBase.join("/");
    }
  };
})();

define("promise/all", 
  ["./utils","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /* global toString */

    var isArray = __dependency1__.isArray;
    var isFunction = __dependency1__.isFunction;

    /**
      Returns a promise that is fulfilled when all the given promises have been
      fulfilled, or rejected if any of them become rejected. The return promise
      is fulfilled with an array that gives all the values in the order they were
      passed in the `promises` array argument.

      Example:

      ```javascript
      var promise1 = RSVP.resolve(1);
      var promise2 = RSVP.resolve(2);
      var promise3 = RSVP.resolve(3);
      var promises = [ promise1, promise2, promise3 ];

      RSVP.all(promises).then(function(array){
        // The array here would be [ 1, 2, 3 ];
      });
      ```

      If any of the `promises` given to `RSVP.all` are rejected, the first promise
      that is rejected will be given as an argument to the returned promises's
      rejection handler. For example:

      Example:

      ```javascript
      var promise1 = RSVP.resolve(1);
      var promise2 = RSVP.reject(new Error("2"));
      var promise3 = RSVP.reject(new Error("3"));
      var promises = [ promise1, promise2, promise3 ];

      RSVP.all(promises).then(function(array){
        // Code here never runs because there are rejected promises!
      }, function(error) {
        // error.message === "2"
      });
      ```

      @method all
      @for RSVP
      @param {Array} promises
      @param {String} label
      @return {Promise} promise that is fulfilled when all `promises` have been
      fulfilled, or rejected if any of them become rejected.
    */
    function all(promises) {
      /*jshint validthis:true */
      var Promise = this;

      if (!isArray(promises)) {
        throw new TypeError('You must pass an array to all.');
      }

      return new Promise(function(resolve, reject) {
        var results = [], remaining = promises.length,
        promise;

        if (remaining === 0) {
          resolve([]);
        }

        function resolver(index) {
          return function(value) {
            resolveAll(index, value);
          };
        }

        function resolveAll(index, value) {
          results[index] = value;
          if (--remaining === 0) {
            resolve(results);
          }
        }

        for (var i = 0; i < promises.length; i++) {
          promise = promises[i];

          if (promise && isFunction(promise.then)) {
            promise.then(resolver(i), reject);
          } else {
            resolveAll(i, promise);
          }
        }
      });
    }

    __exports__.all = all;
  });
define("promise/asap", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var browserGlobal = (typeof window !== 'undefined') ? window : {};
    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
    var local = (typeof global !== 'undefined') ? global : (this === undefined? window:this);

    // node
    function useNextTick() {
      return function() {
        process.nextTick(flush);
      };
    }

    function useMutationObserver() {
      var iterations = 0;
      var observer = new BrowserMutationObserver(flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    function useSetTimeout() {
      return function() {
        local.setTimeout(flush, 1);
      };
    }

    var queue = [];
    function flush() {
      for (var i = 0; i < queue.length; i++) {
        var tuple = queue[i];
        var callback = tuple[0], arg = tuple[1];
        callback(arg);
      }
      queue = [];
    }

    var scheduleFlush;

    // Decide what async method to use to triggering processing of queued callbacks:
    if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
      scheduleFlush = useNextTick();
    } else if (BrowserMutationObserver) {
      scheduleFlush = useMutationObserver();
    } else {
      scheduleFlush = useSetTimeout();
    }

    function asap(callback, arg) {
      var length = queue.push([callback, arg]);
      if (length === 1) {
        // If length is 1, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        scheduleFlush();
      }
    }

    __exports__.asap = asap;
  });
define("promise/config", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var config = {
      instrument: false
    };

    function configure(name, value) {
      if (arguments.length === 2) {
        config[name] = value;
      } else {
        return config[name];
      }
    }

    __exports__.config = config;
    __exports__.configure = configure;
  });
define("promise/polyfill", 
  ["./promise","./utils","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    /*global self*/
    var RSVPPromise = __dependency1__.Promise;
    var isFunction = __dependency2__.isFunction;

    function polyfill() {
      var local;

      if (typeof global !== 'undefined') {
        local = global;
      } else if (typeof window !== 'undefined' && window.document) {
        local = window;
      } else {
        local = self;
      }

      var es6PromiseSupport = 
        "Promise" in local &&
        // Some of these methods are missing from
        // Firefox/Chrome experimental implementations
        "resolve" in local.Promise &&
        "reject" in local.Promise &&
        "all" in local.Promise &&
        "race" in local.Promise &&
        // Older version of the spec had a resolver object
        // as the arg rather than a function
        (function() {
          var resolve;
          new local.Promise(function(r) { resolve = r; });
          return isFunction(resolve);
        }());

      // !es6PromiseSupport || ~window.location.href.indexOf('rsvpromise')
      if (true) {
        local.Promise = RSVPPromise;
      }
    }

    __exports__.polyfill = polyfill;
  });
define("promise/promise", 
  ["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
    "use strict";
    var config = __dependency1__.config;
    var configure = __dependency1__.configure;
    var objectOrFunction = __dependency2__.objectOrFunction;
    var isFunction = __dependency2__.isFunction;
    var now = __dependency2__.now;
    var all = __dependency3__.all;
    var race = __dependency4__.race;
    var staticResolve = __dependency5__.resolve;
    var staticReject = __dependency6__.reject;
    var asap = __dependency7__.asap;

    var counter = 0;

    config.async = asap; // default async is asap;

    function Promise(resolver) {
      if (!isFunction(resolver)) {
        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
      }

      if (!(this instanceof Promise)) {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }

      this._subscribers = [];

      invokeResolver(resolver, this);
    }

    function invokeResolver(resolver, promise) {
      function resolvePromise(value) {
        resolve(promise, value);
      }

      function rejectPromise(reason) {
        reject(promise, reason);
      }

      try {
        resolver(resolvePromise, rejectPromise);
      } catch(e) {
        rejectPromise(e);
      }
    }

    function invokeCallback(settled, promise, callback, detail) {
      var hasCallback = isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        try {
          value = callback(detail);
          succeeded = true;
        } catch(e) {
          failed = true;
          error = e;
        }
      } else {
        value = detail;
        succeeded = true;
      }

      if (handleThenable(promise, value)) {
        return;
      } else if (hasCallback && succeeded) {
        resolve(promise, value);
      } else if (failed) {
        reject(promise, error);
      } else if (settled === FULFILLED) {
        resolve(promise, value);
      } else if (settled === REJECTED) {
        reject(promise, value);
      }
    }

    var PENDING   = void 0;
    var SEALED    = 0;
    var FULFILLED = 1;
    var REJECTED  = 2;

    function subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      subscribers[length] = child;
      subscribers[length + FULFILLED] = onFulfillment;
      subscribers[length + REJECTED]  = onRejection;
    }

    function publish(promise, settled) {
      var child, callback, subscribers = promise._subscribers, detail = promise._detail;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        invokeCallback(settled, child, callback, detail);
      }

      promise._subscribers = null;
    }

    Promise.prototype = {
      constructor: Promise,

      _state: undefined,
      _detail: undefined,
      _subscribers: undefined,

      then: function(onFulfillment, onRejection) {
        var promise = this;

        var thenPromise = new this.constructor(function() {});

        if (this._state) {
          var callbacks = arguments;
          config.async(function invokePromiseCallback() {
            invokeCallback(promise._state, thenPromise, callbacks[promise._state - 1], promise._detail);
          });
        } else {
          subscribe(this, thenPromise, onFulfillment, onRejection);
        }

        return thenPromise;
      },

      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };

    Promise.all = all;
    Promise.race = race;
    Promise.resolve = staticResolve;
    Promise.reject = staticReject;

    function handleThenable(promise, value) {
      var then = null,
      resolved;

      try {
        if (promise === value) {
          throw new TypeError("A promises callback cannot return that same promise.");
        }

        if (objectOrFunction(value)) {
          then = value.then;

          if (isFunction(then)) {
            then.call(value, function(val) {
              if (resolved) { return true; }
              resolved = true;

              if (value !== val) {
                resolve(promise, val);
              } else {
                fulfill(promise, val);
              }
            }, function(val) {
              if (resolved) { return true; }
              resolved = true;

              reject(promise, val);
            });

            return true;
          }
        }
      } catch (error) {
        if (resolved) { return true; }
        reject(promise, error);
        return true;
      }

      return false;
    }

    function resolve(promise, value) {
      if (promise === value) {
        fulfill(promise, value);
      } else if (!handleThenable(promise, value)) {
        fulfill(promise, value);
      }
    }

    function fulfill(promise, value) {
      if (promise._state !== PENDING) { return; }
      promise._state = SEALED;
      promise._detail = value;

      config.async(publishFulfillment, promise);
    }

    function reject(promise, reason) {
      if (promise._state !== PENDING) { return; }
      promise._state = SEALED;
      promise._detail = reason;

      config.async(publishRejection, promise);
    }

    function publishFulfillment(promise) {
      publish(promise, promise._state = FULFILLED);
    }

    function publishRejection(promise) {
      publish(promise, promise._state = REJECTED);
    }

    __exports__.Promise = Promise;
  });
define("promise/race", 
  ["./utils","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /* global toString */
    var isArray = __dependency1__.isArray;

    /**
      `RSVP.race` allows you to watch a series of promises and act as soon as the
      first promise given to the `promises` argument fulfills or rejects.

      Example:

      ```javascript
      var promise1 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 1");
        }, 200);
      });

      var promise2 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 2");
        }, 100);
      });

      RSVP.race([promise1, promise2]).then(function(result){
        // result === "promise 2" because it was resolved before promise1
        // was resolved.
      });
      ```

      `RSVP.race` is deterministic in that only the state of the first completed
      promise matters. For example, even if other promises given to the `promises`
      array argument are resolved, but the first completed promise has become
      rejected before the other promises became fulfilled, the returned promise
      will become rejected:

      ```javascript
      var promise1 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 1");
        }, 200);
      });

      var promise2 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          reject(new Error("promise 2"));
        }, 100);
      });

      RSVP.race([promise1, promise2]).then(function(result){
        // Code here never runs because there are rejected promises!
      }, function(reason){
        // reason.message === "promise2" because promise 2 became rejected before
        // promise 1 became fulfilled
      });
      ```

      @method race
      @for RSVP
      @param {Array} promises array of promises to observe
      @param {String} label optional string for describing the promise returned.
      Useful for tooling.
      @return {Promise} a promise that becomes fulfilled with the value the first
      completed promises is resolved with if the first completed promise was
      fulfilled, or rejected with the reason that the first completed promise
      was rejected with.
    */
    function race(promises) {
      /*jshint validthis:true */
      var Promise = this;

      if (!isArray(promises)) {
        throw new TypeError('You must pass an array to race.');
      }
      return new Promise(function(resolve, reject) {
        var results = [], promise;

        for (var i = 0; i < promises.length; i++) {
          promise = promises[i];

          if (promise && typeof promise.then === 'function') {
            promise.then(resolve, reject);
          } else {
            resolve(promise);
          }
        }
      });
    }

    __exports__.race = race;
  });
define("promise/reject", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**
      `RSVP.reject` returns a promise that will become rejected with the passed
      `reason`. `RSVP.reject` is essentially shorthand for the following:

      ```javascript
      var promise = new RSVP.Promise(function(resolve, reject){
        reject(new Error('WHOOPS'));
      });

      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```

      Instead of writing the above, your code now simply becomes the following:

      ```javascript
      var promise = RSVP.reject(new Error('WHOOPS'));

      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```

      @method reject
      @for RSVP
      @param {Any} reason value that the returned promise will be rejected with.
      @param {String} label optional string for identifying the returned promise.
      Useful for tooling.
      @return {Promise} a promise that will become rejected with the given
      `reason`.
    */
    function reject(reason) {
      /*jshint validthis:true */
      var Promise = this;

      return new Promise(function (resolve, reject) {
        reject(reason);
      });
    }

    __exports__.reject = reject;
  });
define("promise/resolve", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function resolve(value) {
      /*jshint validthis:true */
      if (value && typeof value === 'object' && value.constructor === this) {
        return value;
      }

      var Promise = this;

      return new Promise(function(resolve) {
        resolve(value);
      });
    }

    __exports__.resolve = resolve;
  });
define("promise/utils", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function objectOrFunction(x) {
      return isFunction(x) || (typeof x === "object" && x !== null);
    }

    function isFunction(x) {
      return typeof x === "function";
    }

    function isArray(x) {
      return Object.prototype.toString.call(x) === "[object Array]";
    }

    // Date.now is not available in browsers < IE9
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
    var now = Date.now || function() { return new Date().getTime(); };


    __exports__.objectOrFunction = objectOrFunction;
    __exports__.isFunction = isFunction;
    __exports__.isArray = isArray;
    __exports__.now = now;
  });
requireModule('promise/polyfill').polyfill();
}());
/*
 ### jQuery XML to JSON Plugin v1.3 - 2013-02-18 ###
 * http://www.fyneworks.com/ - diego@fyneworks.com
	* Licensed under http://en.wikipedia.org/wiki/MIT_License
 ###
 Website: http://www.fyneworks.com/jquery/xml-to-json/
*//*
 # INSPIRED BY: http://www.terracoder.com/
           AND: http://www.thomasfrank.se/xml_to_json.html
											AND: http://www.kawa.net/works/js/xml/objtree-e.html
*//*
 This simple script converts XML (document of code) into a JSON object. It is the combination of 2
 'xml to json' great parsers (see below) which allows for both 'simple' and 'extended' parsing modes.
*/
// Avoid collisions
;if(window.jQuery) (function($){
 
 // Add function to jQuery namespace
 $.extend({
  
  // converts xml documents and xml text to json object
  xml2json: function(xml, extended) {
   if(!xml) return {}; // quick fail
   
   //### PARSER LIBRARY
   // Core function
   function parseXML(node, simple){
    if(!node) return null;
    var txt = '', obj = null, att = null;
    var nt = node.nodeType, nn = jsVar(node.localName || node.nodeName);
    var nv = node.text || node.nodeValue || '';
    /*DBG*/ //if(window.console) console.log(['x2j',nn,nt,nv.length+' bytes']);
    if(node.childNodes){
     if(node.childNodes.length>0){
      /*DBG*/ //if(window.console) console.log(['x2j',nn,'CHILDREN',node.childNodes]);
      $.each(node.childNodes, function(n,cn){
       var cnt = cn.nodeType, cnn = jsVar(cn.localName || cn.nodeName);
       var cnv = cn.text || cn.nodeValue || '';
       /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>a',cnn,cnt,cnv]);
       if(cnt == 8){
        /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>b',cnn,'COMMENT (ignore)']);
        return; // ignore comment node
       }
       else if(cnt == 3 || cnt == 4 || !cnn){
        // ignore white-space in between tags
        if(cnv.match(/^\s+$/)){
         /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>c',cnn,'WHITE-SPACE (ignore)']);
         return;
        };
        /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>d',cnn,'TEXT']);
        txt += cnv.replace(/^\s+/,'').replace(/\s+$/,'');
								// make sure we ditch trailing spaces from markup
       }
       else{
        /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>e',cnn,'OBJECT']);
        obj = obj || {};
        if(obj[cnn]){
         /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>f',cnn,'ARRAY']);
         
									// http://forum.jquery.com/topic/jquery-jquery-xml2json-problems-when-siblings-of-the-same-tagname-only-have-a-textnode-as-a-child
									if(!obj[cnn].length) obj[cnn] = myArr(obj[cnn]);
									obj[cnn] = myArr(obj[cnn]);
         
									obj[cnn][ obj[cnn].length ] = parseXML(cn, true/* simple */);
         obj[cnn].length = obj[cnn].length;
        }
        else{
         /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>g',cnn,'dig deeper...']);
         obj[cnn] = parseXML(cn);
        };
       };
      });
     };//node.childNodes.length>0
    };//node.childNodes
    if(node.attributes){
     if(node.attributes.length>0){
      /*DBG*/ //if(window.console) console.log(['x2j',nn,'ATTRIBUTES',node.attributes])
      att = {}; obj = obj || {};
      $.each(node.attributes, function(a,at){
       var atn = jsVar(at.name), atv = at.value;
       att[atn] = atv;
       if(obj[atn]){
        /*DBG*/ //if(window.console) console.log(['x2j',nn,'attr>',atn,'ARRAY']);
        
								// http://forum.jquery.com/topic/jquery-jquery-xml2json-problems-when-siblings-of-the-same-tagname-only-have-a-textnode-as-a-child
								//if(!obj[atn].length) obj[atn] = myArr(obj[atn]);//[ obj[ atn ] ];
        obj[cnn] = myArr(obj[cnn]);
								
								obj[atn][ obj[atn].length ] = atv;
        obj[atn].length = obj[atn].length;
       }
       else{
        /*DBG*/ //if(window.console) console.log(['x2j',nn,'attr>',atn,'TEXT']);
        obj[atn] = atv;
       };
      });
      //obj['attributes'] = att;
     };//node.attributes.length>0
    };//node.attributes
    if(obj){
     obj = $.extend( (txt!='' ? new String(txt) : {}),/* {text:txt},*/ obj || {}/*, att || {}*/);
     //txt = (obj.text) ? (typeof(obj.text)=='object' ? obj.text : [obj.text || '']).concat([txt]) : txt;
     txt = (obj.text) ? ([obj.text || '']).concat([txt]) : txt;
     if(txt) obj.text = txt;
     txt = '';
    };
    var out = obj || txt;
    //console.log([extended, simple, out]);
    if(extended){
     if(txt) out = {};//new String(out);
     txt = out.text || txt || '';
     if(txt) out.text = txt;
     if(!simple) out = myArr(out);
    };
    return out;
   };// parseXML
   // Core Function End
   // Utility functions
   var jsVar = function(s){ return String(s || '').replace(/-/g,"_"); };
   
			// NEW isNum function: 01/09/2010
			// Thanks to Emile Grau, GigaTecnologies S.L., www.gigatransfer.com, www.mygigamail.com
			function isNum(s){
				// based on utility function isNum from xml2json plugin (http://www.fyneworks.com/ - diego@fyneworks.com)
				// few bugs corrected from original function :
				// - syntax error : regexp.test(string) instead of string.test(reg)
				// - regexp modified to accept  comma as decimal mark (latin syntax : 25,24 )
				// - regexp modified to reject if no number before decimal mark  : ".7" is not accepted
				// - string is "trimmed", allowing to accept space at the beginning and end of string
				var regexp=/^((-)?([0-9]+)(([\.\,]{0,1})([0-9]+))?$)/
				return (typeof s == "number") || regexp.test(String((s && typeof s == "string") ? jQuery.trim(s) : ''));
			};
			// OLD isNum function: (for reference only)
			//var isNum = function(s){ return (typeof s == "number") || String((s && typeof s == "string") ? s : '').test(/^((-)?([0-9]*)((\.{0,1})([0-9]+))?$)/); };
																
   var myArr = function(o){
    
				// http://forum.jquery.com/topic/jquery-jquery-xml2json-problems-when-siblings-of-the-same-tagname-only-have-a-textnode-as-a-child
				//if(!o.length) o = [ o ]; o.length=o.length;
    if(!$.isArray(o)) o = [ o ]; o.length=o.length;
				
				// here is where you can attach additional functionality, such as searching and sorting...
    return o;
   };
   // Utility functions End
   //### PARSER LIBRARY END
   
   // Convert plain text to xml
   if(typeof xml=='string') xml = $.text2xml(xml);
   
   // Quick fail if not xml (or if this is a node)
   if(!xml.nodeType) return;
   if(xml.nodeType == 3 || xml.nodeType == 4) return xml.nodeValue;
   
   // Find xml root node
   var root = (xml.nodeType == 9) ? xml.documentElement : xml;
   
   // Convert xml to json
   var out = parseXML(root, true /* simple */);
   
   // Clean-up memory
   xml = null; root = null;
   
   // Send output
   return out;
  },
  
  // Convert text to XML DOM
  text2xml: function(str) {
   // NOTE: I'd like to use jQuery for this, but jQuery makes all tags uppercase
   //return $(xml)[0];
   
   /* prior to jquery 1.9 */
   /*
   var out;
   try{
    var xml = ((!$.support.opacity && !$.support.style))?new ActiveXObject("Microsoft.XMLDOM"):new DOMParser();
    xml.async = false;
   }catch(e){ throw new Error("XML Parser could not be instantiated") };
   try{
    if((!$.support.opacity && !$.support.style)) out = (xml.loadXML(str))?xml:false;
    else out = xml.parseFromString(str, "text/xml");
   }catch(e){ throw new Error("Error parsing XML string") };
   return out;
   */

   /* jquery 1.9+ */
   return $.parseXML(str);
  }
		
 }); // extend $

})(jQuery);
(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});
var jhtmls="undefined"==typeof exports?jhtmls||{}:exports;void function(e){"use strict";function n(e){return String(e).replace(/["<>& ]/g,function(e){return"&"+u[e]+";"})}function t(e){var n=[];return n.push("with(this){"),n.push(e.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g,function(e){return['!#{unescape("',escape(e),'")}'].join("")}).replace(/[\r\n]+/g,"\n").replace(/^\n+|\s+$/gm,"").replace(/^([ \w\t_$]*([^&\^?|\n\w\/'"{}\[\]+\-():; \t=\.$_]|:\/\/).*$|^(?!\s*(else|do|try|finally|void|typeof\s[\w$_]*)\s*$)[^'":;{}()\n|=&\/^?]+$)\s?/gm,function(e){return e=e.replace(/&none;/g,"").replace(/["'\\]/g,"\\$&").replace(/\n/g,"\\n").replace(/(!?#)\{(.*?)\}|(!?\$)([a-z_]+\w*(?:\.[a-z_]+\w*)*)/g,function(e,n,t,r,u){if(r&&(n=r,t=u),!t)return"";t=t.replace(/\\n/g,"\n").replace(/\\([\\'"])/g,"$1");var o=/^[a-z$][\w+$]+$/i.test(t)&&!/^(true|false|NaN|null|this)$/.test(t);return["',",o?["typeof ",t,"==='undefined'?'':"].join(""):"","#"===n||"$"===n?"_encode_":"","(",t,"),'"].join("")}),e=["'",e,"'"].join("").replace(/^'',|,''$/g,""),e?["_output_.push(",e,");"].join(""):""})),n.push("}"),new Function("_output_","_encode_","helper","jhtmls",n.join(""))}function r(r,u,o){"function"==typeof r&&(r=String(r).replace(/^[^\{]*\{\s*\/\*!?[ \f\t\v]*\n?|[ \f\t\v]*\*\/[;|\s]*\}$/g,""));var i=t(r),s=function(t,r){r=r||e;var u=[];return i.call(t,u,n,r,e),u.join("")};return arguments.length<=1?s:s(u,o)}var u={'"':"quot","<":"lt",">":"gt","&":"amp"," ":"nbsp"};e.render=r}(jhtmls);
/*!
 * ====================================================
 * Flex UI - v1.0.0 - 2014-09-29
 * https://github.com/fex-team/fui
 * GitHub: https://github.com/fex-team/fui.git 
 * Copyright (c) 2014 Baidu Kity Group; Licensed MIT
 * ====================================================
 */

(function () {
var _p = {
    r: function(index) {
        if (_p[index].inited) {
            return _p[index].value;
        }
        if (typeof _p[index].value === "function") {
            var module = {
                exports: {}
            }, returnValue = _p[index].value(null, module.exports, module);
            _p[index].inited = true;
            _p[index].value = returnValue;
            if (returnValue !== undefined) {
                return returnValue;
            } else {
                for (var key in module.exports) {
                    if (module.exports.hasOwnProperty(key)) {
                        _p[index].inited = true;
                        _p[index].value = module.exports;
                        return module.exports;
                    }
                }
            }
        } else {
            _p[index].inited = true;
            return _p[index].value;
        }
    }
};

//src/base/creator.js
/**
 * UI构造工厂, 提供可通过参数配置项创建多个构件的机制.
 */
_p[0] = {
    value: function(require) {
        var Creator = {}, $ = _p.r(4), FUI_NS = _p.r(11);
        $.extend(Creator, {
            parse: function(options) {
                var pool = [];
                if ($.isArray(options)) {
                    $.each(options, function(i, opt) {
                        pool.push(getInstance(opt));
                    });
                    return pool;
                } else {
                    return getInstance(options);
                }
            }
        });
        function getInstance(option) {
            var Constructor = FUI_NS[option.clazz];
            if (!Constructor) {
                return null;
            }
            return new Constructor(option);
        }
        return Creator;
    }
};

//src/base/exports.js
/**
 * 模块暴露
 */
_p[1] = {
    value: function(require) {
        var FUI_NS = _p.r(11);
        // 配置参数必须最先注册
        FUI_NS.___register({
            ALLOW_FOCUS: true
        });
        FUI_NS.___register({
            Widget: _p.r(60),
            Icon: _p.r(42),
            Label: _p.r(48),
            Button: _p.r(37),
            ToggleButton: _p.r(59),
            Buttonset: _p.r(36),
            Separator: _p.r(56),
            Item: _p.r(46),
            Input: _p.r(45),
            InputButton: _p.r(43),
            Mask: _p.r(49),
            ColorPicker: _p.r(38),
            Tabs: _p.r(58),
            SpinButton: _p.r(57),
            Container: _p.r(39),
            Panel: _p.r(51),
            PPanel: _p.r(54),
            LabelPanel: _p.r(47),
            Menu: _p.r(50),
            InputMenu: _p.r(44),
            ButtonMenu: _p.r(34),
            DropPanel: _p.r(41),
            Popup: _p.r(53),
            PopupMenu: _p.r(52),
            SelectMenu: _p.r(55),
            Dialog: _p.r(40),
            Utils: _p.r(13),
            Creator: _p.r(0)
        });
        FUI_NS.__export();
    }
};

//src/base/extensions.js
/**
 * 扩展模块暴露
 */
_p[2] = {
    value: function(require) {
        var FUI_NS = _p.r(11);
        FUI_NS.___register({
            TablePicker: _p.r(17)
        });
    }
};

//src/base/jhtmls.js
/**
 * jhtmls模板引擎
 */
_p[3] = {
    value: function() {
        /* global jhtmls: true */
        return jhtmls;
    }
};

//src/base/jquery.js
/**
 * jquery模块封装
 */
_p[4] = {
    value: function(require) {
        return window.jQuery;
    }
};

//src/base/kit/class.js
/**
 * @description 创建一个类
 * @param {String}    fullClassName  类全名，包括命名空间。
 * @param {Plain}     defines        要创建的类的特性
 *     defines.constructor  {Function}       类的构造函数，实例化的时候会被调用。
 *     defines.base         {String}         基类的名称。名称要使用全名。（因为base是javascript未来保留字，所以不用base）
 *     defines.mixin        {Array<String>}  要混合到新类的类集合
 *     defines.<method>     {Function}       其他类方法
 *
 * TODO:
 *     Mixin 构造函数调用支持
 */
_p[5] = {
    value: function(require, exports) {
        // just to bind context
        Function.prototype.bind = Function.prototype.bind || function(thisObj) {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.apply(thisObj, args);
        };
        // 所有类的基类
        function Class() {}
        Class.__KityClassName = "Class";
        // 提供 base 调用支持
        Class.prototype.base = function(name) {
            var caller = arguments.callee.caller;
            var method = caller.__KityMethodClass.__KityBaseClass.prototype[name];
            return method.apply(this, Array.prototype.slice.call(arguments, 1));
        };
        // 直接调用 base 类的同名方法
        Class.prototype.callBase = function() {
            var caller = arguments.callee.caller;
            var method = caller.__KityMethodClass.__KityBaseClass.prototype[caller.__KityMethodName];
            return method.apply(this, arguments);
        };
        Class.prototype.mixin = function(name) {
            var caller = arguments.callee.caller;
            var mixins = caller.__KityMethodClass.__KityMixins;
            if (!mixins) {
                return this;
            }
            var method = mixins[name];
            return method.apply(this, Array.prototype.slice.call(arguments, 1));
        };
        Class.prototype.callMixin = function() {
            var caller = arguments.callee.caller;
            var methodName = caller.__KityMethodName;
            var mixins = caller.__KityMethodClass.__KityMixins;
            if (!mixins) {
                return this;
            }
            var method = mixins[methodName];
            if (methodName == "constructor") {
                for (var i = 0, l = method.length; i < l; i++) {
                    method[i].call(this);
                }
                return this;
            } else {
                return method.apply(this, arguments);
            }
        };
        Class.prototype.pipe = function(fn) {
            if (typeof fn == "function") {
                fn.call(this, this);
            }
            return this;
        };
        Class.prototype.getType = function() {
            return this.__KityClassName;
        };
        Class.prototype.getClass = function() {
            return this.constructor;
        };
        // 检查基类是否调用了父类的构造函数
        // 该检查是弱检查，假如调用的代码被注释了，同样能检查成功（这个特性可用于知道建议调用，但是出于某些原因不想调用的情况）
        function checkBaseConstructorCall(targetClass, classname) {
            var code = targetClass.toString();
            if (!/this\.callBase/.test(code)) {
                throw new Error(classname + " : 类构造函数没有调用父类的构造函数！为了安全，请调用父类的构造函数");
            }
        }
        var KITY_INHERIT_FLAG = "__KITY_INHERIT_FLAG_" + +new Date();
        function inherit(constructor, BaseClass, classname) {
            var KityClass = eval("(function " + classname + "( __inherit__flag ) {" + "if( __inherit__flag != KITY_INHERIT_FLAG ) {" + "KityClass.__KityConstructor.apply(this, arguments);" + "}" + "this.__KityClassName = KityClass.__KityClassName;" + "})||0");
            KityClass.__KityConstructor = constructor;
            KityClass.prototype = new BaseClass(KITY_INHERIT_FLAG);
            for (var methodName in BaseClass.prototype) {
                if (BaseClass.prototype.hasOwnProperty(methodName) && methodName.indexOf("__Kity") !== 0) {
                    KityClass.prototype[methodName] = BaseClass.prototype[methodName];
                }
            }
            KityClass.prototype.constructor = KityClass;
            return KityClass;
        }
        function mixin(NewClass, mixins) {
            if (false === mixins instanceof Array) {
                return NewClass;
            }
            var i, length = mixins.length, proto, method;
            NewClass.__KityMixins = {
                constructor: []
            };
            for (i = 0; i < length; i++) {
                proto = mixins[i].prototype;
                for (method in proto) {
                    if (false === proto.hasOwnProperty(method) || method.indexOf("__Kity") === 0) {
                        continue;
                    }
                    if (method === "constructor") {
                        // constructor 特殊处理
                        NewClass.__KityMixins.constructor.push(proto[method]);
                    } else {
                        NewClass.prototype[method] = NewClass.__KityMixins[method] = proto[method];
                    }
                }
            }
            return NewClass;
        }
        function extend(BaseClass, extension) {
            if (extension.__KityClassName) {
                extension = extension.prototype;
            }
            for (var methodName in extension) {
                if (extension.hasOwnProperty(methodName) && methodName.indexOf("__Kity") && methodName != "constructor") {
                    var method = BaseClass.prototype[methodName] = extension[methodName];
                    method.__KityMethodClass = BaseClass;
                    method.__KityMethodName = methodName;
                }
            }
            return BaseClass;
        }
        Class.prototype._accessProperty = function() {
            return this._propertyRawData || (this._propertyRawData = {});
        };
        exports.createClass = function(classname, defines) {
            var constructor, NewClass, BaseClass;
            if (arguments.length === 1) {
                defines = arguments[0];
                classname = "AnonymousClass";
            }
            BaseClass = defines.base || Class;
            if (defines.hasOwnProperty("constructor")) {
                constructor = defines.constructor;
                if (BaseClass != Class) {
                    checkBaseConstructorCall(constructor, classname);
                }
            } else {
                constructor = function() {
                    this.callBase.apply(this, arguments);
                    this.callMixin.apply(this, arguments);
                };
            }
            NewClass = inherit(constructor, BaseClass, classname);
            NewClass = mixin(NewClass, defines.mixins);
            NewClass.__KityClassName = constructor.__KityClassName = classname;
            NewClass.__KityBaseClass = constructor.__KityBaseClass = BaseClass;
            NewClass.__KityMethodName = constructor.__KityMethodName = "constructor";
            NewClass.__KityMethodClass = constructor.__KityMethodClass = NewClass;
            // 下面这些不需要拷贝到原型链上
            delete defines.mixins;
            delete defines.constructor;
            delete defines.base;
            NewClass = extend(NewClass, defines);
            return NewClass;
        };
        exports.extendClass = extend;
    }
};

//src/base/kit/common.js
/**
 * 通用工具包
 */
_p[6] = {
    value: function(require) {
        var $ = _p.r(4), __marker = "__fui__marker__" + +new Date();
        return {
            isElement: function(target) {
                return target.nodeType === 1;
            },
            getMarker: function() {
                return __marker;
            },
            getRect: function(node) {
                var rect = node.getBoundingClientRect();
                return {
                    width: rect.width,
                    height: rect.height,
                    top: rect.top,
                    bottom: rect.bottom,
                    left: rect.left,
                    right: rect.right
                };
            },
            getBound: function(node) {
                var w = 0, h = 0;
                if (node.tagName.toLowerCase() === "body") {
                    h = $(this.getView(node));
                    w = h.width();
                    h = h.height();
                    return {
                        top: 0,
                        left: 0,
                        bottom: h,
                        right: w,
                        width: w,
                        height: h
                    };
                } else {
                    return this.getRect(node);
                }
            },
            getView: function(node) {
                return node.ownerDocument.defaultView || node.ownerDocument.parentWindow;
            }
        };
    }
};

//src/base/kit/compile.js
/**
 * 模板编译器
 */
_p[7] = {
    value: function(require) {
        var jhtmls = _p.r(3), $ = _p.r(4);
        var Helper = {
            forEach: function(arras, cb) {
                $.each(arras, function(i, item) {
                    cb.call(null, i, item);
                });
            }
        };
        return {
            compile: function(tpl, data) {
                tpl = $.trim(tpl);
                if (tpl.length === 0) {
                    return "";
                }
                return jhtmls.render(tpl, data, Helper);
            }
        };
    }
};

//src/base/kit/draggable.js
/**
 * Draggable Lib
 */
_p[8] = {
    value: function(require, exports) {
        var $ = _p.r(4), common = _p.r(6), DEFAULT_OPTIONS = {
            handler: null,
            target: null,
            axis: "all",
            range: null
        };
        function Draggable(options) {
            this.__options = $.extend({}, DEFAULT_OPTIONS, options);
            this.__started = false;
            this.__point = {
                x: 0,
                y: 0
            };
            this.__location = {
                x: 0,
                y: 0
            };
            this.__range = {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            };
        }
        $.extend(Draggable.prototype, {
            bind: function(target) {
                if (target) {
                    this.__options.target = target;
                }
                if (!this.__options.target) {
                    throw new Error("target unset");
                }
                this.__target = this.__options.target;
                this.__handler = this.__options.handler;
                this.__rangeNode = this.__options.range;
                this.__initOptions();
                this.__initEnv();
                this.__initEvent();
            },
            __initEvent: function() {
                var handler = this.__handler, _self = this;
                $(handler).on("mousedown", function(e) {
                    if (e.which !== 1) {
                        return;
                    }
                    var location = common.getRect(handler);
                    e.preventDefault();
                    _self.__started = true;
                    _self.__point = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    _self.__location = {
                        x: location.left,
                        y: location.top
                    };
                    _self.__range = _self.__getRange();
                });
                $(handler.ownerDocument).on("mousemove", function(e) {
                    if (!_self.__started) {
                        return;
                    }
                    var x = e.clientX, y = e.clientY;
                    if (_self.__allowAxisX) {
                        _self.__xMove(x);
                    }
                    if (_self.__allowAxisY) {
                        _self.__yMove(y);
                    }
                }).on("mouseup", function(e) {
                    _self.__started = false;
                });
            },
            __xMove: function(x) {
                var diff = x - this.__point.x;
                diff = this.__location.x + diff;
                if (diff < this.__range.left) {
                    diff = this.__range.left;
                } else if (diff > this.__range.right) {
                    diff = this.__range.right;
                }
                this.__target.style.left = diff + "px";
            },
            __yMove: function(y) {
                var diff = y - this.__point.y;
                diff = this.__location.y + diff;
                if (diff < this.__range.top) {
                    diff = this.__range.top;
                } else if (diff > this.__range.bottom) {
                    diff = this.__range.bottom;
                }
                this.__target.style.top = diff + "px";
            },
            __initEnv: function() {
                var $handler = $(this.__handler);
                $handler.css("cursor", "move");
            },
            __initOptions: function() {
                if (!this.__handler) {
                    this.__handler = this.__target;
                }
                if (!this.__rangeNode) {
                    this.__rangeNode = this.__options.target.ownerDocument.body;
                }
                this.__allowAxisX = this.__options.axis !== "y";
                this.__allowAxisY = this.__options.axis !== "x";
            },
            __getRange: function() {
                var range = this.__rangeNode, targetRect = common.getRect(this.__target);
                if (range.tagName.toLowerCase() === "body") {
                    range = $(this.__rangeNode.ownerDocument);
                    range = {
                        top: 0,
                        left: 0,
                        bottom: range.height(),
                        right: range.width()
                    };
                } else {
                    range = common.getRect(range);
                }
                return {
                    top: range.top,
                    left: range.left,
                    bottom: range.bottom - targetRect.height,
                    right: range.right - targetRect.width
                };
            }
        });
        return function(options) {
            return new Draggable(options);
        };
    }
};

//src/base/kit/extend.js
/**
 * 弥补jQuery的extend在克隆对象和数组时存在的问题
 */
_p[9] = {
    value: function(require) {
        var $ = _p.r(4);
        function extend(target) {
            var isPlainObject = false, isArray = false, sourceObj = null;
            if (arguments.length === 1) {
                return copy(target);
            }
            $.each([].slice.call(arguments, 1), function(i, source) {
                for (var key in source) {
                    sourceObj = source[key];
                    if (!source.hasOwnProperty(key)) {
                        continue;
                    }
                    isPlainObject = $.isPlainObject(sourceObj);
                    isArray = $.isArray(sourceObj);
                    if (!isPlainObject && !isArray) {
                        target[key] = source[key];
                    } else if (isPlainObject) {
                        if (!$.isPlainObject(target[key])) {
                            target[key] = {};
                        }
                        target[key] = extend(target[key], sourceObj);
                    } else if (isArray) {
                        target[key] = extend(sourceObj);
                    }
                }
            });
            return target;
        }
        function copy(target) {
            var tmp = null;
            if ($.isPlainObject(target)) {
                return extend({}, target);
            } else if ($.isArray(target)) {
                tmp = [];
                $.each(target, function(index, item) {
                    if ($.isPlainObject(item) || $.isArray(item)) {
                        tmp.push(copy(item));
                    } else {
                        tmp.push(item);
                    }
                });
                return tmp;
            } else {
                return target;
            }
        }
        return extend;
    }
};

//src/base/kit/widget.js
/**
 * 构件相关工具方法
 */
_p[10] = {
    value: function(require) {
        return {
            isContainer: function(widget) {
                return widget.__widgetType === "container";
            }
        };
    }
};

//src/base/ns.js
/**
 * FUI名称空间
 */
_p[11] = {
    value: function() {
        // 容纳所有构件的实例池
        var WIDGET_POOL = {};
        return {
            widgets: WIDGET_POOL,
            /**
         * 暴露命名空间本身
         * @private
         */
            __export: function() {
                window.FUI = this;
            },
            ___register: function(widgetName, widget) {
                if (typeof widgetName === "string") {
                    this[widgetName] = widget;
                } else {
                    widget = widgetName;
                    for (var key in widget) {
                        if (widget.hasOwnProperty(key)) {
                            this[key] = widget[key];
                        }
                    }
                }
            },
            __registerInstance: function(widget) {
                WIDGET_POOL[widget.getId()] = widget;
            }
        };
    }
};

//src/base/sysconf.js
/**
 * UI系统配置
 */
_p[12] = {
    value: function(require) {
        var NS = _p.r(11);
        return {
            classPrefix: "fui-",
            layout: {
                TOP: "top",
                LEFT: "left",
                BOTTOM: "bottom",
                RIGHT: "right",
                CENTER: "center",
                MIDDLE: "middle",
                // 内部定位
                LEFT_TOP: "left-top",
                RIGHT_TOP: "right-top",
                LEFT_BOTTOM: "left-bottom",
                RIGHT_BOTTOM: "right-bottom"
            },
            allowFocus: !!NS.ALLOW_FOCUS,
            control: {
                input: 1,
                textarea: 1,
                button: 1,
                select: 1,
                option: 1,
                object: 1,
                embed: 1
            }
        };
    }
};

//src/base/utils.js
/**
 * utils类包， 提供常用操作的封装，补充jQuery的不足
 */
_p[13] = {
    value: function(require) {
        var $ = _p.r(4), Utils = {
            Tpl: _p.r(7),
            Widget: _p.r(10),
            createDraggable: _p.r(8)
        };
        return $.extend(Utils, _p.r(6), _p.r(5));
    }
};

//src/ext/word/tpl/t-picker.js
_p[14] = {
    value: function() {
        return '<div unselectable="on" class="fui-t-picker"></div>\n';
    }
};

//src/ext/word/tpl/table-picker.js
_p[15] = {
    value: function() {
        return '<div unselectable="on" class="fui-table-picker"></div>\n';
    }
};

//src/ext/word/widget/t-picker.js
/**
 * TPicker -- table 选择器
 */
_p[16] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12), tpl = _p.r(14);
        return _p.r(13).createClass("TPicker", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    // 10行 10列
                    row: 10,
                    col: 10
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "TPicker";
                this.__tpl = tpl;
                // 背板
                this.__backplane = null;
            },
            __render: function() {
                this.callBase();
                this.__backplane = this.__createBackplane();
                this.__element.appendChild(this.__backplane);
            },
            __initEvent: function() {
                var _self = this;
                this.callBase();
                $(this.__backplane).delegate("td", "mousemove click", function(e) {
                    var info = e.target.getAttribute("data-index").split(",");
                    info = {
                        row: parseInt(info[0], 10),
                        col: parseInt(info[1], 10)
                    };
                    if (e.type === "click") {
                        _self.__select(info.row, info.col);
                    } else {
                        _self.__update(info.row, info.col);
                    }
                });
            },
            __select: function(row, col) {
                this.trigger("pickerselect", {
                    row: row,
                    col: col
                });
            },
            __update: function(row, col) {
                var tr = null, rowCount = this.__options.row, colCount = this.__options.col, className = CONF.classPrefix + "table-picker-hoverin";
                for (var i = 0; i < rowCount; i++) {
                    tr = this.__backplane.rows[i];
                    for (var j = 0; j < colCount; j++) {
                        if (i <= row && j <= col) {
                            tr.cells[j].className = className;
                        } else {
                            tr.cells[j].className = "";
                        }
                    }
                }
                this.trigger("pickerhover", {
                    row: row,
                    col: col
                });
            },
            __createBackplane: function() {
                var tpl = [], tmp = null;
                for (var i = 0, len = this.__options.row; i < len; i++) {
                    tmp = [];
                    for (var j = 0, jlen = this.__options.col; j < jlen; j++) {
                        tmp.push('<td data-index="' + i + "," + j + '"></td>');
                    }
                    tpl.push("<tr>" + tmp.join("") + "</tr>");
                }
                tpl = $("<table><tbody>" + tpl.join("") + "</tbody></table>");
                tpl.addClass(CONF.classPrefix + "t-picker-table");
                return tpl[0];
            }
        });
    }
};

//src/ext/word/widget/table-picker.js
/**
 * Table选择器构件
 */
_p[17] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12), tpl = _p.r(15), Label = _p.r(48), TPicker = _p.r(16), Button = _p.r(37), PPanel = _p.r(54), Mask = _p.r(49);
        return _p.r(13).createClass("TablePicker", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    button: null,
                    row: 10,
                    col: 10
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            open: function() {
                this.__panelWidget.show();
                this.__maskWidget.show();
            },
            close: function() {
                this.__panelWidget.hide();
                this.__maskWidget.hide();
            },
            // Overload
            appendTo: function(container) {
                container.appendChild(this.__buttonWidget.getElement());
            },
            getButton: function() {
                return this.__buttonWidget;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "TablePicker";
                this.__tpl = tpl;
                this.__pickerWidget = null;
                this.__labelWidget = null;
                this.__buttonWidget = null;
                this.__panelWidget = null;
                this.__maskWidget = null;
            },
            __render: function() {
                this.callBase();
                this.__pickerWidget = new TPicker(this.__options);
                this.__labelWidget = new Label({
                    text: "插入表格"
                });
                this.__buttonWidget = new Button(this.__options.button);
                this.__panelWidget = new PPanel({
                    className: CONF.classPrefix + "table-picker-panel",
                    column: true,
                    resize: "none"
                });
                this.__maskWidget = new Mask();
                this.__panelWidget.appendWidget(this.__labelWidget);
                this.__panelWidget.appendWidget(this.__pickerWidget);
                this.__panelWidget.positionTo(this.__buttonWidget);
            },
            __initEvent: function() {
                var _self = this;
                this.callBase();
                this.__buttonWidget.on("btnclick", function(e) {
                    _self.open();
                });
                this.__maskWidget.on("maskclick", function(e) {
                    _self.close();
                });
                this.__pickerWidget.on("pickerhover", function(e, info) {
                    var row = info.row + 1, col = info.col + 1;
                    _self.__labelWidget.setText(row + "x" + col + " 表格");
                }).on("pickerselect", function(e, info) {
                    var row = info.row + 1, col = info.col + 1;
                    _self.close();
                    _self.trigger("pickerselect", {
                        row: row,
                        col: col
                    });
                });
            },
            __createBackplane: function() {
                var tpl = [], tmp = null;
                for (var i = 0, len = this.__options.row; i < len; i++) {
                    tmp = [];
                    for (var j = 0, jlen = this.__options.col; j < jlen; j++) {
                        tmp.push('<td data-index="' + i + "," + j + '"></td>');
                    }
                    tpl.push("<tr>" + tmp.join("") + "</tr>");
                }
                tpl = $("<table><tbody>" + tpl.join("") + "</tbody></table>");
                tpl.addClass(CONF.classPrefix + "t-picker-table");
                return tpl[0];
            }
        });
    }
};

//src/tpl/button-menu.js
_p[18] = {
    value: function() {
        return '<div unselectable="on" class="fui-button-menu"></div>\n';
    }
};

//src/tpl/button.js
_p[19] = {
    value: function() {
        return '<div unselectable="on" class="fui-button"></div>\n';
    }
};

//src/tpl/colorpicker.js
_p[20] = {
    value: function() {
        return '<div unselectable="on" class="fui-colorpicker-container">\n' + '<div unselectable="on" class="fui-colorpicker-toolbar">\n' + '<div unselectable="on" class="fui-colorpicker-preview"></div>\n' + '<div unselectable="on" class="fui-colorpicker-clear">$clearText</div>\n' + "</div>\n" + '<div unselectable="on" class="fui-colorpicker-title">$commonText</div>\n' + '<div unselectable="on" class="fui-colorpicker-commoncolor">\n' + "helper.forEach( commonColor, function ( index, colors ) {\n" + '<div unselectable="on" class="fui-colorpicker-colors fui-colorpicker-colors-line$index">\n' + "helper.forEach( colors, function( i, color ) {\n" + '<span unselectable="on" class="fui-colorpicker-item" style="background-color: $color; border-color: #{color.toLowerCase() == \'#ffffff\' ? \'#eeeeee\': color};" data-color="$color"></span>\n' + "});\n" + "</div>\n" + "} );\n" + "</div>\n" + '<div unselectable="on" class="fui-colorpicker-title">$standardText</div>\n' + '<div unselectable="on" class="fui-colorpicker-standardcolor fui-colorpicker-colors">\n' + "helper.forEach( standardColor, function ( i, color ) {\n" + '<span unselectable="on" class="fui-colorpicker-item" style="background-color: $color; border-color: $color;" data-color="$color"></span>\n' + "} );\n" + "</div>\n" + "</div>\n";
    }
};

//src/tpl/dialog.js
_p[21] = {
    value: function() {
        return '<div unselectable="on" class="fui-dialog-wrap">\n' + '<div unselectable="on" class="fui-dialog-head">\n' + '<h1 unselectable="on" class="fui-dialog-caption">$caption</h1>\n' + "</div>\n" + '<div unselectable="on" class="fui-dialog-body"></div>\n' + '<div unselectable="on" class="fui-dialog-foot"></div>\n' + "</div>\n";
    }
};

//src/tpl/drop-panel.js
_p[22] = {
    value: function() {
        return "<div unselectable=\"on\" class=\"fui-drop-panel\"  #{ text ? 'title=\"' + m.text + '\"' : '' }></div>\n";
    }
};

//src/tpl/icon.js
_p[23] = {
    value: function() {
        return '<div unselectable="on" class="fui-icon" >\n' + "if ( this.img ) {\n" + '<img unselectable="on" src="#{this.img}" >\n' + "}\n" + "</div>\n";
    }
};

//src/tpl/input-button.js
_p[24] = {
    value: function() {
        return '<div unselectable="on" class="fui-input-button"></div>\n';
    }
};

//src/tpl/input-menu.js
_p[25] = {
    value: function() {
        return '<div unselectable="on" class="fui-input-menu"></div>\n';
    }
};

//src/tpl/input.js
_p[26] = {
    value: function() {
        return '<input unselectable="on" class="fui-input"  autocomplete="off" !#{ value ? \'value="\' + value + \'"\' : \'\'}>\n';
    }
};

//src/tpl/item.js
_p[27] = {
    value: function() {
        return "<div unselectable=\"on\" class=\"fui-item!#{ selected ? ' fui-item-selected': '' }\" ></div>\n";
    }
};

//src/tpl/label.js
_p[28] = {
    value: function() {
        return '<div unselectable="on" class="fui-label">$text</div>\n';
    }
};

//src/tpl/mask.js
_p[29] = {
    value: function() {
        return '<div unselectable="on" class="fui-mask" style="background-color: $bgcolor; opacity: $opacity;"></div>\n';
    }
};

//src/tpl/panel.js
_p[30] = {
    value: function() {
        return '<div unselectable="on" class="fui-panel"></div>\n';
    }
};

//src/tpl/separator.js
_p[31] = {
    value: function() {
        return '<div unselectable="on" class="fui-separator"></div>\n';
    }
};

//src/tpl/spin-button.js
_p[32] = {
    value: function() {
        return '<div unselectable="on" class="fui-spin-button"></div>\n';
    }
};

//src/tpl/tabs.js
_p[33] = {
    value: function() {
        return '<div unselectable="on" class="fui-tabs">\n' + '<div unselectable="on" class="fui-tabs-button-wrap"></div>\n' + '<div unselectable="on" class="fui-tabs-panel-wrap"></div>\n' + "</div>\n";
    }
};

//src/widget/button-menu.js
/**
 * Button对象
 * 通用按钮构件
 */
_p[34] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12), tpl = _p.r(18), Button = _p.r(37), Menu = _p.r(50), Mask = _p.r(49), LAYOUT = CONF.layout;
        return _p.r(13).createClass("ButtonMenu", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    // item选项
                    menu: null,
                    mask: null,
                    buttons: [],
                    selected: -1,
                    layout: LAYOUT.RIGHT
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            open: function() {
                this.__openState = true;
                this.__maskWidget.show();
                this.__menuWidget.show();
                this.addClass(CONF.classPrefix + "button-active");
            },
            close: function() {
                this.__openState = false;
                this.__maskWidget.hide();
                this.__menuWidget.hide();
                this.removeClass(CONF.classPrefix + "button-active");
            },
            isOpen: function() {
                return !!this.__openState;
            },
            getSelected: function() {
                return this.__menuWidget.getSelected();
            },
            getSelectedItem: function() {
                return this.__menuWidget.getSelectedItem();
            },
            getValue: function() {
                return this.getSelectedItem().getValue();
            },
            __render: function() {
                this.callBase();
                this.__initButtons();
                this.__menuWidget = new Menu(this.__options.menu);
                this.__maskWidget = new Mask(this.__options.mask);
                this.__menuWidget.positionTo(this.__element);
                this.__menuWidget.appendTo(this.__element.ownerDocument.body);
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "ButtonMenu";
                this.__tpl = tpl;
                this.__buttonWidgets = null;
                this.__menuWidget = null;
                this.__maskWidget = null;
                this.__openState = false;
                if (this.__options.selected !== -1) {
                    this.__options.menu.selected = this.__options.selected;
                }
            },
            __initButtons: function() {
                var buttons = [], ele = this.__element, btn = null, lastIndex = this.__options.buttons.length - 1;
                if (this.__options.layout === LAYOUT.TOP || this.__options.layout === LAYOUT.LEFT) {
                    btn = new Button(this.__options.buttons[lastIndex]);
                    btn.appendTo(ele);
                } else {
                    lastIndex = -1;
                }
                $.each(this.__options.buttons, function(index, options) {
                    if (lastIndex !== index) {
                        var button = new Button(options);
                        button.appendTo(ele);
                        buttons.push(button);
                    } else {
                        buttons.push(btn);
                    }
                });
                this.addClass(CONF.classPrefix + "layout-" + this.__options.layout);
                buttons[buttons.length - 1].addClass(CONF.classPrefix + "open-btn");
                this.__buttonWidgets = buttons;
            },
            __initEvent: function() {
                var lastBtn = this.__buttonWidgets[this.__buttonWidgets.length - 1], _self = this;
                this.callBase();
                lastBtn.on("click", function(e) {
                    _self.open();
                });
                this.__maskWidget.on("maskclick", function() {
                    _self.close();
                });
                this.__menuWidget.on("select", function(e, info) {
                    e.stopPropagation();
                    _self.close();
                    _self.trigger("select", info);
                }).on("change", function(e, info) {
                    _self.trigger("change", info);
                });
                this.on("btnclick", function(e) {
                    e.stopPropagation();
                    var btnIndex = $.inArray(e.widget, this.__buttonWidgets);
                    if (btnIndex > -1 && btnIndex < this.__buttonWidgets.length - 1) {
                        this.trigger("buttonclick", {
                            button: this.__buttonWidgets[btnIndex]
                        });
                    }
                });
            }
        });
    }
};

//src/widget/button-set-menu.js
/**
 * InputMenu构件
 * 可接受输入的下拉菜单构件
 */
_p[35] = {
    value: function(require) {
        var $ = _p.r(4), tpl = _p.r(25), InputButton = _p.r(43), Menu = _p.r(50), Mask = _p.r(49), Utils = _p.r(13);
        return _p.r(13).createClass("InputMenu", {
            base: _p.r(60),
            constructor: function(options) {
                var marker = Utils.getMarker();
                this.callBase(marker);
                var defaultOptions = {
                    input: null,
                    menu: null,
                    mask: null
                };
                this.__extendOptions(defaultOptions, options);
                this.widgetName = "InputMenu";
                this.__tpl = tpl;
                // 最后输入时间
                this.__lastTime = 0;
                // 最后选中的记录
                this.__lastSelect = null;
                this.__inputWidget = null;
                this.__menuWidget = null;
                this.__maskWidget = null;
                // menu状态， 记录是否已经append到dom树上
                this.__menuState = false;
                if (options !== marker) {
                    this.__render();
                }
            },
            select: function(index) {
                this.__menuWidget.select(index);
            },
            setValue: function(value) {
                this.__inputWidget.setValue(value);
                return this;
            },
            getValue: function() {
                return this.__inputWidget.getValue();
            },
            __render: function() {
                if (this.__rendered) {
                    return this;
                }
                this.__inputWidget = new InputButton(this.__options.input);
                this.__menuWidget = new Menu(this.__options.menu);
                this.__maskWidget = new Mask(this.__options.mask);
                this.callBase();
                this.__inputWidget.appendTo(this.__element);
                this.__menuWidget.positionTo(this.__inputWidget);
                this.__initInputMenuEvent();
            },
            open: function() {
                this.__maskWidget.show();
                this.__menuWidget.show();
            },
            close: function() {
                this.__maskWidget.hide();
                this.__menuWidget.hide();
            },
            __initInputMenuEvent: function() {
                var _self = this;
                this.on("buttonclick", function() {
                    if (!this.__menuState) {
                        this.__appendMenu();
                        this.__menuState = true;
                    }
                    this.__inputWidget.unfocus();
                    this.open();
                });
                this.on("keypress", function(e) {
                    this.__lastTime = new Date();
                });
                this.on("keyup", function(e) {
                    if (e.keyCode !== 8 && e.keyCode !== 13 && new Date() - this.__lastTime < 500) {
                        this.__update();
                    }
                });
                this.on("inputcomplete", function() {
                    this.__inputWidget.selectRange(99999999);
                    this.__inputComplete();
                });
                this.__menuWidget.on("select", function(e, info) {
                    e.stopPropagation();
                    _self.setValue(info.value);
                    _self.trigger("select", info);
                    _self.close();
                });
                this.__menuWidget.on("change", function(e, info) {
                    e.stopPropagation();
                    _self.trigger("change", info);
                });
                // 阻止input自身的select和change事件
                this.__inputWidget.on("select change", function(e) {
                    e.stopPropagation();
                });
                // mask 点击关闭
                this.__maskWidget.on("maskclick", function() {
                    _self.close();
                });
                // 记录最后选中的数据
                this.on("select", function(e, info) {
                    this.__lastSelect = info;
                });
            },
            // 更新输入框内容
            __update: function() {
                var inputValue = this.getValue(), lowerCaseValue = inputValue.toLowerCase(), values = this.__getItemValues(), targetValue = null;
                if (!inputValue) {
                    return;
                }
                $.each(values, function(i, val) {
                    if (val.toLowerCase().indexOf(lowerCaseValue) === 0) {
                        targetValue = val;
                        return false;
                    }
                });
                if (targetValue) {
                    this.__inputWidget.setValue(targetValue);
                    this.__inputWidget.selectRange(inputValue.length);
                }
            },
            // 获取所有item的值列表
            __getItemValues: function() {
                var vals = [];
                $.each(this.__menuWidget.getWidgets(), function(index, item) {
                    vals.push(item.getValue());
                });
                return vals;
            },
            // 用户输入完成
            __inputComplete: function() {
                var values = this.__getItemValues(), targetIndex = -1, inputValue = this.getValue(), lastSelect = this.__lastSelect;
                $.each(values, function(i, val) {
                    if (val === inputValue) {
                        targetIndex = i;
                        return false;
                    }
                });
                this.trigger("select", {
                    index: targetIndex,
                    value: inputValue
                });
                if (!lastSelect || lastSelect.value !== inputValue) {
                    this.trigger("change", {
                        from: lastSelect || {
                            index: -1,
                            value: null
                        },
                        to: {
                            index: targetIndex,
                            value: inputValue
                        }
                    });
                }
            },
            __appendMenu: function() {
                this.__menuWidget.appendTo(this.__inputWidget.getElement().ownerDocument.body);
            }
        });
    }
};

//src/widget/button-set.js
/**
 * Buttonset对象
 * 通用按钮构件
 */
_p[36] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12), ToggleButton = _p.r(59);
        return _p.r(13).createClass("Buttonset", {
            base: _p.r(51),
            constructor: function(options) {
                var defaultOptions = {
                    // 初始选中项, -1表示不选中任何项
                    selected: -1
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            getButtons: function() {
                return this.getWidgets();
            },
            getButton: function(index) {
                return this.getWidgets()[index] || null;
            },
            getValue: function() {
                if (this.__currentIndex > -1) {
                    return this.__widgets[this.__currentIndex].getValue();
                }
                return null;
            },
            getSelectedIndex: function() {
                return this.__currentIndex;
            },
            appendButton: function() {
                return this.appendWidget.apply(this, arguments);
            },
            insertButton: function() {
                return this.insertWidget.apply(this, arguments);
            },
            select: function(indexOrWidget) {
                if (this.__options.disabled) {
                    return this;
                }
                if (indexOrWidget instanceof ToggleButton) {
                    indexOrWidget = $.inArray(indexOrWidget, this.__widgets);
                }
                if (indexOrWidget < 0) {
                    return this.clearSelect();
                }
                indexOrWidget = this.__widgets[indexOrWidget];
                this.__pressButton(indexOrWidget);
                return this;
            },
            selectByValue: function(value) {
                var values = this.__widgets.map(function(button) {
                    return button.getValue();
                });
                return this.select(values.indexOf(value));
            },
            clearSelect: function() {
                this.__pressButton(null);
                return this;
            },
            removeButton: function() {
                return this.removeWidget.apply(this, arguments);
            },
            insertWidget: function(index, widget) {
                var returnValue = this.callBase(index, widget);
                if (returnValue === null) {
                    return returnValue;
                }
                if (index <= this.__currentIndex) {
                    this.__currentIndex++;
                }
                if (index <= this.__prevIndex) {
                    this.__prevIndex++;
                }
                return returnValue;
            },
            removeWidget: function(widget) {
                var index = widget;
                if (typeof index !== "number") {
                    index = this.indexOf(widget);
                }
                widget = this.callBase(widget);
                if (index === this.__currentIndex) {
                    this.__currentIndex = -1;
                } else if (index < this.__currentIndex) {
                    this.__currentIndex--;
                }
                if (index === this.__prevIndex) {
                    this.__prevIndex = -1;
                } else if (index < this.__prevIndex) {
                    this.__prevIndex--;
                }
                return widget;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Buttonset";
                // 当前选中项
                this.__currentIndex = this.__options.selected;
                // 前一次选中项
                this.__prevIndex = -1;
            },
            __render: function() {
                this.callBase();
                $(this.__element).addClass(CONF.classPrefix + "buttonset");
                this.__initButtons();
                return this;
            },
            __initButtons: function() {
                var _self = this, buttonWidget = null;
                $.each(this.__options.buttons, function(index, buttonOption) {
                    buttonWidget = new ToggleButton($.extend({}, buttonOption, {
                        pressed: index === _self.__options.selected,
                        preventDefault: true
                    }));
                    // 切换
                    buttonWidget.__on("click", function(e) {
                        if (!_self.isDisabled()) {
                            _self.__pressButton(this);
                        }
                    });
                    buttonWidget.__on("change", function(e) {
                        // 阻止buton本身的事件向上冒泡
                        e.stopPropagation();
                    });
                    _self.appendButton(buttonWidget);
                });
            },
            /**
         * 按下指定按钮, 该方法会更新其他按钮的状态和整个button-set的状态
         * @param button
         * @private
         */
            __pressButton: function(button) {
                this.__prevIndex = this.__currentIndex;
                this.__currentIndex = this.indexOf(button);
                if (this.__currentIndex === this.__prevIndex) {
                    return;
                }
                if (button) {
                    button.press();
                }
                // 弹起其他按钮
                $.each(this.__widgets, function(i, otherButton) {
                    if (otherButton !== button) {
                        otherButton.bounce();
                    }
                });
                this.trigger("change", {
                    currentIndex: this.__currentIndex,
                    prevIndex: this.__prevIndex
                });
            },
            __valid: function(ele) {
                return ele instanceof ToggleButton;
            }
        });
    }
};

//src/widget/button.js
/**
 * Button对象
 * 通用按钮构件
 */
_p[37] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12), buttonTpl = _p.r(19), Icon = _p.r(42), Label = _p.r(48);
        return _p.r(13).createClass("Button", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    label: null,
                    text: null,
                    icon: null,
                    // label相对icon的位置
                    layout: "right"
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            getLabel: function() {
                return this.__labelWidget.getText();
            },
            setLabel: function(text) {
                return this.__labelWidget.setText(text);
            },
            getLabelWidget: function() {
                return this.__labelWidget;
            },
            getIconWidget: function() {
                return this.__iconWidget;
            },
            __render: function() {
                this.callBase();
                this.__iconWidget = new Icon(this.__options.icon);
                this.__labelWidget = new Label(this.__options.label);
                // layout
                switch (this.__options.layout) {
                  case "left":
                  /* falls through */
                    case "top":
                    this.__element.appendChild(this.__labelWidget.getElement());
                    this.__element.appendChild(this.__iconWidget.getElement());
                    break;

                  case "right":
                  /* falls through */
                    case "bottom":
                  /* falls through */
                    default:
                    this.__element.appendChild(this.__iconWidget.getElement());
                    this.__element.appendChild(this.__labelWidget.getElement());
                    break;
                }
                $(this.__element).addClass(CONF.classPrefix + "button-layout-" + this.__options.layout);
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Button";
                this.__tpl = buttonTpl;
                this.__iconWidget = null;
                this.__labelWidget = null;
                if (typeof this.__options.label !== "object") {
                    this.__options.label = {
                        text: this.__options.label
                    };
                }
                if (typeof this.__options.icon !== "object") {
                    this.__options.icon = {
                        img: this.__options.icon
                    };
                }
            },
            __initEvent: function() {
                this.callBase();
                this.on("click", function() {
                    this.__trigger("btnclick");
                });
            }
        });
    }
};

//src/widget/colorpicker.js
/**
 * 容器类： PPanel = Positioning Panel
 */
_p[38] = {
    value: function(require) {
        var Utils = _p.r(13), CONF = _p.r(12), Mask = _p.r(49), tpl = _p.r(20), $ = _p.r(4);
        return Utils.createClass("ColorPicker", {
            base: _p.r(54),
            constructor: function(options) {
                var defaultOptions = {
                    clearText: "",
                    commonText: "",
                    commonColor: [ [ "#ffffff", "#000000", "#eeece1", "#1f497d", "#4f81bd", "#c0504d", "#9bbb59", "#8064a2", "#4bacc6", "#f79646" ], [ "#f2f2f2", "#808080", "#ddd8c2", "#c6d9f1", "#dbe5f1", "#f2dbdb", "#eaf1dd", "#e5dfec", "#daeef3", "#fde9d9" ], [ "#d9d9d9", "#595959", "#c4bc96", "#8db3e2", "#b8cce4", "#e5b8b7", "#d6e3bc", "#ccc0d9", "#b6dde8", "#fbd4b4" ], [ "#bfbfbf", "#404040", "#938953", "#548dd4", "#95b3d7", "#d99594", "#c2d69b", "#b2a1c7", "#92cddc", "#fabf8f" ], [ "#a6a6a6", "#262626", "#4a442a", "#17365d", "#365f91", "#943634", "#76923c", "#5f497a", "#31849b", "#e36c0a" ], [ "#7f7f7f", "#0d0d0d", "#1c1a10", "#0f243e", "#243f60", "#622423", "#4e6128", "#3f3151", "#205867", "#974706" ] ],
                    standardText: "",
                    standardColor: [ "#c00000", "#ff0000", "#ffc000", "#ffff00", "#92d050", "#00b050", "#00b0f0", "#0070c0", "#002060", "#7030a0" ]
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            show: function() {
                if (!this.__inDoc) {
                    this.__inDoc = true;
                    this.appendTo(this.__element.ownerDocument.body);
                }
                this.__maskWidget.show();
                this.callBase();
                return this;
            },
            hide: function() {
                this.callBase();
                this.__maskWidget.hide();
                return this;
            },
            attachTo: function($obj) {
                var _self = this;
                $obj.on("click", function() {
                    _self.appendTo($obj.getElement().ownerDocument.body);
                    _self.positionTo($obj);
                    _self.show();
                });
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "ColorPicker";
                this.__contentElement = null;
                this.__maskWidget = null;
                this.__inDoc = false;
            },
            __render: function() {
                this.callBase();
                $(this.__element).addClass(CONF.classPrefix + "colorpicker");
                var contentHtml = Utils.Tpl.compile(tpl, this.__options);
                this.__contentElement.appendChild($(contentHtml)[0]);
                this.__previewElement = $(this.__contentElement).find("." + CONF.classPrefix + "colorpicker-preview");
                this.__clearElement = $(this.__contentElement).find("." + CONF.classPrefix + "colorpicker-clear");
                this.__maskWidget = new Mask(this.__options.mask);
            },
            // 初始化点击事件
            __initEvent: function() {
                var _self = this;
                this.callBase();
                this.on("click", function(e) {
                    var color, $target = $(e.target);
                    if ($target.hasClass(CONF.classPrefix + "colorpicker-item")) {
                        color = $target.attr("data-color");
                        _self.trigger("selectcolor", color);
                        _self.hide();
                    } else if ($target.hasClass(CONF.classPrefix + "colorpicker-clear")) {
                        _self.trigger("selectcolor", "");
                        _self.hide();
                    }
                });
                this.on("mouseover", function(e) {
                    var color, $target = $(e.target);
                    if ($target.hasClass(CONF.classPrefix + "colorpicker-item")) {
                        color = $target.attr("data-color");
                        $(_self.__element).find("." + CONF.classPrefix + "colorpicker-preview").css({
                            "background-color": color,
                            "border-color": color
                        });
                    }
                });
                this.__maskWidget.on("click", function() {
                    _self.hide();
                });
            }
        });
    }
};

//src/widget/container.js
/**
 * Container类， 所有容器类的父类`
 * @abstract
 */
_p[39] = {
    value: function(require) {
        var Utils = _p.r(13), CONF = _p.r(12), Widget = _p.r(60), Creator = _p.r(0), $ = _p.r(4);
        return Utils.createClass("Container", {
            base: Widget,
            constructor: function(options) {
                var defaultOptions = {
                    column: false,
                    widgets: null
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            indexOf: function(widget) {
                return $.inArray(widget, this.__widgets);
            },
            disable: function() {
                this.callBase();
                $.each(this.__widgets, function(index, widget) {
                    widget.disable();
                });
            },
            enable: function() {
                this.callBase();
                $.each(this.__widgets, function(index, widget) {
                    widget.enable();
                });
            },
            getWidgets: function() {
                return this.__widgets;
            },
            getWidget: function(index) {
                return this.__widgets[index] || null;
            },
            getWidgetByValue: function(value) {
                var widget = null;
                $.each(this.__widgets, function(i, wgt) {
                    if (wgt.getValue() === value) {
                        widget = wgt;
                        return false;
                    }
                });
                return widget;
            },
            appendWidget: function(widget) {
                if (!this.__valid(widget)) {
                    return null;
                }
                if (this.__options.disabled) {
                    widget.disable();
                }
                this.__widgets.push(widget);
                widget.appendTo(this.__contentElement);
                if (!this.__options.column) {
                    return widget;
                }
                if (this.__widgets.length > 0 && this.__widgets.length % this.__options.column === 0) {
                    this.__contentElement.appendChild($('<span class="fui-column"></span>')[0]);
                }
                $(widget.getElement()).addClass(CONF.classPrefix + "panel-column-widget");
                return widget;
            },
            appendWidgets: function(widgetArray) {
                var _self = this, widgets = widgetArray;
                if (!$.isArray(widgetArray)) {
                    widgets = arguments;
                }
                $.each(widgets, function(i, widget) {
                    _self.appendWidget(widget);
                });
                return this;
            },
            // TODO insertWidget时， 如果columnu为指定的数字，那么该插入需要调整换行符，现在还未对这个逻辑做处理。
            insertWidget: function(index, widget) {
                var oldElement = null;
                if (this.__widgets.length === 0) {
                    return this.appendWidget(widget);
                }
                if (!this.__valid(widget)) {
                    return null;
                }
                if (this.__options.disabled) {
                    widget.disable();
                }
                oldElement = this.__widgets[index];
                this.__widgets.splice(index, 0, widget);
                this.__contentElement.insertBefore(widget.getElement(), oldElement.getElement());
                if (this.__options.column === false) {
                    return widget;
                }
                this.__contentElement.insertBefore($('<span class="fui-column"></span>')[0], oldElement.getElement());
                $(widget.getElement()).addClass(CONF.classPrefix + "panel-column-widget");
                return widget;
            },
            insertWidgets: function(index, widgetArray) {
                var _self = this, widgets = widgetArray;
                if (!$.isArray(widgetArray)) {
                    widgets = [].slice.call(arguments, 1);
                }
                $.each(widgets, function(i, widget) {
                    _self.insertWidget(index, widget);
                    index++;
                });
                return this;
            },
            getContentElement: function() {
                return this.__contentElement;
            },
            removeWidget: function(widget) {
                if (typeof widget === "number") {
                    widget = this.__widgets.splice(widget, 1)[0];
                } else {
                    this.__widgets.splice(this.indexOf(widget), 1);
                }
                this.__contentElement.removeChild(widget.getElement());
                $(widget.getElement()).removeClass(CONF.classPrefix + "panel-column-widget");
                return widget;
            },
            __initOptions: function() {
                this.widgetName = "Container";
                this.__widgets = [];
                this.__contentElement = null;
                this.__options.column -= 0;
            },
            __render: function() {
                this.callBase();
                this.__contentElement = this.__element;
                $(this.__element).addClass(CONF.classPrefix + "container");
                if (this.__options.column) {
                    $(this.__element).addClass(CONF.classPrefix + "container-column");
                }
                return this;
            },
            // Override
            __appendChild: function(childWidget) {
                return this.appendWidget(childWidget);
            },
            __initWidgets: function() {
                if (!this.__options.widgets) {
                    return;
                }
                var widgets = Creator.parse(this.__options.widgets), _self = this;
                if (!$.isArray(widgets)) {
                    widgets = [ widgets ];
                }
                $.each(widgets, function(i, widget) {
                    _self.appendWidget(widget);
                });
            },
            /**
         * 验证元素给定元素是否可以插入当前容器中
         * @param ele 需要验证的元素
         * @returns {boolean} 允许插入返回true, 否则返回false
         * @private
         */
            __valid: function(ele) {
                return ele instanceof Widget;
            }
        });
    }
};

//src/widget/dialog.js
/**
 * 容器类： PPanel = Positioning Panel
 */
_p[40] = {
    value: function(require) {
        var Utils = _p.r(13), CONF = _p.r(12), Widget = _p.r(60), Mask = _p.r(49), tpl = _p.r(21), Button = _p.r(37), LAYOUT = CONF.layout, $ = _p.r(4), ACTION = {
            CANCEL: "cancel",
            OK: "ok"
        };
        return Utils.createClass("Dialog", {
            base: _p.r(54),
            constructor: function(options) {
                var defaultOptions = {
                    layout: LAYOUT.CENTER,
                    caption: null,
                    resize: "height",
                    draggable: true,
                    // 是否包含close button
                    closeButton: true,
                    mask: {
                        color: "#000",
                        opacity: .2
                    },
                    prompt: false,
                    // 底部按钮
                    buttons: [ {
                        className: CONF.classPrefix + "xdialog-ok-btn",
                        action: "ok",
                        label: "确定"
                    }, {
                        className: CONF.classPrefix + "xdialog-cancel-btn",
                        action: "cancel",
                        label: "取消"
                    } ]
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            open: function() {
                this.__fire("open", function() {
                    this.show();
                });
                return this;
            },
            close: function() {
                this.__fire("close", function() {
                    this.hide();
                });
                return this;
            },
            getButtons: function() {
                return this.__buttons;
            },
            getButton: function(index) {
                return this.__buttons[index];
            },
            appendTo: function(container) {
                this.callBase(container);
                this.__maskWidget.appendTo(container);
                this.__inDoc = true;
                return this;
            },
            show: function() {
                if (!this.__target) {
                    this.__target = this.__element.ownerDocument.body;
                }
                if (!this.__inDoc) {
                    this.appendTo(this.__element.ownerDocument.body);
                }
                this.__maskWidget.show();
                this.callBase();
                this.__openState = true;
                return this;
            },
            hide: function() {
                this.callBase();
                this.__maskWidget.hide();
                this.__openState = false;
                return this;
            },
            toggle: function() {
                this.isOpen() ? this.close() : this.open();
                return this;
            },
            isOpen: function() {
                return this.__openState;
            },
            getHeadElement: function() {
                return this.__headElement;
            },
            getBodyElement: function() {
                return this.getContentElement();
            },
            getFootElement: function() {
                return this.__footElement;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Dialog";
                this.__target = this.__options.target;
                this.__layout = this.__options.layout;
                this.__inDoc = false;
                this.__hinting = false;
                this.__openState = false;
                this.__headElement = null;
                this.__bodyElement = null;
                this.__footElement = null;
                this.__maskWidget = null;
                this.__buttons = [];
                if (this.__target instanceof Widget) {
                    this.__target = this.__target.getElement();
                }
            },
            __render: function() {
                this.callBase();
                this.__innerTpl = Utils.Tpl.compile(tpl, this.__options);
                this.__contentElement.appendChild($(this.__innerTpl)[0]);
                $(this.__element).addClass(CONF.classPrefix + "dialog");
                this.__headElement = $(".fui-dialog-head", this.__contentElement)[0];
                this.__bodyElement = $(".fui-dialog-body", this.__contentElement)[0];
                this.__footElement = $(".fui-dialog-foot", this.__contentElement)[0];
                this.__maskWidget = new Mask(this.__options.mask);
                this.__contentElement = this.__bodyElement;
                if (this.__options.draggable) {
                    this.__initDraggable();
                }
                if (this.__options.closeButton) {
                    this.__initCloseButton();
                }
                this.__initButtons();
                this.__initMaskLint();
            },
            __action: function(type, btn) {
                switch (type) {
                  case ACTION.OK:
                    if (this.__triggerHandler(type) !== false) {
                        this.close();
                    }
                    break;

                  case ACTION.CANCEL:
                    this.__triggerHandler(type);
                    this.close();
                    break;
                }
            },
            __initButtons: function() {
                var _self = this, button = null, foot = this.__footElement;
                $.each(this.__options.buttons, function(index, buttonOption) {
                    button = new Button(buttonOption);
                    button.appendTo(foot);
                    _self.__buttons.push(button);
                });
            },
            __initEvent: function() {
                var _self = this;
                this.callBase();
                $([ this.__footElement, this.__headElement ]).on("btnclick", function(e, btn) {
                    _self.__action(btn.getOptions().action, btn);
                });
                if (this.__options.prompt) {
                    $(this.__element).on("keydown", function(e) {
                        switch (e.keyCode) {
                          case 13:
                            _self.__action(ACTION.OK);
                            break;

                          case 27:
                            _self.__action(ACTION.CANCEL);
                            break;
                        }
                    });
                }
            },
            __initDraggable: function() {
                Utils.createDraggable({
                    handler: this.__headElement,
                    target: this.__element
                }).bind();
            },
            __initCloseButton: function() {
                var closeButton = new Button({
                    className: "fui-close-button",
                    action: "cancel",
                    icon: {
                        className: "fui-close-button-icon"
                    }
                });
                closeButton.appendTo(this.__headElement);
            },
            __initMaskLint: function() {
                var _self = this;
                this.__maskWidget.on("click", function() {
                    _self.__hint();
                });
            },
            __hint: function() {
                if (this.__hinting) {
                    return;
                }
                this.__hinting = true;
                var $ele = $(this.__element), _self = this, classNmae = [ CONF.classPrefix + "mask-hint", CONF.classPrefix + "mask-animate" ];
                $ele.addClass(classNmae.join(" "));
                window.setTimeout(function() {
                    $ele.removeClass(classNmae[0]);
                    window.setTimeout(function() {
                        $ele.removeClass(classNmae[1]);
                        _self.__hinting = false;
                    }, 200);
                }, 200);
            }
        });
    }
};

//src/widget/drop-panel.js
/**
 * DropPanel对象
 * 可接受输入的按钮构件
 */
_p[41] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12), tpl = _p.r(22), Button = _p.r(37), Panel = _p.r(51), PPanel = _p.r(54), Mask = _p.r(49);
        return _p.r(13).createClass("DropPanel", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    button: null,
                    panel: null,
                    width: null,
                    height: null
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            disable: function() {
                this.callBase();
            },
            enable: function() {
                this.callBase();
            },
            open: function() {
                this.__popupWidget.appendWidget(this.__panelWidget);
                this.__maskWidget.show();
                this.__popupWidget.show();
                var $popup = $(this.__popupWidget.getElement());
                $popup.css("top", parseInt($popup.css("top")) - $(this.__element).outerHeight());
                $popup.css("min-width", $(this.__element).outerWidth());
                $popup.css("min-height", $(this.__element).height());
            },
            close: function() {
                this.__maskWidget.hide();
                this.__popupWidget.hide();
                this.__panelWidget.appendTo(this.__contentElement);
            },
            getPanelElement: function() {
                return this.__panelWidget.getElement();
            },
            appendWidget: function(widget) {
                this.__panelWidget.appendWidget(widget);
            },
            getWidgets: function() {
                return this.__panelWidget.getWidgets();
            },
            getWidget: function(index) {
                return this.__panelWidget.getWidget(index);
            },
            appendWidgets: function(widgets) {
                this.__panelWidget.appendWidgets.apply(this, arguments);
                return this;
            },
            insertWidget: function(index, widget) {
                this.__panelWidget.insertWidget(index, widget);
            },
            insertWidgets: function(index, widgets) {
                this.__panelWidget.insertWidgets.apply(this, arguments);
                return this;
            },
            removeWidget: function(widget) {
                return this.__panelWidget.removeWidget(widget);
            },
            __render: function() {
                this.__initOptions();
                this.__buttonWidget = new Button(this.__options.button);
                this.__panelWidget = new Panel(this.__options.content);
                this.__popupWidget = new PPanel();
                this.__maskWidget = new Mask(this.__options.mask);
                this.callBase();
                this.__popupWidget.positionTo(this.__element);
                $(this.__popupWidget.getElement()).addClass(CONF.classPrefix + "drop-panel-popup");
                // 初始化content
                var $content = $('<div class="' + CONF.classPrefix + 'drop-panel-content"></div>').append(this.__panelWidget.getElement());
                this.__contentElement = $content[0];
                // 插入按钮到element
                $(this.__element).append($content).append(this.__buttonWidget.getElement());
                this.__initDropPanelEvent();
            },
            __initOptions: function() {
                this.widgetName = "DropPanel";
                this.__tpl = tpl;
                this.__buttonWidget = null;
                this.__popupWidget = null;
                this.__panelWidget = null;
                this.__contentElement = null;
                this.__maskWidget = null;
                this.__popupState = false;
                if (typeof this.__options.button !== "object") {
                    this.__options.input = {
                        icon: this.__options.button
                    };
                }
            },
            __initDropPanelEvent: function() {
                var _self = this;
                this.__buttonWidget.on("click", function() {
                    if (!_self.__popupState) {
                        _self.__appendPopup();
                        _self.__popupState = true;
                    }
                    _self.trigger("buttonclick");
                    _self.open();
                });
                this.__panelWidget.on("click", function() {
                    _self.trigger("panelclick");
                });
                // mask 点击关闭
                this.__maskWidget.on("maskclick", function() {
                    _self.close();
                });
            },
            __appendPopup: function() {
                this.__popupWidget.appendTo(this.__element.ownerDocument.body);
            }
        });
    }
};

//src/widget/icon.js
/**
 * icon widget
 * 封装多种icon方式
 */
_p[42] = {
    value: function(require) {
        var $ = _p.r(4), iconTpl = _p.r(23);
        return _p.r(13).createClass("Icon", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    img: null
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            getValue: function() {
                return this.__options.value || this.__options.img;
            },
            setImage: function(imageSrc) {
                if (this.__options.img === imageSrc) {
                    return this;
                }
                if (this.__image) {
                    this.__image.src = imageSrc;
                }
                this.trigger("iconchange", {
                    prevImage: this.__prevIcon,
                    currentImage: this.__currentIcon
                });
            },
            getImage: function() {
                return this.__currentIcon;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Icon";
                this.__tpl = iconTpl;
                this.__prevIcon = null;
                this.__currentIcon = this.__options.img;
                this.__image = null;
            },
            __render: function() {
                this.__options.__width = this.__options.width;
                this.__options.__height = this.__options.height;
                this.__options.width = null;
                this.__options.height = null;
                this.callBase();
                if (!this.__options.img) {
                    return;
                }
                this.__image = $("img", this.__element)[0];
                if (this.__options.__width !== null) {
                    this.__image.width = this.__options.__width;
                }
                if (this.__options.__height !== null) {
                    this.__image.height = this.__options.__height;
                }
            }
        });
    }
};

//src/widget/input-button.js
/**
 * InputButton对象
 * 可接受输入的按钮构件
 */
_p[43] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12), tpl = _p.r(24), Button = _p.r(37), Input = _p.r(45);
        return _p.r(13).createClass("InputButton", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    button: null,
                    input: null,
                    placeholder: null,
                    // label相对icon的位置
                    layout: "right"
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            getValue: function() {
                return this.__inputWidget.getValue();
            },
            setValue: function(value) {
                this.__inputWidget.setValue(value);
                return this;
            },
            reset: function() {
                this.__inputWidget.reset();
            },
            selectAll: function() {
                this.__inputWidget.selectAll();
                return this;
            },
            selectRange: function(start, end) {
                this.__inputWidget.selectRange(start, end);
                return this;
            },
            focus: function() {
                this.__inputWidget.focus();
                return this;
            },
            unfocus: function() {
                this.__inputWidget.unfocus();
                return this;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "InputButton";
                this.__tpl = tpl;
                this.__inputWidget = null;
                this.__buttonWidget = null;
                if (typeof this.__options.input !== "object") {
                    this.__options.input = {
                        placeholder: this.__options.input
                    };
                }
                this.__options.input = $.extend({}, this.__options.input, {
                    placeholder: this.__options.placeholder
                });
                if (typeof this.__options.button !== "object") {
                    this.__options.button = {
                        icon: this.__options.button
                    };
                }
            },
            __render: function() {
                var _self = this;
                this.callBase();
                this.__buttonWidget = new Button(this.__options.button);
                this.__inputWidget = new Input(this.__options.input);
                // layout
                switch (this.__options.layout) {
                  case "left":
                  /* falls through */
                    case "top":
                    this.__buttonWidget.appendTo(this.__element);
                    this.__inputWidget.appendTo(this.__element);
                    break;

                  case "right":
                  /* falls through */
                    case "bottom":
                  /* falls through */
                    default:
                    this.__inputWidget.appendTo(this.__element);
                    this.__buttonWidget.appendTo(this.__element);
                    break;
                }
                $(this.__element).addClass(CONF.classPrefix + "layout-" + this.__options.layout);
                this.__buttonWidget.on("click", function() {
                    _self.trigger("buttonclick");
                });
            }
        });
    }
};

//src/widget/input-menu.js
/**
 * InputMenu构件
 * 可接受输入的下拉菜单构件
 */
_p[44] = {
    value: function(require) {
        var $ = _p.r(4), tpl = _p.r(25), InputButton = _p.r(43), Menu = _p.r(50), Mask = _p.r(49);
        return _p.r(13).createClass("InputMenu", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    input: null,
                    menu: null,
                    mask: null,
                    selected: -1
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            select: function(index) {
                this.__menuWidget.select(index);
            },
            selectByValue: function(value) {
                return this.__selectBy("values", value);
            },
            selectByLabel: function(value) {
                return this.__selectBy("labels", value);
            },
            clearSelect: function() {
                this.__lastSelect = -1;
                this.__menuWidget.clearSelect();
                this.__inputWidget.reset();
                return this;
            },
            setValue: function(value) {
                return this;
            },
            getValue: function() {
                return this.__menuWidget.getSelectedItem().getValue();
            },
            open: function() {
                this.__maskWidget.show();
                this.__menuWidget.show();
            },
            close: function() {
                this.__maskWidget.hide();
                this.__menuWidget.hide();
            },
            __render: function() {
                this.__inputWidget = new InputButton(this.__options.input);
                this.__menuWidget = new Menu(this.__options.menu);
                this.__maskWidget = new Mask(this.__options.mask);
                this.callBase();
                this.__inputWidget.appendTo(this.__element);
                this.__menuWidget.positionTo(this.__inputWidget);
                this.__initInputValue();
            },
            __selectBy: function(type, value) {
                var values = this.__getItemValues()[type], index = -1;
                $.each(values, function(i, val) {
                    if (value === val) {
                        index = i;
                        return false;
                    }
                });
                if (index !== -1) {
                    this.select(index);
                    return this.__menuWidget.getSelectedItem();
                }
                return null;
            },
            __initInputValue: function() {
                var selectedItem = this.__menuWidget.getItem(this.__options.selected);
                if (selectedItem) {
                    this.__inputWidget.setValue(selectedItem.getLabel());
                }
            },
            __initEvent: function() {
                var _self = this;
                this.callBase();
                this.on("buttonclick", function() {
                    if (!this.__menuState) {
                        this.__appendMenu();
                        this.__menuState = true;
                    }
                    this.__inputWidget.unfocus();
                    this.open();
                });
                this.on("keypress", function(e) {
                    this.__lastTime = new Date();
                });
                this.on("keyup", function(e) {
                    if (e.keyCode !== 8 && e.keyCode !== 13 && new Date() - this.__lastTime < 500) {
                        this.__update();
                    }
                });
                this.on("inputcomplete", function() {
                    this.__inputWidget.selectRange(99999999);
                    this.__inputComplete();
                });
                this.__menuWidget.on("select", function(e, info) {
                    e.stopPropagation();
                    _self.__inputWidget.setValue(info.label);
                    _self.trigger("select", info);
                    _self.close();
                });
                this.__menuWidget.on("change", function(e, info) {
                    e.stopPropagation();
                    _self.trigger("change", info);
                });
                // 阻止input自身的select和change事件
                this.__inputWidget.on("select change", function(e) {
                    e.stopPropagation();
                });
                // mask 点击关闭
                this.__maskWidget.on("maskclick", function() {
                    _self.close();
                });
                // 记录最后选中的数据
                this.on("select", function(e, info) {
                    this.__lastSelect = info;
                });
            },
            // 更新输入框内容
            __update: function() {
                var inputValue = this.__inputWidget.getValue(), lowerCaseValue = inputValue.toLowerCase(), values = this.__getItemValues().labels, targetValue = null;
                if (!inputValue) {
                    return;
                }
                $.each(values, function(i, val) {
                    if (val.toLowerCase().indexOf(lowerCaseValue) === 0) {
                        targetValue = val;
                        return false;
                    }
                });
                if (targetValue) {
                    this.__inputWidget.setValue(targetValue);
                    this.__inputWidget.selectRange(inputValue.length);
                }
            },
            // 获取所有item的值列表
            __getItemValues: function() {
                var vals = [], labels = [];
                $.each(this.__menuWidget.getWidgets(), function(index, item) {
                    labels.push(item.getLabel());
                    vals.push(item.getValue());
                });
                return {
                    labels: labels,
                    values: vals
                };
            },
            // 用户输入完成
            __inputComplete: function() {
                var itemsInfo = this.__getItemValues(), labels = itemsInfo.labels, targetIndex = -1, inputValue = this.__inputWidget.getValue(), lastSelect = this.__lastSelect;
                $.each(labels, function(i, label) {
                    if (label === inputValue) {
                        targetIndex = i;
                        return false;
                    }
                });
                this.trigger("select", {
                    index: targetIndex,
                    label: inputValue,
                    value: itemsInfo.values[targetIndex]
                });
                if (!lastSelect || lastSelect.value !== inputValue) {
                    this.trigger("change", {
                        from: lastSelect || {
                            index: -1,
                            label: null,
                            value: null
                        },
                        to: {
                            index: targetIndex,
                            label: inputValue,
                            value: itemsInfo.values[targetIndex]
                        }
                    });
                }
            },
            __appendMenu: function() {
                this.__menuWidget.appendTo(this.__inputWidget.getElement().ownerDocument.body);
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "InputMenu";
                this.__tpl = tpl;
                // 最后输入时间
                this.__lastTime = 0;
                // 最后选中的记录
                this.__lastSelect = null;
                this.__inputWidget = null;
                this.__menuWidget = null;
                this.__maskWidget = null;
                // menu状态， 记录是否已经append到dom树上
                this.__menuState = false;
                if (this.__options.selected !== -1) {
                    this.__options.menu.selected = this.__options.selected;
                }
            }
        });
    }
};

//src/widget/input.js
/*jshint camelcase:false*/
/**
* Input widget
*/
_p[45] = {
    value: function(require) {
        var CONF = _p.r(12), $ = _p.r(4), tpl = _p.r(26);
        return _p.r(13).createClass("Input", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    placeholder: null
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            getValue: function() {
                return this.__element.value;
            },
            setValue: function(value) {
                this.__element.value = value;
                return this;
            },
            disable: function() {
                this.callBase();
                this.__element.disabled = true;
            },
            enable: function() {
                this.__element.disabled = false;
                this.callBase();
            },
            reset: function() {
                this.__element.value = this.__options.value || "";
                return this;
            },
            selectAll: function() {
                this.__element.select();
            },
            selectRange: function(startIndex, endIndex) {
                if (!startIndex) {
                    startIndex = 0;
                }
                if (!endIndex) {
                    endIndex = 1e9;
                }
                this.__element.setSelectionRange(startIndex, endIndex);
            },
            focus: function() {
                this.__element.focus();
                return this;
            },
            unfocus: function() {
                this.__element.blur();
                return this;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Input";
                this.__tpl = tpl;
                // input构件允许获得焦点
                this.__allow_focus = true;
            },
            __render: function() {
                this.callBase();
                this.__element.removeAttribute("unselectable");
                if (this.__options.placeholder) {
                    this.__element.setAttribute("placeholder", this.__options.placeholder);
                }
                this.addClass(CONF.classPrefix + "selectable");
            },
            __initEvent: function() {
                this.callBase();
                this.on("keydown", function(e) {
                    if (e.keyCode === 13) {
                        this.trigger("inputcomplete", {
                            value: this.getValue()
                        });
                    }
                });
            }
        });
    }
};

//src/widget/item.js
/**
 * Label Widget
 */
_p[46] = {
    value: function(require) {
        var Utils = _p.r(13), itemTpl = _p.r(27), Icon = _p.r(42), Label = _p.r(48), CONF = _p.r(12), $ = _p.r(4);
        return Utils.createClass("Item", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    label: "",
                    icon: null,
                    selected: false,
                    textAlign: "left"
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            getValue: function() {
                return this.__options.value || this.__labelWidget.getValue() || this.__iconWidget.getValue() || null;
            },
            select: function() {
                this.__update(true);
                return this;
            },
            unselect: function() {
                this.__update(false);
                return this;
            },
            isSelected: function() {
                return this.__selectState;
            },
            setLabel: function(text) {
                this.__labelWidget.setText(text);
                return this;
            },
            getLabel: function() {
                return this.__labelWidget.getText();
            },
            setIcon: function(imageSrc) {
                this.__iconWidget.setImage(imageSrc);
                return this;
            },
            getIcon: function() {
                return this.__iconWidget.getImage();
            },
            __render: function() {
                this.callBase();
                this.__iconWidget = new Icon(this.__options.icon);
                this.__labelWidget = new Label(this.__options.label);
                this.__iconWidget.appendTo(this.__element);
                this.__labelWidget.appendTo(this.__element);
            },
            __update: function(state) {
                var fn = state ? "addClass" : "removeClass";
                state = !!state;
                $(this.__element)[fn](CONF.classPrefix + "item-selected");
                this.__selectState = state;
                this.trigger(state ? "itemselect" : "itemunselect");
                return this;
            },
            __initEvent: function() {
                this.callBase();
                this.on("click", function() {
                    this.trigger("itemclick");
                });
            },
            /**
         * 初始化模板所用的css值
         * @private
         */
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Item";
                this.__tpl = itemTpl;
                this.__iconWidget = null;
                this.__labelWidget = null;
                this.__selectState = this.__options.selected;
                if (typeof this.__options.label !== "object") {
                    this.__options.label = {
                        text: this.__options.label
                    };
                }
                if (!this.__options.label.textAlign) {
                    this.__options.label.textAlign = this.__options.textAlign;
                }
                if (typeof this.__options.icon !== "object") {
                    this.__options.icon = {
                        img: this.__options.icon
                    };
                }
            }
        });
    }
};

//src/widget/label-panel.js
/**
 * LabelPanel Widget
 * 带标签的面板
 */
_p[47] = {
    value: function(require) {
        var Utils = _p.r(13), CONF = _p.r(12), Label = _p.r(48), $ = _p.r(4);
        return Utils.createClass("LabelPanel", {
            base: _p.r(51),
            constructor: function(options) {
                var defaultOptions = {
                    layout: "bottom"
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            disable: function() {
                this.callBase();
                this.__labelWidget.disable();
            },
            enable: function() {
                this.callBase();
                this.__labelWidget.enable();
            },
            __render: function() {
                var $contentElement = null, opts = this.__options, ele = this.__element, classPrefix = CONF.classPrefix, labelClass = "fui-label-panel-content", originEle = null;
                this.__labelWidget = new Label(opts.label);
                this.callBase();
                originEle = this.__contentElement;
                $(ele).addClass(classPrefix + "label-panel");
                $(ele).addClass(classPrefix + "layout-" + opts.layout);
                $contentElement = $('<div class="' + labelClass + '"></div>');
                originEle.appendChild(this.__labelWidget.getElement());
                originEle.appendChild($contentElement[0]);
                // 更新contentElement
                this.__contentElement = $contentElement[0];
                return this;
            },
            __initOptions: function() {
                var label = this.__options.label;
                this.callBase();
                this.widgetName = "LabelPanel";
                this.__labelWidget = null;
                if (typeof label !== "object") {
                    this.__options.label = {
                        text: label
                    };
                }
                if (!this.__options.label.className) {
                    this.__options.label.className = "";
                }
                this.__options.label.className += " fui-label-panel-label";
            }
        });
    }
};

//src/widget/label.js
/**
 * Label Widget
 */
_p[48] = {
    value: function(require) {
        var Utils = _p.r(13), labelTpl = _p.r(28), $ = _p.r(4);
        return Utils.createClass("Label", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    text: "",
                    textAlign: "center"
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            getValue: function() {
                return this.__options.text;
            },
            setText: function(text) {
                var oldtext = this.__options.text;
                this.__options.text = text;
                $(this.__element).text(text);
                this.trigger("labelchange", {
                    currentText: text,
                    prevText: oldtext
                });
                return this;
            },
            getText: function() {
                return this.__options.text;
            },
            // label 禁用title显示
            __allowShowTitle: function() {
                return false;
            },
            /**
         * 初始化模板所用的css值
         * @private
         */
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Label";
                this.__tpl = labelTpl;
                this.__options.text = this.__options.text.toString();
            }
        });
    }
};

//src/widget/mask.js
/*jshint camelcase:false*/
/**
 * Mask Widget
 */
_p[49] = {
    value: function(require) {
        var Utils = _p.r(13), tpl = _p.r(29), Widget = _p.r(60), $ = _p.r(4), __cache_inited = false, __MASK_CACHE = [];
        return Utils.createClass("Mask", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    bgcolor: "#000",
                    opacity: 0,
                    inner: true,
                    target: null,
                    // 禁止mouse scroll事件
                    scroll: false,
                    hide: true
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            maskTo: function(target) {
                if (target) {
                    this.__target = target;
                }
                return this;
            },
            show: function() {
                var docNode = null;
                if (!this.__target) {
                    this.__target = this.__element.ownerDocument.body;
                }
                docNode = this.__target.ownerDocument.documentElement;
                // 如果节点未添加到dom树， 则自动添加到文档的body节点上
                if (!$.contains(docNode, this.__element)) {
                    this.appendTo(this.__target.ownerDocument.body);
                }
                this.callBase();
                this.__position();
                this.__resize();
                this.__hideState = false;
            },
            hide: function() {
                this.callBase();
                this.__hideState = true;
            },
            isHide: function() {
                return this.__hideState;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Mask";
                this.__tpl = tpl;
                this.__cacheId = __MASK_CACHE.length;
                this.__hideState = true;
                __MASK_CACHE.push(this);
                this.__target = this.__options.target;
                if (this.__target instanceof Widget) {
                    this.__target = this.__target.getElement();
                }
            },
            __render: function() {
                this.callBase();
                this.__initMaskEvent();
                if (!__cache_inited) {
                    __cache_inited = true;
                    __initCacheEvent();
                }
            },
            __initMaskEvent: function() {
                this.on("mousewheel", function(e) {
                    var evt = e.originalEvent;
                    e.preventDefault();
                    e.stopPropagation();
                    this.trigger("scroll", {
                        delta: evt.wheelDelta || evt.deltaY || evt.detail
                    });
                });
                this.on("click", function(e) {
                    e.stopPropagation();
                    if (e.target === this.__element) {
                        this.trigger("maskclick");
                    }
                });
            },
            // 定位
            __resize: function() {
                var targetRect = null;
                // body特殊处理
                if (this.__targetIsBody()) {
                    targetRect = $(Utils.getView(this.__target));
                    targetRect = {
                        width: targetRect.width(),
                        height: targetRect.height()
                    };
                } else {
                    targetRect = Utils.getRect(this.__target);
                }
                this.__element.style.width = targetRect.width + "px";
                this.__element.style.height = targetRect.height + "px";
            },
            __position: function() {
                var location = null, targetRect = null;
                if (this.__targetIsBody()) {
                    location = {
                        top: 0,
                        left: 0
                    };
                } else {
                    targetRect = Utils.getRect(this.__target);
                    location = {
                        top: targetRect.top,
                        left: targetRect.left
                    };
                }
                $(this.__element).css("top", location.top + "px").css("left", location.left + "px");
            },
            __targetIsBody: function() {
                return this.__target.tagName.toLowerCase() === "body";
            }
        });
        // 全局监听
        function __initCacheEvent() {
            $(window).on("resize", function() {
                $.each(__MASK_CACHE, function(i, mask) {
                    if (mask && !mask.isHide()) {
                        mask.__resize();
                    }
                });
            });
        }
    }
};

//src/widget/menu.js
/**
 * Menu Widget
 */
_p[50] = {
    value: function(require) {
        var Utils = _p.r(13), Item = _p.r(46), CONF = _p.r(12), $ = _p.r(4);
        return Utils.createClass("Menu", {
            base: _p.r(54),
            constructor: function(options) {
                var defaultOptions = {
                    column: true,
                    selected: -1,
                    textAlign: "left",
                    items: []
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            select: function(index) {
                var item = this.__widgets[index];
                if (!item) {
                    return this;
                }
                this.__selectItem(item);
                return this;
            },
            clearSelect: function() {
                var selectedItem = this.getSelectedItem();
                if (selectedItem) {
                    selectedItem.unselect();
                }
                this.__currentSelect = -1;
                this.__prevSelect = -1;
            },
            getItems: function() {
                return this.getWidgets.apply(this, arguments);
            },
            getItem: function() {
                return this.getWidget.apply(this, arguments);
            },
            appendItem: function(item) {
                return this.appendWidget.apply(this, arguments);
            },
            insertItem: function(item) {
                return this.insertWidget.apply(this, arguments);
            },
            removeItem: function(item) {
                return this.removeWidget.apply(this, arguments);
            },
            clearItems: function() {
                while (this.getItems().length) {
                    this.removeItem(0);
                }
                return this;
            },
            getSelected: function() {
                return this.__currentSelect;
            },
            getSelectedItem: function() {
                return this.getItem(this.__currentSelect);
            },
            insertWidget: function(index, widget) {
                var returnValue = this.callBase(index, widget);
                if (returnValue === null) {
                    return returnValue;
                }
                if (index <= this.__currentSelect) {
                    this.__currentSelect++;
                }
                if (index <= this.__prevSelect) {
                    this.__prevSelect++;
                }
                return returnValue;
            },
            removeWidget: function(widget) {
                var index = widget;
                if (typeof index !== "number") {
                    index = this.indexOf(widget);
                }
                widget = this.callBase(widget);
                if (index === this.__currentSelect) {
                    this.__currentSelect = -1;
                } else if (index < this.__currentSelect) {
                    this.__currentSelect--;
                }
                if (index === this.__prevSelect) {
                    this.__prevSelect = -1;
                } else if (index < this.__prevSelect) {
                    this.__prevSelect--;
                }
                return widget;
            },
            __initOptions: function() {
                this.callBase();
                this.__prevSelect = -1;
                this.__currentSelect = this.__options.selected;
                this.widgetName = "Menu";
            },
            __render: function() {
                var _self = this, textAlign = this.__options.textAlign, selected = this.__options.selected;
                this.callBase();
                $(this.__element).addClass(CONF.classPrefix + "menu");
                $.each(this.__options.items, function(index, itemOption) {
                    if (typeof itemOption !== "object") {
                        itemOption = {
                            label: itemOption
                        };
                    }
                    itemOption.selected = index === selected;
                    itemOption.textAlign = textAlign;
                    _self.appendItem(new Item(itemOption));
                });
            },
            // 初始化点击事件
            __initEvent: function() {
                this.callBase();
                this.on("itemclick", function(e) {
                    this.__selectItem(e.widget);
                });
            },
            __selectItem: function(item) {
                if (this.__currentSelect > -1) {
                    this.__widgets[this.__currentSelect].unselect();
                }
                this.__prevSelect = this.__currentSelect;
                this.__currentSelect = this.indexOf(item);
                item.select();
                this.trigger("select", {
                    index: this.__currentSelect,
                    label: item.getLabel(),
                    value: item.getValue()
                });
                if (this.__prevSelect !== this.__currentSelect) {
                    var fromItem = this.__widgets[this.__prevSelect] || null;
                    this.trigger("change", {
                        from: {
                            index: this.__prevSelect,
                            label: fromItem && fromItem.getLabel(),
                            value: fromItem && fromItem.getValue()
                        },
                        to: {
                            index: this.__currentSelect,
                            label: item.getLabel(),
                            value: item.getValue()
                        }
                    });
                }
            },
            __valid: function(target) {
                return target instanceof Item;
            }
        });
    }
};

//src/widget/panel.js
/**
 * 容器类： Panel
 */
_p[51] = {
    value: function(require) {
        var Utils = _p.r(13), panelTpl = _p.r(30), $ = _p.r(4);
        return Utils.createClass("Panel", {
            base: _p.r(39),
            constructor: function(options) {
                var defaultOptions = {};
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            __render: function() {
                var $content = null;
                this.callBase();
                $content = $('<div class="fui-panel-content"></div>');
                this.__contentElement.appendChild($content[0]);
                this.__contentElement = $content[0];
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Panel";
                this.__tpl = panelTpl;
            }
        });
    }
};

//src/widget/popup-menu.js
_p[52] = {
    value: function(require) {
        var Utils = _p.r(13), CONF = _p.r(12), $ = _p.r(4), Menu = _p.r(50);
        return Utils.createClass("PopupMenu", {
            base: _p.r(53),
            constructor: function(options) {
                this.callBase($.extend({
                    menu: {}
                }, options));
            },
            getMenuWidget: function() {
                return this.__menuWidget;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "PopupMenu";
            },
            __render: function() {
                this.callBase();
                this.__menuWidget = new Menu();
                this.appendWidget(this.__menuWidget);
                $(this.__element).addClass(CONF.classPrefix + "popup-menu");
            }
        });
    }
};

//src/widget/popup.js
/**
 * 容器类： PPanel = Positioning Panel
 */
_p[53] = {
    value: function(require) {
        var Utils = _p.r(13), CONF = _p.r(12), Widget = _p.r(60), Mask = _p.r(49), $ = _p.r(4);
        return Utils.createClass("Popup", {
            base: _p.r(54),
            constructor: function(options) {
                var defaultOptions = {
                    mask: {}
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            open: function() {
                this.__fire("open", function() {
                    this.show();
                });
                return this;
            },
            close: function() {
                this.__fire("close", function() {
                    this.hide();
                });
                return this;
            },
            show: function() {
                if (!this.__target) {
                    this.__target = this.__element.ownerDocument.body;
                }
                if (!this.__inDoc) {
                    this.__inDoc = true;
                    this.appendTo(this.__element.ownerDocument.body);
                }
                this.__maskWidget.show();
                this.callBase();
                this.__openState = true;
                return this;
            },
            hide: function() {
                this.callBase();
                this.__maskWidget.hide();
                this.__openState = false;
                return this;
            },
            toggle: function() {
                this.isOpen() ? this.close() : this.open();
                return this;
            },
            isOpen: function() {
                return this.__openState;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Popup";
                this.__target = this.__options.target;
                this.__layout = this.__options.layout;
                this.__inDoc = false;
                this.__openState = false;
                this.__maskWidget = null;
                if (this.__target instanceof Widget) {
                    this.__target = this.__target.getElement();
                }
            },
            __render: function() {
                this.callBase();
                $(this.__element).addClass(CONF.classPrefix + "popup");
                this.__maskWidget = new Mask(this.__options.mask);
                if (this.__options.draggable) {
                    this.__initDraggable();
                }
                this.__initMaskEvent();
            },
            __initMaskEvent: function() {
                var _self = this;
                this.__maskWidget.on("click", function() {
                    _self.close();
                });
            }
        });
    }
};

//src/widget/ppanel.js
/*jshint camelcase:false*/
/**
 * 容器类： PPanel = Positioning Panel
 */
_p[54] = {
    value: function(require) {
        var Utils = _p.r(13), CONF = _p.r(12), Widget = _p.r(60), LAYOUT = CONF.layout, $ = _p.r(4);
        return Utils.createClass("PPanel", {
            base: _p.r(51),
            constructor: function(options) {
                var defaultOptions = {
                    layout: LAYOUT.BOTTOM,
                    target: null,
                    // 边界容器
                    bound: null,
                    // 和边界之间的最小距离
                    diff: 10,
                    hide: true,
                    resize: "all"
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            positionTo: function(target, layout) {
                if (target instanceof Widget) {
                    target = target.getElement();
                }
                this.__target = target;
                if (layout) {
                    this.__layout = layout;
                }
                return this;
            },
            show: function() {
                var docNode = null;
                if (!this.__target) {
                    return this.callBase();
                }
                if (!this.__options.bound) {
                    this.__options.bound = this.__target.ownerDocument.body;
                }
                docNode = this.__target.ownerDocument.documentElement;
                if (!$.contains(docNode, this.__element)) {
                    this.__target.ownerDocument.body.appendChild(this.__element);
                }
                if ($.contains(docNode, this.__target)) {
                    this.callBase(Utils.getMarker());
                    this.__position();
                    this.__resize();
                }
                return this;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "PPanel";
                this.__target = this.__options.target;
                this.__layout = this.__options.layout;
                // 记录是否已调整过高度
                this.__height_resized = false;
            },
            __render: function() {
                this.callBase();
                $(this.__element).addClass(CONF.classPrefix + "ppanel");
            },
            // 执行定位
            __position: function() {
                var location = null, className = CONF.classPrefix + "ppanel-position";
                $(this.__element).addClass(className);
                location = this.__getLocation();
                $(this.__element).css("top", location.top + "px").css("left", location.left + "px");
            },
            __resize: function() {
                var targetRect = Utils.getBound(this.__target);
                switch (this.__options.resize) {
                  case "all":
                    this.__resizeWidth(targetRect);
                    this.__resizeHeight();
                    break;

                  case "width":
                    this.__resizeWidth(targetRect);
                    break;

                  case "height":
                    this.__resizeHeight();
                    break;
                }
            },
            /**
         * 在未指定宽度的情况下，执行自动宽度适配。
         * 如果构件未被指定宽度， 则添加一个最小宽度， 该最小宽度等于给定目标的宽度
         * @param targetRect 传递该参数，是出于整体性能上的考虑。
         * @private
         */
            __resizeWidth: function(targetRect) {
                if (!this.__target) {
                    return;
                }
                var $ele = $(this.__element), w = $ele.outerWidth(), h = $ele.outerHeight(), minWidth = targetRect.width - w - h;
                this.__element.style.minWidth = minWidth + "px";
            },
            /**
         * 调整panel高度，使其不超过边界范围，如果已设置高度， 则不进行调整
         * @private
         */
            __resizeHeight: function() {
                var boundRect = null, panelRect = null, diff = 0;
                panelRect = Utils.getRect(this.__element);
                panelRect.height = this.__element.scrollHeight;
                panelRect.bottom = panelRect.top + panelRect.height;
                boundRect = this.__getBoundRect();
                diff = panelRect.bottom - boundRect.bottom;
                if (diff > 0) {
                    this.__height_resized = true;
                    diff = panelRect.height - diff - this.__options.diff;
                    $(this.__element).css("height", diff + "px");
                } else if (this.__height_resized) {
                    this.__element.style.height = null;
                }
            },
            __getLocation: function() {
                var targetRect = Utils.getBound(this.__target);
                switch (this.__layout) {
                  case LAYOUT.CENTER:
                  case LAYOUT.MIDDLE:
                    return this.__getCenterLayout(targetRect);

                  case LAYOUT.LEFT:
                  case LAYOUT.RIGHT:
                  case LAYOUT.BOTTOM:
                  case LAYOUT.TOP:
                    return this.__getOuterLayout(targetRect);

                  default:
                    return this.__getInnerLayout(targetRect);
                }
                return location;
            },
            /**
         * 居中定位的位置属性
         * @private
         */
            __getCenterLayout: function(targetRect) {
                var location = {
                    top: 0,
                    left: 0
                }, panelRect = Utils.getRect(this.__element), diff = 0;
                diff = targetRect.height - panelRect.height;
                if (diff > 0) {
                    location.top = targetRect.top + diff / 2;
                }
                diff = targetRect.width - panelRect.width;
                if (diff > 0) {
                    location.left = targetRect.left + diff / 2;
                }
                return location;
            },
            /**
         * 获取外部布局定位属性
         * @returns {{top: number, left: number}}
         * @private
         */
            __getOuterLayout: function(targetRect) {
                var location = {
                    top: 0,
                    left: 0
                }, panelRect = Utils.getRect(this.__element);
                switch (this.__layout) {
                  case LAYOUT.TOP:
                    location.left = targetRect.left;
                    location.top = targetRect.top - panelRect.height;
                    break;

                  case LAYOUT.LEFT:
                    location.top = targetRect.top;
                    location.left = targetRect.left - panelRect.width;
                    break;

                  case LAYOUT.RIGHT:
                    location.top = targetRect.top;
                    location.left = targetRect.right;
                    break;

                  case LAYOUT.BOTTOM:
                  /* falls through */
                    default:
                    location.left = targetRect.left;
                    location.top = targetRect.bottom;
                    break;
                }
                return location;
            },
            /**
         * 获取内部布局定位属性,并且，内部布局还拥有根据水平空间的大小，自动进行更新定位的功能
         * @private
         */
            __getInnerLayout: function(targetRect) {
                var location = {
                    top: 0,
                    left: 0
                }, rect = targetRect, panelRect = Utils.getRect(this.__element);
                switch (this.__layout) {
                  case LAYOUT.LEFT_TOP:
                    location.top = rect.top;
                    location.left = rect.left;
                    break;

                  case LAYOUT.RIGHT_TOP:
                    location.top = rect.top;
                    location.left = rect.left + rect.width - panelRect.width;
                    break;

                  case LAYOUT.LEFT_BOTTOM:
                    location.top = rect.top + rect.height - panelRect.height;
                    location.left = rect.left;
                    break;

                  case LAYOUT.RIGHT_BOTTOM:
                    location.top = rect.top + rect.height - panelRect.height;
                    location.left = rect.left + rect.width - panelRect.width;
                    break;
                }
                return this.__correctionLocation(location);
            },
            __getBoundRect: function() {
                var width = -1, height = -1, view = null;
                if (this.__options.bound.tagName.toLowerCase() === "body") {
                    view = Utils.getView(this.__options.bound);
                    width = $(view).width();
                    height = $(view).height();
                    return {
                        top: 0,
                        left: 0,
                        right: width,
                        bottom: height,
                        width: width,
                        height: height
                    };
                } else {
                    return Utils.getRect(this.__options.bound);
                }
            },
            // 如果发生“溢出”，则修正定位
            __correctionLocation: function(location) {
                var panelRect = Utils.getRect(this.__element), targetRect = Utils.getRect(this.__target), boundRect = this.__getBoundRect();
                switch (this.__layout) {
                  case LAYOUT.LEFT_TOP:
                  case LAYOUT.LEFT_BOTTOM:
                    if (location.left + panelRect.width > boundRect.right) {
                        location.left += targetRect.width - panelRect.width;
                    }
                    break;

                  case LAYOUT.RIGHT_TOP:
                  case LAYOUT.RIGHT_BOTTOM:
                    if (location.left < boundRect.left) {
                        location.left = targetRect.left;
                    }
                    break;
                }
                return location;
            }
        });
    }
};

//src/widget/select-menu.js
/**
 * SelectMenu构件
 * 提供从下拉菜单中选中某一项的功能构件
 */
_p[55] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12), Panel = _p.r(51), PPanel = _p.r(54), Button = _p.r(37), Creator = _p.r(0), Mask = _p.r(49);
        return _p.r(13).createClass("SelectMenu", {
            base: Panel,
            constructor: function(options) {
                var defaultOptions = {
                    // bed 是Panel的实例
                    bed: {
                        className: "fui-select-menu-bed"
                    },
                    button: {
                        className: "fui-select-menu-btn"
                    },
                    events: [ "btnclick" ],
                    selected: -1
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            show: function() {
                this.__widgetMenu.show();
                this.__mask.show();
            },
            hide: function() {
                this.__widgetMenu.hide();
                this.__mask.hide();
            },
            getValue: function() {
                var selectedWidet = this.__widgets[this.__selected];
                return selectedWidet ? selectedWidet.getValue() : null;
            },
            getSelected: function() {
                return this.__widgets[this.__selected];
            },
            select: function(index) {
                var widget = this.__widgets[index], className = "fui-select-menu-selected", oldIndex = this.__selected, oldSelected = this.__widgets[this.__selected], bedElement = this.__bed.getElement();
                if (!widget) {
                    return this;
                }
                if (oldSelected) {
                    oldSelected.removeClass(className);
                }
                bedElement.innerHTML = "";
                bedElement.appendChild(widget.cloneElement());
                widget.addClass(className);
                this.__selected = index;
                this.trigger("select", {
                    index: index,
                    widget: widget
                });
                if (this.__selected !== oldIndex) {
                    this.trigger("change", {
                        from: {
                            index: oldIndex,
                            widget: oldSelected
                        },
                        to: {
                            index: index,
                            widget: widget
                        }
                    });
                }
                return this;
            },
            selectByWidget: function(widget) {
                return this.select(this.indexOf(widget));
            },
            selectByValue: function(value) {
                var index = -1;
                $.each(this.__widgets, function(i, widget) {
                    if (widget.getValue() === value) {
                        index = i;
                        return false;
                    }
                });
                return this.select(index);
            },
            __render: function() {
                this.__bed = new Panel(this.__options.bed);
                this.__dropBtn = new Button(this.__options.button);
                this.__widgetMenu = new PPanel({
                    className: "fui-select-menu-container",
                    layout: CONF.layout.LEFT_TOP,
                    column: this.__column
                });
                this.__mask = new Mask();
                var widgets = this.__initWidgets();
                this.callBase();
                $(this.__element).addClass(CONF.classPrefix + "select-menu");
                this.appendWidgets([ this.__bed, this.__dropBtn, this.__mask, this.__widgetMenu ]);
                this.__widgets = [];
                this.__oldContentElement = this.__contentElement;
                this.__contentElement = this.__widgetMenu;
                this.appendWidgets(widgets);
                this.__widgetMenu.positionTo(this.getElement());
                if (!$.isNumeric(this.__options.selected)) {
                    this.__bed.appendWidget(Creator.parse(this.__options.selected));
                } else if (this.__options.selected != -1) {
                    this.select(this.__options.selected);
                }
            },
            __initWidgets: function() {
                var widgets = [];
                if (!this.__options.widgets) {
                    return;
                }
                $.each(this.__options.widgets, function(index, widget) {
                    widgets.push(Creator.parse(widget));
                });
                return widgets;
            },
            __initEvent: function() {
                this.callBase();
                var _self = this;
                this.__dropBtn.on("btnclick", function() {
                    _self.show();
                });
                this.__mask.on("click", function() {
                    _self.hide();
                });
                this.__widgetMenu.on(this.__options.events.join(" "), function(e) {
                    var target = e.target;
                    if (target === _self.__oldContentElement || target === _self.getElement) {
                        return;
                    }
                    e.stopPropagation();
                    _self.selectByWidget(e.widget);
                    _self.hide();
                    return false;
                });
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "SelectMenu";
                // 被选中的元素
                this.__bed = null;
                // 下拉按钮
                this.__dropBtn = null;
                this.__widgetMenu = null;
                this.__mask = null;
                this.__widgets = [];
                this.__selected = -1;
                this.__oldContentElement = null;
                this.__column = this.__options.column;
                delete this.__options.column;
            }
        });
    }
};

//src/widget/separator.js
/**
 * Separator(分隔符) Widget
 */
_p[56] = {
    value: function(require) {
        var Utils = _p.r(13), separatorTpl = _p.r(31), $ = _p.r(4);
        return Utils.createClass("Separator", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    width: 1,
                    height: "100%",
                    bgcolor: "#e1e1e1"
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Separator";
                this.__tpl = separatorTpl;
            }
        });
    }
};

//src/widget/spin-button.js
/**
 * SpinButton对象
 * 数值按钮构件
 */
_p[57] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12), tpl = _p.r(32), Button = _p.r(37), Input = _p.r(45), Panel = _p.r(51);
        return _p.r(13).createClass("SpinButton", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    suffix: null,
                    selected: -1,
                    items: []
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            getValue: function() {
                return this.__options.items[this.__currentSelected] || null;
            },
            // Overload
            setValue: function(value) {},
            select: function(index) {
                this.__update(index);
            },
            // 根据值进行选择
            selectByValue: function(value) {
                value = value + "";
                this.__update($.inArray(value, this.__options.items));
            },
            __render: function() {
                this.callBase();
                this.__buttons = [ new Button({
                    className: CONF.classPrefix + "spin-up-btn"
                }), new Button({
                    className: CONF.classPrefix + "spin-down-btn"
                }) ];
                this.__inputWidget = new Input();
                this.__panelWidget = new Panel({
                    column: true
                });
                this.__inputWidget.appendTo(this.__element);
                this.__panelWidget.appendWidget(this.__buttons[0]);
                this.__panelWidget.appendWidget(this.__buttons[1]);
                this.__panelWidget.appendTo(this.__element);
                this.__initSelected(this.__options.selected);
            },
            __initEvent: function() {
                var _self = this;
                this.callBase();
                this.__buttons[0].on("btnclick", function() {
                    _self.__update(_self.__currentSelected - 1);
                });
                this.__buttons[1].on("btnclick", function() {
                    _self.__update(_self.__currentSelected + 1);
                });
            },
            __initSelected: function(index) {
                this.__update(index, false);
            },
            __update: function(index, isTrigger) {
                var oldIndex = -1, value = null, toValue = null;
                if (index < 0 || index >= this.__options.items.length) {
                    return;
                }
                oldIndex = this.__currentSelected;
                this.__currentSelected = index;
                toValue = this.__options.items[this.__currentSelected];
                value = toValue + " " + (this.__options.suffix || "");
                this.__inputWidget.setValue(value);
                if (isTrigger !== false) {
                    this.trigger("change", {
                        from: this.__options.items[oldIndex] || null,
                        to: toValue
                    });
                }
            },
            __initOptions: function() {
                var items = this.__options.items;
                this.callBase();
                this.widgetName = "SpinButton";
                this.__tpl = tpl;
                this.__buttons = [];
                this.__panelWidget = null;
                this.__inputWidget = null;
                this.__currentSelected = -1;
                $.each(items, function(index, val) {
                    items[index] = val + "";
                });
            }
        });
    }
};

//src/widget/tabs.js
/**
 * Tabs Widget
 */
_p[58] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12), tpl = _p.r(33), Button = _p.r(37), Panel = _p.r(51);
        return _p.r(13).createClass("Tabs", {
            base: _p.r(60),
            constructor: function(options) {
                var defaultOptions = {
                    selected: 0,
                    buttons: [],
                    panels: []
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            getButtons: function() {
                return this.__btns;
            },
            getButton: function(index) {
                return this.getButtons()[index] || null;
            },
            getButtonByValue: function(value) {
                var button = null;
                $.each(this.__btns, function(i, btn) {
                    if (btn.getValue() === value) {
                        button = btn;
                        return false;
                    }
                });
                return button;
            },
            getPanels: function() {
                return this.__panels;
            },
            getPanel: function(index) {
                return this.getPanels()[index] || null;
            },
            getPanelByValue: function(value) {
                var panel = null;
                $.each(this.__panels, function(i, pan) {
                    if (pan.getValue() === value) {
                        panel = pan;
                        return false;
                    }
                });
                return panel;
            },
            getSelectedIndex: function() {
                return this.__selected;
            },
            getSelected: function() {
                var index = this.getSelectedIndex();
                return {
                    button: this.getButton(index),
                    panel: this.getPanel(index)
                };
            },
            appendTab: function(tabOpt) {
                tabOpt.panels = tabOpt.panels || [];
                return this.__renderByOptions(tabOpt);
            },
            removeTab: function(index) {
                if (index < 0) {
                    return null;
                }
                var btn = this.__btns.splice(index, 1), panel = this.__panels.splice(index, 1);
                if (!btn.length) {
                    return null;
                }
                btn = btn[0];
                panel = panel[0];
                btn.remove();
                panel.remove();
                return {
                    button: btn,
                    panel: panel
                };
            },
            /**
         * 选择接口
         * @param index 需要选中的tab页索引
         */
            select: function(index) {
                var toInfo = null;
                if (!this.__selectItem(index)) {
                    return this;
                }
                toInfo = this.__getInfo(index);
                this.trigger("tabsselect", toInfo);
                if (this.__prevSelected !== this.__selected) {
                    this.trigger("tabschange", {
                        from: this.__getInfo(this.__prevSelected),
                        to: toInfo
                    });
                }
                return this;
            },
            getIndexByButton: function(btn) {
                return $.inArray(btn, this.__btns);
            },
            /**
         * 把所有button追加到其他容器中
         */
            appendButtonTo: function(container) {
                $.each(this.__btns, function(index, btn) {
                    btn.appendTo(container);
                });
            },
            appendPanelTo: function(container) {
                $.each(this.__panels, function(index, panel) {
                    panel.appendTo(container);
                });
            },
            __render: function() {
                this.callBase();
                this.__btnWrap = $(".fui-tabs-button-wrap", this.__element)[0];
                this.__panelWrap = $(".fui-tabs-panel-wrap", this.__element)[0];
                this.__renderByOptions(this.__options);
                this.__selectItem(this.__options.selected);
            },
            __renderByOptions: function(options) {
                var _self = this, mapping = [], btns = this.__btns, panels = this.__panels, btnWrap = this.__btnWrap, panelWrap = this.__panelWrap;
                $.each(options.buttons, function(index, opt) {
                    var btn = null, panel = null;
                    if (typeof opt !== "object") {
                        opt = {
                            label: opt
                        };
                    }
                    btn = new Button(opt);
                    btn.on("click", function() {
                        _self.select(_self.getIndexByButton(this));
                    });
                    opt = options.panels[index] || {};
                    opt.hide = true;
                    panel = new Panel(opt);
                    btns.push(btn);
                    panels.push(panel);
                    mapping.push({
                        button: btn,
                        panel: panel
                    });
                    btn.appendTo(btnWrap);
                    panel.appendTo(panelWrap);
                });
                return mapping;
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "Tabs";
                this.__tpl = tpl;
                this.__btns = [];
                this.__panels = [];
                this.__prevSelected = -1;
                this.__selected = -1;
                this.__btnWrap = null;
                this.__panelWrap = null;
                // panels不设置的情况下， 将根据button创建
                if (this.__options.panels === null) {
                    this.__options.panels = [];
                    this.__options.panels.length = this.__options.buttons.length;
                }
            },
            __selectItem: function(index) {
                var btn = this.getButton(index), prevBtn = this.getButton(this.__selected), className = CONF.classPrefix + "selected";
                if (!btn) {
                    return false;
                }
                if (prevBtn) {
                    prevBtn.removeClass(className);
                    this.getPanel(this.__selected).hide();
                }
                btn.addClass(className);
                this.getPanel(index).show();
                this.__prevSelected = this.__selected;
                this.__selected = index;
                return true;
            },
            // 根据给定的tab索引获取先关的信息， 这些信息将用于事件携带的参数
            __getInfo: function(index) {
                return {
                    index: index,
                    button: this.getButton(index),
                    panel: this.getPanel(index)
                };
            }
        });
    }
};

//src/widget/toggle-button.js
/**
 * ToggleButton对象
 * 可切换按钮构件
 */
_p[59] = {
    value: function(require) {
        var $ = _p.r(4), CONF = _p.r(12);
        return _p.r(13).createClass("ToggleButton", {
            base: _p.r(37),
            constructor: function(options) {
                var defaultOptions = {
                    // 按钮初始时是否按下
                    pressed: false
                };
                options = $.extend({}, defaultOptions, options);
                this.callBase(options);
            },
            /**
         * 当前按钮是否已按下
         */
            isPressed: function() {
                return this.__state;
            },
            /**
         * 按下按钮
         */
            press: function() {
                var className = CONF.classPrefix + "button-pressed";
                $(this.__element).addClass(className);
                this.__updateState(true);
            },
            /**
         * 弹起按钮
         */
            bounce: function() {
                var className = CONF.classPrefix + "button-pressed";
                $(this.__element).removeClass(className);
                this.__updateState(false);
            },
            toggle: function() {
                if (this.__state) {
                    this.bounce();
                } else {
                    this.press();
                }
            },
            __initOptions: function() {
                this.callBase();
                this.widgetName = "ToggleButton";
                // 按钮当前状态
                this.__state = false;
            },
            __render: function() {
                this.callBase();
                $(this.__element).addClass(CONF.classPrefix + "toggle-button");
                this.__initButtonState();
                return this;
            },
            __initButtonState: function() {
                if (!this.__options.pressed) {
                    return;
                }
                // 不直接调用press方法， 防止初始化时事件的触发
                $(this.__element).addClass(CONF.classPrefix + "button-pressed");
                this.__state = true;
            },
            /**
         * 初始化事件监听, 控制状态的切换
         * @private
         */
            __initEvent: function() {
                this.callBase();
                this.on("click", function() {
                    this.toggle();
                });
            },
            __updateState: function(state) {
                state = !!state;
                this.__state = state;
                this.trigger("change", state, !state);
            }
        });
    }
};

//src/widget/widget.js
/*jshint camelcase:false*/
/**
 * widget对象
 * 所有的UI组件都是widget对象
 */
_p[60] = {
    value: function(require) {
        var prefix = "_fui_", uid = 0, CONF = _p.r(12), FUI_NS = _p.r(11), $ = _p.r(4), Utils = _p.r(13);
        var Widget = _p.r(13).createClass("Widget", {
            constructor: function(options) {
                var defaultOptions = {
                    id: null,
                    className: "",
                    disabled: false,
                    preventDefault: false,
                    text: "",
                    value: null,
                    hide: false,
                    width: null,
                    height: null
                };
                this.__widgetType = "widget";
                this.__tpl = "";
                this.__compiledTpl = "";
                this.__options = {};
                this.__element = null;
                // 禁止获取焦点
                this.__allow_focus = !!CONF.allowFocus;
                this.widgetName = "Widget";
                this.__extendOptions(defaultOptions, options);
                this.__initOptions();
                this.__render();
                this.__initEvent();
                this.__initWidgets && this.__initWidgets();
            },
            getId: function() {
                return this.id;
            },
            getValue: function() {
                return this.__options.value;
            },
            getOptions: function() {
                return this.__options;
            },
            setValue: function(value) {
                this.__options.value = value;
                return this;
            },
            show: function() {
                this.__show();
                return this;
            },
            hide: function() {
                this.__hide();
                return this;
            },
            addClass: function(className) {
                $(this.__element).addClass(className);
                return this;
            },
            removeClass: function(className) {
                $(this.__element).removeClass(className);
                return this;
            },
            setStyle: function() {
                $.fn.css.apply($(this.__element), arguments);
                return this;
            },
            getStyle: function() {
                return $.fn.css.apply($(this.__element), arguments);
            },
            /**
         * 当前构件是否是处于禁用状态
         * @returns {boolean|disabled|jsl.$.disabled|id.disabled}
         */
            isDisabled: function() {
                return this.__options.disabled;
            },
            /**
         * 启用当前构件
         * @returns {Widget}
         */
            enable: function() {
                this.__options.disabled = false;
                $(this.__element).removeClass(CONF.classPrefix + "disabled");
                return this;
            },
            /**
         * 禁用当前构件
         * @returns {Widget}
         */
            disable: function() {
                this.__options.disabled = true;
                $(this.__element).addClass(CONF.classPrefix + "disabled");
                return this;
            },
            cloneElement: function() {
                return this.__element.cloneNode(true);
            },
            /**
         * 获取
         * @returns {null}
         */
            getElement: function() {
                return this.__element;
            },
            appendTo: function(container) {
                if (Utils.isElement(container)) {
                    container.appendChild(this.__element);
                } else if (container instanceof Widget) {
                    container.__appendChild(this);
                } else {
                    throw new Error("TypeError: Widget.appendTo()");
                }
                return this;
            },
            remove: function() {
                var parent = this.__element.parentNode;
                if (parent) {
                    parent.removeChild(this.__element);
                }
                return this;
            },
            off: function(type, cb) {
                $(this.__element).off(cb && cb.__fui_listener);
                return this;
            },
            on: function(type, cb) {
                if (!this.__options.preventDefault) {
                    this.__on(type, cb);
                }
                return this;
            },
            __initOptions: function() {},
            /**
         * 根据模板渲染构件, 如果该构件已经渲染过, 则不会进行二次渲染
         * @returns {Widget}
         */
            __render: function() {
                var $ele = null, tpl = this.__tpl, opts = this.__options, className = null;
                this.id = this.__id();
                // 向NS注册自己
                FUI_NS.__registerInstance(this);
                this.__compiledTpl = Utils.Tpl.compile(tpl, opts);
                this.__element = $(this.__compiledTpl)[0];
                this.__element.setAttribute("id", this.id);
                $ele = $(this.__element);
                if (opts.disabled) {
                    $ele.addClass(CONF.classPrefix + "disabled");
                }
                $ele.addClass(CONF.classPrefix + "widget");
                // add custom class-name
                className = opts.className;
                if (className.length > 0) {
                    if ($.isArray(className)) {
                        $ele.addClass(className.join(" "));
                    } else {
                        $ele.addClass(className);
                    }
                }
                this.__initBasicEnv();
                if (opts.hide) {
                    this.__hide();
                }
                if (opts.style) {
                    this.setStyle(opts.style);
                }
                return this;
            },
            /**
         * 该方法将被appendTo调用， 用于根据各组件自身的规则插入节点,  子类可根据需要覆盖该方法
         * @param childWidget 将被追加的子构件对象
         */
            __appendChild: function(childWidget) {
                return this.__element.appendChild(childWidget.getElement());
            },
            __initEvent: function() {
                this.on("mousedown", function(e) {
                    var tagName = e.target.tagName.toLowerCase();
                    if (!CONF.control[tagName] && !this.__allowFocus()) {
                        e.preventDefault();
                    } else {
                        e.stopPropagation();
                    }
                });
            },
            __on: function(type, cb) {
                var _self = this;
                cb.__fui_listener = function(e, widget) {
                    var params = [];
                    for (var i = 0, len = arguments.length; i < len; i++) {
                        if (i !== 1) {
                            params.push(arguments[i]);
                        }
                    }
                    e.widget = widget;
                    if (!_self.isDisabled()) {
                        return cb.apply(_self, params);
                    }
                };
                $(this.__element).on(type, cb.__fui_listener);
                return this;
            },
            trigger: function(type, params) {
                if (!this.__options.preventDefault) {
                    this.__trigger.apply(this, arguments);
                }
                return this;
            },
            __allowShowTitle: function() {
                return true;
            },
            __allowFocus: function() {
                return !!this.__allow_focus;
            },
            __trigger: function(type, params) {
                var args = [].slice.call(arguments, 1);
                $(this.__element).trigger(type, [ this ].concat(args));
                return this;
            },
            __triggerHandler: function(type, params) {
                var args = [ this ].concat([].slice.call(arguments, 1));
                return $(this.__element).triggerHandler(type, args);
            },
            /**
         * 同__trigger，都触发某事件，但是该方法触发的事件会主动触发before和after，
         * 同时如果before事件返回false，则后续handler都不会执行，且后续事件也不会再触发。
         * @param type 事件类型
         * @param handler 该事件所需要执行的函数句柄， 且该函数的返回值将作为该事件的参数发送给事件监听器
         * */
            __fire: function(type, handler) {
                var result = {
                    cancel: false
                };
                if (/^(before|after)/.test(type)) {
                    return this;
                }
                this.__trigger("before" + type, result);
                if (result.cancel === true) {
                    return this;
                }
                result = handler.call(this, type);
                this.__trigger(type);
                this.__trigger("after" + type, result);
                return this;
            },
            __extendOptions: function() {
                var args = [ {}, this.__options ], params = [ true ];
                args = args.concat([].slice.call(arguments, 0));
                for (var i = 0, len = args.length; i < len; i++) {
                    if (typeof args[i] !== "string") {
                        params.push(args[i]);
                    }
                }
                this.__options = $.extend.apply($, params);
            },
            __hide: function() {
                $(this.__element).addClass(CONF.classPrefix + "hide");
            },
            __show: function() {
                $(this.__element).removeClass(CONF.classPrefix + "hide");
            },
            __initBasicEnv: function() {
                if (this.__options.text && this.__allowShowTitle()) {
                    this.__element.setAttribute("title", this.__options.text);
                }
                if (this.__options.width) {
                    this.__element.style.width = this.__options.width + "px";
                }
                if (this.__options.height) {
                    this.__element.style.height = this.__options.height + "px";
                }
                if (this.widgetName) {
                    this.__element.setAttribute("rule", this.widgetName);
                }
            },
            __id: function() {
                return this.__options.id || generatorId();
            }
        });
        // 为widget生成唯一id
        function generatorId() {
            return prefix + ++uid;
        }
        return Widget;
    }
};

//dev-lib/exports.js
/**
 * 模块暴露
 */
_p[61] = {
    value: function(require) {
        _p.r(1);
        _p.r(2);
    }
};

var moduleMapping = {
    "fui.export": 61
};

function use(name) {
    _p.r([ moduleMapping[name] ]);
}
// 编译打包后的启动脚本
use( 'fui.export' );})();
/*!
 * ====================================================
 * kity - v2.0.0 - 2014-11-18
 * https://github.com/fex-team/kity
 * GitHub: https://github.com/fex-team/kity.git 
 * Copyright (c) 2014 Baidu FEX; Licensed BSD
 * ====================================================
 */

(function () {
var _p = {
    r: function(index) {
        if (_p[index].inited) {
            return _p[index].value;
        }
        if (typeof _p[index].value === "function") {
            var module = {
                exports: {}
            }, returnValue = _p[index].value(null, module.exports, module);
            _p[index].inited = true;
            _p[index].value = returnValue;
            if (returnValue !== undefined) {
                return returnValue;
            } else {
                for (var key in module.exports) {
                    if (module.exports.hasOwnProperty(key)) {
                        _p[index].inited = true;
                        _p[index].value = module.exports;
                        return module.exports;
                    }
                }
            }
        } else {
            _p[index].inited = true;
            return _p[index].value;
        }
    }
};

//src/animate/animator.js
/**
 * @fileOverview
 *
 * 提供基本的动画支持
 */
_p[0] = {
    value: function(require) {
        function parseTime(str) {
            var value = parseFloat(str, 10);
            if (/ms/.test(str)) {
                return value;
            }
            if (/s/.test(str)) {
                return value * 1e3;
            }
            if (/min/.test(str)) {
                return value * 60 * 1e3;
            }
            return value;
        }
        var Timeline = _p.r(8);
        var easingTable = _p.r(1);
        /**
     * @class kity.Animator
     * @catalog animate
     * @description 表示一个动画启动器，可以作用于不同的对象进行动画
     */
        var Animator = _p.r(11).createClass("Animator", {
            /**
         * @constructor
         * @for kity.Animator
         * @catalog animate
         *
         * @grammar new kity.Animator(beginValue, finishValue, setter)
         * @grammar new kity.Animator(option)
         *
         * @param  {any}      beginValue|opt.beginValue
         *     动画的起始值，允许的类型有数字、数组、字面量、kity.Point、kity.Vector、kity.Box、kity.Matrix
         *
         * @param  {any}      finishValue|opt.beginValue
         *     动画的结束值，类型应于起始值相同
         *
         * @param  {Function} setter|opt.setter
         *     值的使用函数，接受三个参数: function(target, value, timeline)
         *         target   {object}        动画的目标
         *         value    {any}           动画的当前值
         *         timeline {kity.Timeline} 动画当前的时间线对象
         */
            constructor: function(beginValue, finishValue, setter) {
                if (arguments.length == 1) {
                    var opt = arguments[0];
                    this.beginValue = opt.beginValue;
                    this.finishValue = opt.finishValue;
                    this.setter = opt.setter;
                } else {
                    this.beginValue = beginValue;
                    this.finishValue = finishValue;
                    this.setter = setter;
                }
            },
            /**
         * @method start()
         * @for kity.Animator
         * @description 使用当前的动画器启动在指定目标上启动动画
         *
         * @grammar start(target, duration, easing, delay, callback) => {kity.Timeline}
         * @grammar start(target, option) => {kity.Timeline}
         *
         * @param  {object} target
         *     启动动画的目标
         *
         * @param  {Number|String} duration|option.duration
         *     [Optional] 动画的持续时间，如 300、"300ms"、"1.5min"
         *
         * @param  {String|Function} easing|option.easing
         *     [Optional] 动画使用的缓动函数，如 "ease"、"linear"、"swing"
         *
         * @param  {Number|String} delay|option.delay
         *     [Optional] 动画的播放延迟时间
         *
         * @param  {Function} callback|option.callback
         *     [Optional] 动画结束后的回调函数
         *
         * @example
         *
         * ```js
         * var turnRed = new kity.Animator(
         *     new kity.Color('yellow'),
         *     new kity.Color('red'),
         *     function(target, value) {
         *         target.fill(value);
         *     });
         *
         * turnRed.start(rect, 300, 'ease', function() {
         *     console.log('I am red!');
         * });
         * ```
         */
            start: function(target, duration, easing, delay, callback) {
                if (arguments.length === 2 && typeof duration == "object") {
                    easing = duration.easing;
                    delay = duration.delay;
                    callback = duration.callback;
                    duration = duration.duration;
                }
                if (arguments.length === 4 && typeof delay == "function") {
                    callback = delay;
                    delay = 0;
                }
                var timeline = this.create(target, duration, easing, callback);
                delay = parseTime(delay);
                if (delay > 0) {
                    setTimeout(function() {
                        timeline.play();
                    }, delay);
                } else {
                    timeline.play();
                }
                return timeline;
            },
            /**
         * @method create()
         * @for kity.Animator
         * @description 使用当前的动画器为指定目标创建时间线
         *
         * @grammar create(target, duration, easing, callback) => {kity.Timeline}
         *
         * @param  {object}            target   要创建的时间线的目标
         * @param  {Number|String}     duration 要创建的时间线的长度，如 300、"5s"、"0.5min"
         * @param  {String|Function}   easing   要创建的时间线的缓动函数，如 'ease'、'linear'、'swing'
         * @param  {Function}          callback 时间线播放结束之后的回调函数
         *
         * @example
         *
         * ```js
         * var expand = new kity.Animator({
         *     beginValue: function(target) {
         *         return target.getBox();
         *     },
         *     finishValue: function(target) {
         *         return target.getBox().expand(100, 100, 100, 100);
         *     },
         *     setter: function(target, value) {
         *         target.setBox(value)
         *     }
         * });
         *
         * var timeline = expand.create(rect, 300);
         * timeline.repeat(3).play();
         * ```
         */
            create: function(target, duration, easing, callback) {
                var timeline;
                duration = duration && parseTime(duration) || Animator.DEFAULT_DURATION;
                easing = easing || Animator.DEFAULT_EASING;
                if (typeof easing == "string") {
                    easing = easingTable[easing];
                }
                timeline = new Timeline(this, target, duration, easing);
                if (typeof callback == "function") {
                    timeline.on("finish", callback);
                }
                return timeline;
            },
            /**
         * @method reverse()
         * @for kity.Animator
         * @grammar reverse() => {kity.Animator}
         * @description 创建一个与当前动画器相反的动画器
         *
         * @example
         *
         * ```js
         * var turnYellow = turnRed.reverse();
         * ```
         */
            reverse: function() {
                return new Animator(this.finishValue, this.beginValue, this.setter);
            }
        });
        Animator.DEFAULT_DURATION = 300;
        Animator.DEFAULT_EASING = "linear";
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            /**
         * @method animate()
         * @for kity.Shape
         * @description 在图形上播放使用指定的动画器播放动画，如果图形当前有动画正在播放，则会加入播放队列
         *
         * @grammar animate(animator, duration, easing, delay, callback)
         *
         * @param  {object}            animator 播放动画使用的动画器
         * @param  {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param  {Number|String}     delay    动画播放前的延时
         * @param  {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param  {Function}          callback 播放结束之后的回调函数
         *
         * @example
         *
         * ```js
         * rect.animate(turnRed, 300); // turnRect 是一个动画器
         * rect.animate(expand, 500);  // turnRect 播放结束后播放 expand
         * ```
         */
            animate: function(animator, duration, easing, delay, callback) {
                var queue = this._KityAnimateQueue = this._KityAnimateQueue || [];
                var timeline = animator.create(this, duration, easing, callback);
                function dequeue() {
                    queue.shift();
                    if (queue.length) {
                        setTimeout(queue[0].t.play.bind(queue[0].t), queue[0].d);
                    }
                }
                timeline.on("finish", dequeue);
                queue.push({
                    t: timeline,
                    d: delay
                });
                if (queue.length == 1) {
                    setTimeout(timeline.play.bind(timeline), delay);
                }
                return this;
            },
            /**
         * @method timeline()
         * @for kity.Shape
         * @description 获得当前正在播放的动画的时间线
         *
         * @grammar timeline() => {kity.Timeline}
         *
         * @example
         *
         * ```js
         * rect.timeline().repeat(2);
         * ```
         */
            timeline: function() {
                return this._KityAnimateQueue[0].t;
            },
            /**
         * @method stop()
         * @for kity.Shape
         * @description 停止当前正在播放的动画
         *
         * @grammar stop() => {this}
         *
         * @example
         *
         * ```js
         * rect.stop(); // 停止 rect 上的动画
         * ```
         */
            stop: function() {
                var queue = this._KityAnimateQueue;
                if (queue) {
                    while (queue.length) {
                        queue.shift().t.stop();
                    }
                }
                return this;
            }
        });
        return Animator;
    }
};

//src/animate/easing.js
/**
 * Kity Animate Easing modified from jQuery Easing
 * Author: techird
 * Changes:
 *     1. make easing functions standalone
 *     2. remove the 'x' parameter
 */
/* ============================================================
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ======================================================== */
_p[1] = {
    value: function(require, exports, module) {
        var easings = {
            // t: current_time, b: begin_value, c: change_value, d: duration
            linear: function(t, b, c, d) {
                return c * (t / d) + b;
            },
            swing: function(t, b, c, d) {
                return easings.easeOutQuad(t, b, c, d);
            },
            ease: function(t, b, c, d) {
                return easings.easeInOutCubic(t, b, c, d);
            },
            easeInQuad: function(t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOutQuad: function(t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOutQuad: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t + b;
                return -c / 2 * (--t * (t - 2) - 1) + b;
            },
            easeInCubic: function(t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOutCubic: function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOutCubic: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            },
            easeInQuart: function(t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOutQuart: function(t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOutQuart: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            },
            easeInQuint: function(t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOutQuint: function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOutQuint: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            },
            easeInSine: function(t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOutSine: function(t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOutSine: function(t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            },
            easeInExpo: function(t, b, c, d) {
                return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOutExpo: function(t, b, c, d) {
                return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOutExpo: function(t, b, c, d) {
                if (t === 0) return b;
                if (t == d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function(t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOutCirc: function(t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOutCirc: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            },
            easeInElastic: function(t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t === 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOutElastic: function(t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t === 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else s = p / (2 * Math.PI) * Math.asin(c / a);
                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
            },
            easeInOutElastic: function(t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t === 0) return b;
                if ((t /= d / 2) == 2) return b + c;
                if (!p) p = d * (.3 * 1.5);
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            },
            easeInBack: function(t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOutBack: function(t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOutBack: function(t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
            },
            easeInBounce: function(t, b, c, d) {
                return c - easings.easeOutBounce(d - t, 0, c, d) + b;
            },
            easeOutBounce: function(t, b, c, d) {
                if ((t /= d) < 1 / 2.75) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < 2 / 2.75) {
                    return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
                } else if (t < 2.5 / 2.75) {
                    return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
                }
            },
            easeInOutBounce: function(t, b, c, d) {
                if (t < d / 2) return easings.easeInBounce(t * 2, 0, c, d) * .5 + b;
                return easings.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        };
        return easings;
    }
};

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
//src/animate/frame.js
/**
 * @fileOverview
 *
 * 提供动画帧的基本支持
 */
_p[2] = {
    value: function(require, exports) {
        // 原生动画帧方法 polyfill
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(fn) {
            return setTimeout(fn, 1e3 / 60);
        };
        var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;
        // 上一个请求的原生动画帧 id
        var frameRequestId;
        // 等待执行的帧动作的集合，这些帧的方法将在下个原生动画帧同步执行
        var pendingFrames = [];
        /**
     * 添加一个帧到等待集合中
     *
     * 如果添加的帧是序列的第一个，至少有一个帧需要被执行，则会请求一个原生动画帧来执行
     */
        function pushFrame(frame) {
            if (pendingFrames.push(frame) === 1) {
                frameRequestId = requestAnimationFrame(executePendingFrames);
            }
        }
        /**
     * 执行所有等待帧
     */
        function executePendingFrames() {
            var frames = pendingFrames;
            pendingFrames = [];
            while (frames.length) {
                executeFrame(frames.pop());
            }
            frameRequestId = 0;
        }
        /**
     * @method kity.requestFrame
     * @catalog animate
     * @grammar kity.requestFrame(action) => {frame}
     * @description 请求一个帧，执行指定的动作。动作回调提供一些有用的信息
     *
     * @param {Function} action
     *
     *     要执行的动作，该动作回调有一个参数 frame，其中：
     *
     *     frame.time {Number}
     *         动作执行时的时间戳（ms）
     *
     *     frame.index {Number}
     *         当前执行的帧的编号（首帧为 0）
     *
     *     frame.dur {Number}
     *         上一帧至当前帧经过的时间，单位 ms
     *
     *     frame.elapsed {Number}
     *         从首帧开始到当前帧经过的时间，单位 ms
     *
     *     frame.action {Number}
     *         指向当前的帧处理函数
     *
     *     frame.next()
     *         表示下一帧继续执行。如果不调用该方法，将不会执行下一帧。
     *
     * @example
     *
     * ```js
     * kity.requestFrame(function(frame) {
     *     console.log('平均帧率:' + frame.elapsed / (frame.index + 1));
     *
     *     // 更新或渲染动作
     *
     *     frame.next(); //继续执行下一帧
     * });
     * ```
     */
        function requestFrame(action) {
            var frame = initFrame(action);
            pushFrame(frame);
            return frame;
        }
        /**
     * @method kity.releaseFrame
     * @catalog animate
     * @grammar kity.releaseFrame(frame)
     * @description 释放一个已经请求过的帧，如果该帧在等待集合里，将移除，下个动画帧不会执行释放的帧
     *
     * @param {frame} frame 使用 kity.requestFrame() 返回的帧
     *
     * @example
     *
     * ```js
     * var frame = kity.requestFrame(function() {....});
     * kity.releaseFrame(frame);
     * ```
     */
        function releaseFrame(frame) {
            var index = pendingFrames.indexOf(frame);
            if (~index) {
                pendingFrames.splice(index, 1);
            }
            if (pendingFrames.length === 0) {
                cancelAnimationFrame(frameRequestId);
            }
        }
        /**
     * 初始化一个帧，主要用于后续计算
     */
        function initFrame(action) {
            var frame = {
                index: 0,
                time: +new Date(),
                elapsed: 0,
                action: action,
                next: function() {
                    pushFrame(frame);
                }
            };
            return frame;
        }
        /**
     * 执行一个帧动作
     */
        function executeFrame(frame) {
            // 当前帧时间错
            var time = +new Date();
            // 当上一帧到当前帧经过的时间
            var dur = time - frame.time;
            //
            // http://stackoverflow.com/questions/13133434/requestanimationframe-detect-stop
            // 浏览器最小化或切换标签，requestAnimationFrame 不会执行。
            // 检测时间超过 200 ms（频率小于 5Hz ） 判定为计时器暂停，重置为一帧长度
            //
            if (dur > 200) {
                dur = 1e3 / 60;
            }
            frame.dur = dur;
            frame.elapsed += dur;
            frame.time = time;
            frame.action.call(null, frame);
            frame.index++;
        }
        // 暴露
        exports.requestFrame = requestFrame;
        exports.releaseFrame = releaseFrame;
    }
};

//src/animate/motionanimator.js
/**
 * @fileOverview
 *
 * 路径动画器，可以让一个物体沿着某个轨迹运动
 */
_p[3] = {
    value: function(require) {
        var Animator = _p.r(0);
        var g = _p.r(35);
        var Path = _p.r(47);
        var Shape = _p.r(61);
        /**
     * @class kity.MotionAnimator
     * @catalog animate
     * @base kity.Animator
     * @description 路径动画器，可以让一个物体沿着某个轨迹运动
     *
     * @example
     *
     * ```js
     * var motionAnimator = new MotionAnimator('M0,0C100,0,100,0,100,100L200,200');
     * motionAnimator.start(rect, 3000);
     * ```
     */
        var MotionAnimator = _p.r(11).createClass("MotionAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.MotionAnimator
         * @grammar new kity.MotionAnimator(path, doRotate)
         * @param {kity.Path|String|PathSegment} path 运动的轨迹，或者是 kity.Path 对象
         * @param {boolean} doRotate 是否让运动的目标沿着路径的切线方向旋转
         */
            constructor: function(path, doRotate) {
                var me = this;
                this.callBase({
                    beginValue: 0,
                    finishValue: 1,
                    setter: function(target, value) {
                        var path = me.motionPath instanceof Path ? me.motionPath.getPathData() : me.motionPath;
                        var point = g.pointAtPath(path, value);
                        target.setTranslate(point.x, point.y);
                        if (this.doRotate) target.setRotate(point.tan.getAngle());
                    }
                });
                /**
             * @property doRotate
             * @for kity.MotionAnimator
             * @type {boolean}
             * @description 是否让运动的目标沿着路径的切线方向旋转
             *
             * @example
             *
             * ```js
             * motionAnimator.doRotate = true; // 目标沿着切线方向旋转
             * ```
             */
                this.doRotate = doRotate;
                /**
             * @property motionPath
             * @for kity.MotionAnimator
             * @type  {kity.Path|String|PathSegment}
             * @description 运动沿着的路径，可以在动画过程中更新
             */
                this.motionPath = path;
            }
        });
        _p.r(11).extendClass(Shape, {
            /**
         * @method motion()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形沿着指定的路径运动
         *
         * @grammar motion(path, duration, easing, delay, callback) => this
         *
         * @param {kity.Path|String|PathSegment} path 运动的轨迹，或者是 kity.Path 对象
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            motion: function(path, duration, easing, delay, callback) {
                return this.animate(new MotionAnimator(path), duration, easing, delay, callback);
            }
        });
        return MotionAnimator;
    }
};

//src/animate/opacityanimator.js
/**
 * @fileOverview
 *
 * 透明度动画器，让图形动画过度到指定的透明度。
 */
_p[4] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.OpacityAnimator
     * @catalog animate
     * @base kity.Animator
     * @description 透明度动画器，让图形动画过度到指定的透明度
     */
        var OpacityAnimator = _p.r(11).createClass("OpacityAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.OpacityAnimator
         * @grammar new kity.OpacityAnimator(opacity)
         *
         * @param  {Number} opacity 目标透明度，取值范围 0 - 1
         */
            constructor: function(opacity) {
                this.callBase({
                    beginValue: function(target) {
                        return target.getOpacity();
                    },
                    finishValue: opacity,
                    setter: function(target, value) {
                        target.setOpacity(value);
                    }
                });
            }
        });
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxOpacity()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形的透明度以动画的形式过渡到指定的值
         *
         * @grammar fxOpacity(opacity, duration, easing, delay, callback) => {this}
         *
         * @param {Number}            opacity  动画的目标透明度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxOpacity: function(opacity, duration, easing, delay, callback) {
                return this.animate(new OpacityAnimator(opacity), duration, easing, delay, callback);
            },
            /**
         * @method fadeTo()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形的透明度以动画的形式过渡到指定的值
         *
         * @grammar fadeTo(opacity, duration, easing, delay, callback) => {this}
         *
         * @param {Number}            opacity  动画的目标透明度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fadeTo: function() {
                return this.fxOpacity.apply(this, arguments);
            },
            /**
         * @method fadeIn()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形淡入
         *
         * @grammar fadeIn(duration, easing, delay, callback) => {this}
         *
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fadeIn: function() {
                return this.fxOpacity.apply(this, [ 1 ].concat([].slice.call(arguments)));
            },
            /**
         * @method fadeOut()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形淡出
         *
         * @grammar fadeIn(duration, easing, delay, callback) => {this}
         *
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fadeOut: function() {
                return this.fxOpacity.apply(this, [ 0 ].concat([].slice.call(arguments)));
            }
        });
        return OpacityAnimator;
    }
};

//src/animate/pathanimator.js
/**
 * @fileOverview
 *
 * 路径补间动画器，让图形从一个形状变为另一个形状
 */
_p[5] = {
    value: function(require) {
        var Animator = _p.r(0);
        var g = _p.r(35);
        /**
     * @catalog animate
     *
     * @class kity.PathAnimator
     * @base kity.Animator
     * @description 路径补间动画器，让图形从一个形状变为另一个形状
     *
     * @example
     *
     * ```js
     * var path = new kity.Path('M0,0L0,100');
     * var pa = new kity.PathAnimator('M0,0C100,0,100,0,100,100');
     * pa.start(path, 300);
     * ```
     */
        var PathAnimator = _p.r(11).createClass("OpacityAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.PathAnimator
         *
         * @grammar new kity.Path.Animator(path)
         *
         * @param  {String|PathSegment} path 目标形状的路径数据
         *
         */
            constructor: function(path) {
                this.callBase({
                    beginValue: function(target) {
                        this.beginPath = target.getPathData();
                        return 0;
                    },
                    finishValue: 1,
                    setter: function(target, value) {
                        target.setPathData(g.pathTween(this.beginPath, path, value));
                    }
                });
            }
        });
        var Path = _p.r(47);
        _p.r(11).extendClass(Path, {
            /**
         * @catalog animate
         *
         * @method fxPath()
         * @for kity.Shape
         * @description 以动画的形式把路径变换为新路径
         *
         * @grammar fxPath(path, duration, easing, delay, callback) => {this}
         *
         * @param {String|PathSegment}   path     要变换新路径
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxPath: function(path, duration, easing, delay, callback) {
                return this.animate(new PathAnimator(path), duration, easing, delay, callback);
            }
        });
        return PathAnimator;
    }
};

//src/animate/rotateanimator.js
/**
 * @fileOverview
 *
 * 提供支持目标旋转的动画器
 */
_p[6] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.RotateAnimator
     * @base Animator
     * @description 提供支持目标旋转的动画器
     */
        var RotateAnimator = _p.r(11).createClass("RotateAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.RotateAnimator
         *
         * @grammar new kity.RotateAnimator(deg, ax, ay)
         *
         * @param  {Number} deg 要旋转的角度
         */
            constructor: function(deg) {
                this.callBase({
                    beginValue: 0,
                    finishValue: deg,
                    setter: function(target, value, timeline) {
                        var delta = timeline.getDelta();
                        target.rotate(delta, ax, ay);
                    }
                });
            }
        });
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxRotate()
         * @for kity.Shape
         * @description 让目标以动画旋转指定的角度
         *
         * @grammar fxRotate(deg, duration, easing, delay) => {this}
         *
         * @param {Number}            deg      要旋转的角度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxRotate: function(deg, duration, easing, delay, callback) {
                return this.animate(new RotateAnimator(deg), duration, easing, delay, callback);
            }
        });
        return RotateAnimator;
    }
};

//src/animate/scaleanimator.js
/**
 * @fileOverview
 *
 * 提供支持目标缩放的动画器
 */
_p[7] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.ScaleAnimator
     * @base kity.Animator
     * @description 提供支持目标缩放的动画器
     */
        var ScaleAnimator = _p.r(11).createClass("ScaleAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.ScaleAnimator
         *
         * @grammar new kity.ScaleAnimator(sx, sy)
         * @param  {Number} sx x 轴的缩放比例
         * @param  {Number} sy y 轴的缩放比例
         */
            constructor: function(sx, sy) {
                this.callBase({
                    beginValue: 0,
                    finishValue: 1,
                    setter: function(target, value, timeline) {
                        var delta = timeline.getDelta();
                        var kx = Math.pow(sx, delta);
                        var ky = Math.pow(sy, delta);
                        target.scale(ky, kx);
                    }
                });
            }
        });
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxScale
         * @for kity.Shape
         * @description 动画缩放当前的图形
         *
         * @grammar fxScale(sx, sy, duration, easing, delay, callback) => {this}
         *
         * @param {Number} sx x 轴的缩放比例
         * @param {Number} sy y 轴的缩放比例
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxScale: function(sx, sy, duration, easing, delay, callback) {
                return this.animate(new ScaleAnimator(sx, sy), duration, easing, delay, callback);
            }
        });
        return ScaleAnimator;
    }
};

//src/animate/timeline.js
/**
 * @fileOverview
 *
 * 动画时间线的实现
 */
_p[8] = {
    value: function(require) {
        var EventHandler = _p.r(34);
        var frame = _p.r(2);
        var utils = _p.r(12);
        function getPercentValue(b, f, p) {
            return utils.paralle(b, f, function(b, f) {
                return b + (f - b) * p;
            });
        }
        function getDelta(v1, v2) {
            return utils.paralle(v1, v2, function(v1, v2) {
                return v2 - v1;
            });
        }
        function TimelineEvent(timeline, type, param) {
            this.timeline = timeline;
            this.target = timeline.target;
            this.type = type;
            for (var name in param) {
                if (param.hasOwnProperty(name)) {
                    this[name] = param[name];
                }
            }
        }
        /**
     * @class kity.Timeline
     * @catalog animate
     * @mixins EventHandler
     * @description 动画时间线
     */
        var Timeline = _p.r(11).createClass("Timeline", {
            mixins: [ EventHandler ],
            /**
         * @constructor
         * @for kity.Timeline
         * @private
         * @description 时间线应该由动画器进行构造，不应手动创建
         *
         */
            constructor: function(animator, target, duration, easing) {
                this.callMixin();
                this.target = target;
                this.time = 0;
                this.duration = duration;
                this.easing = easing;
                this.animator = animator;
                this.beginValue = animator.beginValue;
                this.finishValue = animator.finishValue;
                this.setter = animator.setter;
                this.status = "ready";
            },
            /**
         * @private
         *
         * 让时间线进入下一帧
         */
            nextFrame: function(frame) {
                if (this.status != "playing") {
                    return;
                }
                this.time += frame.dur;
                this.setValue(this.getValue());
                if (this.time >= this.duration) {
                    this.timeUp();
                }
                frame.next();
            },
            /**
         * @method getPlayTime()
         * @for kity.Timeline
         * @grammar getPlayTime() => {Number}
         * @description 获得当前播放的时间，取值区间为 [0, duration]
         */
            getPlayTime: function() {
                return this.rollbacking ? this.duration - this.time : this.time;
            },
            /**
         * @method getTimeProportion()
         * @for kity.Timeline
         * @grammar getTimeProportion() => {Number}
         * @description 获得当前播放时间的比例，取值区间为 [0, 1]
         */
            getTimeProportion: function() {
                return this.getPlayTime() / this.duration;
            },
            /**
         * @method getValueProportion()
         * @for kity.Timeline
         * @grammar getValueProportion() => {Number}
         * @description 获得当前播放时间对应值的比例，取值区间为 [0, 1]；该值实际上是时间比例值经过缓动函数计算之后的值。
         */
            getValueProportion: function() {
                return this.easing(this.getPlayTime(), 0, 1, this.duration);
            },
            /**
         * @method getValue()
         * @for kity.Timeline
         * @grammar getValue() => {any}
         * @description 返回当前播放时间对应的值。
         */
            getValue: function() {
                var b = this.beginValue;
                var f = this.finishValue;
                var p = this.getValueProportion();
                return getPercentValue(b, f, p);
            },
            /**
         * @private
         *
         * 把值通过动画器的 setter 设置到目标上
         */
            setValue: function(value) {
                this.lastValue = this.currentValue;
                this.currentValue = value;
                this.setter.call(this.target, this.target, value, this);
            },
            /**
         * @method getDelta()
         * @for kity.Timeline
         * @grammar getDelta() => {any}
         * @description 返回当前值和上一帧的值的差值
         */
            getDelta: function() {
                this.lastValue = this.lastValue === undefined ? this.beginValue : this.lastValue;
                return getDelta(this.lastValue, this.currentValue);
            },
            /**
         * @method play()
         * @for kity.Timeline
         * @grammar play() => {this}
         * @description 让时间线播放，如果时间线还没开始，或者已停止、已结束，则重头播放；如果是已暂停，从暂停的位置继续播放
         */
            play: function() {
                var lastStatus = this.status;
                this.status = "playing";
                switch (lastStatus) {
                  case "ready":
                    if (utils.isFunction(this.beginValue)) {
                        this.beginValue = this.beginValue.call(this.target, this.target);
                    }
                    if (utils.isFunction(this.finishValue)) {
                        this.finishValue = this.finishValue.call(this.target, this.target);
                    }
                    this.time = 0;
                    this.setValue(this.beginValue);
                    this.frame = frame.requestFrame(this.nextFrame.bind(this));
                    break;

                  case "finished":
                  case "stoped":
                    this.time = 0;
                    this.frame = frame.requestFrame(this.nextFrame.bind(this));
                    break;

                  case "paused":
                    this.frame.next();
                }
                /**
             * @event play
             * @for kity.Timeline
             * @description 在时间线播放后触发
             *
             * @param {String} event.lastStatus
             *        表示播放前的上一个状态，可能取值为 'ready'、'finished'、'stoped'、'paused'
             */
                this.fire("play", new TimelineEvent(this, "play", {
                    lastStatus: lastStatus
                }));
                return this;
            },
            /**
         * @method pause()
         * @for kity.Timeline
         * @description 暂停当前的时间线
         *
         * @grammar pause() => {this}
         */
            pause: function() {
                this.status = "paused";
                /**
             * @event pause
             * @for kity.Timeline
             * @description 暂停事件，在时间线暂停时触发
             */
                this.fire("pause", new TimelineEvent(this, "pause"));
                frame.releaseFrame(this.frame);
                return this;
            },
            /**
         * @method stop()
         * @for kity.Timeline
         * @description 停止当前时间线
         *
         * @grammar stop() => {this}
         */
            stop: function() {
                this.status = "stoped";
                this.setValue(this.finishValue);
                this.rollbacking = false;
                /**
             * @event stop
             * @for kity.Timeline
             * @description 停止时间，在时间线停止时触发
             */
                this.fire("stop", new TimelineEvent(this, "stop"));
                frame.releaseFrame(this.frame);
                return this;
            },
            /**
         * @private
         *
         * 播放结束之后的处理
         */
            timeUp: function() {
                if (this.repeatOption) {
                    this.time = 0;
                    if (this.rollback) {
                        if (this.rollbacking) {
                            this.decreaseRepeat();
                            this.rollbacking = false;
                        } else {
                            this.rollbacking = true;
                            /**
                         * @event rollback
                         * @for kity.Timeline
                         * @description 回滚事件，在时间线回滚播放开始的时候触发
                         */
                            this.fire("rollback", new TimelineEvent(this, "rollback"));
                        }
                    } else {
                        this.decreaseRepeat();
                    }
                    if (!this.repeatOption) {
                        this.finish();
                    } else {
                        /**
                     * @event repeat
                     * @for kity.Timeline
                     * @description 循环事件，在时间线循环播放开始的时候触发
                     */
                        this.fire("repeat", new TimelineEvent(this, "repeat"));
                    }
                } else {
                    this.finish();
                }
            },
            /**
         * @private
         *
         * 决定播放结束的处理
         */
            finish: function() {
                this.setValue(this.finishValue);
                this.status = "finished";
                /**
             * @event finish
             * @for kity.Timeline
             * @description 结束事件，在时间线播放结束后触发（包括重复和回滚都结束）
             */
                this.fire("finish", new TimelineEvent(this, "finish"));
                frame.releaseFrame(this.frame);
            },
            /**
         * @private
         *
         *  循环次数递减
         */
            decreaseRepeat: function() {
                if (this.repeatOption !== true) {
                    this.repeatOption--;
                }
            },
            /**
         * @method repeat()
         * @for kity.Timeline
         * @description 设置时间线的重复选项
         *
         * @grammar repeat(repeat, rollback) => {this}
         *
         * @param  {Number|Boolean} repeat
         *     是否重复播放，设置为 true 无限循环播放，设置数值则循环指定的次数
         * @param  {Boolean} rollback
         *     指示是否要回滚播放。
         *     如果设置为真，一次事件到 duration 则一个来回算一次循环次数，否则播放完成一次算一次循环次数
         *
         */
            repeat: function(repeat, rollback) {
                this.repeatOption = repeat;
                this.rollback = rollback;
                return this;
            }
        });
        Timeline.requestFrame = frame.requestFrame;
        Timeline.releaseFrame = frame.releaseFrame;
        return Timeline;
    }
};

//src/animate/translateanimator.js
/**
 * @fileOverview
 *
 * 提供让图形移动的动画器
 */
_p[9] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.TranslateAnimator
     * @base kity.Animator
     * @description 提供让图形移动的动画器
     */
        var TranslateAnimator = _p.r(11).createClass("TranslateAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.TranslateAnimator
         * @grammar new kity.TranslateAnimator(x, y)
         * @param  {Number} x x 方向上需要移动的距离
         * @param  {Number} y y 方向上需要移动的距离
         */
            constructor: function(x, y) {
                this.callBase({
                    x: 0,
                    y: 0
                }, {
                    x: x,
                    y: y
                }, function(target, value, timeline) {
                    var delta = timeline.getDelta();
                    target.translate(delta.x, delta.y);
                });
            }
        });
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxTranslate()
         * @for kity.Shape
         * @description 让目标以动画平移指定的距离
         *
         * @grammar fxTranslate(x, y, duration, easing, delay, callback) => {this}
         *
         * @param {Number} x x 方向上需要移动的距离
         * @param {Number} y y 方向上需要移动的距离
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxTranslate: function(x, y, duration, easing, delay, callback) {
                return this.animate(new TranslateAnimator(x, y), duration, easing, delay, callback);
            }
        });
        return TranslateAnimator;
    }
};

//src/core/browser.js
/**
 * @fileOverview
 *
 * 提供浏览器判断的一些字段
 */
_p[10] = {
    value: function() {
        /**
     * @class kity.Browser
     * @catalog core
     * @static
     * @description 提供浏览器信息
     */
        var browser = function() {
            var agent = navigator.userAgent.toLowerCase(), opera = window.opera, browser;
            // 浏览器对象
            browser = {
                /**
             * @property ie
             * @for kity.Browser
             * @description 判断是否为 IE 浏览器
             * @type {boolean}
             */
                ie: /(msie\s|trident.*rv:)([\w.]+)/.test(agent),
                /**
             * @property opera
             * @for kity.Browser
             * @description 判断是否为 Opera 浏览器
             * @type {boolean}
             */
                opera: !!opera && opera.version,
                /**
             * @property webkit
             * @for kity.Browser
             * @description 判断是否为 Webkit 内核的浏览器
             * @type {boolean}
             */
                webkit: agent.indexOf(" applewebkit/") > -1,
                /**
             * @property mac
             * @for kity.Browser
             * @description 判断是否为 Mac 下的浏览器
             * @type {boolean}
             */
                mac: agent.indexOf("macintosh") > -1
            };
            browser.gecko = navigator.product == "Gecko" && !browser.webkit && !browser.opera && !browser.ie;
            var version = 0;
            // Internet Explorer 6.0+
            if (browser.ie) {
                version = (agent.match(/(msie\s|trident.*rv:)([\w.]+)/)[2] || 0) * 1;
                browser.ie11Compat = document.documentMode == 11;
                browser.ie9Compat = document.documentMode == 9;
            }
            // Gecko.
            if (browser.gecko) {
                var geckoRelease = agent.match(/rv:([\d\.]+)/);
                if (geckoRelease) {
                    geckoRelease = geckoRelease[1].split(".");
                    version = geckoRelease[0] * 1e4 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
                }
            }
            if (/chrome\/(\d+\.\d)/i.test(agent)) {
                /**
             * @property chrome
             * @for kity.Browser
             * @description 判断是否为 Chrome 浏览器
             * @type {boolean}
             */
                browser.chrome = +RegExp["$1"];
            }
            if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
                browser.safari = +(RegExp["$1"] || RegExp["$2"]);
            }
            // Opera 9.50+
            if (browser.opera) version = parseFloat(opera.version());
            // WebKit 522+ (Safari 3+)
            if (browser.webkit) version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
            /**
         * @property version
         * @for kity.Browser
         * @description 获取当前浏览器的版本
         * @type {Number}
         */
            browser.version = version;
            browser.isCompatible = !browser.mobile && (browser.ie && version >= 6 || browser.gecko && version >= 10801 || browser.opera && version >= 9.5 || browser.air && version >= 1 || browser.webkit && version >= 522 || false);
            return browser;
        }();
        return browser;
    }
};

//src/core/class.js
/**
 * @fileOverview
 *
 * 提供 Kity 的 OOP 支持
 */
_p[11] = {
    value: function(require, exports) {
        // just to bind context
        Function.prototype.bind = Function.prototype.bind || function(thisObj) {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.apply(thisObj, args);
        };
        /**
     * @class kity.Class
     * @catalog core
     * @description 所有 kity 类的基类
     * @abstract
     */
        function Class() {}
        exports.Class = Class;
        Class.__KityClassName = "Class";
        /**
     * @method base()
     * @for kity.Class
     * @protected
     * @grammar base(name, args...) => {any}
     * @description 调用父类指定名称的函数
     * @param {string} name 函数的名称
     * @param {parameter} args... 传递给父类函数的参数
     *
     * @example
     *
     * ```js
     * var Person = kity.createClass('Person', {
     *     toString: function() {
     *         return 'I am a person';
     *     }
     * });
     *
     * var Male = kity.createClass('Male', {
     *     base: Person,
     *
     *     toString: function() {
     *         return 'I am a man';
     *     },
     *
     *     speak: function() {
     *         return this.base('toString') + ',' + this.toString();
     *     }
     * })
     * ```
     */
        Class.prototype.base = function(name) {
            var caller = arguments.callee.caller;
            var method = caller.__KityMethodClass.__KityBaseClass.prototype[name];
            return method.apply(this, Array.prototype.slice.call(arguments, 1));
        };
        /**
     * @method callBase()
     * @for kity.Class
     * @protected
     * @grammar callBase(args...) => {any}
     * @description 调用父类同名函数
     * @param {parameter} args... 传递到父类同名函数的参数
     *
     * @example
     *
     * ```js
     * var Animal = kity.createClass('Animal', {
     *     constructor: function(name) {
     *         this.name = name;
     *     },
     *     toString: function() {
     *         return 'I am an animal name ' + this.name;
     *     }
     * });
     *
     * var Dog = kity.createClass('Dog', {
     *     constructor: function(name) {
     *         this.callBase(name);
     *     },
     *     toString: function() {
     *         return this.callBase() + ', a dog';
     *     }
     * });
     *
     * var dog = new Dog('Dummy');
     * console.log(dog.toString()); // "I am an animal name Dummy, a dog";
     * ```
     */
        Class.prototype.callBase = function() {
            var caller = arguments.callee.caller;
            var method = caller.__KityMethodClass.__KityBaseClass.prototype[caller.__KityMethodName];
            return method.apply(this, arguments);
        };
        Class.prototype.mixin = function(name) {
            var caller = arguments.callee.caller;
            var mixins = caller.__KityMethodClass.__KityMixins;
            if (!mixins) {
                return this;
            }
            var method = mixins[name];
            return method.apply(this, Array.prototype.slice.call(arguments, 1));
        };
        Class.prototype.callMixin = function() {
            var caller = arguments.callee.caller;
            var methodName = caller.__KityMethodName;
            var mixins = caller.__KityMethodClass.__KityMixins;
            if (!mixins) {
                return this;
            }
            var method = mixins[methodName];
            if (methodName == "constructor") {
                for (var i = 0, l = method.length; i < l; i++) {
                    method[i].call(this);
                }
                return this;
            } else {
                return method.apply(this, arguments);
            }
        };
        /**
     * @method pipe()
     * @for kity.Class
     * @grammar pipe() => {this}
     * @description 以当前对象为上线文以及管道函数的第一个参数，执行一个管道函数
     * @param  {Function} fn 进行管道操作的函数
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect().pipe(function() {
     *     this.setWidth(500);
     *     this.setHeight(300);
     * });
     * ```
     */
        Class.prototype.pipe = function(fn) {
            if (typeof fn == "function") {
                fn.call(this, this);
            }
            return this;
        };
        /**
     * @method getType()
     * @for kity.Class
     * @grammar getType() => {string}
     * @description 获得对象的类型
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect();
     * var circle = new kity.Circle();
     *
     * console.log(rect.getType()); // "Rect"
     * console.log(rect.getType()); // "Circle"
     * ```
     */
        Class.prototype.getType = function() {
            return this.__KityClassName;
        };
        /**
     * @method getClass()
     * @for kity.Class
     * @grammar getClass() => {Class}
     * @description 获得对象的类
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect();
     *
     * console.log(rect.getClass() === kity.Rect); // true
     * console.log(rect instanceof kity.Rect); // true
     * ```
     */
        Class.prototype.getClass = function() {
            return this.constructor;
        };
        // 检查基类是否调用了父类的构造函数
        // 该检查是弱检查，假如调用的代码被注释了，同样能检查成功（这个特性可用于知道建议调用，但是出于某些原因不想调用的情况）
        function checkBaseConstructorCall(targetClass, classname) {
            var code = targetClass.toString();
            if (!/this\.callBase/.test(code)) {
                throw new Error(classname + " : 类构造函数没有调用父类的构造函数！为了安全，请调用父类的构造函数");
            }
        }
        var KITY_INHERIT_FLAG = "__KITY_INHERIT_FLAG_" + +new Date();
        function inherit(constructor, BaseClass, classname) {
            var KityClass = eval("(function " + classname + "( __inherit__flag ) {" + "if( __inherit__flag != KITY_INHERIT_FLAG ) {" + "KityClass.__KityConstructor.apply(this, arguments);" + "}" + "this.__KityClassName = KityClass.__KityClassName;" + "})");
            KityClass.__KityConstructor = constructor;
            KityClass.prototype = new BaseClass(KITY_INHERIT_FLAG);
            for (var methodName in BaseClass.prototype) {
                if (BaseClass.prototype.hasOwnProperty(methodName) && methodName.indexOf("__Kity") !== 0) {
                    KityClass.prototype[methodName] = BaseClass.prototype[methodName];
                }
            }
            KityClass.prototype.constructor = KityClass;
            return KityClass;
        }
        function mixin(NewClass, mixins) {
            if (false === mixins instanceof Array) {
                return NewClass;
            }
            var i, length = mixins.length, proto, method;
            NewClass.__KityMixins = {
                constructor: []
            };
            for (i = 0; i < length; i++) {
                proto = mixins[i].prototype;
                for (method in proto) {
                    if (false === proto.hasOwnProperty(method) || method.indexOf("__Kity") === 0) {
                        continue;
                    }
                    if (method === "constructor") {
                        // constructor 特殊处理
                        NewClass.__KityMixins.constructor.push(proto[method]);
                    } else {
                        NewClass.prototype[method] = NewClass.__KityMixins[method] = proto[method];
                    }
                }
            }
            return NewClass;
        }
        function extend(BaseClass, extension) {
            if (extension.__KityClassName) {
                extension = extension.prototype;
            }
            for (var methodName in extension) {
                if (extension.hasOwnProperty(methodName) && methodName.indexOf("__Kity") && methodName != "constructor") {
                    var method = BaseClass.prototype[methodName] = extension[methodName];
                    method.__KityMethodClass = BaseClass;
                    method.__KityMethodName = methodName;
                }
            }
            return BaseClass;
        }
        /**
     * @method kity.createClass()
     * @grammar kity.createClass(classname, defines) => {Class}
     * @description 创建一个类
     * @param  {string} classname 类名，用于调试的时候查看，可选
     * @param  {object} defines   类定义
     *      defines.base {Class}
     *          定义的类的基类，如果不配置，则表示基类为 kity.Class
     *      defines.mixins {Class[]}
     *          定义的类要融合的类列表
     *      defines.constructor {Function}
     *          定义类的构造函数，如果父类显式定义了构造函数，需要在构造函数中使用 callBase() 方法调用父类的构造函数
     *      defines.* {Function}
     *          定义类的其它函数
     *
     * @example 创建一个类
     *
     * ```js
     * var Animal = kity.createClass('Animal', {
     *     constructor: function(name) {
     *         this.name = name;
     *     },
     *     toString: function() {
     *         return this.name;
     *     }
     * });
     *
     * var a = new Animal('kity');
     * console.log(a.toString()); // "kity"
     * ```
     *
     * @example 继承一个类
     *
     * ```js
     * var Cat = kity.createClass('Cat', {
     *     base: Animal,
     *     constructor: function(name, color) {
     *         // 调用父类构造函数
     *         this.callBase(name);
     *     },
     *     toString: function() {
     *         return 'A ' + this.color + ' cat, ' + this.callBase();
     *     }
     * });
     *
     * var cat = new Cat('kity', 'black');
     * console.log(cat.toString()); // "A black cat, kity"
     * ```
     *
     * @example 混合类的能力
     * ```js
     * var Walkable = kity.createClass('Walkable', {
     *     constructor: function() {
     *         this.speed = 'fast';
     *     },
     *     walk: function() {
     *         console.log('I am walking ' + this.speed);
     *     }
     * });
     *
     * var Dog = kity.createClass('Dog', {
     *     base: Animal,
     *     mixins: [Walkable],
     *     constructor: function(name) {
     *         this.callBase(name);
     *         this.callMixins();
     *     }
     * });
     *
     * var dog = new Dog('doggy');
     * console.log(dog.toString() + ' say:');
     * dog.walk();
     * ```
     */
        exports.createClass = function(classname, defines) {
            var constructor, NewClass, BaseClass;
            if (arguments.length === 1) {
                defines = arguments[0];
                classname = "AnonymousClass";
            }
            BaseClass = defines.base || Class;
            if (defines.hasOwnProperty("constructor")) {
                constructor = defines.constructor;
                if (BaseClass != Class) {
                    checkBaseConstructorCall(constructor, classname);
                }
            } else {
                constructor = function() {
                    this.callBase.apply(this, arguments);
                    this.callMixin.apply(this, arguments);
                };
            }
            NewClass = inherit(constructor, BaseClass, classname);
            NewClass = mixin(NewClass, defines.mixins);
            NewClass.__KityClassName = constructor.__KityClassName = classname;
            NewClass.__KityBaseClass = constructor.__KityBaseClass = BaseClass;
            NewClass.__KityMethodName = constructor.__KityMethodName = "constructor";
            NewClass.__KityMethodClass = constructor.__KityMethodClass = NewClass;
            // 下面这些不需要拷贝到原型链上
            delete defines.mixins;
            delete defines.constructor;
            delete defines.base;
            NewClass = extend(NewClass, defines);
            return NewClass;
        };
        /**
     * @method kity.extendClass()
     * @grammar kity.extendClass(clazz, extension) => {Class}
     * @description 拓展一个已有的类
     *
     * @example
     *
     * ```js
     * kity.extendClass(Dog, {
     *     spark: function() {
     *         console.log('wao wao wao!');
     *     }
     * });
     *
     * new Dog().spark(); // "wao wao wao!";
     * ```
     */
        exports.extendClass = extend;
    }
};

//src/core/utils.js
/**
 * @fileOverview
 *
 * 一些常用的工具方法
 */
_p[12] = {
    value: function() {
        /**
     * @class kity.Utils
     * @catalog core
     * @static
     * @description 提供常用的工具方法
     */
        var utils = {
            /**
         * @method each()
         * @for kity.Utils
         * @grammar each(obj, interator, context)
         * @param  {Object|Array} obj 要迭代的对象或数组
         * @param  {Function} iterator 迭代函数
         * @param  {Any} context  迭代函数的上下文
         *
         * @example 迭代数组
         *
         * ```js
         * kity.Utils.each([1, 2, 3, 4, 5], function(value, index, array) {
         *     console.log(value, index);
         * });
         * // 1, 0
         * // 2, 1
         * // 3, 2
         * // 4, 3
         * // 5, 4
         * ```
         *
         * @example 迭代对象
         *
         * ```js
         * var obj = {
         *     name: 'kity',
         *     version: '1.2.1'
         * };
         * var param = [];
         * kity.Utils.each(obj, function(value, key, obj) {
         *     param.push(key + '=' + value);
         * });
         * console.log(param.join('&')); // "name=kity&version=1.2.1"
         * ```
         */
            each: function each(obj, iterator, context) {
                if (obj === null) {
                    return;
                }
                if (obj.length === +obj.length) {
                    for (var i = 0, l = obj.length; i < l; i++) {
                        if (iterator.call(context, obj[i], i, obj) === false) {
                            return false;
                        }
                    }
                } else {
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            if (iterator.call(context, obj[key], key, obj) === false) {
                                return false;
                            }
                        }
                    }
                }
            },
            /**
         * @method extend()
         * @for kity.Utils
         * @grammar extend(target, sources..., notCover) => {object}
         * @description 把源对象的属性合并到目标对象上
         * @param {object} target 目标对象
         * @param {parameter} sources 源对象
         * @param {boolean} notCover 是否不要覆盖源对象已有的属性
         *
         * @example
         *
         * ```js
         * var a = {
         *     key1: 'a1',
         *     key2: 'a2'
         * };
         *
         * var b = {
         *     key2: 'b2',
         *     key3: 'b3'
         * };
         *
         * var c = {
         *     key4: 'c4'
         * };
         *
         * var d = kity.extend(a, b, c);
         *
         * console.log(d === a); // true
         * console.log(a); // {key1: 'a1', key2: 'b2', key3: 'b3', key4: 'c4'}
         * ```
         */
            extend: function extend(t) {
                var a = arguments, notCover = this.isBoolean(a[a.length - 1]) ? a[a.length - 1] : false, len = this.isBoolean(a[a.length - 1]) ? a.length - 1 : a.length;
                for (var i = 1; i < len; i++) {
                    var x = a[i];
                    for (var k in x) {
                        if (!notCover || !t.hasOwnProperty(k)) {
                            t[k] = x[k];
                        }
                    }
                }
                return t;
            },
            /**
         * @method deepExtend()
         * @for kity.Utils
         * @grammar deepExtend(target, sources..., notCover)
         * @description 把源对象的属性合并到目标对象上，如果属性是对象，会递归合并
         * @param {object} target 目标对象
         * @param {parameter} sources 源对象
         * @param {boolean} notCover 是否不要覆盖源对象已有的属性
         */
            deepExtend: function(t, s) {
                var a = arguments, notCover = this.isBoolean(a[a.length - 1]) ? a[a.length - 1] : false, len = this.isBoolean(a[a.length - 1]) ? a.length - 1 : a.length;
                for (var i = 1; i < len; i++) {
                    var x = a[i];
                    for (var k in x) {
                        if (!notCover || !t.hasOwnProperty(k)) {
                            if (this.isObject(t[k]) && this.isObject(x[k])) {
                                this.deepExtend(t[k], x[k], notCover);
                            } else {
                                t[k] = x[k];
                            }
                        }
                    }
                }
                return t;
            },
            /**
         * @method clone()
         * @for kity.Utils
         * @grammar clone(obj) => {object}
         * @description 返回一个对象的克隆副本（非深度复制）
         * @param  {object} obj 要克隆的对象
         *
         * @example
         *
         * ```js
         * var source = {
         *     key1: {
         *         key2: 'value2'
         *     },
         *     key3: 'value3'
         * };
         *
         * var target = kity.Utils.clone(source);
         *
         * console.log(target === source); // false
         * console.log(target.key1 === source.key1); // true
         * console.log(target.key3 === source.key3); // true
         * ```
         */
            clone: function clone(obj) {
                var cloned = {};
                for (var m in obj) {
                    if (obj.hasOwnProperty(m)) {
                        cloned[m] = obj[m];
                    }
                }
                return cloned;
            },
            /**
         * @method copy()
         * @for kity.Utils
         * @grammar copy(obj) => {object}
         * @description 返回一个对象的拷贝副本（深度复制）
         * @param  {object} obj 要拷贝的对象
         *
         * @example
         *
         * ```js
         * var source = {
         *     key1: {
         *         key2: 'value2'
         *     },
         *     key3: 'value3'
         * };
         *
         * var target = kity.Utils.copy(source);
         *
         * console.log(target === source); // false
         * console.log(target.key1 === source.key1); // false
         * console.log(target.key3 === source.key3); // true，因为是值类型
         * ```
         */
            copy: function copy(obj) {
                if (typeof obj !== "object") return obj;
                if (typeof obj === "function") return null;
                return JSON.parse(JSON.stringify(obj));
            },
            queryPath: function(path, obj) {
                var arr = path.split(".");
                var i = 0, tmp = obj, l = arr.length;
                while (i < l) {
                    if (arr[i] in tmp) {
                        tmp = tmp[arr[i]];
                        i++;
                        if (i >= l || tmp === undefined) {
                            return tmp;
                        }
                    } else {
                        return undefined;
                    }
                }
            },
            getValue: function(value, defaultValue) {
                return value !== undefined ? value : defaultValue;
            },
            /**
         * @method flatten()
         * @for kity.Utils
         * @grammar flatten(arr) => {Array}
         * @description 返回给定数组的扁平化版本
         * @param  {Array} arr 要扁平化的数组
         *
         * @example
         *
         * ```js
         * var flattened = kity.Utils.flatten([[1, 2], [2, 3], [[4, 5], [6, 7]]]);
         * console.log(flattened); // [1, 2, 3, 4, 5, 6, 7];
         * ```
         */
            flatten: function flatten(arr) {
                var result = [], length = arr.length, i;
                for (i = 0; i < length; i++) {
                    if (arr[i] instanceof Array) {
                        result = result.concat(utils.flatten(arr[i]));
                    } else {
                        result.push(arr[i]);
                    }
                }
                return result;
            },
            /**
         * @method paralle()
         * @for kity.Utils
         * @grammar paralle() => {Any}
         *
         * @description 平行地对 v1 和 v2 进行指定的操作
         *
         *    如果 v1 是数字，那么直接进行 op 操作
         *    如果 v1 是对象，那么返回一个对象，其元素是 v1 和 v2 同键值的每个元素平行地进行 op 操作的结果
         *    如果 v1 是数组，那么返回一个数组，其元素是 v1 和 v2 同索引的每个元素平行地进行 op 操作的结果
         *
         * @param  {Number|Object|Array} v1 第一个操作数
         * @param  {Number|Object|Array} v2 第二个操作数
         * @param  {Function} op 操作函数
         *
         *
         *
         * @example
         *
         * ```js
         * var a = {
         *     value1: 1,
         *     value2: 2,
         *     value3: [3, 4, 5]
         * };
         *
         * var b = {
         *     value1: 2,
         *     value2: 3,
         *     value3: [4, 5, 6]
         * };
         *
         * var c = kity.Utils.paralle(a, b, function(v1, v2) {
         *     return v1 + v2;
         * });
         *
         * console.log(c.value1); // 3
         * console.log(c.value2); // 5
         * console.log(c.value3); // [7, 9, 11]
         *
         * ```
         */
            paralle: function paralle(v1, v2, op) {
                var Class, field, index, name, value;
                // 数组
                if (v1 instanceof Array) {
                    value = [];
                    for (index = 0; index < v1.length; index++) {
                        value.push(utils.paralle(v1[index], v2[index], op));
                    }
                    return value;
                }
                // 对象
                if (v1 instanceof Object) {
                    // 如果值是一个支持原始表示的实例，获取其原始表示
                    Class = v1.getClass && v1.getClass();
                    if (Class && Class.parse) {
                        v1 = v1.valueOf();
                        v2 = v2.valueOf();
                        value = utils.paralle(v1, v2, op);
                        value = Class.parse(value);
                    } else {
                        value = {};
                        for (name in v1) {
                            if (v1.hasOwnProperty(name) && v2.hasOwnProperty(name)) {
                                value[name] = utils.paralle(v1[name], v2[name], op);
                            }
                        }
                    }
                    return value;
                }
                // 是否数字
                if (false === isNaN(parseFloat(v1))) {
                    return op(v1, v2);
                }
                return value;
            },
            /**
         * 创建 op 操作的一个平行化版本
         */
            parallelize: function parallelize(op) {
                return function(v1, v2) {
                    return utils.paralle(v1, v2, op);
                };
            }
        };
        /**
     * @method isString()
     * @for kity.Utils
     * @grammar isString(unknown) => {boolean}
     * @description 判断一个值是否为字符串类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isFunction()
     * @for kity.Utils
     * @grammar isFunction(unknown) => {boolean}
     * @description 判断一个值是否为函数类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isArray()
     * @for kity.Utils
     * @grammar isArray(unknown) => {boolean}
     * @description 判断一个值是否为数组类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isNumber()
     * @for kity.Utils
     * @grammar isNumber(unknown) => {boolean}
     * @description 判断一个值是否为数字类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isRegExp()
     * @for kity.Utils
     * @grammar isRegExp(unknown) => {boolean}
     * @description 判断一个值是否为正则表达式类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isObject()
     * @for kity.Utils
     * @grammar isObject(unknown) => {boolean}
     * @description 判断一个值是否为对象类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isBoolean()
     * @for kity.Utils
     * @grammar isBoolean(unknown) => {boolean}
     * @description 判断一个值是否为布尔类型
     * @param  {any} unknown 要判断的值
     */
        utils.each([ "String", "Function", "Array", "Number", "RegExp", "Object", "Boolean" ], function(v) {
            utils["is" + v] = function typeCheck(obj) {
                return Object.prototype.toString.apply(obj) == "[object " + v + "]";
            };
        });
        return utils;
    }
};

//src/filter/effect/colormatrixeffect.js
/**
 * 颜色矩阵运算效果封装
 */
_p[13] = {
    value: function(require, exports, module) {
        var Effect = _p.r(16), Utils = _p.r(12);
        var ColorMatrixEffect = _p.r(11).createClass("ColorMatrixEffect", {
            base: Effect,
            constructor: function(type, input) {
                this.callBase(Effect.NAME_COLOR_MATRIX);
                this.set("type", Utils.getValue(type, ColorMatrixEffect.TYPE_MATRIX));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
        Utils.extend(ColorMatrixEffect, {
            // 类型常量
            TYPE_MATRIX: "matrix",
            TYPE_SATURATE: "saturate",
            TYPE_HUE_ROTATE: "hueRotate",
            TYPE_LUMINANCE_TO_ALPHA: "luminanceToAlpha",
            // 矩阵常量
            MATRIX_ORIGINAL: "10000010000010000010".split("").join(" "),
            MATRIX_EMPTY: "00000000000000000000".split("").join(" ")
        });
        return ColorMatrixEffect;
    }
};

//src/filter/effect/compositeeffect.js
/**
 * 高斯模糊效果封装
 */
_p[14] = {
    value: function(require, exports, module) {
        var Effect = _p.r(16), Utils = _p.r(12);
        var CompositeEffect = _p.r(11).createClass("CompositeEffect", {
            base: Effect,
            constructor: function(operator, input, input2) {
                this.callBase(Effect.NAME_COMPOSITE);
                this.set("operator", Utils.getValue(operator, CompositeEffect.OPERATOR_OVER));
                if (input) {
                    this.set("in", input);
                }
                if (input2) {
                    this.set("in2", input2);
                }
            }
        });
        Utils.extend(CompositeEffect, {
            // operator 常量
            OPERATOR_OVER: "over",
            OPERATOR_IN: "in",
            OPERATOR_OUT: "out",
            OPERATOR_ATOP: "atop",
            OPERATOR_XOR: "xor",
            OPERATOR_ARITHMETIC: "arithmetic"
        });
        return CompositeEffect;
    }
};

//src/filter/effect/convolvematrixeffect.js
/**
 * 像素级别的矩阵卷积运算效果封装
 */
_p[15] = {
    value: function(require, exports, module) {
        var Effect = _p.r(16), Utils = _p.r(12);
        var ConvolveMatrixEffect = _p.r(11).createClass("ConvolveMatrixEffect", {
            base: Effect,
            constructor: function(edgeMode, input) {
                this.callBase(Effect.NAME_CONVOLVE_MATRIX);
                this.set("edgeMode", Utils.getValue(edgeMode, ConvolveMatrixEffect.MODE_DUPLICATE));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
        Utils.extend(ConvolveMatrixEffect, {
            MODE_DUPLICATE: "duplicate",
            MODE_WRAP: "wrap",
            MODE_NONE: "none"
        });
        return ConvolveMatrixEffect;
    }
};

//src/filter/effect/effect.js
/*
 * 效果类
 * 该类型的对象不存储任何内部属性， 所有操作都是针对该类对象所维护的节点进行的
 */
_p[16] = {
    value: function(require, exports, module) {
        var svg = _p.r(68), Effect = _p.r(11).createClass("Effect", {
            constructor: function(type) {
                this.node = svg.createNode(type);
            },
            getId: function() {
                return this.node.id;
            },
            setId: function(id) {
                this.node.id = id;
                return this;
            },
            set: function(key, value) {
                this.node.setAttribute(key, value);
                return this;
            },
            get: function(key) {
                return this.node.getAttribute(key);
            },
            getNode: function() {
                return this.node;
            },
            // 返回该效果的result
            toString: function() {
                return this.node.getAttribute("result") || "";
            }
        });
        _p.r(12).extend(Effect, {
            // 特效名称常量
            NAME_GAUSSIAN_BLUR: "feGaussianBlur",
            NAME_OFFSET: "feOffset",
            NAME_COMPOSITE: "feComposite",
            NAME_COLOR_MATRIX: "feColorMatrix",
            NAME_CONVOLVE_MATRIX: "feConvolveMatrix",
            // 输入常量
            INPUT_SOURCE_GRAPHIC: "SourceGraphic",
            INPUT_SOURCE_ALPHA: "SourceAlpha",
            INPUT_BACKGROUND_IMAGE: "BackgroundImage",
            INPUT_BACKGROUND_ALPHA: "BackgroundAlpha",
            INPUT_FILL_PAINT: "FillPaint",
            INPUT_STROKE_PAINT: "StrokePaint"
        });
        return Effect;
    }
};

//src/filter/effect/gaussianblureffect.js
/**
 * 高斯模糊效果封装
 */
_p[17] = {
    value: function(require, exports, module) {
        var Effect = _p.r(16), Utils = _p.r(12);
        return _p.r(11).createClass("GaussianblurEffect", {
            base: Effect,
            constructor: function(stdDeviation, input) {
                this.callBase(Effect.NAME_GAUSSIAN_BLUR);
                this.set("stdDeviation", Utils.getValue(stdDeviation, 1));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
    }
};

//src/filter/effect/offseteffect.js
/**
 * 偏移效果封装
 */
_p[18] = {
    value: function(require, exports, module) {
        var Effect = _p.r(16), Utils = _p.r(12);
        return _p.r(11).createClass("OffsetEffect", {
            base: Effect,
            constructor: function(dx, dy, input) {
                this.callBase(Effect.NAME_OFFSET);
                this.set("dx", Utils.getValue(dx, 0));
                this.set("dy", Utils.getValue(dy, 0));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
    }
};

//src/filter/effectcontainer.js
/*
 * Effect所用的container
 */
_p[19] = {
    value: function(require) {
        return _p.r(11).createClass("EffectContainer", {
            base: _p.r(29),
            addEffect: function(point, pos) {
                return this.addItem.apply(this, arguments);
            },
            prependEffect: function() {
                return this.prependItem.apply(this, arguments);
            },
            appendEffect: function() {
                return this.appendItem.apply(this, arguments);
            },
            removeEffect: function(pos) {
                return this.removeItem.apply(this, arguments);
            },
            addEffects: function() {
                return this.addItems.apply(this, arguments);
            },
            setEffects: function() {
                return this.setItems.apply(this, arguments);
            },
            getEffect: function() {
                return this.getItem.apply(this, arguments);
            },
            getEffects: function() {
                return this.getItems.apply(this, arguments);
            },
            getFirstEffect: function() {
                return this.getFirstItem.apply(this, arguments);
            },
            getLastEffect: function() {
                return this.getLastItem.apply(this, arguments);
            },
            handleAdd: function(effectItem, pos) {
                var count = this.getEffects().length, nextEffectItem = this.getItem(pos + 1);
                // 最后一个节点， 直接追加
                if (count === pos + 1) {
                    this.node.appendChild(effectItem.getNode());
                    return;
                }
                this.node.insertBefore(effectItem.getNode(), nextEffectItem.getNode());
            }
        });
    }
};

//src/filter/filter.js
/**
 * Filter 基类
 */
_p[20] = {
    value: function(require, exports, module) {
        var svg = _p.r(68);
        var Class = _p.r(11);
        var Filter = Class.createClass("Filter", {
            mixins: [ _p.r(19) ],
            constructor: function(x, y, width, height) {
                this.node = svg.createNode("filter");
                if (x !== undefined) {
                    this.set("x", x);
                }
                if (y !== undefined) {
                    this.set("y", y);
                }
                if (width !== undefined) {
                    this.set("width", width);
                }
                if (height !== undefined) {
                    this.set("height", height);
                }
            },
            getId: function() {
                return this.id;
            },
            setId: function(id) {
                this.node.id = id;
                return this;
            },
            set: function(key, value) {
                this.node.setAttribute(key, value);
                return this;
            },
            get: function(key) {
                return this.node.getAttribute(key);
            },
            getNode: function() {
                return this.node;
            }
        });
        var Shape = _p.r(61);
        Class.extendClass(Shape, {
            applyFilter: function(filter) {
                var filterId = filter.get("id");
                if (filterId) {
                    this.node.setAttribute("filter", "url(#" + filterId + ")");
                }
                return this;
            }
        });
        return Filter;
    }
};

//src/filter/gaussianblurfilter.js
/*
 * 高斯模糊滤镜
 */
_p[21] = {
    value: function(require, exports, module) {
        var GaussianblurEffect = _p.r(17);
        return _p.r(11).createClass("GaussianblurFilter", {
            base: _p.r(20),
            constructor: function(stdDeviation) {
                this.callBase();
                this.addEffect(new GaussianblurEffect(stdDeviation));
            }
        });
    }
};

//src/filter/projectionfilter.js
/*
 * 投影滤镜
 */
_p[22] = {
    value: function(require, exports, module) {
        var GaussianblurEffect = _p.r(17), Effect = _p.r(16), ColorMatrixEffect = _p.r(13), Color = _p.r(28), Utils = _p.r(12), CompositeEffect = _p.r(14), OffsetEffect = _p.r(18);
        return _p.r(11).createClass("ProjectionFilter", {
            base: _p.r(20),
            constructor: function(stdDeviation, dx, dy) {
                this.callBase();
                this.gaussianblurEffect = new GaussianblurEffect(stdDeviation, Effect.INPUT_SOURCE_ALPHA);
                this.gaussianblurEffect.set("result", "gaussianblur");
                this.addEffect(this.gaussianblurEffect);
                this.offsetEffect = new OffsetEffect(dx, dy, this.gaussianblurEffect);
                this.offsetEffect.set("result", "offsetBlur");
                this.addEffect(this.offsetEffect);
                this.colorMatrixEffect = new ColorMatrixEffect(ColorMatrixEffect.TYPE_MATRIX, this.offsetEffect);
                this.colorMatrixEffect.set("values", ColorMatrixEffect.MATRIX_ORIGINAL);
                this.colorMatrixEffect.set("result", "colorOffsetBlur");
                this.addEffect(this.colorMatrixEffect);
                this.compositeEffect = new CompositeEffect(CompositeEffect.OPERATOR_OVER, Effect.INPUT_SOURCE_GRAPHIC, this.colorMatrixEffect);
                this.addEffect(this.compositeEffect);
            },
            // 设置投影颜色
            setColor: function(color) {
                var matrix = null, originMatrix = null, colorValue = [];
                if (Utils.isString(color)) {
                    color = Color.parse(color);
                }
                if (!color) {
                    return this;
                }
                matrix = ColorMatrixEffect.MATRIX_EMPTY.split(" ");
                colorValue.push(color.get("r"));
                colorValue.push(color.get("g"));
                colorValue.push(color.get("b"));
                // rgb 分量更改
                for (var i = 0, len = colorValue.length; i < len; i++) {
                    matrix[i * 5 + 3] = colorValue[i] / 255;
                }
                // alpha 分量更改
                matrix[18] = color.get("a");
                this.colorMatrixEffect.set("values", matrix.join(" "));
                return this;
            },
            // 设置投影透明度
            setOpacity: function(opacity) {
                var matrix = this.colorMatrixEffect.get("values").split(" ");
                matrix[18] = opacity;
                this.colorMatrixEffect.set("values", matrix.join(" "));
                return this;
            },
            // 设置阴影偏移量
            setOffset: function(dx, dy) {
                this.setOffsetX(dx);
                this.setOffsetY(dy);
            },
            setOffsetX: function(dx) {
                this.offsetEffect.set("dx", dx);
            },
            setOffsetY: function(dy) {
                this.offsetEffect.set("dy", dy);
            },
            setDeviation: function(deviation) {
                this.gaussianblurEffect.set("stdDeviation", deviation);
            }
        });
    }
};

//src/graphic/bezier.js
/**
 * @fileOverview
 *
 * 贝塞尔曲线
 */
_p[23] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Bezier
     * @mixins kity.PointContainer
     * @base kity.Path
     * @description 绘制和使用贝塞尔曲线。贝塞尔曲线作为一个贝塞尔点的容器，任何贝塞尔点的改变都会更改贝塞尔曲线的外观
     *
     * @example
     *
     * ```js
     * var bezier = new kity.Bezier([
     *     new kity.BezierPoint(0, 0).setForward(100, 0),
     *     new kity.BezierPoint(100, 100).setBackward(100, 0)
     * ]);
     * ```
     */
        return _p.r(11).createClass("Bezier", {
            mixins: [ _p.r(52) ],
            base: _p.r(47),
            /**
         * @constructor
         * @for kity.Bezier
         *
         * @grammar new kity.Bezier(bezierPoints)
         *
         * @param  {kity.BezierPoints[]} bezierPoints 贝塞尔点集合，每个元素应该是 {kity.BezierPoint} 类型
         */
            constructor: function(bezierPoints) {
                this.callBase();
                bezierPoints = bezierPoints || [];
                this.changeable = true;
                this.setBezierPoints(bezierPoints);
            },
            /**
         * @method getBezierPoints()
         * @for kity.Bezier
         * @description 返回当前贝塞尔曲线的贝塞尔点集合
         *
         * @grammar getBezierPoints() => {kity.BezierPoints[]}
         *
         */
            getBezierPoints: function() {
                return this.getPoints();
            },
            /**
         * @method setBezierPoints()
         * @for kity.Bezier
         * @description 设置当前贝塞尔曲线的贝塞尔点集合
         *
         * @grammar setBeizerPoints(bezierPoints) => {this}
         *
         * @param {kity.BezierPoint[]} bezierPoints 贝塞尔点集合
         */
            setBezierPoints: function(bezierPoints) {
                return this.setPoints(bezierPoints);
            },
            //当点集合发生变化时采取的动作
            onContainerChanged: function() {
                if (this.changeable) {
                    this.update();
                }
            },
            update: function() {
                var drawer = null, bezierPoints = this.getBezierPoints();
                //单独的一个点不画任何图形
                if (bezierPoints.length < 2) {
                    return;
                }
                drawer = this.getDrawer();
                drawer.clear();
                var vertex = bezierPoints[0].getVertex(), forward = null, backward = null;
                drawer.moveTo(vertex.x, vertex.y);
                for (var i = 1, len = bezierPoints.length; i < len; i++) {
                    vertex = bezierPoints[i].getVertex();
                    backward = bezierPoints[i].getBackward();
                    forward = bezierPoints[i - 1].getForward();
                    drawer.bezierTo(forward.x, forward.y, backward.x, backward.y, vertex.x, vertex.y);
                }
                return this;
            }
        });
    }
};

//src/graphic/bezierpoint.js
/**
 * @fileOverview
 *
 * 表示一个贝塞尔点
 */
_p[24] = {
    value: function(require, exports, module) {
        var ShapePoint = _p.r(64);
        var Vector = _p.r(74);
        /**
     * @class kity.BezierPoint
     *
     * @description 表示一个贝塞尔点
     *              一个贝塞尔点由顶点坐标（曲线经过的点）、前方控制点、后方控制点表示
     */
        var BezierPoint = _p.r(11).createClass("BezierPoint", {
            /**
         * @constructor
         * @for kity.BezierPoint
         *
         * @description 创建一个具有默认顶点坐标的贝塞尔点，两个控制点的坐标和顶点一致
         *
         * @param  {Number}  x        顶点的 x 坐标
         * @param  {Number}  y        顶点的 y 坐标
         * @param  {Boolean} isSmooth 指示当前贝塞尔点是否光滑，光滑会约束顶点和两个控制点共线
         */
            constructor: function(x, y, isSmooth) {
                //顶点
                this.vertex = new ShapePoint(x, y);
                //控制点
                this.forward = new ShapePoint(x, y);
                this.backward = new ShapePoint(x, y);
                //是否平滑
                this.setSmooth(isSmooth === undefined || isSmooth);
                this.setSymReflaction(true);
            },
            /**
         * @method clone()
         * @for kity.BezierPoint
         * @description 返回贝塞尔点的一份拷贝
         *
         * @grammar clone() => {kity.BezierPoint}
         */
            clone: function() {
                var newPoint = new BezierPoint(), tmp = null;
                tmp = this.getVertex();
                newPoint.setVertex(tmp.x, tmp.y);
                tmp = this.getForward();
                newPoint.setForward(tmp.x, tmp.y);
                tmp = this.getBackward();
                newPoint.setBackward(tmp.x, tmp.y);
                newPoint.setSymReflaction(this.isSymReflaction);
                newPoint.setSmooth(this.isSmooth());
                return newPoint;
            },
            /**
         * @method setVertex()
         * @for kity.BezierPoint
         * @description 设置贝塞尔点的顶点坐标，注意，控制点的坐标不会跟着变化。希望控制点的坐标跟着变化，请用 moveTo() 方法
         *
         * @grammar setVertex(x, y) => {this}
         *
         * @param {Number} x 顶点的 x 坐标
         * @param {Number} y 顶点的 y 坐标
         */
            setVertex: function(x, y) {
                this.vertex.setPoint(x, y);
                this.update();
                return this;
            },
            /**
         * @method moveTo()
         * @for kity.BezierPoint
         * @description 同步移动整个贝塞尔点，使顶点的移动到指定的坐标中。控制点的位置相对顶点坐标固定。
         *
         * @grammar moveTo() => {this}
         *
         * @param  {Number} x 顶点的目标 x 坐标
         * @param  {Number} y 顶点的目标 y 坐标
         *
         */
            moveTo: function(x, y) {
                var oldForward = this.forward.getPoint(), oldBackward = this.backward.getPoint(), oldVertex = this.vertex.getPoint(), //移动距离
                distance = {
                    left: x - oldVertex.x,
                    top: y - oldVertex.y
                };
                // 更新
                this.forward.setPoint(oldForward.x + distance.left, oldForward.y + distance.top);
                this.backward.setPoint(oldBackward.x + distance.left, oldBackward.y + distance.top);
                this.vertex.setPoint(x, y);
                this.update();
            },
            /**
         * @method setForward()
         * @for kity.BezierPoint
         * @description 设置前方控制点的位置，如果贝塞尔点光滑，后方控制点会跟着联动
         *
         * @grammar setForward(x, y) => {this}
         *
         * @param {Number} x 前方控制点的 x 坐标
         * @param {Number} y 前方控制点的 y 坐标
         */
            setForward: function(x, y) {
                this.forward.setPoint(x, y);
                //更新后置点
                if (this.smooth) {
                    this.updateAnother(this.forward, this.backward);
                }
                this.update();
                this.lastControlPointSet = this.forward;
                return this;
            },
            /**
         * @method setBackward()
         * @for kity.BezierPoint
         * @description 设置后方控制点的位置，如果贝塞尔点光滑，前方控制点会跟着联动
         *
         * @grammar setBackward(x, y) => {this}
         *
         * @param {Number} x 后方控制点的 x 坐标
         * @param {Number} y 后方控制点的 y 坐标
         */
            setBackward: function(x, y) {
                this.backward.setPoint(x, y);
                //更新前置点
                if (this.smooth) {
                    this.updateAnother(this.backward, this.forward);
                }
                this.update();
                this.lastControlPointSet = this.backward;
                return this;
            },
            /**
         * @method setSymReflaction()
         * @for kity.BezierPoint
         * @description 设定是否镜像两个控制点的位置
         *
         * @grammar setSymReflaction(value) => {this}
         *
         * @param {boolean} value 如果设置为 true，且贝塞尔点光滑，两个控制点离顶点的距离相等
         */
            setSymReflaction: function(value) {
                this.symReflaction = value;
                if (this.smooth) this.setSmooth(true);
                return this;
            },
            /**
         * @method isSymReflaction()
         * @for kity.BezierPoint
         * @description 当前贝塞尔点的两个控制点是否被镜像约束
         *
         * @grammar isSymReflaction() => {boolean}
         */
            isSymReflaction: function() {
                return this.symReflaction;
            },
            /**
         * @private
         *
         * 根据前方控制点或后方控制点更新另一方
         */
            updateAnother: function(p, q) {
                var v = this.getVertex(), pv = Vector.fromPoints(p.getPoint(), v), vq = Vector.fromPoints(v, q.getPoint());
                vq = pv.normalize(this.isSymReflaction() ? pv.length() : vq.length());
                q.setPoint(v.x + vq.x, v.y + vq.y);
                return this;
            },
            /**
         * @method setSmooth()
         * @for kity.BezierPoint
         * @description 设置贝塞尔点是否光滑，光滑会约束顶点和两个控制点共线
         *
         * @param {Boolean} isSmooth 设置为 true 让贝塞尔点光滑
         */
            setSmooth: function(isSmooth) {
                var lc;
                this.smooth = !!isSmooth;
                if (this.smooth && (lc = this.lastControlPointSet)) {
                    this.updateAnother(lc, lc == this.forward ? this.backward : this.forward);
                }
                return this;
            },
            /**
         * @method isSmooth()
         * @for kity.BezierPoint
         * @description 判断贝塞尔点是否光滑
         *
         * @grammar isSmooth() => {boolean}
         */
            isSmooth: function() {
                return this.smooth;
            },
            /**
         * @method getVertex()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的顶点
         *
         * @grammar getVertex() => {kity.ShapePoint}
         */
            getVertex: function() {
                return this.vertex.getPoint();
            },
            /**
         * @method getForward()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的前方控制点
         *
         * @grammar getForward() => {kity.ShapePoint}
         */
            getForward: function() {
                return this.forward.getPoint();
            },
            /**
         * @method getBackward()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的后方控制点
         *
         * @grammar getBackward() => {kity.ShapePoint}
         */
            getBackward: function() {
                return this.backward.getPoint();
            },
            /**
         * @private
         *
         * 联动更新相关的贝塞尔曲线
         */
            update: function() {
                if (!this.container) {
                    return this;
                }
                //新增参数 this， 把当前引起变化的点传递过去， 以便有需要的地方可以获取到引起变化的源
                if (this.container.update) this.container.update(this);
            }
        });
        return BezierPoint;
    }
};

//src/graphic/box.js
/**
 * @fileOverview
 *
 * 表示一个矩形区域
 */
_p[25] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Box
     * @description 表示一个矩形区域
     */
        var Box = _p.r(11).createClass("Box", {
            /**
         * @constructor
         * @for kity.Box
         *
         * @grammar new kity.Box(x, y, width, height)
         * @grammar new kity.Box(value)
         *
         * @param  {Number} x|value.x      矩形区域的 x 坐标
         * @param  {Number} y|value.y      矩形区域的 y 坐标
         * @param  {Number} width|value.width   矩形区域的宽度
         * @param  {Number} height|value.height 矩形区域的高度
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(10, 20, 50, 50);
         * var box2 = new kity.Box({x: 10, y: 20, width: 50, height: 50});
         * ```
         */
            constructor: function(x, y, width, height) {
                var box = arguments[0];
                if (box && typeof box === "object") {
                    x = box.x;
                    y = box.y;
                    width = box.width;
                    height = box.height;
                }
                if (width < 0) {
                    x -= width = -width;
                }
                if (height < 0) {
                    y -= height = -height;
                }
                /**
             * @property x
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的 x 坐标
             */
                this.x = x || 0;
                /**
             * @property y
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的 y 坐标
             */
                this.y = y || 0;
                /**
             * @property width
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的宽度
             */
                this.width = width || 0;
                /**
             * @property height
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的高度
             */
                this.height = height || 0;
                /**
             * @property left
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最左侧坐标，等价于 x 的值
             */
                this.left = this.x;
                /**
             * @property right
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最右侧坐标，等价于 x + width 的值
             */
                this.right = this.x + this.width;
                /**
             * @property top
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最上侧坐标，等价于 y 的值
             */
                this.top = this.y;
                /**
             * @property bottom
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最下侧坐标，等价于 y + height 的值
             */
                this.bottom = this.y + this.height;
                /**
             * @property cx
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的中心 x 坐标
             */
                this.cx = this.x + this.width / 2;
                /**
             * @property cy
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的中心 y 坐标
             */
                this.cy = this.y + this.height / 2;
            },
            /**
         * @method getRangeX()
         * @for kity.Box
         * @description 获得矩形区域的 x 值域
         *
         * @grammar getRangeX() => {Number[]}
         *
         * @example
         *
         * var box = new kity.Box(10, 10, 30, 50);
         * console.log(box.getRangeX()); // [10, 40]
         */
            getRangeX: function() {
                return [ this.left, this.right ];
            },
            /**
         * @method getRangeY()
         * @for kity.Box
         * @description 获得矩形区域的 y 值域
         *
         * @grammar getRangeY() => {Number[]}
         *
         * @example
         *
         * var box = new kity.Box(10, 10, 30, 50);
         * console.log(box.getRangeY()); // [10, 60]
         */
            getRangeY: function() {
                return [ this.top, this.bottom ];
            },
            /**
         * @method merge()
         * @for kity.Box
         * @description 把当前矩形区域和指定的矩形区域合并，返回一个新的矩形区域（即包含两个源矩形区域的最小矩形区域）
         *
         * @grammar merge(another) => {kity.Box}
         * @param  {kity.Box} another 要合并的矩形区域
         *
         * @example
         *
         * ```js
         * var box1 = new kity.Box(10, 10, 50, 50);
         * var box2 = new kity.Box(30, 30, 50, 50);
         * var box3 = box1.merge(box2);
         * console.log(box3.valueOf()); // [10, 10, 70, 70]
         * ```
         */
            merge: function(another) {
                if (this.isEmpty()) {
                    return new Box(another.x, another.y, another.width, another.height);
                }
                var left = Math.min(this.left, another.left), right = Math.max(this.right, another.right), top = Math.min(this.top, another.top), bottom = Math.max(this.bottom, another.bottom);
                return new Box(left, top, right - left, bottom - top);
            },
            /**
         * @method intersect()
         * @for kity.Box
         * @description 求当前矩形区域和指定的矩形区域重叠的矩形区域
         *
         * @grammar intersect(another) => {kity.Box}
         * @param  {kity.Box} another 要求重叠的矩形区域
         *
         * @example
         *
         * ```js
         * var box1 = new kity.Box(10, 10, 50, 50);
         * var box2 = new kity.Box(30, 30, 50, 50);
         * var box3 = box1.intersect(box2);
         * console.log(box3.valueOf()); // [30, 30, 20, 20]
         * ```
         */
            intersect: function(another) {
                var left = Math.max(this.left, another.left), right = Math.min(this.right, another.right), top = Math.max(this.top, another.top), bottom = Math.min(this.bottom, another.bottom);
                if (left > right || top > bottom) return new Box();
                return new Box(left, top, right - left, bottom - top);
            },
            /**
         * @method expand()
         * @for kity.Box
         * @description 扩展（或收缩）当前的盒子，返回新的盒子
         *
         * @param {Number} top
         *     矩形区域的上边界往上扩展的值；如果是负数，则上边界往下收缩
         *
         * @param {Number} right
         *     [Optional] 矩形区域的右边界往右拓展的值；
         *                如果是负数，则右边界往左收缩；
         *                如果不设置该值，使用和 top 同样的值。
         *
         * @param {Number} bottom
         *     [Optional] 矩形区域的下边界往下拓展的值；
         *                如果是负数，则下边界往上收缩；
         *                如果不设置该值，使用和 top 同样的值。
         *
         * @param {Number} left
         *     [Optional] 矩形区域的左边界往左拓展的值;
         *                如果是负数，则左边界往右收缩;
         *                如果不设置该值，使用和 right 同样的值。
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(10, 10, 20, 20);
         * var box1 = box.expand(10); // [0, 0, 40, 40]
         * var box2 = box.expand(10, 20); // [0, -10, 40, 60]
         * var box3 = box.expand(1, 2, 3, 4); // [9, 8, 24, 26]
         * ```
         */
            expand: function(top, right, bottom, left) {
                if (arguments.length < 1) {
                    return new Box(this);
                }
                if (arguments.length < 2) {
                    right = top;
                }
                if (arguments.length < 3) {
                    bottom = top;
                }
                if (arguments.length < 4) {
                    left = right;
                }
                var x = this.left - left, y = this.top - top, width = this.width + right, height = this.height + top;
                return new Box(x, y, width, height);
            },
            /**
         * @method valueOf()
         * @for kity.Box
         * @description 返回当前盒子的数组表示
         *
         * @grammar valueOf() => {Number[]}
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(0, 0, 200, 50);
         * console.log(box.valueOf()); // [0, 0, 200, 50]
         * ```
         */
            valueOf: function() {
                return [ this.x, this.y, this.width, this.height ];
            },
            /**
         * @method toString()
         * @for kity.Box
         * @description 返回当前盒子的字符串表示
         *
         * @grammar toString() => {String}
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(0, 0, 200, 50);
         * console.log(box.toString()); // "0 0 200 50"
         */
            toString: function() {
                return this.valueOf().join(" ");
            },
            /**
         * @method isEmpty()
         * @for kity.Box
         * @description 判断当前盒子是否具有尺寸（面积大
         *
         * @grammar isEmpty() => {boolean}
         *
         * @example
         * ```js
         * var box = new kity.Box(0, 0, 0, 100000);
         * console.log(box.isEmpty()); // true
         * ```
         */
            isEmpty: function() {
                return !this.width || !this.height;
            }
        });
        /**
     * @method parse()
     * @static
     * @for kity.Box
     * @description 解析一个字符串或数组为 kity.Box 对象
     *
     * @grammar kity.Box.parse(any) => {kity.Box}
     *
     * @param  {Number[]|String} any 要解析的字符串或数组
     *
     * @example
     *
     * ```js
     * console.log(kity.Box.parse('0 0 100 200'));
     * console.log(kity.Box.parse([0, 0, 100, 200]));
     * ```
     */
        Box.parse = function(any) {
            if (typeof any == "string") {
                return Box.parse(any.split(/[\s,]+/).map(parseFloat));
            }
            if (any instanceof Array) {
                return new Box(any[0], any[1], any[2], any[3]);
            }
            if ("x" in any) return new Box(any);
            return null;
        };
        return Box;
    }
};

//src/graphic/circle.js
/**
 * @fileOverview
 *
 * 绘制和使用圆形
 */
_p[26] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Circle
     * @base kity.Ellipse
     * @description 表示一个圆形
     */
        return _p.r(11).createClass("Circle", {
            base: _p.r(33),
            /**
         * @constructor
         * @for kity.Circle
         *
         * @param  {Number} radius 半径
         * @param  {Number} cx     圆心 x 坐标
         * @param  {Number} cy     圆心 y 坐标
         */
            constructor: function(radius, cx, cy) {
                this.callBase(radius, radius, cx, cy);
            },
            /**
         * @method
         * @for kity.Circle
         * @description 获取原型的半径
         */
            getRadius: function() {
                return this.getRadiusX();
            },
            setRadius: function(radius) {
                return this.callBase(radius, radius);
            }
        });
    }
};

//src/graphic/clip.js
/**
 * @fileOverview
 *
 * 支持图形剪辑
 */
_p[27] = {
    value: function(require, exports, module) {
        var Class = _p.r(11);
        var Shape = _p.r(61);
        var Clip = Class.createClass("Clip", {
            base: Shape,
            mixins: [ _p.r(62) ],
            constructor: function() {
                this.callBase("clipPath");
            },
            clip: function(shape) {
                shape.getNode().setAttribute("clip-path", "url(#" + this.getId() + ")");
                return this;
            }
        });
        Class.extendClass(Shape, {
            clipWith: function(clip) {
                clip.clip(this);
                return this;
            }
        });
        return Clip;
    }
};

//src/graphic/color.js
_p[28] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12), StandardColor = _p.r(65), ColorUtils = {}, Color = _p.r(11).createClass("Color", {
            constructor: function() {
                var colorValue = null;
                //parse构造
                if (typeof arguments[0] === "string") {
                    colorValue = ColorUtils.parseToValue(arguments[0]);
                    //解析失败
                    if (colorValue === null) {
                        colorValue = {
                            r: 0,
                            g: 0,
                            b: 0,
                            h: 0,
                            s: 0,
                            l: 0,
                            a: 1
                        };
                    }
                } else {
                    colorValue = {
                        r: arguments[0] | 0,
                        g: arguments[1] | 0,
                        b: arguments[2] | 0,
                        //alpha 默认为1
                        a: parseFloat(arguments[3]) || 1
                    };
                    colorValue = ColorUtils.overflowFormat(colorValue);
                    //获取hsl分量
                    colorValue = Utils.extend(colorValue, ColorUtils.rgbValueToHslValue(colorValue));
                }
                this._color = colorValue;
            },
            set: function(name, value) {
                var values = null;
                //设置的值非法
                if (!Color._MAX_VALUE[name]) {
                    throw new Error("Color set(): Illegal parameter");
                }
                if (name !== "a") {
                    value = Math.floor(value);
                }
                if (name == "h") {
                    value = (value + 360) % 360;
                }
                this._color[name] = Math.max(Color._MIN_VALUE[name], Math.min(Color._MAX_VALUE[name], value));
                if ("rgb".indexOf(name) !== -1) {
                    this._color = Utils.extend(this._color, ColorUtils.rgbValueToHslValue(this._color));
                } else if ("hsl".indexOf(name) !== -1) {
                    this._color = Utils.extend(this._color, ColorUtils.hslValueToRGBValue(this._color));
                }
                return this;
            },
            inc: function(name, value) {
                value = this.get(name) + value;
                if (name == "h") {
                    value = (value + 360) % 360;
                } else {
                    value = Math.min(Color._MAX_VALUE[name], value);
                    value = Math.max(Color._MIN_VALUE[name], value);
                }
                return this.clone().set(name, value);
            },
            dec: function(name, value) {
                return this.inc(name, -value);
            },
            clone: function() {
                return new Color(this.toRGBA());
            },
            get: function(name) {
                if (!Color._MAX_VALUE[name]) {
                    return null;
                }
                return this._color[name];
            },
            getValues: function() {
                return Utils.clone(this._color);
            },
            valueOf: function() {
                return this.getValues();
            },
            toRGB: function() {
                return ColorUtils.toString(this._color, "rgb");
            },
            toRGBA: function() {
                return ColorUtils.toString(this._color, "rgba");
            },
            toHEX: function() {
                return ColorUtils.toString(this._color, "hex");
            },
            toHSL: function() {
                return ColorUtils.toString(this._color, "hsl");
            },
            toHSLA: function() {
                return ColorUtils.toString(this._color, "hsla");
            },
            //默认实现是调用toRGB或者toRGBA
            toString: function() {
                if (this._color.a === 1) {
                    return this.toRGB();
                }
                return this.toRGBA();
            }
        });
        //Color 静态方法
        Utils.extend(Color, {
            //各分量可表示的最大值
            _MAX_VALUE: {
                r: 255,
                g: 255,
                b: 255,
                h: 360,
                s: 100,
                l: 100,
                a: 1
            },
            //各分量最小值
            _MIN_VALUE: {
                r: 0,
                g: 0,
                b: 0,
                h: 0,
                s: 0,
                l: 0,
                a: 0
            },
            //分量常量
            R: "r",
            G: "g",
            B: "b",
            H: "h",
            S: "s",
            L: "l",
            A: "a",
            parse: function(valStr) {
                var rgbValue;
                if (Utils.isString(valStr)) {
                    rgbValue = ColorUtils.parseToValue(valStr);
                }
                if (Utils.isObject(valStr) && "r" in valStr) {
                    rgbValue = valStr;
                }
                //解析失败， 返回一个默认color实例
                if (rgbValue === null) {
                    return new Color();
                }
                return new Color(rgbValue.r, rgbValue.g, rgbValue.b, rgbValue.a);
            },
            createHSL: function(h, s, l) {
                return Color.createHSLA(h, s, l, 1);
            },
            createHSLA: function(h, s, l, a) {
                var colorValue = null;
                s += "%";
                l += "%";
                colorValue = [ "hsla(" + h, s, l, a + ")" ];
                return Color.parse(colorValue.join(", "));
            },
            createRGB: function(r, g, b) {
                return Color.createRGBA(r, g, b, 1);
            },
            createRGBA: function(r, g, b, a) {
                return new Color(r, g, b, a);
            }
        });
        //内部工具对象
        Utils.extend(ColorUtils, {
            parseToValue: function(valStr) {
                var rgbaValue = {};
                /* 优先检测在调色板中是否有对应的颜色 */
                valStr = StandardColor.EXTEND_STANDARD[valStr] || StandardColor.COLOR_STANDARD[valStr] || valStr;
                /* 颜色转换 */
                //hex格式
                if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(valStr)) {
                    rgbaValue = ColorUtils.hexToValue(valStr);
                } else if (/^(rgba?)/i.test(valStr)) {
                    rgbaValue = ColorUtils.rgbaToValue(valStr);
                } else if (/^(hsla?)/i.test(valStr)) {
                    rgbaValue = ColorUtils.hslaToValue(valStr);
                } else {
                    return null;
                }
                return ColorUtils.overflowFormat(rgbaValue);
            },
            hexToValue: function(hexStr) {
                var result = {}, keys = [ "r", "g", "b" ];
                if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hexStr)) {
                    hexStr = RegExp.$1.split("");
                    Utils.each(keys, function(key, index) {
                        if (hexStr.length === 3) {
                            result[key] = ColorUtils.toNumber(hexStr[index] + hexStr[index]);
                        } else {
                            result[key] = ColorUtils.toNumber(hexStr[index * 2] + hexStr[index * 2 + 1]);
                        }
                    });
                    //转换出hsl值
                    result = Utils.extend(result, ColorUtils.rgbValueToHslValue(result));
                    result.a = 1;
                    return result;
                }
                return null;
            },
            rgbaToValue: function(rgbaStr) {
                var result = {}, hasAlpha = false, keys = [ "r", "g", "b" ];
                if (/^(rgba?)/i.test(rgbaStr)) {
                    hasAlpha = RegExp.$1.length === 4;
                    rgbaStr = rgbaStr.replace(/^rgba?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(",");
                    Utils.each(keys, function(key, index) {
                        result[key] = rgbaStr[index] | 0;
                    });
                    //转换出hsl值
                    result = Utils.extend(result, ColorUtils.rgbValueToHslValue(result));
                    result.a = hasAlpha ? parseFloat(rgbaStr[3]) : 1;
                    return result;
                }
                return null;
            },
            hslaToValue: function(hslaStr) {
                var result = {}, hasAlpha = false;
                if (/^(hsla?)/i.test(hslaStr)) {
                    hasAlpha = RegExp.$1.length === 4;
                    hslaStr = hslaStr.replace(/^hsla?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(",");
                    //记录hsl值
                    result.h = hslaStr[0] | 0;
                    result.s = hslaStr[1] | 0;
                    result.l = hslaStr[2] | 0;
                    //转换出rgb值
                    result = Utils.extend(result, ColorUtils.hslValueToRGBValue(result));
                    //hsl值转换为rgb值
                    result = ColorUtils.hslValueToRGBValue(result);
                    result.a = hasAlpha ? parseFloat(hslaStr[3]) : 1;
                    return result;
                }
                return null;
            },
            //hsl值对象转换为rgb值对象
            hslValueToRGBValue: function(hslValue) {
                function trans(v1, v2, vH) {
                    if (vH < 0) {
                        vH += 1;
                    } else if (vH > 1) {
                        vH -= 1;
                    }
                    if (6 * vH < 1) {
                        return v1 + (v2 - v1) * 6 * vH;
                    } else if (2 * vH < 1) {
                        return v2;
                    } else if (3 * vH < 2) {
                        return v1 + (v2 - v1) * ((2 / 3 - vH) * 6);
                    }
                    return v1;
                }
                var q = null, p = null, result = {};
                hslValue = Utils.extend({}, hslValue);
                hslValue.h = hslValue.h / 360;
                hslValue.s = hslValue.s / 100;
                hslValue.l = hslValue.l / 100;
                //分量计算
                if (hslValue.s === 0) {
                    result.r = result.g = result.b = hslValue.l;
                } else {
                    if (hslValue.l < .5) {
                        q = hslValue.l * (1 + hslValue.s);
                    } else {
                        q = hslValue.l + hslValue.s - hslValue.l * hslValue.s;
                    }
                    p = 2 * hslValue.l - q;
                    result.r = trans(p, q, hslValue.h + 1 / 3);
                    result.g = trans(p, q, hslValue.h);
                    result.b = trans(p, q, hslValue.h - 1 / 3);
                }
                result.r = Math.min(Math.round(result.r * 255), 255);
                result.g = Math.min(Math.round(result.g * 255), 255);
                result.b = Math.min(Math.round(result.b * 255), 255);
                return result;
            },
            //rgb值对象转换为hsl值对象
            rgbValueToHslValue: function(rgbValue) {
                var max = null, min = null, result = {};
                rgbValue = Utils.extend({}, rgbValue);
                rgbValue.r = rgbValue.r / 255;
                rgbValue.g = rgbValue.g / 255;
                rgbValue.b = rgbValue.b / 255;
                max = Math.max(rgbValue.r, rgbValue.g, rgbValue.b);
                min = Math.min(rgbValue.r, rgbValue.g, rgbValue.b);
                //h分量计算
                if (max === min) {
                    result.h = 0;
                } else if (max === rgbValue.r) {
                    if (rgbValue.g >= rgbValue.b) {
                        result.h = 60 * (rgbValue.g - rgbValue.b) / (max - min);
                    } else {
                        result.h = 60 * (rgbValue.g - rgbValue.b) / (max - min) + 360;
                    }
                } else if (max === rgbValue.g) {
                    result.h = 60 * (rgbValue.b - rgbValue.r) / (max - min) + 120;
                } else if (max === rgbValue.b) {
                    result.h = 60 * (rgbValue.r - rgbValue.g) / (max - min) + 240;
                }
                //l分量计算
                result.l = (max + min) / 2;
                //s分量计算
                if (result.l === 0 || max === min) {
                    result.s = 0;
                } else if (result.l > 0 && result.l <= .5) {
                    result.s = (max - min) / (max + min);
                } else {
                    result.s = (max - min) / (2 - max - min);
                }
                //格式化hsl结果
                result.h = Math.round(result.h);
                result.s = Math.round(result.s * 100);
                result.l = Math.round(result.l * 100);
                return result;
            },
            toString: function(colorValue, type) {
                var vals = [];
                colorValue = Utils.extend({}, colorValue);
                if (type.indexOf("hsl") !== -1) {
                    colorValue.s += "%";
                    colorValue.l += "%";
                }
                if (type !== "hex") {
                    Utils.each(type.split(""), function(key) {
                        vals.push(colorValue[key]);
                    });
                    return (type + "(" + vals.join(", ") + ")").toLowerCase();
                } else {
                    vals.push(ColorUtils.toHexValue(+colorValue.r));
                    vals.push(ColorUtils.toHexValue(+colorValue.g));
                    vals.push(ColorUtils.toHexValue(+colorValue.b));
                    return ("#" + vals.join("")).toLowerCase();
                }
            },
            //16进制的2个数字转化为10进制， 如果转化失败， 返回0
            toNumber: function(value) {
                return Number("0x" + value) | 0;
            },
            toHexValue: function(value) {
                var result = value.toString(16);
                return result.length === 1 ? "0" + result : result;
            },
            //溢出控制
            overflowFormat: function(value) {
                var tmpValue = Utils.extend({}, value), keys = "rgba";
                Utils.each(keys.split(""), function(key) {
                    if (!tmpValue.hasOwnProperty(key)) {
                        return;
                    }
                    //上溢出
                    tmpValue[key] = Math.min(Color._MAX_VALUE[key], tmpValue[key]);
                    //下溢出
                    tmpValue[key] = Math.max(Color._MIN_VALUE[key], tmpValue[key]);
                });
                return tmpValue;
            }
        });
        return Color;
    }
};

//src/graphic/container.js
_p[29] = {
    value: function(require, exports, module) {
        function itemRemove() {
            this.container.removeItem(this);
            return this;
        }
        return _p.r(11).createClass("Container", {
            getItems: function() {
                return this.items || (this.items = []);
            },
            getItem: function(index) {
                return this.getItems()[index];
            },
            getFirstItem: function() {
                return this.getItem(0);
            },
            getLastItem: function() {
                return this.getItem(this.getItems().length - 1);
            },
            indexOf: function(item) {
                return this.getItems().indexOf(item);
            },
            eachItem: function(fn) {
                var items = this.getItems(), length = items.length, i;
                for (i = 0; i < length; i++) {
                    fn.call(this, i, items[i]);
                }
                return this;
            },
            addItem: function(item, pos, noEvent) {
                var items = this.getItems(), length = items.length;
                if (~items.indexOf(item)) {
                    return this;
                }
                if (!(pos >= 0 && pos < length)) {
                    pos = length;
                }
                items.splice(pos, 0, item);
                if (typeof item === "object") {
                    item.container = this;
                    item.remove = itemRemove;
                }
                this.handleAdd(item, pos);
                if (!noEvent) {
                    this.onContainerChanged("add", [ item ]);
                }
                return this;
            },
            addItems: function(items) {
                for (var i = 0, l = items.length; i < l; i++) {
                    this.addItem(items[i], -1, true);
                }
                this.onContainerChanged("add", items);
                return this;
            },
            setItems: function(items) {
                return this.clear().addItems(items);
            },
            appendItem: function(item) {
                return this.addItem(item);
            },
            prependItem: function(item) {
                return this.addItem(item, 0);
            },
            removeItem: function(pos, noEvent) {
                if (typeof pos !== "number") {
                    return this.removeItem(this.indexOf(pos));
                }
                var items = this.getItems(), length = items.length, item = items[pos];
                if (item === undefined) {
                    return this;
                }
                items.splice(pos, 1);
                if (item.container) {
                    delete item.container;
                }
                if (item.remove) {
                    delete item.remove;
                }
                this.handleRemove(item, pos);
                if (!noEvent) {
                    this.onContainerChanged("remove", [ item ]);
                }
                return this;
            },
            clear: function() {
                var removed = [];
                var item;
                while (item = this.getFirstItem()) {
                    removed.push(item);
                    this.removeItem(0, true);
                }
                this.onContainerChanged("remove", removed);
                return this;
            },
            onContainerChanged: function(type, items) {},
            handleAdd: function(item, index) {},
            handleRemove: function(item, index) {}
        });
    }
};

//src/graphic/curve.js
/*
 * 曲线
 * */
_p[30] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12), CurveUtil = {
            /*
             * 获取由两个以上的点组成的曲线的平移线
             * @param points 曲线上的点的集合， 集合中的点的数量必须大于2
             * @return 平移线数组
             */
            getCurvePanLines: function(points, smoothFactor) {
                //计算原始点的中点坐标
                var centerPoints = CurveUtil.getCenterPoints(points), //注意：计算中点连线的中点坐标， 得出平移线
                panLines = CurveUtil.getPanLine(points.length, centerPoints);
                //平移线移动到顶点
                return CurveUtil.getMovedPanLines(points, panLines, smoothFactor);
            },
            /*
             * 计算给定点集合的连线的中点
             * @param points
             */
            getCenterPoints: function(points) {
                var centerPoints = {}, key = null;
                for (var i = 0, j = 0, len = points.length; i < len; i++) {
                    //j是下一个点的索引
                    j = i === len - 1 ? 0 : i + 1;
                    key = i + "," + j;
                    //计算中点坐标
                    centerPoints[key] = {
                        x: (points[i].x + points[j].y) / 2,
                        y: (points[i].x + points[j].y) / 2
                    };
                }
                return centerPoints;
            },
            /*
             * 对getCenterPoints()接口获取到的数据做处理， 计算出各个顶点对应的平移线数据
             * @param length 集合中点的个数
             * @param points 点集合， 该集合应该是getCenterPoints()接口返回的数据
             */
            getPanLine: function(length, points) {
                var result = {}, //顶点索引
                pointIndex = null;
                for (var i = 0, j; i < length; i++) {
                    var point1 = null, point2 = null;
                    //计算当前点
                    j = (i + 1) % length;
                    //保存当前处理的顶点索引
                    pointIndex = j;
                    point1 = points[i + "," + j];
                    //计算下一个点
                    i = j;
                    j = (i + 1) % length;
                    point2 = points[i + "," + j];
                    result[pointIndex] = {
                        points: [ {
                            x: point1.x,
                            y: point1.y
                        }, {
                            x: point2.x,
                            y: point2.y
                        } ],
                        center: {
                            x: (point1.x + point2.x) / 2,
                            y: (point1.y + point2.y) / 2
                        }
                    };
                    //还原i值
                    i = (pointIndex + length - 1) % length;
                }
                return result;
            },
            /*
             * 计算平移线移动到顶点后的位置
             * @param points 顶点集合
             * @param panLines 平移线集合
             */
            getMovedPanLines: function(points, panLines, smoothFactor) {
                var result = {};
                Utils.each(points, function(point, index) {
                    //当前平移线
                    var currentPanLine = panLines[index], //平移线中点
                    center = currentPanLine.center, //移动距离
                    distance = {
                        x: center.x - point.x,
                        y: center.y - point.y
                    };
                    var currentResult = result[index] = {
                        points: [],
                        center: {
                            x: point.x,
                            y: point.y
                        }
                    };
                    //计算控制点到顶点的距离， 并且应用平滑系数到距离上
                    Utils.each(currentPanLine.points, function(controlPoint, index) {
                        var moved = {
                            x: controlPoint.x - distance.x,
                            y: controlPoint.y - distance.y
                        };
                        var vertex = currentResult.center;
                        var dx = moved.x - vertex.x;
                        var dy = moved.y - vertex.y;
                        moved.x = vertex.x + smoothFactor * dx;
                        moved.y = vertex.y + smoothFactor * dy;
                        currentResult.points.push(moved);
                    });
                });
                return result;
            }
        };
        return _p.r(11).createClass("Curve", {
            base: _p.r(47),
            mixins: [ _p.r(52) ],
            constructor: function(points, isColse) {
                this.callBase();
                this.setPoints(points || []);
                this.closeState = !!isColse;
                this.changeable = true;
                this.smoothFactor = 1;
                this.update();
            },
            //当点集合发生变化时采取的动作
            onContainerChanged: function() {
                if (this.changeable) {
                    this.update();
                }
            },
            setSmoothFactor: function(factor) {
                this.smoothFactor = factor < 0 ? 0 : factor;
                this.update();
                return this;
            },
            getSmoothFactor: function() {
                return this.smoothFactor;
            },
            update: function() {
                var points = this.getPoints(), withControlPoints = null, drawer = this.getDrawer(), curPoint = null, curControlPoint = null, prevControlPoint = null;
                drawer.clear();
                if (points.length === 0) {
                    return this;
                } else {
                    drawer.moveTo(points[0]);
                }
                if (points.length === 1) {
                    return this;
                }
                if (points.length === 2) {
                    drawer.lineTo(points[1]);
                    return this;
                }
                //获取已转换过后的带控制点的所有点
                withControlPoints = CurveUtil.getCurvePanLines(points, this.getSmoothFactor());
                for (var i = 1, len = points.length; i < len; i++) {
                    //当前顶点
                    curPoint = withControlPoints[i].center;
                    //当前控制点
                    if (this.closeState || i != len - 1) {
                        curControlPoint = withControlPoints[i].points[0];
                    } else {
                        //非闭合状态下最后一个点的处理
                        curControlPoint = withControlPoints[i].center;
                    }
                    if (this.closeState || i != 1) {
                        prevControlPoint = withControlPoints[i - 1].points[1];
                    } else {
                        //非闭合状态下第一个点的处理
                        prevControlPoint = withControlPoints[i - 1].center;
                    }
                    drawer.bezierTo(prevControlPoint.x, prevControlPoint.y, curControlPoint.x, curControlPoint.y, curPoint.x, curPoint.y);
                }
                //处理闭合
                if (this.closeState) {
                    curPoint = withControlPoints[0].center;
                    curControlPoint = withControlPoints[0].points[0];
                    prevControlPoint = withControlPoints[points.length - 1].points[1];
                    drawer.bezierTo(prevControlPoint.x, prevControlPoint.y, curControlPoint.x, curControlPoint.y, curPoint.x, curPoint.y);
                }
                return this;
            },
            close: function() {
                this.closeState = true;
                return this.update();
            },
            open: function() {
                this.closeState = false;
                return this.update();
            },
            isClose: function() {
                return !!this.closeState;
            }
        });
    }
};

//src/graphic/data.js
_p[31] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Data", {
            constructor: function() {
                this._data = {};
            },
            setData: function(name, value) {
                this._data[name] = value;
                return this;
            },
            getData: function(name) {
                return this._data[name];
            },
            removeData: function(name) {
                delete this._data[name];
                return this;
            }
        });
    }
};

//src/graphic/defbrush.js
_p[32] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("GradientBrush", {
            base: _p.r(59),
            constructor: function(nodeType) {
                this.callBase(nodeType);
            }
        });
    }
};

//src/graphic/ellipse.js
_p[33] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12), Point = _p.r(51);
        return _p.r(11).createClass("Ellipse", {
            base: _p.r(47),
            constructor: function(rx, ry, cx, cy) {
                this.callBase();
                this.rx = rx || 0;
                this.ry = ry || 0;
                this.cx = cx || 0;
                this.cy = cy || 0;
                this.update();
            },
            update: function() {
                var rx = this.rx, ry = this.ry, x1 = this.cx + rx, x2 = this.cx - rx, y = this.cy;
                var drawer = this.getDrawer();
                drawer.clear();
                drawer.moveTo(x1, y);
                drawer.arcTo(rx, ry, 0, 1, 1, x2, y);
                drawer.arcTo(rx, ry, 0, 1, 1, x1, y);
                return this;
            },
            getRadius: function() {
                return {
                    x: this.rx,
                    y: this.ry
                };
            },
            getRadiusX: function() {
                return this.rx;
            },
            getRadiusY: function() {
                return this.ry;
            },
            getCenter: function() {
                return new Point(this.cx, this.cy);
            },
            getCenterX: function() {
                return this.cx;
            },
            getCenterY: function() {
                return this.cy;
            },
            setRadius: function(rx, ry) {
                this.rx = rx;
                this.ry = ry;
                return this.update();
            },
            setRadiusX: function(rx) {
                this.rx = rx;
                return this.update();
            },
            setRadiusY: function(ry) {
                this.ry = ry;
                return this.update();
            },
            setCenter: function(cx, cy) {
                if (arguments.length == 1) {
                    var p = Point.parse(arguments[0]);
                    cx = p.x;
                    cy = p.y;
                }
                this.cx = cx;
                this.cy = cy;
                return this.update();
            },
            setCenterX: function(cx) {
                this.cx = cx;
                return this.update();
            },
            setCenterY: function(cy) {
                this.cy = cy;
                return this.update();
            }
        });
    }
};

//src/graphic/eventhandler.js
/*
 * kity event 实现
 */
_p[34] = {
    value: function(require, exports, module) {
        // polyfill
        (function() {
            function CustomEvent(event, params) {
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var evt = document.createEvent("CustomEvent");
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        })();
        var Utils = _p.r(12), ShapeEvent = _p.r(63);
        // 内部处理器缓存
        var INNER_HANDLER_CACHE = {}, // 用户处理器缓存
        USER_HANDLER_CACHE = {}, guid = 0;
        // 添加事件统一入口
        function _addEvent(type, handler, isOnce) {
            isOnce = !!isOnce;
            if (Utils.isString(type)) {
                type = type.match(/\S+/g);
            }
            Utils.each(type, function(currentType) {
                listen.call(this, this.node, currentType, handler, isOnce);
            }, this);
            return this;
        }
        // 移除事件统一入口
        function _removeEvent(type, handler) {
            var userHandlerList = null, eventId = this._EVNET_UID, isRemoveAll = handler === undefined;
            userHandlerList = USER_HANDLER_CACHE[eventId][type];
            //移除指定的监听器
            if (!isRemoveAll) {
                isRemoveAll = true;
                Utils.each(userHandlerList, function removeKityEvent(fn, index) {
                    if (fn === handler) {
                        // 不能结束， 需要查找完整个list， 避免丢失移除多次绑定同一个处理器的情况
                        delete userHandlerList[index];
                    } else {
                        isRemoveAll = false;
                    }
                });
            }
            //删除所有监听器
            if (isRemoveAll) {
                deleteDomEvent(this.node, type, INNER_HANDLER_CACHE[eventId][type]);
                delete USER_HANDLER_CACHE[eventId][type];
                delete INNER_HANDLER_CACHE[eventId][type];
            }
            return this;
        }
        // 执行绑定, 该方法context为shape或者mixin了eventhandler的对象
        function listen(node, type, handler, isOnce) {
            var eid = this._EVNET_UID, targetObject = this;
            // 初始化内部监听器
            if (!INNER_HANDLER_CACHE[eid]) {
                INNER_HANDLER_CACHE[eid] = {};
            }
            if (!INNER_HANDLER_CACHE[eid][type]) {
                // 内部监听器
                INNER_HANDLER_CACHE[eid][type] = function kityEventHandler(e) {
                    e = new ShapeEvent(e || window.event);
                    Utils.each(USER_HANDLER_CACHE[eid][type], function executeKityEvent(fn) {
                        var result;
                        if (fn) {
                            result = fn.call(targetObject, e);
                            //once 绑定， 执行完后删除
                            if (isOnce) {
                                targetObject.off(type, fn);
                            }
                        }
                        // 如果用户handler里return了false， 则该节点上的此后的同类型事件将不再执行
                        return result;
                    }, targetObject);
                };
            }
            // 初始化用户监听器列表
            if (!USER_HANDLER_CACHE[eid]) {
                USER_HANDLER_CACHE[eid] = {};
            }
            if (!USER_HANDLER_CACHE[eid][type]) {
                USER_HANDLER_CACHE[eid][type] = [ handler ];
                // 绑定对应类型的事件
                // dom对象利用dom event进行处理， 非dom对象， 由消息分发机制处理
                if (!!node && "on" + type in node) {
                    bindDomEvent(node, type, INNER_HANDLER_CACHE[eid][type]);
                }
            } else {
                USER_HANDLER_CACHE[eid][type].push(handler);
            }
        }
        // 绑定dom事件
        function bindDomEvent(node, type, handler) {
            if (node.addEventListener) {
                node.addEventListener(type, handler, false);
            } else {
                node.attachEvent("on" + type, handler);
            }
        }
        // 删除dom事件
        function deleteDomEvent(node, type, handler) {
            if (node.removeEventListener) {
                node.removeEventListener(type, handler, false);
            } else {
                node.detachEvent(type, handler);
            }
        }
        // 触发dom事件
        function triggerDomEvent(node, type, params) {
            var event = new CustomEvent(type, {
                bubbles: true,
                cancelable: true
            });
            event._kityParam = params;
            node.dispatchEvent(event);
        }
        // 发送消息
        function sendMessage(messageObj, type, msg) {
            var event = null, handler = null;
            var handlers = INNER_HANDLER_CACHE[messageObj._EVNET_UID];
            if (!handlers) return;
            handler = handlers[type];
            if (!handler) {
                return;
            }
            event = Utils.extend({
                type: type,
                target: messageObj
            }, msg || {});
            handler.call(messageObj, event);
        }
        // 对外接口
        return _p.r(11).createClass("EventHandler", {
            constructor: function() {
                this._EVNET_UID = ++guid;
            },
            addEventListener: function(type, handler) {
                return _addEvent.call(this, type, handler, false);
            },
            addOnceEventListener: function(type, handler) {
                return _addEvent.call(this, type, handler, true);
            },
            removeEventListener: function(type, handler) {
                return _removeEvent.call(this, type, handler);
            },
            on: function(type, handler) {
                return this.addEventListener.apply(this, arguments);
            },
            once: function(type, handler) {
                return this.addOnceEventListener.apply(this, arguments);
            },
            off: function() {
                return this.removeEventListener.apply(this, arguments);
            },
            fire: function(type, params) {
                return this.trigger.apply(this, arguments);
            },
            trigger: function(type, params) {
                sendMessage(this, type, params);
                return this;
            }
        });
    }
};

//src/graphic/geometry.js
_p[35] = {
    value: function(require) {
        var utils = _p.r(12);
        var Point = _p.r(51);
        var Vector = _p.r(74);
        var Matrix = _p.r(44);
        var g = {};
        var pathCommand = /([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?\s*)+)/gi, pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/gi, paramCounts = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        };
        function pathClone(path) {
            var result, i, j, segment, segmentCopy;
            result = [];
            for (i = 0; i < path.length; i++) {
                segment = path[i];
                result.push(segmentCopy = []);
                for (j = 0; j < segment.length; j++) {
                    segmentCopy.push(segment[j]);
                }
            }
            if (path.isUniform) result.isUniform = true;
            if (path.isAbsolute) result.isAbsolute = true;
            if (path.isCurve) result.isCurve = true;
            return result;
        }
        // 缓存函数
        // from raphael.js
        function cacher(f, scope, postprocessor) {
            function repush(array, item) {
                for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
                    return array.push(array.splice(i, 1)[0]);
                }
            }
            function newf() {
                var arg = Array.prototype.slice.call(arguments, 0), args = arg.join("␀"), cache = newf.cache = newf.cache || {}, count = newf.count = newf.count || [];
                if (cache.hasOwnProperty(args)) {
                    repush(count, args);
                    return postprocessor ? postprocessor(cache[args]) : cache[args];
                }
                if (count.length >= 1e3) {
                    delete cache[count.shift()];
                }
                count.push(args);
                cache[args] = f.apply(scope, arg);
                return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            return newf;
        }
        /**
     *
     * kity.g.pathToString(pathSegment)
     *
     * 返回表示 PathSegment 的字符串
     *
     * @param  {Array} pathSegment
     *     要表示的 Path Segment
     *
     * @return {String} 表示该 Path 的字符串
     *
     * @example
     *
     *     var pathSegment = [['M', 0, 0], ['L', 10, 10]]
     *     var pathString = kity.g.pathToString(pathSegment);
     *     // 返回 'M0,0L10,10'
     */
        g.pathToString = function(pathSegment) {
            pathSegment = pathSegment || this;
            if (typeof pathSegment == "string") return pathSegment;
            if (pathSegment instanceof Array) {
                pathSegment = utils.flatten(pathSegment);
                return pathSegment.join(",").replace(/,?([achlmqrstvxz]),?/gi, "$1");
            }
        };
        /**
     * kity.g.parsePathString(pathString)
     *
     * 解析 Path 字符串成 PathSegment
     *
     * @copyright rapheal.js
     *
     * @example
     *
     *     var seg = kity.g.parsePathString('M10,12l21-23-21.5,11z');
     *     // 返回: [['M', 10, 12], ['l', 21, -23], ['l', -21.5, 11], ['z']]
     *
     * @param  {String} pathString Path 字符串
     * @return {Array}
     */
        g.parsePathString = cacher(function(pathString) {
            var data = [];
            pathString.replace(pathCommand, function(a, b, c) {
                var params = [], name = b.toLowerCase();
                c.replace(pathValues, function(a, b) {
                    if (b) params.push(+b);
                });
                if (name == "m" && params.length > 2) {
                    data.push([ b ].concat(params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                if (name == "r") {
                    data.push([ b ].concat(params));
                } else {
                    while (params.length >= paramCounts[name]) {
                        data.push([ b ].concat(params.splice(0, paramCounts[name])));
                        if (!paramCounts[name]) {
                            break;
                        }
                    }
                }
            });
            data.isUniform = true;
            data.toString = g.pathToString;
            return data;
        });
        /**
     * kity.g.pathToAbsolute(path)
     *
     * 把路径转换为绝对路径的形式
     *
     * @param {Array|String} path
     *     要转换的 path 路径或者数组
     *
     * @return {Array}
     *     转换后的 Path Segment
     *
     * @example
     *
     *     var path = 'M10,10l50,50';
     *     var absPath = kity.g.pathToAbsolute(path);
     *     // 返回 [['M', 10, 10], ['L', 60, 60]]
     */
        g.pathToAbsolute = cacher(function(path) {
            var pathArray = path.isUniform ? path : g.parsePathString(g.pathToString(path));
            var res = [], x = 0, y = 0, mx = 0, my = 0, start = 0;
            var r, pa, i, j, k, ii, jj, kk;
            if (pathArray[0][0] == "M") {
                x = +pathArray[0][1];
                y = +pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res[0] = [ "M", x, y ];
            }
            for (r, pa, i = start, ii = pathArray.length; i < ii; i++) {
                res.push(r = []);
                pa = pathArray[i];
                if (pa[0] != pa[0].toUpperCase()) {
                    r[0] = pa[0].toUpperCase();
                    switch (r[0]) {
                      case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] + x);
                        r[7] = +(pa[7] + y);
                        break;

                      case "V":
                        r[1] = +pa[1] + y;
                        break;

                      case "H":
                        r[1] = +pa[1] + x;
                        break;

                      case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                        break;

                      default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                    }
                } else {
                    for (k = 0, kk = pa.length; k < kk; k++) {
                        r[k] = pa[k];
                    }
                }
                switch (r[0]) {
                  case "Z":
                    x = mx;
                    y = my;
                    break;

                  case "H":
                    x = r[1];
                    break;

                  case "V":
                    y = r[1];
                    break;

                  case "M":
                    mx = r[r.length - 2];
                    my = r[r.length - 1];
                    break;

                  default:
                    x = r[r.length - 2];
                    y = r[r.length - 1];
                }
            }
            res.isUniform = true;
            res.isAbsolute = true;
            res.toString = g.pathToString;
            return res;
        });
        // 把圆弧绘制的曲线转化为对应的三次贝塞尔形式
        function a2c(x1, y1, rx, ry, angle, laf, sf, x2, y2, recursive) {
            // copy from raphael.js
            // for more information of where this math came from visit:
            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
            var math = Math, PI = math.PI, abs = Math.abs, _120 = PI * 120 / 180, rad = PI / 180 * (+angle || 0), res = [], xy, rotate = function(x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad), Y = x * math.sin(rad) + y * math.cos(rad);
                return {
                    x: X,
                    y: Y
                };
            };
            var cos, sin, h, x, y, rx2, ry2, k, cx, cy, f1, f2, df, f2old, x2old, y2old, c1, s1, c2, s2, t, hx, hy, m1, m2, m3, m4, newres, i, ii;
            if (!recursive) {
                xy = rotate(x1, y1, -rad);
                x1 = xy.x;
                y1 = xy.y;
                xy = rotate(x2, y2, -rad);
                x2 = xy.x;
                y2 = xy.y;
                cos = math.cos(PI / 180 * angle);
                sin = math.sin(PI / 180 * angle);
                x = (x1 - x2) / 2;
                y = (y1 - y2) / 2;
                h = x * x / (rx * rx) + y * y / (ry * ry);
                if (h > 1) {
                    h = math.sqrt(h);
                    rx = h * rx;
                    ry = h * ry;
                }
                rx2 = rx * rx;
                ry2 = ry * ry;
                k = (laf == sf ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)));
                cx = k * rx * y / ry + (x1 + x2) / 2;
                cy = k * -ry * x / rx + (y1 + y2) / 2;
                f1 = math.asin(((y1 - cy) / ry).toFixed(9));
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));
                f1 = x1 < cx ? PI - f1 : f1;
                f2 = x2 < cx ? PI - f2 : f2;
                if (f1 < 0) f1 = PI * 2 + f1;
                if (f2 < 0) f2 = PI * 2 + f2;
                if (sf && f1 > f2) {
                    f1 = f1 - PI * 2;
                }
                if (!sf && f2 > f1) {
                    f2 = f2 - PI * 2;
                }
            } else {
                f1 = recursive[0];
                f2 = recursive[1];
                cx = recursive[2];
                cy = recursive[3];
            }
            df = f2 - f1;
            if (abs(df) > _120) {
                f2old = f2;
                x2old = x2;
                y2old = y2;
                f2 = f1 + _120 * (sf && f2 > f1 ? 1 : -1);
                x2 = cx + rx * math.cos(f2);
                y2 = cy + ry * math.sin(f2);
                res = a2c(x2, y2, rx, ry, angle, 0, sf, x2old, y2old, [ f2, f2old, cx, cy ]);
            }
            df = f2 - f1;
            c1 = math.cos(f1);
            s1 = math.sin(f1);
            c2 = math.cos(f2);
            s2 = math.sin(f2);
            t = math.tan(df / 4);
            hx = 4 / 3 * rx * t;
            hy = 4 / 3 * ry * t;
            m1 = [ x1, y1 ];
            m2 = [ x1 + hx * s1, y1 - hy * c1 ];
            m3 = [ x2 + hx * s2, y2 - hy * c2 ];
            m4 = [ x2, y2 ];
            m2[0] = 2 * m1[0] - m2[0];
            m2[1] = 2 * m1[1] - m2[1];
            if (recursive) {
                return [ m2, m3, m4 ].concat(res);
            } else {
                res = [ m2, m3, m4 ].concat(res).join().split(",");
                newres = [];
                for (i = 0, ii = res.length; i < ii; i++) {
                    newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
                }
                return newres;
            }
        }
        // 把二次贝塞尔曲线参数转化为三次贝塞尔曲线参数
        function q2c(x1, y1, ax, ay, x2, y2) {
            // copy from raphael.js
            var _13 = 1 / 3, _23 = 2 / 3;
            return [ _13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2 ];
        }
        /**
     * kity.g.pathToCurve(path)
     *
     * 把路径转换为贝塞尔路径
     *
     * @param  {Array|String} path
     *     要转换的 path 路径或数组
     *
     * @return {Array}
     *     转换后的 PathSegment，每一段都是 'C'
     */
        g.pathToCurve = cacher(function(path) {
            var i, j, command, param;
            var initPoint, currentPoint, endPoint, shouldClose, lastControlPoint, aussumedControlPoint;
            var controlPoint1, controlPoint2;
            var res = [];
            // 处理的路径要求是一个绝对路径
            if (!path.isAbsolute) path = g.pathToAbsolute(path);
            for (i = 0; i < path.length; i++) {
                command = path[i][0];
                param = path[i].slice(1);
                // 画笔移动
                if (command == "M") {
                    initPoint = lastControlPoint = currentPoint = param;
                    res.push(path[i]);
                    continue;
                }
                // 路径闭合
                if (command == "Z") {
                    shouldClose = true;
                    command = "L";
                    param = initPoint;
                }
                // 绘制命令的目的位置
                endPoint = param.slice(param.length - 2);
                // 对 'H' 命令的修正
                if (command == "H") {
                    endPoint = [ param[0], currentPoint[1] ];
                    command = "L";
                }
                // 对 'V' 命令的修正
                if (command == "V") {
                    endPoint = [ currentPoint[0], param[0] ];
                    command = "L";
                }
                // 对 'S' 命令求出隐含的控制点位置
                if (command == "S" || command == "T") {
                    // 隐含控制点是上一个控制点关于当前位置的镜像
                    aussumedControlPoint = [ currentPoint[0] + (currentPoint[0] - lastControlPoint[0]), currentPoint[1] + (currentPoint[1] - lastControlPoint[1]) ];
                }
                // 针对不同的命令求控制点
                switch (command) {
                  case "L":
                    controlPoint1 = currentPoint;
                    controlPoint2 = endPoint;
                    break;

                  case "C":
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;

                  case "S":
                    controlPoint1 = aussumedControlPoint.slice();
                    controlPoint2 = param.slice(0, 2);
                    break;

                  case "Q":
                    lastControlPoint = param.slice(0, 2);
                    param = q2c.apply(null, currentPoint.concat(param));
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;

                  case "T":
                    param = q2c.apply(null, currentPoint.concat(aussumedControlPoint).concat(param));
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;

                  case "A":
                    param = a2c.apply(null, currentPoint.concat(param));
                    j = 0;
                    while (j in param) {
                        controlPoint1 = param.slice(j, j + 2);
                        controlPoint2 = param.slice(j + 2, j + 4);
                        endPoint = param.slice(j + 4, j + 6);
                        // 写入当前一段曲线
                        res.push([ "C" ].concat(controlPoint1).concat(controlPoint2).concat(endPoint));
                        j += 6;
                    }
                    break;
                }
                if (command != "A") {
                    // 写入当前一段曲线
                    res.push([ "C" ].concat(controlPoint1).concat(controlPoint2).concat(endPoint));
                }
                // 为下次循环准备当前位置
                currentPoint = endPoint;
                // 二次贝塞尔曲线自己已经记录了上个控制点的位置，其它的记录控制点 2 的位置
                if (command != "Q") {
                    lastControlPoint = controlPoint2;
                }
                if (shouldClose) {
                    res.push([ "Z" ]);
                    shouldClose = false;
                }
            }
            res.isUniform = true;
            res.isAbsolute = true;
            res.isCurve = true;
            res.toString = g.pathToString;
            return res;
        });
        /**
     * 将贝塞尔曲线切成两部分
     *
     * @see http://stackoverflow.com/questions/18655135/divide-bezier-curve-into-two-equal-halves
     */
        function cutBezier(bezierArray, t) {
            function __(t) {
                return function(p, q) {
                    return p + t * (q - p);
                };
            }
            var _ = __(t || .5), ba = bezierArray, ax = ba[0], ay = ba[1], bx = ba[2], by = ba[3], cx = ba[4], cy = ba[5], dx = ba[6], dy = ba[7], ex = _(ax, bx), ey = _(ay, by), fx = _(bx, cx), fy = _(by, cy), gx = _(cx, dx), gy = _(cy, dy), hx = _(ex, fx), hy = _(ey, fy), jx = _(fx, gx), jy = _(fy, gy), kx = _(hx, jx), ky = _(hy, jy);
            return [ [ ax, ay, ex, ey, hx, hy, kx, ky ], [ kx, ky, jx, jy, gx, gy, dx, dy ] ];
        }
        /**
     * kity.g.cutBezier(bezierArray, t)
     *
     * 在指定位置把贝塞尔曲线切割为两部分
     *
     * @param {Array} bezierArray
     *     表示贝塞尔曲线的一个数组 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *     p1 和 p2 是贝塞尔曲线的起点和终点，c1 和 c2 是两个控制点
     *
     * @param {Number} t
     *     切割的位置（0 到 1）
     *
     * @return {Array}
     *     切割的两个贝塞尔曲线：[
     *         [p1x1, p1y1, c1x1, c1y1, c2x1, c2y1, p2x1, p2y1],
     *         [p1x2, p1y2, c1x2, c1y2, c2x2, c2y2, p2x2, p2y2]
     *     ]
     *
     */
        g.cutBezier = cacher(cutBezier);
        /**
     * 求一段贝塞尔曲线的子段
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} t
     *     子段的结束位置（0 到 1）
     *
     * @param {Number} t0
     *     字段的开始位置（0 到 t），可不传，默认为 0
     *
     * @return {Array}
     *     长度为 8 的数组，表示给定贝塞尔曲线的子段
     */
        g.subBezier = function(bezierArray, t, t0) {
            var b2t = cutBezier(bezierArray, t)[0];
            return t0 ? cutBezier(b2t, t0 / t)[1] : b2t;
        };
        /**
     * 求贝塞尔曲线上的一个点
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} t
     *     所求点的开始位置（0 到 1）
     *
     * @return {Point} p
     *     p.x: x 坐标
     *     p.y: y 坐标
     *     p.tan: 在 t 处的切线方向（类型为 kity.Vector，模为 1）
     */
        g.pointAtBezier = function(bezierArray, t) {
            var b2t = cutBezier(bezierArray, t)[0];
            var p = Point.parse(b2t.slice(6)), c = Point.parse(b2t.slice(4, 2)), v = Vector.fromPoints(c, p);
            if (t === 0) {
                p.tan = g.pointAtBezier(bezierArray, .01).tan;
            } else {
                p.tan = v.normalize();
            }
            return p;
        };
        /**
     * 求贝塞尔曲线的长度
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} tolerate
     *     允许的误差，默认是 0.1
     *
     * @return {Number} 贝塞尔曲线的长度
     */
        g.bezierLength = cacher(function bezierLength(bezierArray) {
            // 表示（c[0]*t^4 + c[1]*t^3 + c[2]*t^2 + c[3]*t^1 + c[4])^(1/2)的函数
            function f(x) {
                var m = c0 * Math.pow(x, 4) + c1 * Math.pow(x, 3) + c2 * Math.pow(x, 2) + c3 * x + c4;
                if (m < 0) {
                    m = 0;
                }
                return Math.pow(m, .5);
            }
            // 用Newton-Cotes型求积公式
            var arr = bezierArray;
            // 三次贝塞尔曲线函数求导后，求出对应的方程系数，用cx[],cy[]表示x`(t)和y`(t)的系数
            var cx0, cx1, cx2;
            var cy0, cy1, cy2;
            // 用c[]表示x`(t)^2 + y`(t)^2的结果的系数
            var c0, c1, c2, c3, c4;
            // 求x`(t) 和 y`(t)的系数
            cx0 = -3 * arr[0] + 9 * arr[2] - 9 * arr[4] + 3 * arr[6];
            cx1 = 6 * arr[0] - 12 * arr[2] + 6 * arr[4];
            cx2 = -3 * arr[0] + 3 * arr[2];
            cy0 = -3 * arr[1] + 9 * arr[3] - 9 * arr[5] + 3 * arr[7];
            cy1 = 6 * arr[1] - 12 * arr[3] + 6 * arr[5];
            cy2 = -3 * arr[1] + 3 * arr[3];
            // 求x`(t)^2 + y`(t)^2的结果的系数 c[]
            c0 = Math.pow(cx0, 2) + Math.pow(cy0, 2);
            c1 = 2 * (cx0 * cx1 + cy0 * cy1);
            c2 = 2 * (cx0 * cx2 + cy0 * cy2) + Math.pow(cx1, 2) + Math.pow(cy1, 2);
            c3 = 2 * (cx1 * cx2 + cy1 * cy2);
            c4 = Math.pow(cx2, 2) + Math.pow(cy2, 2);
            // 用cotes积分公式求值
            return (f(0) + f(1) + 4 * (f(.125) + f(.375) + f(.625) + f(.875)) + 2 * (f(.25) + f(.5) + f(.75))) / 24;
        });
        // 计算一个 pathSegment 中每一段的在整体中所占的长度范围，以及总长度
        // 方法要求每一段都是贝塞尔曲线
        var getBezierPathSegmentRanges = cacher(function(pathSegment) {
            var i, ii, segment, position, bezierLength, segmentRanges, totalLength;
            segmentRanges = [];
            // 总长度
            totalLength = 0;
            for (i = 0, ii = pathSegment.length; i < ii; i++) {
                segment = pathSegment[i];
                if (segment[0] == "M") {
                    position = segment.slice(1);
                    segmentRanges.push(null);
                    continue;
                }
                if (segment[0] == "Z") {
                    segmentRanges.push(null);
                    continue;
                }
                bezierLength = g.bezierLength(position.concat(segment.slice(1)));
                segmentRanges.push([ totalLength, totalLength + bezierLength ]);
                totalLength += bezierLength;
                // 迭代当前位置
                position = segment.slice(4);
            }
            segmentRanges.totalLength = totalLength;
            return segmentRanges;
        });
        /**
     * 求一段路径的子路径
     *
     * @param  {Array|String} path
     *     原路径
     *
     * @param  {Number} t1
     *     要求的子路径的结束位置（0 到 1）
     *
     * @param  {Number} t0
     *     要求的子路径的开始位置（0 到 t1），可不传，默认为 0
     *
     * @return {Array}
     *     子路径的 PathSegment
     */
        g.subPath = function(path, t1, t0) {
            var dt;
            t0 = t0 || 0;
            dt = t1 - t0;
            dt = dt - (dt | 0);
            t0 = t0 - (t0 | 0);
            t1 = t0 + dt;
            if (t1 > 1) {
                return g.subPath(path, 1, t0).concat(g.subPath(path, t1 - 1));
            }
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            // path 每一段在整体中的长度区间
            var segmentRanges = getBezierPathSegmentRanges(path);
            // path 总长度
            var totalLength = segmentRanges.totalLength;
            // t1 和 t0 位置命中的长度位置
            var t1Length = totalLength * t1, t0Length = totalLength * (t0 || 0);
            // 产生的子路径
            var subPath = [];
            // 迭代变量，a 是一段的长度区间左值，b 是右值，d 是区间长度
            var i, ii, a, b, d;
            var position;
            var bezier, subBezier, stared;
            for (i = 0, ii = path.length; i < ii; i++) {
                if (path[i][0] == "M") {
                    position = path[i].slice(1);
                    if (stared) {
                        subPath.push(path[i].slice());
                    }
                    continue;
                }
                if (path[i][0] == "Z") {
                    // subpath 路径不闭合
                    continue;
                }
                a = segmentRanges[i][0];
                b = segmentRanges[i][1];
                d = b - a;
                bezier = position.concat(path[i].slice(1));
                if (t0Length > b) {
                    // t0 和 t1 都右溢出
                    // -----------------------------------
                    //            t0   t1
                    // |________|
                    //
                    // 需要跳过当前块
                    position = bezier.slice(bezier.length - 2);
                    continue;
                } else if (t0Length >= a) {
                    // 命中 t0；t1 可能命中或右溢出
                    // -----------------------------------
                    //            t0   t1
                    //     |______|__|
                    //
                    //     or:  |_|____|__|
                    //
                    // 取当前块 t0 到 t1 的部分
                    subBezier = g.subBezier(bezier, Math.min((t1Length - a) / d, 1), (t0Length - a) / d);
                    stared = true;
                    position = subBezier.slice(0, 2);
                    subPath.push([ "M" ].concat(subBezier.slice(0, 2)));
                    subPath.push([ "C" ].concat(subBezier.slice(2)));
                } else if (t1Length >= b) {
                    // t0 左溢出；t1 右溢出，整个块是需要的
                    // -----------------------------------
                    //       t0             t1
                    //          |_________|
                    //
                    // 此时取整个块
                    subPath.push(path[i].slice());
                } else if (t1Length >= a) {
                    // t0 左溢出；t1 命中，取当前块 t1 之前的部分
                    // -----------------------------------
                    //            t0   t1
                    //              |__|______|
                    // 取当前块 t1 之前的部分
                    subBezier = g.subBezier(bezier, (t1Length - a) / d);
                    subPath.push([ "C" ].concat(subBezier.slice(2)));
                    stared = false;
                } else {
                    // 没有可以再要的了
                    break;
                }
                position = bezier.slice(bezier.length - 2);
            }
            subPath.isAbsolute = true;
            subPath.isCurve = true;
            subPath.isUniform = true;
            subPath.toString = g.pathToString;
            return subPath;
        };
        /**
     * 求路径上的一个点
     *
     * @param  {Array|String} path
     *     要求点的路径
     *
     * @param  {Number} t
     *     要求的点的位置（0 到 1）
     *
     * @return {Point} p
     *     p.x: x 坐标
     *     p.y: y 坐标
     *     p.tan: 在 t 处的切线方向（类型为 kity.Vector，模为 1）
     */
        g.pointAtPath = function(path, t) {
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            var subPath = g.subPath(path, t);
            var lastCurve = subPath[subPath.length - 1][0] == "Z" ? subPath[subPath.length - 2] : subPath[subPath.length - 1];
            // 跳过 'C' 命令，只留参数
            lastCurve = lastCurve.slice(1);
            var p = Point.parse(lastCurve.slice(4)), c = Point.parse(lastCurve.slice(2, 4));
            p.tan = Vector.fromPoints(c, p).normalize();
            return p;
        };
        /**
     * 求一段路径的长度
     *
     * @param  {string|Array} path
     *     要求的路径
     *
     * @return {Number}
     *     路径的长度
     */
        g.pathLength = cacher(function(path) {
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            // path 每一段在整体中的长度区间
            var segmentRanges = getBezierPathSegmentRanges(path);
            return segmentRanges.totalLength;
        });
        /**
     * 求一段路径的关键点
     *
     * @param  {string|Array} path
     *     要求的路径
     *
     * @return {Array}
     *     关键点的集合
     */
        g.pathKeyPoints = cacher(function(path) {
            var i, ii, command, keyPoints;
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            keyPoints = [];
            for (i = 0, ii = path.length; i < ii; i++) {
                if (path[i][0] == "z") continue;
                keyPoints.push(path[i].slice(path[i].length - 2));
            }
            return keyPoints;
        });
        // 对比两个路径的关键位置，在合适的位置切割合适的路径，使得两个路径的段数一致
        // TODO: 使用插值算法，使对应点更合理
        var alignCurve = cacher(function(path1, path2) {
            if (!path1.isCurve) path1 = g.pathToCurve(path1);
            if (!path2.isCurve) path2 = g.pathToCurve(path2);
            var p1 = pathClone(path1);
            var p2 = pathClone(path2);
            p1.i = 0;
            p2.i = 0;
            p1.o = p2;
            p2.o = p1;
            function command(p, i) {
                return p[i || p.i] && p[i || p.i][0];
            }
            function param(p, i) {
                return p[i || p.i] && p[i || p.i].slice(1);
            }
            function point(p, i) {
                var _param = param(p, i);
                return _param && _param.slice(-2);
            }
            function fixZ(p) {
                if (command(p) == "Z") {
                    p.splice(p.i, 1);
                    return true;
                }
                return false;
            }
            function fixM(p) {
                if (command(p) == "M") {
                    p.o.splice(p.o.i, 0, [ "M" ].concat(point(p.o, p.o.i - 1)));
                    p.i++;
                    p.o.i++;
                    return true;
                }
                return false;
            }
            function fill(p) {
                var lastPoint;
                var i = 1;
                while (!lastPoint) {
                    lastPoint = point(p, p.length - i++);
                }
                p.o.i = p.i;
                while (p.length < p.o.length) {
                    if (fixZ(p.o)) continue;
                    if (fixM(p.o)) continue;
                    p.push([ "C" ].concat(lastPoint).concat(lastPoint).concat(lastPoint));
                    p.i++;
                    p.o.i++;
                }
            }
            while (p1.i < p1.length && p2.i < p2.length) {
                if (fixZ(p1) || fixZ(p2)) continue;
                if (command(p1) == command(p2)) {
                    p1.i++;
                    p2.i++;
                    continue;
                }
                if (fixM(p1) || fixM(p2)) continue;
                p1.i++;
                p2.i++;
            }
            if (p1.i == p1.length) fill(p1);
            if (p2.i == p2.length) fill(p2);
            delete p1.i;
            delete p1.o;
            delete p2.i;
            delete p2.o;
            return [ p1, p2 ];
        });
        g.alignCurve = alignCurve;
        /**
     * 获得两个路径的补间结果
     *
     * @param  {string|Array} path1
     *     补间起始路径
     *
     * @param  {string|Array} path2
     *     补间结束路径
     *
     * @param  {Number} t
     *     补间比例，0 返回跟 path1 等效的结果；1 返回跟 path2 等效的结果
     *
     * @return {PathSegment}
     *     补间的结果
     */
        g.pathTween = function(path1, path2, t) {
            if (t === 0) return path1;
            if (t === 1) return path2;
            var aligned = alignCurve(path1, path2);
            var result = [], seg, i, j;
            path1 = aligned[0];
            path2 = aligned[1];
            for (i = 0; i < path1.length; i++) {
                result.push(seg = []);
                seg.push(path1[i][0]);
                for (j = 1; j < path1[i].length; j++) {
                    seg.push(path1[i][j] + t * (path2[i][j] - path1[i][j]));
                }
            }
            result.isUniform = result.isCurve = result.isAbsolute = true;
            return result;
        };
        /**
     * 变换指定的路径
     *
     * @param  {String|Array} path
     *     需要变换的路径
     *
     * @param  {kity.Matrix} matrix
     *     使用的变换矩阵
     *
     * @return {Array}
     *     变换后的路径
     */
        g.transformPath = cacher(function(path, matrix) {
            var i, ii, j, result, seg, pair;
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            result = [];
            for (i = 0, ii = path.length; i < ii; i++) {
                result.push(seg = [ path[i][0] ]);
                for (j = 1; j < path[i].length; j += 2) {
                    pair = path[i].slice(j, j + 2);
                    pair = matrix.transformPoint(Point.parse(pair));
                    result.push(pair);
                }
            }
            return result;
        });
        // entend
        _p.r(11).extendClass(Matrix, {
            transformPath: function(path) {
                return g.transformPath(path, this);
            }
        });
        return g;
    }
};

//src/graphic/gradientbrush.js
_p[36] = {
    value: function(require, exports, module) {
        var svg = _p.r(68);
        var DefBrush = _p.r(32);
        var Color = _p.r(28);
        return _p.r(11).createClass("GradientBrush", {
            base: DefBrush,
            constructor: function(gradientNodeType) {
                this.callBase(gradientNodeType);
                this.stops = [];
            },
            addStop: function(offset, color, opacity) {
                var gstop = svg.createNode("stop");
                if (!(color instanceof Color)) {
                    color = Color.parse(color);
                }
                if (opacity === undefined) {
                    opacity = color.get("a");
                }
                gstop.setAttribute("offset", offset);
                gstop.setAttribute("stop-color", color.toRGB());
                if (opacity < 1) {
                    gstop.setAttribute("stop-opacity", opacity);
                }
                this.node.appendChild(gstop);
                return this;
            }
        });
    }
};

//src/graphic/group.js
_p[37] = {
    value: function(require, exports, module) {
        var ShapeContainer = _p.r(62);
        return _p.r(11).createClass("Group", {
            mixins: [ ShapeContainer ],
            base: _p.r(61),
            constructor: function Group() {
                this.callBase("g");
            }
        });
    }
};

//src/graphic/hyperlink.js
_p[38] = {
    value: function(require, exports, module) {
        var ShapeContainer = _p.r(62);
        return _p.r(11).createClass("HyperLink", {
            mixins: [ ShapeContainer ],
            base: _p.r(61),
            constructor: function(url) {
                this.callBase("a");
                this.setHref(url);
            },
            setHref: function(href) {
                this.node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", href);
                return this;
            },
            getHref: function() {
                return this.node.getAttributeNS("xlink:href");
            },
            setTarget: function(target) {
                this.node.setAttribute("target", target);
                return this;
            },
            getTarget: function() {
                return this.node.getAttribute("target");
            }
        });
    }
};

//src/graphic/image.js
_p[39] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Image", {
            base: _p.r(61),
            constructor: function(url, width, height, x, y) {
                this.callBase("image");
                this.url = url;
                this.width = width || 0;
                this.height = height || 0;
                this.x = x || 0;
                this.y = y || 0;
                this.update();
            },
            update: function() {
                this.node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.url);
                this.node.setAttribute("x", this.x);
                this.node.setAttribute("y", this.y);
                this.node.setAttribute("width", this.width);
                this.node.setAttribute("height", this.height);
                return this;
            },
            setUrl: function(url) {
                this.url = url === "" ? null : url;
                return this.update();
            },
            getUrl: function() {
                return this.url;
            },
            setWidth: function(width) {
                this.width = width;
                return this.update();
            },
            getWidth: function() {
                return this.width;
            },
            setHeight: function(height) {
                this.height = height;
                return this.update();
            },
            getHeight: function() {
                return this.height;
            },
            setX: function(x) {
                this.x = x;
                return this.update();
            },
            getX: function() {
                return this.x;
            },
            setY: function(y) {
                this.y = y;
                return this.update();
            },
            getY: function() {
                return this.y;
            }
        });
    }
};

//src/graphic/line.js
_p[40] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Line", {
            base: _p.r(47),
            constructor: function(x1, y1, x2, y2) {
                this.callBase();
                this.point1 = {
                    x: x1 || 0,
                    y: y1 || 0
                };
                this.point2 = {
                    x: x2 || 0,
                    y: y2 || 0
                };
                this.update();
            },
            setPoint1: function(x, y) {
                this.point1.x = x;
                this.point1.y = y;
                return this.update();
            },
            setPoint2: function(x, y) {
                this.point2.x = x;
                this.point2.y = y;
                return this.update();
            },
            getPoint1: function() {
                return {
                    x: this.point1.x,
                    y: this.point1.y
                };
            },
            getPoint2: function() {
                return {
                    x: this.point2.x,
                    y: this.point2.y
                };
            },
            update: function() {
                var drawer = this.getDrawer();
                drawer.clear();
                drawer.moveTo(this.point1.x, this.point1.y);
                drawer.lineTo(this.point2.x, this.point2.y);
                return this;
            }
        });
    }
};

//src/graphic/lineargradientbrush.js
_p[41] = {
    value: function(require, exports, module) {
        var className = "LinearGradientBrush";
        var svg = _p.r(68);
        var GradientBrush = _p.r(36);
        return _p.r(11).createClass(className, {
            base: GradientBrush,
            constructor: function(builder) {
                this.callBase("linearGradient");
                this.setStartPosition(0, 0);
                this.setEndPosition(1, 0);
                if (typeof builder == "function") {
                    builder.call(this, this);
                }
            },
            setStartPosition: function(px, py) {
                this.node.setAttribute("x1", px);
                this.node.setAttribute("y1", py);
                return this;
            },
            setEndPosition: function(px, py) {
                this.node.setAttribute("x2", px);
                this.node.setAttribute("y2", py);
                return this;
            },
            getStartPosition: function() {
                return {
                    x: +this.node.getAttribute("x1"),
                    y: +this.node.getAttribute("y1")
                };
            },
            getEndPosition: function() {
                return {
                    x: +this.node.getAttribute("x2"),
                    y: +this.node.getAttribute("y2")
                };
            }
        });
    }
};

//src/graphic/marker.js
_p[42] = {
    value: function(require, exports, module) {
        var Point = _p.r(51);
        var Marker = _p.r(11).createClass("Marker", {
            base: _p.r(59),
            mixins: [ _p.r(62), _p.r(76) ],
            constructor: function() {
                this.callBase("marker");
                this.setOrient("auto");
            },
            setRef: function(x, y) {
                if (arguments.length === 1) {
                    y = x.y;
                    x = x.x;
                }
                this.node.setAttribute("refX", x);
                this.node.setAttribute("refY", y);
                return this;
            },
            getRef: function() {
                return new Point(+this.node.getAttribute("refX"), +this.node.getAttribute("refY"));
            },
            setWidth: function(width) {
                this.node.setAttribute("markerWidth", this.width = width);
                return this;
            },
            setOrient: function(orient) {
                this.node.setAttribute("orient", this.orient = orient);
                return this;
            },
            getOrient: function() {
                return this.orient;
            },
            getWidth: function() {
                return +this.width;
            },
            setHeight: function(height) {
                this.node.setAttribute("markerHeight", this.height = height);
                return this;
            },
            getHeight: function() {
                return +this.height;
            }
        });
        var Path = _p.r(47);
        _p.r(11).extendClass(Path, {
            setMarker: function(marker, pos) {
                pos = pos || "end";
                if (!marker) {
                    this.node.removeAttribute("marker-" + pos);
                } else {
                    this.node.setAttribute("marker-" + pos, marker.toString());
                }
                return this;
            }
        });
        return Marker;
    }
};

//src/graphic/mask.js
/**
 * 蒙板
 */
_p[43] = {
    value: function(require, exports, module) {
        var Class = _p.r(11);
        var Shape = _p.r(61);
        var Mask = Class.createClass("Mask", {
            base: Shape,
            mixins: [ _p.r(62) ],
            constructor: function() {
                this.callBase("mask");
            },
            mask: function(shape) {
                shape.getNode().setAttribute("mask", "url(#" + this.getId() + ")");
                return this;
            }
        });
        Class.extendClass(Shape, {
            maskWith: function(mask) {
                mask.mask(this);
                return this;
            }
        });
        return Mask;
    }
};

//src/graphic/matrix.js
_p[44] = {
    value: function(require, exports, module) {
        var utils = _p.r(12);
        var Box = _p.r(25);
        var mPattern = /matrix\s*\((.+)\)/i;
        var Point = _p.r(51);
        // 注意，合并的结果是先执行m2，再执行m1的结果
        function mergeMatrixData(m2, m1) {
            return {
                a: m1.a * m2.a + m1.c * m2.b,
                b: m1.b * m2.a + m1.d * m2.b,
                c: m1.a * m2.c + m1.c * m2.d,
                d: m1.b * m2.c + m1.d * m2.d,
                e: m1.a * m2.e + m1.c * m2.f + m1.e,
                f: m1.b * m2.e + m1.d * m2.f + m1.f
            };
        }
        function d2r(deg) {
            return deg * Math.PI / 180;
        }
        var Matrix = _p.r(11).createClass("Matrix", {
            constructor: function() {
                if (arguments.length) {
                    this.setMatrix.apply(this, arguments);
                } else {
                    this.setMatrix(1, 0, 0, 1, 0, 0);
                }
            },
            translate: function(x, y) {
                this.m = mergeMatrixData(this.m, {
                    a: 1,
                    c: 0,
                    e: x,
                    b: 0,
                    d: 1,
                    f: y
                });
                return this;
            },
            rotate: function(deg) {
                var rad = d2r(deg);
                var sin = Math.sin(rad), cos = Math.cos(rad);
                this.m = mergeMatrixData(this.m, {
                    a: cos,
                    c: -sin,
                    e: 0,
                    b: sin,
                    d: cos,
                    f: 0
                });
                return this;
            },
            scale: function(sx, sy) {
                if (sy === undefined) {
                    sy = sx;
                }
                this.m = mergeMatrixData(this.m, {
                    a: sx,
                    c: 0,
                    e: 0,
                    b: 0,
                    d: sy,
                    f: 0
                });
                return this;
            },
            skew: function(degX, degY) {
                if (degY === undefined) {
                    degY = degX;
                }
                var tx = Math.tan(d2r(degX)), ty = Math.tan(d2r(degY));
                this.m = mergeMatrixData(this.m, {
                    a: 1,
                    c: tx,
                    e: 0,
                    b: ty,
                    d: 1,
                    f: 0
                });
                return this;
            },
            /**
         * 获得反转矩阵
         *
         * 这是我解方程算出来的
         */
            inverse: function() {
                var m = this.m, a = m.a, b = m.b, c = m.c, d = m.d, e = m.e, f = m.f, k, aa, bb, cc, dd, ee, ff;
                k = a * d - b * c;
                aa = d / k;
                bb = -b / k;
                cc = -c / k;
                dd = a / k;
                ee = (c * f - e * d) / k;
                ff = (b * e - a * f) / k;
                return new Matrix(aa, bb, cc, dd, ee, ff);
            },
            setMatrix: function(a, b, c, d, e, f) {
                if (arguments.length === 1) {
                    this.m = utils.clone(arguments[0]);
                } else {
                    this.m = {
                        a: a,
                        b: b,
                        c: c,
                        d: d,
                        e: e,
                        f: f
                    };
                }
                return this;
            },
            getMatrix: function() {
                return utils.clone(this.m);
            },
            getTranslate: function() {
                var m = this.m;
                return {
                    x: m.e / m.a,
                    y: m.f / m.d
                };
            },
            mergeMatrix: function(matrix) {
                return new Matrix(mergeMatrixData(this.m, matrix.m));
            },
            merge: function(matrix) {
                return this.mergeMatrix(matrix);
            },
            toString: function() {
                return this.valueOf().join(" ");
            },
            valueOf: function() {
                var m = this.m;
                return [ m.a, m.b, m.c, m.d, m.e, m.f ];
            },
            equals: function(matrix) {
                var m1 = this.m, m2 = matrix.m;
                return m1.a == m2.a && m1.b == m2.b && m1.c == m2.c && m1.d == m2.d && m1.e == m2.e && m1.f == m2.f;
            },
            transformPoint: function() {
                return Matrix.transformPoint.apply(null, [].slice.call(arguments).concat([ this.m ]));
            },
            transformBox: function(box) {
                return Matrix.transformBox(box, this.m);
            },
            clone: function() {
                return new Matrix(this.m);
            }
        });
        Matrix.parse = function(str) {
            var match;
            var f = parseFloat;
            if (str instanceof Array) {
                return new Matrix({
                    a: str[0],
                    b: str[1],
                    c: str[2],
                    d: str[3],
                    e: str[4],
                    f: str[5]
                });
            }
            if (match = mPattern.exec(str)) {
                var values = match[1].split(",");
                if (values.length != 6) {
                    values = match[1].split(" ");
                }
                return new Matrix({
                    a: f(values[0]),
                    b: f(values[1]),
                    c: f(values[2]),
                    d: f(values[3]),
                    e: f(values[4]),
                    f: f(values[5])
                });
            }
            return new Matrix();
        };
        Matrix.transformPoint = function(x, y, m) {
            if (arguments.length === 2) {
                m = y;
                y = x.y;
                x = x.x;
            }
            return new Point(m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f);
        };
        Matrix.transformBox = function(box, matrix) {
            var xMin = Number.MAX_VALUE, xMax = -Number.MAX_VALUE, yMin = Number.MAX_VALUE, yMax = -Number.MAX_VALUE;
            var bps = [ [ box.x, box.y ], [ box.x + box.width, box.y ], [ box.x, box.y + box.height ], [ box.x + box.width, box.y + box.height ] ];
            var bp, rp, rps = [];
            while (bp = bps.pop()) {
                rp = Matrix.transformPoint(bp[0], bp[1], matrix);
                rps.push(rp);
                xMin = Math.min(xMin, rp.x);
                xMax = Math.max(xMax, rp.x);
                yMin = Math.min(yMin, rp.y);
                yMax = Math.max(yMax, rp.y);
            }
            box = new Box({
                x: xMin,
                y: yMin,
                width: xMax - xMin,
                height: yMax - yMin
            });
            utils.extend(box, {
                closurePoints: rps
            });
            return box;
        };
        // 获得从 node 到 refer 的变换矩阵
        Matrix.getCTM = function(target, refer) {
            var ctm = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            var node = target.shapeNode || target.node;
            refer = refer || "parent";
            // 根据参照坐标系选区的不一样，返回不同的结果
            switch (refer) {
              case "screen":
                // 以浏览器屏幕为参照坐标系
                ctm = node.getScreenCTM();
                break;

              case "doc":
              case "paper":
                // 以文档（Paper）为参照坐标系
                ctm = node.getCTM();
                break;

              case "view":
              case "top":
                // 以顶层绘图容器（视野）为参照坐标系
                if (target.getPaper()) {
                    ctm = node.getTransformToElement(target.getPaper().shapeNode);
                }
                break;

              case "parent":
                // 以父容器为参照坐标系
                if (target.node.parentNode) {
                    ctm = node.getTransformToElement(target.node.parentNode);
                }
                break;

              default:
                // 其他情况，指定参照物
                if (refer.node) {
                    ctm = node.getTransformToElement(refer.shapeNode || refer.node);
                }
            }
            return ctm ? new Matrix(ctm.a, ctm.b, ctm.c, ctm.d, ctm.e, ctm.f) : new Matrix();
        };
        return Matrix;
    }
};

//src/graphic/palette.js
/**
 * 调色板
 */
_p[45] = {
    value: function(require, exports, module) {
        //标准color
        var StandardColor = _p.r(65), Color = _p.r(28), Utils = _p.r(12);
        var Palette = _p.r(11).createClass("Palette", {
            constructor: function() {
                this.color = {};
            },
            /*
         * 获取颜色名称所对应的颜色值的Color对象
         * @param name 需要获取的颜色名称
         * @return 对应颜色名称的color对象， 如果未找到对应的名称， 则返回null
         */
            get: function(name) {
                var colorValue = this.color[name] || StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || "";
                if (colorValue) {
                    return new Color(colorValue);
                }
                return null;
            },
            /*
         * 获取给定名称的颜色的hex值表示
         * @param name 需要获取的颜色名称
         * @return 如果找到对应的名称， 则返回该名称所对应的hex格式的值， 否则， 返回一个空字符串
         */
            getColorValue: function(name) {
                return this.color[name] || StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || "";
            },
            /*
         * 向调色板实例添加自己独有的颜色名称，对已存在的颜色名称， 将会覆盖掉
         * @param name 新添加的颜色名称
         * @param value 新添加的颜色名称所对应的值， 可以是一个合法的颜色字符串或者是一个color对象
         * @return 新添加的颜色的值
         */
            add: function(name, value) {
                if (typeof value === "string") {
                    this.color[name] = new Color(value).toRGBA();
                } else {
                    this.color[name] = value.toRGBA();
                }
                return value;
            },
            /*
         * 删除调色板实例上用户自己添加的颜色， 该方法不能删除内置的颜色
         * @param name 需要删除的颜色名称
         * @return 删除是否成功的bool值
         */
            remove: function(name) {
                if (this.color.hasOwnProperty(name)) {
                    delete this.color[name];
                    return true;
                }
                return false;
            }
        });
        Utils.extend(Palette, {
            getColor: function(name) {
                var colorValue = StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name];
                if (colorValue) {
                    return new Color(colorValue);
                }
                return null;
            },
            /*
         * 通过给定的名字获取标准的颜色值表示， 返回的值以hex的方式提供
         * @param name 需要获取的标准颜色名称
         * @return 名字所对应的颜色值的hex表示， 如果未找到对应名称的值， 则返回一个空字符串
         */
            getColorValue: function(name) {
                return StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || "";
            },
            /*
         * 向调色板添加颜色名称，新添加的颜色对所有的调色板对象都可见
         * 对已存在的颜色名称， 将会覆盖掉
         * @param name 新添加的颜色名称
         * @param value 新添加的颜色名称所对于的值， 应该是一个hex格式的颜色字符串， 如： ”#ff0000“
         * @return 新添加的颜色的值
         */
            addColor: function(name, value) {
                if (typeof value === "string") {
                    StandardColor.EXTEND_STANDARD[name] = new Color(value).toRGBA();
                } else {
                    StandardColor.EXTEND_STANDARD[name] = value.toRGBA();
                }
                return value;
            },
            /*
         * 删除用户自己添加的颜色， 该方法不能删除内置的颜色， 该方法不会影响调色板实例自由的颜色
         * @param name 需要删除的颜色名称
         * @return 删除是否成功的bool值
         */
            removeColor: function(name) {
                if (StandardColor.EXTEND_STANDARD.hasOwnProperty(name)) {
                    delete StandardColor.EXTEND_STANDARD[name];
                    return true;
                }
                return false;
            }
        });
        return Palette;
    }
};

//src/graphic/paper.js
_p[46] = {
    value: function(require, exports, module) {
        var Class = _p.r(11);
        var utils = _p.r(12);
        var svg = _p.r(68);
        var Container = _p.r(29);
        var ShapeContainer = _p.r(62);
        var ViewBox = _p.r(76);
        var EventHandler = _p.r(34);
        var Styled = _p.r(67);
        var Matrix = _p.r(44);
        var Paper = Class.createClass("Paper", {
            mixins: [ ShapeContainer, EventHandler, Styled, ViewBox ],
            constructor: function(container) {
                this.callBase();
                this.node = this.createSVGNode();
                this.node.paper = this;
                this.node.appendChild(this.resourceNode = svg.createNode("defs"));
                this.node.appendChild(this.shapeNode = svg.createNode("g"));
                this.resources = new Container();
                this.setWidth("100%").setHeight("100%");
                if (container) {
                    this.renderTo(container);
                }
                this.callMixin();
            },
            renderTo: function(container) {
                if (utils.isString(container)) {
                    container = document.getElementById(container);
                }
                this.container = container;
                container.appendChild(this.node);
            },
            createSVGNode: function() {
                var node = svg.createNode("svg");
                node.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                node.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                node.setAttribute("version", "1.1");
                return node;
            },
            getNode: function() {
                return this.node;
            },
            getContainer: function() {
                return this.container;
            },
            getWidth: function() {
                return this.node.clientWidth;
            },
            setWidth: function(width) {
                this.node.setAttribute("width", width);
                return this;
            },
            getHeight: function() {
                return this.node.clientHeight;
            },
            setHeight: function(height) {
                this.node.setAttribute("height", height);
                return this;
            },
            setViewPort: function(cx, cy, zoom) {
                var viewport, box;
                if (arguments.length == 1) {
                    viewport = arguments[0];
                    cx = viewport.center.x;
                    cy = viewport.center.y;
                    zoom = viewport.zoom;
                }
                zoom = zoom || 1;
                box = this.getViewBox();
                var matrix = new Matrix();
                var dx = box.x + box.width / 2 - cx, dy = box.y + box.height / 2 - cy;
                matrix.translate(-cx, -cy);
                matrix.scale(zoom);
                matrix.translate(cx, cy);
                matrix.translate(dx, dy);
                this.shapeNode.setAttribute("transform", "matrix(" + matrix + ")");
                this.viewport = {
                    center: {
                        x: cx,
                        y: cy
                    },
                    offset: {
                        x: dx,
                        y: dy
                    },
                    zoom: zoom
                };
                return this;
            },
            getViewPort: function() {
                if (!this.viewport) {
                    var box = this.getViewBox();
                    return {
                        zoom: 1,
                        center: {
                            x: box.x + box.width / 2,
                            y: box.y + box.height / 2
                        },
                        offset: {
                            x: 0,
                            y: 0
                        }
                    };
                }
                return this.viewport;
            },
            getViewPortMatrix: function() {
                return Matrix.parse(this.shapeNode.getAttribute("transform"));
            },
            getViewPortTransform: function() {
                var m = this.shapeNode.getCTM();
                return new Matrix(m.a, m.b, m.c, m.d, m.e, m.f);
            },
            getTransform: function() {
                return this.getViewPortTransform().reverse();
            },
            addResource: function(resource) {
                this.resources.appendItem(resource);
                if (resource.node) {
                    this.resourceNode.appendChild(resource.node);
                }
                return this;
            },
            removeResource: function(resource) {
                if (resource.remove) {
                    resource.remove();
                }
                if (resource.node) {
                    this.resourceNode.removeChild(resource.node);
                }
                return this;
            },
            getPaper: function() {
                return this;
            }
        });
        var Shape = _p.r(61);
        Class.extendClass(Shape, {
            getPaper: function() {
                var parent = this.container;
                while (parent && parent instanceof Paper === false) {
                    parent = parent.container;
                }
                return parent;
            },
            isAttached: function() {
                return !!this.getPaper();
            },
            whenPaperReady: function(fn) {
                var me = this;
                function check() {
                    var paper = me.getPaper();
                    if (paper && fn) {
                        fn.call(me, paper);
                    }
                    return paper;
                }
                if (!check()) {
                    this.on("add treeadd", function listen() {
                        if (check()) {
                            me.off("add", listen);
                            me.off("treeadd", listen);
                        }
                    });
                }
                return this;
            }
        });
        return Paper;
    }
};

//src/graphic/path.js
_p[47] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12);
        var createClass = _p.r(11).createClass;
        var Shape = _p.r(61);
        var svg = _p.r(68);
        var g = _p.r(35);
        var slice = Array.prototype.slice, flatten = Utils.flatten;
        var PathDrawer = createClass("PathDrawer", {
            constructor: function(path) {
                this.segment = [];
                this.path = path;
                this.__clear = false;
            },
            getPath: function() {
                return this.path;
            },
            redraw: function() {
                this._transation = this._transation || [];
                return this.clear();
            },
            done: function() {
                var transation = this._transation;
                this._transation = null;
                this.push(transation);
                return this;
            },
            clear: function() {
                if (this._transation) {
                    this._transation = [];
                } else {
                    this.path.setPathData("M 0 0");
                }
                this._clear = true;
                return this;
            },
            push: function() {
                var segment = slice.call(arguments);
                var originData;
                if (this._transation) {
                    this._transation.push(segment);
                    return this;
                }
                if (this._clear) {
                    originData = "";
                    this._clear = false;
                } else {
                    originData = this.path.getPathData();
                }
                originData = originData || "";
                this.path.setPathData(originData + g.pathToString(segment));
                return this;
            },
            moveTo: function(x, y) {
                return this.push("M", slice.call(arguments));
            },
            moveBy: function(dx, dy) {
                return this.push("m", slice.call(arguments));
            },
            lineTo: function(x, y) {
                return this.push("L", slice.call(arguments));
            },
            lineBy: function(dx, dy) {
                return this.push("l", slice.call(arguments));
            },
            arcTo: function(rx, ry, xr, laf, sf, x, y) {
                return this.push("A", slice.call(arguments));
            },
            arcBy: function(rx, ry, xr, laf, sf, dx, dy) {
                return this.push("a", arguments);
            },
            carcTo: function(r, laf, sf, x, y) {
                return this.push("A", [ r, r, 0 ].concat(slice.call(arguments, 1)));
            },
            carcBy: function(r, laf, sf, dx, dy) {
                return this.push("a", [ r, r, 0 ].concat(slice.call(arguments, 1)));
            },
            bezierTo: function(x1, y1, x2, y2, x, y) {
                return this.push("C", slice.call(arguments));
            },
            bezierBy: function(dx1, dy1, dx2, dy2, dx, dy) {
                return this.push("c", slice.call(arguments));
            },
            close: function() {
                return this.push("z");
            }
        });
        return createClass("Path", {
            base: Shape,
            constructor: function(data) {
                this.callBase("path");
                if (data) {
                    this.setPathData(data);
                }
                this.node.setAttribute("fill", svg.defaults.fill);
                this.node.setAttribute("stroke", svg.defaults.stroke);
            },
            setPathData: function(data) {
                data = data || "M0,0";
                this.pathdata = g.pathToString(data);
                this.node.setAttribute("d", this.pathdata);
                this.trigger("shapeupdate", {
                    type: "pathdata"
                });
                return this;
            },
            getPathData: function() {
                return this.pathdata || "";
            },
            getDrawer: function() {
                return new PathDrawer(this);
            },
            isClosed: function() {
                var data = this.getPathData();
                return !!~data.indexOf("z") || !!~data.indexOf("Z");
            }
        });
    }
};

//src/graphic/patternbrush.js
_p[48] = {
    value: function(require, exports, module) {
        var DefBrush = _p.r(32);
        var ShapeContainer = _p.r(62);
        var svg = _p.r(68);
        return _p.r(11).createClass("PatternBrush", {
            base: DefBrush,
            mixins: [ ShapeContainer ],
            constructor: function() {
                this.callBase("pattern");
                this.node.setAttribute("patternUnits", "userSpaceOnUse");
            },
            setX: function(x) {
                this.x = x;
                this.node.setAttribute("x", x);
                return this;
            },
            setY: function(y) {
                this.y = y;
                this.node.setAttribute("y", y);
                return this;
            },
            setWidth: function(width) {
                this.width = width;
                this.node.setAttribute("width", width);
                return this;
            },
            setHeight: function(height) {
                this.height = height;
                this.node.setAttribute("height", height);
                return this;
            },
            getWidth: function() {
                return this.width;
            },
            getHeight: function() {
                return this.height;
            }
        });
    }
};

//src/graphic/pen.js
_p[49] = {
    value: function(require, exports, module) {
        var Color = _p.r(28);
        return _p.r(11).createClass("Pen", {
            constructor: function(brush, width) {
                this.brush = brush;
                this.width = width || 1;
                this.linecap = null;
                this.linejoin = null;
                this.dashArray = null;
                this.opacity = 1;
            },
            getBrush: function() {
                return this.brush;
            },
            setBrush: function(brush) {
                this.brush = brush;
                return this;
            },
            setColor: function(color) {
                return this.setBrush(color);
            },
            getColor: function() {
                return this.brush instanceof Color ? this.brush : null;
            },
            getWidth: function() {
                return this.width;
            },
            setWidth: function(width) {
                this.width = width;
                return this;
            },
            getOpacity: function() {
                return this.opacity;
            },
            setOpacity: function(opacity) {
                this.opacity = opacity;
            },
            getLineCap: function() {
                return this.linecap;
            },
            setLineCap: function(linecap) {
                this.linecap = linecap;
                return this;
            },
            getLineJoin: function() {
                return this.linejoin;
            },
            setLineJoin: function(linejoin) {
                this.linejoin = linejoin;
                return this;
            },
            getDashArray: function() {
                return this.dashArray;
            },
            setDashArray: function(dashArray) {
                this.dashArray = dashArray;
                return this;
            },
            stroke: function(shape) {
                var node = shape.node;
                node.setAttribute("stroke", this.brush.toString());
                node.setAttribute("stroke-width", this.getWidth());
                if (this.getOpacity() < 1) {
                    node.setAttribute("stroke-opacity", this.getOpacity());
                }
                if (this.getLineCap()) {
                    node.setAttribute("stroke-linecap", this.getLineCap());
                }
                if (this.getLineJoin()) {
                    node.setAttribute("stroke-linejoin", this.getLineJoin());
                }
                if (this.getDashArray()) {
                    node.setAttribute("stroke-dasharray", this.getDashArray());
                }
            }
        });
    }
};

//src/graphic/pie.js
_p[50] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass({
            base: _p.r(69),
            constructor: function(radius, angle, angleOffset) {
                this.callBase([ 0, radius ], angle, angleOffset);
            },
            getRadius: function() {
                return this.getSectionArray()[1];
            },
            setRadius: function(radius) {
                this.setSectionArray([ 0, radius ]);
            }
        });
    }
};

//src/graphic/point.js
/*
 * 点对象抽象
 */
_p[51] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Point
     * @description 表示一个点
     */
        var Point = _p.r(11).createClass("Point", {
            /**
         * @constructor
         * @for kity.Point
         * @description 指定默认的 x 和 y 创建一个点
         * 
         * @param  {Number} x 点的 x 坐标
         * @param  {Number} y 点的 y 坐标
         */
            constructor: function(x, y) {
                /**
             * @property
             * @for kity.Point
             * @description 表示点的 x 坐标
             * @type {Number}
             */
                this.x = x || 0;
                /**
             * @property
             * @for kity.Point
             * @description 表示点的 y 坐标
             * @type {Number}
             */
                this.y = y || 0;
            },
            offset: function(dx, dy) {
                if (arguments.length == 1) {
                    dy = dx.y;
                    dx = dx.x;
                }
                return new Point(this.x + dx, this.y + dy);
            },
            valueOf: function() {
                return [ this.x, this.y ];
            },
            toString: function() {
                return this.valueOf().join(" ");
            },
            spof: function() {
                return new Point((this.x | 0) + .5, (this.y | 0) + .5);
            },
            round: function() {
                return new Point(this.x | 0, this.y | 0);
            },
            isOrigin: function() {
                return this.x === 0 && this.y === 0;
            }
        });
        /**
     * @static
     * @method fromPolar()
     * @for kity.Point
     * @grammar kity.Point.fromPolar(radius, angle, unit) => kity.Point
     * @param  {Number} radius 极坐标中的半径
     * @param  {Number} angle  极坐标中的角度
     * @param  {String} unit   角度使用的单位，默认为 'deg' (角度)，可以取值为 'rad'，表示传入的是弧度值
     */
        Point.fromPolar = function(radius, angle, unit) {
            if (unit != "rad") {
                // deg to rad
                angle = angle / 180 * Math.PI;
            }
            return new Point(radius * Math.cos(angle), radius * Math.sin(angle));
        };
        Point.parse = function(unknown) {
            if (!unknown) return new Point();
            if (unknown instanceof Point) {
                return unknown;
            }
            if (typeof unknown == "string") {
                return Point.parse(unknown.split(/\s*[\s,]\s*/));
            }
            if ("0" in unknown && "1" in unknown) {
                return new Point(unknown[0], unknown[1]);
            }
        };
        return Point;
    }
};

//src/graphic/pointcontainer.js
/**
 * 点集合容器
 */
_p[52] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("PointContainer", {
            base: _p.r(29),
            constructor: function() {
                this.callBase();
            },
            addPoint: function(point, pos) {
                return this.addItem.apply(this, arguments);
            },
            prependPoint: function() {
                return this.prependItem.apply(this, arguments);
            },
            appendPoint: function() {
                return this.appendItem.apply(this, arguments);
            },
            removePoint: function(pos) {
                return this.removeItem.apply(this, arguments);
            },
            addPoints: function() {
                return this.addItems.apply(this, arguments);
            },
            setPoints: function() {
                return this.setItems.apply(this, arguments);
            },
            getPoint: function() {
                return this.getItem.apply(this, arguments);
            },
            getPoints: function() {
                return this.getItems.apply(this, arguments);
            },
            getFirstPoint: function() {
                return this.getFirstItem.apply(this, arguments);
            },
            getLastPoint: function() {
                return this.getLastItem.apply(this, arguments);
            }
        });
    }
};

//src/graphic/poly.js
/*
 * 通过点来决定图形的公共父类
 */
_p[53] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12);
        return _p.r(11).createClass("Poly", {
            base: _p.r(47),
            mixins: [ _p.r(52) ],
            constructor: function(points, closeable) {
                this.callBase();
                //是否可闭合
                this.closeable = !!closeable;
                this.setPoints(points || []);
                this.changeable = true;
                this.update();
            },
            //当点集合发生变化时采取的动作
            onContainerChanged: function() {
                if (this.changeable) {
                    this.update();
                }
            },
            update: function() {
                var drawer = this.getDrawer(), points = this.getPoints();
                drawer.clear();
                if (!points.length) {
                    return this;
                }
                drawer.moveTo(points[0]);
                for (var i = 1, point, len = points.length; i < len; i++) {
                    point = points[i];
                    drawer.lineTo(point);
                }
                if (this.closeable && points.length > 2) {
                    drawer.close();
                }
                return this;
            }
        });
    }
};

//src/graphic/polygon.js
_p[54] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Polygon", {
            base: _p.r(53),
            constructor: function(points) {
                this.callBase(points, true);
            }
        });
    }
};

//src/graphic/polyline.js
_p[55] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Polyline", {
            base: _p.r(53),
            constructor: function(points) {
                this.callBase(points);
            }
        });
    }
};

//src/graphic/radialgradientbrush.js
_p[56] = {
    value: function(require, exports, module) {
        var GradientBrush = _p.r(36);
        return _p.r(11).createClass("RadialGradientBrush", {
            base: GradientBrush,
            constructor: function(builder) {
                this.callBase("radialGradient");
                this.setCenter(.5, .5);
                this.setFocal(.5, .5);
                this.setRadius(.5);
                if (typeof builder == "function") {
                    builder.call(this, this);
                }
            },
            setCenter: function(cx, cy) {
                this.node.setAttribute("cx", cx);
                this.node.setAttribute("cy", cy);
                return this;
            },
            getCenter: function() {
                return {
                    x: +this.node.getAttribute("cx"),
                    y: +this.node.getAttribute("cy")
                };
            },
            setFocal: function(fx, fy) {
                this.node.setAttribute("fx", fx);
                this.node.setAttribute("fy", fy);
                return this;
            },
            getFocal: function() {
                return {
                    x: +this.node.getAttribute("fx"),
                    y: +this.node.getAttribute("fy")
                };
            },
            setRadius: function(r) {
                this.node.setAttribute("r", r);
                return this;
            },
            getRadius: function() {
                return +this.node.getAttribute("r");
            }
        });
    }
};

//src/graphic/rect.js
_p[57] = {
    value: function(require, exports, module) {
        var RectUtils = {}, Utils = _p.r(12), Point = _p.r(51), Box = _p.r(25);
        Utils.extend(RectUtils, {
            //根据传递进来的width、height和radius属性，
            //获取最适合的radius值
            formatRadius: function(width, height, radius) {
                var minValue = Math.floor(Math.min(width / 2, height / 2));
                return Math.min(minValue, radius);
            }
        });
        /**
     * @class kity.Rect
     * @description 表示一个矩形
     * @base kity.Path
     */
        var Rect = _p.r(11).createClass("Rect", {
            base: _p.r(47),
            /**
         * @constructor
         * @for kity.Rect
         * @grammar new kity.Rect(width, height, x, y, radius)
         * @param  {Number} width  矩形的初始化宽度
         * @param  {Number} height 矩形的初始化高度
         * @param  {Number} x      矩形的初始化 x 坐标
         * @param  {Number} y      矩形的初始化 y 坐标
         * @param  {Number} radius 矩形的初始化圆角大小
         */
            constructor: function(width, height, x, y, radius) {
                this.callBase();
                this.x = x || 0;
                this.y = y || 0;
                this.width = width || 0;
                this.height = height || 0;
                this.radius = RectUtils.formatRadius(this.width, this.height, radius || 0);
                this.update();
            },
            update: function() {
                var x = this.x, y = this.y, w = this.width, h = this.height, r = this.radius;
                var drawer = this.getDrawer().redraw();
                if (!r) {
                    // 直角
                    drawer.push("M", x, y);
                    drawer.push("h", w);
                    drawer.push("v", h);
                    drawer.push("h", -w);
                    drawer.push("z");
                } else {
                    //圆角
                    w -= 2 * r;
                    h -= 2 * r;
                    drawer.push("M", x + r, y);
                    drawer.push("h", w);
                    drawer.push("a", r, r, 0, 0, 1, r, r);
                    drawer.push("v", h);
                    drawer.push("a", r, r, 0, 0, 1, -r, r);
                    drawer.push("h", -w);
                    drawer.push("a", r, r, 0, 0, 1, -r, -r);
                    drawer.push("v", -h);
                    drawer.push("a", r, r, 0, 0, 1, r, -r);
                    drawer.push("z");
                }
                drawer.done();
                return this;
            },
            /**
         * @method setWidth
         * @for kity.Rect
         * @grammar setWidth(width) => kity.Rect
         * @description 设置矩形的宽度，设置后返回矩形实例本身
         * @param {Number} width 宽度值
         *
         * @example
         * ```js
         * rect.setWidth(300);
         * ```
         */
            setWidth: function(width) {
                this.width = width;
                return this.update();
            },
            /**
         * @method setHeight
         * @for  kity.Rect
         * @grammar setHeight(height) => kity.Rect
         * @description 设置矩形的高度，设置后返回矩形实例本身
         * @param {Number} height 高度值
         *
         * @example
         * ```js
         * rect.setHeight(200);
         * ```
         */
            setHeight: function(height) {
                this.height = height;
                return this.update();
            },
            /**
         * @method setSize
         * @for  kity.Rect
         * @grammar setSize(width, height) => kity.Rect
         * @description 设置矩形的尺寸，设置后返回矩形本身
         * @param {Number} width  矩形的宽度值
         * @param {Number} height 矩形的高度值
         *
         * @example
         * ```js
         * rect.setSize(300, 200);
         * ```
         */
            setSize: function(width, height) {
                this.width = width;
                this.height = height;
                return this.update();
            },
            /**
         * @method setBox
         * @for kity.Rect
         * @grammar setBox(box) => kity.Rect
         * @description 使用一个 kity 的盒子数据，
         * @param {kity.Box} box 盒子数据
         */
            setBox: function(box) {
                this.x = box.x;
                this.y = box.y;
                this.width = box.width;
                this.height = box.height;
                return this.update();
            },
            getBox: function() {
                return new Box(this.x, this.y, this.width, this.height);
            },
            getRadius: function() {
                return this.radius;
            },
            setRadius: function(radius) {
                this.radius = RectUtils.formatRadius(this.width, this.height, radius || 0);
                return this.update();
            },
            getPosition: function() {
                return new Point(this.x, this.y);
            },
            setPosition: function(x, y) {
                if (arguments.length == 1) {
                    var p = Point.parse(arguments[0]);
                    y = p.y;
                    x = p.x;
                }
                this.x = x;
                this.y = y;
                return this.update();
            },
            getWidth: function() {
                return this.width;
            },
            getHeight: function() {
                return this.height;
            },
            getPositionX: function() {
                return this.x;
            },
            getPositionY: function() {
                return this.y;
            },
            setPositionX: function(x) {
                this.x = x;
                return this.update();
            },
            setPositionY: function(y) {
                this.y = y;
                return this.update();
            }
        });
        return Rect;
    }
};

//src/graphic/regularpolygon.js
_p[58] = {
    value: function(require, exports, module) {
        var Point = _p.r(51);
        return _p.r(11).createClass("RegularPolygon", {
            base: _p.r(47),
            constructor: function(side, radius, x, y) {
                this.callBase();
                this.radius = radius || 0;
                this.side = Math.max(side || 3, 3);
                if (arguments.length > 2) {
                    if (arguments.length == 3) {
                        y = x.y;
                        x = x.x;
                    }
                }
                this.center = new Point(x, y);
                this.draw();
            },
            getSide: function() {
                return this.side;
            },
            setSide: function(side) {
                this.side = side;
                return this.draw();
            },
            getRadius: function() {
                return this.radius;
            },
            setRadius: function(radius) {
                this.radius = radius;
                return this.draw();
            },
            draw: function() {
                var radius = this.radius, side = this.side, step = Math.PI * 2 / side, drawer = this.getDrawer(), i;
                drawer.clear();
                drawer.moveTo(Point.fromPolar(radius, Math.PI / 2, "rad").offset(this.center));
                for (i = 0; i <= side; i++) {
                    drawer.lineTo(Point.fromPolar(radius, step * i + Math.PI / 2, "rad").offset(this.center));
                }
                drawer.close();
                return this;
            }
        });
    }
};

//src/graphic/resource.js
_p[59] = {
    value: function(require, exports, module) {
        var svg = _p.r(68);
        return _p.r(11).createClass("Resource", {
            constructor: function(nodeType) {
                this.callBase();
                this.node = svg.createNode(nodeType);
            },
            toString: function() {
                return "url(#" + this.node.id + ")";
            }
        });
    }
};

//src/graphic/ring.js
_p[60] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass({
            base: _p.r(69),
            constructor: function(innerRadius, outerRadius) {
                this.callBase([ innerRadius, outerRadius ], 360, 0);
            },
            getInnerRadius: function() {
                return this.getSectionArray()[0];
            },
            getOuterRadius: function() {
                return this.getSectionArray()[1];
            },
            setInnerRadius: function(value) {
                this.setSectionArray([ value, this.getOuterRadius() ]);
            },
            setOuterRadius: function(value) {
                this.setSectionArray([ this.getInnerRadius(), value ]);
            }
        });
    }
};

//src/graphic/shape.js
_p[61] = {
    value: function(require, exports, module) {
        var svg = _p.r(68);
        var utils = _p.r(12);
        var EventHandler = _p.r(34);
        var Styled = _p.r(67);
        var Data = _p.r(31);
        var Matrix = _p.r(44);
        var Pen = _p.r(49);
        var slice = Array.prototype.slice;
        var Box = _p.r(25);
        var Shape = _p.r(11).createClass("Shape", {
            mixins: [ EventHandler, Styled, Data ],
            constructor: function Shape(tagName) {
                this.node = svg.createNode(tagName);
                this.node.shape = this;
                this.transform = {
                    translate: null,
                    rotate: null,
                    scale: null,
                    matrix: null
                };
                this.callMixin();
            },
            getId: function() {
                return this.node.id;
            },
            setId: function(id) {
                this.node.id = id;
                return this;
            },
            getNode: function() {
                return this.node;
            },
            getBoundaryBox: function() {
                var box;
                try {
                    box = this.node.getBBox();
                } catch (e) {
                    box = {
                        x: this.node.clientLeft,
                        y: this.node.clientTop,
                        width: this.node.clientWidth,
                        height: this.node.clientHeight
                    };
                }
                return new Box(box);
            },
            getRenderBox: function(refer) {
                var box = this.getBoundaryBox();
                var matrix = this.getTransform(refer);
                return matrix.transformBox(box);
            },
            getWidth: function() {
                return this.getRenderBox().width;
            },
            getHeight: function() {
                return this.getRenderBox().height;
            },
            getSize: function() {
                var box = this.getRenderBox();
                delete box.x;
                delete box.y;
                return box;
            },
            setOpacity: function(value) {
                this.node.setAttribute("opacity", value);
                return this;
            },
            getOpacity: function() {
                var opacity = this.node.getAttribute("opacity");
                return opacity ? +opacity : 1;
            },
            setVisible: function(value) {
                if (value) {
                    this.node.removeAttribute("display");
                } else {
                    this.node.setAttribute("display", "none");
                }
                return this;
            },
            getVisible: function() {
                this.node.getAttribute("display");
            },
            hasAncestor: function(node) {
                var parent = this.container;
                while (parent) {
                    if (parent === node) {
                        return true;
                    }
                    parent = parent.container;
                }
                return false;
            },
            getTransform: function(refer) {
                return Matrix.getCTM(this, refer);
            },
            clearTransform: function() {
                this.node.removeAttribute("transform");
                this.transform = {
                    translate: null,
                    rotate: null,
                    scale: null,
                    matrix: null
                };
                this.trigger("shapeupdate", {
                    type: "transform"
                });
                return this;
            },
            _applyTransform: function() {
                var t = this.transform, result = [];
                if (t.translate) {
                    result.push([ "translate(", t.translate, ")" ]);
                }
                if (t.rotate) {
                    result.push([ "rotate(", t.rotate, ")" ]);
                }
                if (t.scale) {
                    result.push([ "scale(", t.scale, ")" ]);
                }
                if (t.matrix) {
                    result.push([ "matrix(", t.matrix, ")" ]);
                }
                this.node.setAttribute("transform", utils.flatten(result).join(" "));
                return this;
            },
            setMatrix: function(m) {
                this.transform.matrix = m;
                return this._applyTransform();
            },
            setTranslate: function(t) {
                this.transform.translate = t !== null && slice.call(arguments) || null;
                return this._applyTransform();
            },
            setRotate: function(r) {
                this.transform.rotate = r !== null && slice.call(arguments) || null;
                return this._applyTransform();
            },
            setScale: function(s) {
                this.transform.scale = s !== null && slice.call(arguments) || null;
                return this._applyTransform();
            },
            translate: function(dx, dy) {
                var m = this.transform.matrix || new Matrix();
                if (dy === undefined) {
                    dy = 0;
                }
                this.transform.matrix = m.translate(dx, dy);
                return this._applyTransform();
            },
            rotate: function(deg) {
                var m = this.transform.matrix || new Matrix();
                this.transform.matrix = m.rotate(deg);
                return this._applyTransform();
            },
            scale: function(sx, sy) {
                var m = this.transform.matrix || new Matrix();
                if (sy === undefined) {
                    sy = sx;
                }
                this.transform.matrix = m.scale(sx, sy);
                return this._applyTransform();
            },
            skew: function(sx, sy) {
                var m = this.transform.matrix || new Matrix();
                if (sy === undefined) {
                    sy = sx;
                }
                this.transform.matrix = m.skew(sx, sy);
                return this._applyTransform();
            },
            stroke: function(pen, width) {
                if (pen && pen.stroke) {
                    pen.stroke(this);
                } else if (pen) {
                    // 字符串或重写了 toString 的对象
                    this.node.setAttribute("stroke", pen.toString());
                    if (width) {
                        this.node.setAttribute("stroke-width", width);
                    }
                } else if (pen === null) {
                    this.node.removeAttribute("stroe");
                }
                return this;
            },
            fill: function(brush) {
                // 字符串或重写了 toString 的对象
                if (brush) {
                    this.node.setAttribute("fill", brush.toString());
                }
                if (brush === null) {
                    this.node.removeAttribute("fill");
                }
                return this;
            },
            setAttr: function(a, v) {
                var me = this;
                if (utils.isObject(a)) {
                    utils.each(a, function(val, key) {
                        me.setAttr(key, val);
                    });
                }
                if (v === undefined || v === null || v === "") {
                    this.node.removeAttribute(a);
                } else {
                    this.node.setAttribute(a, v);
                }
                return this;
            },
            getAttr: function(a) {
                return this.node.getAttribute(a);
            }
        });
        return Shape;
    }
};

//src/graphic/shapecontainer.js
_p[62] = {
    value: function(require, exports, module) {
        var Container = _p.r(29);
        var utils = _p.r(12);
        var ShapeContainer = _p.r(11).createClass("ShapeContainer", {
            base: Container,
            isShapeContainer: true,
            /* private */
            handleAdd: function(shape, index) {
                var parent = this.getShapeNode();
                parent.insertBefore(shape.node, parent.childNodes[index] || null);
                shape.trigger("add", {
                    container: this
                });
                if (shape.notifyTreeModification) {
                    shape.notifyTreeModification("treeadd", this);
                }
            },
            /* private */
            handleRemove: function(shape, index) {
                var parent = this.getShapeNode();
                parent.removeChild(shape.node);
                shape.trigger("remove", {
                    container: this
                });
                if (shape.notifyTreeModification) {
                    shape.notifyTreeModification("treeremove", this);
                }
            },
            /* private */
            notifyTreeModification: function(type, container) {
                this.eachItem(function(index, shape) {
                    if (shape.notifyTreeModification) {
                        shape.notifyTreeModification(type, container);
                    }
                    shape.trigger(type, {
                        container: container
                    });
                });
            },
            /* public */
            getShape: function(index) {
                return this.getItem(index);
            },
            /* public */
            addShape: function(shape, index) {
                return this.addItem(shape, index);
            },
            put: function(shape) {
                this.addShape(shape);
                return shape;
            },
            appendShape: function(shape) {
                return this.addShape(shape);
            },
            prependShape: function(shape) {
                return this.addShape(shape, 0);
            },
            replaceShape: function(replacer, origin) {
                var index = this.indexOf(origin);
                if (index === -1) {
                    return;
                }
                this.removeShape(index);
                this.addShape(replacer, index);
                return this;
            },
            addShapeBefore: function(shape, refer) {
                var index = this.indexOf(refer);
                return this.addShape(shape, index);
            },
            addShapeAfter: function(shape, refer) {
                var index = this.indexOf(refer);
                return this.addShape(shape, index === -1 ? undefined : index + 1);
            },
            /* public */
            addShapes: function(shapes) {
                return this.addItems(shapes);
            },
            /* public */
            removeShape: function(index) {
                return this.removeItem(index);
            },
            getShapes: function() {
                return this.getItems();
            },
            getShapesByType: function(name) {
                var shapes = [];
                function getShapes(shape) {
                    if (name.toLowerCase() == shape.getType().toLowerCase()) {
                        shapes.push(shape);
                    }
                    if (shape.isShapeContainer) {
                        utils.each(shape.getShapes(), function(n) {
                            getShapes(n);
                        });
                    }
                }
                getShapes(this);
                return shapes;
            },
            /* public */
            getShapeById: function(id) {
                return this.getShapeNode().getElementById(id).shape;
            },
            arrangeShape: function(shape, index) {
                return this.removeShape(shape).addShape(shape, index);
            },
            /* protected */
            getShapeNode: function() {
                return this.shapeNode || this.node;
            }
        });
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            bringTo: function(index) {
                this.container.arrangeShape(this, index);
                return this;
            },
            bringFront: function() {
                return this.bringTo(this.container.indexOf(this) + 1);
            },
            bringBack: function() {
                return this.bringTo(this.container.indexOf(this) - 1);
            },
            bringTop: function() {
                this.container.removeShape(this).addShape(this);
                return this;
            },
            bringRear: function() {
                return this.bringTo(0);
            },
            bringRefer: function(referShape, offset) {
                if (referShape.container) {
                    if (this.remove) {
                        this.remove();
                    }
                    referShape.container.addShape(this, referShape.container.indexOf(referShape) + (offset || 0));
                }
                return this;
            },
            bringAbove: function(referShape) {
                return this.bringRefer(referShape);
            },
            bringBelow: function(referShape) {
                return this.bringRefer(referShape, 1);
            },
            replaceBy: function(newShape) {
                if (this.container) {
                    newShape.bringAbove(this);
                    this.remove();
                }
                return this;
            }
        });
        return ShapeContainer;
    }
};

//src/graphic/shapeevent.js
/*
 * 图形事件包装类
 * */
_p[63] = {
    value: function(require, exprots, module) {
        var Matrix = _p.r(44), Utils = _p.r(12), Point = _p.r(51);
        return _p.r(11).createClass("ShapeEvent", {
            constructor: function(event) {
                var target = null;
                // dom 事件封装对象
                if (!Utils.isObject(event.target)) {
                    this.type = event.type;
                    target = event.target;
                    // use标签有特殊属性， 需要区别对待
                    if (target.correspondingUseElement) {
                        target = target.correspondingUseElement;
                    }
                    this.originEvent = event;
                    this.targetShape = target.shape || target.paper || event.currentTarget && (event.currentTarget.shape || event.currentTarget.paper);
                    if (event._kityParam) {
                        Utils.extend(this, event._kityParam);
                    }
                } else {
                    Utils.extend(this, event);
                }
            },
            preventDefault: function() {
                var evt = this.originEvent;
                if (!evt) {
                    return true;
                }
                if (evt.preventDefault) {
                    evt.preventDefault();
                    return evt.cancelable;
                } else {
                    evt.returnValue = false;
                    return true;
                }
            },
            //当前鼠标事件在用户坐标系中点击的点的坐标位置
            getPosition: function(refer, touchIndex) {
                if (!this.originEvent) {
                    return null;
                }
                var eventClient = this.originEvent.touches ? this.originEvent.touches[touchIndex || 0] : this.originEvent;
                var target = this.targetShape;
                var targetNode = target.shapeNode || target.node;
                var pScreen = new Point(eventClient && eventClient.clientX || 0, eventClient && eventClient.clientY || 0);
                var pTarget = Matrix.transformPoint(pScreen, targetNode.getScreenCTM().inverse());
                var pRefer = Matrix.getCTM(target, refer || "view").transformPoint(pTarget);
                return pRefer;
            },
            stopPropagation: function() {
                var evt = this.originEvent;
                if (!evt) {
                    return true;
                }
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                } else {
                    evt.cancelBubble = false;
                }
            }
        });
    }
};

//src/graphic/shapepoint.js
/*
 * 图形上的点抽象
 */
_p[64] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("ShapePoint", {
            base: _p.r(51),
            constructor: function(px, py) {
                this.callBase(px, py);
            },
            setX: function(x) {
                return this.setPoint(x, this.y);
            },
            setY: function(y) {
                return this.setPoint(this.x, y);
            },
            setPoint: function(x, y) {
                this.x = x;
                this.y = y;
                this.update();
                return this;
            },
            getPoint: function() {
                return this;
            },
            update: function() {
                if (this.container && this.container.update) {
                    this.container.update();
                }
                return this;
            }
        });
    }
};

//src/graphic/standardcolor.js
/**
 * 标准颜色映射
 */
_p[65] = {
    value: {
        COLOR_STANDARD: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00"
        },
        //标准扩展
        EXTEND_STANDARD: {}
    }
};

//src/graphic/star.js
_p[66] = {
    value: function(require, exports, module) {
        /**
     * @see http://www.jdawiseman.com/papers/easymath/surds_star_inner_radius.html
     */
        var defaultRatioForStar = {
            "3": .2,
            // yy
            "5": .38196601125,
            "6": .57735026919,
            "8": .541196100146,
            "10": .726542528005,
            "12": .707106781187
        };
        var Point = _p.r(51);
        return _p.r(11).createClass("Star", {
            base: _p.r(47),
            constructor: function(vertex, radius, shrink, offset, angleOffset) {
                this.callBase();
                this.vertex = vertex || 3;
                this.radius = radius || 0;
                this.shrink = shrink;
                this.offset = offset || new Point(0, 0);
                this.angleOffset = angleOffset || 0;
                this.draw();
            },
            getVertex: function() {
                return this.vertex;
            },
            setVertex: function(value) {
                this.vertex = value;
                return this.draw();
            },
            getRadius: function() {
                return this.radius;
            },
            setRadius: function(value) {
                this.radius = value;
                return this.draw();
            },
            getShrink: function() {
                return this.shrink;
            },
            setShrink: function(value) {
                this.shrink = value;
                return this.draw();
            },
            getOffset: function() {
                return this.offset;
            },
            setOffset: function(value) {
                this.offset = value;
                return this.draw();
            },
            getAngleOffset: function() {
                return this.angleOffset;
            },
            setAngleOffset: function(value) {
                this.angleOffset = value;
                return this.draw();
            },
            draw: function() {
                var innerRadius = this.radius, outerRadius = this.radius * (this.shrink || defaultRatioForStar[this.vertex] || .5), vertex = this.vertex, offset = this.offset, angleStart = 90, angleStep = 180 / vertex, angleOffset = this.angleOffset, drawer = this.getDrawer(), i, angle;
                drawer.clear();
                drawer.moveTo(Point.fromPolar(outerRadius, angleStart));
                for (i = 1; i <= vertex * 2; i++) {
                    angle = angleStart + angleStep * i;
                    // 绘制内点
                    if (i % 2) {
                        drawer.lineTo(Point.fromPolar(innerRadius, angle + angleOffset).offset(offset));
                    } else {
                        drawer.lineTo(Point.fromPolar(outerRadius, angle));
                    }
                }
                drawer.close();
            }
        });
    }
};

//src/graphic/styled.js
_p[67] = {
    value: function(require, exports, module) {
        // polyfill for ie
        var ClassList = _p.r(11).createClass("ClassList", {
            constructor: function(node) {
                this._node = node;
                this._list = node.className.toString().split(" ");
            },
            _update: function() {
                this._node.className = this._list.join(" ");
            },
            add: function(name) {
                this._list.push(name);
                this._update();
            },
            remove: function(name) {
                var index = this._list.indexOf(name);
                if (~index) {
                    this._list.splice(index, 1);
                }
                this._update();
            },
            contains: function(name) {
                return !!~this._list.indexOf(name);
            }
        });
        function getClassList(node) {
            if (!node.classList) {
                node.classList = new ClassList(node);
            }
            return node.classList;
        }
        return _p.r(11).createClass("Styled", {
            addClass: function(name) {
                getClassList(this.node).add(name);
                return this;
            },
            removeClass: function(name) {
                getClassList(this.node).remove(name);
                return this;
            },
            hasClass: function(name) {
                return getClassList(this.node).contains(name);
            },
            setStyle: function(styles) {
                if (arguments.length == 2) {
                    this.node.style[arguments[0]] = arguments[1];
                    return this;
                }
                for (var name in styles) {
                    if (styles.hasOwnProperty(name)) {
                        this.node.style[name] = styles[name];
                    }
                }
                return this;
            }
        });
    }
};

//src/graphic/svg.js
_p[68] = {
    value: function(require, exports, module) {
        var doc = document;
        var id = 0;
        var svg = {
            createNode: function(name) {
                var node = doc.createElementNS(svg.ns, name);
                node.id = "kity_" + name + "_" + id++;
                return node;
            },
            defaults: {
                stroke: "none",
                fill: "none"
            },
            xlink: "http://www.w3.org/1999/xlink",
            ns: "http://www.w3.org/2000/svg"
        };
        return svg;
    }
};

//src/graphic/sweep.js
_p[69] = {
    value: function(require, exports, module) {
        var Point = _p.r(51);
        return _p.r(11).createClass("Sweep", {
            base: _p.r(47),
            constructor: function(sectionArray, angle, angleOffset) {
                this.callBase();
                this.sectionArray = sectionArray || [];
                this.angle = angle || 0;
                this.angleOffset = angleOffset || 0;
                this.draw();
            },
            getSectionArray: function() {
                return this.sectionArray;
            },
            setSectionArray: function(value) {
                this.sectionArray = value;
                return this.draw();
            },
            getAngle: function() {
                return this.angle;
            },
            setAngle: function(value) {
                this.angle = value;
                return this.draw();
            },
            getAngleOffset: function() {
                return this.angleOffset;
            },
            setAngleOffset: function(value) {
                this.angleOffset = value;
                return this.draw();
            },
            draw: function() {
                var sectionArray = this.sectionArray, i;
                for (i = 0; i < sectionArray.length; i += 2) {
                    this.drawSection(sectionArray[i], sectionArray[i + 1]);
                }
                return this;
            },
            drawSection: function(from, to) {
                var angleLength = this.angle && (this.angle % 360 ? this.angle % 360 : 360), angleStart = this.angleOffset, angleHalf = angleStart + angleLength / 2, angleEnd = angleStart + angleLength, sweepFlag = angleLength < 0 ? 0 : 1, drawer = this.getDrawer();
                drawer.redraw();
                if (angleLength === 0) {
                    drawer.done();
                    return;
                }
                drawer.moveTo(Point.fromPolar(from, angleStart));
                drawer.lineTo(Point.fromPolar(to, angleStart));
                if (to) {
                    drawer.carcTo(to, 0, sweepFlag, Point.fromPolar(to, angleHalf));
                    drawer.carcTo(to, 0, sweepFlag, Point.fromPolar(to, angleEnd));
                }
                drawer.lineTo(Point.fromPolar(from, angleEnd));
                if (from) {
                    drawer.carcTo(from, 0, sweepFlag, Point.fromPolar(from, angleHalf));
                    drawer.carcTo(from, 0, sweepFlag, Point.fromPolar(from, angleStart));
                }
                drawer.close();
                drawer.done();
            }
        });
    }
};

//src/graphic/text.js
_p[70] = {
    value: function(require, exports, module) {
        var TextContent = _p.r(71);
        var ShapeContainer = _p.r(62);
        var svg = _p.r(68);
        var utils = _p.r(12);
        var offsetHash = {};
        function getTextBoundOffset(text) {
            var font = text._cachedFontHash;
            if (offsetHash[font]) {
                return offsetHash[font];
            }
            var textContent = text.getContent();
            text.setContent("百度Fex");
            var bbox = text.getBoundaryBox(), y = text.getY();
            var topOffset = y - bbox.y + +text.node.getAttribute("dy"), bottomOffset = topOffset - bbox.height;
            text.setContent(textContent);
            return offsetHash[font] = {
                top: topOffset,
                bottom: bottomOffset,
                middle: (topOffset + bottomOffset) / 2
            };
        }
        return _p.r(11).createClass("Text", {
            base: TextContent,
            mixins: [ ShapeContainer ],
            constructor: function(content) {
                this.callBase("text");
                if (content !== undefined) {
                    this.setContent(content);
                }
                this._buildFontHash();
            },
            _buildFontHash: function() {
                var style = window.getComputedStyle(this.node);
                this._cachedFontHash = [ style.fontFamily, style.fontSize, style.fontStretch, style.fontStyle, style.fontVariant, style.fontWeight ].join("-");
            },
            _fontChanged: function(font) {
                var last = this._lastFont;
                var current = utils.extend({}, last, font);
                if (!last) {
                    this._lastFont = font;
                    return true;
                }
                var changed = last.family != current.family || last.size != current.size || last.style != current.style || last.weight != current.weight;
                this._lastFont = current;
                return changed;
            },
            setX: function(x) {
                this.node.setAttribute("x", x);
                return this;
            },
            setPosition: function(x, y) {
                return this.setX(x).setY(y);
            },
            setY: function(y) {
                this.node.setAttribute("y", y);
                return this;
            },
            getX: function() {
                return +this.node.getAttribute("x") || 0;
            },
            getY: function() {
                return +this.node.getAttribute("y") || 0;
            },
            setFont: function(font) {
                this.callBase(font);
                if (this._fontChanged(font)) {
                    this._buildFontHash();
                    this.setVerticalAlign(this.getVerticalAlign());
                }
                return this;
            },
            setTextAnchor: function(anchor) {
                this.node.setAttribute("text-anchor", anchor);
                return this;
            },
            getTextAnchor: function() {
                return this.node.getAttribute("text-anchor") || "start";
            },
            // top/bottom/middle/baseline
            setVerticalAlign: function(align) {
                this.whenPaperReady(function() {
                    var dy;
                    switch (align) {
                      case "top":
                        dy = getTextBoundOffset(this).top;
                        break;

                      case "bottom":
                        dy = getTextBoundOffset(this).bottom;
                        break;

                      case "middle":
                        dy = getTextBoundOffset(this).middle;
                        break;

                      default:
                        dy = 0;
                    }
                    this.node.setAttribute("dy", dy);
                });
                this.verticalAlign = align;
                return this;
            },
            getVerticalAlign: function() {
                return this.verticalAlign || "baseline";
            },
            setStartOffset: function(offset) {
                // only for text path
                if (this.shapeNode != this.node) {
                    this.shapeNode.setAttribute("startOffset", offset * 100 + "%");
                }
            },
            addSpan: function(span) {
                this.addShape(span);
                return this;
            },
            setPath: function(path) {
                var textpath = this.shapeNode;
                if (this.shapeNode == this.node) {
                    // 当前还不是 textpath
                    textpath = this.shapeNode = svg.createNode("textPath");
                    while (this.node.firstChild) {
                        this.shapeNode.appendChild(this.node.firstChild);
                    }
                    this.node.appendChild(textpath);
                }
                textpath.setAttributeNS(svg.xlink, "xlink:href", "#" + path.node.id);
                this.setTextAnchor(this.getTextAnchor());
                return this;
            }
        });
    }
};

//src/graphic/textcontent.js
_p[71] = {
    value: function(require, exports, module) {
        var Shape = _p.r(61);
        return _p.r(11).createClass("TextContent", {
            base: Shape,
            constructor: function(nodeType) {
                // call shape constructor
                this.callBase(nodeType);
                this.shapeNode = this.shapeNode || this.node;
                this.shapeNode.setAttribute("text-rendering", "geometricPrecision");
            },
            clearContent: function() {
                while (this.shapeNode.firstChild) {
                    this.shapeNode.removeChild(this.shapeNode.firstChild);
                }
                return this;
            },
            setContent: function(content) {
                this.shapeNode.textContent = content;
                return this;
            },
            getContent: function() {
                return this.shapeNode.textContent;
            },
            appendContent: function(content) {
                this.shapeNode.textContent += content;
                return this;
            },
            setSize: function(value) {
                return this.setFontSize(value);
            },
            setFontSize: function(value) {
                return this.setFont({
                    size: value
                });
            },
            setFontFamily: function(value) {
                return this.setFont({
                    family: value
                });
            },
            setFontBold: function(bold) {
                return this.setFont({
                    weight: bold ? "bold" : "normal"
                });
            },
            setFontItalic: function(italic) {
                return this.setFont({
                    style: italic ? "italic" : "normal"
                });
            },
            setFont: function(font) {
                var node = this.node;
                [ "family", "size", "weight", "style" ].forEach(function(section) {
                    if (font[section] === null) {
                        node.removeAttribute("font-" + section);
                    } else if (font[section]) {
                        node.setAttribute("font-" + section, font[section]);
                    }
                });
                return this;
            },
            getExtentOfChar: function(index) {
                return this.node.getExtentOfChar(index);
            },
            getRotationOfChar: function(index) {
                return this.node.getRotationOfChar(index);
            },
            getCharNumAtPosition: function(x, y) {
                return this.node.getCharNumAtPosition(this.node.viewportElement.createSVGPoint(x, y));
            }
        });
    }
};

//src/graphic/textspan.js
_p[72] = {
    value: function(require, exports, module) {
        var TextContent = _p.r(71);
        var Styled = _p.r(67);
        return _p.r(11).createClass("TextSpan", {
            base: TextContent,
            mixins: [ Styled ],
            constructor: function(content) {
                this.callBase("tspan");
                this.setContent(content);
            }
        });
    }
};

//src/graphic/use.js
/*
 * USE 功能
 */
_p[73] = {
    value: function(require, exports, module) {
        var Svg = _p.r(68);
        var Class = _p.r(11);
        var Use = Class.createClass("Use", {
            base: _p.r(61),
            constructor: function(shape) {
                this.callBase("use");
                this.ref(shape);
            },
            ref: function(shape) {
                if (!shape) {
                    this.node.removeAttributeNS(Svg.xlink, "xlink:href");
                    return this;
                }
                var shapeId = shape.getId();
                if (shapeId) {
                    this.node.setAttributeNS(Svg.xlink, "xlink:href", "#" + shapeId);
                }
                // by techird
                // 作为 Use 的图形，如果没有 fill 和 stroke，移除默认的 'none' 值，用于 Use 覆盖
                if (shape.node.getAttribute("fill") === "none") {
                    shape.node.removeAttribute("fill");
                }
                if (shape.node.getAttribute("stroke") === "none") {
                    shape.node.removeAttribute("stroke");
                }
                return this;
            }
        });
        var Shape = _p.r(61);
        Class.extendClass(Shape, {
            // fast-use
            use: function() {
                return new Use(this);
            }
        });
        return Use;
    }
};

//src/graphic/vector.js
_p[74] = {
    value: function(require, exports, module) {
        var Point = _p.r(51);
        var Matrix = _p.r(44);
        var Vector = _p.r(11).createClass("Vector", {
            base: Point,
            constructor: function(x, y) {
                this.callBase(x, y);
            },
            square: function() {
                return this.x * this.x + this.y * this.y;
            },
            length: function() {
                return Math.sqrt(this.square());
            },
            add: function(q) {
                return new Vector(this.x + q.x, this.y + q.y);
            },
            minus: function(q) {
                return new Vector(this.x - q.x, this.y - q.y);
            },
            dot: function(q) {
                return this.x * q.x + this.y * q.y;
            },
            project: function(q) {
                return q.multipy(this.dot(q) / q.square());
            },
            normalize: function(length) {
                if (length === undefined) {
                    length = 1;
                }
                return this.multipy(length / this.length());
            },
            multipy: function(scale) {
                return new Vector(this.x * scale, this.y * scale);
            },
            rotate: function(angle, unit) {
                if (unit == "rad") {
                    angle = angle / Math.PI * 180;
                }
                var p = new Matrix().rotate(angle).transformPoint(this);
                return new Vector(p.x, p.y);
            },
            vertical: function() {
                return new Vector(this.y, -this.x);
            },
            reverse: function() {
                return this.multipy(-1);
            },
            getAngle: function() {
                var length = this.length();
                if (length === 0) return 0;
                var rad = Math.acos(this.x / length);
                var sign = this.y > 0 ? 1 : -1;
                return sign * 180 * rad / Math.PI;
            }
        });
        Vector.fromPoints = function(p1, p2) {
            return new Vector(p2.x - p1.x, p2.y - p1.y);
        };
        Vector.fromPolar = function() {
            var p = Point.fromPolar.apply(Point, arguments);
            return new Vector(p.x, p.y);
        };
        _p.r(11).extendClass(Point, {
            asVector: function() {
                return new Vector(this.x, this.y);
            }
        });
        return Vector;
    }
};

//src/graphic/view.js
_p[75] = {
    value: function(require, exports, module) {
        var ShapeContainer = _p.r(62);
        var ViewBox = _p.r(76);
        return _p.r(11).createClass("View", {
            mixins: [ ShapeContainer, ViewBox ],
            base: _p.r(75),
            constructor: function() {
                this.callBase("view");
            }
        });
    }
};

//src/graphic/viewbox.js
_p[76] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("ViewBox", {
            getViewBox: function() {
                var attr = this.node.getAttribute("viewBox");
                if (attr === null) {
                    // firefox:
                    // 1. viewBox 没有设置过的时候获得的是 null
                    // 2. svg 标签没有指定绝对大小的时候 clientWidth 和 clientHeigt 为 0，需要在父容器上查找
                    // TODO: 第 2 条取得的不准确（假如有 padding 之类的）
                    return {
                        x: 0,
                        y: 0,
                        width: this.node.clientWidth || this.node.parentNode.clientWidth,
                        height: this.node.clientHeight || this.node.parentNode.clientHeight
                    };
                } else {
                    attr = attr.split(" ");
                    return {
                        x: +attr[0],
                        y: +attr[1],
                        width: +attr[2],
                        height: +attr[3]
                    };
                }
            },
            setViewBox: function(x, y, width, height) {
                this.node.setAttribute("viewBox", [ x, y, width, height ].join(" "));
                return this;
            }
        });
    }
};

//src/kity.js
/**
 * @fileOverview kity 暴露的方法或对象
 */
_p[77] = {
    value: function(require, exports, module) {
        var kity = {}, utils = _p.r(12);
        kity.version = "2.0.0";
        utils.extend(kity, {
            // core
            createClass: _p.r(11).createClass,
            extendClass: _p.r(11).extendClass,
            Utils: utils,
            Browser: _p.r(10),
            // shape
            Box: _p.r(25),
            Bezier: _p.r(23),
            BezierPoint: _p.r(24),
            Circle: _p.r(26),
            Clip: _p.r(27),
            Color: _p.r(28),
            Container: _p.r(29),
            Curve: _p.r(30),
            Ellipse: _p.r(33),
            GradientBrush: _p.r(36),
            Group: _p.r(37),
            HyperLink: _p.r(38),
            Image: _p.r(39),
            Line: _p.r(40),
            LinearGradientBrush: _p.r(41),
            Mask: _p.r(43),
            Matrix: _p.r(44),
            Marker: _p.r(42),
            Palette: _p.r(45),
            Paper: _p.r(46),
            Path: _p.r(47),
            PatternBrush: _p.r(48),
            Pen: _p.r(49),
            Point: _p.r(51),
            PointContainer: _p.r(52),
            Polygon: _p.r(54),
            Polyline: _p.r(55),
            Pie: _p.r(50),
            RadialGradientBrush: _p.r(56),
            Rect: _p.r(57),
            RegularPolygon: _p.r(58),
            Ring: _p.r(60),
            Shape: _p.r(61),
            ShapePoint: _p.r(64),
            ShapeContainer: _p.r(62),
            Sweep: _p.r(69),
            Star: _p.r(66),
            Text: _p.r(70),
            TextSpan: _p.r(72),
            Use: _p.r(73),
            Vector: _p.r(74),
            g: _p.r(35),
            // animate
            Animator: _p.r(0),
            Easing: _p.r(1),
            OpacityAnimator: _p.r(4),
            RotateAnimator: _p.r(6),
            ScaleAnimator: _p.r(7),
            Timeline: _p.r(8),
            TranslateAnimator: _p.r(9),
            PathAnimator: _p.r(5),
            MotionAnimator: _p.r(3),
            requestFrame: _p.r(2).requestFrame,
            releaseFrame: _p.r(2).releaseFrame,
            // filter
            Filter: _p.r(20),
            GaussianblurFilter: _p.r(21),
            ProjectionFilter: _p.r(22),
            // effect
            ColorMatrixEffect: _p.r(13),
            CompositeEffect: _p.r(14),
            ConvolveMatrixEffect: _p.r(15),
            Effect: _p.r(16),
            GaussianblurEffect: _p.r(17),
            OffsetEffect: _p.r(18)
        });
        return window.kity = kity;
    }
};

var moduleMapping = {
    kity: 77
};

function use(name) {
    _p.r([ moduleMapping[name] ]);
}
/* global use, inc: true */

/**
 * 模块暴露
 */
use('kity');
})();
var KityMinder = window.KM = window.KityMinder = function() {
    var instanceMap = {},
        instanceId = 0,
        uuidMap = {};
    return {
        version: '1.3.5',
        uuid: function(name) {
            name = name || 'unknown';
            uuidMap[name] = uuidMap[name] || 0;
            ++uuidMap[name];
            return name + '_' + uuidMap[name];
        },
        createMinder: function(renderTarget, options) {
            options = options || {};
            options.renderTo = Utils.isString(renderTarget) ? document.getElementById(renderTarget) : renderTarget;
            var minder = new Minder(options);
            this.addMinder(options.renderTo, minder);
            return minder;
        },
        addMinder: function(target, minder) {
            var id;
            if (typeof(target) === 'string') {
                id = target;
            } else {
                id = target.id || ("KM_INSTANCE_" + instanceId++);
            }
            instanceMap[id] = minder;
        },
        getMinder: function(target, options) {
            var id;
            if (typeof(target) === 'string') {
                id = target;
            } else {
                id = target.id || ("KM_INSTANCE_" + instanceId++);
            }
            return instanceMap[id] || this.createMinder(target, options);
        },
        //挂接多语言
        LANG: {}
    };
}();
var utils = Utils = KityMinder.Utils = {
    extend: kity.Utils.extend.bind(kity.Utils),

    listen: function(element, type, handler) {
        var types = utils.isArray(type) ? type : utils.trim(type).split(/\s+/),
            k = types.length;
        if (k)
            while (k--) {
                type = types[k];
                if (element.addEventListener) {
                    element.addEventListener(type, handler, false);
                } else {
                    if (!handler._d) {
                        handler._d = {
                            els: []
                        };
                    }
                    var key = type + handler.toString(),
                        index = utils.indexOf(handler._d.els, element);
                    if (!handler._d[key] || index == -1) {
                        if (index == -1) {
                            handler._d.els.push(element);
                        }
                        if (!handler._d[key]) {
                            handler._d[key] = function(evt) {
                                return handler.call(evt.srcElement, evt || window.event);
                            };
                        }
                        element.attachEvent('on' + type, handler._d[key]);
                    }
                }
            }
        element = null;
    },
    trim: function(str) {
        return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
    },
    each: function(obj, iterator, context) {
        if (obj == null) return;
        if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (iterator.call(context, i, obj[i], obj) === false)
                    return false;
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (iterator.call(context, key, obj[key], obj) === false)
                        return false;
                }
            }
        }
    },
    addCssRule: function(key, style, doc) {
        var head, node;
        if (style === undefined || style && style.nodeType && style.nodeType == 9) {
            //获取样式
            doc = style && style.nodeType && style.nodeType == 9 ? style : (doc || document);
            node = doc.getElementById(key);
            return node ? node.innerHTML : undefined;
        }
        doc = doc || document;
        node = doc.getElementById(key);

        //清除样式
        if (style === '') {
            if (node) {
                node.parentNode.removeChild(node);
                return true
            }
            return false;
        }

        //添加样式
        if (node) {
            node.innerHTML = style;
        } else {
            node = doc.createElement('style');
            node.id = key;
            node.innerHTML = style;
            doc.getElementsByTagName('head')[0].appendChild(node);
        }
    },
    keys: function(plain) {
        var keys = [];
        for (var key in plain) {
            if (plain.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    },
    proxy: function(fn, context) {
        return function() {
            return fn.apply(context, arguments);
        };
    },
    indexOf: function(array, item, start) {
        var index = -1;
        start = this.isNumber(start) ? start : 0;
        this.each(array, function(v, i) {
            if (i >= start && v === item) {
                index = i;
                return false;
            }
        });
        return index;
    },
    argsToArray: function(args, index) {
        return Array.prototype.slice.call(args, index || 0);
    },
    clonePlainObject: function(source, target) {
        var tmp;
        target = target || {};
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                tmp = source[i];
                if (utils.isObject(tmp) || utils.isArray(tmp)) {
                    target[i] = utils.isArray(tmp) ? [] : {};
                    utils.clonePlainObject(source[i], target[i])
                } else {
                    target[i] = tmp;
                }
            }
        }
        return target;
    },
    compareObject: function(source, target) {
        var tmp;
        if (this.isEmptyObject(source) !== this.isEmptyObject(target)) {
            return false
        }
        if (this.getObjectLength(source) != this.getObjectLength(target)) {
            return false;
        }
        for (var p in source) {
            if (source.hasOwnProperty(p)) {
                tmp = source[p];
                if (target[p] === undefined) {
                    return false;
                }
                if (this.isObject(tmp) || this.isArray(tmp)) {
                    if (this.isObject(target[p]) !== this.isObject(tmp)) {
                        return false;
                    }
                    if (this.isArray(tmp) !== this.isArray(target[p])) {
                        return false;
                    }
                    if (this.compareObject(tmp, target[p]) === false) {
                        return false
                    }
                } else {
                    if (tmp != target[p]) {
                        return false
                    }
                }
            }
        }
        return true;
    },
    getObjectLength: function(obj) {
        if (this.isArray(obj) || this.isString(obj)) return obj.length;
        var count = 0;
        for (var key in obj)
            if (obj.hasOwnProperty(key)) count++;
        return count;
    },
    isEmptyObject: function(obj) {
        if (obj == null) return true;
        if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
        for (var key in obj)
            if (obj.hasOwnProperty(key)) return false;
        return true;
    },
    loadFile: function() {
        var tmpList = [];

        function getItem(doc, obj) {
            try {
                for (var i = 0, ci; ci = tmpList[i++];) {
                    if (ci.doc === doc && ci.url == (obj.src || obj.href)) {
                        return ci;
                    }
                }
            } catch (e) {
                return null;
            }

        }

        return function(doc, obj, fn) {
            var item = getItem(doc, obj);
            if (item) {
                if (item.ready) {
                    fn && fn();
                } else {
                    item.funs.push(fn)
                }
                return;
            }
            tmpList.push({
                doc: doc,
                url: obj.src || obj.href,
                funs: [fn]
            });
            if (!doc.body) {
                var html = [];
                for (var p in obj) {
                    if (p == 'tag') continue;
                    html.push(p + '="' + obj[p] + '"')
                }
                doc.write('<' + obj.tag + ' ' + html.join(' ') + ' ></' + obj.tag + '>');
                return;
            }
            if (obj.id && doc.getElementById(obj.id)) {
                return;
            }
            var element = doc.createElement(obj.tag);
            delete obj.tag;
            for (var p in obj) {
                element.setAttribute(p, obj[p]);
            }
            element.onload = element.onreadystatechange = function() {
                if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    item = getItem(doc, obj);
                    if (item.funs.length > 0) {
                        item.ready = 1;
                        for (var fi; fi = item.funs.pop();) {
                            fi();
                        }
                    }
                    element.onload = element.onreadystatechange = null;
                }
            };
            //            element.onerror = function () {
            //                throw Error('The load ' + (obj.href || obj.src) + ' fails,check the url settings of file ')
            //            };
            doc.getElementsByTagName("head")[0].appendChild(element);
        }
    }(),
    clone: function(source, target) {
        var tmp;
        target = target || {};
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                tmp = source[i];
                if (typeof tmp == 'object') {
                    target[i] = utils.isArray(tmp) ? [] : {};
                    utils.clone(source[i], target[i])
                } else {
                    target[i] = tmp;
                }
            }
        }
        return target;
    },
    unhtml: function(str, reg) {
        return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(a, b) {
            if (b) {
                return a;
            } else {
                return {
                    '<': '&lt;',
                    '&': '&amp;',
                    '"': '&quot;',
                    '>': '&gt;',
                    "'": '&#39;'
                }[a]
            }
        }) : '';
    },
    cloneArr:function(arr){
        return [].concat(arr);
    },
    clearWhitespace:function(str){
        return str.replace(/[\u200b\t\r\n]/g, '');
    },
    getValueByIndex:function(data,index){

        var initIndex = 0,result = 0;

        utils.each(data,function(i,arr){
            if(initIndex + arr.length >= index){

                if(index - initIndex == arr.length){
                    if(arr.length == 1 && arr[0].width === 0){
                        initIndex++;
                        return;
                    }
                    result = {
                        x: arr[arr.length - 1].x + arr[arr.length - 1].width,
                        y: arr[arr.length - 1].y
                    };
                }else{
                    result = arr[index - initIndex];
                }

                return false;
            }else{
                initIndex += arr.length + (arr.length == 1 && arr[0].width === 0 ? 0 : 1);
            }
        });
        return result;
    },
    getNodeIndex:function (node, ignoreTextNode) {
        var preNode = node,
            i = 0;
        while (preNode = preNode.previousSibling) {
            if (ignoreTextNode && preNode.nodeType == 3) {
                if(preNode.nodeType != preNode.nextSibling.nodeType ){
                    i++;
                }
                continue;
            }
            i++;
        }
        return i;
    }


};

Utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object'], function(i, v) {
    KityMinder.Utils['is' + v] = function(obj) {
        return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
    }
});
/**
 * 提供浏览器检测的模块
 * @unfile
 * @module KM.browser
 */
var browser = KityMinder.browser = function(){
    var agent = navigator.userAgent.toLowerCase(),
        opera = window.opera,
        browser = {
        /**
         * @property {boolean} ie 检测当前浏览器是否为IE
         * @example
         * ```javascript
         * if ( UE.browser.ie ) {
         *     console.log( '当前浏览器是IE' );
         * }
         * ```
         */
        ie		:  /(msie\s|trident.*rv:)([\w.]+)/.test(agent),

        /**
         * @property {boolean} opera 检测当前浏览器是否为Opera
         * @example
         * ```javascript
         * if ( UE.browser.opera ) {
         *     console.log( '当前浏览器是Opera' );
         * }
         * ```
         */
        opera	: ( !!opera && opera.version ),

        /**
         * @property {boolean} webkit 检测当前浏览器是否是webkit内核的浏览器
         * @example
         * ```javascript
         * if ( UE.browser.webkit ) {
         *     console.log( '当前浏览器是webkit内核浏览器' );
         * }
         * ```
         */
        webkit	: ( agent.indexOf( ' applewebkit/' ) > -1 ),

        /**
         * @property {boolean} mac 检测当前浏览器是否是运行在mac平台下
         * @example
         * ```javascript
         * if ( UE.browser.mac ) {
         *     console.log( '当前浏览器运行在mac平台下' );
         * }
         * ```
         */
        mac	: ( agent.indexOf( 'macintosh' ) > -1 ),

        /**
         * @property {boolean} quirks 检测当前浏览器是否处于“怪异模式”下
         * @example
         * ```javascript
         * if ( UE.browser.quirks ) {
         *     console.log( '当前浏览器运行处于“怪异模式”' );
         * }
         * ```
         */
        quirks : ( document.compatMode == 'BackCompat' ),

        ipad :  ( agent.indexOf( 'ipad' ) > -1 )
    };

    /**
    * @property {boolean} gecko 检测当前浏览器内核是否是gecko内核
    * @example
    * ```javascript
    * if ( UE.browser.gecko ) {
    *     console.log( '当前浏览器内核是gecko内核' );
    * }
    * ```
    */
    browser.gecko =( navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie);

    var version = 0;

    // Internet Explorer 6.0+
    if ( browser.ie ){

        var v1 =  agent.match(/(?:msie\s([\w.]+))/);
        var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
        if(v1 && v2 && v1[1] && v2[1]){
            version = Math.max(v1[1]*1,v2[1]*1);
        }else if(v1 && v1[1]){
            version = v1[1]*1;
        }else if(v2 && v2[1]){
            version = v2[1]*1;
        }else{
            version = 0;
        }

        browser.ie11Compat = document.documentMode == 11;
        /**
         * @property { boolean } ie9Compat 检测浏览器模式是否为 IE9 兼容模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.ie9Compat ) {
         *     console.log( '当前浏览器运行在IE9兼容模式下' );
         * }
         * ```
         */
        browser.ie9Compat = document.documentMode == 9;

        /**
         * @property { boolean } ie8 检测浏览器是否是IE8浏览器
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.ie8 ) {
         *     console.log( '当前浏览器是IE8浏览器' );
         * }
         * ```
         */
        browser.ie8 = !!document.documentMode;

        /**
         * @property { boolean } ie8Compat 检测浏览器模式是否为 IE8 兼容模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.ie8Compat ) {
         *     console.log( '当前浏览器运行在IE8兼容模式下' );
         * }
         * ```
         */
        browser.ie8Compat = document.documentMode == 8;

        /**
         * @property { boolean } ie7Compat 检测浏览器模式是否为 IE7 兼容模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.ie7Compat ) {
         *     console.log( '当前浏览器运行在IE7兼容模式下' );
         * }
         * ```
         */
        browser.ie7Compat = ( ( version == 7 && !document.documentMode )
                || document.documentMode == 7 );

        /**
         * @property { boolean } ie6Compat 检测浏览器模式是否为 IE6 模式 或者怪异模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.ie6Compat ) {
         *     console.log( '当前浏览器运行在IE6模式或者怪异模式下' );
         * }
         * ```
         */
        browser.ie6Compat = ( version < 7 || browser.quirks );

        browser.ie9above = version > 8;

        browser.ie9below = version < 9;

    }

    // Gecko.
    if ( browser.gecko ){
        var geckoRelease = agent.match( /rv:([\d\.]+)/ );
        if ( geckoRelease )
        {
            geckoRelease = geckoRelease[1].split( '.' );
            version = geckoRelease[0] * 10000 + ( geckoRelease[1] || 0 ) * 100 + ( geckoRelease[2] || 0 ) * 1;
        }
    }

    /**
     * @property { Number } chrome 检测当前浏览器是否为Chrome, 如果是，则返回Chrome的大版本号
     * @warning 如果浏览器不是chrome， 则该值为undefined
     * @example
     * ```javascript
     * if ( UE.browser.chrome ) {
     *     console.log( '当前浏览器是Chrome' );
     * }
     * ```
     */
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
        browser.chrome = + RegExp['\x241'];
    }

    /**
     * @property { Number } safari 检测当前浏览器是否为Safari, 如果是，则返回Safari的大版本号
     * @warning 如果浏览器不是safari， 则该值为undefined
     * @example
     * ```javascript
     * if ( UE.browser.safari ) {
     *     console.log( '当前浏览器是Safari' );
     * }
     * ```
     */
    if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
    	browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
    }


    // Opera 9.50+
    if ( browser.opera )
        version = parseFloat( opera.version() );

    // WebKit 522+ (Safari 3+)
    if ( browser.webkit )
        version = parseFloat( agent.match( / applewebkit\/(\d+)/ )[1] );

    /**
     * @property { Number } version 检测当前浏览器版本号
     * @remind
     * <ul>
     *     <li>IE系列返回值为5,6,7,8,9,10等</li>
     *     <li>gecko系列会返回10900，158900等</li>
     *     <li>webkit系列会返回其build号 (如 522等)</li>
     * </ul>
     * @example
     * ```javascript
     * console.log( '当前浏览器版本号是： ' + UE.browser.version );
     * ```
     */
    browser.version = version;

    /**
     * @property { boolean } isCompatible 检测当前浏览器是否能够与UEditor良好兼容
     * @example
     * ```javascript
     * if ( UE.browser.isCompatible ) {
     *     console.log( '浏览器与UEditor能够良好兼容' );
     * }
     * ```
     */
    browser.isCompatible =
        !browser.mobile && (
        ( browser.ie && version >= 6 ) ||
        ( browser.gecko && version >= 10801 ) ||
        ( browser.opera && version >= 9.5 ) ||
        ( browser.air && version >= 1 ) ||
        ( browser.webkit && version >= 522 ) ||
        false );
    return browser;
}();
//快捷方式
var ie = browser.ie,
    webkit = browser.webkit,
    gecko = browser.gecko,
    opera = browser.opera;
/* jshint -W079 */
var Minder = KityMinder.Minder = kity.createClass('KityMinder', {
    constructor: function(options) {
        this._options = Utils.extend(window.KITYMINDER_CONFIG || {}, options);

        var initQueue = Minder._initFnQueue.slice();

        // @see option.js
        // @see event.js
        // @see status.js
        // @see paper.js
        // @see select.js
        // @see key.js
        // @see contextmenu.js
        // @see module.js
        // @see data.js         
        // @see readonly.js
        // @see layout.js
        // @see theme.js
        while (initQueue.length) initQueue.shift().call(this, options);
        
        this.fire('ready');
    }
});
/* jshint +W079 */

Minder._initFnQueue = [];
Minder.registerInit = function(fn) {
    Minder._initFnQueue.push(fn);
};
var Command = kity.createClass( "Command", {
	constructor: function () {
		this._isContentChange = true;
		this._isSelectionChange = false;
	},

	execute: function ( minder, args ) {

	},

	setContentChanged: function ( val ) {
		this._isContentChange = !! val;
	},

	isContentChanged: function () {
		return this._isContentChange;
	},

	setSelectionChanged: function ( val ) {
		this._isSelectionChange = !! val;
	},

	isSelectionChanged: function () {
		return this._isContentChange;
	},

	queryState: function ( km ) {
		return 0;
	},

	queryValue: function ( km ) {
		return 0;
	},
	isNeedUndo: function () {
		return true;
	}
} );

kity.extendClass(Minder, {
    _getCommand: function (name) {
        return this._commands[name.toLowerCase()];
    },

    _queryCommand: function (name, type, args) {
        var cmd = this._getCommand(name);
        if (cmd) {
            var queryCmd = cmd['query' + type];
            if (queryCmd)
                return queryCmd.apply(cmd, [this].concat(args));
        }
        return 0;
    },

    queryCommandState: function (name) {
        return this._queryCommand(name, "State", Utils.argsToArray(1));
    },

    queryCommandValue: function (name) {
        return this._queryCommand(name, "Value", Utils.argsToArray(1));
    },

    execCommand: function (name) {
        name = name.toLowerCase();

        var cmdArgs = Utils.argsToArray(arguments, 1),
            cmd, stoped, result, eventParams;
        var me = this;
        cmd = this._getCommand(name);

        eventParams = {
            command: cmd,
            commandName: name.toLowerCase(),
            commandArgs: cmdArgs
        };
        if (!cmd || !~this.queryCommandState(name)) {
            return false;
        }

        if (!this._hasEnterExecCommand && cmd.isNeedUndo()) {
            this._hasEnterExecCommand = true;
            stoped = this._fire(new MinderEvent('beforeExecCommand', eventParams, true));

            if (!stoped) {
                //保存场景
                this._fire(new MinderEvent('saveScene'));

                this._fire(new MinderEvent("preExecCommand", eventParams, false));

                result = cmd.execute.apply(cmd, [me].concat(cmdArgs));

                this._fire(new MinderEvent('execCommand', eventParams, false));

                //保存场景
                this._fire(new MinderEvent('saveScene'));

                if (cmd.isContentChanged()) {
                    this._firePharse(new MinderEvent('contentchange'));
                }

                this._interactChange();
            }
            this._hasEnterExecCommand = false;
        } else {
            result = cmd.execute.apply(cmd, [me].concat(cmdArgs));

            if (!this._hasEnterExecCommand) {
                this._interactChange();
            }
        }

        return result === undefined ? null : result;
    }
});
var MinderNode = KityMinder.MinderNode = kity.createClass('MinderNode', {

    /**
     * 创建一个节点
     *
     * @param {KityMinder}    minder
     *     节点绑定的脑图的实例
     *
     * @param {String|Object} unknown
     *     节点的初始数据或文本
     */
    constructor: function(unknown) {
        this.parent = null;
        this.root = this;
        this.children = [];
        this.data = {};
        this.tmpData = {};

        this.initContainers();

        if (Utils.isString(unknown)) {
            this.setText(unknown);
        } else {
            this.setData(unknown);
        }
    },

    initContainers: function() {
        this.rc = new kity.Group().setId(KityMinder.uuid('minder_node'));
        this.rc.minderNode = this;
    },

    /**
     * 判断节点是否根节点
     */
    isRoot: function() {
        return this.root === this;
    },

    /**
     * 判断节点是否叶子
     */
    isLeaf: function() {
        return this.children.length === 0;
    },

    /**
     * 获取节点的根节点
     */
    getRoot: function() {
        return this.root || this;
    },

    /**
     * 获得节点的父节点
     */
    getParent: function() {
        return this.parent;
    },

    /**
     * 获得节点的深度
     */
    getLevel: function() {
        var level = 0,
            parent = this.parent;
        while (parent) {
            level++;
            parent = parent.parent;
        }
        return level;
    },

    /**
     * 获得节点的复杂度（即子树中节点的数量）
     */
    getComplex: function() {
        var complex = 0;
        this.traverse(function() {
            complex++;
        });
        return complex;
    },

    /**
     * 获得节点的类型（root|main|sub）
     */
    getType: function(type) {
        this.type = ['root', 'main', 'sub'][Math.min(this.getLevel(), 2)];
        return this.type;
    },

    /**
     * 判断当前节点是否被测试节点的祖先
     * @param  {MinderNode}  test 被测试的节点
     */
    isAncestorOf: function(test) {
        var p = test.parent;
        while (p) {
            if (p == this) return true;
            p = p.parent;
        }
        return false;
    },

    /**
     * 设置节点的文本数据
     * @param {String} text 文本数据
     */
    setText: function(text) {
        if(utils.isArray(text)){
            text = text.join('\n');
        }
        return this.setData('text', text);
    },

    /**
     * 获取节点的文本数据
     * @return {String}
     */
    getText: function(str2arr) {
        var text = this.getData('text') || '';

        text = text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');

        if(str2arr){
            text = text.split('\n');
        }

        return text;
    },

    /**
     * 先序遍历当前节点树
     * @param  {Function} fn 遍历函数
     */
    preTraverse: function(fn, excludeThis) {
        var children = this.getChildren();
        if (!excludeThis) fn(this);
        for (var i = 0; i < children.length; i++) {
            children[i].preTraverse(fn);
        }
    },

    /**
     * 后序遍历当前节点树
     * @param  {Function} fn 遍历函数
     */
    postTraverse: function(fn, excludeThis) {
        var children = this.getChildren();
        for (var i = 0; i < children.length; i++) {
            children[i].postTraverse(fn);
        }
        if (!excludeThis) fn(this);
    },

    traverse: function(fn, excludeThis) {
        return this.postTraverse(fn, excludeThis);
    },

    getChildren: function() {
        return this.children;
    },

    getIndex: function() {
        return this.parent ? this.parent.children.indexOf(this) : -1;
    },

    insertChild: function(node, index) {
        if (index === undefined) {
            index = this.children.length;
        }
        if (node.parent) {
            node.parent.removeChild(node);
        }
        node.parent = this;
        node.root = this.root;

        this.children.splice(index, 0, node);
    },

    appendChild: function(node) {
        return this.insertChild(node);
    },

    prependChild: function(node) {
        return this.insertChild(node, 0);
    },

    removeChild: function(elem) {
        var index = elem,
            removed;
        if (elem instanceof MinderNode) {
            index = this.children.indexOf(elem);
        }
        if (index >= 0) {
            removed = this.children.splice(index, 1)[0];
            removed.parent = null;
            removed.root = removed;
        }
    },

    getChild: function(index) {
        return this.children[index];
    },

    getFirstChild: function() {
        return this.children[0];
    },

    getLastChild: function() {
        return this.children[this.children.length - 1];
    },

    getData: function(name) {
        if (name === undefined) {
            return this.data;
        }
        return this.data[name];
    },

    setData: function(name, value) {
        if (name === undefined) {
            this.data = {};

        } else if (utils.isObject(name)) {
            Utils.extend(this.data, name);
        } else {
            if (value === undefined) {
                this.data[name] = null;
                delete this.data[name];
            } else {
                this.data[name] = value;
            }
        }
        return this;
    },

    getRenderContainer: function() {
        return this.rc;
    },

    getCommonAncestor: function(node) {
        return Utils.getNodeCommonAncestor(this, node);
    },

    contains: function(node) {
        return this == node || this.isAncestorOf(node);
    },

    clone: function() {
        function cloneNode(parent, isClonedNode) {
            var cloned = new KM.MinderNode();

            cloned.data = Utils.clonePlainObject(isClonedNode.getData());
            cloned.tmpData = Utils.clonePlainObject(isClonedNode.getTmpData());

            if (parent) {
                parent.appendChild(cloned);
            }
            for (var i = 0, ci;
                (ci = isClonedNode.children[i++]);) {
                cloneNode(cloned, ci);
            }
            return cloned;
        }
        return cloneNode(null, this);
    },

    equals: function(node,ignoreSelected) {
        var me = this;
        function restoreSelected(){
            if(isSelectedA){
                me.setSelectedFlag();
            }
            if(isSelectedB){
                node.setSelectedFlag();
            }
        }
        if(ignoreSelected){
            var isSelectedA = false;
            var isSelectedB = false;
            if(me.isSelected()){
                isSelectedA = true;
                me.clearSelectedFlag();
            }

            if(node.isSelected()){
                isSelectedB = true;
                node.clearSelectedFlag();
            }
        }
        if (node.children.length != this.children.length) {
            restoreSelected();
            return false;
        }
        if (utils.compareObject(node.getData(), me.getData()) === false) {
            restoreSelected();
            return false;
        }
        if (utils.compareObject(node.getTmpData(), me.getTmpData()) === false) {
            restoreSelected();
            return false;
        }
        for (var i = 0, ci;
            (ci = me.children[i]); i++) {
            if (ci.equals(node.children[i],ignoreSelected) === false) {
                restoreSelected();
                return false;
            }
        }
        restoreSelected();
        return true;

    },

    clearChildren: function() {
        this.children = [];
    },

    setTmpData: function(a, v) {
        var me = this;
        if (utils.isObject(a)) {
            utils.each(a, function(key, val) {
                me.setTmpData(key, val);
            });
        }
        if (v === undefined || v === null || v === '') {
            delete this.tmpData[a];
        } else {
            this.tmpData[a] = v;
        }
    },

    getTmpData: function(a) {
        if (a === undefined) {
            return this.tmpData;
        }
        return this.tmpData[a];
    },

    setValue: function(node) {
        this.data = {};
        this.setData(utils.clonePlainObject(node.getData()));
        this.tmpData = {};
        this.setTmpData(utils.clonePlainObject(node.getTmpData()));
        return this;
    }
});

MinderNode.getCommonAncestor = function(nodeA, nodeB) {
    if (nodeA instanceof Array) {
        return MinderNode.getCommonAncestor.apply(this, nodeA);
    }
    switch (arguments.length) {
        case 1:
            return nodeA.parent || nodeA;

        case 2:
            if (nodeA.isAncestorOf(nodeB)) {
                return nodeA;
            }
            if (nodeB.isAncestorOf(nodeA)) {
                return nodeB;
            }
            var ancestor = nodeA.parent;
            while (ancestor && !ancestor.isAncestorOf(nodeB)) {
                ancestor = ancestor.parent;
            }
            return ancestor;

        default:
            return Array.prototype.reduce.call(arguments, function(prev, current) {
                return MinderNode.getCommonAncestor(prev, current);
            }, nodeA);
    }
};

kity.extendClass(Minder, {

    getRoot: function() {
        return this._root;
    },

    setRoot: function(root) {
        this._root = root;
        root.minder = this;
    },

    createNode: function(unknown, parent, index) {
        var node = new MinderNode(unknown);
        this.fire('nodecreate', { node: node, parent: parent, index: index });
        this.appendNode(node, parent, index);
        return node;
    },

    appendNode: function(node, parent, index) {
        if (parent) parent.insertChild(node, index);
        this.attachNode(node);
        return this;
    },

    removeNode: function(node) {
        if (node.parent) {
            node.parent.removeChild(node);
            this.detachNode(node);
            this.fire('noderemove', { node: node });
        }
    },

    attachNode: function(node) {
        var rc = this._rc;
        node.traverse(function(current) {
            current.attached = true;
            rc.addShape(current.getRenderContainer());
        });
        rc.addShape(node.getRenderContainer());
        this.fire('nodeattach', {
            node: node
        });
    },

    detachNode: function(node) {
        var rc = this._rc;
        node.traverse(function(current) {
            current.attached = false;
            rc.removeShape(current.getRenderContainer());
        });
        this.fire('nodedetach', {
            node: node
        });
    },

    getMinderTitle: function() {
        return this.getRoot().getText();
    }

});

kity.extendClass(MinderNode, {
    getMinder: function() {
        return this.getRoot().minder;
    }
});

/**
 * @fileOverview
 *
 * 提供脑图选项支持
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
kity.extendClass(Minder, {

    getOptions: function(key) {
        var val;
        if (key) {
            val = this.getPreferences(key);
            return val && val[key] || this._options[key];
        } else {
            val = this.getPreferences();
            return utils.extend(val, this._options, true);
        }
    },

    setDefaultOptions: function(key, val, cover) {
        var obj = {};
        if (Utils.isString(key)) {
            obj[key] = val;
        } else {
            obj = key;
        }
        utils.extend(this._options, obj, !cover);
    },

    setOptions: function(key, val) {
        this.setPreferences(key, val);
    }

});

Minder.registerInit(function(option) {
    this.setDefaultOptions(KM.defaultOptions);
});
var MinderEvent = kity.createClass('MindEvent', {
    constructor: function(type, params, canstop) {
        params = params || {};
        if (params.getType && params.getType() == 'ShapeEvent') {
            this.kityEvent = params;
            this.originEvent = params.originEvent;
            this.getPosition = params.getPosition.bind(params);
        } else if (params.target && params.preventDefault) {
            this.originEvent = params;
        } else {
            kity.Utils.extend(this, params);
        }
        this.type = type;
        this._canstop = canstop || false;
    },

    getTargetNode: function() {
        var findShape = this.kityEvent && this.kityEvent.targetShape;
        if (!findShape) return null;
        while (!findShape.minderNode && findShape.container) {
            findShape = findShape.container;
        }
        var node = findShape.minderNode;
        if (node && findShape.getOpacity() < 1) return null;
        return node || null;
    },

    stopPropagation: function() {
        this._stoped = true;
    },

    stopPropagationImmediately: function() {
        this._immediatelyStoped = true;
        this._stoped = true;
    },

    shouldStopPropagation: function() {
        return this._canstop && this._stoped;
    },

    shouldStopPropagationImmediately: function() {
        return this._canstop && this._immediatelyStoped;
    },
    preventDefault: function() {
        this.originEvent.preventDefault();
    },
    isRightMB: function() {
        var isRightMB = false;
        if (!this.originEvent) {
            return false;
        }
        if ("which" in this.originEvent)
            isRightMB = this.originEvent.which == 3;
        else if ("button" in this.originEvent)
            isRightMB = this.originEvent.button == 2;
        return isRightMB;
    },
    getKeyCode: function(){
        var evt = this.originEvent;
        return evt.keyCode || evt.which;
    }
});

Minder.registerInit(function() {
    this._initEvents();
});

// 事件机制
kity.extendClass(Minder, {
    _initEvents: function() {
        this._eventCallbacks = {};
    },
    _bindEvents: function() {
        this._bindPaperEvents();
        this._bindKeyboardEvents();
    },
    _resetEvents: function() {
        this._initEvents();
        this._bindEvents();
    },
    // TODO: mousemove lazy bind
    _bindPaperEvents: function() {
        this._paper.on('click dblclick mousedown contextmenu mouseup mousemove mouseover mousewheel DOMMouseScroll touchstart touchmove touchend dragenter dragleave drop', this._firePharse.bind(this));
        if (window) {
            window.addEventListener('resize', this._firePharse.bind(this));
            window.addEventListener('blur', this._firePharse.bind(this));
        }
    },
    _bindKeyboardEvents: function() {
        if ((navigator.userAgent.indexOf('iPhone') == -1) && (navigator.userAgent.indexOf('iPod') == -1) && (navigator.userAgent.indexOf('iPad') == -1)) {
            //只能在这里做，要不无法触发
            Utils.listen(document.body, 'keydown keyup keypress paste', this._firePharse.bind(this));
        }
    },
    _firePharse: function(e) {
        //        //只读模式下强了所有的事件操作
        //        if(this.readOnly === true){
        //            return false;
        //        }
        var beforeEvent, preEvent, executeEvent;

        if (e.type == 'DOMMouseScroll') {
            e.type = 'mousewheel';
            e.wheelDelta = e.originEvent.wheelDelta = e.originEvent.detail * -10;
            e.wheelDeltaX = e.originEvent.mozMovementX;
            e.wheelDeltaY = e.originEvent.mozMovementY;
        }

        beforeEvent = new MinderEvent('before' + e.type, e, true);
        if (this._fire(beforeEvent)) {
            return;
        }
        preEvent = new MinderEvent('pre' + e.type, e, true);
        executeEvent = new MinderEvent(e.type, e, true);

        if (this._fire(preEvent) ||
            this._fire(executeEvent))
            this._fire(new MinderEvent('after' + e.type, e, false));
    },
    _interactChange: function(e) {
        var me = this;
        if (me._interactScheduled) return;
        setTimeout(function() {
            me._fire(new MinderEvent('interactchange'));
            me._interactScheduled = false;
        }, 100);
        me._interactScheduled = true;
    },
    _listen: function(type, callback) {
        var callbacks = this._eventCallbacks[type] || (this._eventCallbacks[type] = []);
        callbacks.push(callback);
    },
    _fire: function(e) {


        var status = this.getStatus();

        var callbacks = this._eventCallbacks[e.type.toLowerCase()] || [];

        if (status) {

            callbacks = callbacks.concat(this._eventCallbacks[status + '.' + e.type.toLowerCase()] || []);
        }



        if (callbacks.length === 0) {
            return;
        }
        var lastStatus = this.getStatus();

        for (var i = 0; i < callbacks.length; i++) {

            callbacks[i].call(this, e);

            /* this.getStatus() != lastStatus ||*/
            if (e.shouldStopPropagationImmediately()) {
                break;
            }
        }
        return e.shouldStopPropagation();
    },
    on: function(name, callback) {
        var km = this;
        utils.each(name.split(/\s+/), function(i, n) {
            km._listen(n.toLowerCase(), callback);
        });
        return this;
    },
    off: function(name, callback) {

        var types = name.split(/\s+/);
        var i, j, callbacks, removeIndex;
        for (i = 0; i < types.length; i++) {

            callbacks = this._eventCallbacks[types[i].toLowerCase()];
            if (callbacks) {
                removeIndex = null;
                for (j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] == callback) {
                        removeIndex = j;
                    }
                }
                if (removeIndex !== null) {
                    callbacks.splice(removeIndex, 1);
                }
            }
        }
    },
    fire: function(type, params) {
        var e = new MinderEvent(type, params);
        this._fire(e);
        return this;
    }
});
/**
 * @fileOverview
 *
 * 状态切换控制
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

Minder.registerInit(function() {
    this._initStatus();
});

kity.extendClass(Minder, {

    _initStatus: function() {
        this._status = 'normal';
        this._rollbackStatus = 'normal';
    },

    setStatus: (function() {
        var sf = ~window.location.href.indexOf('status');
        var tf = ~window.location.href.indexOf('trace');

        // 在 readonly 模式下，只有 force 为 true 才能切换回来
        return function(status, force) {
            if (this._status == 'readonly' && !force) return this;
            if (status != this._status) {
                this._rollbackStatus = this._status;
                this._status = status;
                this.fire('statuschange', {
                    lastStatus: this._rollbackStatus,
                    currentStatus: this._status
                });
                if (sf) {
                    console.log(window.event.type, this._rollbackStatus, '->', this._status);
                    if (tf) {
                        console.trace();
                    }
                }
            }
            return this;
        };
    })(),

    rollbackStatus: function() {
        this.setStatus(this._rollbackStatus);
    },
    getRollbackStatus:function(){
        return this._rollbackStatus;
    },
    getStatus: function() {
        return this._status;
    }
});
/**
 * @fileOverview
 *
 * 初始化渲染容器
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
Minder.registerInit(function() {
    this._initPaper();
});
kity.extendClass(Minder, {
    
    _initPaper: function() {

        this._paper = new kity.Paper();
        this._paper.getNode().setAttribute('contenteditable', true);
        this._paper.getNode().ondragstart = function(e) {
            e.preventDefault();
        };
        this._paper.shapeNode.setAttribute('transform', 'translate(0.5, 0.5)');

        this._addRenderContainer();

        this.setRoot(this.createNode(this.getLang().maintopic));

        if (this._options.renderTo) {
            this.renderTo(this._options.renderTo);
        }
    },

    _addRenderContainer: function() {
        this._rc = new kity.Group().setId(KityMinder.uuid('minder'));
        this._paper.addShape(this._rc);
    },

    renderTo: function(target) {
        this._paper.renderTo(this._renderTarget = target);
        this._bindEvents();
    },

    getRenderContainer: function() {
        return this._rc;
    },

    getPaper: function() {
        return this._paper;
    },

    getRenderTarget: function() {
        return this._renderTarget;
    },
});

Minder.registerInit(function() {
    this._initSelection();
});

// 选区管理
kity.extendClass(Minder, {
    _initSelection: function() {
        this._selectedNodes = [];
    },
    renderChangedSelection: function(last) {
        var current = this.getSelectedNodes();
        var changed = [];
        var i = 0;

        current.forEach(function(node) {
            if (last.indexOf(node) == -1) {
                changed.push(node);
                node.setTmpData('selected', true);
            }
        });

        last.forEach(function(node) {
            if (current.indexOf(node) == -1) {
                changed.push(node);
                node.setTmpData('selected', false);
            }
        });

        if (changed.length) {
            this._interactChange();
            this.fire('selectionchange');
        }
        while (i < changed.length) changed[i++].render();
    },
    getSelectedNodes: function() {
        //不能克隆返回，会对当前选区操作，从而影响querycommand
        return this._selectedNodes;
    },
    getSelectedNode: function() {
        return this.getSelectedNodes()[0] || null;
    },
    removeAllSelectedNodes: function() {
        var me = this;
        var last = this._selectedNodes.splice(0);
        this._selectedNodes = [];
        this.renderChangedSelection(last);
        return this.fire('selectionclear');
    },
    removeSelectedNodes: function(nodes) {
        var me = this;
        var last = this._selectedNodes.slice(0);
        nodes = Utils.isArray(nodes) ? nodes : [nodes];
        Utils.each(nodes, function(i, n) {
            var index;
            if ((index = me._selectedNodes.indexOf(n)) === -1) return;
            me._selectedNodes.splice(index, 1);
        });
        this.renderChangedSelection(last);
        return this;
    },
    select: function(nodes, isSingleSelect) {
        var lastSelect = this.getSelectedNodes().slice(0);
        if (isSingleSelect) {
            this._selectedNodes = [];
        }
        var me = this;
        nodes = Utils.isArray(nodes) ? nodes : [nodes];
        Utils.each(nodes, function(i, n) {
            if (me._selectedNodes.indexOf(n) !== -1) return;
            me._selectedNodes.push(n);
        });
        this.renderChangedSelection(lastSelect);
        return this;
    },

    //当前选区中的节点在给定的节点范围内的保留选中状态，
    //没在给定范围的取消选中，给定范围中的但没在当前选中范围的也做选中效果
    toggleSelect: function(node) {
        if (Utils.isArray(node)) {
            node.forEach(this.toggleSelect.bind(this));
        } else {
            if (node.isSelected()) this.removeSelectedNodes(node);
            else this.select(node);
        }
        return this;
    },

    isSingleSelect: function() {
        return this._selectedNodes.length == 1;
    },

    getSelectedAncestors: function(includeRoot) {
        var nodes = this.getSelectedNodes().slice(0),
            ancestors = [],
            judge;

        // 根节点不参与计算
        var rootIndex = nodes.indexOf(this.getRoot());
        if (~rootIndex && !includeRoot) {
            nodes.splice(rootIndex, 1);
        }

        // 判断 nodes 列表中是否存在 judge 的祖先
        function hasAncestor(nodes, judge) {
            for (var i = nodes.length - 1; i >= 0; --i) {
                if (nodes[i].isAncestorOf(judge)) return true;
            }
            return false;
        }

        // 按照拓扑排序
        nodes.sort(function(node1, node2) {
            return node1.getLevel() - node2.getLevel();
        });

        // 因为是拓扑有序的，所以只需往上查找
        while ((judge = nodes.pop())) {
            if (!hasAncestor(nodes, judge)) {
                ancestors.push(judge);
            }
        }

        return ancestors;
    }
});

kity.extendClass(MinderNode, {
    isSelected: function() {
        return this.getTmpData('selected');
    },
    clearSelectedFlag:function(){
        this.setTmpData('selected');
    },
    setSelectedFlag:function(){
        this.setTmpData('selected',true);
    }
});
/**
 * @fileOverview
 *
 * 添加快捷键支持
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

/**
 * 计算包含 meta 键的 keycode
 *
 * @param  {String|KeyEvent} unknown
 */
function getMetaKeyCode(unknown) {
    var CTRL_MASK = 0x1000;
    var ALT_MASK = 0x2000;
    var SHIFT_MASK = 0x4000;
    var metaKeyCode = 0;

    if (typeof(unknown) == 'string') {
        // unknown as string
        unknown.toLowerCase().split(/\+\s*/).forEach(function(name) {
            switch(name) {
                case 'ctrl':
                case 'cmd':
                    metaKeyCode |= CTRL_MASK;
                    break;
                case 'alt':
                    metaKeyCode |= ALT_MASK;
                    break;
                case 'shift':
                    metaKeyCode |= SHIFT_MASK;
                    break;
                default:
                    metaKeyCode |= keymap[name];
            }
        });
    } else {
        // unknown as key event
        if (unknown.ctrlKey || unknown.metaKey) {
            metaKeyCode |= CTRL_MASK;
        }
        if (unknown.altKey) {
            metaKeyCode |= ALT_MASK;
        }
        if (unknown.shiftKey) {
            metaKeyCode |= SHIFT_MASK;
        }
        metaKeyCode |= unknown.keyCode;
    }

    return metaKeyCode;
}
kity.extendClass(MinderEvent, {
    isShortcutKey: function(keyCombine) {
        var keyEvent = this.originEvent;
        if (!keyEvent) return false;

        return getMetaKeyCode(keyCombine) == getMetaKeyCode(keyEvent);
    }
});

Minder.registerInit(function() {
    this._initShortcutKey();
});

kity.extendClass(Minder, {

    _initShortcutKey: function() {
        this._bindShortcutKeys();
    },
    
    _bindShortcutKeys: function() {
        var map = this._shortcutKeys = {};
        var has = 'hasOwnProperty';
        this.on('keydown', function(e) {
            for (var keys in map) {
                if (!map[has](keys)) continue;
                if (e.isShortcutKey(keys)) {
                    var fn = map[keys];
                    if (fn.__statusCondition && fn.__statusCondition != this.getStatus()) return;
                    fn();
                    e.preventDefault();
                }
            }
        });
    },
    
    addShortcut: function(keys, fn) {
        var binds = this._shortcutKeys;
        keys.split(/\|\s*/).forEach(function(combine) {
            var parts = combine.split('::');
            var status;
            if (parts.length > 1) {
                combine = parts[1];
                status = parts[0];
                fn.__statusCondition = status;
            }
            binds[combine] = fn;
        });
    },

    addCommandShortcutKeys: function(cmd, keys) {
        var binds = this._commandShortcutKeys || (this._commandShortcutKeys = {});
        var obj = {},
            km = this;
        if (keys) {
            obj[cmd] = keys;
        } else {
            obj = cmd;
        }

        var minder = this;

        utils.each(obj, function(command, keys) {

            binds[command] = keys;

            minder.addShortcut(keys, function execCommandByShortcut() {
                if (minder.queryCommandState(command) === 0) {
                    minder.execCommand(command);
                }
            });
        });
    },

    getCommandShortcutKey: function(cmd) {
        var binds = this._commandShortcutKeys;
        return binds && binds[cmd] || null;
    }
});
/**
 * @fileOverview
 *
 * 添加模块上下文菜单支持
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

Minder.registerInit(function() {
    this._initContextMenu();
});

kity.extendClass(Minder, {
    _initContextMenu: function() {
        this.contextmenus = [];
    },
    addContextMenu: function(item) {
        if (utils.isArray(item)) {
            this.contextmenus = this.contextmenus.concat(item);
        } else {
            this.contextmenus.push(item);
        }

        return this;
    },
    getContextMenu: function() {
        return this.contextmenus;
    }
});
//模块注册&暴露模块接口
( function () {
    var _modules;
    KityMinder.registerModule = function ( name, module ) {
        //初始化模块列表
        if ( !_modules ) {
            _modules = {};
        }
        _modules[ name ] = module;
    };
    KityMinder.getModules = function () {
        return _modules;
    };
} )();

Minder.registerInit(function() {
    this._initModules();
});

// 模块声明周期维护
kity.extendClass(Minder, {
    _initModules: function() {
        var modulesPool = KityMinder.getModules();
        var modulesToLoad = this._options.modules || Utils.keys(modulesPool);

        this._commands = {};
        this._query = {};
        this._modules = {};
        this._rendererClasses = {};

        var i, name, type, module, moduleDeals,
            dealCommands, dealEvents, dealRenderers;

        var me = this;
        for (i = 0; i < modulesToLoad.length; i++) {
            name = modulesToLoad[i];

            if (!modulesPool[name]) continue;

            // 执行模块初始化，抛出后续处理对象

            if (typeof(modulesPool[name]) == 'function') {
                moduleDeals = modulesPool[name].call(me);
            } else {
                moduleDeals = modulesPool[name];
            }
            this._modules[name] = moduleDeals;

            if (!moduleDeals) continue;

            if (moduleDeals.init) {
                moduleDeals.init.call(me, this._options);
            }

            // command加入命令池子
            dealCommands = moduleDeals.commands;
            for (name in dealCommands) {
                this._commands[name.toLowerCase()] = new dealCommands[name]();
            }

            // 绑定事件
            dealEvents = moduleDeals.events;
            if (dealEvents) {
                for (type in dealEvents) {
                    me.on(type, dealEvents[type]);
                }
            }

            // 渲染器
            dealRenderers = moduleDeals.renderers;

            if (dealRenderers) {

                for (type in dealRenderers) {
                    this._rendererClasses[type] = this._rendererClasses[type] || [];

                    if (Utils.isArray(dealRenderers[type])) {
                        this._rendererClasses[type] = this._rendererClasses[type].concat(dealRenderers[type]);
                    } else {
                        this._rendererClasses[type].push(dealRenderers[type]);
                    }
                }
            }

            if (moduleDeals.defaultOptions) {
                this.setDefaultOptions(moduleDeals.defaultOptions);
            }

            //添加模块的快捷键
            if (moduleDeals.commandShortcutKeys) {
                this.addCommandShortcutKeys(moduleDeals.commandShortcutKeys);
            }

            //添加邮件菜单
            if (moduleDeals.contextmenu) {
                this.addContextMenu(moduleDeals.contextmenu);
            }
        }
    },

    _garbage: function() {
        this.clearSelect();

        while (this._root.getChildren().length) {
            this._root.removeChild(0);
        }
    },

    destroy: function() {
        var modules = this._modules;

        this._resetEvents();
        this._garbage();

        for (var key in modules) {
            if (!modules[key].destroy) continue;
            modules[key].destroy.call(this);
        }
    },

    reset: function() {
        var modules = this._modules;

        this._garbage();

        for (var key in modules) {
            if (!modules[key].reset) continue;
            modules[key].reset.call(this);
        }
    }
});
Utils.extend(KityMinder, {
    _protocols: {},
    registerProtocol: function(name, protocolDeal) {
        KityMinder._protocols[name] = protocolDeal;
    }
});

var DEFAULT_TEXT = {
    'root': 'maintopic',
    'main': 'topic',
    'sub': 'topic'
};

Minder.registerInit(function() {
    this._initProtocols();
});

// 导入导出
kity.extendClass(Minder, {

    _initProtocols: function(options) {
        var protocols = this._protocols = {};
        var pool = KityMinder._protocols;
        for (var name in pool) {
            if (pool.hasOwnProperty(name))
                protocols[name] = pool[name](this);
                protocols[name].name = name;
        }
    },

    getProtocol: function(name) {
        return this._protocols[name] || null;
    },

    getSupportedProtocols: function() {
        var protocols = this._protocols;
        return Utils.keys(protocols).map(function(name) {
            return protocols[name];
        });
    },

    exportJson: function() {
        /* 导出 node 上整棵树的数据为 JSON */
        function exportNode(node) {
            var exported = {};
            exported.data = node.getData();
            var childNodes = node.getChildren();
            if (childNodes.length) {
                exported.children = [];
                for (var i = 0; i < childNodes.length; i++) {
                    exported.children.push(exportNode(childNodes[i]));
                }
            }
            return exported;
        }

        var json = exportNode(this.getRoot());

        json.template = this.getTemplate();
        json.theme = this.getTheme();
        json.version = KityMinder.version;

        return json;
    },

    importJson: function(json, params) {

        function importNode(node, json, km) {
            var data = json.data;
            node.data = {};
            for (var field in data) {
                node.setData(field, data[field]);
            }

            node.setData('text', data.text || km.getLang(DEFAULT_TEXT[node.getType()]));

            var childrenTreeData = json.children || [];
            for (var i = 0; i < childrenTreeData.length; i++) {
                var childNode = km.createNode(null, node);
                importNode(childNode, childrenTreeData[i], km);
            }
            return node;
        }

        if (!json) return;
        
        this._fire(new MinderEvent('preimport', params, false));

        // 删除当前所有节点
        while (this._root.getChildren().length) {
            this.removeNode(this._root.getChildren()[0]);
        }

        json = KityMinder.compatibility(json);

        importNode(this._root, json, this);

        this.setTemplate(json.template || 'default');
        this.setTheme(json.theme || null);
        this.refresh();

        this.fire('import', params);

        this._firePharse({
            type: 'contentchange'
        });
        this._interactChange();
    },

    exportData: function(protocolName, options) {

        var json, protocol;

        json = this.exportJson();

        // 指定了协议进行导出，需要检测协议是否支持
        if (protocolName) {
            protocol = this.getProtocol(protocolName);

            if (!protocol || !protocol.encode) {
                return Promise.reject(new Error('Not supported protocol:' + protocolName));
            }
        }

        // 导出前抛个事件
        this._fire(new MinderEvent('beforeexport', {
            json: json,
            protocolName: protocolName,
            protocol: protocol
        }));


        if (protocol) {
            return Promise.resolve(protocol.encode(json, this, options));
        } else {
            return Promise.resolve(json);
        }
    },

    importData: function(local, protocolName) {

        var json, protocol;
        var minder = this;

        // 指定了协议进行导入，需要检测协议是否支持
        if (protocolName) {
            protocol = this.getProtocol(protocolName);

            if (!protocol || !protocol.decode) {
                return Promise.reject(new Error('Not supported protocol:' + protocolName));
            }
        }

        var params = {
            local: local,
            protocolName: protocolName,
            protocol: protocol
        };

        // 导入前抛事件
        this._fire(new MinderEvent('beforeimport', params));

        return new Promise(function(resolve, reject) {

            resolve(protocol ? protocol.decode(local) : local);

        }).then(function(json) {

            minder.importJson(json, params);

            return json;

        });

    }
});
/**
 * @fileOverview
 *
 * 
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
Minder.registerInit(function(options) {
    if (options.readOnly) {
        this.setDisabled();
    }
});
kity.extendClass(Minder, {

    disable: function() {
        var me = this;
        //禁用命令
        me.bkqueryCommandState = me.queryCommandState;
        me.bkqueryCommandValue = me.queryCommandValue;
        me.queryCommandState = function(type) {
            var cmd = this._getCommand(type);
            if (cmd && cmd.enableReadOnly) {
                return me.bkqueryCommandState.apply(me, arguments);
            }
            return -1;
        };
        me.queryCommandValue = function(type) {
            var cmd = this._getCommand(type);
            if (cmd && cmd.enableReadOnly) {
                return me.bkqueryCommandValue.apply(me, arguments);
            }
            return null;
        };
        this.setStatus('readonly');
        me._interactChange();
    },

    enable: function() {
        var me = this;

        if (me.bkqueryCommandState) {
            me.queryCommandState = me.bkqueryCommandState;
            delete me.bkqueryCommandState;
        }
        if (me.bkqueryCommandValue) {
            me.queryCommandValue = me.bkqueryCommandValue;
            delete me.bkqueryCommandValue;
        }

        this.setStatus('normal');

        me._interactChange();
    }
});
/**
 * 布局支持池子管理
 */
Utils.extend(KityMinder, {
    _layout: {},

    registerLayout: function(name, layout) {
        KityMinder._layout[name] = layout;
        if (!KityMinder._defaultLayout) {
            KityMinder._defaultLayout = name;
        }
    },

    getLayoutList: function() {
        return this._layout;
    },

    getLayoutInstance: function(name) {
        var LayoutClass = KityMinder._layout[name];
        if (!LayoutClass) throw new Error('Missing Layout: ' + name);
        var layout = new LayoutClass();
        return layout;
    }
});

/**
 * MinderNode 上的布局支持
 */
kity.extendClass(MinderNode, {

    /**
     * 获得当前节点的布局名称
     *
     * @return {String}
     */
    getLayout: function() {
        var layout = this.getData('layout');

        layout = layout || (this.isRoot() ? KityMinder._defaultLayout : this.parent.getLayout());

        return layout;
    },

    setLayout: function(name) {
        if (name) {
            if (name == 'inherit') {
                this.setData('layout');
            } else {
                this.setData('layout', name);
            }
        }
        return this;
    },

    layout: function(name, duration) {

        this.setLayout(name).getMinder().layout(duration);

        return this;
    },

    getLayoutInstance: function() {
        return KityMinder.getLayoutInstance(this.getLayout());
    },

    getOrderHint: function(refer) {
        return this.parent.getLayoutInstance().getOrderHint(this);
    },

    getExpandPosition: function() {
        return this.getLayoutInstance().getExpandPosition();
    },

    /**
     * 获取当前节点相对于父节点的布局变换
     */
    getLayoutTransform: function() {
        return this._layoutTransform || new kity.Matrix();
    },

    /**
     * 第一轮布局计算后，获得的全局布局位置
     *
     * @return {[type]} [description]
     */
    getGlobalLayoutTransformPreview: function() {
        var pMatrix = this.parent ? this.parent.getLayoutTransform() : new kity.Matrix();
        var matrix = this.getLayoutTransform();
        var offset = this.getLayoutOffset();
        if (offset) {
            matrix.translate(offset.x, offset.y);
        }
        return pMatrix.merge(matrix);
    },

    getLayoutPointPreview: function() {
        return this.getGlobalLayoutTransformPreview().transformPoint(new kity.Point());
    },

    /**
     * 获取节点相对于全局的布局变换
     */
    getGlobalLayoutTransform: function() {
        if (this._globalLayoutTransform) {
            return this._globalLayoutTransform;
        } else if (this.parent) {
            return this.parent.getGlobalLayoutTransform();
        } else {
            return new kity.Matrix();
        }
    },

    /**
     * 设置当前节点相对于父节点的布局变换
     */
    setLayoutTransform: function(matrix) {
        this._layoutTransform = matrix;
        return this;
    },

    /**
     * 设置当前节点相对于全局的布局变换（冗余优化）
     */
    setGlobalLayoutTransform: function(matrix) {
        this.getRenderContainer().setMatrix(this._globalLayoutTransform = matrix);
        return this;
    },

    setVertexIn: function(p) {
        this._vertexIn = p;
    },

    setVertexOut: function(p) {
        this._vertexOut = p;
    },

    getVertexIn: function() {
        return this._vertexIn || new kity.Point();
    },

    getVertexOut: function() {
        return this._vertexOut || new kity.Point();
    },

    getLayoutVertexIn: function() {
        return this.getGlobalLayoutTransform().transformPoint(this.getVertexIn());
    },

    getLayoutVertexOut: function() {
        return this.getGlobalLayoutTransform().transformPoint(this.getVertexOut());
    },

    setLayoutVectorIn: function(v) {
        this._layoutVectorIn = v;
        return this;
    },

    setLayoutVectorOut: function(v) {
        this._layoutVectorOut = v;
        return this;
    },

    getLayoutVectorIn: function() {
        return this._layoutVectorIn || new kity.Vector();
    },

    getLayoutVectorOut: function() {
        return this._layoutVectorOut || new kity.Vector();
    },

    getLayoutBox: function() {
        var matrix = this.getGlobalLayoutTransform();
        return matrix.transformBox(this.getContentBox());
    },

    getLayoutPoint: function() {
        var matrix = this.getGlobalLayoutTransform();
        return matrix.transformPoint(new kity.Point());
    },

    getLayoutOffset: function() {
        if (!this.parent) return new kity.Point();

        // 影响当前节点位置的是父节点的布局
        var data = this.getData('layout_' + this.parent.getLayout() + '_offset');

        if (data) return new kity.Point(data.x, data.y);

        return new kity.Point();
    },

    setLayoutOffset: function(p) {
        if (!this.parent) return this;

        if (p && !this.hasLayoutOffset()) {
            var m = this.getLayoutTransform().m;
            p = p.offset(m.e, m.f);
            this.setLayoutTransform(null);
        }

        this.setData('layout_' + this.parent.getLayout() + '_offset', p ? {
            x: p.x,
            y: p.y
        } : null);

        return this;
    },

    hasLayoutOffset: function() {
        return !!this.getData('layout_' + this.parent.getLayout() + '_offset');
    },

    resetLayoutOffset: function() {
        return this.setLayoutOffset(null);
    },

    getLayoutRoot: function() {
        if (this.isLayoutRoot()) {
            return this;
        }
        return this.parent.getLayoutRoot();
    },

    isLayoutRoot: function() {
        return this.getData('layout') || this.isRoot();
    }
});

Minder.registerInit(function(options) {
    this.refresh();
});

kity.extendClass(Minder, {

    layout: function(duration) {

        this.getRoot().traverse(function(node) {
            // clear last results
            node.setLayoutTransform(null);
        });

        function layoutNode(node, round) {

            // layout all children first
            // 剪枝：收起的节点无需计算
            if (node.isExpanded() || true) {
                node.children.forEach(function(child) {
                    layoutNode(child, round);
                });
            }

            var layout = node.getLayoutInstance();
            var childrenInFlow = node.getChildren().filter(function(child) {
                return !child.hasLayoutOffset();
            });
            layout.doLayout(node, childrenInFlow, round);
        }

        // 第一轮布局
        layoutNode(this.getRoot(), 1);

        // 第二轮布局
        layoutNode(this.getRoot(), 2);

        duration = duration ? 300 : 0;

        var minder = this;
        this.applyLayoutResult(this.getRoot(), duration).then(function() {
            minder.fire('layoutallfinish');
        });

        return this.fire('layout');
    },

    refresh: function(duration) {
        this.getRoot().renderTree();
        this.layout(duration).fire('contentchange')._interactChange();
        return this;
    },

    applyLayoutResult: function(root, duration) {
        root = root || this.getRoot();
        var me = this;
        var deffered = {};

        var promise = new Promise(function(resolve, reject) {
            deffered.resolve = resolve;
            deffered.reject = reject;
        });

        var complex = root.getComplex();

        function consume() {
            if (!--complex) {
                deffered.resolve();
            }
        }

        // 节点复杂度大于 100，关闭动画
        if (complex > 200) duration = 0;

        function applyMatrix(node, matrix) {
            node.setGlobalLayoutTransform(matrix);

            me.fire('layoutapply', {
                node: node,
                matrix: matrix
            });
        }

        function apply(node, pMatrix) {
            var matrix = node.getLayoutTransform().merge(pMatrix);
            var lastMatrix = node.getGlobalLayoutTransform() || new kity.Matrix();

            var offset = node.getLayoutOffset();
            matrix.translate(offset.x, offset.y);

            matrix.m.e = Math.round(matrix.m.e);
            matrix.m.f = Math.round(matrix.m.f);


            // 如果当前有动画，停止动画
            if (node._layoutTimeline) {
                node._layoutTimeline.stop();
                node._layoutTimeline = null;
            }

            // 如果要求以动画形式来更新，创建动画
            if (duration) {
                node._layoutTimeline = new kity.Animator(lastMatrix, matrix, applyMatrix)
                    .start(node, duration, 'ease')
                    .on('finish', function() {
                        //可能性能低的时候会丢帧，手动添加一帧
                        setTimeout(function() {
                            applyMatrix(node, matrix);
                            me.fire('layoutfinish', {
                                node: node,
                                matrix: matrix
                            });
                            consume();
                        }, 150);
                    });
            }

            // 否则直接更新
            else {
                applyMatrix(node, matrix);
                me.fire('layoutfinish', {
                    node: node,
                    matrix: matrix
                });
                consume();
            }

            for (var i = 0; i < node.children.length; i++) {
                apply(node.children[i], matrix);
            }
        }

        apply(root, root.parent ? root.parent.getGlobalLayoutTransform() : new kity.Matrix());
        return promise;
    },
});


/**
 * @class Layout 布局基类，具体布局需要从该类派生
 */
var Layout = kity.createClass('Layout', {

    /**
     * @abstract
     *
     * 子类需要实现的布局算法，该算法输入一个节点，排布该节点的子节点（相对父节点的变换）
     *
     * @param  {MinderNode} node 需要布局的节点
     *
     * @example
     *
     * doLayout: function(node) {
     *     var children = node.getChildren();
     *     // layout calculation
     *     children[i].setLayoutTransform(new kity.Matrix().translate(x, y));
     * }
     */
    doLayout: function(node) {
        throw new Error('Not Implement: Layout.doLayout()');
    },

    /**
     * 对齐指定的节点
     *
     * @param {Array<MinderNode>} nodes 要对齐的节点
     * @param {string} border 对齐边界，允许取值 left, right, top, bottom
     *
     */
    align: function(nodes, border, offset) {
        var me = this;
        offset = offset || 0;
        nodes.forEach(function(node) {
            var tbox = me.getTreeBox([node]);
            var matrix = node.getLayoutTransform();
            switch (border) {
                case 'left':
                    return matrix.translate(offset - tbox.left, 0);
                case 'right':
                    return matrix.translate(offset - tbox.right, 0);
                case 'top':
                    return matrix.translate(0, offset - tbox.top);
                case 'bottom':
                    return matrix.translate(0, offset - tbox.bottom);
            }
        });
    },

    stack: function(nodes, axis, distance) {
        var me = this;

        var position = 0;

        distance = distance || function(node, next, axis) {
            return node.getStyle({
                x: 'margin-right',
                y: 'margin-bottom'
            }[axis]) + next.getStyle({
                x: 'margin-left',
                y: 'margin-top'
            }[axis]);
        };

        nodes.forEach(function(node, index, nodes) {
            var tbox = me.getTreeBox([node]);

            var size = {
                x: tbox.width,
                y: tbox.height
            }[axis];
            var offset = {
                x: tbox.left,
                y: tbox.top
            }[axis];

            var matrix = node.getLayoutTransform();

            if (axis == 'x') {
                matrix.translate(position - offset, 0);
            } else {
                matrix.translate(0, position - offset);
            }
            position += size;
            if (nodes[index + 1])
                position += distance(node, nodes[index + 1], axis);
        });
        return position;
    },

    move: function(nodes, dx, dy) {
        nodes.forEach(function(node) {
            node.getLayoutTransform().translate(dx, dy);
        });
    },

    /**
     * 工具方法：获取给点的节点所占的布局区域
     *
     * @param  {MinderNode[]} nodes 需要计算的节点
     *
     * @return {Box} 计算结果
     */
    getBranchBox: function(nodes) {
        var box = new kity.Box();
        var i, node, matrix, contentBox;
        for (i = 0; i < nodes.length; i++) {
            node = nodes[i];
            matrix = node.getLayoutTransform();
            contentBox = node.getContentBox();
            box = box.merge(matrix.transformBox(contentBox));
        }

        return box;
    },

    /**
     * 工具方法：计算给定的节点的子树所占的布局区域
     *
     * @param  {MinderNode} nodes 需要计算的节点
     *
     * @return {Box} 计算的结果
     */
    getTreeBox: function(nodes) {

        var i, node, matrix, treeBox;

        var g = KityMinder.Geometry;

        var box = {
            x: 0,
            y: 0,
            height: 0,
            width: 0
        };

        if (!(nodes instanceof Array)) nodes = [nodes];

        for (i = 0; i < nodes.length; i++) {
            node = nodes[i];
            matrix = node.getLayoutTransform();

            treeBox = node.getContentBox();

            if (node.isExpanded() && node.children.length) {
                treeBox = g.mergeBox(treeBox, this.getTreeBox(node.children));
            }

            box = g.mergeBox(box, matrix.transformBox(treeBox));
        }

        return box;
    },

    getOrderHint: function(node) {
        return [];
    }
});

var LayoutCommand = kity.createClass('LayoutCommand', {
    base: Command,

    execute: function(minder, name) {
        var nodes = minder.getSelectedNodes();
        nodes.forEach(function(node) {
            node.layout(name);
        });
    },

    queryValue: function(minder) {
        var node = minder.getSelectedNode();
        if (node) {
            return node.getData('layout');
        }
    },

    queryState: function(minder) {
        return minder.getSelectedNode() ? 0 : -1;
    }
});

var ResetLayoutCommand = kity.createClass('ResetLayoutCommand', {
    base: Command,

    execute: function(minder, name) {
        var nodes = minder.getSelectedNodes();

        if (!nodes.length) nodes = [minder.getRoot()];

        nodes.forEach(function(node) {
            node.traverse(function(child) {
                child.resetLayoutOffset();
                if (!child.isRoot()) {
                    child.setData('layout', null);
                }
            });
        });
        minder.layout(300);
    },

    enableReadOnly: true
});

KityMinder.registerModule('LayoutModule', {
    commands: {
        'layout': LayoutCommand,
        'resetlayout': ResetLayoutCommand
    },
    contextmenu: [{
        command: 'resetlayout'
    }, {
        divider: true
    }],

    commandShortcutKeys: {
        'resetlayout': 'Ctrl+Shift+L'
    }
});
var cssLikeValueMatcher = {
    left: function(value) {
        return 3 in value && value[3] ||
            1 in value && value[1] ||
            value[0];
    },
    right: function(value) {
        return 1 in value && value[1] || value[0];
    },
    top: function(value) {
        return value[0];
    },
    bottom: function(value) {
        return 2 in value && value[2] || value[0];
    }
};

Utils.extend(KityMinder, {
    _themes: {},

    /**
     * 注册一个主题
     *
     * @param  {String} name  主题的名称
     * @param  {Plain} theme 主题的样式描述
     *
     * @example
     *     KityMinder.registerTheme('default', {
     *         'root-color': 'red',
     *         'root-stroke': 'none',
     *         'root-padding': [10, 20]
     *     });
     */
    registerTheme: function(name, theme) {
        KityMinder._themes[name] = theme;
    },

    getThemeList: function() {
        return KityMinder._themes;
    }
});

kity.extendClass(Minder, {

    /**
     * 切换脑图实例上的主题
     * @param  {String} name 要使用的主题的名称
     */
    useTheme: function(name) {

        this.setTheme(name);
        this.refresh(800);

        return true;
    },

    setTheme: function(name) {
        this._theme = name || null;
        this.getRenderTarget().style.background = this.getStyle('background');
        this.fire('themechange', {
            theme: name
        });
    },

    /**
     * 获取脑图实例上的当前主题
     * @return {[type]} [description]
     */
    getTheme: function(node) {
        return this._theme || this.getOptions('defaultTheme');
    },

    getThemeItems: function(node) {
        var theme = this.getTheme(node);
        return KityMinder._themes[this.getTheme(node)];
    },

    /**
     * 获得脑图实例上的样式
     * @param  {String} item 样式名称
     */
    getStyle: function(item, node) {
        var items = this.getThemeItems(node);
        var segment, dir, selector, value, matcher;

        if (item in items) return items[item];

        // 尝试匹配 CSS 数组形式的值
        // 比如 item 为 'pading-left'
        // theme 里有 {'padding': [10, 20]} 的定义，则可以返回 20
        segment = item.split('-');
        if (segment.length < 2) return null;

        dir = segment.pop();
        item = segment.join('-');

        if (item in items) {
            value = items[item];
            if (Utils.isArray(value) && (matcher = cssLikeValueMatcher[dir])) {
                return matcher(value);
            }
            if (!isNaN(value)) return value;
        }

        return null;
    },

    /**
     * 获取指定节点的样式
     * @param  {String} name 样式名称，可以不加节点类型的前缀
     */
    getNodeStyle: function(node, name) {
        var value = this.getStyle(node.getType() + '-' + name, node);
        return value !== null ? value : this.getStyle(name, node);
    }
});

kity.extendClass(MinderNode, {
    getStyle: function(name) {
        return this.getMinder().getNodeStyle(this, name);
    }
});

KityMinder.registerModule('Theme', {
    defaultOptions: {
        defaultTheme: 'fresh-blue'
    },
    commands: {
        'theme': kity.createClass('ThemeCommand', {
            base: Command,

            execute: function(km, name) {
                return km.useTheme(name);
            },

            queryValue: function(km) {
                return km.getTheme() || 'default';
            }
        })
    }
});

Minder.registerInit(function() {
    this.setTheme();
});
Utils.extend(KityMinder, {
    
    compatibility: function(json) {

        var version = json.version || '1.1.3';

        function traverse(node, fn) {
            fn(node);
            if (node.children) node.children.forEach(function(child) {
                traverse(child, fn);
            });
        }

        /* 脑图数据升级 */
        function c_120_130(json) {
            traverse(json, function(node) {
                var data = node.data;
                delete data.layout_bottom_offset;
                delete data.layout_default_offset;
                delete data.layout_filetree_offset;
            });
        }

        /**
         * 脑图数据升级
         * v1.1.3 => v1.2.0
         * */
        function c_113_120(json) {
            // 原本的布局风格
            var ocs = json.data.currentstyle;
            delete json.data.currentstyle;

            // 为 1.2 选择模板，同时保留老版本文件的皮肤
            if (ocs == 'bottom') {
                json.template = 'structure';
                json.theme = 'snow';
            } else if (ocs == 'default') {
                json.template = 'default';
                json.theme = 'classic';
            }

            traverse(json, function(node) {
                var data = node.data;

                // 升级优先级、进度图标
                if ('PriorityIcon' in data) {
                    data.priority = data.PriorityIcon;
                    delete data.PriorityIcon;
                }
                if ('ProgressIcon' in data) {
                    data.progress = 1 + ((data.ProgressIcon - 1) << 1);
                    delete data.ProgressIcon;
                }

                // 删除过时属性
                delete data.point;
                delete data.layout;
            });
        }

        switch (version) {
            case '1.1.3':
                c_113_120(json);
            case '1.2.0':
            case '1.2.1':
                c_120_130(json);
        }

        return json;
    }
});
var Renderer = KityMinder.Renderer = kity.createClass('Renderer', {
    constructor: function(node) {
        this.node = node;
    },

    create: function(node) {
        throw new Error('Not implement: Renderer.create()');
    },

    shouldRender: function(node) {
        return true;
    },

    watchChange: function(data) {
        var changed;

        if (this.watchingData === undefined) {
            changed = true;
        } else if (this.watchingData != data) {
            changed = true;
        } else {
            changed = false;
        }

        this.watchingData = data;
    },

    shouldDraw: function(node) {
        return true;
    },

    update: function(shape, node, box) {
        if (this.shouldDraw()) this.draw(shape, node);
        return this.place(shape, node, box);
    },

    draw: function(shape, node) {
        throw new Error('Not implement: Renderer.draw()');
    },

    place: function(shape, node, box) {
        throw new Error('Not implement: Renderer.place()');
    },

    getRenderShape: function() {
        return this._renderShape || null;
    },

    setRenderShape: function(shape) {
        this._renderShape = shape;
    }
});

kity.extendClass(Minder, (function() {

    function createRendererForNode(node, registered) {
        var renderers = [];

        ['center', 'left', 'right', 'top', 'bottom', 'outline', 'outside'].forEach(function(section) {
            var before = 'before' + section;
            var after = 'after' + section;

            if (registered[before]) {
                renderers = renderers.concat(registered[before]);
            }
            if (registered[section]) {
                renderers = renderers.concat(registered[section]);
            }
            if (registered[after]) {
                renderers = renderers.concat(registered[after]);
            }
        });

        node._renderers = renderers.map(function(Renderer) {
            return new Renderer(node);
        });
    }

    return {

        renderNodeBatch: function(nodes) {
            var rendererClasses = this._rendererClasses;
            var lastBoxes = [];
            var rendererCount = 0;
            var i, j, renderer, node;

            if (!nodes.length) return;

            for (j = 0; j < nodes.length; j++) {
                node = nodes[j];
                if (!node._renderers) {
                    createRendererForNode(node, rendererClasses);
                }
                node._contentBox = new kity.Box();
                this.fire('beforerender', {
                    node: node
                });
            }

            // 所有节点渲染器数量是一致的
            rendererCount = nodes[0]._renderers.length;

            for (i = 0; i < rendererCount; i++) {

                // 获取延迟盒子数据
                for (j = 0; j < nodes.length; j++) {
                    if (typeof(lastBoxes[j]) == 'function') {
                        lastBoxes[j] = lastBoxes[j]();
                    }
                    if (!(lastBoxes[j] instanceof kity.Box)) {
                        lastBoxes[j] = new kity.Box(lastBoxes[j]);
                    }
                }

                for (j = 0; j < nodes.length; j++) {
                    node = nodes[j];
                    renderer = node._renderers[i];

                    // 合并盒子
                    if (lastBoxes[j]) {
                        node._contentBox = node._contentBox.merge(lastBoxes[j]);
                    }

                    // 判断当前上下文是否应该渲染
                    if (renderer.shouldRender(node)) {

                        // 应该渲染，但是渲染图形没创建过，需要创建
                        if (!renderer.getRenderShape()) {
                            renderer.setRenderShape(renderer.create(node));
                            if (renderer.bringToBack) {
                                node.getRenderContainer().prependShape(renderer.getRenderShape());
                            } else {
                                node.getRenderContainer().appendShape(renderer.getRenderShape());
                            }
                        }

                        // 强制让渲染图形显示
                        renderer.getRenderShape().setVisible(true);

                        // 更新渲染图形
                        lastBoxes[j] = renderer.update(renderer.getRenderShape(), node, node._contentBox);
                    }

                    // 如果不应该渲染，但是渲染图形创建过了，需要隐藏起来
                    else if (renderer.getRenderShape()) {
                        renderer.getRenderShape().setVisible(false);
                        lastBoxes[j] = null;
                    }
                }
            }

            for (j = 0; j < nodes.length; j++) {
                this.fire('noderender', {
                    node: nodes[j]
                });
            }
        },

        renderNode: function(node) {
            var rendererClasses = this._rendererClasses;
            var g = KityMinder.Geometry;
            var i, latestBox, renderer;

            if (!node._renderers) {
                createRendererForNode(node, rendererClasses);
            }

            this.fire('beforerender', {
                node: node
            });

            node._contentBox = new kity.Box();

            node._renderers.forEach(function(renderer) {

                // 判断当前上下文是否应该渲染
                if (renderer.shouldRender(node)) {

                    // 应该渲染，但是渲染图形没创建过，需要创建
                    if (!renderer.getRenderShape()) {
                        renderer.setRenderShape(renderer.create(node));
                        if (renderer.bringToBack) {
                            node.getRenderContainer().prependShape(renderer.getRenderShape());
                        } else {
                            node.getRenderContainer().appendShape(renderer.getRenderShape());
                        }
                    }

                    // 强制让渲染图形显示
                    renderer.getRenderShape().setVisible(true);

                    // 更新渲染图形
                    latestBox = renderer.update(renderer.getRenderShape(), node, node._contentBox);

                    if (typeof(latestBox) == 'function') latestBox = latestBox();

                    // 合并渲染区域
                    if (latestBox) {
                        node._contentBox = node._contentBox.merge(latestBox);
                    }
                }

                // 如果不应该渲染，但是渲染图形创建过了，需要隐藏起来
                else if (renderer.getRenderShape()) {
                    renderer.getRenderShape().setVisible(false);
                }

            });

            this.fire('noderender', {
                node: node
            });
        }
    };
})());

kity.extendClass(MinderNode, {
    render: function() {
        if (!this.attached) return;
        this.getMinder().renderNode(this);
        return this;
    },
    renderTree: function() {
        if (!this.attached) return;
        var list = [];
        this.traverse(function(node) {
            list.push(node);
        });
        this.getMinder().renderNodeBatch(list);
        return this;
    },
    getRenderer: function(type) {
        var rs = this._renderers;
        for (var i = 0; i < rs.length; i++) {
            if (rs[i].getType() == type) return rs[i];
        }
        return null;
    },
    getContentBox: function() {
        //if (!this._contentBox) this.render();
        return this.parent && this.parent.isCollapsed() ? new kity.Box() : (this._contentBox || new kity.Box());
    }
});
/* global Renderer: true */

utils.extend(KityMinder, {
    _connectProviders: {},

    _defaultConnectProvider: function(node, parent, connection) {
        connection.setPathData([
            'M', parent.getLayoutVertexOut(),
            'L', node.getLayoutVertexIn()
        ]);
    },

    registerConnectProvider: function(name, provider) {
        KityMinder._connectProviders[name] = provider;
    },

    getConnectProvider: function(name) {
        return KityMinder._connectProviders[name] || KityMinder._defaultConnectProvider;
    }
});

kity.extendClass(MinderNode, {
    getConnectProvider: function() {
        return KityMinder.getConnectProvider(this.getConnect());
    },

    getConnect: function() {
        return null;
    },

    getConnection: function() {
        return this._connection || null;
    }
});

kity.extendClass(Minder, {

    getConnectContainer: function() {
        return this._connectContainer;
    },

    createConnect: function(node) {
        if (node.isRoot()) return;

        var connection = new kity.Path();

        node._connection = connection;

        this._connectContainer.addShape(connection);
        this.updateConnect(node);
    },

    removeConnect: function(node) {
        var me = this;
        node.traverse(function(node) {
            me._connectContainer.removeShape(node._connection);
            node._connection = null;
        });
    },

    updateConnect: function(node) {

        var connection = node._connection;
        var parent = node.parent;

        if (!parent || !connection) return;

        if (parent.isCollapsed()) {
            connection.setVisible(false);
            return;
        }
        connection.setVisible(true);

        var provider = node.getConnectProvider();

        var strokeColor = node.getStyle('connect-color') || 'white',
            strokeWidth = node.getStyle('connect-width') || 2;

        connection.stroke(strokeColor, strokeWidth);

        provider(node, parent, connection, strokeWidth, strokeColor);

        if (strokeWidth % 2 === 0) {
            connection.setTranslate(0.5, 0.5);
        } else {
            connection.setTranslate(0, 0);
        }
    }
});

KityMinder.registerModule('Connect', {
    init: function() {
        this._connectContainer = new kity.Group().setId(KityMinder.uuid('minder_connect_group'));
        this.getRenderContainer().prependShape(this._connectContainer);
    },
    events: {
        'nodeattach': function(e) {
            this.createConnect(e.node);
        },
        'nodedetach': function(e) {
            this.removeConnect(e.node);
        },
        'layoutapply layoutfinish noderender': function(e) {
            this.updateConnect(e.node);
        }
    }
});
utils.extend(KityMinder, {
    _templates: {},
    registerTemplate: function(name, supports) {
        KityMinder._templates[name] = supports;
    },
    getTemplateList: function() {
        return KityMinder._templates;
    }
});

kity.extendClass(Minder, (function() {
    var originGetTheme = Minder.prototype.getTheme;
    return {
        useTemplate: function(name, duration) {
            this.setTemplate(name);
            this.refresh(duration || 800);
        },

        getTemplate: function() {
            return this._template || 'default';
        },

        setTemplate: function(name) {
            this._template = name || null;
        },

        getTemplateSupport: function(method) {
            var supports = KityMinder._templates[this.getTemplate()];
            return supports && supports[method];
        },

        getTheme: function(node) {
            var support = this.getTemplateSupport('getTheme') || originGetTheme;
            return support.call(this, node);
        }
    };
})());


kity.extendClass(MinderNode, (function() {
    var originGetLayout = MinderNode.prototype.getLayout;
    var originGetConnect = MinderNode.prototype.getConnect;
    return {
        getLayout: function() {
            var support = this.getMinder().getTemplateSupport('getLayout') || originGetLayout;
            return support.call(this, this);
        },

        getConnect: function() {
            var support = this.getMinder().getTemplateSupport('getConnect') || originGetConnect;
            return support.call(this, this);
        }
    };
})());

KityMinder.registerModule('TemplateModule', {
    commands: {
        'template': kity.createClass('TemplateCommand', {
            base: Command,

            execute: function(minder, name) {
                minder.useTemplate(name);
                minder.execCommand('camera');
            },

            queryValue: function(minder) {
                return minder.getTemplate() || 'default';
            }
        })
    }
});
//添加多语言模块
kity.extendClass( Minder, {
    getLang: function ( path ) {

        var lang = KM.LANG[ this.getOptions( 'lang' ) ];
        if ( !lang ) {
            throw Error( "not import language file" );
        }
        path = ( path || "" ).split( "." );
        for ( var i = 0, ci; ci = path[ i++ ]; ) {
            lang = lang[ ci ];
            if ( !lang ) break;
        }

        if (typeof(lang) == 'string') {
            var args = arguments;
            return lang.replace(/\{(\d+)\}/ig, function(match, gindex) {
                return args[+gindex + 1] != undefined && args[+gindex + 1].toString() || match;
            });
        }
        return lang;
    }
} );
//这里只放不是由模块产生的默认参数
KM.defaultOptions = {
    zIndex : 1000,
    lang:'zh-cn',
    readyOnly:false
};
kity.extendClass( Minder, function(){

    var ROOTKEY = 'kityminder_preference';

    //创建存储机制
    var LocalStorage = ( function () {

        var storage = window.localStorage,
            LOCAL_FILE = "localStorage";

        return {

            saveLocalData: function ( key, data ) {

                if ( storage && data) {
                    storage.setItem( key, data  );
                    return true;
                }

                return false;

            },

            getLocalData: function ( key ) {

                if ( storage ) {
                    return storage.getItem( key );
                }

                return null;

            },

            removeItem: function ( key ) {

                if (storage) storage.removeItem( key );

            }

        };

    } )();
    return {
        setPreferences: function(key,value){
            var obj = {};
            if ( Utils.isString( key ) ) {
                obj[ key ] = value;
            } else {
                obj = key;
            }
            var data = LocalStorage.getLocalData(ROOTKEY);
            if(data){
                data = JSON.parse(data);
                utils.extend(data, obj);
            }else{
                data = obj;
            }
            LocalStorage.saveLocalData(ROOTKEY,JSON.stringify(data));
        },
        getPreferences: function(key){
            var data = LocalStorage.getLocalData(ROOTKEY);
            if(data){
                data = JSON.parse(data);
                return key ? data[key] : data;
            }
            return {};
        },
        resetPreferences: function(pres){
            var str = pres ? JSON.stringify(pres) : '';
            LocalStorage.saveLocalData(str);
        }
    };

}() );
var keymap = KityMinder.keymap = (function(origin) {
    var ret = {};
    for (var key in origin) {
        if (origin.hasOwnProperty(key)) {
            ret[key] = origin[key];
            ret[key.toLowerCase()] = origin[key];
        }
    }
    var aKeyCode = 65;
    var aCharCode = 'a'.charCodeAt(0);

    // letters
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(function(letter) {
        ret[letter] = aKeyCode + (letter.charCodeAt(0) - aCharCode);
    });

    // numbers
    var n = 9;
    do {
        ret[n.toString()] = n + 48;
    } while(--n);

    return ret;
})({
    'Backspace': 8,
    'Tab': 9,
    'Enter': 13,

    'Shift': 16,
    'Control': 17,
    'Alt': 18,
    'CapsLock': 20,

    'Esc': 27,

    'Spacebar': 32,

    'PageUp': 33,
    'PageDown': 34,
    'End': 35,
    'Home': 36,

    'Insert': 45,

    'Left': 37,
    'Up': 38,
    'Right': 39,
    'Down': 40,

    'direction': {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    },

    'Del': 46,

    'NumLock': 144,

    'Cmd': 91,
    'CmdFF': 224,
    'F1': 112,
    'F2': 113,
    'F3': 114,
    'F4': 115,
    'F5': 116,
    'F6': 117,
    'F7': 118,
    'F8': 119,
    'F9': 120,
    'F10': 121,
    'F11': 122,
    'F12': 123,

    '`': 192,
    '=': 187,
    '-': 189,

    '/': 191,
    '.': 190,
    controlKeys: {
        16: 1,
        17: 1,
        18: 1,
        20: 1,
        91: 1,
        224: 1
    },
    'notContentChange': {
        13: 1,
        9: 1,

        33: 1,
        34: 1,
        35: 1,
        36: 1,

        16: 1,
        17: 1,
        18: 1,
        20: 1,
        91: 1,

        //上下左右
        37: 1,
        38: 1,
        39: 1,
        40: 1,

        113: 1,
        114: 1,
        115: 1,
        144: 1,
        27: 1
    },

    'isSelectedNodeKey': {
        //上下左右
        37: 1,
        38: 1,
        39: 1,
        40: 1,
        13: 1,
        9: 1
    }

});
/* global Layout:true */
KityMinder.registerLayout('mind', kity.createClass({
    base: Layout,

    doLayout: function(node, children) {
        var layout = this;
        var half = Math.ceil(node.children.length / 2);
        var right = [];
        var left = [];

        children.forEach(function(child) {
            if (child.getIndex() < half) right.push(child);
            else left.push(child);
        });

        var leftLayout = KityMinder.getLayoutInstance('left');
        var rightLayout = KityMinder.getLayoutInstance('right');

        leftLayout.doLayout(node, left);
        rightLayout.doLayout(node, right);

        var box = node.getContentBox();
        node.setVertexOut(new kity.Point(box.cx, box.cy));
        node.setLayoutVectorOut(new kity.Vector(0, 0));
    },

    getOrderHint: function(node) {
        var hint = [];
        var box = node.getLayoutBox();
        var offset = 5;

        hint.push({
            type: 'up',
            node: node,
            area: {
                x: box.x,
                y: box.top - node.getStyle('margin-top') - offset,
                width: box.width,
                height: node.getStyle('margin-top')
            },
            path: ['M', box.x, box.top - offset, 'L', box.right, box.top - offset]
        });

        hint.push({
            type: 'down',
            node: node,
            area: {
                x: box.x,
                y: box.bottom + offset,
                width: box.width,
                height: node.getStyle('margin-bottom')
            },
            path: ['M', box.x, box.bottom + offset, 'L', box.right, box.bottom + offset]
        });
        return hint;
    }
}));
/* global Layout:true */

[-1, 1].forEach(function (dir) {
    var name = 'filetree-' + (dir > 0 ? 'down' : 'up');

    KityMinder.registerLayout(name, kity.createClass({
        base: Layout,

        doLayout: function(parent, children, round) {
            var pBox = parent.getContentBox();
            var indent = 20;

            parent.setVertexOut(new kity.Point(pBox.left + indent, dir > 0 ? pBox.bottom : pBox.top));
            parent.setLayoutVectorOut(new kity.Vector(0, dir));

            if (!children.length) return;

            children.forEach(function(child) {
                var cbox = child.getContentBox();
                child.setLayoutTransform(new kity.Matrix());

                child.setVertexIn(new kity.Point(cbox.left, cbox.cy));
                child.setLayoutVectorIn(new kity.Vector(1, 0));
            });

            this.align(children, 'left');
            this.stack(children, 'y');

            var xAdjust = 0;
            xAdjust += pBox.left;
            xAdjust += indent;
            xAdjust += children[0].getStyle('margin-left');

            var yAdjust = 0;

            if (dir > 0) {
                yAdjust += pBox.bottom;
                yAdjust += parent.getStyle('margin-bottom');
                yAdjust += children[0].getStyle('margin-top');
            } else {
                yAdjust -= this.getTreeBox(children).bottom;
                yAdjust += pBox.top;
                yAdjust -= parent.getStyle('margin-top');
                yAdjust -= children[0].getStyle('margin-bottom');
            }

            this.move(children, xAdjust, yAdjust);

        },

        getOrderHint: function(node) {
            var hint = [];
            var box = node.getLayoutBox();
            var offset = node.getLevel() > 1 ? 3 : 5;

            hint.push({
                type: 'up',
                node: node,
                area: {
                    x: box.x,
                    y: box.top - node.getStyle('margin-top') - offset,
                    width: box.width,
                    height: node.getStyle('margin-top')
                },
                path: ['M', box.x, box.top - offset, 'L', box.right, box.top - offset]
            });

            hint.push({
                type: 'down',
                node: node,
                area: {
                    x: box.x,
                    y: box.bottom + offset,
                    width: box.width,
                    height: node.getStyle('margin-bottom')
                },
                path: ['M', box.x, box.bottom + offset, 'L', box.right, box.bottom + offset]
            });
            return hint;
        }
    }));

});
/* global Layout:true */

var layouts = ['left', 'right', 'top', 'bottom'];

layouts.forEach(function(name) {

    var axis = (name == 'left' || name == 'right') ? 'x' : 'y';
    var dir = (name == 'left' || name == 'top') ? -1 : 1;

    var oppsite = {
        'left': 'right',
        'right': 'left',
        'top': 'bottom',
        'bottom': 'top',
        'x': 'y',
        'y': 'x'
    };

    function getOrderHint(node) {
        var hint = [];
        var box = node.getLayoutBox();
        var offset = 5;

        if (axis == 'x') {
            hint.push({
                type: 'up',
                node: node,
                area: {
                    x: box.x,
                    y: box.top - node.getStyle('margin-top') - offset,
                    width: box.width,
                    height: node.getStyle('margin-top')
                },
                path: ['M', box.x, box.top - offset, 'L', box.right, box.top - offset]
            });

            hint.push({
                type: 'down',
                node: node,
                area: {
                    x: box.x,
                    y: box.bottom + offset,
                    width: box.width,
                    height: node.getStyle('margin-bottom')
                },
                path: ['M', box.x, box.bottom + offset, 'L', box.right, box.bottom + offset]
            });
        } else {
            hint.push({
                type: 'up',
                node: node,
                area: {
                    x: box.left - node.getStyle('margin-left') - offset,
                    y: box.top,
                    width: node.getStyle('margin-left'),
                    height: box.height
                },
                path: ['M', box.left - offset, box.top, 'L', box.left - offset, box.bottom]
            });

            hint.push({
                type: 'down',
                node: node,
                area: {
                    x: box.right + offset,
                    y: box.top,
                    width: node.getStyle('margin-right'),
                    height: box.height
                },
                path: ['M', box.right + offset, box.top, 'L', box.right + offset, box.bottom]
            });
        }
        return hint;
    }

    KityMinder.registerLayout(name, kity.createClass({

        base: Layout,

        doLayout: function(parent, children) {

            var pbox = parent.getContentBox();

            if (axis == 'x') {
                parent.setVertexOut(new kity.Point(pbox[name], pbox.cy));
                parent.setLayoutVectorOut(new kity.Vector(dir, 0));
            } else {
                parent.setVertexOut(new kity.Point(pbox.cx, pbox[name]));
                parent.setLayoutVectorOut(new kity.Vector(0, dir));
            }

            if (!children.length) {
                return false;
            }

            children.forEach(function(child) {
                var cbox = child.getContentBox();
                child.setLayoutTransform(new kity.Matrix());

                if (axis == 'x') {
                    child.setVertexIn(new kity.Point(cbox[oppsite[name]], cbox.cy));
                    child.setLayoutVectorIn(new kity.Vector(dir, 0));
                } else {
                    child.setVertexIn(new kity.Point(cbox.cx, cbox[oppsite[name]]));
                    child.setLayoutVectorIn(new kity.Vector(0, dir));
                }
            });

            this.align(children, oppsite[name]);
            this.stack(children, oppsite[axis]);

            var bbox = this.getBranchBox(children);
            var xAdjust, yAdjust;

            if (axis == 'x') {
                xAdjust = pbox[name];
                xAdjust += dir * parent.getStyle('margin-' + name);
                xAdjust += dir * children[0].getStyle('margin-' + oppsite[name]);

                yAdjust = pbox.bottom;
                yAdjust -= pbox.height / 2;
                yAdjust -= bbox.height / 2;
                yAdjust -= bbox.y;
            } else {
                xAdjust = pbox.right;
                xAdjust -= pbox.width / 2;
                xAdjust -= bbox.width / 2;
                xAdjust -= bbox.x;

                yAdjust = pbox[name];
                yAdjust += dir * parent.getStyle('margin-' + name);
                yAdjust += dir * children[0].getStyle('margin-' + oppsite[name]);
            }

            this.move(children, xAdjust, yAdjust);
        },

        getOrderHint: getOrderHint
    }));
});
/**
 * @fileOverview
 *
 * 鱼骨图主骨架布局
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
/* global Layout:true */
KityMinder.registerLayout('fish-bone-master', kity.createClass('FishBoneMasterLayout', {
    base: Layout,

    doLayout: function(parent, children, round) {

        var upPart = [],
            downPart = [];

        var child = children[0];
        var pBox = parent.getContentBox();

        parent.setVertexOut(new kity.Point(pBox.right, pBox.cy));
        parent.setLayoutVectorOut(new kity.Vector(1, 0));

        if (!child) return;

        var cBox = child.getContentBox();
        var pMarginRight = parent.getStyle('margin-right');
        var cMarginLeft = child.getStyle('margin-left');
        var cMarginTop = child.getStyle('margin-top');
        var cMarginBottom = child.getStyle('margin-bottom');

        children.forEach(function(child, index) {
            child.setLayoutTransform(new kity.Matrix());
            var cBox = child.getContentBox();

            if (index % 2) {
                downPart.push(child);
                child.setVertexIn(new kity.Point(cBox.left, cBox.top));
                child.setLayoutVectorIn(new kity.Vector(1, 1));
            }
            else {
                upPart.push(child);
                child.setVertexIn(new kity.Point(cBox.left, cBox.bottom));
                child.setLayoutVectorIn(new kity.Vector(1, -1));
            }

        });

        this.stack(upPart, 'x');
        this.stack(downPart, 'x');

        this.align(upPart, 'bottom');
        this.align(downPart, 'top');

        var xAdjust = pBox.right + pMarginRight + cMarginLeft;
        var yAdjustUp = pBox.cy - cMarginBottom - parent.getStyle('margin-top');
        var yAdjustDown = pBox.cy + cMarginTop + parent.getStyle('margin-bottom');

        this.move(upPart, xAdjust, yAdjustUp);
        this.move(downPart, xAdjust + cMarginLeft, yAdjustDown);

        // children.forEach(function(child, index) {
        //     var matrix = child.getLayoutTransform();
        //     var dx, dy;
        //     dx = matrix.getMatrix().e;
        //     dy = matrix.getMatrix().f;
        //     matrix.translate(-dx, -dy);
        //     matrix.rotate(index % 2 ? 45 : -45);
        //     matrix.translate(dx, dy);
        // });

    }
}));
/**
 * @fileOverview
 *
 * 
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

/* global Layout: true */
KityMinder.registerLayout('fish-bone-slave', kity.createClass('FishBoneSlaveLayout', {
    base: Layout,

    doLayout: function (parent, children, round) {

        var layout = this;
        var abs = Math.abs;
        var GOLD_CUT = 1 - 0.618;

        var pBox = parent.getContentBox();
        var vi = parent.getLayoutVectorIn();

        parent.setLayoutVectorOut(vi);

        var goldX = pBox.left + pBox.width * GOLD_CUT;
        var pout = new kity.Point(goldX, vi.y > 0 ? pBox.bottom : pBox.top);
        parent.setVertexOut(pout);

        var child = children[0];
        if (!child) return;

        var cBox = child.getContentBox();

        children.forEach(function(child, index) {
            child.setLayoutTransform(new kity.Matrix());
            child.setLayoutVectorIn(new kity.Vector(1, 0));
            child.setVertexIn(new kity.Point(cBox.left, cBox.cy));
        });

        this.stack(children, 'y');
        this.align(children, 'left');
        var xAdjust = 0, yAdjust = 0;
        
        xAdjust += pout.x;

        if (parent.getLayoutVectorOut().y < 0) {
            yAdjust -= this.getTreeBox(children).bottom;
            yAdjust += parent.getContentBox().top;
            yAdjust -= parent.getStyle('margin-top');
            yAdjust -= child.getStyle('margin-bottom');
        } else {
            yAdjust += parent.getContentBox().bottom;
            yAdjust += parent.getStyle('margin-bottom');
            yAdjust += child.getStyle('margin-top');
        }

        this.move(children, xAdjust, yAdjust);

        if (round == 2) {
            children.forEach(function(child) {
                var m = child.getLayoutTransform();
                var cbox = child.getContentBox();
                var pin = m.transformPoint(new kity.Point(cbox.left, 0));
                layout.move([child], abs(pin.y - pout.y), 0);
            });
        }
    }
}));
/**
 * @fileOverview
 *
 * 提供折线相连的方法
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerConnectProvider('bezier', function(node, parent, connection) {

    // 连线起点和终点
    var po = parent.getLayoutVertexOut(),
        pi = node.getLayoutVertexIn();

    // 连线矢量和方向
    var v = parent.getLayoutVectorOut().normalize();

    var r = Math.round;
    var abs = Math.abs;

    var pathData = [];
    pathData.push('M', r(po.x), r(po.y));

    if (abs(v.x) > abs(v.y)) {
        // x - direction
        var hx = (pi.x + po.x) / 2;
        pathData.push('C', hx, po.y, hx, pi.y, pi.x, pi.y);
    } else {
        // y - direction
        var hy = (pi.y + po.y) / 2;
        pathData.push('C', po.x, hy, pi.x, hy, pi.x, pi.y);
    }

    connection.setMarker(null);
    connection.setPathData(pathData);
});
/**
 * @fileOverview
 *
 * 提供折线相连的方法
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerConnectProvider('poly', function(node, parent, connection, width) {

    // 连线起点和终点
    var po = parent.getLayoutVertexOut(),
        pi = node.getLayoutVertexIn();

    // 连线矢量和方向
    var v = parent.getLayoutVectorOut().normalize();

    var r = Math.round;
    var abs = Math.abs;

    var pathData = [];
    pathData.push('M', r(po.x), r(po.y));

    switch (true) {
        case abs(v.x) > abs(v.y) && v.x < 0:
            // left
            pathData.push('h', -parent.getStyle('margin-left'));
            pathData.push('v', pi.y - po.y);
            pathData.push('H', pi.x);
            break;

        case abs(v.x) > abs(v.y) && v.x >= 0:
            // right
            pathData.push('h', parent.getStyle('margin-right'));
            pathData.push('v', pi.y - po.y);
            pathData.push('H', pi.x);
            break;

        case abs(v.x) <= abs(v.y) && v.y < 0:
            // top
            pathData.push('v', -parent.getStyle('margin-top'));
            pathData.push('h', pi.x - po.x);
            pathData.push('V', pi.y);
            break;

        case abs(v.x) <= abs(v.y) && v.y >= 0:
            // bottom
            pathData.push('v', parent.getStyle('margin-bottom'));
            pathData.push('h', pi.x - po.x);
            pathData.push('V', pi.y);
            break;

    }

    connection.setMarker(null);
    connection.setPathData(pathData);
});
/**
 * @fileOverview
 *
 * 圆弧连线
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

var connectMarker = new kity.Marker().pipe(function() {
    var r = 7;
    var dot = new kity.Circle(r - 1);
    this.addShape(dot);
    this.setRef(r - 1, 0).setViewBox(-r, -r, r + r, r + r).setWidth(r).setHeight(r);
    this.dot = dot;
    this.node.setAttribute('markerUnits', 'userSpaceOnUse');
});

KityMinder.registerConnectProvider('arc', function(node, parent, connection, width, color) {

    var box = node.getLayoutBox(),
        pBox = parent.getLayoutBox();

    var start, end, vector;
    var abs = Math.abs;
    var pathData = [];
    var side = box.x > pBox.x ? 'right' : 'left';

    node.getMinder().getPaper().addResource(connectMarker);

    start = new kity.Point(pBox.cx, pBox.cy);
    end = side == 'left' ?
        new kity.Point(box.right + 2, box.cy) :
        new kity.Point(box.left - 2, box.cy);

    vector = kity.Vector.fromPoints(start, end);
    pathData.push('M', start);
    pathData.push('A', abs(vector.x), abs(vector.y), 0, 0, (vector.x * vector.y > 0 ? 0 : 1), end);

    connection.setMarker(connectMarker);
    connectMarker.dot.fill(color);

    connection.setPathData(pathData);
});
/**
 * @fileOverview
 *
 * 下划线连线
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerConnectProvider('under', function(node, parent, connection, width, color) {

    var box = node.getLayoutBox(),
        pBox = parent.getLayoutBox();

    var start, end, vector;
    var abs = Math.abs;
    var pathData = [];
    var side = box.x > pBox.x ? 'right' : 'left';


    var radius = node.getStyle('connect-radius');
    var underY = box.bottom + 3;
    var startY = parent.getType() == 'sub' ? pBox.bottom + 3 : pBox.cy;
    var p1, p2, p3, mx;

    if (side == 'right') {
        p1 = new kity.Point(pBox.right, startY);
        p2 = new kity.Point(box.left - 10, underY);
        p3 = new kity.Point(box.right, underY);
    } else {
        p1 = new kity.Point(pBox.left, startY);
        p2 = new kity.Point(box.right + 10, underY);
        p3 = new kity.Point(box.left, underY);
    }

    mx = (p1.x + p2.x) / 2;

    pathData.push('M', p1);
    pathData.push('C', mx, p1.y, mx, p2.y, p2);
    pathData.push('L', p3);

    connection.setMarker(null);

    connection.setPathData(pathData);
});
/**
 * @fileOverview
 *
 * "L" 连线
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerConnectProvider('l', function(node, parent, connection) {

    var po = parent.getLayoutVertexOut();
    var pi = node.getLayoutVertexIn();
    var vo = parent.getLayoutVectorOut();

    var pathData = [];
    var r = Math.round,
        abs = Math.abs;

    pathData.push('M', po.round());
    if (abs(vo.x) > abs(vo.y)) {
        pathData.push('H', r(pi.x));
    } else {
        pathData.push('V', pi.y);
    }
    pathData.push('L', pi);

    connection.setPathData(pathData);
});
/**
 * @fileOverview
 *
 * 鱼骨头主干连线
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerConnectProvider('fish-bone-master', function(node, parent, connection) {

    var pout = parent.getLayoutVertexOut(),
        pin = node.getLayoutVertexIn();

    var abs = Math.abs;

    var dy = abs(pout.y - pin.y),
        dx = abs(pout.x - pin.x);

    var pathData = [];

    pathData.push('M', pout.x, pout.y);
    pathData.push('h', dx - dy);
    pathData.push('L', pin.x, pin.y);

    connection.setMarker(null);
    connection.setPathData(pathData);
});
['classic', 'classic-compact'].forEach(function(name) {
    var compact = name == 'classic-compact';

    KityMinder.registerTheme(name, {
        'background': '#3A4144 url(ui/theme/default/images/grid.png) repeat',

        'root-color': '#430',
        'root-background': '#e9df98',
        'root-stroke': '#e9df98',
        'root-font-size': 24,
        'root-padding': compact ? [10, 25] : [15, 25],
        'root-margin': compact ? [15, 25] : [30, 100],
        'root-radius': 30,
        'root-space': 10,
        'root-shadow': 'rgba(0, 0, 0, .25)',

        'main-color': '#333',
        'main-background': '#a4c5c0',
        'main-stroke': '#a4c5c0',
        'main-font-size': 16,
        'main-padding': compact ? [5, 15] : [6, 20],
        'main-margin': compact ? [5, 10] : 20,
        'main-radius': 10,
        'main-space': 5,
        'main-shadow': 'rgba(0, 0, 0, .25)',

        'sub-color': 'white',
        'sub-background': 'transparent',
        'sub-stroke': 'none',
        'sub-font-size': 12,
        'sub-padding': [5, 10],
        'sub-margin': compact ? [5, 10] : [15, 20],
        'sub-tree-margin': 30,
        'sub-radius': 5,
        'sub-space': 5,

        'connect-color': 'white',
        'connect-width': 2,
        'main-connect-width': 3,
        'connect-radius': 5,

        'selected-background': 'rgb(254, 219, 0)',
        'selected-stroke': 'rgb(254, 219, 0)',
        'selected-color': 'black',

        'marquee-background': 'rgba(255,255,255,.3)',
        'marquee-stroke': 'white',

        'drop-hint-color': 'yellow',
        'sub-drop-hint-width': 2,
        'main-drop-hint-width': 4,
        'root-drop-hint-width': 4,

        'order-hint-area-color': 'rgba(0, 255, 0, .5)',
        'order-hint-path-color': '#0f0',
        'order-hint-path-width': 1,

        'text-selection-color': 'rgb(27,171,255)',
        'line-height':1.5
    });
});


['snow', 'snow-compact'].forEach(function(name) {
    var compact = name == 'snow-compact';

    KityMinder.registerTheme(name, {
        'background': '#3A4144 url(ui/theme/default/images/grid.png) repeat',

        'root-color': '#430',
        'root-background': '#e9df98',
        'root-stroke': '#e9df98',
        'root-font-size': 24,
        'root-padding': compact ? [5, 10] : [15, 25],
        'root-margin': compact ? 15 : 30,
        'root-radius': 5,
        'root-space': 10,
        'root-shadow': 'rgba(0, 0, 0, .25)',

        'main-color': '#333',
        'main-background': '#a4c5c0',
        'main-stroke': '#a4c5c0',
        'main-font-size': 16,
        'main-padding': compact ? [4, 10] : [6, 20],
        'main-margin': compact ? [5, 10] : [20, 40],
        'main-radius': 5,
        'main-space': 5,
        'main-shadow': 'rgba(0, 0, 0, .25)',

        'sub-color': 'black',
        'sub-background': 'white',
        'sub-stroke': 'white',
        'sub-font-size': 12,
        'sub-padding': [5, 10],
        'sub-margin': compact ? [5, 10] : [10, 20],
        'sub-radius': 5,
        'sub-space': 5,

        'connect-color': 'white',
        'connect-width': 2,
        'main-connect-width': 3,
        'connect-radius': 5,

        'selected-background': 'rgb(254, 219, 0)',
        'selected-stroke': 'rgb(254, 219, 0)',

        'marquee-background': 'rgba(255,255,255,.3)',
        'marquee-stroke': 'white',

        'drop-hint-color': 'yellow',
        'drop-hint-width': 4,

        'order-hint-area-color': 'rgba(0, 255, 0, .5)',
        'order-hint-path-color': '#0f0',
        'order-hint-path-width': 1,

        'text-selection-color': 'rgb(27,171,255)',
        'line-height':1.5
    });
});
(function() {
    function hsl(h, s, l) {
        return kity.Color.createHSL(h, s, l);
    }

    function generate(h, compat) {
        return {
            'background': '#fbfbfb',

            'root-color': 'white',
            'root-background': hsl(h, 37, 60),
            'root-stroke': hsl(h, 37, 60),
            'root-font-size': 16,
            'root-padding': compat ? [6, 12] : [12, 24],
            'root-margin': compat ? 10 : [30, 100],
            'root-radius': 5,
            'root-space': 10,

            'main-color': 'black',
            'main-background': hsl(h, 33, 95),
            'main-stroke': hsl(h, 37, 60),
            'main-stroke-width': 1,
            'main-font-size': 14,
            'main-padding': [6, 20],
            'main-margin': compat ? 8 : 20,
            'main-radius': 3,
            'main-space': 5,

            'sub-color': 'black',
            'sub-background': 'transparent',
            'sub-stroke': 'none',
            'sub-font-size': 12,
            'sub-padding': compat ? [3, 5] : [5, 10],
            'sub-margin': compat ? [4, 8] : [15, 20],
            'sub-radius': 5,
            'sub-space': 5,

            'connect-color': hsl(h, 37, 60),
            'connect-width': 1,
            'connect-radius': 5,

            'selected-stroke': hsl(h, 26, 30),
            'selected-stroke-width': '3',

            'marquee-background': hsl(h, 100, 80).set('a', 0.1),
            'marquee-stroke': hsl(h, 37, 60),

            'drop-hint-color': hsl(h, 26, 35),
            'drop-hint-width': 5,

            'order-hint-area-color': hsl(h, 100, 30).set('a', 0.5),
            'order-hint-path-color': hsl(h, 100, 25),
            'order-hint-path-width': 1,

            'text-selection-color': hsl(h, 100, 20),
            'line-height':1.5
        };
    }

    var plans = {
        red: 0,
        soil: 25,
        green: 122,
        blue: 204,
        purple: 246,
        pink: 334
    };
    var name;
    for (name in plans) {
        KityMinder.registerTheme('fresh-' + name, generate(plans[name]));
        KityMinder.registerTheme('fresh-' + name + '-compat', generate(plans[name], true));
    }

})();
KityMinder.registerTheme('fish', {
    'background': '#3A4144 url(ui/theme/default/images/grid.png) repeat',

    'root-color': '#430',
    'root-background': '#e9df98',
    'root-stroke': '#e9df98',
    'root-font-size': 24,
    'root-padding': [35, 35],
    'root-margin': 30,
    'root-radius': 100,
    'root-space': 10,
    'root-shadow': 'rgba(0, 0, 0, .25)',

    'main-color': '#333',
    'main-background': '#a4c5c0',
    'main-stroke': '#a4c5c0',
    'main-font-size': 16,
    'main-padding': [6, 20],
    'main-margin': [20, 20],
    'main-radius': 5,
    'main-space': 5,
    'main-shadow': 'rgba(0, 0, 0, .25)',

    'sub-color': 'black',
    'sub-background': 'white',
    'sub-stroke': 'white',
    'sub-font-size': 12,
    'sub-padding': [5, 10],
    'sub-margin': [10],
    'sub-radius': 5,
    'sub-space': 5,

    'connect-color': 'white',
    'connect-width': 3,
    'main-connect-width': 3,
    'connect-radius': 5,

    'selected-background': 'rgb(254, 219, 0)',
    'selected-stroke': 'rgb(254, 219, 0)',

    'marquee-background': 'rgba(255,255,255,.3)',
    'marquee-stroke': 'white',

    'drop-hint-color': 'yellow',
    'drop-hint-width': 4,

    'order-hint-area-color': 'rgba(0, 255, 0, .5)',
    'order-hint-path-color': '#0f0',
    'order-hint-path-width': 1,

    'text-selection-color': 'rgb(27,171,255)',
    'line-height':1.5
});
KityMinder.registerTheme('wire', {
    'background': 'black',

    'color': '#999',
    'stroke': 'none',
    'padding': 10,
    'margin': 20,
    'font-size': 14,

    'connect-color': '#999',
    'connect-width': 1,

    'selected-background': '#999',
    'selected-color': 'black',

    'marquee-background': 'rgba(255,255,255,.3)',
    'marquee-stroke': 'white',

    'drop-hint-color': 'yellow',
    'sub-drop-hint-width': 2,
    'main-drop-hint-width': 4,
    'root-drop-hint-width': 4,

    'order-hint-area-color': 'rgba(0, 255, 0, .5)',
    'order-hint-path-color': '#0f0',
    'order-hint-path-width': 1,

    'text-selection-color': 'rgb(27,171,255)',
    'line-height':1.5
});
/**
 * @fileOverview
 *
 * 默认模板 - 脑图模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerTemplate('default', {

    getLayout: function(node) {

        if (node.getData('layout')) return node.getData('layout');

        var level = node.getLevel();

        // 根节点
        if (level === 0) {
            return 'mind';
        }

        // 一级节点
        if (level === 1) {
            return node.getLayoutPointPreview().x > 0 ? 'right': 'left';
        }

        return node.parent.getLayout();
    },

    getConnect: function(node) {
        if (node.getLevel() == 1) return 'arc';
        return 'under';
    }
});
/**
 * @fileOverview
 *
 * 组织结构图模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerTemplate('structure', {

    getLayout: function(node) {
        return node.getData('layout') || 'bottom';
    },

    getConnect: function(node) {
        return 'poly';
    }
});
/**
 * @fileOverview
 *
 * 文件夹模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerTemplate('filetree', {

    getLayout: function(node) {
        if (node.getData('layout')) return node.getData('layout');
        if (node.isRoot()) return 'bottom';

        return 'filetree-down';
    },

    getConnect: function(node) {
        if (node.getLevel() == 1) {
            return 'poly';
        }
        return 'l';
    }
});
/**
 * @fileOverview
 *
 * 往右布局结构模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerTemplate('right', {

    getLayout: function(node) {
        return node.getData('layout') || 'right';
    },

    getConnect: function(node) {
        if (node.getLevel() == 1) return 'arc';
        return 'bezier';
    }
});
/**
 * @fileOverview
 *
 * 默认模板 - 鱼骨头模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerTemplate('fish-bone', {

    getLayout: function(node) {

        if (node.getData('layout')) return node.getData('layout');

        var level = node.getLevel();

        // 根节点
        if (level === 0) {
            return 'fish-bone-master';
        }

        // 一级节点
        if (level === 1) {
            return 'fish-bone-slave';
        }

        return node.getLayoutPointPreview().y > 0 ? 'filetree-up': 'filetree-down';
    },

    getConnect: function(node) {
        switch (node.getLevel()) {
            case 1: return 'fish-bone-master';
            case 2: return 'line';
            default: return 'l';
        }
    }
});
var AppendChildCommand = kity.createClass('AppendChildCommand', {
    base: Command,
    execute: function(km, text) {
        var parent = km.getSelectedNode();
        if (!parent) {
            return null;
        }
        text = text || km.getLang('topic');
        parent.expand();
        var node = km.createNode(text, parent);
        km.select(node, true);
        node.render();
        km.layout(600);
    },
    queryState: function(km) {
        var selectedNode = km.getSelectedNode();
        return selectedNode ? 0 : -1;
    }
});

var AppendSiblingCommand = kity.createClass('AppendSiblingCommand', {
    base: Command,
    execute: function(km, text) {
        var sibling = km.getSelectedNode();
        var parent = sibling.parent;
        if (!parent) {
            return km.execCommand('AppendChildNode', text);
        }
        text = text || km.getLang('topic');
        var node = km.createNode(text, parent, sibling.getIndex() + 1);
        km.select(node, true);
        node.render();
        km.layout(600);
    },
    queryState: function(km) {
        var selectedNode = km.getSelectedNode();
        return selectedNode ? 0 : -1;
    }
});

var RemoveNodeCommand = kity.createClass('RemoverNodeCommand', {
    base: Command,
    execute: function(km, text) {
        var nodes = km.getSelectedNodes();
        var ancestor = MinderNode.getCommonAncestor.apply(null, nodes);

        nodes.forEach(function(node) {
            if (!node.isRoot()) km.removeNode(node);
        });

        km.select(ancestor || km.getRoot(), true);
        km.layout(600);
    },
    queryState: function(km) {
        var selectedNode = km.getSelectedNode();
        return selectedNode ? 0 : -1;
    }
});

var EditNodeCommand = kity.createClass('EditNodeCommand', {
    base: Command,
    execute: function(km) {
        var selectedNode = km.getSelectedNode();
        if (!selectedNode) {
            return null;
        }
        km.select(selectedNode, true);
        km.textEditNode(selectedNode);
    },
    queryState: function(km) {
        var selectedNode = km.getSelectedNode();
        if (!selectedNode) {
            return -1;
        } else {
            return 0;
        }
    },
    isNeedUndo: function() {
        return false;
    }
});

KityMinder.registerModule('NodeModule', function() {
    return {

        commands: {
            'AppendChildNode': AppendChildCommand,
            'AppendSiblingNode': AppendSiblingCommand,
            'RemoveNode': RemoveNodeCommand,
            'EditNode': EditNodeCommand
        },

        'contextmenu': [{
            command: 'appendsiblingnode'
        }, {
            command: 'appendchildnode'
        }, {
            command: 'editnode'
        }, {
            command: 'removenode'
        }, {
            divider: 1
        }],

        'commandShortcutKeys': {
            'appendsiblingnode': 'normal::Enter',
            'appendchildnode': 'normal::Insert|Tab',
            'editnode': 'normal::F2',
            'removenode': 'normal::Del|Backspace'
        }
    };
});
/* global Renderer: true */

var FONT_ADJUST = {
    '微软雅黑,Microsoft YaHei': -0.15,
    'arial black,avant garde': -0.17,
    'default': -0.15
};

var TextRenderer = KityMinder.TextRenderer = kity.createClass('TextRenderer', {
    base: Renderer,

    create: function() {
        return new kity.Group().setId(KityMinder.uuid('node_text'));
    },

    update: function(textGroup, node) {

        function s(name) {
            return node.getData(name) || node.getStyle(name);
        }

        var textArr = node.getText(true);

        var lineHeight = node.getStyle('line-height');

        var fontSize = s('font-size');
        var fontFamily = s('font-family') || 'default';

        var height = (lineHeight * fontSize) * textArr.length - (lineHeight - 1) * fontSize;
        var yStart = -height / 2;

        var adjust = FONT_ADJUST[fontFamily] || 0;

        textGroup.setTranslate(0, adjust * fontSize);

        var rBox = new kity.Box(),
            r = Math.round;

        this.setTextStyle(node, textGroup);

        var textLength = textArr.length;

        var textGroupLength = textGroup.getItems().length;

        if(textLength < textGroupLength){
            for( var i = textLength,ci;ci = textGroup.getItem(i);){
                textGroup.removeItem(i);
            }
        }else if(textLength > textGroupLength){
            var length = textLength - textGroupLength;
            for(var i = 0;i < length;i++){
                var textShape = new kity.Text()
                    .setAttr('text-rendering', 'inherit');
                if (kity.Browser.ie) {
                    textShape.setVerticalAlign('top');
                } else {
                    textShape.setAttr('dominant-baseline', 'text-before-edge');
                }
                textGroup.addItem(textShape);
            }
        }


        for (var i = 0, text, textShape;
            (text = textArr[i], textShape = textGroup.getItem(i)); i++) {
            textShape.setContent(text);
        }

        this.setTextStyle(node, textGroup);

        var textHash = node.getText() + [s('font-size'), s('font-name'), s('font-weight'), s('font-style')].join('/');

        if (node._currentTextHash == textHash && node._currentTextGroupBox) return node._currentTextGroupBox;

        node._currentTextHash = textHash;

        return function() {
            textGroup.eachItem(function(i, textShape) {
                var y = yStart + i * fontSize * lineHeight;

                textShape.setY(y);

                rBox = rBox.merge(new kity.Box(0, y, textShape.getBoundaryBox().width || 1, fontSize));
            });

            var nBox = new kity.Box(r(rBox.x), r(rBox.y), r(rBox.width), r(rBox.height));

            node._currentTextGroupBox = nBox;
            return nBox;
        };

    },

    setTextStyle: function(node, text) {
        var hooks = TextRenderer._styleHooks;
        hooks.forEach(function(hook) {
            hook(node, text);
        });
    }
});

utils.extend(TextRenderer, {
    _styleHooks: [],

    registerStyleHook: function(fn) {
        TextRenderer._styleHooks.push(fn);
    }
});

kity.extendClass(MinderNode, {
    getTextGroup: function() {
        return this.getRenderer('TextRenderer').getRenderShape();
    }
});
KityMinder.registerModule('text', {
    'renderers': {
        center: TextRenderer
    }
});
/* global Renderer: true */

KityMinder.registerModule('Expand', function() {
    var minder = this;
    var EXPAND_STATE_DATA = 'expandState',
        STATE_EXPAND = 'expand',
        STATE_COLLAPSE = 'collapse';

    // 将展开的操作和状态读取接口拓展到 MinderNode 上
    kity.extendClass(MinderNode, {

        /**
         * 展开节点
         * @param  {Policy} policy 展开的策略，默认为 KEEP_STATE
         */
        expand: function() {
            this.setData(EXPAND_STATE_DATA, STATE_EXPAND);
            return this;
        },

        /**
         * 收起节点
         */
        collapse: function() {
            this.setData(EXPAND_STATE_DATA, STATE_COLLAPSE);
            return this;
        },

        /**
         * 判断节点当前的状态是否为展开
         */
        isExpanded: function() {
            var expanded = this.getData(EXPAND_STATE_DATA) !== STATE_COLLAPSE;
            return expanded && (this.isRoot() || this.parent.isExpanded());
        },

        /**
         * 判断节点当前的状态是否为收起
         */
        isCollapsed: function() {
            return !this.isExpanded();
        }
    });

    var ExpandCommand = kity.createClass('ExpandCommand', {
        base: Command,

        execute: function(km, justParents) {
            var node = km.getSelectedNode();
            if (!node) return;
            if (justParents) {
                node = node.parent;
            }
            while(node.parent) {
                node.expand();
                node = node.parent;
            }
            node.renderTree();
            km.layout(100);
        },

        queryState: function(km) {
            return km.getSelectedNode() ? 0 : -1;
        }
    });

    var ExpandToLevelCommand = kity.createClass('ExpandToLevelCommand', {
        base: Command,
        execute: function(km, level) {
            km.getRoot().traverse(function(node) {
                if (node.getLevel() < level) node.expand();
                if (node.getLevel() == level) node.collapse();
            });
            km.refresh(100);
        },
        enableReadOnly: true
    });

    var Expander = kity.createClass('Expander', {
        base: kity.Group,

        constructor: function(node) {
            this.callBase();
            this.radius = 6;
            this.outline = new kity.Circle(this.radius).stroke('gray').fill('white');
            this.sign = new kity.Path().stroke('gray');
            this.addShapes([this.outline, this.sign]);
            this.initEvent(node);
            this.setId(KityMinder.uuid('node_expander'));
            this.setStyle('cursor', 'pointer');
        },

        initEvent: function(node) {
            this.on('mousedown', function(e) {
                if (node.isExpanded()) {
                    node.collapse();
                } else {
                    node.expand();
                }
                node.renderTree().getMinder().layout(100);
                node.getMinder().fire('contentchange');
                e.stopPropagation();
                e.preventDefault();
            });
            this.on('dblclick click mouseup', function(e) {
                e.stopPropagation();
                e.preventDefault();
            });
        },

        setState: function(state) {
            if (state == 'hide') {
                this.setVisible(false);
                return;
            }
            this.setVisible(true);
            var pathData = ['M', 1.5 - this.radius, 0, 'L', this.radius - 1.5, 0];
            if (state == STATE_COLLAPSE) {
                pathData.push(['M', 0, 1.5 - this.radius, 'L', 0, this.radius - 1.5]);
            }
            this.sign.setPathData(pathData);
        }
    });

    var ExpanderRenderer = kity.createClass('ExpanderRenderer', {
        base: Renderer,

        create: function(node) {
            if (node.isRoot()) return;
            this.expander = new Expander(node);
            node.getRenderContainer().prependShape(this.expander);
            node.expanderRenderer = this;
            this.node = node;
            return this.expander;
        },

        shouldRender: function(node) {
            return !node.isRoot();
        },

        update: function(expander, node, box) {
            if (!node.parent) return;

            var visible = node.parent.isExpanded();

            expander.setState(visible && node.children.length ? node.getData(EXPAND_STATE_DATA) : 'hide');

            var vector = node.getLayoutVectorIn().normalize(expander.radius + node.getStyle('stroke-width'));
            var position = node.getVertexIn().offset(vector.reverse());

            this.expander.setTranslate(position);
        }
    });
    return {
        commands: {
            'expand': ExpandCommand,
            'expandtolevel': ExpandToLevelCommand
        },
        events: {
            'layoutapply': function(e) {
                var r = e.node.getRenderer('ExpanderRenderer');
                if (r.getRenderShape()) {
                    r.update(r.getRenderShape(), e.node);
                }
            },
            'beforerender': function(e) {
                var node = e.node;
                var visible = !node.parent || node.parent.isExpanded();
                var minder = this;

                node.getRenderContainer().setVisible(visible);
                if (!visible) e.stopPropagation();
            },
            'normal.keydown': function(e) {
                if (this.getStatus() == 'textedit') return;
                if (e.originEvent.keyCode == keymap['/']) {
                    var node = this.getSelectedNode();
                    if (!node || node == this.getRoot()) return;
                    var expanded = node.isExpanded();
                    this.getSelectedNodes().forEach(function(node) {
                        if (expanded) node.collapse();
                        else node.expand();
                        node.renderTree();
                    });
                    this.layout(100);
                    this.fire('contentchange');
                    e.preventDefault();
                    e.stopPropagationImmediately();
                }
                if (e.isShortcutKey('Alt+`')) {
                    this.execCommand('expandtolevel', 9999);
                }
                for (var i = 1; i < 6; i++) {
                    if (e.isShortcutKey('Alt+' + i)) {
                        this.execCommand('expandtolevel', i);
                    }
                }
            }
        },
        renderers: {
            outside: ExpanderRenderer
        },
        contextmenu: [{
            command: 'expandtoleaf',
            query: function() {
                return !minder.getSelectedNode();
            },
            fn: function(minder) {
                minder.execCommand('expandtolevel', 9999);
            }
        }, {
            command: 'expandtolevel1',
            query: function() {
                return !minder.getSelectedNode();
            },
            fn: function(minder) {
                minder.execCommand('expandtolevel', 1);
            }
        }, {
            command: 'expandtolevel2',
            query: function() {
                return !minder.getSelectedNode();
            },
            fn: function(minder) {
                minder.execCommand('expandtolevel', 2);
            }
        },{
            command: 'expandtolevel3',
            query: function() {
                return !minder.getSelectedNode();
            },
            fn: function(minder) {
                minder.execCommand('expandtolevel', 3);
            }
        }, {
            divider: true
        }]
    };
});
/* global Renderer: true */


var OutlineRenderer = kity.createClass('OutlineRenderer', {
    base: Renderer,

    create: function(node) {

        var outline = new kity.Rect()
            .setId(KityMinder.uuid('node_outline'));

        this.bringToBack = true;

        return outline;
    },

    update: function(outline, node, box) {

        var paddingLeft = node.getStyle('padding-left'),
            paddingRight = node.getStyle('padding-right'),
            paddingTop = node.getStyle('padding-top'),
            paddingBottom = node.getStyle('padding-bottom');

        var outlineBox = {
            x: box.x - paddingLeft,
            y: box.y - paddingTop,
            width: box.width + paddingLeft + paddingRight,
            height: box.height + paddingTop + paddingBottom
        };

        var prefix = node.isSelected() ? 'selected-' : '';

        outline
            .setPosition(outlineBox.x, outlineBox.y)
            .setSize(outlineBox.width, outlineBox.height)
            .setRadius(node.getStyle('radius'))
            .fill(node.getData('background') || node.getStyle(prefix + 'background') || node.getStyle('background'))
            .stroke(node.getStyle(prefix + 'stroke' || node.getStyle('stroke')),
                node.getStyle(prefix + 'stroke-width'));

        return new kity.Box(outlineBox);
    }
});

var ShadowRenderer = kity.createClass('ShadowRenderer', {
    base: Renderer,

    create: function(node) {
        this.bringToBack = true;
        return new kity.Rect();
    },

    shouldRender: function(node) {
        return node.getStyle('shadow');
    },

    update: function(shadow, node, box) {
        shadow.setPosition(box.x + 4, box.y + 5)
            .setSize(box.width, box.height)
            .fill(node.getStyle('shadow'))
            .setRadius(node.getStyle('radius'));
    }
});

var marker = new kity.Marker();

marker.setWidth(10);
marker.setHeight(12);
marker.setRef(0, 0);
marker.setViewBox(-6, -4, 8, 10);

marker.addShape(new kity.Path().setPathData('M-5-3l5,3,-5,3').stroke('#33ffff'));

var wireframeOption = /wire/.test(window.location.href);
var WireframeRenderer = kity.createClass('WireframeRenderer', {
    base: Renderer,

    create: function() {
        var wireframe = new kity.Group();
        var oxy = this.oxy = new kity.Path()
            .stroke('#f6f')
            .setPathData('M0,-50L0,50M-50,0L50,0');

        var box = this.wireframe = new kity.Rect()
            .stroke('lightgreen');

        var vectorIn = this.vectorIn = new kity.Path()
            .stroke('#66ffff');
        var vectorOut = this.vectorOut = new kity.Path()
            .stroke('#66ffff');

        vectorIn.setMarker(marker, 'end');
        vectorOut.setMarker(marker, 'end');

        return wireframe.addShapes([oxy, box, vectorIn, vectorOut]);
    },

    shouldRender: function() {
        return wireframeOption;
    },

    update: function(created, node, box) {
        this.wireframe
            .setPosition(box.x, box.y)
            .setSize(box.width, box.height);
        var pin = node.getVertexIn();
        var pout = node.getVertexOut();
        var vin = node.getLayoutVectorIn().normalize(30);
        var vout = node.getLayoutVectorOut().normalize(30);
        this.vectorIn.setPathData(['M', pin.offset(vin.reverse()), 'L', pin]);
        this.vectorOut.setPathData(['M', pout, 'l', vout]);
    }
});

KityMinder.registerModule('OutlineModule', function() {
    return {
        events: (!wireframeOption ? null : {
            'ready': function() {
                this.getPaper().addResource(marker);
            },
            'layoutallfinish': function() {
                this.getRoot().traverse(function(node) {
                    node.getRenderer('WireframeRenderer').update(null, node, node.getContentBox());
                });
            }
        }),
        renderers: {
            outline: OutlineRenderer,
            outside: [ShadowRenderer, WireframeRenderer]
        }
    };
});
KityMinder.Geometry = (function() {
    var g = {};
    var min = Math.min,
        max = Math.max,
        abs = Math.abs;
    var own = Object.prototype.hasOwnProperty;

    g.isNumberInRange = function(number, range) {
        return number > range[0] && number < range[1];
    };

    g.getDistance = function(p1, p2) {
        return kity.Vector.fromPoints(p1, p2).length();
    };

    function wrapBox(box) {
        box.width = box.right - box.left;
        box.height = box.bottom - box.top;
        box.x = box.left;
        box.y = box.top;
        box.cx = box.x + box.width / 2;
        box.cy = box.y + box.height / 2;
        return box;
    }

    function uniformBox(box) {
        // duck check
        if ('x' in box) {
            box.left = box.x;
            box.right = box.x + box.width;
            box.top = box.y;
            box.bottom = box.y + box.height;
        }
    }

    g.wrapBox = wrapBox;

    g.getBox = function(p1, p2) {
        return wrapBox({
            left: min(p1.x, p2.x),
            right: max(p1.x, p2.x),
            top: min(p1.y, p2.y),
            bottom: max(p1.y, p2.y)
        });
    };

    g.mergeBox = function(b1, b2) {
        uniformBox(b1);
        uniformBox(b2);
        return wrapBox({
            left: min(b1.left, b2.left),
            right: max(b1.right, b2.right),
            top: min(b1.top, b2.top),
            bottom: max(b1.bottom, b2.bottom)
        });
    };

    g.getBoxRange = function(box) {
        return {
            x: [box.left, box.right],
            y: [box.top, box.bottom]
        };
    };

    g.getBoxVertex = function(box) {
        return {
            leftTop: {
                x: box.left,
                y: box.top
            },
            rightTop: {
                x: box.right,
                y: box.top
            },
            leftBottom: {
                x: box.left,
                y: box.bottom
            },
            rightBottom: {
                x: box.right,
                y: box.bottom
            }
        };
    };

    g.isPointInsideBox = function(p, b) {
        uniformBox(b);
        var ranges = g.getBoxRange(b);
        return g.isNumberInRange(p.x, ranges.x) && g.isNumberInRange(p.y, ranges.y);
    };

    g.getIntersectBox = function(b1, b2) {
        uniformBox(b1);
        uniformBox(b2);
        var minx = max(b1.left, b2.left),
            miny = max(b1.top, b2.top),
            maxx = min(b1.right, b2.right),
            maxy = min(b1.bottom, b2.bottom);
        return minx < maxx && miny < maxy ? wrapBox({
            left: minx,
            right: maxx,
            top: miny,
            bottom: maxy
        }) : null;
    };

    g.snapToSharp = function(unknown) {
        if (utils.isNumber(unknown)) {
            return (unknown | 0) + 0.5;
        }
        if (utils.isArray(unknown)) {
            return unknown.map(g.snapToSharp);
        }
        ['x', 'y', 'left', 'top', 'right', 'bottom'].forEach(function(n) {
            if (own.call(unknown, n)) {
                unknown[n] = g.snapToSharp(unknown[n]);
            }
        });
        return unknown;
    };

    g.expandBox = function(box, sizeX, sizeY) {
        if (sizeY === undefined) {
            sizeY = sizeX;
        }
        return wrapBox({
            left: box.left - sizeX,
            top: box.top - sizeY,
            right: box.right + sizeX,
            bottom: box.bottom + sizeY
        });
    };

    return g;
})();
KityMinder.registerModule("HistoryModule", function() {

    var km = this;

    var Scene = kity.createClass('Scene', {
        constructor: function(root,inputStatus) {
            this.data = root.clone();
            this.inputStatus = inputStatus;
        },
        getData: function() {
            return this.data;
        },
        cloneData: function() {
            return this.getData().clone();
        },
        equals: function(scene) {
            return this.getData().equals(scene.getData());

        },
        isInputStatus:function(){
            return this.inputStatus;
        },
        setInputStatus:function(status){
            this.inputStatus = status;
        }
    });
    var HistoryManager = kity.createClass('HistoryManager', {
        constructor: function(km) {
            this.list = [];
            this.index = 0;
            this.hasUndo = false;
            this.hasRedo = false;
            this.km = km;
        },
        undo: function() {
            if (this.hasUndo) {
                var currentScene = this.list[this.index];
                //如果是输入文字时的保存，直接回复当前场景
                if(currentScene && currentScene.isInputStatus()){
                    this.saveScene();
                    this.restore(--this.index);
                    currentScene.setInputStatus(false);
                    return;
                }
                if(this.list.length == 1){
                    this.restore(0);
                    return;
                }
                if (!this.list[this.index - 1] && this.list.length == 1) {
                    this.reset();
                    return;
                }
                while (this.list[this.index].equals(this.list[this.index - 1])) {
                    this.index--;
                    if (this.index === 0) {
                        return this.restore(0);
                    }
                }
                this.restore(--this.index);
            }
        },
        redo: function() {
            if (this.hasRedo) {
                while (this.list[this.index].equals(this.list[this.index + 1])) {
                    this.index++;
                    if (this.index == this.list.length - 1) {
                        return this.restore(this.index);
                    }
                }
                this.restore(++this.index);
            }
        },
        partialRenewal: function(target) {
            var selectedNodes = [];
            function compareNode(source, target) {
                if (source.getText() != target.getText()) {
                    return false;
                }
                if (utils.compareObject(source.getData(), target.getData()) === false) {
                    return false;
                }
                if (utils.compareObject(source.getTmpData(), target.getTmpData()) === false) {
                    return false;
                }
                return true;
            }

            function appendChildNode(parent, child) {
                if (child.isSelected()) {
                    selectedNodes.push(child);
                }
                km.appendNode(child, parent);
                child.render();

                var children = utils.cloneArr(child.children);
                for (var i = 0, ci; ci = children[i++];) {
                    appendChildNode(child, ci);
                }
            }

            function traverseNode(srcNode, tagNode) {

                if (compareNode(srcNode, tagNode) === false) {
                    srcNode.setValue(tagNode);
                }
                //todo，这里有性能问题，变成全部render了
                srcNode.render();
                if (srcNode.isSelected()) {
                    selectedNodes.push(srcNode);
                }
                for (var i = 0, j = 0, si, tj;
                    (si = srcNode.children[i], tj = tagNode.children[j], si || tj); i++, j++) {
                    if (si && !tj) {
                        i--;
                        km.removeNode(si);
                    } else if (!si && tj) {
                        j--;
                        appendChildNode(srcNode, tj);
                    } else {
                        traverseNode(si, tj);
                    }
                }
            }

            traverseNode(km.getRoot(), target);
            km.layout(200);

            km.select(selectedNodes,true);

            selectedNodes = [];

        },
        restore: function(index) {
            index = index === undefined ? this.index : index;
            var scene = this.list[index];
            this.partialRenewal(scene.cloneData());
            this.update();
            this.km.fire('restoreScene');
            this.km.fire('contentChange');
        },
        getScene: function(inputStatus) {
            return new Scene(this.km.getRoot(),inputStatus);
        },
        saveScene: function(inputStatus) {
            var currentScene = this.getScene(inputStatus);
            var lastScene = this.list[this.index];
            if (lastScene && lastScene.equals(currentScene)) {
                if(inputStatus){
                    lastScene.setInputStatus(true);
                    this.update();
                }
                return;
            }
            this.list = this.list.slice(0, this.index + 1);
            this.list.push(currentScene);
            //如果大于最大数量了，就把最前的剔除
            if (this.list.length > this.km.getOptions('maxUndoCount')) {
                this.list.shift();
            }
            this.index = this.list.length - 1;
            //跟新undo/redo状态
            this.update();
        },
        update: function() {

            this.hasRedo = !!this.list[this.index + 1];
            this.hasUndo = !!this.list[this.index - 1];
            var currentScene = this.list[this.index];
            if(currentScene && currentScene.isInputStatus()){
                this.hasUndo = true;
            }

        },
        reset: function() {
            this.list = [];
            this.index = 0;
            this.hasUndo = false;
            this.hasRedo = false;
        }
    });
    //为km实例添加history管理
    this.historyManager = new HistoryManager(this);


    return {
        defaultOptions: {
            maxUndoCount: 20,
            maxInputCount: 20
        },
        "commands": {
            "undo": kity.createClass("UndoCommand", {
                base: Command,

                execute: function(km) {
                    km.historyManager.undo();
                },

                queryState: function(km) {
                    return km.historyManager.hasUndo ? 0 : -1;
                },

                isNeedUndo: function() {
                    return false;
                }
            }),
            "redo": kity.createClass("RedoCommand", {
                base: Command,

                execute: function(km) {
                    km.historyManager.redo();
                },

                queryState: function(km) {
                    return km.historyManager.hasRedo ? 0 : -1;
                },
                isNeedUndo: function() {
                    return false;
                }
            })
        },
        commandShortcutKeys: {
            "undo": "ctrl+z", //undo
            "redo": "ctrl+y" //redo
        },
        "events": {
            "saveScene": function(e) {
                this.historyManager.saveScene(e.inputStatus);
            },
            "import": function() {
                this.historyManager.reset();
            }
        }
    };
});
KityMinder.registerModule('ProgressModule', function() {
    var minder = this;

    var PROGRESS_DATA = 'progress';

    // Designed by Akikonata
    var BG_COLOR = '#FFED83';
    var PIE_COLOR = '#43BC00';
    var SHADOW_PATH = 'M10,3c4.418,0,8,3.582,8,8h1c0-5.523-3.477-10-9-10S1,5.477,1,11h1C2,6.582,5.582,3,10,3z';
    var SHADOW_COLOR = '#8E8E8E';
    var FRAME_PATH = 'M10,0C4.477,0,0,4.477,0,10c0,5.523,4.477,10,10,10s10-4.477,10-10C20,4.477,15.523,0,10,0zM10,18c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S14.418,18,10,18z';
    var FRAME_GRAD = new kity.LinearGradientBrush().pipe(function(g) {
        g.setStartPosition(0, 0);
        g.setEndPosition(0, 1);
        g.addStop(0, '#fff');
        g.addStop(1, '#ccc');
    });
    var CHECK_PATH = 'M15.812,7.896l-6.75,6.75l-4.5-4.5L6.25,8.459l2.812,2.803l5.062-5.053L15.812,7.896z';
    var CHECK_COLOR = '#EEE';

    minder.getPaper().addResource(FRAME_GRAD);

    // 进度图标的图形
    var ProgressIcon = kity.createClass('ProgressIcon', {
        base: kity.Group,

        constructor: function(value) {
            this.callBase();
            this.setSize(20);
            this.create();
            this.setValue(value);
            this.setId(KityMinder.uuid('node_progress'));
            this.translate(0.5, 0.5);
        },

        setSize: function(size) {
            this.width = this.height = size;
        },

        create: function() {

            var bg, pie, shadow, frame, check;

            bg = new kity.Circle(9)
                .fill(BG_COLOR);

            pie = new kity.Pie(9, 0)
                .fill(PIE_COLOR);

            shadow = new kity.Path()
                .setPathData(SHADOW_PATH)
                .setTranslate(-10, -10)
                .fill(SHADOW_COLOR);

            frame = new kity.Path()
                .setTranslate(-10, -10)
                .setPathData(FRAME_PATH)
                .fill(FRAME_GRAD);

            check = new kity.Path()
                .setTranslate(-10, -10)
                .setPathData(CHECK_PATH)
                .fill(CHECK_COLOR);

            this.addShapes([bg, pie, shadow, check, frame]);
            this.pie = pie;
            this.check = check;
        },

        setValue: function(value) {
            this.pie.setAngle(-360 * (value - 1) / 8);
            this.check.setVisible(value == 9);
        }
    });

    var ProgressCommand = kity.createClass('ProgressCommand', {
        base: Command,
        execute: function(km, value) {
            var nodes = km.getSelectedNodes();
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].setData(PROGRESS_DATA, value || null).render();
            }
            km.layout();
        },
        queryValue: function(km) {
            var nodes = km.getSelectedNodes();
            var val;
            for (var i = 0; i < nodes.length; i++) {
                val = nodes[i].getData(PROGRESS_DATA);
                if (val) break;
            }
            return val|| null;
        },

        queryState: function(km) {
            return km.getSelectedNodes().length ? 0 : -1;
        }
    });

    return {
        'commands': {
            'progress': ProgressCommand
        },
        'renderers': {
            left: kity.createClass('ProgressRenderer', {
                base: KityMinder.Renderer,

                create: function(node) {
                    return new ProgressIcon();
                },

                shouldRender: function(node) {
                    return node.getData(PROGRESS_DATA);
                },

                update: function(icon, node, box) {
                    var data = node.getData(PROGRESS_DATA);
                    var spaceLeft = node.getStyle('space-left');
                    var x, y;

                    icon.setValue(data);

                    x = box.left - icon.width - spaceLeft;
                    y = -icon.height / 2;
                    icon.setTranslate(x + icon.width / 2, y + icon.height / 2);

                    return new kity.Box(x, y, icon.width, icon.height);
                }
            })
        }
    };
});
KityMinder.registerModule('PriorityModule', function() {
    var minder = this;

    // Designed by Akikonata
    // [MASK, BACK]
    var PRIORITY_COLORS = [null, 
        ['#FF1200', '#840023'], // 1 - red
        ['#0074FF', '#01467F'], // 2 - blue
        ['#00AF00', '#006300'], // 3 - green
        ['#FF962E', '#B25000'], // 4 - orange
        ['#A464FF', '#4720C4'], // 5 - purple
        ['#A3A3A3', '#515151'], // 6,7,8,9 - gray
        ['#A3A3A3', '#515151'],
        ['#A3A3A3', '#515151'],
        ['#A3A3A3', '#515151'],
    ]; // hue from 1 to 5

    var BACK_PATH = 'M0,13c0,3.866,3.134,7,7,7h6c3.866,0,7-3.134,7-7V7H0V13z';
    var MASK_PATH = 'M20,10c0,3.866-3.134,7-7,7H7c-3.866,0-7-3.134-7-7V7c0-3.866,3.134-7,7-7h6c3.866,0,7,3.134,7,7V10z';

    var PRIORITY_DATA = 'priority';

    // 进度图标的图形
    var PriorityIcon = kity.createClass('PriorityIcon', {
        base: kity.Group,

        constructor: function() {
            this.callBase();
            this.setSize(20);
            this.create();
            this.setId(KityMinder.uuid('node_priority'));
        },

        setSize: function(size) {
            this.width = this.height = size;
        },

        create: function() {
            var white, back, mask, number; // 4 layer

            white = new kity.Path().setPathData(MASK_PATH).fill('white');
            back = new kity.Path().setPathData(BACK_PATH).setTranslate(0.5, 0.5);
            mask = new kity.Path().setPathData(MASK_PATH).setOpacity(0.8).setTranslate(0.5, 0.5);

            number = new kity.Text()
                .setX(this.width / 2 - 0.5).setY(this.height / 2 - 1.5)
                .setTextAnchor('middle')
                .setVerticalAlign('middle')
                .setFontItalic(true)
                .setFontSize(14)
                .fill('white');

            this.addShapes([back, mask, number]);
            this.mask = mask;
            this.back = back;
            this.number = number;
        },

        setValue: function(value) {
            var back = this.back,
                mask = this.mask,
                number = this.number;

            var color = PRIORITY_COLORS[value];

            if (color) {
                back.fill(color[1]);
                mask.fill(color[0]);
            }

            number.setContent(value);
        }
    });

    // 提供的命令
    var PriorityCommand = kity.createClass('SetPriorityCommand', {
        base: Command,
        execute: function(km, value) {
            var nodes = km.getSelectedNodes();
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].setData(PRIORITY_DATA, value || null).render();
            }
            km.layout();
        },
        queryValue: function(km) {
            var nodes = km.getSelectedNodes();
            var val;
            for (var i = 0; i < nodes.length; i++) {
                val = nodes[i].getData(PRIORITY_DATA);
                if (val) break;
            }
            return val || null;
        },

        queryState: function(km) {
            return km.getSelectedNodes().length ? 0 : -1;
        }
    });
    return {
        'commands': {
            'priority': PriorityCommand,
        },
        'renderers': {
            left: kity.createClass('PriorityRenderer', {
                base: KityMinder.Renderer,

                create: function(node) {
                    return new PriorityIcon();
                },

                shouldRender: function(node) {
                    return node.getData(PRIORITY_DATA);
                },

                update: function(icon, node, box) {
                    var data = node.getData(PRIORITY_DATA);
                    var spaceLeft = node.getStyle('space-left'),
                        x, y;

                    icon.setValue(data);
                    x = box.left - icon.width - spaceLeft;
                    y = -icon.height / 2;

                    icon.setTranslate(x, y);

                    return new kity.Box({
                        x: x,
                        y: y,
                        width: icon.width,
                        height: icon.height
                    });
                }
            })
        }
    };
});
KityMinder.registerModule('image', function() {
    function loadImageSize(url, callback) {
        var img = document.createElement('img');
        img.onload = function() {
            callback(img.width, img.height);
        };
        img.onerror = function() {
            callback(null);
        };
        img.src = url;
    }

    function fitImageSize(width, height, maxWidth, maxHeight) {
        var ratio = width / height,
            fitRatio = maxWidth / maxHeight;

        // 宽高比大于最大尺寸的宽高比，以宽度为标准适应
        if (width > maxWidth && ratio > fitRatio) {
            width = maxWidth;
            height = width / ratio;
        } else if (height > maxHeight) {
            height = maxHeight;
            width = height * ratio;
        }

        return {
            width: width | 0,
            height: height | 0
        };
    }

    var ImageCommand = kity.createClass('ImageCommand', {
        base: Command,

        execute: function(km, url, title) {
            var nodes = km.getSelectedNodes();

            loadImageSize(url, function(width, height) {
                if (!width) return;
                utils.each(nodes, function(i, n) {
                    var size = fitImageSize(
                        width, height,
                        km.getOptions('maxImageWidth'),
                        km.getOptions('maxImageHeight'));
                    n.setData('image', url);
                    n.setData('imageTitle', title);
                    n.setData('imageSize', size);
                    n.render();
                });
                km.fire("saveScene");
                km.layout(300);
            });

        },
        queryState: function(km) {
            var nodes = km.getSelectedNodes(),
                result = 0;
            if (nodes.length === 0) {
                return -1;
            }
            utils.each(nodes, function(i, n) {
                if (n && n.getData('image')) {
                    result = 0;
                    return false;
                }
            });
            return result;
        },
        queryValue: function(km) {
            var node = km.getSelectedNode();
            return {
                url: node.getData('image'),
                title: node.getData('imageTitle')
            };
        }
    });

    var RemoveImageCommand = kity.createClass('RemoveImageCommand', {
        base: Command,

        execute: function(km) {
            var nodes = km.getSelectedNodes();
            utils.each(nodes, function(i, n) {
                n.setData('image').render();
            });
            km.layout(300);
        },
        queryState: function(km) {
            var nodes = km.getSelectedNodes();

            if (nodes.length === 0) {
                return -1;
            }
            var image = false;
            utils.each(nodes, function(i, n) {
                if (n.getData('image')) {
                    image = true;
                    return false;
                }
            });
            if (image) {
                return 0;
            }
            return -1;
        }
    });

    var ImageRenderer = kity.createClass('ImageRenderer', {
        base: KityMinder.Renderer,

        create: function(node) {
            return new kity.Image(node.getData('image'));
        },

        shouldRender: function(node) {
            return node.getData('image');
        },

        update: function(image, node, box) {
            var url = node.getData('image');
            var title = node.getData('imageTitle');
            var size = node.getData('imageSize');
            var spaceTop = node.getStyle('space-top');

            if (!size) return;

            if (title) {
                image.node.setAttributeNS('http://www.w3.org/1999/xlink', 'title', title);
            }

            var x = box.cx - size.width / 2;
            var y = box.y - size.height - spaceTop;

            image
                .setUrl(url)
                .setX(x | 0)
                .setY(y | 0)
                .setWidth(size.width | 0)
                .setHeight(size.height | 0);

            return new kity.Box(x | 0, y | 0, size.width | 0, size.height | 0);
        }
    });

    return {
        'defaultOptions': {
            'maxImageWidth': 200,
            'maxImageHeight': 200
        },
        'commands': {
            'image': ImageCommand,
            'removeimage': RemoveImageCommand
        },
        'renderers': {
            'top': ImageRenderer
        }
    };
});
KityMinder.registerModule('Resource', function() {

    /**
     * 自动使用的颜色序列
     */
    var RESOURCE_COLOR_SERIES = [51, 303, 75, 200, 157, 0, 26, 254].map(function(h) {
        return kity.Color.createHSL(h, 100, 85);
    });

    var RESOURCE_COLOR_OVERFLOW = kity.Color.createHSL(0, 0, 95);

    /**
     * 在 Minder 上拓展一些关于资源的支持接口
     */
    kity.extendClass(Minder, {

        /**
         * 获取脑图中某个资源对应的颜色
         *
         * 如果存在同名资源，则返回已经分配给该资源的颜色，否则分配给该资源一个颜色，并且返回
         *
         * 如果资源数超过颜色序列数量，返回白色
         *
         * @param {String} resource 资源名称
         * @return {Color}
         */
        getResourceColor: function(resource) {
            var colorMapping = this._getResourceColorIndexMapping();
            var nextIndex;

            if (!colorMapping.hasOwnProperty(resource)) {
                // 找不到找下个可用索引
                nextIndex = this._getNextResourceColorIndex();
                colorMapping[resource] = nextIndex;
            }

            // 资源过多，找不到可用索引颜色，统一返回白色
            return RESOURCE_COLOR_SERIES[colorMapping[resource]] || RESOURCE_COLOR_OVERFLOW;
        },

        /**
         * 获得已使用的资源的列表
         *
         * @return {Array}
         */
        getUsedResource: function() {
            var mapping = this._getResourceColorIndexMapping();
            var used = [],
                resource;

            for (resource in mapping) {
                if (mapping.hasOwnProperty(resource)) {
                    used.push(resource);
                }
            }

            return used;
        },

        /**
         * 获取脑图下一个可用的资源颜色索引
         *
         * @return {int}
         */
        _getNextResourceColorIndex: function() {
            // 获取现有颜色映射
            //     resource => color_index
            var colorMapping = this._getResourceColorIndexMapping();

            var resource, used, i;

            used = [];

            // 抽取已经使用的值到 used 数组
            for (resource in colorMapping) {
                if (colorMapping.hasOwnProperty(resource)) {
                    used.push(colorMapping[resource]);
                }
            }

            // 枚举所有的可用值，如果还没被使用，返回
            for (i = 0; i < RESOURCE_COLOR_SERIES.length; i++) {
                if (!~used.indexOf(i)) return i;
            }

            // 没有可用的颜色了
            return -1;
        },

        // 获取现有颜色映射
        //     resource => color_index
        _getResourceColorIndexMapping: function() {
            return this._resourceColorMapping || (this._resourceColorMapping = {});
        }

    });


    /**
     * @class 设置资源的命令
     *
     * @example
     *
     * // 设置选中节点资源为 "张三"
     * minder.execCommand('resource', ['张三']);
     *
     * // 添加资源 "李四" 到选中节点
     * var resource = minder.queryCommandValue();
     * resource.push('李四');
     * minder.execCommand('resource', resource);
     *
     * // 清除选中节点的资源
     * minder.execCommand('resource', null);
     */
    var ResourceCommand = kity.createClass('ResourceCommand', {

        base: Command,

        execute: function(minder, resource) {
            var nodes = minder.getSelectedNodes();

            if (typeof(resource) == 'string') {
                resource = [resource];
            }

            nodes.forEach(function(node) {
                node.setData('resource', resource).render();
            });

            minder.layout(200);
        },

        queryValue: function(minder) {
            var nodes = minder.getSelectedNodes();
            var resource = [];

            nodes.forEach(function(node) {
                var nodeResource = node.getData('resource');

                if (!nodeResource) return;

                nodeResource.forEach(function(name) {
                    if (!~resource.indexOf(name)) {
                        resource.push(name);
                    }
                });
            });

            return resource;
        },

        queryState: function(km) {
            return km.getSelectedNode() ? 0 : -1;
        }
    });

    /**
     * @class 资源的覆盖图形
     *
     * 该类为一个资源以指定的颜色渲染一个动态的覆盖图形
     */
    var ResourceOverlay = kity.createClass('ResourceOverlay', {
        base: kity.Group,

        constructor: function() {
            this.callBase();

            var text, rect;

            rect = this.rect = new kity.Rect().setRadius(4);

            text = this.text = new kity.Text()
                .setFontSize(12)
                .setVerticalAlign('middle');

            this.addShapes([rect, text]);
        },

        setValue: function(resourceName, color) {
            var paddingX = 8,
                paddingY = 4,
                borderRadius = 4;
            var text, box, rect;

            text = this.text;

            if (resourceName == this.lastResourceName) {

                box = this.lastBox;

            } else {

                text.setContent(resourceName);

                box = text.getBoundaryBox();
                this.lastResourceName = resourceName;
                this.lastBox = box;

            }

            text.setX(paddingX).fill(color.dec('l', 70));

            rect = this.rect;
            rect.setPosition(0, box.y - paddingY);
            this.width = Math.round(box.width + paddingX * 2);
            this.height = Math.round(box.height + paddingY * 2);
            rect.setSize(this.width, this.height);
            rect.fill(color);
        }
    });

    /**
     * @class 资源渲染器
     */
    var ResourceRenderer = kity.createClass('ResourceRenderer', {
        base: KityMinder.Renderer,

        create: function(node) {
            this.overlays = [];
            return new kity.Group();
        },

        shouldRender: function(node) {
            return node.getData('resource') && node.getData('resource').length;
        },

        update: function(container, node, box) {
            var spaceRight = node.getStyle('space-right');

            var overlays = this.overlays;
            var resource = node.getData('resource');
            var minder = node.getMinder();
            var i, overlay, x;

            x = 0;
            for (i = 0; i < resource.length; i++) {
                x += spaceRight;

                overlay = overlays[i];
                if (!overlay) {
                    overlay = new ResourceOverlay();
                    overlays.push(overlay);
                    container.addShape(overlay);
                }
                overlay.setVisible(true);
                overlay.setValue(resource[i], minder.getResourceColor(resource[i]));
                overlay.setTranslate(x, -1);

                x += overlay.width;
            }

            while ((overlay = overlays[i++])) overlay.setVisible(false);

            container.setTranslate(box.right, 0);

            return new kity.Box({
                x: box.right,
                y: Math.round(-overlays[0].height / 2),
                width: x,
                height: overlays[0].height
            });
        }
    });

    return {
        commands: {
            'resource': ResourceCommand
        },

        renderers: {
            right: ResourceRenderer
        }
    };
});
/**
 * @fileOverview
 *
 * 支持节点详细信息（HTML）格式
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
KityMinder.registerModule('NoteModule', function() {

    var NOTE_PATH = 'M9,9H3V8h6L9,9L9,9z M9,7H3V6h6V7z M9,5H3V4h6V5z M8.5,11H2V2h8v7.5 M9,12l2-2V1H1v11';

    var NoteCommand = kity.createClass('NoteCommand', {
        base: Command,

        execute: function(minder, note) {
            var node = minder.getSelectedNode();
            node.setData('note', note);
            node.render();
            node.getMinder().layout(300);
        },

        queryState: function(minder) {
            return minder.getSelectedNodes().length === 1 ? 0 : -1;
        },

        queryValue: function(minder) {
            var node = minder.getSelectedNode();
            return node && node.getData('note');
        }
    });

    var NoteIcon = kity.createClass('NoteIcon', {
        base: kity.Group,

        constructor: function() {
            this.callBase();
            this.width = 16;
            this.height = 17;
            this.rect = new kity.Rect(16, 17, 0.5, -8.5, 2).fill('transparent');
            this.path = new kity.Path().setPathData(NOTE_PATH).setTranslate(2.5, -6.5);
            this.addShapes([this.rect, this.path]);

            this.on('mouseover', function() {
                this.rect.fill('rgba(255, 255, 200, .8)');
            }).on('mouseout', function() {
                this.rect.fill('transparent');
            });

            this.setStyle('cursor', 'pointer');
        }
    });

    var NoteIconRenderer = kity.createClass('NoteIconRenderer', {
        base: KityMinder.Renderer,

        create: function(node) {
            var icon = new NoteIcon();
            icon.on('mousedown', function(e) {
                e.preventDefault();
                node.getMinder().fire('editnoterequest');
            });
            icon.on('mouseover', function() {
                node.getMinder().fire('shownoterequest', {node: node, icon: icon});
            });
            icon.on('mouseout', function() {
                node.getMinder().fire('hidenoterequest', {node: node, icon: icon});
            });
            return icon;
        },

        shouldRender: function(node) {
            return node.getData('note');
        },

        update: function(icon, node, box) {
            var x = box.right + node.getStyle('space-left');
            var y = box.cy;

            icon.path.fill(node.getStyle('color'));
            icon.setTranslate(x, y);

            return new kity.Box(x, Math.round(y - icon.height / 2), icon.width, icon.height);
        }

    });

    return {
        renderers: {
            right: NoteIconRenderer
        },
        commands: {
            'note': NoteCommand
        }
    };
});
var ViewDragger = kity.createClass("ViewDragger", {
    constructor: function(minder) {
        this._minder = minder;
        this._enabled = false;
        this._bind();
        var me = this;
        this._minder.getViewDragger = function() {
            return me;
        };
    },

    isEnabled: function() {
        return this._enabled;
    },

    setEnabled: function(value) {
        var paper = this._minder.getPaper();
        paper.setStyle('cursor', value ? 'pointer' : 'default');
        paper.setStyle('cursor', value ? '-webkit-grab' : 'default');
        this._enabled = value;
    },

    move: function(offset, duration) {
        var minder = this._minder;

        var targetPosition = this.getMovement().offset(offset);

        this.moveTo(targetPosition, duration);
    },

    moveTo: function(position, duration) {

        if (duration) {
            var dragger = this;

            if (this._moveTimeline) this._moveTimeline.stop();

            this._moveTimeline = this._minder.getRenderContainer().animate(new kity.Animator(
                this.getMovement(),
                position,
                function(target, value) {
                    dragger.moveTo(value);
                }
            ), duration, 'easeOutCubic');

            this._moveTimeline.on('finish', function() {
                dragger._moveTimeline = null;
            });

            return this;
        }

        this._minder.getRenderContainer().setTranslate(position.round());
        this._minder.fire('viewchange');
    },

    getMovement: function() {
        var translate = this._minder.getRenderContainer().transform.translate;
        return translate ? translate[0] : new kity.Point();
    },

    getView: function() {
        var minder = this._minder;
        var c = {
            width: minder.getRenderTarget().clientWidth,
            height: minder.getRenderTarget().clientHeight
        };
        var m = this.getMovement();
        var box = new kity.Box(0, 0, c.width, c.height);
        var viewMatrix = minder.getPaper().getViewPortMatrix();
        return viewMatrix.inverse().translate(-m.x, -m.y).transformBox(box);
    },

    _bind: function() {
        var dragger = this,
            isTempDrag = false,
            lastPosition = null,
            currentPosition = null;

        function dragEnd(e) {
            if (!lastPosition) return;
            
            lastPosition = null;

            e.stopPropagation();

            // 临时拖动需要还原状态
            if (isTempDrag) {
                dragger.setEnabled(false);
                isTempDrag = false;
                if (dragger._minder.getStatus() == 'hand')
                    dragger._minder.rollbackStatus();
            }
            var paper = dragger._minder.getPaper();
            paper.setStyle('cursor', dragger._minder.getStatus() == 'hand' ? '-webkit-grab' : 'default');
        }

        this._minder.on('normal.mousedown normal.touchstart ' +
            'inputready.mousedown inputready.touchstart ' +
            'readonly.mousedown readonly.touchstart', function(e) {
                if (e.originEvent.button == 2) {
                    e.originEvent.preventDefault(); // 阻止中键拉动
                }
                // 点击未选中的根节点临时开启
                if (e.getTargetNode() == this.getRoot() || e.originEvent.button == 2 || e.originEvent.altKey) {
                    lastPosition = e.getPosition();
                    isTempDrag = true;
                }
            })

        .on('normal.mousemove normal.touchmove ' +
            'readonly.mousemove readonly.touchmove ' +
            'inputready.mousemove inputready.touchmove', function(e) {
                if (e.type == 'touchmove') {
                    e.preventDefault(); // 阻止浏览器的后退事件
                }
                if (!isTempDrag) return;
                var offset = kity.Vector.fromPoints(lastPosition, e.getPosition());
                if (offset.length() > 10) {
                    this.setStatus('hand', true);
                    var paper = dragger._minder.getPaper();
                    paper.setStyle('cursor', '-webkit-grabbing');
                }
            })

        .on('hand.beforemousedown hand.beforetouchstart', function(e) {
            // 已经被用户打开拖放模式
            if (dragger.isEnabled()) {
                lastPosition = e.getPosition();
                e.stopPropagation();
                var paper = dragger._minder.getPaper();
                paper.setStyle('cursor', '-webkit-grabbing');
            }
        })

        .on('hand.beforemousemove hand.beforetouchmove', function(e) {
            if (lastPosition) {
                currentPosition = e.getPosition();

                // 当前偏移加上历史偏移
                var offset = kity.Vector.fromPoints(lastPosition, currentPosition);
                dragger.move(offset);
                e.stopPropagation();
                e.preventDefault();
                e.originEvent.preventDefault();
                lastPosition = currentPosition;
            }
        })

        .on('mouseup touchend', dragEnd);

        window.addEventListener('mouseup', dragEnd);
        this._minder.on('contextmenu', function(e) {
            e.preventDefault();
        });
    }
});

KityMinder.registerModule('View', function() {

    var km = this;

    var ToggleHandCommand = kity.createClass('ToggleHandCommand', {
        base: Command,
        execute: function(minder) {

            if (minder.getStatus() != 'hand') {
                minder.setStatus('hand', true);
            } else {
                minder.rollbackStatus();
            }
            this.setContentChanged(false);

        },
        queryState: function(minder) {
            return minder.getStatus() == 'hand' ? 1 : 0;
        },
        enableReadOnly: true
    });

    var CameraCommand = kity.createClass('CameraCommand', {
        base: Command,
        execute: function(km, focusNode, duration) {

            focusNode = focusNode || km.getRoot();
            var viewport = km.getPaper().getViewPort();
            var offset = focusNode.getRenderContainer().getRenderBox('view');
            var dx = viewport.center.x - offset.x - offset.width / 2,
                dy = viewport.center.y - offset.y;
            var dragger = km._viewDragger;

            dragger.move(new kity.Point(dx, dy), duration);
            this.setContentChanged(false);
        },
        enableReadOnly: true
    });

    var MoveCommand = kity.createClass('MoveCommand', {
        base: Command,

        execute: function(km, dir, duration) {
            var dragger = km._viewDragger;
            var size = km._lastClientSize;
            switch (dir) {
                case 'up':
                    dragger.move(new kity.Point(0, size.height / 2), duration);
                    break;
                case 'down':
                    dragger.move(new kity.Point(0, -size.height / 2), duration);
                    break;
                case 'left':
                    dragger.move(new kity.Point(size.width / 2, 0), duration);
                    break;
                case 'right':
                    dragger.move(new kity.Point(-size.width / 2, 0), duration);
                    break;
            }
        },

        enableReadOnly: true
    });

    return {
        init: function() {
            this._viewDragger = new ViewDragger(this);
        },
        commands: {
            'hand': ToggleHandCommand,
            'camera': CameraCommand,
            'move': MoveCommand
        },
        events: {
            keydown: function(e) {
                var minder = this;

                ['up', 'down', 'left', 'right'].forEach(function(name) {
                    if (e.isShortcutKey('ctrl+' + name) && minder.getStatus() != 'textedit') {
                        minder.removeAllSelectedNodes();
                        minder.execCommand('move', name, 100);
                        e.preventDefault();
                    }
                });
                if (e.isShortcutKey('ctrl+enter')) {
                    minder.execCommand('camera', minder.getRoot(), 100);
                }
            },
            statuschange: function(e) {
                this._viewDragger.setEnabled(e.currentStatus == 'hand');
            },
            mousewheel: function(e) {
                var dx, dy;
                e = e.originEvent;
                if (e.ctrlKey || e.shiftKey) return;
                if ('wheelDeltaX' in e) {

                    dx = e.wheelDeltaX || 0;
                    dy = e.wheelDeltaY || 0;

                } else {

                    dx = 0;
                    dy = e.wheelDelta;

                }

                this._viewDragger.move({
                    x: dx / 2.5,
                    y: dy / 2.5
                });

                e.preventDefault();
            },
            'normal.dblclick readonly.dblclick': function(e) {
                if (e.kityEvent.targetShape instanceof kity.Paper) {
                    this.execCommand('camera', this.getRoot(), 800);
                }
            },
            ready: function() {
                this.execCommand('camera', null, 0);
                this._lastClientSize = {
                    width: this.getRenderTarget().clientWidth,
                    height: this.getRenderTarget().clientHeight
                };
            },
            resize: function(e) {
                var a = {
                        width: this.getRenderTarget().clientWidth,
                        height: this.getRenderTarget().clientHeight
                    },
                    b = this._lastClientSize;
                this._viewDragger.move(
                    new kity.Point((a.width - b.width) / 2 | 0, (a.height - b.height) / 2 | 0));
                this._lastClientSize = a;
            },
            'selectionchange layoutallfinish': function(e) {
                var selected = this.getSelectedNode();

                if (!selected) return;

                var dragger = this._viewDragger;
                var view = dragger.getView();
                var focus = selected.getLayoutBox();
                var space = 50;
                var dx = 0, dy = 0;

                if (focus.right > view.right) {
                    dx += view.right - focus.right - space;
                }
                else if (focus.left < view.left) {
                    dx += view.left - focus.left + space;
                }

                if (focus.bottom > view.bottom) {
                    dy += view.bottom - focus.bottom - space;
                }
                if (focus.top < view.top) {
                    dy += view.top - focus.top + space;
                }
                
                if (dx || dy) dragger.move(new kity.Point(dx, dy), 100);
            }
        }
    };
});
var GM = KityMinder.Geometry;

// 矩形的变形动画定义

var MoveToParentCommand = kity.createClass('MoveToParentCommand', {
    base: Command,
    execute: function(minder, nodes, parent) {
        var node;
        for (var i = nodes.length - 1; i >= 0; i--) {
            node = nodes[i];
            if (node.parent) {
                node.parent.removeChild(node);
                parent.appendChild(node);
                node.render();
            }
        }
        parent.expand();
        minder.select(nodes, true);
    }
});

var DropHinter = kity.createClass('DropHinter', {
    base: kity.Group,

    constructor: function() {
        this.callBase();
        this.rect = new kity.Rect();
        this.addShape(this.rect);
    },

    render: function(target) {
        this.setVisible(!!target);
        if (target) {
            this.rect
                .setBox(target.getLayoutBox())
                .setRadius(target.getStyle('radius') || 0)
                .stroke(
                    target.getStyle('drop-hint-color') || 'yellow',
                    target.getStyle('drop-hint-width') || 2
            );
            this.bringTop();
        }
    }
});

var OrderHinter = kity.createClass('OrderHinter', {
    base: kity.Group,

    constructor: function() {
        this.callBase();
        this.area = new kity.Rect();
        this.path = new kity.Path();
        this.addShapes([this.area, this.path]);
    },

    render: function(hint) {
        this.setVisible(!!hint);
        if (hint) {
            this.area.setBox(hint.area);
            this.area.fill(hint.node.getStyle('order-hint-area-color') || 'rgba(0, 255, 0, .5)');
            this.path.setPathData(hint.path);
            this.path.stroke(
                hint.node.getStyle('order-hint-path-color') || '#0f0',
                hint.node.getStyle('order-hint-path-width') || 1);
        }
    }
});

// 对拖动对象的一个替代盒子，控制整个拖放的逻辑，包括：
//    1. 从节点列表计算出拖动部分
//    2. 计算可以 drop 的节点，产生 drop 交互提示
var TreeDragger = kity.createClass('TreeDragger', {

    constructor: function(minder) {
        this._minder = minder;
        this._dropHinter = new DropHinter();
        this._orderHinter = new OrderHinter();
        minder.getRenderContainer().addShapes([this._dropHinter, this._orderHinter]);
    },

    dragStart: function(position) {
        // 只记录开始位置，不马上开启拖放模式
        // 这个位置同时是拖放范围收缩时的焦点位置（中心）
        this._startPosition = position;
    },

    dragMove: function(position) {
        // 启动拖放模式需要最小的移动距离
        var DRAG_MOVE_THRESHOLD = 10;

        if (!this._startPosition) return;

        var movement = kity.Vector.fromPoints(this._dragPosition || this._startPosition, position);
        var minder = this._minder;

        this._dragPosition = position;

        if (!this._dragMode) {
            // 判断拖放模式是否该启动
            if (GM.getDistance(this._dragPosition, this._startPosition) < DRAG_MOVE_THRESHOLD) {
                return;
            }
            if (!this._enterDragMode()) {
                return;
            }
        }

        for (var i = 0; i < this._dragSources.length; i++) {
            this._dragSources[i].setLayoutOffset(this._dragSources[i].getLayoutOffset().offset(movement));
            minder.applyLayoutResult(this._dragSources[i]);
        }
        
        if (!this._dropTest()) {
            this._orderTest();
        } else {
            this._renderOrderHint(this._orderSucceedHint = null);
        }
    },

    dragEnd: function() {
        this._startPosition = null;
        this._dragPosition = null;

        if (!this._dragMode) {
            return;
        }

        this._fadeDragSources(1);

        if (this._dropSucceedTarget) {

            this._dragSources.forEach(function(source) {
                source.setLayoutOffset(null);
            });
            
            this._minder.layout(-1);

            this._minder.execCommand('movetoparent', this._dragSources, this._dropSucceedTarget);

        } else if (this._orderSucceedHint) {

            var hint = this._orderSucceedHint;
            var index = hint.node.getIndex();

            var sourceIndexes = this._dragSources.map(function(source) {
                // 顺便干掉布局偏移
                source.setLayoutOffset(null);
                return source.getIndex();
            });

            var maxIndex = Math.max.apply(Math, sourceIndexes);
            var minIndex = Math.min.apply(Math, sourceIndexes);

            if (index < minIndex && hint.type == 'down') index++;
            if (index > maxIndex && hint.type == 'up') index--;

            hint.node.setLayoutOffset(null);

            this._minder.execCommand('arrange', this._dragSources, index);
            this._renderOrderHint(null);
        } else {
            this._minder.fire('savescene');
        }
        this._minder.layout(300);
        this._leaveDragMode();
        this._minder.fire('contentchange');
    },

    // 进入拖放模式：
    //    1. 计算拖放源和允许的拖放目标
    //    2. 标记已启动
    _enterDragMode: function() {
        this._calcDragSources();
        if (!this._dragSources.length) {
            this._startPosition = null;
            return false;
        }
        this._fadeDragSources(0.5);
        this._calcDropTargets();
        this._calcOrderHints();
        this._dragMode = true;
        this._minder.setStatus('dragtree');
        return true;
    },

    // 从选中的节点计算拖放源
    //    并不是所有选中的节点都作为拖放源，如果选中节点中存在 A 和 B，
    //    并且 A 是 B 的祖先，则 B 不作为拖放源
    //
    //    计算过程：
    //       1. 将节点按照树高排序，排序后只可能是前面节点是后面节点的祖先
    //       2. 从后往前枚举排序的结果，如果发现枚举目标之前存在其祖先，
    //          则排除枚举目标作为拖放源，否则加入拖放源
    _calcDragSources: function() {
        this._dragSources = this._minder.getSelectedAncestors();
    },

    _fadeDragSources: function(opacity) {
        var minder = this._minder;
        this._dragSources.forEach(function(source) {
            source.getRenderContainer().setOpacity(opacity, 200);
            source.traverse(function(node) {
                if (opacity < 1) {
                    minder.detachNode(node);
                } else {
                    minder.attachNode(node);
                }
            }, true);
        });
    },


    // 计算拖放目标可以释放的节点列表（释放意味着成为其子树），存在这条限制规则：
    //    - 不能拖放到拖放目标的子树上（允许拖放到自身，因为多选的情况下可以把其它节点加入）
    //
    //    1. 加入当前节点（初始为根节点）到允许列表
    //    2. 对于当前节点的每一个子节点：
    //       (1) 如果是拖放目标的其中一个节点，忽略（整棵子树被剪枝）
    //       (2) 如果不是拖放目标之一，以当前子节点为当前节点，回到 1 计算
    //    3. 返回允许列表
    //
    _calcDropTargets: function() {

        function findAvailableParents(nodes, root) {
            var availables = [],
                i;
            availables.push(root);
            root.getChildren().forEach(function(test) {
                for (i = 0; i < nodes.length; i++) {
                    if (nodes[i] == test) return;
                }
                availables = availables.concat(findAvailableParents(nodes, test));
            });
            return availables;
        }

        this._dropTargets = findAvailableParents(this._dragSources, this._minder.getRoot());
        this._dropTargetBoxes = this._dropTargets.map(function(source) {
            return source.getLayoutBox();
        });
    },

    _calcOrderHints: function() {
        var sources = this._dragSources;
        var ancestor = MinderNode.getCommonAncestor(sources);

        // 只有一个元素选中，公共祖先是其父
        if (ancestor == sources[0]) ancestor = sources[0].parent;

        if (sources.length === 0 || ancestor != sources[0].parent) {
            this._orderHints = [];
            return;
        }

        var siblings = ancestor.children;

        this._orderHints = siblings.reduce(function(hint, sibling) {
            if (sources.indexOf(sibling) == -1) {
                hint = hint.concat(sibling.getOrderHint());
            }
            return hint;
        }, []);
    },

    _leaveDragMode: function() {
        this._dragMode = false;
        this._dropSucceedTarget = null;
        this._orderSucceedHint = null;
        this._renderDropHint(null);
        this._renderOrderHint(null);
        this._minder.rollbackStatus();
    },

    _drawForDragMode: function() {
        this._text.setContent(this._dragSources.length + ' items');
        this._text.setPosition(this._startPosition.x, this._startPosition.y + 5);
        this._minder.getRenderContainer().addShape(this);
    },

    _boxTest: function(targets, targetBoxMapper, judge) {
        var sourceBoxes = this._dragSources.map(function(source) {
            return source.getLayoutBox();
        });

        var i, j, target, sourceBox, targetBox;

        judge = judge || function(intersectBox, sourceBox, targetBox) {
            return intersectBox;
        };

        for (i = 0; i < targets.length; i++) {

            target = targets[i];
            targetBox = targetBoxMapper.call(this, target, i);

            for (j = 0; j < sourceBoxes.length; j++) {
                sourceBox = sourceBoxes[j];

                var intersectBox = GM.getIntersectBox(sourceBox, targetBox);
                if (judge(intersectBox, sourceBox, targetBox)) {
                    return target;
                }
            }
        }

        return null;
    },

    _dropTest: function() {
        this._dropSucceedTarget = this._boxTest(this._dropTargets, function(target, i) {
            return this._dropTargetBoxes[i];
        }, function(intersectBox, sourceBox, targetBox) {
            function area(box) {
                return box.width * box.height;
            }
            if (!intersectBox) return false;
            // 面积判断
            if (area(intersectBox) > 0.5 * Math.min(area(sourceBox), area(targetBox))) return true;
            if (intersectBox.width + 1 >= Math.min(sourceBox.width, targetBox.width)) return true;
            if (intersectBox.height + 1 >= Math.min(sourceBox.height, targetBox.height)) return true;
            return false;
        });
        this._renderDropHint(this._dropSucceedTarget);
        return !!this._dropSucceedTarget;
    },

    _orderTest: function() {
        this._orderSucceedHint = this._boxTest(this._orderHints, function(hint) {
            return hint.area;
        });
        this._renderOrderHint(this._orderSucceedHint);
        return !!this._orderSucceedHint;
    },

    _renderDropHint: function(target) {
        this._dropHinter.render(target);
    },

    _renderOrderHint: function(hint) {
        this._orderHinter.render(hint);
    },
    preventDragMove: function() {
        this._startPosition = null;
    }
});

KityMinder.registerModule('DragTree', function() {
    var dragger;

    return {
        init: function() {
            dragger = new TreeDragger(this);
            window.addEventListener('mouseup', function() {
                dragger.dragEnd();
            });
        },
        events: {
            'normal.mousedown inputready.mousedown': function(e) {
                // 单选中根节点也不触发拖拽
                if (e.originEvent.button) return;
                if (e.getTargetNode() && e.getTargetNode() != this.getRoot()) {
                    dragger.dragStart(e.getPosition(this.getRenderContainer()));
                }
            },
            'normal.mousemove dragtree.mousemove': function(e) {
                dragger.dragMove(e.getPosition(this.getRenderContainer()));
            },
            'normal.mouseup dragtree.beforemouseup': function(e) {
                dragger.dragEnd();
                //e.stopPropagation();
                e.preventDefault();
            },
            'statuschange': function(e) {
                if (e.lastStatus == 'textedit' && e.currentStatus == 'normal') {
                    dragger.preventDragMove();
                }
            }
        },
        commands: {
            'movetoparent': MoveToParentCommand
        }
    };
});
KityMinder.registerModule('KeyboardModule', function() {
    var min = Math.min,
        max = Math.max,
        abs = Math.abs,
        sqrt = Math.sqrt,
        exp = Math.exp;

    function buildPositionNetwork(root) {
        var pointIndexes = [],
            p;
        root.traverse(function(node) {
            p = node.getLayoutBox();

            // bugfix: 不应导航到收起的节点（判断其尺寸是否存在）
            if (p.width && p.height) {
                pointIndexes.push({
                    left: p.x,
                    top: p.y,
                    right: p.x + p.width,
                    bottom: p.y + p.height,
                    width: p.width,
                    height: p.height,
                    node: node,
                    text: node.getText()
                });
            }
        });
        for (var i = 0; i < pointIndexes.length; i++) {
            findClosestPointsFor(pointIndexes, i);
        }
    }

    // 这是金泉的点子，赞！
    // 求两个不相交矩形的最近距离
    function getCoefedDistance(box1, box2) {
        var xMin, xMax, yMin, yMax, xDist, yDist, dist, cx, cy;
        xMin = min(box1.left, box2.left);
        xMax = max(box1.right, box2.right);
        yMin = min(box1.top, box2.top);
        yMax = max(box1.bottom, box2.bottom);

        xDist = xMax - xMin - box1.width - box2.width;
        yDist = yMax - yMin - box1.height - box2.height;

        if (xDist < 0) dist = yDist;
        else if (yDist < 0) dist = xDist;
        else dist = sqrt(xDist * xDist + yDist * yDist);

        return {
            cx: dist,
            cy: dist
        };
    }

    function findClosestPointsFor(pointIndexes, iFind) {
        var find = pointIndexes[iFind];
        var most = {},
            quad;
        var current, dist;

        for (var i = 0; i < pointIndexes.length; i++) {

            if (i == iFind) continue;
            current = pointIndexes[i];

            dist = getCoefedDistance(current, find);

            // left check
            if (current.right < find.left) {
                if (!most.left || dist.cx < most.left.dist) {
                    most.left = {
                        dist: dist.cx,
                        node: current.node
                    };
                }
            }

            // right check
            if (current.left > find.right) {
                if (!most.right || dist.cx < most.right.dist) {
                    most.right = {
                        dist: dist.cx,
                        node: current.node
                    };
                }
            }

            // top check
            if (current.bottom < find.top) {
                if (!most.top || dist.cy < most.top.dist) {
                    most.top = {
                        dist: dist.cy,
                        node: current.node
                    };
                }
            }

            // bottom check
            if (current.top > find.bottom) {
                if (!most.down || dist.cy < most.down.dist) {
                    most.down = {
                        dist: dist.cy,
                        node: current.node
                    };
                }
            }
        }
        find.node._nearestNodes = {
            right: most.right && most.right.node || null,
            top: most.top && most.top.node || null,
            left: most.left && most.left.node || null,
            down: most.down && most.down.node || null
        };
    }

    function navigateTo(km, direction) {
        var referNode = km.getSelectedNode();
        if (!referNode) {
            km.select(km.getRoot());
            buildPositionNetwork(km.getRoot());
            return;
        }
        if (!referNode._nearestNodes) {
            buildPositionNetwork(km.getRoot());
        }
        var nextNode = referNode._nearestNodes[direction];
        if (nextNode) {
            km.select(nextNode, true);
        }
    }

    var NavigateToParentCommand = kity.createClass({
        base: Command,

        execute: function(km) {
            var node = km.getSelectedNode();
            if (node && node.parent) {
                km.select(node.parent, true);
            }
            this.setContentChanged(false);
        },

        queryState: function(km) {
            return km.getSelectedNode() ? 0 : -1;
        },

        enableReadOnly: true
    });

    // 稀释用
    var lastFrame;
    return {
        'commands': {
            'navparent': NavigateToParentCommand
        },
        'commandShortcutKeys': {
            'navparent': 'shift+tab'
        },
        'events': {
            'layoutallfinish': function() {
                var root = this.getRoot();
                buildPositionNetwork(root);
            },
            'normal.keydown readonly.keydown': function(e) {
                var minder = this;
                ['left', 'right', 'up', 'down'].forEach(function(key) {
                    if (e.isShortcutKey(key)) {
                        navigateTo(minder, key == 'up' ? 'top' : key);
                    }
                });
            },
            'normal.keyup': function(e) {
                if (browser.ipad) {
                    var keys = KityMinder.keymap;
                    var node = e.getTargetNode();
                    var lang = this.getLang();

                    if (this.receiver) this.receiver.keydownNode = node;

                    var keyEvent = e.originEvent;

                    if (keyEvent.altKey || keyEvent.ctrlKey || keyEvent.metaKey || keyEvent.shiftKey) return;

                    switch (keyEvent.keyCode) {
                        case keys.Enter:
                            this.execCommand('AppendSiblingNode', lang.topic);
                            e.preventDefault();
                            break;

                        case keys.Backspace:
                        case keys.Del:
                            e.preventDefault();
                            this.execCommand('RemoveNode');
                            break;

                    }
                }

            }
        }
    };
});
KityMinder.registerModule('Select', function() {
    var minder = this;
    var rc = minder.getRenderContainer();
    var g = KityMinder.Geometry;

    // 在实例上渲染框选矩形、计算框选范围的对象
    var marqueeActivator = (function() {

        // 记录选区的开始位置（mousedown的位置）
        var startPosition = null;

        // 选区的图形
        var marqueeShape = new kity.Path();

        // 标记是否已经启动框选状态
        //    并不是 mousedown 发生之后就启动框选状态，而是检测到移动了一定的距离（MARQUEE_MODE_THRESHOLD）之后
        var marqueeMode = false;
        var MARQUEE_MODE_THRESHOLD = 10;

        return {
            selectStart: function(e) {
                // 只接受左键
                if (e.originEvent.button || e.originEvent.altKey) return;

                // 清理不正确状态
                if (startPosition) {
                    return this.selectEnd();
                }

                startPosition = g.snapToSharp(e.getPosition(rc));
            },
            selectMove: function(e) {
                if (minder.getStatus() == 'textedit') {
                    return;
                }
                if (!startPosition) return;

                var p1 = startPosition,
                    p2 = e.getPosition(rc);

                // 检测是否要进入选区模式
                if (!marqueeMode) {
                    // 距离没达到阈值，退出
                    if (g.getDistance(p1, p2) < MARQUEE_MODE_THRESHOLD) {
                        return;
                    }
                    // 已经达到阈值，记录下来并且重置选区形状
                    marqueeMode = true;
                    rc.addShape(marqueeShape);
                    marqueeShape
                        .fill(minder.getStyle('marquee-background'))
                        .stroke(minder.getStyle('marquee-stroke')).setOpacity(0.8).getDrawer().clear();
                }

                var marquee = g.getBox(p1, p2),
                    selectedNodes = [];

                // 使其犀利
                marquee.left = Math.round(marquee.left);
                marquee.top = Math.round(marquee.top);
                marquee.right = Math.round(marquee.right);
                marquee.bottom = Math.round(marquee.bottom);

                // 选区形状更新
                marqueeShape.getDrawer().pipe(function() {
                    this.clear();
                    this.moveTo(marquee.left, marquee.top);
                    this.lineTo(marquee.right, marquee.top);
                    this.lineTo(marquee.right, marquee.bottom);
                    this.lineTo(marquee.left, marquee.bottom);
                    this.close();
                });

                // 计算选中范围
                minder.getRoot().traverse(function(node) {
                    var renderBox = node.getLayoutBox();
                    if (g.getIntersectBox(renderBox, marquee)) {
                        selectedNodes.push(node);
                    }
                });

                // 应用选中范围
                minder.select(selectedNodes, true);

                // 清除多余的东西
                window.getSelection().removeAllRanges();
            },
            selectEnd: function(e) {
                if (startPosition) {
                    startPosition = null;
                }
                if (marqueeMode) {
                    marqueeShape.fadeOut(200, 'ease', 0, function() {
                        if (marqueeShape.remove) marqueeShape.remove();
                    });
                    marqueeMode = false;
                }
            }
        };
    })();

    var lastDownNode = null, lastDownPosition = null;
    return {
        'init': function() {
            window.addEventListener('mouseup', function() {
                marqueeActivator.selectEnd();
            });
        },
        'events': {
            'mousedown': function(e) {

                var downNode = e.getTargetNode();

                // 没有点中节点：
                //     清除选中状态，并且标记选区开始位置
                if (!downNode) {
                    this.removeAllSelectedNodes();
                    marqueeActivator.selectStart(e);

                    this.setStatus('normal');
                }

                // 点中了节点，并且按了 shift 键：
                //     被点中的节点切换选中状态
                else if (e.originEvent.shiftKey) {
                    this.toggleSelect(downNode);
                }

                // 点中的节点没有被选择：
                //     单选点中的节点
                else if (!downNode.isSelected()) {
                    this.select(downNode, true);
                }

                // 点中的节点被选中了，并且不是单选：
                //     完成整个点击之后需要使其变为单选。
                //     不能马上变为单选，因为可能是需要拖动选中的多个节点
                else if (!this.isSingleSelect()) {
                    lastDownNode = downNode;
                    lastDownPosition = e.getPosition(this.getRenderContainer());
                }
            },
            'mousemove': marqueeActivator.selectMove,
            'mouseup': function(e) {
                var upNode = e.getTargetNode();

                // 如果 mouseup 发生在 lastDownNode 外，是无需理会的
                if (upNode && upNode == lastDownNode) {
                    var upPosition = e.getPosition(this.getRenderContainer());
                    var movement = kity.Vector.fromPoints(lastDownPosition, upPosition);
                    if (movement.length() < 1) this.select(lastDownNode, true);
                    lastDownNode = null;
                }

                // 清理一下选择状态
                marqueeActivator.selectEnd(e);
            },
            //全选操作
            'normal.keydown inputready.keydown':function(e){

                if ( e.isShortcutKey('ctrl+a') ){
                    var selectedNodes = [];

                    this.getRoot().traverse(function(node){
                        selectedNodes.push(node);
                    });
                    this.select(selectedNodes,true);
                    e.preventDefault();
                }
            }
        }
    };
});
KityMinder.registerModule('basestylemodule', function() {
    var km = this;

    function getNodeDataOrStyle(node, name) {
        return node.getData(name) || node.getStyle(name);
    }

    KityMinder.TextRenderer.registerStyleHook(function(node, textGroup) {

        var fontWeight = getNodeDataOrStyle(node,'font-weight');
        var fontStyle = getNodeDataOrStyle(node, 'font-style');
        var styleHash = [fontWeight, fontStyle].join('/');

        textGroup.eachItem(function(index,item){
            item.setFont({
                'weight': fontWeight,
                'style': fontStyle
            });
        });

    });
    return {
        'commands': {
            'bold': kity.createClass('boldCommand', {
                base: Command,

                execute: function(km) {

                    var nodes = km.getSelectedNodes();
                    if (this.queryState('bold') == 1) {
                        utils.each(nodes, function(i, n) {
                            n.setData('font-weight').render();
                        });
                    } else {
                        utils.each(nodes, function(i, n) {
                            n.setData('font-weight', 'bold').render();
                        });
                    }
                    km.layout();
                },
                queryState: function() {
                    var nodes = km.getSelectedNodes(),
                        result = 0;
                    if (nodes.length === 0) {
                        return -1;
                    }
                    utils.each(nodes, function(i, n) {
                        if (n && n.getData('font-weight')) {
                            result = 1;
                            return false;
                        }
                    });
                    return result;
                }
            }),
            'italic': kity.createClass('italicCommand', {
                base: Command,

                execute: function(km) {

                    var nodes = km.getSelectedNodes();
                    if (this.queryState('italic') == 1) {
                        utils.each(nodes, function(i, n) {
                            n.setData('font-style').render();
                        });
                    } else {
                        utils.each(nodes, function(i, n) {
                            n.setData('font-style', 'italic').render();
                        });
                    }

                    km.layout();
                },
                queryState: function() {
                    var nodes = km.getSelectedNodes(),
                        result = 0;
                    if (nodes.length === 0) {
                        return -1;
                    }
                    utils.each(nodes, function(i, n) {
                        if (n && n.getData('font-style')) {
                            result = 1;
                            return false;
                        }
                    });
                    return result;
                }
            })
        },
        commandShortcutKeys: {
            'bold': 'ctrl+b', //bold
            'italic': 'ctrl+i' //italic
        }
    };
});
KityMinder.registerModule("fontmodule", function() {
    function getNodeDataOrStyle(node, name) {
        return node.getData(name) || node.getStyle(name);
    }

    KityMinder.TextRenderer.registerStyleHook(function(node, textGroup) {
        var dataColor = node.getData('color');
        var selectedColor = node.getStyle('selected-color');
        var styleColor = node.getStyle('color');

        var foreColor = dataColor || (node.isSelected() && selectedColor ? selectedColor : styleColor);
        var fontFamily = getNodeDataOrStyle(node, 'font-family');
        var fontSize = getNodeDataOrStyle(node, 'font-size');
        var fontHash = [fontFamily, fontSize].join('/');
        
        textGroup.fill(foreColor);
        node.setTmpData('fore-color', foreColor.toString());

        textGroup.eachItem(function(index,item){
            item.setFont({
                'family': fontFamily,
                'size': fontSize
            });
        });
        node.setTmpData('font-hash', fontHash);
    });

    return {
        defaultOptions: {
            'fontfamily': [{
                name: '宋体',
                val: '宋体,SimSun'
            }, {
                name: '微软雅黑',
                val: '微软雅黑,Microsoft YaHei'
            }, {
                name: '楷体',
                val: '楷体,楷体_GB2312,SimKai'
            }, {
                name: '黑体',
                val: '黑体, SimHei'
            }, {
                name: '隶书',
                val: '隶书, SimLi'
            }, {
                name: 'Andale Mono',
                val: 'andale mono'
            }, {
                name: 'Arial',
                val: 'arial,helvetica,sans-serif'
            }, {
                name: 'arialBlack',
                val: 'arial black,avant garde'
            }, {
                name: 'Comic Sans Ms',
                val: 'comic sans ms'
            }, {
                name: 'Impact',
                val: 'impact,chicago'
            }, {
                name: 'Times New Roman',
                val: 'times new roman'
            }, {
                name: 'Sans-Serif',
                val: 'sans-serif'
            }],
            'fontsize': [10, 12, 16, 18, 24, 32, 48]
        },
        "commands": {
            "forecolor": kity.createClass("fontcolorCommand", {
                base: Command,

                execute: function(km, color) {
                    var nodes = km.getSelectedNodes();
                    utils.each(nodes, function(i, n) {
                        n.setData('color', color);
                        n.render();
                    });
                },
                queryState: function(km) {
                    return km.getSelectedNodes().length == 0 ? -1 : 0
                },
                queryValue: function(km) {
                    if (km.getSelectedNodes().length == 1) {
                        return km.getSelectedNodes()[0].getData('color');
                    }
                    return 'mixed';
                }

            }),
            "background": kity.createClass("backgroudCommand", {
                base: Command,

                execute: function(km, color) {
                    var nodes = km.getSelectedNodes();
                    utils.each(nodes, function(i, n) {
                        n.setData('background', color);
                        n.render();
                    });
                },
                queryState: function(km) {
                    return km.getSelectedNodes().length == 0 ? -1 : 0
                },
                queryValue: function(km) {
                    if (km.getSelectedNodes().length == 1) {
                        return km.getSelectedNodes()[0].getData('background');
                    }
                    return 'mixed';
                }

            }),
            "fontfamily": kity.createClass("fontfamilyCommand", {
                base: Command,

                execute: function(km, family) {
                    var nodes = km.getSelectedNodes();
                    utils.each(nodes, function(i, n) {
                        n.setData('font-family', family);
                        n.render();
                        km.layout();
                    });
                },
                queryState: function(km) {
                    return km.getSelectedNodes().length === 0 ? -1 : 0
                },
                queryValue: function(km) {
                    var node = km.getSelectedNode();
                    if (node) return node.getData('font-family');
                    return null;
                }
            }),
            "fontsize": kity.createClass("fontsizeCommand", {
                base: Command,

                execute: function(km, size) {
                    var nodes = km.getSelectedNodes();
                    utils.each(nodes, function(i, n) {
                        n.setData('font-size', size);
                        n.render();
                        km.layout(300);
                    });
                },
                queryState: function(km) {
                    return km.getSelectedNodes().length == 0 ? -1 : 0
                },
                queryValue: function(km) {
                    var node = km.getSelectedNode();
                    if (node) return node.getData('font-size');
                    return null;
                }
            })
        }
    };
});
KityMinder.registerModule('Zoom', function() {
    var me = this;

    var timeline;

    me.setDefaultOptions('zoom', [10, 20, 30, 50, 80, 100, 120, 150, 200]);

    function setTextRendering() {
        var value = me._zoomValue >= 100 ? 'optimize-speed' : 'geometricPrecision';
        me.getRenderContainer().setAttr('text-rendering', value);
    }

    function fixPaperCTM(paper) {
        var node = paper.shapeNode;
        var ctm = node.getCTM();
        var matrix = new kity.Matrix(ctm.a, ctm.b, ctm.c, ctm.d, (ctm.e | 0) + 0.5, (ctm.f | 0) + 0.5);
        node.setAttribute('transform', 'matrix(' + matrix.toString() + ')');
    }

    kity.extendClass(Minder, {
        zoom: function(value) {
            var paper = this.getPaper();
            var viewport = paper.getViewPort();
            viewport.zoom = value / 100;
            viewport.center = {
                x: viewport.center.x,
                y: viewport.center.y
            };
            paper.setViewPort(viewport);
            if (value == 100) fixPaperCTM(paper);
        },
        getZoomValue: function() {
            return this._zoomValue;
        }
    });

    function zoomMinder(minder, value) {
        var paper = minder.getPaper();
        var viewport = paper.getViewPort();

        if (!value) return;

        setTextRendering();

        if (minder.getRoot().getComplex() > 200) {
            minder._zoomValue = value;
            minder.zoom(value);
            minder.fire('viewchange');
        } else {
            var animator = new kity.Animator({
                beginValue: minder._zoomValue,
                finishValue: value,
                setter: function(target, value) {
                    target.zoom(value);
                }
            });
            minder._zoomValue = value;
            if (timeline) {
                timeline.pause();
            }
            timeline = animator.start(minder, 300, 'easeInOutSine');
            timeline.on('finish', function() {
                minder.fire('viewchange');
            });
        }
        minder.fire('zoom', { zoom: value });
    }

    var ZoomCommand = kity.createClass('Zoom', {
        base: Command,
        execute: zoomMinder,
        queryValue: function(minder) {
            return minder._zoomValue;
        }
    });

    var ZoomInCommand = kity.createClass('ZoomInCommand', {
        base: Command,
        execute: function(minder) {
            zoomMinder(minder, this.nextValue(minder));
        },
        queryState: function(minder) {
            return +!this.nextValue(minder);
        },
        nextValue: function(minder) {
            var stack = minder.getOptions('zoom'),
                i;
            for (i = 0; i < stack.length; i++) {
                if (stack[i] > minder._zoomValue) return stack[i];
            }
            return 0;
        },
        enableReadOnly: true
    });

    var ZoomOutCommand = kity.createClass('ZoomOutCommand', {
        base: Command,
        execute: function(minder) {
            zoomMinder(minder, this.nextValue(minder));
        },
        queryState: function(minder) {
            return +!this.nextValue(minder);
        },
        nextValue: function(minder) {
            var stack = minder.getOptions('zoom'),
                i;
            for (i = stack.length - 1; i >= 0; i--) {
                if (stack[i] < minder._zoomValue) return stack[i];
            }
            return 0;
        },
        enableReadOnly: true
    });

    return {
        init: function() {
            this._zoomValue = 100;
            setTextRendering();
        },
        commands: {
            'zoom-in': ZoomInCommand,
            'zoom-out': ZoomOutCommand,
            'zoom': ZoomCommand
        },
        events: {
            'normal.mousewheel readonly.mousewheel': function(e) {
                if (!e.originEvent.ctrlKey && !e.originEvent.metaKey) return;

                var delta = e.originEvent.wheelDelta;
                var me = this;

                if (!kity.Browser.mac) {
                    delta = -delta;
                }

                // 稀释
                if (Math.abs(delta) > 100) {
                    clearTimeout(this._wheelZoomTimeout);
                } else {
                    return;
                }

                this._wheelZoomTimeout = setTimeout(function() {
                    var value;
                    var lastValue = me.getPaper()._zoom || 1;
                    if (delta < 0) {
                        me.execCommand('zoom-in');
                    } else if (delta > 0) {
                        me.execCommand('zoom-out');
                    }
                }, 100);

                e.originEvent.preventDefault();
            }
        },

        commandShortcutKeys: {
            'zoom-in': 'ctrl+=',
            'zoom-out': 'ctrl+-'
        }
    };
});
KityMinder.registerModule("hyperlink", function() {
    var linkShapePath = "M16.614,10.224h-1.278c-1.668,0-3.07-1.07-3.599-2.556h4.877c0.707,0,1.278-0.571,1.278-1.278V3.834 c0-0.707-0.571-1.278-1.278-1.278h-4.877C12.266,1.071,13.668,0,15.336,0h1.278c2.116,0,3.834,1.716,3.834,3.834V6.39 C20.448,8.508,18.73,10.224,16.614,10.224z M5.112,5.112c0-0.707,0.573-1.278,1.278-1.278h7.668c0.707,0,1.278,0.571,1.278,1.278 S14.765,6.39,14.058,6.39H6.39C5.685,6.39,5.112,5.819,5.112,5.112z M2.556,3.834V6.39c0,0.707,0.573,1.278,1.278,1.278h4.877 c-0.528,1.486-1.932,2.556-3.599,2.556H3.834C1.716,10.224,0,8.508,0,6.39V3.834C0,1.716,1.716,0,3.834,0h1.278 c1.667,0,3.071,1.071,3.599,2.556H3.834C3.129,2.556,2.556,3.127,2.556,3.834z";
    return {
        "commands": {
            "hyperlink": kity.createClass("hyperlink", {
                base: Command,

                execute: function(km, url, title) {
                    var nodes = km.getSelectedNodes();
                    utils.each(nodes, function(i, n) {
                        n.setData('hyperlink', url);
                        n.setData('hyperlinkTitle', title);
                        n.render();
                    });
                    km.layout();
                },
                queryState: function(km) {
                    var nodes = km.getSelectedNodes(),
                        result = 0;
                    if (nodes.length === 0) {
                        return -1;
                    }
                    utils.each(nodes, function(i, n) {
                        if (n && n.getData('hyperlink')) {
                            result = 0;
                            return false;
                        }
                    });
                    return result;
                },
                queryValue: function(km) {
                    var node = km.getSelectedNode();
                    return {
                        url: node.getData('hyperlink'),
                        title: node.getData('hyperlinkTitle')
                    };
                }
            }),
            "unhyperlink": kity.createClass("hyperlink", {
                base: Command,

                execute: function(km) {
                    var nodes = km.getSelectedNodes();
                    utils.each(nodes, function(i, n) {
                        n.setData('hyperlink');
                        n.render();
                    });
                    km.layout();
                },
                queryState: function(km) {
                    var nodes = km.getSelectedNodes();

                    if (nodes.length === 0) {
                        return -1;
                    }
                    var link = false;
                    utils.each(nodes, function(i, n) {
                        if (n.getData('hyperlink')) {
                            link = true;
                            return false;
                        }
                    });
                    if (link) {
                        return 0;
                    }
                    return -1;
                }
            })
        },
        'renderers': {
            right: kity.createClass('hyperlinkrender', {
                base: KityMinder.Renderer,

                create: function() {

                    var link = new kity.HyperLink();
                    var linkshape = new kity.Path();
                    var outline = new kity.Rect(24, 22, -2, -6, 4).fill('rgba(255, 255, 255, 0)');


                    linkshape.setPathData(linkShapePath).fill('#666');
                    link.addShape(outline);
                    link.addShape(linkshape);
                    link.setTarget('_blank');
                    link.setStyle('cursor', 'pointer');

                    link.on('mouseover', function() {
                        outline.fill('rgba(255, 255, 200, .8)');
                    }).on('mouseout', function() {
                        outline.fill('rgba(255, 255, 255, 0)');
                    });
                    return link;
                },

                shouldRender: function(node) {
                    return node.getData('hyperlink');
                },

                update: function(link, node, box) {

                    var href = node.getData('hyperlink');
                    link.setHref(href);
                    var title = node.getData('hyperlinkTitle');

                    if (title) {
                        title = [title, '(', href, ')'].join('');
                    } else {
                        title = href;
                    }

                    link.node.setAttributeNS('http://www.w3.org/1999/xlink', 'title', title);

                    var spaceRight = node.getStyle('space-right');

                    link.setTranslate(box.right + spaceRight + 2, -5);
                    return new kity.Box({
                        x: box.right + spaceRight,
                        y: -11,
                        width: 24,
                        height: 22
                    });
                }
            })
        }

    };
});
KityMinder.registerProtocol('plain', function(minder) {
    var LINE_ENDING = '\r',
        LINE_ENDING_SPLITER = /\r\n|\r|\n/,
        TAB_CHAR = '\t';

    function repeat(s, n) {
        var result = '';
        while (n--) result += s;
        return result;
    }

    function encode(json, level) {
        var local = '';
        level = level || 0;
        local += repeat(TAB_CHAR, level);
        local += json.data.text + LINE_ENDING;
        if (json.children) {
            json.children.forEach(function(child) {
                local += encode(child, level + 1);
            });
        }
        return local;
    }

    function isEmpty(line) {
        return !/\S/.test(line);
    }

    function getLevel(line) {
        var level = 0;
        while (line.charAt(level) === TAB_CHAR) level++;
        return level;
    }

    function getNode(line) {
        return {
            data: {
                text: line.replace(new RegExp('^' + TAB_CHAR + '*'), '')
            }
        };
    }

    function decode(local) {
        var json,
            parentMap = {},
            lines = local.split(LINE_ENDING_SPLITER),
            line, level, node;

        function addChild(parent, child) {
            var children = parent.children || (parent.children = []);
            children.push(child);
        }

        for (var i = 0; i < lines.length; i++) {
            line = lines[i];
            if (isEmpty(line)) continue;

            level = getLevel(line);
            node = getNode(line);

            if (level === 0) {
                if (json) {
                    throw new Error('Invalid local format');
                }
                json = node;
            } else {
                if (!parentMap[level - 1]) {
                    throw new Error('Invalid local format');
                }
                addChild(parentMap[level - 1], node);
            }
            parentMap[level] = node;
        }
        return json;
    }

    return {
        fileDescription: '大纲文本',
        fileExtension: '.txt',
        mineType: 'text/plain',
        dataType: 'text',

        encode: function(json) {
            return encode(json, 0);
        },

        decode: function(local) {
            return decode(local);
        },

        recognizePriority: -1
    };
});
/**
 * @fileOverview
 *
 * Markdown 格式导入导出支持
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerProtocol('markdown', function() {
    var LINE_ENDING_SPLITER = /\r\n|\r|\n/;
    var EMPTY_LINE = '';
    var NOTE_MARK_START = '<!--Note-->';
    var NOTE_MARK_CLOSE = '<!--/Note-->';

    function encode(json) {

        return _build(json, 1).join('\n');
    }

    function _build(node, level) {
        var lines = [];

        level = level || 1;

        var sharps = _generateHeaderSharp(level);
        lines.push(sharps + ' ' + node.data.text);
        lines.push(EMPTY_LINE);
        
        var note = node.data.note;
        if (note) {
            var hasSharp = /^#/.test(note);
            if (hasSharp) {
                lines.push(NOTE_MARK_START);
                note = note.replace(/^#+/gm, function($0) {
                    return sharps + $0;
                });
            }
            lines.push(note);
            if (hasSharp) {
                lines.push(NOTE_MARK_CLOSE);
            }
            lines.push(EMPTY_LINE);
        }

        if (node.children) node.children.forEach(function(child) {
            lines = lines.concat(_build(child, level + 1));
        });

        return lines;
    }

    function _generateHeaderSharp(level) {
        var sharps = '';
        while(level--) sharps += '#';
        return sharps;
    }

    function decode(markdown) {

        var json,
            parentMap = {},
            lines, line, lineInfo, level, node, parent, noteProgress, codeBlock;

        // 一级标题转换 `{title}\n===` => `# {title}`
        markdown = markdown.replace(/^(.+)\n={3,}/, function($0, $1) {
            return '# ' + $1;
        });

        lines = markdown.split(LINE_ENDING_SPLITER);

        // 按行分析
        for (var i = 0; i < lines.length; i++) {
            line = lines[i];

            lineInfo = _resolveLine(line);

            // 备注标记处理
            if (lineInfo.noteClose) {
                noteProgress = false;
                continue;
            } else if (lineInfo.noteStart) {
                noteProgress = true;
                continue;
            }

            // 代码块处理
            codeBlock = lineInfo.codeBlock ? !codeBlock : codeBlock;

            // 备注条件：备注标签中，非标题定义，或标题越位
            if (noteProgress || codeBlock || !lineInfo.level || lineInfo.level > level + 1) {
                if (node) _pushNote(node, line);
                continue;
            }

            // 标题处理
            level = lineInfo.level;
            node = _initNode(lineInfo.content, parentMap[level - 1]);
            parentMap[level] = node;
        }

        _cleanUp(parentMap[1]);
        return parentMap[1];
    }

    function _initNode(text, parent) {
        var node = {
            data: {
                text: text,
                note: ''
            }
        };
        if (parent) {
            if (parent.children) parent.children.push(node);
            else parent.children = [node];
        }
        return node;
    }

    function _pushNote(node, line) {
        node.data.note += line + '\n';
    }

    function _isEmpty(line) {
        return !/\S/.test(line);
    }

    function _resolveLine(line) {
        var match = /^(#+)?\s*(.*)$/.exec(line);
        return {
            level: match[1] && match[1].length || null,
            content: match[2],
            noteStart: line == NOTE_MARK_START,
            noteClose: line == NOTE_MARK_CLOSE,
            codeBlock: /^\s*```/.test(line)
        };
    }

    function _cleanUp(node) {
        if (!/\S/.test(node.data.note)) {
            node.data.note = null;
            delete node.data.note;
        } else {
            var notes = node.data.note.split('\n');
            while(notes.length && !/\S/.test(notes[0])) notes.shift();
            while(notes.length && !/\S/.test(notes[notes.length - 1])) notes.pop();
            node.data.note = notes.join('\n');
        }
        if (node.children) node.children.forEach(_cleanUp);
    }

    return {
        fileDescription: 'Markdown/GFM 格式',
        fileExtension: '.md',
        mineType: 'text/markdown',
        dataType: 'text',

        encode: function(json) {
            return encode(json);
        },

        decode: function(markdown) {
            return decode(markdown);
        },

        recognizePriority: -1
    };
});
KityMinder.registerProtocol('json', function(minder) {

    return {
        fileDescription: 'KityMinder 格式',
        fileExtension: '.km',
        dataType: 'text',
        mineType: 'application/json',

        encode: function(json) {
            return JSON.stringify(json);
        },

        decode: function(local) {
            return JSON.parse(local);
        }
    };
});
if (!kity.Browser.ie) {

    KityMinder.registerProtocol('png', function(minder) {

        var DomURL = window.URL || window.webkitURL || window;

        function loadImage(url, callback) {
            return new Promise(function(resolve, reject) {
                var image = document.createElement('img');
                image.onload = function() {
                    resolve(this);
                };
                image.onerror = function(err) {
                    reject(err);
                };
                image.crossOrigin = '';
                image.src = url;
            });
        }

        function getSVGInfo() {
            var paper = minder.getPaper(),
                paperTransform,
                domContainer = paper.container,
                svgXml,
                $svg,

                renderContainer = minder.getRenderContainer(),
                renderBox = renderContainer.getRenderBox(),
                width = renderBox.width + 1,
                height = renderBox.height + 1,

                blob, svgUrl, img;

            // 保存原始变换，并且移动到合适的位置
            paperTransform = paper.shapeNode.getAttribute('transform');
            paper.shapeNode.setAttribute('transform', 'translate(0.5, 0.5)');
            renderContainer.translate(-renderBox.x, -renderBox.y);

            // 获取当前的 XML 代码
            svgXml = paper.container.innerHTML;

            // 回复原始变换及位置
            renderContainer.translate(renderBox.x, renderBox.y);
            paper.shapeNode.setAttribute('transform', paperTransform);

            // 过滤内容
            $svg = $(svgXml).filter('svg');
            $svg.attr({
                width: renderBox.width + 1,
                height: renderBox.height + 1,
                style: 'font-family: Arial, "Microsoft Yahei","Heiti SC";'
            });

            svgXml = $('<div></div>').append($svg).html();

            // Dummy IE
            svgXml = svgXml.replace(' xmlns="http://www.w3.org/2000/svg" xmlns:NS1="" NS1:ns1:xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:NS2="" NS2:xmlns:ns1=""', '');

            // svg 含有 &nbsp; 符号导出报错 Entity 'nbsp' not defined
            svgXml = svgXml.replace(/&nbsp;/g, '&#xa0;');

            blob = new Blob([svgXml], {
                type: 'image/svg+xml'
            });

            svgUrl = DomURL.createObjectURL(blob);

            //svgUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgXml);

            return {
                width: width,
                height: height,
                dataUrl: svgUrl,
                xml: svgXml
            };
        }

        function encode(json) {

            /* 绘制 PNG 的画布及上下文 */
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            /* 尝试获取背景图片 URL 或背景颜色 */
            var bgDeclare = minder.getStyle('background').toString();
            var bgUrl = /url\((.+)\)/.exec(bgDeclare);
            var bgColor = kity.Color.parse(bgDeclare);

            /* 获取 SVG 文件内容 */
            var svgInfo = getSVGInfo();
            var width = svgInfo.width;
            var height = svgInfo.height;
            var svgDataUrl = svgInfo.dataUrl;

            /* 画布的填充大小 */
            var padding = 20;

            canvas.width = width + padding * 2;
            canvas.height = height + padding * 2;

            function fillBackground(ctx, style) {
                ctx.save();
                ctx.fillStyle = style;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();
            }

            function drawImage(ctx, image, x, y) {
                ctx.drawImage(image, x, y);
            }

            function generateDataUrl(canvas) {
                try {
                    var url = canvas.toDataURL('png');
                    return url;
                } catch (e) {
                    throw new Error('当前浏览器版本不支持导出 PNG 功能，请尝试升级到最新版本！');
                }
            }

            function drawSVG() {
                if (typeof(window.canvg) != 'undefined') {
                    return new Promise(function(resolve) {
                        window.canvg(canvas, svgInfo.xml, {
                            ignoreMouse: true, 
                            ignoreAnimation: true, 
                            ignoreDimensions: true, 
                            ignoreClear: true, 
                            offsetX: padding, 
                            offsetY: padding,
                            renderCallback: function() {
                                resolve(generateDataUrl(canvas));
                            } 
                        });
                    });
                } else {
                    return loadImage(svgDataUrl).then(function(svgImage) {
                        drawImage(ctx, svgImage, padding, padding);
                        DomURL.revokeObjectURL(svgDataUrl);
                        return generateDataUrl(canvas);
                    });
                }
            }

            if (bgUrl) {

                return loadImage(bgUrl[1]).then(function(image) {

                    fillBackground(ctx, ctx.createPattern(image, 'repeat'));

                    return drawSVG();

                });

            } else {

                fillBackground(ctx, bgColor.toString());
                return drawSVG();

            }
        }

        return {
            fileDescription: 'PNG 图片',
            fileExtension: '.png',
            mineType: 'image/png',
            dataType: 'base64',
            encode: encode,
            recognizePriority: -1
        };
    });
}
if (!kity.Browser.ie) {

    KityMinder.registerProtocol('svg', function(minder) {

        return {
            fileDescription: 'SVG 矢量图',
            fileExtension: '.svg',
            mineType: 'image/svg+xml',
            dataType: 'text',

            encode: function(json) {

                var paper = minder.getPaper(),
                    paperTransform = paper.shapeNode.getAttribute('transform'),
                    svgXml,
                    $svg,

                    renderContainer = minder.getRenderContainer(),
                    renderBox = renderContainer.getRenderBox(),
                    transform = renderContainer.getTransform(),
                    width = renderBox.width,
                    height = renderBox.height,
                    padding = 20;

                paper.shapeNode.setAttribute('transform', 'translate(0.5, 0.5)');
                svgXml = paper.container.innerHTML;
                paper.shapeNode.setAttribute('transform', paperTransform);

                $svg = $(svgXml).filter('svg');
                $svg.attr({
                    width: width + padding * 2 | 0,
                    height: height + padding * 2 | 0,
                    style: 'font-family: Arial, "Microsoft Yahei",  "Heiti SC"; background: ' + minder.getStyle('background')
                });
                $svg[0].setAttribute('viewBox', [renderBox.x - padding | 0,
                    renderBox.y - padding | 0,
                    width + padding * 2 | 0,
                    height + padding * 2 | 0
                ].join(' '));

                // need a xml with width and height
                svgXml = $('<div></div>').append($svg).html();

                svgXml = $('<div></div>').append($svg).html();

                // svg 含有 &nbsp; 符号导出报错 Entity 'nbsp' not defined
                svgXml = svgXml.replace(/&nbsp;/g, '&#xa0;');

                // svg 含有 &nbsp; 符号导出报错 Entity 'nbsp' not defined
                return svgXml;
            },

            recognizePriority: -1
        };
    });
}
/**
 * @fileOverview
 *
 * KityMinder UI 注册及加载机制
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

(function() {
    var uiQueue = [];

    /* 注册一个新的 UI 交互 */
    KityMinder.registerUI = function(id, deps, ui) {
        if (typeof(deps) == 'function') {
            ui = deps;
            deps = null;
        }
        uiQueue.push({
            id: id,
            ui: ui,
            deps: deps
        });
    };

    kity.extendClass(Minder, {
        /* 为实例注册 UI 交互 */
        initUI: function() {
            var ui = this._ui = {};
            var minder = this;

            uiQueue.forEach(function(uiDeal) {
                var deps = uiDeal.deps;
                if (deps) deps = deps.map(function(dep) {
                    return minder.getUI(dep);
                });
                ui[uiDeal.id] = uiDeal.ui.apply(null, [minder].concat(deps || []));
            });

            // 阻止非脑图事件冒泡
            $('#content-wrapper').delegate('#panel, #tab-container, .fui-dialog, #main-menu', 'keydown keyup', function(e) {
                e.stopPropagation();
            });

            // 阻止非脑图事件冒泡
            $('#content-wrapper').delegate('input', 'mousedown mousemove mouseup contextmenu', function(e) {
                e.stopPropagation();
            });

            minder.getPaper().addClass('loading-target');

            this.fire('interactchange');
            this.fire('uiready');
        },

        /* 获得实例的 UI 实例 */
        getUI: function(id) {
            return this._ui[id];
        }
    });

    $.ajaxSetup({ cache: false });
    $.extend($, {
        pajax: function() {
            return Promise.resolve($.ajax.apply($, arguments));
        }
    });

    // preload css images
    $(function() {
        var list = ["kmcat_warn.png", "kmcat_sad.png", "icons.png", "template_large.png", "history.png", "feedback.png", "iconpriority.png", "iconprogress.png", "template.png", "layout.png", "next-level.png", "prev-level.png"];
        list.forEach(function(item) {
            (new Image()).src = 'ui/theme/default/images/' + item;
        });
    });

})();
/**
 * @fileOverview
 *
 * 简版事件解耦功能
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerUI('eve', function(minder) {
    return {
        setup: function(obj) {
            var callbacks = {};
            
            obj.on = function on(name, callback) {
                var list = callbacks[name] || (callbacks[name] = []);
                list.push(callback);
                return this;
            };
            
            obj.off = function off(name, callback) {
                var list = callbacks[name];
                if (list) {
                    var index = list.indexOf(callback);
                    if (~index) {
                        list.splice(index, 1);
                    } else {
                        callback[name] = null;
                    }
                }
                return this;
            };
            
            obj.once = function once(name, callback) {
                return this.on(name, function wrapped() {
                    callback.apply(obj, arguments);
                    obj.off(name, wrapped);
                });
            };
            
            obj.fire = function fire(name) {
                var list = callbacks[name];
                var args = [].slice.call(arguments, 1);
                if (list) list.forEach(function(callback) {
                    callback.apply(obj, args);
                });
                return this;
            };

            return obj;
        }
    };
});
/**
 * @fileOverview
 *
 * UI 状态记忆
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
KityMinder.registerUI('memory', function () {

    var ls = window.localStorage;
    var memory = ls.uiMemory ? JSON.parse(ls.uiMemory) : {};

    return {
        get: function(item) {
            return memory[item] || null;
        },

        set: function(item, value) {
            memory[item] = value;
            ls.uiMemory = JSON.stringify(memory);
        }
    };
});
/**
 * @fileOverview
 *
 * 拓展 FUI 组件的功能
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

kity.extendClass(FUI.Widget, {
    setEnable: function(value) {
        if (value === false) this.disable();
        else this.enable();
    },

    setActive: function(value) {
        if (value === false) this.removeClass('active');
        else this.addClass('active');
    },

    bindExecution: function(event, fn) {
        var widget = this;
        widget.on(event, function() {
            if (widget.interactFlag) return;
            fn.apply(widget, arguments);
        });
    },

    bindCommandState: function(minder, command, valueHandle) {
        var widget = this;
        minder.on('interactchange', function() {
            widget.interactFlag = true;
            if (valueHandle) {
                var value = this.queryCommandValue(command);
                if (value != widget.lastHandleCommandValue) {
                    valueHandle.call(widget, value);
                    widget.lastHandleCommandValue = value;
                }
            }
            widget.setEnable(this.queryCommandState(command) !== -1);
            widget.setActive(this.queryCommandState(command) === 1);
            widget.interactFlag = false;
        });
    }
});
/**
 * @fileOverview
 *
 * XSS Protection
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
KityMinder.registerUI('axss', function() {
    function axss(value) {
        var div = document.createElement('div');
        div.innerHTML = value;
        $(div).find('script, iframe, link').remove();
        for (var name in div) {
            if (name.indexOf('on') === 0) {
                div.removeAttribute(name);
            }
        }
        return div.innerHTML;
    }
    return axss;
});
/**
 * @fileOverview
 *
 * 通知小组件
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerUI('widget/notice', function (minder) {
    var errorMessage = minder.getLang('error_message');
    var memory = minder.getUI('memory');

    var $notice = $('<div>')
            .addClass('notice-widget')
            .appendTo('#content-wrapper');
    var $mask = $('<div>')
            .addClass('error-mask');

    var $error = new FUI.Dialog({
        width: 500,
        height: 'auto',
        prompt: true,
        caption: errorMessage.title,
        className: 'error-dialog'
    }).appendTo(document.getElementById('content-wrapper'));

    $error.on('ok cancel', function(e) {
        if (error.resolve) error.resolve(e);
    });

    var $error_body = $($error.getBodyElement());

    var isBuilded = (function() {
        var scripts = [].slice.apply(document.getElementsByTagName('script'));
        var s, m;
        while( (s = scripts.pop()) ) {
            if ( (m = /kityminder.*\.min\.js/.exec(s.src))) return m[0];
        }
        return false;

    })();

    // concatMap: sperate files -> join file
    // minMap: join file -> min file
    var concatMap, minMap;
    function fixSourceSymbol($ta, $mask) {

        function fix() {
            var text = $ta.text();
            var pattern = new RegExp('at.+' + isBuilded + '.+\\:(\\d+)\\:(\\d+)\\)?', 'g');
            var match;

            $ta.text(text.replace(pattern, function(match, $1, $2) {
                var lookup = {line: +$1, column: +$2};
                var info = minMap.originalPositionFor(lookup);
                var name = info.name;
                lookup = {line: info.line, column: info.column};
                info = concatMap.originalPositionFor(lookup);
                name = name || '<Anonymous>';
                var replaced = 'at ' + name + ' (' + 
                    info.source.replace('../', '') + ':' + info.line + ':' + info.column + ')';
                if (replaced.indexOf('promise') != -1) {
                    replaced = 'at <async> Promise.' + name;
                }
                return replaced;
            }));
        }

        if (isBuilded) {

            if (concatMap) return fix();

            $mask.addClass('loading');

            setTimeout(function() {
                $mask.removeClass('loading');
            }, 5000);

            var script = document.createElement('script');
            script.onload = function() {
                Promise.all([

                    $.pajax({
                        url: isBuilded.replace('min.js', 'js.map'),
                        dataType: 'json'
                    }), 

                    $.pajax({
                        url: isBuilded.replace('.js', '.map'),
                        dataType: 'json'
                    })

                ]).then(function(files) {
                    concatMap = new window.sourceMap.SourceMapConsumer(files[0]);
                    minMap = new window.sourceMap.SourceMapConsumer(files[1]);
                    fix();
                    $mask.removeClass('loading');
                });
            };
            script.src = 'lib/source-map.min.js';
            document.head.appendChild(script);
        }
    }

    $error_body.delegate('.error-detail a.expander', 'click', function(e) {
        var $detail = $(e.target).closest('.error-detail').toggleClass('expanded');
        var showDetail = $detail.hasClass('expanded');

        memory.set('show-error-detail', showDetail);
    });

    function info(msg, warn, time) {

        if (!$notice.hasClass('show')) $notice.empty();

        clearTimeout(info.ttl2);

        if (warn) $notice.addClass('warn');
        else $notice.removeClass('warn');

        $notice.css({
            top: minder.getUI('menu/menu').isVisible() ? $('#main-menu .main-menu-level1').offset().top : $('#kityminder').offset().top + 20
        });
        $notice.append('<p>' + msg + '</p>');
        $notice.addClass('show');

        clearTimeout(info.ttl);

        time = time || (warn ? 5000 : 3000);
        info.ttl = setTimeout(function() {
            $notice.removeClass('show');
            info.ttl2 = setTimeout(function() {
                $notice.empty();
            }, 1000);
        }, time);
    }

    function warn(msg) {
        info(msg, warn);
    }

    function descriptReason(e) {
        e = e || new Error();

        if (typeof(e) == 'string') {
            e = new Error(e);
        }

        if (e.getDetail) return e;

        // 文件访问错误
        if (typeof(fio) != 'undefined' && (e instanceof fio.FileRequestError)) {
            if (!e.status) {
                e.description = errorMessage.err_network;
            } else {
                e.description = errorMessage.pcs_code[e.detail.error_code];
            }
            e.getDetail = function() {
                return JSON.stringify(e, null, 4);
            };
        } else if (e instanceof Error) {
            e.getDetail = function() {
                return e.stack;
            };
        }

        return e;
    }

    function error(name, e) {
        if (arguments.length == 1) {
            e = name;
            name = 'unknown';
        }
        $error_body.empty();

        e = descriptReason(e);

        var $content = $('<div>')
                .addClass('error-content')
                .appendTo($error_body);

        var $msg = $('<h3>')
                .text(errorMessage[name] || errorMessage.err_unknown)
                .appendTo($content);
        var $reason = $('<p>')
                .text(e.message || e.description || errorMessage.unknownreason)
                .appendTo($content);

        if (e.getDetail) {
            var $detail = $('<div>')
                    .addClass('error-detail')
                    .append($('<a class="expander"></a>').text(minder.getLang('ui.error_detail')))
                    .appendTo($error_body);

            var $detailContent = $('<div>')
                    .addClass('error-detail-wrapper')
                    .appendTo($detail);

            var $textarea = $('<textarea>')
                    .attr('id', 'error-detail-content')
                    .text(e.getDetail() + '\n\n浏览器信息：' + navigator.userAgent)
                    .appendTo($detailContent);

            fixSourceSymbol($textarea, $detailContent);

            var $copy = $('<button>')
                    .addClass('copy-and-feedback')
                    .text(minder.getLang('ui.copy_and_feedback'))
                    .appendTo($detailContent);

            $copy.attr('data-clipboard-target', 'error-detail-content');

            zeroCopy($copy);

            if (memory.get('show-error-detail')) $detail.addClass('expanded');
        }

        $error.show();
        $error.getElement().style.top = '180px';

        return new Promise(function(resolve) {
            error.resolve = resolve;
        });
    }


    function zeroCopy($target) {

        /* global ZeroClipboard:true */

        if (window.ZeroClipboard) {
            ZeroClipboard.config({
                swfPath: 'lib/ZeroClipboard.swf',
                hoverClass: 'hover',
                activeClass: 'active'
            });
            var clip = new window.ZeroClipboard($target);
            clip.on('ready', function () {
                clip.on('aftercopy', function() {
                    $error.hide();
                    minder.getUI('topbar/feedback').click();
                });
            });
        } else {
            $target.remove();
        }
    }
    
    return {
        info: info,
        error: error,
        warn: warn
    };

});
/**
 * @fileOverview
 *
 * 用 FUI.Tabs 实现的多级的创建
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KM.registerUI('widget/menutab', function(minder) {

    function generate(parent, name, asDefault) {
        var index = parent.getButtons().length;
        var tab = parent.appendTab({
            buttons: [{
                label: minder.getLang('ui.menu.' + name + 'tab'),
                className: 'tab-' + name
            }]
        });
        if (asDefault) {
            parent.select(index);
        }
        return tab[0].panel.getContentElement();
    }

    return {
        generate: generate
    };
});
/**
 * @fileOverview
 *
 * 当前文档管理
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerUI('doc', function(minder) {

    var ret = minder.getUI('eve').setup({});
    var current = { saved: true };
    var loading = false;
    var notice = minder.getUI('widget/notice');
    var finder = minder.getUI('widget/netdiskfinder');

    if (finder) finder.on('mv', trackFileMove);

    function trackFileMove(from, to) {

        if (current.source != 'netdisk') return;

        var fromPath = from.split('/');
        var toPath = to.split('/');

        function preCommonLength(a, b) {
            var i = 0;
            while((i in a) && (i in b) && a[i] == b[i]) i++;
            return (i in b) ? 0 : i;
        }


        var originPath = current.path.split('/');
        var clen = preCommonLength(originPath, fromPath);
        if (clen) {
            var movedPath = toPath.concat(originPath.slice(clen));
            current.path = movedPath.join('/');
            current.title = movedPath.pop();
            ret.fire('docchange', current);
        }
    }

    /**
     * 加载文档
     *
     * @param  {Object} doc 文档的属性，可包括：
     *     doc.content  {string} [Required] 文档内容
     *     doc.protocol {string} [Required] 内容所使用的编码协议
     *     doc.title    {string} 文档的标题
     *     doc.source   {string} 文档的来源
     *     doc.path     {string} 文档的路径
     *     doc.saved    {bool}   文档的保存状态
     *
     * @event docload(doc)
     *     doc - 文档解析之后的文档对象
     *
     * @return {Promise<doc>} 返回解析完之后的文档对象，解析的结果为 doc.data
     */
    function load(doc) {
        var restore = doc;

        current = doc;

        loading = true;

        return minder.importData(doc.content, doc.protocol).then(function(data) {

            doc.title = doc.title || minder.getMinderTitle();

            minder.execCommand('camera', minder.getRoot(), 300);

            doc.data = data;
            doc.json = JSON.stringify(data);

            ret.fire('docload', doc);
            ret.fire('docchange', doc);

            return doc;

        })['catch'](function(e) {
            current = restore;
            notice.error('err_doc_resolve', e);
        }).then(function(doc) {
            loading = false;
            if (doc)
                notice.info( minder.getLang('ui.load_success', doc.title ) );
            return doc;
        });
    }

    function save(doc) {
        current = doc;
        doc.data = minder.exportJson();
        doc.json = JSON.stringify(doc.data);
        doc.saved = true;

        ret.fire('docsave', doc);
        ret.fire('docchange', doc);
    }

    function getCurrent() {
        return current;
    }

    function checkSaved(noConfirm) {
        if (!fio.user.current()) return true;
        if (noConfirm) return current.saved;
        return current.saved || window.confirm(minder.getLang('ui.unsavedcontent', '* ' + current.title));
    }

    /* 绕开初始化时候的乱事件 */
    setTimeout(function() {
        minder.on('contentchange', function() {
            if (loading) return;

            if (current.source != 'netdisk') {

                current.title = minder.getMinderTitle();
                current.saved = false;

            } else {
                current.saved = current.json == JSON.stringify(minder.exportJson());
            }

            ret.fire('docchange', current);
        });
    }, 1000);


    ret.load = load;
    ret.save = save;
    ret.current = getCurrent;
    ret.checkSaved = checkSaved;
    
    return ret;
});
/**
 * @fileOverview
 *
 * 查看分享文件
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
KityMinder.registerUI('menu/share/m-share', function (minder) {
    var $doc = minder.getUI('doc');

    function loadShareDoc() {

        var pattern = /(?:shareId|share_id)=(\w+)([&#]|$)/;
        var match = pattern.exec(window.location) || pattern.exec(document.referrer);

        if (!match) return Promise.resolve(null);

        var shareId = match[1];

        function renderShareData(data) {

            if (data.error) {
                window.alert(data.error);
                window.location.href = 'index.html';
                return;
            }

            var content = data.shareMinder.data;

            return $doc.load({

                source: 'share',
                content: content,
                protocol: 'json',
                saved: true,
                ownerId: data.uid,
                ownerName: data.uname

            }).then(function(doc) {
                var $title = minder.getUI('topbar/title');
                $title.setTitle('[分享的] ' + $title.getTitle());
            });
        }

        $('#kityminder').addClass('loading');
        return $.pajax({

            url: 'http://naotu.baidu.com/share.php', //'http://naotu.baidu.com/mongo.php',

            data: {
                action: 'find',
                id: shareId
            },

            dataType: 'json'

        }).then(renderShareData)['catch'](function(e) {

            window.alert('请求分享文件失败，请重试！');

        }).then(function() {

            $(minder.getRenderTarget()).removeClass('loading');
            minder.execCommand('hand');
            $('#kityminder').removeClass('loading');

        });
    }

    minder.on('dblclick', function() {
        minder.execCommand('camera', minder.getRoot(), 500);
    });

    return {
        ready: loadShareDoc()
    };

});
/**
 * @fileOverview
 *
 * 移动端分享页面转换视图按钮
 *
 * @author: zhangbobell
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerUI('topbar/switch-view', function(minder) {
    var $switch = $('<span class="switch-view" id="switch-view">转换</span>').appendTo('#panel');


    $('<div class="back"></div>').appendTo('#m-logo');

    var treeData;
    var $curView=$('<div id="curView">');
    var $preView=$('<div id="preView">');

    minder.on('uiready', function() {
        var shareView = minder.getUI('menu/share/m-share');
        shareView.ready.then(function(){
            treeData = addParentPointer(minder);

            renderNodeData(treeData, minder, $curView);
            renderNodeData(treeData, minder, $preView);
            $('#km-list-view').append($curView);
            $('#km-list-view').append($preView);
            $preView.css('x', '100%');

            $('#km-list-view').css('display', 'none');
        });
    });

    var isListView = false; // mutex : 当前是否是列表视图
    $switch.on('click', function(){
        if (!isListView ){
            $('#kityminder').css('display', 'none');
            $('#km-list-view').css('display', 'block');
            isListView = true;
        } else {
            $('#km-list-view').css('display', 'none');
            $('#kityminder').css('display', 'block');
            isListView = false;
        }
    });


    $('#km-list-view').delegate('li', 'click', function(){
        var preViewData = $(this).data();

        if (preViewData.children) {
            renderNodeData(preViewData, minder, $preView);
//            $curView.css('x');
//            console.log($preView.css('x'));
            $preView.css('x', parseInt($curView.css('x')) + 100 + '%');
//            console.log($preView.css('x'));
//            $('#km-list-view').css('x', '0');
            $('#km-list-view').transition({
                x: parseInt($('#km-list-view').css('x')) - 100 + '%',
                duration: 200,
                easing: 'ease',
                complete: function(){
                    var $temp = $curView;
                    $curView = $preView;
                    $preView = $temp;
                }
            });

            if (preViewData.parent){
                $('.back').css('display', 'block');
                $('#km-cat').css('display', 'none');
            }
        }
    });

    $('.back').on('click', function(){
        var parentViewData = $('.cur-root', $curView).data();
        renderNodeData(parentViewData, minder, $preView);
        $preView.css('x', parseInt($curView.css('x')) - 100 + '%');
//        $curView.css('x');
//        $('#km-list-view').css('x', '-100%');

        $('#km-list-view').transition({
            x: parseInt($('#km-list-view').css('x')) + 100 + '%',
            duration: 200,
            easing: 'ease',
            complete: function(){
                var $temp = $curView;
                $curView = $preView;
                $preView = $temp;
            }
        });

        if (!parentViewData.parent){
            $('.back').css('display', 'none');
            $('#km-cat').css('display', 'block');
        }
    })

    return $switch;
});

/**
 * addParentPointer - 给 minder 的 json 数据增加 parent 指针
 * @param minder - kityminder 实例
 * @returns {*} - 增加了 parent 指针之后的 json 结构
 */
function addParentPointer(minder){
    var root = minder.exportJson();
    return AddParent(root);
}

/**
 * AddParent - 递归的增加 parent 指针
 * @param root - 传入的根节点
 * @returns {*}
 */
function AddParent(root){
    if (root.children){
        $.each(root.children, function(idx, ele){
            ele.parent = root;
            AddParent(ele);
        });
    }
    return root;
}

/**
 * creadNodeData - 根据 json 结构创建好视图的 jQuery 对象
 * @param node
 * @param minder
 * @returns {*} - 创建好的 jQuery 对象
 */
function renderNodeData(node, minder, $target){
    var $curRoot = createRootNode(node, minder);
    var $curList = $('<ul class="cur-list">');

    if (node.children){
        $.each(node.children, function(idx, ele){
            var $listNode = createListNode(ele, minder);
            $curList.append($listNode);
        });
    }

//    debugger;
    return $target.html($curRoot.add($curList));
}

/**
 * createRootNode - 创建当前根节点对应的 jQuery 对象
 * @param node 节点的 jQuery 对象
 * @param minder kityminder 实例
 * @returns {*|jQuery|HTMLElement} 当前根节点的 jQuery 对象
 */
function createRootNode(node, minder){
    var $root = $('<h1 class="cur-root">');
    $root.append(getNodeHtml(node, minder));

    if (node.parent){
        $root.data(node.parent);
    }
    return $root;
}

/**
 * createListNode - 创建子节点对应的 jQuery 对象
 * @param node 节点的 json 对象
 * @param minder kityminder 实例
 * @returns {*|jQuery|HTMLElement} 子节点的 jQuery 对象
 */
function createListNode(node, minder){
    var $list = $('<li>');
    $list.append(getNodeHtml(node, minder));

    // 处理子节点
    if (node.children){
        $list.addClass('clickable');
        $list.children().first().before('<span class="next-level"></span>');
        $list.data(node);
    }

    return $list;
}

/**
 * getNodeHtml - 根据传入节点的 json 对象创建该节点的 html 数据
 * @param node 节点的 json 对象
 * @param minder kityminder 实例
 * @returns {string} 返回的 html 字符串
 */
function getNodeHtml (node, minder){
    var data = node.data;
    var html = '';

    // 处理优先级
    if (data.priority){
        html += '<div class="priority priority-' + data.priority + '"></div>'
    }
    // 处理进度
    if (data.progress){
        html += '<div class="progress progress-' + data.progress + '"></div>'
    }

    // 处理超链接
    if (data.hyperlink) {
        html +='<a class="hyperlink" href="'+ data.hyperlink +'" target="_blank"></a>';
    }
    // 处理资源
    if (data.resource){
        $.each(data.resource, function(idx, ele){
            html += '<span class="resource" style="background-color: '+ minder.getResourceColor(ele).toRGB() +'">' + ele + '</span>' + ' ';
        });
    }

    // 处理文字
    if (data.text) {
        html += '<span class="text">' + (data.text || '') + '</span>';
    }
    return html;
}

/**
 * @fileOverview
 *
 * 移动端分享页面加载 logo 功能
 *
 * @author: zhangbobell
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerUI('topbar/m-logo', function(minder) {
    var $logoSvg = $('<svg id="km-cat" viewBox="0 0 1200 1200" width="32px" height="32px"><g id="cat-face"><path d="M1066.769,368.482L1119.5,80L830,131.611C760.552,97.29,682.35,77.999,599.641,77.999c-82.424,0-160.371,19.161-229.641,53.26L81,81l50.769,289l0,0c-33.792,69.019-52.77,146.612-52.77,228.641c0,287.542,233.099,520.642,520.642,520.642s520.642-233.099,520.642-520.642C1120.282,516.011,1101.028,437.88,1066.769,368.482z"/></g><g id="cat-eye"><path style="fill:#FFFFFF;" d="M920.255,371C794.746,371,693,472.746,693,598.255s101.746,227.255,227.255,227.255s227.255-101.746,227.255-227.255S1045.765,371,920.255,371z M920,746c-80.081,0-145-64.919-145-145s64.919-145,145-145s145,64.919,145,145S1000.081,746,920,746z"/><path style="fill:#FFFFFF;" d="M276.255,371C150.746,371,49,472.746,49,598.255s101.746,227.255,227.255,227.255s227.255-101.746,227.255-227.255S401.765,371,276.255,371z M276,745c-80.081,0-145-64.919-145-145s64.919-145,145-145s145,64.919,145,145S356.081,745,276,745z"/></g></svg>');
    var $mLogo = $logoSvg.appendTo('#m-logo');

    return $mLogo;
});
/**
 * @fileOverview
 *
 * 显示并更新脑图文件的标题
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerUI('topbar/title', function(minder) {
    var $title = $('<h1>').appendTo('#panel');
    var $doc = minder.getUI('doc');
    var finder = minder.getUI('widget/netdiskfinder');
    var notice = minder.getUI('widget/notice');
    var renameEnabled = false;
    var renameMode = false;

    $doc.on('docchange', update);

    $title.on('click', rename);

    function rename() {
        if (!renameEnabled || renameMode) return;

        var doc = $doc.current();

        var $input = $('<input>').width($title.find('.title-content').width());
        var oldFilename = doc.title;
        var oldPath = doc.path;

        $input.val(oldFilename);
        setTimeout(function() {
            $input[0].select();
        });

        $title.addClass('rename-mode');
        $title.empty();
        $title.append($input);

        renameMode = true;

        $input.on('keydown', function(e) {
            if (e.keyCode == 13) confirm();
            else if (e.keyCode == 27) {
                cancel();
                e.stopPropagation();
            }
        }).on('blur', cancel);

        function exit() {
            setTimeout(function() {
                renameMode = false;
            });
        }

        function cancel() {
            update();
            exit();
        }

        function confirm() {
            var newFilename = $input.val();
            var oldFilenameInfo = fio.file.anlysisPath(oldFilename);
            var newFilenameInfo = fio.file.anlysisPath(newFilename);

            if (!newFilenameInfo.name.length) return cancel();

            newFilename = newFilenameInfo.name + oldFilenameInfo.extension;

            var newPath = fio.file.anlysisPath(oldPath).parentPath + newFilename;

            if (newPath == oldPath) return cancel();

            $title.addClass('loading');

            fio.file.move({
                path: oldPath,
                newPath: newPath
            }).then(function() {
                doc.path = newPath;
                doc.title = newFilename;
                finder.fire('mv', oldPath, newPath);
                notice.info(minder.getLang('ui.rename_success', newFilename));
            })['catch'](function(e) {
                notice.error('err_rename', e);
            }).then(function() {
                $title.removeClass('loading');
                update();
                exit();
            });
        }
    }

    function enableRename(enabled) {
        renameEnabled = enabled;
        if (enabled) $title.addClass('rename-enabled');
        else $title.removeClass('rename-enabled');
    }

    function update() {

        var doc = $doc.current();

        function setTitle(title) {
            title = title || minder.getLang('ui.untitleddoc');
            $title.html('<span class="title-content">' + title + '</span>');
            document.title = title ? title + ' - 百度脑图' : '百度脑图';
        }

        if (doc.saved) {
            setTitle(doc.title);
        } else {
            setTitle('* ' + doc.title);
        }

        enableRename(doc.source == 'netdisk' && doc.saved);
    }

    update();

    return {
        $title: $title,

        getTitle: function() {
            return $doc.current().title;
        }
    };
});

})(window)
//# sourceMappingURL=kityminder.m-share.js.map