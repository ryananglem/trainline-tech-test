# Assumptions and notes

I have passed in the name of the station for the line, in this case Farringdon as I didnt think it was clear where this came from

I've put all the code in the index files of the respective file type (eg actions/index), if there were more than one file required, Id have moved it to its own file and exported it through the index. I only did it this way to reduce the number of files in the project

The data gets populated at app startup - if there were more functionality required, this would need to be moved to the component level

The data produces an output that is slightly different to the image provided - ie the train has departed from Crofton Park rather than Nunhead. I have left the data as it was.

My philosophy around testing before starting this exercise was to test only the logic below the components, although here I have added snapshot tests for the components. It was quite useful so as a result I think I may continue to do this.