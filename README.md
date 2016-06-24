# matpack

A command line tool for quickly starting a new MATLAB package that uses the [Node package manager](https://www.npmjs.com/) (NPM) for its package / dependency management.

# The Big Idea

## Node

[Javascript](https://en.wikipedia.org/wiki/JavaScript) is one of the most widely used programming languages in the world due to the fact that it is one of the 3 core technologies of the internet (the other two are HTML and CSS). [Node](https://en.wikipedia.org/wiki/Node.js) provides a non-browser environment to run javascript.

As such, Node has become the go-to source for developing and collaborating on javascript packages across the world-wide web.

## Package Management

The idea of creating little modular tools that do their job well is common practice in modern programming. The process is straightforward:

1. Develop (write code for) the tool you want to create.
2. Give the tool a version number (e.g. 2.0.1) and bump that version number whenever you modify the tool according to semver standards.
3. Publish that tool so that others can use it in their projects.

In order for the above process to work we need a 3rd party platform that can host copies of the tool to redistribute and that platform needs to be aware of the version of each copy. Unfortunately no such platform exists for MATLAB so with matpack we'll be using NPM to accomplish this.

## Dependency Management

As the community grows and more tools become available and tools get updated we'll start running into dependency problems. This happens when tool1 publishes a version 1.0.0 and then tool2 starts using it. Later tool1 updates a lot and bumps to version 2.0.0. When folks download tool2 they also need to download version 1.0.0 of tool1 *instead of the latest version* in order for tool2 to work properly.

As you can imagine this kind of thing can get quite complex with hundreds of dependencies. This is the second thing that MATLAB is missing and that NPM can provide for us.

# How to use it

Once you have a grasp of basic concepts like modular package development, version control, and package / dependency management you're ready to create your first MATLAB package. This tool is here to provide a skeleton for that package.

1. Install Node
2. `npm install matpack -g`
3. `matpack`

This will bring up a prompt asking for the MATLAB name of your package and the NPM name. The fact that there are two names is a big deal. Unfortunately there is a major conflict between the way NPM handles package names and the way MATLAB handles them. NPM requires that they be URL safe (no special characters in the name like `+`) and MATLAB requires that the folder name begin with a `+` in order to mark it as a package.

The (bad) solution (for now) is to have your npm package rename itself after it installs. For example, if you install a MATLAB package like `Critter`. Then npm will install it with the name `critter` and then rename it to `+Critter` so that MATLAB can use its contents. **This introduces an important problem**: with the original name `critter` now gone, other NPM tools like `prune`, `update`, and `uninstall` will not work because they will not be able to find the package! So please be aware of this problem and send in suggestions to improve the situation here.

Anyways, once you've entered in both names you're done, this package will do the rest of the work for you and you'll have a bonafide NPM / MATLAB package ready to go.

When you want it to go live on the npm servers just give the command `npm publish` (assuming you have a free account set up with them) and voila, people all over the world will be able to instantly use your great MATLAB code!

# Suggestions

This is a totally new and experimental idea, please send me suggestions for how I can improve the learning curve for scientists new to package management or any other aspect of the project!


# Learn More

There is a lot more to learn on the topic of good package design and maintenance. Please read [the npm docs](https://docs.npmjs.com/), the [MATLAB package docs](http://www.mathworks.com/help/matlab/matlab_oop/scoping-classes-with-packages.html), and [google around](https://www.google.com/search?q=reusable%20maintainable%20software%20development) to get into this world of reusable maintainable software development. Your investment in learning this principles will [pay huge dividends](https://en.wikipedia.org/wiki/Technical_debt) throughout your programming life.
