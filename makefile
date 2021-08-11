SRC_DIR = public/data

$(SRC_DIR):
	mkdir -p $@

# The early access data is open, but requires a valid cloud IAM
# TODO(tildechris): Change to curl when the public data is released
Global_vaccination_search_insights.csv: $(SRC_DIR)
	wget --directory-prefix=$(SRC_DIR) https://storage.googleapis.com/covid19-open-data/covid19-vaccination-search-insights/Global_vaccination_search_insights.csv

regions.csv: Global_vaccination_search_insights.csv
	cat $(SRC_DIR)/$< | awk -F',' -v OFS=',' '{ print $$2,$$3,$$4,$$5,$$6,$$7,$$8,$$9,$$10 }' | uniq > $(SRC_DIR)/$@

data: Global_vaccination_search_insights.csv regions.csv