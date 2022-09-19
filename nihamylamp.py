from collections import Counter




fname = "file12.txt"
# reminder: this is how we generated the files
def make_freqs(fname):
    freqs = Counter()
    with open(fname,'r') as f:
        for line in f:
            freqs.update(line.split())
    return freqs
 
my_frequencies = make_freqs(fname)

# You MUST dump your results to a pickle file for submission
import pickle
# NOTE: you must replace file0 with the name of your file
# Example: if you are working with file3.txt, you would have open('file3.pkl','wb')
with open('file12.pkl','wb') as f: 
    pickle.dump(my_frequencies, f)
# you are to submit your pickle file to the canvas site by 30 minutes past the hour

print(my_frequencies)