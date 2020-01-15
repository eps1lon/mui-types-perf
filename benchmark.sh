#!/bin/bash

runs=$1
command=$2

echo "Meassuring $runs runs of '$command'"

start=`date +%s.%N`
echo "start at $start"

for i in `seq $runs`; do
  eval $command &> /dev/null
  echo "finished #$i"
done

end=`date +%s.%N`
echo "end at $end"

# need `bc` for floating point operations
full_runtime=$(echo "$end - $start" | bc)
# -l to handle as floating point. for some reason "2.1 - 1.0" will use floating
# points but not "2.1 / 1.0"
avg_runtime=$(echo "$full_runtime / $runs" | bc -l)

echo "full runtime: $full_runtime seconds"
echo "$avg_runtime seconds per run"