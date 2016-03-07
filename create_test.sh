#!/bin/bash
filename=$1

printf "describe('$outfile', function() {
  it('should', function(done){
    done();
  });
});" > ./tests/helpers/$1
