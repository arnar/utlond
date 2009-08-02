---
layout: page
title: Arnar Birgisson - Projects
---

Projects
========

I'm one of a handful of people behind the
[/dev/collective](http://www.hvergi.net) blog here on hvergi.net, where we try
to provide useful content on programming, computer science, software
engineering and some tech stuff.

CCS in Haskell
--------------

On [this page](/arnar/projects/haskell-ccs/) you can find the Haskell source code
for a rudimentary model checker for CCS and (non-recursive) HML, as well as a
PDF file describing the implementation. The plan is that this can serve as a
basis for myself and other people to experiment with model checking algorithms.

---------

I've also been involved in a few open source efforts. Unfortunately I haven't
found much time for these since starting school again.

PyAMF and RTMPy
---------------

[PyAMF](http://pyamf.org/) is a [Python](http://www.python.org/) implementation
of the [AMF](http://en.wikipedia.org/wiki/Action_Message_Format) (*Action
Message Format*) protocol. AMF is a compact binary protocol designed for
communication between a Flash client and a server. PyAMF enables Python
programmers to act both as clients and servers against other AMF endpoints. It
als includes a generic remoting component for major Python web-platforms that
allows easy RPC between a Flash/Flex client and a Python powered web server.

[RTMPy](http://rtmpy.org/) is a planned implementation of
[RTMP](http://en.wikipedia.org/Real_Time_Messaging_Protocol) (*Real Time
Messaging Protocol*) as a [Twisted](http://twistedmatrix.com/) protocol, built
on top of PyAMF. RTMP provides bi-directional multiplexed data streams between
a client and a server, supporting among others RPC, remote objects and
real-time audio and video streaming.

Pretty much all of the work that goes into these project nowadays is done by my
good friends Thijs Triemstra and Nick Joyce.

Smaller contributions
---------------------

I contributed some code to the [MochiKit](http://mochikit.com/) JavaScript library, namely the
[Selector](http://mochikit.com/doc/html/MochiKit/Selector.html) module, which I ported from
[Prototype](http://www.prototypejs.org/).

I've also left some marks on the [StacklessExamples wiki][StacklessExamples], a repository of
example code for [Stackless Python][Stackless]. Namely, I integrated Richard Tew's socket module
with the [WSGI][WSGI] server from [CherryPy][CherryPy], resulting in [StacklessWSGI][StacklessWSGI], 
a web server that processes each request with a dedicated tasklet.

[StacklessExamples]: http://code.google.com/p/stacklessexamples/
[Stackless]: http://www.stackless.com/
[WSGI]: http://www.python.org/dev/peps/pep-0333/
[CherryPy]: http://www.cherrypy.org/
[StacklessWSGI]: http://code.google.com/p/stacklessexamples/wiki/StacklessWSGI

